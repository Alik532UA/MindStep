/**
 * @file Manages the state of the game board.
 * @description Bridge pattern (Read-only): надає доступ до boardState (Runes) для Svelte 4 компонентів.
 * SSoT — boardState.svelte.ts (Runes).
 */
import { writable, type Readable } from 'svelte/store';
import { boardState, type BoardState } from './boardState.svelte';

export type { BoardState };

/**
 * Створюємо readable стор, який автоматично оновлюється при зміні boardState.state (Runes).
 */
function createBoardStore() {
  const { subscribe, set } = writable<BoardState | null>(boardState.state);

  // Синхронізація Rune -> Store (Global)
  // Це гарантує, що стор завжди має актуальне значення для синхронного доступу через get()
  if (typeof window !== 'undefined') {
    $effect.root(() => {
      $effect(() => {
        set(boardState.state);
      });
    });
  }

  const store = {
    subscribe,
    // Методи мутації тепер просто перенаправляють виклики в Runes
    set: (value: BoardState | null) => {
      boardState.state = value;
      set(value); // Оновлюємо стор миттєво для синхронності
    },
    update: (fn: (s: BoardState | null) => BoardState | null) => {
      boardState.update(fn);
      set(boardState.state);
    },
    reset: () => {
      boardState.reset();
      set(boardState.state);
    },
    movePlayer: (row: number, col: number) => {
      boardState.movePlayer(row, col);
      set(boardState.state);
    },
    incrementVisitCount: (row: number, col: number) => {
      boardState.incrementVisitCount(row, col);
      set(boardState.state);
    },
    resetCellVisitCounts: () => {
      boardState.resetCellVisitCounts();
      set(boardState.state);
    },
  };

  return store as Readable<BoardState | null> & typeof store;
}

export const boardStore = createBoardStore();
