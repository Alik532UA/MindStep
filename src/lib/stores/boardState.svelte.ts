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

    get state() {
        return this._state;
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
        
        // Svelte 5 дозволяє прямі мутації всередині $state об'єктів та масивів
        if (this._state.playerRow !== null && this._state.playerCol !== null) {
            this._state.board[this._state.playerRow][this._state.playerCol] = 0;
        }
        
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
