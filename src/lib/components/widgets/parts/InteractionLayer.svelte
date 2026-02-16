<script lang="ts">
  import type { MoveDirectionType } from "$lib/models/Piece";

  export let boardSize: number;
  export let availableMoves: Array<{ row: number; col: number; isPenalty: boolean }>;
  export let showMoves: boolean;

  $: movesMap = showMoves 
    ? availableMoves.reduce((acc, move) => {
        acc[`${move.row}-${move.col}`] = move;
        return acc;
      }, {} as Record<string, { isPenalty: boolean }>)
    : {};
</script>

<div class="interaction-layer" style="--board-size: {boardSize}">
  {#each Array(boardSize) as _, rowIdx}
    {#each Array(boardSize) as _, colIdx}
      {@const move = movesMap[`${rowIdx}-${colIdx}`]}
      <div class="cell-interaction">
        {#if move}
          <span class="move-dot" class:is-penalty={move.isPenalty}></span>
        {/if}
      </div>
    {/each}
  {/each}
</div>

<style>
  .interaction-layer {
    display: grid;
    grid-template-columns: repeat(var(--board-size), 1fr);
    grid-template-rows: repeat(var(--board-size), 1fr);
    gap: var(--global-border-width);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    pointer-events: none;
  }

  .cell-interaction {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .move-dot {
    width: 12px;
    height: 12px;
    background-color: #2ecc71 !important; /* Green */
    border-radius: 50%;
    border: var(--global-border-width) solid rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .move-dot.is-penalty {
    background-color: #e74c3c !important; /* Red */
  }
</style>
