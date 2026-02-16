/**
 * @file Manages the scoring and points system for the current game.
 * @description Bridge pattern (Read-only): надає доступ до scoreState (Runes) для Svelte 4 компонентів.
 * SSoT — scoreState.svelte.ts (Runes).
 */
import { writable, type Readable } from 'svelte/store';
import { scoreState, type ScoreState, initialScoreState } from './scoreState.svelte';

export type { ScoreState };
export { initialScoreState };

/**
 * Створюємо readable стор, який автоматично оновлюється при зміні scoreState.state (Runes).
 */
function createScoreStore() {
  const { subscribe, set } = writable<ScoreState | null>(scoreState.state);

  // Синхронізація Rune -> Store (Global)
  if (typeof window !== 'undefined') {
    $effect.root(() => {
      $effect(() => {
        set(scoreState.state);
      });
    });
  }

  const store = {
    subscribe,
    // Методи мутації тепер просто перенаправляють виклики в Runes
    set: (value: ScoreState | null) => {
      scoreState.state = value;
      set(value);
    },
    update: (fn: (s: ScoreState | null) => ScoreState | null) => {
      scoreState.update(fn);
      set(scoreState.state);
    },
    addPenalty: (points: number) => {
      scoreState.addPenalty(points);
      set(scoreState.state);
    },
    reset: () => {
      scoreState.reset();
      set(scoreState.state);
    }
  };

  return store as Readable<ScoreState | null> & typeof store;
}

export const scoreStore = createScoreStore();
