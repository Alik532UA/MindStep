<script lang="ts">
  interface Props {
    boardSize: number;
    oncellRightClick?: (data: { event: MouseEvent; row: number; col: number }) => void;
  }

  let { boardSize, oncellRightClick }: Props = $props();

  function handleContextMenu(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const row = target.getAttribute('data-row');
    const col = target.getAttribute('data-col');

    if (row !== null && col !== null) {
      oncellRightClick?.({ 
        event, 
        row: parseInt(row, 10), 
        col: parseInt(col, 10) 
      });
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('input-cell')) return;

    const row = parseInt(target.getAttribute('data-row') || '0', 10);
    const col = parseInt(target.getAttribute('data-col') || '0', 10);

    let nextRow = row;
    let nextCol = col;

    switch (event.key) {
      case 'ArrowUp': nextRow = Math.max(0, row - 1); break;
      case 'ArrowDown': nextRow = Math.min(boardSize - 1, row + 1); break;
      case 'ArrowLeft': nextCol = Math.max(0, col - 1); break;
      case 'ArrowRight': nextCol = Math.min(boardSize - 1, col + 1); break;
      case 'Home': nextCol = 0; break;
      case 'End': nextCol = boardSize - 1; break;
      case 'PageUp': nextRow = 0; break;
      case 'PageDown': nextRow = boardSize - 1; break;
      default: return;
    }

    event.preventDefault();
    const nextCell = target.parentElement?.querySelector(
      `.input-cell[data-row="${nextRow}"][data-col="${nextCol}"]`
    ) as HTMLElement;
    nextCell?.focus();
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
  onkeydown={handleKeyDown}
  role="grid"
  tabindex="-1"
>
      {#each Array(boardSize) as _, rowIdx (rowIdx)}
      {#each Array(boardSize) as _, colIdx (colIdx)}
        <button 
          class="input-cell" 
          data-row={rowIdx}
          data-col={colIdx}
          role="gridcell"
          aria-label={`Клітинка ${rowIdx + 1}, ${colIdx + 1}`}
          title={`Клітинка ${rowIdx + 1}, ${colIdx + 1}`}
          tabindex="0"
        ></button>
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
      background: transparent;
      border: none;
      padding: 0;
      outline-offset: -2px;
      transition: background-color 0.2s;
    }
  
    .input-cell:focus-visible {
      outline: 2px solid var(--control-selected, #fff);
      background-color: rgba(255, 255, 255, 0.1);
    }
  </style>
  
