<script lang="ts">
  import { getDamageClass } from "$lib/utils/boardUtils";
  import { isCellBlocked } from "$lib/logic/availableMovesLogic";
  import type { GameSettingsState } from "$lib/stores/gameSettingsTypes";

  interface Props {
    rowIdx: number;
    colIdx: number;
    visualCellVisitCounts: Record<string, number>;
    gameSettings: GameSettingsState;
    isAvailable: boolean;
    isPenalty?: boolean;
    oncellrightclick?: (data: { event: MouseEvent, row: number, col: number }) => void;
    onclick?: (data: { row: number, col: number }) => void;
  }

  let { 
    rowIdx, 
    colIdx, 
    visualCellVisitCounts, 
    gameSettings, 
    isAvailable, 
    isPenalty = false,
    oncellrightclick,
    onclick
  }: Props = $props();

  function onCellRightClick(event: MouseEvent) {
    if (oncellrightclick) {
        oncellrightclick({ event, row: rowIdx, col: colIdx });
    }
  }

  const blocked = $derived(isCellBlocked(
    rowIdx,
    colIdx,
    visualCellVisitCounts,
    gameSettings,
  ));
  
  const damageClass = $derived(getDamageClass(
    rowIdx,
    colIdx,
    visualCellVisitCounts,
    gameSettings,
  ));
</script>

<div
  class="board-cell {damageClass}"
  class:light={(rowIdx + colIdx) % 2 === 0}
  class:dark={(rowIdx + colIdx) % 2 !== 0}
  class:blocked-cell={blocked}
  class:available={isAvailable}
  aria-label={`Cell ${rowIdx + 1}, ${colIdx + 1}`}
  oncontextmenu={onCellRightClick}
  onclick={() => onclick?.({ row: rowIdx, col: colIdx })}
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onclick?.({ row: rowIdx, col: colIdx });
    }
  }}
  role="gridcell"
  data-testid={`board-cell-${rowIdx}-${colIdx}`}
  tabindex="0"
>
  {#if blocked}
    <!-- Хрест рендериться через CSS -->
  {:else}
    <span class="move-dot" class:is-penalty={isPenalty}></span>
  {/if}
</div>

<style>
  /* Стилі залишаються без змін */
</style>
