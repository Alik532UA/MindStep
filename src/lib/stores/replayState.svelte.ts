// src/lib/stores/replayStoreState.svelte.ts
// SSoT для replay. Svelte 5 Runes.

import type { MoveHistoryEntry } from '$lib/models/moveHistory';

export type AutoPlayDirection = 'paused' | 'forward' | 'backward';

export interface ReplayState {
    isReplayMode: boolean;
    moveHistory: MoveHistoryEntry[];
    boardSize: number;
    replayCurrentStep: number;
    autoPlayDirection: AutoPlayDirection;
    limitReplayPath: boolean;
}

const initialReplayState: ReplayState = {
    isReplayMode: false,
    moveHistory: [],
    boardSize: 4,
    replayCurrentStep: 0,
    autoPlayDirection: 'paused',
    limitReplayPath: true,
};

class ReplayStateRune {
    private _state = $state<ReplayState>({ ...initialReplayState });

    get state() { return this._state; }
    set state(value: ReplayState) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: ReplayState) => ReplayState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    startReplay(moveHistory: MoveHistoryEntry[], boardSize: number) {
        this._state = {
            ...this._state,
            isReplayMode: true,
            moveHistory,
            boardSize,
            replayCurrentStep: 0,
            autoPlayDirection: 'paused'
        };
        this.notifySubscribers();
    }

    stopReplay() {
        this._state = {
            ...this._state,
            isReplayMode: false,
            moveHistory: [],
            autoPlayDirection: 'paused'
        };
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: ReplayState) => void> = new Set();

    subscribe(fn: (s: ReplayState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const replayState = new ReplayStateRune();
