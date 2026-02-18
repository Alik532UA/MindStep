<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { trainingGameController } from "$lib/controllers/TrainingGameController.svelte";

  function initTrainingGame() {
    trainingGameController.init("TrainingPage");
  }

  const widgetFilter = (id: string) => trainingGameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initTrainingGame} {widgetFilter} />
