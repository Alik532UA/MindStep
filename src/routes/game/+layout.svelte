<script lang="ts">
  import { appSettingsState } from "$lib/stores/appSettingsState.svelte";
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { gameModeService } from "$lib/services/gameModeService";
  import { userActionService } from "$lib/services/userActionService";
  import { logService } from "$lib/services/logService.js";
  import { onMount, onDestroy, type Snippet } from "svelte";
  import PlayerColorProvider from "$lib/components/PlayerColorProvider.svelte";
  import hotkeyService from "$lib/services/hotkeyService";
  import { gameState } from "$lib/stores/gameState.svelte";
  import { uiState } from "$lib/stores/uiState.svelte";
  import { boardState } from '$lib/stores/boardState.svelte';
  import { enableAllGameCheckboxesIfNeeded } from "$lib/utils/uiUtils.js";

  import {
    initializeGameHotkeys,
    cleanupGameHotkeys,
    registerGameAction,
  } from "$lib/services/gameHotkeyService";
  import { testModeState } from "$lib/stores/testModeState.svelte";
  import "$lib/services/commandService.ts";
  import { animationService } from "$lib/services/animationService";
  import ErrorBoundary from "$lib/components/ErrorBoundary.svelte";
  import { urlSyncService } from "$lib/services/urlSyncService";

  let { children }: { children: Snippet } = $props();

  // НАВІЩО: Синхронізуємо URL з налаштуваннями стору ТІЛЬКИ коли ми знаходимося 
  // в контексті гри. Це дозволяє Deep Linking працювати без циклів редиректів.
  $effect(() => {
    const settings = gameSettingsState.state;
    urlSyncService.updateUrlFromSettings(settings);
  });

  onDestroy(() => {
    logService.init("[game/+layout] onDestroy called.");
    logService.GAME_MODE(
      "Game layout is being destroyed, cleaning up game mode.",
    );
    const activeGameMode = gameModeService.getCurrentMode();
    if (activeGameMode) {
      activeGameMode.cleanup();
    }
    gameState.reset();
    uiState.reset();
    boardState.reset();
    hotkeyService.popContext();
    cleanupGameHotkeys();
  });

  onMount(() => {
    const bState = boardState.state;

    if (bState) {
      const moveHistory = bState.moveHistory;
      logService.init(
        `[GameLayout] onMount. moveHistory.length is ${moveHistory.length}.`,
      );
      if (moveHistory.length <= 1) {
        logService.init(
          "[GameLayout] onMount: Applying initial settings for new game.",
        );
        enableAllGameCheckboxesIfNeeded();
      }
    } else {
      logService.init(
        "[GameLayout] onMount: boardState is null (game not initialized yet). Skipping initial settings check.",
      );
    }

    hotkeyService.pushContext("game");
    initializeGameHotkeys();

    registerGameAction("auto-hide-board", () => {
      gameSettingsState.toggleAutoHideBoard();
    });
    registerGameAction("toggle-block-mode", () => {
      gameSettingsState.toggleBlockMode();
    });
    registerGameAction("toggle-board", () => {
      gameSettingsState.toggleShowBoard();
    });
    registerGameAction("increase-board", () => {
      const currentSize = gameSettingsState.state.boardSize;
      if (currentSize < 9) {
        userActionService.changeBoardSize(currentSize + 1);
      }
    });
    registerGameAction("decrease-board", () => {
      const currentSize = gameSettingsState.state.boardSize;
      if (currentSize > 2) {
        userActionService.changeBoardSize(currentSize - 1);
      }
    });
    registerGameAction("toggle-speech", () => {
      gameSettingsState.toggleSpeech();
    });

    if (import.meta.env.DEV || testModeState.state.isEnabled) {
      (window as any).userActionService = userActionService;
      (window as any).gameModeService = gameModeService;
      (window as any).appSettingsState = appSettingsState;
      (window as any).gameSettingsState = gameSettingsState;
    }
    animationService.initialize();

    return () => {
      animationService.destroy();
    };
  });
</script>

<!-- FIX: Додано data-testid для головного контейнера ігрової сторінки -->
<div class="game-layout-container" data-testid="game-page-layout">
  <ErrorBoundary>
    {@render children()}
  </ErrorBoundary>
</div>

<PlayerColorProvider />

<style>
  .game-layout-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 24px;
  }
</style>
