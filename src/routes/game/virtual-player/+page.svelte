<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { gameController } from "$lib/controllers/GameController.svelte";

  function initVirtualPlayerGame() {
    gameController.initGame("VirtualPlayerPage", "virtual-player");
  }

  const widgetFilter = (id: string) => gameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initVirtualPlayerGame} {widgetFilter} />
