// src/lib/stores/uiEffectsState.svelte.ts
import { gameSettingsState } from './gameSettingsState.svelte';
import { logService } from '$lib/services/logService.js';
import { uiState } from './uiState.svelte';
import { gameEventBus } from '$lib/services/gameEventBus';

/**
 * Клас для централізованого керування побічними ефектами UI (таймери, затримки, автоприховування тощо).
 */
class UiEffectsState {
  private autoHideTimeout: ReturnType<typeof setTimeout> | null = null;
  private unsubscribers: (() => void)[] = [];

  /**
   * Автоматично приховати дошку після зміни позиції фігури.
   * @param delayMs - затримка у мілісекундах (за замовчуванням 0)
   */
  autoHideBoard(delayMs = 0, forceHide = true) {
    if (this.autoHideTimeout) clearTimeout(this.autoHideTimeout);

    logService.ui(`Автоприховування дошки запущено з затримкою ${delayMs}ms, forceHide: ${forceHide}`);

    this.autoHideTimeout = setTimeout(() => {
      const settings = gameSettingsState.state;
      if (settings.autoHideBoard && (settings.showBoard === forceHide)) {
        gameSettingsState.toggleShowBoard(!forceHide);
        if (forceHide) {
            uiState.update(s => ({ ...s, showBoardHiddenInfo: true }));
        }
      }
    }, delayMs);
  }

  cancelAllEffects() {
    if (this.autoHideTimeout) {
      clearTimeout(this.autoHideTimeout);
      this.autoHideTimeout = null;
    }
  }

  initEventListeners() {
    this.destroy();
    this.unsubscribers = [
      gameEventBus.subscribe('UI_REQUEST_HIDE_BOARD', (payload) => {
        this.autoHideBoard(payload.delay);
      })
    ];
  }

  destroy() {
    this.unsubscribers.forEach(u => u());
    this.unsubscribers = [];
  }
}

export const uiEffectsState = new UiEffectsState(); 
