<script lang="ts">
  import PlayerPiece from "../PlayerPiece.svelte";

  interface Props {
    row: number | null;
    col: number | null;
    boardSize: number;
    showPiece: boolean;
  }

  let { row, col, boardSize, showPiece }: Props = $props();
</script>

<div class="pieces-layer" style="--board-size: {boardSize}">
  {#if showPiece && row !== null && col !== null}
    <PlayerPiece
      {row}
      {col}
      {boardSize}
    />
  {/if}
</div>

<style>
  .pieces-layer {
    display: grid;
    grid-template-columns: repeat(var(--board-size), 1fr);
    grid-template-rows: repeat(var(--board-size), 1fr);
    gap: var(--global-border-width);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    pointer-events: none;
  }
</style>
