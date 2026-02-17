<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { WIDGETS } from "$lib/stores/layoutStore";
  import { gameModeService } from "$lib/services/gameModeService";
  import { logService } from "$lib/services/logService";
  import { boardState } from '$lib/stores/boardState.svelte';
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";

  function initVirtualPlayerGame() {
    const bState = boardState.state;
    // Only initialize if there is no game in progress.
    if (!bState || bState.moveHistory.length <= 1) {
      const settings = gameSettingsState.state;
      const selectedMode = settings.gameMode;

      logService.init(
        `[VirtualPlayerPage] onMount: No active game. Initializing mode from settings: "${selectedMode}"`,
      );

      // Use the mode from settings, but have a fallback just in case.
      gameModeService.initializeGameMode(selectedMode || "virtual-player");
    } else {
      logService.init(
        "[VirtualPlayerPage] onMount: Active game found, not re-initializing.",
      );
    }
  }

  let settings = $derived(gameSettingsState.state);

  let widgetFilter = $derived((id: string): boolean => {
    if (id === WIDGETS.PLAYER_TURN_INDICATOR) return false;

    if (
      id === WIDGETS.TIMER &&
      settings.gameMode !== "timed" &&
      settings.gameMode !== "virtual-player-timed"
    ) {
      return false;
    }
    return true;
  });
</script>

<GamePageLayout initLogic={initVirtualPlayerGame} {widgetFilter} />
