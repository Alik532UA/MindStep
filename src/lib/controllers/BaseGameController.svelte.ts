/**
 * @file BaseGameController.svelte.ts
 * @description Базовий клас для контролерів управління ігровим процесом.
 * Визначає спільну логіку для всіх режимів гри.
 */

import { gameModeService } from "$lib/services/gameModeService";
import { logService } from "$lib/services/logService";
import { boardState } from '$lib/stores/boardState.svelte';
import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
import { WIDGETS } from "$lib/stores/layoutState.svelte";

export abstract class BaseGameController {
  // --- State ---
  protected settings = $derived(gameSettingsState.state);
  protected bState = $derived(boardState.state);

  // --- Logic ---

  /**
   * Абстрактний метод для ініціалізації специфічного режиму.
   */
  abstract init(context: string): void;

  /**
   * Спільна логіка ініціалізації гри.
   * @param context Контекст (назва сторінки) для логування.
   * @param mode Режим гри.
   * @param shouldApplyPreset Чи застосовувати пресет налаштувань.
   */
  protected baseInit(context: string, mode: string, shouldApplyPreset: boolean = true) {
    if (!this.bState || this.bState.moveHistory.length <= 1) {
      logService.init(`[${context}] onMount: No active game. Initializing mode: "${mode}"`);
      gameModeService.initializeGameMode(mode, shouldApplyPreset);
    } else {
      logService.init(`[${context}] onMount: Active game found, not re-initializing.`);
    }
  }

  /**
   * Визначає, чи потрібно відображати віджет.
   * Може бути перевизначений у нащадках.
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

    // 2. Індикатор ходу: не показуємо в деяких режимах
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
