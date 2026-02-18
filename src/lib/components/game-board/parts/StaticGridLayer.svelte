<script lang="ts">
  interface Props {
    boardSize: number;
  }

  let { boardSize }: Props = $props();
</script>

<div class="static-grid" style="--board-size: {boardSize}">
  {#each Array(boardSize) as _, rowIdx (rowIdx)}
    {#each Array(boardSize) as _, colIdx (colIdx)}
      <div
        class="board-cell"
        class:light={(rowIdx + colIdx) % 2 === 0}
        class:dark={(rowIdx + colIdx) % 2 !== 0}
        data-testid="board-cell-{rowIdx}-{colIdx}"
      ></div>
    {/each}
  {/each}
</div>

<style>
  .static-grid {
    display: grid;
    grid-template-columns: repeat(var(--board-size), 1fr);
    grid-template-rows: repeat(var(--board-size), 1fr);
    gap: var(--global-border-width);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: none;
  }

  .board-cell {
    width: 100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
  }
</style>
