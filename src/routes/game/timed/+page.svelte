<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { timedGameController } from "$lib/controllers/TimedGameController.svelte";

  function initTimedGame() {
    timedGameController.init("TimedGamePage");
  }

  const widgetFilter = (id: string) => timedGameController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initTimedGame} {widgetFilter} />
