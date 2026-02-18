<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { gameController } from "$lib/controllers/GameController.svelte";

  function initTimedGame() {
    gameController.initGame("TimedGamePage", "timed");
  }

  const widgetFilter = (id: string) => gameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initTimedGame} {widgetFilter} />
