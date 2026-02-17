<script lang="ts">
  import { isCellBlocked, getDamageClass } from "$lib/utils/boardUtils";
  import type { GameSettingsState } from "$lib/stores/gameSettingsStore";

  interface Props {
    boardSize: number;
    visualCellVisitCounts: Record<string, number>;
    gameSettings: GameSettingsState;
  }

  let { boardSize, visualCellVisitCounts, gameSettings }: Props = $props();
</script>

<div class="effects-layer" style="--board-size: {boardSize}">
  {#each Array(boardSize) as _, rowIdx (rowIdx)}
    {#each Array(boardSize) as _, colIdx (colIdx)}
      {@const blocked = isCellBlocked(rowIdx, colIdx, visualCellVisitCounts, gameSettings)}
      {@const damageClass = getDamageClass(rowIdx, colIdx, visualCellVisitCounts, gameSettings)}
      <div 
        class="board-cell {damageClass}" 
        class:blocked-cell={blocked}
      >
      </div>
    {/each}
  {/each}
</div>

<style>
  .effects-layer {
    display: grid;
    grid-template-columns: repeat(var(--board-size), 1fr);
    grid-template-rows: repeat(var(--board-size), 1fr);
    gap: var(--global-border-width);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
  }

  .board-cell {
    width: 100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
  }
</style>
