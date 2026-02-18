// src/lib/stores/gameOverState.svelte.ts
// SSoT для стану завершення гри. Використовує Svelte 5 Runes.

import type { Player } from '$lib/models/player';

/**
 * Деталі фінального рахунку
 */
export interface FinalScoreDetails {
  baseScore: number;
  totalPenalty: number;
  sizeBonus?: number;
  blockModeBonus?: number;
  jumpBonus?: number;
  noMovesBonus?: number;
  finishBonus?: number;
  distanceBonus?: number;
  totalScore: number;
}

/**
 * Результат гравця (для відображення в модальному вікні)
 */
export interface PlayerScoreResult {
  playerId: number;
  score: number;
  name: string;
  color: string;
}

/**
 * Результат гри (payload для setGameOver)
 */
export interface GameOverPayload {
  scores: PlayerScoreResult[];
  winners: Player[];
  loser: Player | null;
  reasonKey: string;
  reasonValues: Record<string, string | number> | null;
  finalScoreDetails: FinalScoreDetails;
  gameType: 'training' | 'local' | 'timed' | 'online' | 'virtual-player';
}

/**
 * Стан gameOverStore
 */
export interface GameOverStoreState {
  isGameOver: boolean;
  gameResult: GameOverPayload | null;
}

const initialGameOverState: GameOverStoreState = {
    isGameOver: false,
    gameResult: null,
};

class GameOverStateRune {
    private _state = $state<GameOverStoreState>({ ...initialGameOverState });

    get state() {
        return this._state;
    }

    set state(value: GameOverStoreState) {
        this._state = value;
    }

    update(fn: (s: GameOverStoreState) => GameOverStoreState) {
        this._state = fn(this._state);
    }

    setGameOver(result: GameOverPayload) {
        this._state = { ...this._state, isGameOver: true, gameResult: result };
    }

    resetGameOverState() {
        this._state = { ...initialGameOverState };
    }

    clearGameOverState() {
        this._state = { ...initialGameOverState };
    }

    restoreState(newState: GameOverStoreState) {
        this._state = newState;
    }
}

export const gameOverState = new GameOverStateRune();
