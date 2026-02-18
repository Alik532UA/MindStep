<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { gameController } from "$lib/controllers/GameController.svelte";

  function initLocalGame() {
    gameController.initGame("LocalGamePage", "local");
  }

  const widgetFilter = (id: string) => gameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initLocalGame} {widgetFilter} />
