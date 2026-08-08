<script lang="ts">
  /**
   * @file GameBoard.svelte
   * @description "Dumb" компонент дошки. Не знає про стори чи сервіси.
   * Рендерить ігрове поле на основі отриманих пропсів.
   */
  import StaticGridLayer from "./parts/StaticGridLayer.svelte";
  import EffectsLayer from "./parts/EffectsLayer.svelte";
  import InteractionLayer from "./parts/InteractionLayer.svelte";
  import PiecesLayer from "./parts/PiecesLayer.svelte";
  import InputLayer from "./parts/InputLayer.svelte";
  import type { GameSettingsState } from "$lib/stores/gameSettingsTypes";

  interface Props {
    boardSize: number;
    visualCellVisitCounts: Record<string, number>;
    gameSettings: GameSettingsState;
    availableMoves: Array<{ row: number; col: number; isPenalty: boolean }>;
    showMoves: boolean;
    visualPosition: { row: number; col: number };
    showPiece: boolean;
    // Колбеки для дій
    oncellClick?: (data: { event: MouseEvent; row: number; col: number }) => void;
    oncellRightClick?: (data: { event: MouseEvent; row: number; col: number }) => void;
    customLayers?: import("svelte").Snippet;
  }

  let {
    boardSize,
    visualCellVisitCounts,
    gameSettings,
    availableMoves,
    showMoves,
    visualPosition,
    showPiece,
    oncellClick,
    oncellRightClick,
    customLayers
  }: Props = $props();

</script>

{#key boardSize}
<div
  class="game-board"
  style="--board-size: {boardSize}"
  role="grid"
  data-testid="game-board-container"
>
  <StaticGridLayer {boardSize} />
  
  <EffectsLayer 
    {boardSize} 
    {visualCellVisitCounts} 
    {gameSettings} 
  />

  {@render customLayers?.()}

  <InteractionLayer 
    {boardSize}
    {availableMoves}
    {showMoves}
  />

  <PiecesLayer 
    row={visualPosition.row} 
    col={visualPosition.col} 
    {boardSize} 
    {showPiece}
  />

  <InputLayer 
    {boardSize} 
    {oncellRightClick}
  />
</div>
{/key}

<style>
  .game-board {
    display: grid;
    grid-template-columns: repeat(var(--board-size), 1fr);
    grid-template-rows: repeat(var(--board-size), 1fr);
    gap: var(--global-border-width);
    width: 100%;
    aspect-ratio: 1 / 1;
    position: relative;
    box-sizing: border-box;
    /* transition: transform 0.5s var(--transition-bounce); */
    user-select: none;
    -webkit-user-select: none;
  }
</style>
