// src/lib/services/testingService.ts

// НАВІЩО: Цей сервіс надає інструменти для скидання стану додатку під час E2E-тестування.
// Він гарантує, що кожен тест починається з чистого та передбачуваного стану,
// вирішуючи проблему "гонки станів" при паралельному виконанні тестів.

import { animationState } from '$lib/stores/animationState.svelte';
import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
import { availableMovesState } from '$lib/stores/availableMovesState.svelte';
import { boardState } from '$lib/stores/boardState.svelte';
import { gameModeState, initialGameModeState } from '$lib/stores/gameModeState.svelte';
import { gameOverState } from '$lib/stores/gameOverState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { gameStore } from '$lib/stores/gameStore';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { testModeState } from '$lib/stores/testModeState.svelte';
import { timerState } from '$lib/stores/timerState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { uiEffectsStore } from '$lib/stores/uiEffectsStore';
import { replayAutoPlayStore } from '$lib/stores/replayAutoPlayStore';
import { initialUIState } from '$lib/types/uiState';
import { defaultGameSettings } from '$lib/stores/gameSettingsDefaults';

/**
 * Скидає всі стори до їхніх початкових значень та скасовує побічні ефекти.
 * Це ключова функція для забезпечення ізоляції тестів.
 */
export function resetAllStores() {
  // 1. Скасування активних побічних ефектів (таймери, інтервали)
  uiEffectsStore.cancelAllEffects();
  replayAutoPlayStore.cancelAllEffects();

  // 2. Скидання стану сторів (через руни)
  animationState.reset();
  appSettingsState.reset();
  availableMovesState.reset();
  boardState.reset();
  gameModeState.state = { ...initialGameModeState };
  gameOverState.resetGameOverState();
  gameSettingsState.state = { ...defaultGameSettings };
  gameStore.reset();
  playerState.reset();
  scoreState.reset();
  testModeState.state = { 
    isEnabled: false, 
    startPositionMode: 'random', 
    manualStartPosition: null, 
    computerMoveMode: 'random', 
    manualComputerMove: { direction: null, distance: null } 
  };
  timerState.reset();
  uiState.reset();
}
