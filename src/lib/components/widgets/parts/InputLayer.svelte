<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let boardSize: number;

  const dispatch = createEventDispatcher();

  function handleContextMenu(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const row = target.getAttribute('data-row');
    const col = target.getAttribute('data-col');

    if (row !== null && col !== null) {
      dispatch("cellRightClick", { 
        event, 
        row: parseInt(row, 10), 
        col: parseInt(col, 10) 
      });
    }
  }
</script>

<!-- 
  НАВІЩО: Використовуємо делегування подій (один обробник на весь контейнер).
  Це значно зменшує кількість слухачів подій у пам'яті, особливо на великих дошках.
-->
<div 
  class="input-layer" 
  style="--board-size: {boardSize}"
  oncontextmenu={handleContextMenu}
>
  {#each Array(boardSize) as _, rowIdx (rowIdx)}
    {#each Array(boardSize) as _, colIdx (colIdx)}
      <div 
        class="input-cell" 
        data-row={rowIdx}
        data-col={colIdx}
        role="gridcell"
        aria-label="Cell {rowIdx + 1}, {colIdx + 1}"
        tabindex="-1"
      ></div>
    {/each}
  {/each}
</div>

<style>
  .input-layer {
    display: grid;
    grid-template-columns: repeat(var(--board-size), 1fr);
    grid-template-rows: repeat(var(--board-size), 1fr);
    gap: var(--global-border-width);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .input-cell {
    width: 100%;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    box-sizing: border-box;
  }
</style>
