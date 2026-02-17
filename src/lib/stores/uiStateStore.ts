import { writable } from 'svelte/store';
import { gameEventBus } from '$lib/services/gameEventBus';
import { uiState } from './uiState.svelte';
import { initialUIState, type UiState } from '$lib/types/uiState';

export { initialUIState, type UiState };

function createUiStateStore() {
  // Використовуємо writable тільки для підписки, але дані беремо з Rune
  const { subscribe, set: svelteSet, update: svelteUpdate } = writable<UiState>(uiState.state);
  
  let unsubscribers: (() => void)[] = [];

  const syncStore = () => {
    svelteSet(uiState.state);
  };

  return {
    subscribe,
    set: (value: UiState) => {
      uiState.state = value;
      syncStore();
    },
    update: (fn: (s: UiState) => UiState) => {
      uiState.update(fn);
      syncStore();
    },
    reset: () => {
      uiState.reset();
      syncStore();
    },
    setGameOver: (reasonKey: string, reasonValues: Record<string, any> | null = null) => {
      uiState.update(state => ({ 
        ...state, 
        isGameOver: true, 
        gameOverReasonKey: reasonKey, 
        gameOverReasonValues: reasonValues 
      }));
      syncStore();
    },
    /**
     * Ініціалізує слухачів подій для автоматичного оновлення стану.
     */
    initEventListeners: () => {
      unsubscribers.forEach(u => u());
      unsubscribers = [];

      // БІЛЬШІСТЬ ЛОГІКИ ПЕРЕНЕСЕНО В BaseGameMode (Svelte 5 Runes)
      // Залишаємо тільки ті івенти, які не обробляються в GameMode

      unsubscribers.push(
        gameEventBus.subscribe('GameOver', () => {
          uiState.update(s => ({ ...s, selectedDirection: null, selectedDistance: null }));
          syncStore();
        })
      );
    },
    destroy: () => {
      unsubscribers.forEach(u => u());
      unsubscribers = [];
    }
  };
}

export const uiStateStore = createUiStateStore();
