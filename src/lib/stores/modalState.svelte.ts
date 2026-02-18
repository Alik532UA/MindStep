import { logService } from '$lib/services/logService';

/**
 * Тип варіанту відображення модального вікна.
 */
export type ModalVariant = 'standard' | 'menu' | 'glass' | 'classic';

export interface ModalButton {
    text?: string;
    textKey?: string;
    primary?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    customClass?: string;
    isHot?: boolean;
    hotKey?: string;
    dataTestId?: string;
}

export interface ModalContent {
    reason?: string;
    score?: number;
    reasonKey?: string;
    scoreDetails?: unknown;
    isFaq?: boolean;
}

export interface ModalState {
    isOpen: boolean;
    title?: string;
    titleKey?: string;
    content?: string | ModalContent | unknown;
    contentKey?: string;
    buttons: ModalButton[];
    component?: any;
    props?: Record<string, any>;
    closable?: boolean;
    closeOnOverlayClick?: boolean;
    dataTestId?: string;
    customClass?: string;
    titleValues?: Record<string, any>;
    variant: ModalVariant;
    onClose?: () => void;
}

const initialState: ModalState = {
    isOpen: false,
    title: '',
    content: '',
    buttons: [],
    component: null,
    props: {},
    closable: true,
    closeOnOverlayClick: false,
    dataTestId: undefined,
    customClass: undefined,
    variant: 'standard',
    onClose: undefined
};

class ModalStateRune {
    private _state = $state<ModalState>({ ...initialState });
    private modalStack: ModalState[] = [];

    get state() { return this._state; }
    set state(value: ModalState) { this._state = value; }

    /**
     * Показує нове модальне вікно. Якщо вже є відкрите — додає його в стек.
     */
    showModal({ dataTestId, variant = 'standard', ...modalDetails }: Partial<ModalState> & { dataTestId: string }): void {
        if (this._state.isOpen) {
            const sameIdentity =
                (dataTestId && this._state.dataTestId === dataTestId) ||
                (!dataTestId && modalDetails?.titleKey && this._state.titleKey === modalDetails.titleKey);
            
            if (!sameIdentity) {
                this.modalStack.push({ ...this._state });
            } else {
                logService.modal(`[ModalState] showModal: Prevented stacking identical modal '${dataTestId || modalDetails.titleKey}'.`);
            }
        }

        this._state = {
            ...initialState,
            ...modalDetails,
            dataTestId,
            variant,
            isOpen: true,
        };

        logService.modal(`[ModalState] showModal called. New modal: '${this._state.dataTestId || this._state.titleKey}' (${this._state.variant}). Stack size: ${this.modalStack.length}`);
        this.notifySubscribers();
    }

    /**
     * Показує модальне вікно, замінюючи поточне та очищаючи стек.
     */
    showModalAsReplacement(modalDetails: Partial<ModalState>): void {
        logService.modal(`[ModalState] showModalAsReplacement called. Clearing stack and showing new modal: '${modalDetails.dataTestId || modalDetails.titleKey}'.`);
        this.modalStack = [];
        this._state = {
            ...initialState,
            ...modalDetails,
            isOpen: true,
        };
        this.notifySubscribers();
    }

    /**
     * Закриває поточне модальне вікно та відновлює попереднє зі стека (якщо є).
     */
    closeModal(): void {
        logService.modal(`[ModalState] closeModal called. Stack size before action: ${this.modalStack.length}`);
        
        if (this._state.isOpen && this._state.onClose) {
            logService.modal('[ModalState] Calling onClose callback.');
            this._state.onClose();
        }

        if (this.modalStack.length > 0) {
            const previousState = this.modalStack.pop();
            if (previousState) {
                logService.modal(`[ModalState] Popped '${previousState.dataTestId || previousState.titleKey}' from stack. Restoring previous state.`);
                this._state = previousState;
            }
        } else {
            logService.modal('[ModalState] Stack is empty. Resetting to initial state.');
            this.reset();
        }
        this.notifySubscribers();
    }

    /**
     * Закриває всі модальні вікна та очищає стек.
     */
    closeAllModals(): void {
        logService.modal(`[ModalState] closeAllModals called. Clearing stack of size ${this.modalStack.length}.`);
        
        if (this._state.isOpen && this._state.onClose) {
            this._state.onClose();
        }

        this.modalStack = [];
        this.reset();
        this.notifySubscribers();
    }

    update(fn: (s: ModalState) => ModalState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...initialState };
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: ModalState) => void> = new Set();

    subscribe(fn: (s: ModalState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const modalStateRune = new ModalStateRune();
