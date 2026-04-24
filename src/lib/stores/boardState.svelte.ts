// src/lib/stores/boardState.svelte.ts
/**
 * @file boardState.svelte.ts
 * @description Single Source of Truth (SSoT) для стану ігрової дошки.
 * Використовує Svelte 5 Runes.
 * 
 * ВАЖЛИВО: Логічна позиція гравця та лічильники відвідувань завжди 
 * беруться з останнього запису в moveHistory.
 */

import { logService } from "$lib/services/logService.svelte";
import type { MoveHistoryEntry } from '$lib/models/moveHistory';
import type { MoveDirectionType } from '$lib/models/Piece';
import type { Resettable } from '$lib/types/utils';

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

class BoardStateRune implements Resettable {
    private _state = $state<BoardState | null>(null);

    /**
     * Обчислюваний стан дошки.
     * Гарантує, що playerRow, playerCol та cellVisitCounts синхронізовані з moveHistory.
     */
    private _derivedState = $derived.by(() => {
        const s = this._state;
        if (!s) return null;

        const lastHistory = s.moveHistory.at(-1);

        return {
            ...s,
            // Пріоритет віддається даним з історії ходів (логічний стан)
            playerRow: lastHistory?.pos.row ?? s.playerRow,
            playerCol: lastHistory?.pos.col ?? s.playerCol,
            cellVisitCounts: lastHistory?.visits ?? s.cellVisitCounts
        } as BoardState;
    });

    /**
     * Повертає актуальний стан дошки.
     */
    get state() {
        return this._derivedState;
    }

    /**
     * Встановлює повний стан дошки.
     */
    set state(value: BoardState | null) {
        this._state = value;
    }

    /**
     * Метод для сумісності зі старим кодом.
     */
    set(value: BoardState | null) {
        this._state = value;
    }

    /**
     * Оновлює стан за допомогою функції трансформації.
     */
    update(fn: (s: BoardState | null) => BoardState | null) {
        this._state = fn(this._state);
    }

    /**
     * Очищує лічильники відвідувань у поточному стані.
     * Зверніть увагу: це вплине лише на нові записи в історії.
     */
    resetCellVisitCounts() {
        if (!this._state) return;
        logService.state('(boardState) resetCellVisitCounts');
        
        // Створюємо новий порожній об'єкт лічильників
        this._state.cellVisitCounts = {};
        
        // Якщо історія не порожня, ми можемо хотіти оновити останній запис, 
        // але зазвичай це робиться через повне оновлення стану в GameMode.
    }

    /**
     * Скидає стан стору до початкового (null).
     */
    reset() {
        logService.state('(boardState) reset');
        this._state = null;
    }
}

export const boardState = new BoardStateRune();
