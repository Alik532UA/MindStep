/**
 * @file GameController.svelte.ts
 * @description Headless контролер для управління ігровим процесом на сторінках /game/*.
 * Централізує ініціалізацію та фільтрацію віджетів.
 */

import { gameModeService } from "$lib/services/gameModeService";
import { logService } from "$lib/services/logService";
import { boardState } from '$lib/stores/boardState.svelte';
import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
import { WIDGETS } from "$lib/stores/layoutState.svelte";

class GameController {
  // --- State ---
  private settings = $derived(gameSettingsState.state);
  private bState = $derived(boardState.state);

  // --- Logic ---

  /**
   * Ініціалізує гру, якщо вона ще не запущена.
   * @param context Контекст (назва сторінки) для логування.
   * @param defaultMode Режим за замовчуванням, якщо в налаштуваннях порожньо.
   */
  initGame(context: string, defaultMode: string = "local") {
    if (!this.bState || this.bState.moveHistory.length <= 1) {
      const modeToInit = this.settings.gameMode || defaultMode;
      
      logService.init(`[${context}] onMount: No active game. Initializing mode: "${modeToInit}"`);

      // Для локального режиму іноді не треба скидати налаштування пресетів
      const shouldApplyPreset = context !== "LocalGamePage" || !["observer", "beginner", "experienced", "pro"].includes(this.settings.gameMode || "");
      
      gameModeService.initializeGameMode(modeToInit, shouldApplyPreset);
    } else {
      logService.init(`[${context}] onMount: Active game found, not re-initializing.`);
    }
  }

  /**
   * Визначає, чи потрібно відображати віджет.
   * @param id ID віджета.
   * @returns boolean
   */
  shouldShowWidget(id: string): boolean {
    const mode = this.settings.gameMode;

    // 1. Таймер: показуємо тільки в timed режимах
    if (id === WIDGETS.TIMER) {
      const isTimedMode = mode === "timed" || mode === "virtual-player-timed";
      const isObserver = mode === "local-observer" || mode === "observer";
      return isTimedMode && !isObserver;
    }

    // 2. Індикатор ходу: не показуємо в деяких режимах (наприклад, проти ШІ)
    if (id === WIDGETS.PLAYER_TURN_INDICATOR) {
        if (mode === 'online' || (mode && mode.startsWith('online-'))) return true;
        
        const isVirtualPlayer = (mode && mode.startsWith('virtual-player')) || 
                                mode === 'beginner' || 
                                mode === 'experienced' || 
                                mode === 'pro' ||
                                mode === 'timed';
        if (isVirtualPlayer) return false;
    }

    return true;
  }
}

export const gameController = new GameController();
