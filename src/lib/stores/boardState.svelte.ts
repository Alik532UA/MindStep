// src/lib/stores/boardState.svelte.ts
// SSoT для стану ігрової дошки. Використовує Svelte 5 Runes.

import { logService } from '$lib/services/logService';
import type { MoveHistoryEntry } from '$lib/models/moveHistory';
import type { MoveDirectionType } from '$lib/models/Piece';

export interface BoardState {
  boardSize: number;
  board: number[][];
  playerRow: number | null;
  playerCol: number | null;
  cellVisitCounts: Record<string, number>;
  moveHistory: MoveHistoryEntry[];
  moveQueue: Array<{ 
    player: number; 
    direction: MoveDirectionType; 
    distance: number; 
    to: { row: number; col: number } 
  }>;
}

class BoardStateRune {
    private _state = $state<BoardState | null>(null);

    // Створюємо єдиний стабільний derived стан
    private _derivedState = $derived.by(() => {
        const s = this._state;
        if (!s) return null;

        return {
            ...s,
            // Використовуємо замикання на 's', щоб гарантувати правильні посилання
            get playerRow() { return s.moveHistory.at(-1)?.pos.row ?? null; },
            get playerCol() { return s.moveHistory.at(-1)?.pos.col ?? null; },
            get cellVisitCounts() { return s.moveHistory.at(-1)?.visits ?? {}; }
        } as BoardState;
    });

    get state() {
        return this._derivedState;
    }

    set state(value: BoardState | null) {
        this._state = value;
    }

    set(value: BoardState | null) {
        this._state = value;
    }

    update(fn: (s: BoardState | null) => BoardState | null) {
        this._state = fn(this._state);
    }

    movePlayer(row: number, col: number) {
        logService.piece(`(boardState) movePlayer to [${row}, ${col}]`);
        if (!this._state) return;
        
        const oldRow = this._state.playerRow;
        const oldCol = this._state.playerCol;

        if (oldRow !== null && oldCol !== null) {
            this._state.board[oldRow][oldCol] = 0;
        }
        
        // ВАЖЛИВО: Ми все ще дозволяємо мутацію для сумісності з анімаціями,
        // але тепер derived властивості мають пріоритет у 'state' гетері.
        this._state.playerRow = row;
        this._state.playerCol = col;
        this._state.board[row][col] = 1;
    }

    incrementVisitCount(row: number, col: number) {
        if (!this._state) return;
        const key = `${row}-${col}`;
        
        // Пряма мутація властивості об'єкта
        if (!this._state.cellVisitCounts[key]) {
            this._state.cellVisitCounts[key] = 1;
        } else {
            this._state.cellVisitCounts[key]++;
        }
    }

    resetCellVisitCounts() {
        if (!this._state) return;
        // Очищуємо об'єкт без створення нового кореневого об'єкта стану
        for (const key in this._state.cellVisitCounts) {
            delete this._state.cellVisitCounts[key];
        }
    }

    reset() {
        this._state = null;
    }
}

export const boardState = new BoardStateRune();
