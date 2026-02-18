import { logService } from '$lib/services/logService';

export interface HotkeyData {
    text: string;
    singleChar: boolean;
}

export interface TooltipData {
    title?: string;
    hotkeys: HotkeyData[];
}

export interface TooltipState {
    isVisible: boolean;
    content: string | TooltipData;
    x: number;
    y: number;
    timeoutId: ReturnType<typeof setTimeout> | null;
    ownerNode: HTMLElement | null;
}

const initialState: TooltipState = {
    isVisible: false,
    content: '',
    x: 0,
    y: 0,
    timeoutId: null,
    ownerNode: null,
};

class TooltipStateRune {
    private _state = $state<TooltipState>({ ...initialState });

    get state() { return this._state; }
    set state(value: TooltipState) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: TooltipState) => TooltipState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...initialState };
        this.notifySubscribers();
    }

    scheduleShow(content: string | TooltipData, x: number, y: number, delay: number, ownerNode: HTMLElement): void {
        this.cancelScheduledShow();
        const timeoutId = setTimeout(() => {
            logService.tooltip('[TooltipState] setTimeout callback. Checking owner node...', ownerNode);
            if (ownerNode && document.body.contains(ownerNode)) {
                logService.tooltip('[TooltipState] Owner node is still in DOM. Showing tooltip.');
                this._state = { ...this._state, isVisible: true, content, x, y, timeoutId: null };
            } else {
                logService.tooltip('[TooltipState] Owner node is NOT in DOM. Aborting tooltip show.');
                this._state = { ...this._state, timeoutId: null, ownerNode: null };
            }
            this.notifySubscribers();
        }, delay);

        this._state = { ...this._state, timeoutId, content, x, y, ownerNode };
        this.notifySubscribers();
        logService.tooltip('[TooltipState] show scheduled', { content, x, y, delay, ownerNode });
    }

    private cancelScheduledShow(): void {
        if (this._state.timeoutId) {
            clearTimeout(this._state.timeoutId);
            this._state.timeoutId = null;
            this._state.ownerNode = null;
            logService.tooltip('[TooltipState] Canceled scheduled show');
        }
    }

    move(x: number, y: number): void {
        this._state.x = x;
        this._state.y = y;
        this.notifySubscribers();
    }

    hide(): void {
        logService.tooltip('[TooltipState] hide called');
        this.cancelScheduledShow();
        this.reset();
    }

    hideIfOwner(ownerNode: HTMLElement): void {
        if (this._state.isVisible && this._state.ownerNode === ownerNode) {
            logService.tooltip('[TooltipState] hideIfOwner called for matching owner. Hiding.', ownerNode);
            this.reset();
        }
    }

    cancelForOwner(ownerNode: HTMLElement): void {
        if (this._state.timeoutId && this._state.ownerNode === ownerNode) {
            logService.tooltip('[TooltipState] cancelForOwner called for matching owner. Canceling.', ownerNode);
            this.cancelScheduledShow();
            this.reset();
        }
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: TooltipState) => void> = new Set();

    subscribe(fn: (s: TooltipState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const tooltipState = new TooltipStateRune();
export { initialState as tooltipInitialState };
