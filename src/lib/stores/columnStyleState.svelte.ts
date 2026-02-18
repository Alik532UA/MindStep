// src/lib/stores/columnStyleState.svelte.ts
// SSoT для стилю колонок. Svelte 5 Runes.

export type ColumnStyleMode = 'fixed' | 'flexible';

class ColumnStyleStateRune {
    private _state = $state<ColumnStyleMode>('fixed');

    get state() { return this._state; }
    set state(value: ColumnStyleMode) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: ColumnStyleMode) => ColumnStyleMode) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: ColumnStyleMode) => void> = new Set();

    subscribe(fn: (s: ColumnStyleMode) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const columnStyleState = new ColumnStyleStateRune();
