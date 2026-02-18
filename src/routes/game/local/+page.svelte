<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { localGameController } from "$lib/controllers/LocalGameController.svelte";

  function initLocalGame() {
    localGameController.init("LocalGamePage");
  }

  const widgetFilter = (id: string) => localGameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initLocalGame} {widgetFilter} />
