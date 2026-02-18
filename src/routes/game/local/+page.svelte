<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { WIDGETS } from "$lib/stores/layoutState.svelte";
  import { gameModeService } from "$lib/services/gameModeService";
  import { logService } from "$lib/services/logService";
  import { boardState } from '$lib/stores/boardState.svelte';
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";

  function initLocalGame() {
    const bState = boardState.state;
    if (!bState || bState.moveHistory.length <= 1) {
      const currentSettings = gameSettingsState.state;
      const preservedPresets = ["observer", "beginner", "experienced", "pro"];

      if (
        currentSettings.gameMode &&
        preservedPresets.includes(currentSettings.gameMode)
      ) {
        logService.init(
          `[LocalGamePage] onMount: Preserving existing preset "${currentSettings.gameMode}" for local game.`,
        );
        // Initialize 'local' mode logic, but DO NOT apply default 'local' settings
        // This keeps the settings selected in Local Setup (Observer/Robber/etc.)
        gameModeService.initializeGameMode("local", false);
      } else {
        logService.init(
          '[LocalGamePage] onMount: No specific preset found, initializing default "local" mode.',
        );
        gameModeService.initializeGameMode("local");
      }
    } else {
      logService.init(
        "[LocalGamePage] onMount: Active game found, not re-initializing.",
      );
    }
  }

  function filterWidgets(id: string): boolean {
    // Local observer mode should not have a timer
    const settings = gameSettingsState.state;
    if (
      id === WIDGETS.TIMER &&
      (settings.gameMode === "local-observer" ||
        settings.gameMode === "observer")
    ) {
      return false;
    }
    return true;
  }
</script>

<GamePageLayout initLogic={initLocalGame} widgetFilter={filterWidgets} />
