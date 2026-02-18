// src/lib/stores/testModeState.svelte.ts
// SSoT для тестового режиму. Svelte 5 Runes.

import { logService } from '$lib/services/logService';

export type PositionMode = 'random' | 'predictable' | 'manual';
export type ComputerMoveMode = 'random' | 'manual';

export interface TestModeState {
    isEnabled: boolean;
    startPositionMode: PositionMode;
    manualStartPosition: { x: number; y: number } | null;
    computerMoveMode: ComputerMoveMode;
    manualComputerMove: {
        direction: string | null;
        distance: number | null;
    };
}

const initialTestState: TestModeState = {
    isEnabled: false,
    startPositionMode: 'random',
    manualStartPosition: null,
    computerMoveMode: 'random',
    manualComputerMove: {
        direction: null,
        distance: null,
    },
};

class TestModeStateRune {
    private _state = $state<TestModeState>({ ...initialTestState });

    get state() { return this._state; }
    set state(value: TestModeState) {
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: TestModeState) => TestModeState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    toggle() {
        const isEnabled = !this._state.isEnabled;
        logService.testMode(`[TestModeState] toggle() called. New state: ${isEnabled ? 'ON' : 'OFF'}`);

        if (isEnabled) {
            this._state = {
                ...this._state,
                isEnabled: true,
                startPositionMode: 'manual',
                manualStartPosition: { x: 0, y: 0 },
                computerMoveMode: 'manual',
                manualComputerMove: { direction: 'down', distance: 1 }
            };
        } else {
            this._state = {
                ...this._state,
                isEnabled: false,
                startPositionMode: 'random',
                manualStartPosition: null,
                computerMoveMode: 'random',
                manualComputerMove: { direction: null, distance: null }
            };
        }
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: TestModeState) => void> = new Set();

    subscribe(fn: (s: TestModeState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const testModeState = new TestModeStateRune();
