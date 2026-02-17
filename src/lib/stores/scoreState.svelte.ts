// src/lib/stores/scoreState.svelte.ts
// SSoT для стану рахунку. Використовує Svelte 5 Runes.

export interface ScoreState {
  penaltyPoints: number;
  movesInBlockMode: number;
  jumpedBlockedCells: number;
  noMovesBonus: number;
  distanceBonus: number;
}

export const initialScoreState: ScoreState = {
    penaltyPoints: 0,
    movesInBlockMode: 0,
    jumpedBlockedCells: 0,
    noMovesBonus: 0,
    distanceBonus: 0,
};

class ScoreStateRune {
    private _state = $state<ScoreState | null>(null);

    get state() {
        return this._state;
    }

    set state(value: ScoreState | null) {
        this._state = value;
    }

    set(value: ScoreState | null) {
        this._state = value;
    }

    update(fn: (s: ScoreState | null) => ScoreState | null) {
        this._state = fn(this._state);
    }

    addPenalty(points: number) {
        if (!this._state) return;
        this._state.penaltyPoints += points;
    }

    reset() {
        this._state = null;
    }
}

export const scoreState = new ScoreStateRune();
