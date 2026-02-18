<script lang="ts">
  import GamePageLayout from "$lib/components/layouts/GamePageLayout.svelte";
  import { virtualPlayerController } from "$lib/controllers/VirtualPlayerController.svelte";

  function initVirtualPlayerGame() {
    virtualPlayerController.init("VirtualPlayerPage");
  }

  const widgetFilter = (id: string) => virtualPlayerController.shouldShowWidget(id);
</script>

<GamePageLayout initLogic={initVirtualPlayerGame} {widgetFilter} />
