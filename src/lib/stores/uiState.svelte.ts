import { initialUIState, type UiState } from '$lib/types/uiState';

class UiStateRune {
    private _state = $state<UiState>(initialUIState);

    get state() {
        return this._state;
    }

    set state(value: UiState) {
        this._state = value;
        this.notifySubscribers();
    }

    // Допоміжні методи для зручності
    update(fn: (s: UiState) => UiState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...initialUIState };
        this.notifySubscribers();
    }

    requestGameModeModal() {
        this._state.shouldShowGameModeModalOnLoad = true;
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: UiState) => void> = new Set();

    subscribe(fn: (s: UiState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const uiState = new UiStateRune();
