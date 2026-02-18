// src/lib/stores/layoutUpdateState.svelte.ts
// SSoT для тригеру оновлення лейауту. Svelte 5 Runes.

class LayoutUpdateStateRune {
    private _state = $state<number>(0);

    get state() { return this._state; }
    set state(value: number) { 
        this._state = value;
        this.notifySubscribers();
    }
    trigger() { 
        this._state++;
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: number) => void> = new Set();

    subscribe(fn: (s: number) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const layoutUpdateState = new LayoutUpdateStateRune();
