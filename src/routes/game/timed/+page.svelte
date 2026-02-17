<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { WIDGETS } from "$lib/stores/layoutStore";
  import { gameModeService } from "$lib/services/gameModeService";
  import { logService } from "$lib/services/logService";
  import { boardState } from '$lib/stores/boardState.svelte';

  function initTimedGame() {
    const bState = boardState.state;
    if (!bState || bState.moveHistory.length <= 1) {
      logService.init(
        '[TimedGamePage] onMount: No active game found, initializing "timed" mode.',
      );
      gameModeService.initializeGameMode("timed");
    } else {
      logService.init(
        "[TimedGamePage] onMount: Active game found, not re-initializing.",
      );
    }
  }

  function filterWidgets(id: string): boolean {
    // У режимі на час не показуємо індикатор ходу гравця (бо гравець один)
    return id !== WIDGETS.PLAYER_TURN_INDICATOR;
  }
</script>

<GamePageLayout initLogic={initTimedGame} widgetFilter={filterWidgets} />
