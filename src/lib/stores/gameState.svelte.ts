// src/lib/stores/gameState.svelte.ts
// SSoT для стану гри (зберігає активний GameMode). Використовує Svelte 5 Runes.

import type { BaseGameMode } from '$lib/game-modes/BaseGameMode';

export interface GameStoreState {
    mode: BaseGameMode | null;
}

class GameStateRune {
    private _state = $state<GameStoreState>({ mode: null });

    get state() {
        return this._state;
    }

    set state(value: GameStoreState) {
        this._state = value;
        this.notifySubscribers();
    }

    setMode(mode: BaseGameMode) {
        this._state = { ...this._state, mode };
        this.notifySubscribers();
    }

    reset() {
        this._state = { mode: null };
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: GameStoreState) => void> = new Set();

    subscribe(fn: (s: GameStoreState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const gameState = new GameStateRune();
