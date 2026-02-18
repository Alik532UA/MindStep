<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { gameController } from "$lib/controllers/GameController.svelte";

  function initTrainingGame() {
    gameController.initGame("TrainingPage", "training");
  }

  const widgetFilter = (id: string) => gameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initTrainingGame} {widgetFilter} />
