/**
 * @file Manages the state of the game board.
 * @description Bridge pattern (Read-only): надає доступ до boardState (Runes) для Svelte 4 компонентів.
 * SSoT — boardState.svelte.ts (Runes).
 */
// src/lib/stores/boardStore.ts
import { derived, type Readable } from 'svelte/store';
import { boardState } from './boardState.svelte';
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

/**
 * Створюємо readable стор, який автоматично оновлюється при зміні boardState.state (Runes).
 * Це забезпечує SSoT і прибирає потребу в ручній синхронізації.
 */
function createBoardStore() {
  // Використовуємо dummy стор, який ніколи не оновлюється сам по собі, 
  // але derived стор буде слухати boardState.state (хоча derived працює зі сторами).
  
  // В Svelte 5 ми можемо перетворити Rune на Store за допомогою `readable` з функцією ініціалізації
  // або просто використовувати derived від іншого стору.
  // Але оскільки boardState.state - це Rune, найкраще використовувати `readable` 
  // з ефектом, який оновлює значення.
  
  // Проте, найпростіший шлях для Bridge:
  return {
    subscribe: (fn: (v: BoardState | null) => void) => {
      // Створюємо ефект, який викликає підписку при зміні стану
      const cleanup = $effect.root(() => {
        $effect(() => {
          fn(boardState.state);
        });
      });
      return cleanup;
    },
    // Методи мутації тепер просто перенаправляють виклики в Runes
    set: (value: BoardState | null) => {
      boardState.state = value;
    },
    update: (fn: (s: BoardState | null) => BoardState | null) => {
      boardState.update(fn);
    },
    reset: () => {
      boardState.reset();
    },
    movePlayer: (row: number, col: number) => {
      boardState.movePlayer(row, col);
    },
    incrementVisitCount: (row: number, col: number) => {
      boardState.incrementVisitCount(row, col);
    },
    resetCellVisitCounts: () => {
      boardState.resetCellVisitCounts();
    },
  };
}

export const boardStore = createBoardStore();
