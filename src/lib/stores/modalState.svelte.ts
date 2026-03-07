import { logService } from '$lib/services/logService';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

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
    get isOpen() { return this._state.isOpen; }

    /**
     * Відкриває модальне вікно через URL.
     * Це рекомендований спосіб для системних меню (Single Source of Truth).
     */
    open(modalId: string): void {
        logService.modal(`[ModalState] open requested for '${modalId}'. Updating URL.`);
        this.updateUrl(modalId);
    }

    /**
     * Показує нове модальне вікно вручну. 
     * Використовуйте для динамічних вікон (напр. GameOver), які не потребують Deep Linking.
     */
    showModal({ dataTestId, variant = 'standard', ...modalDetails }: Partial<ModalState> & { dataTestId: string }): void {
        if (this._state.isOpen && this._state.dataTestId !== dataTestId) {
            this.modalStack.push({ ...this._state });
        }

        this._state = {
            ...initialState,
            ...modalDetails,
            dataTestId,
            variant,
            isOpen: true,
        };

        logService.modal(`[ModalState] showModal: '${dataTestId}'. Stack: ${this.modalStack.length}`);
        
        // Оновлюємо URL лише якщо це системна модалка (є в реєстрі)
        this.trySyncUrl(dataTestId);
        this.notifySubscribers();
    }

    /**
     * Спроба оновити URL, якщо модалка системна.
     */
    private async trySyncUrl(modalId: string) {
        const { MODAL_REGISTRY } = await import('$lib/config/modalRegistry');
        if (MODAL_REGISTRY[modalId]) {
            this.updateUrl(modalId);
        }
    }

    private updateUrl(modalId: string | undefined): void {
        if (!browser) return;
        
        const url = new URL(window.location.href);
        const currentModal = url.searchParams.get('modal');

        if (modalId && currentModal !== modalId) {
            url.searchParams.set('modal', modalId);
            logService.modal(`[ModalState] Navigating to ?modal=${modalId}`);
            goto(url.toString(), { replaceState: false, keepFocus: true, noScroll: true });
        } else if (!modalId && currentModal) {
            url.searchParams.delete('modal');
            logService.modal(`[ModalState] Removing modal from URL`);
            goto(url.toString(), { replaceState: true, keepFocus: true, noScroll: true });
        }
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
        
        if (modalDetails.dataTestId) {
            this.trySyncUrl(modalDetails.dataTestId);
        }
        
        this.notifySubscribers();
    }

    /**
     * Відновлює стан модальних вікон з реєстру на основі URL.
     */
    async syncWithUrl(url: URL): Promise<void> {
        const modalId = url.searchParams.get('modal');
        
        if (!modalId) {
            if (this._state.isOpen) {
                // Перевіряємо, чи поточна модалка була з реєстру
                const { MODAL_REGISTRY } = await import('$lib/config/modalRegistry');
                if (this._state.dataTestId && MODAL_REGISTRY[this._state.dataTestId]) {
                    logService.modal(`[ModalState] URL sync: Closing system modal '${this._state.dataTestId}'`);
                    this.reset();
                    this.notifySubscribers();
                }
            }
            return;
        }

        if (this._state.dataTestId === modalId) return;

        const { MODAL_REGISTRY } = await import('$lib/config/modalRegistry');
        const modalConfig = MODAL_REGISTRY[modalId];

        if (modalConfig) {
            logService.modal(`[ModalState] URL sync: Restoring '${modalId}' from registry.`);
            this._state = {
                ...initialState,
                ...modalConfig,
                dataTestId: modalId,
                isOpen: true,
            };
            this.notifySubscribers();
        }
    }

    closeModal(): void {
        if (this._state.onClose) this._state.onClose();

        if (this.modalStack.length > 0) {
            this._state = this.modalStack.pop()!;
        } else {
            this.reset();
        }

        this.updateUrl(undefined);
        this.notifySubscribers();
    }

    closeAllModals(): void {
        if (this._state.onClose) this._state.onClose();
        this.modalStack = [];
        this.reset();
        this.updateUrl(undefined);
        this.notifySubscribers();
    }

    /**
     * Оновлює стан модального вікна за допомогою функції трансформації.
     */
    update(fn: (s: ModalState) => ModalState): void {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...initialState };
    }

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
