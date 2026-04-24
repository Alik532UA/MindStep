// src/lib/stores/animationState.svelte.ts
// SSoT для стану анімацій. Використовує Svelte 5 Runes.
// Обгортку для Svelte 4 (writable) надає animationStore.ts (bridge pattern).
//
// ВАЖЛИВО: Анімації — це ВИКЛЮЧНО візуальний шар.
// Вони НЕ впливають на ігрову логіку та center-info.

import { logService } from "../services/logService.svelte";
import type { MoveDirectionType } from '$lib/models/Piece';

/**
 * Рух для візуалізації анімації
 */
export interface AnimationMove {
  player: number;
  direction: MoveDirectionType;
  distance: number;
  row?: number;
  col?: number;
  to?: { row: number; col: number };
}

export interface AnimationState {
  isAnimating: boolean;
  gameId: number;
  currentAnimation: AnimationMove | null;
  visualMoveQueue: AnimationMove[];
  animationQueue: AnimationMove[];
  isPlayingAnimation: boolean;
  isComputerMoveCompleted: boolean;
}

const initialAnimationState: AnimationState = {
    isAnimating: false,
    gameId: Date.now(),
    currentAnimation: null,
    visualMoveQueue: [],
    animationQueue: [],
    isPlayingAnimation: false,
    isComputerMoveCompleted: true,
};

class AnimationStateRune {
    private _state = $state<AnimationState>({ ...initialAnimationState });

    get state() {
        return this._state;
    }

    set state(value: AnimationState) {
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: AnimationState) => AnimationState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    reset() {
        logService.animation('AnimationState: reset()');
        this._state = { ...initialAnimationState, gameId: Date.now() };
        this.notifySubscribers();
    }

    getInitialState(): AnimationState {
        return { ...initialAnimationState };
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: AnimationState) => void> = new Set();

    subscribe(fn: (s: AnimationState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const animationState = new AnimationStateRune();
