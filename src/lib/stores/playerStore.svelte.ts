/**
 * @file Manages the state of the players in the game.
 * @description Bridge pattern (Read-only): надає доступ до playerState (Runes) для Svelte 4 компонентів.
 * SSoT — playerState.svelte.ts (Runes).
 */
import { writable, type Readable } from 'svelte/store';
import { playerState, type PlayerState } from './playerState.svelte';

export type { PlayerState };

/**
 * Створюємо readable стор, який автоматично оновлюється при зміні playerState.state (Runes).
 */
function createPlayerStore() {
  const { subscribe, set } = writable<PlayerState | null>(playerState.state);

  // Синхронізація Rune -> Store (Global)
  // Використовуємо функцію, яку викличемо при ініціалізації додатка або тут через ефект
  if (typeof window !== 'undefined') {
    $effect.root(() => {
      $effect(() => {
        set(playerState.state);
      });
    });
  }

  const store = {
    subscribe,
    // Методи мутації тепер просто перенаправляють виклики в Runes
    set: (value: PlayerState | null) => {
      playerState.state = value;
      set(value);
    },
    update: (fn: (s: PlayerState | null) => PlayerState | null) => {
      playerState.update(fn);
      set(playerState.state);
    },
    setCurrentPlayer: (index: number) => {
      playerState.setCurrentPlayer(index);
      set(playerState.state);
    },
    reset: () => {
      playerState.reset();
      set(playerState.state);
    }
  };

  return store as Readable<PlayerState | null> & typeof store;
}

export const playerStore = createPlayerStore();
