<script lang="ts">
  import { gameSettingsStore } from "$lib/stores/gameSettingsStore.js";
  import SimpleModalContent from "$lib/components/modals/SimpleModalContent.svelte";
  import { modalStore } from "$lib/stores/modalStore";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { animationStore } from "$lib/stores/animationStore.js";
  import {
    visualPosition,
    visualCellVisitCounts,
    availableMoves,
    currentPlayer,
  } from "$lib/stores/derivedState.ts";
  import { derived, get } from "svelte/store";
  import PlayerPiece from "./PlayerPiece.svelte";
  import { logService } from "$lib/services/logService.js";
  import { isCellBlocked } from "$lib/utils/boardUtils.ts";
  import { boardState } from "$lib/stores/boardState.svelte";
  import { uiStateStore } from "$lib/stores/uiStateStore";
  import BoardHiddenInfoWidget from "./BoardHiddenInfoWidget.svelte";
  import StaticGridLayer from "./parts/StaticGridLayer.svelte";
  import EffectsLayer from "./parts/EffectsLayer.svelte";
  import InteractionLayer from "./parts/InteractionLayer.svelte";
  import PiecesLayer from "./parts/PiecesLayer.svelte";
  import InputLayer from "./parts/InputLayer.svelte";

  // SSoT: Використовуємо стан з Runes
  const bState = $derived(boardState.state);
  const currentBoardSize = $derived(bState?.boardSize ?? 0);

  function slideAndScale(node: HTMLElement, params: any) {
    const slideTransition = slide(node, params);
    return {
      duration: params.duration,
      easing: params.easing,
      css: (t: number, u: number) => {
        const originalCss = slideTransition.css
          ? slideTransition.css(t, u)
          : "";
        const fixedCss = originalCss.replace(
          /min-height:\s*0;?/,
          "min-height: 0px;",
        );
        return `
          ${fixedCss}
          transform-origin: top center;
          transform: scale(${t});
        `;
      },
    };
  }

  const showAvailableMoves = derived(
    [gameSettingsStore, animationStore, currentPlayer],
    ([$gameSettingsStore, $animationStore, $currentPlayer]) => {
      return (
        $gameSettingsStore.showMoves &&
        !$animationStore.isAnimating &&
        $currentPlayer?.type === "human"
      );
    },
  );

  function showBoardClickHint(e: Event) {
    if (e && typeof e.stopPropagation === "function") e.stopPropagation();
    modalStore.showModal({
      component: SimpleModalContent,
      variant: "menu",
      dataTestId: "board-click-modal",
      props: {
        titleKey: "modal.boardClickTitle" as const,
        contentKey: "modal.boardClickContent" as const,
        actions: [
          {
            labelKey: "modal.ok" as const,
            variant: "primary",
            isHot: true,
            onclick: () => modalStore.closeModal(),
            dataTestId: "board-click-ok-btn",
          },
        ],
      },
    });
  }

  function handleBoardWrapperKeyDown(event: KeyboardEvent) {
    if (event.code === "Enter" || event.code === "Space") {
      showBoardClickHint(event);
    }
  }

  let showHiddenInfoWidget = $state(false);

  $effect(() => {
    if (!$gameSettingsStore.showBoard && $uiStateStore.showBoardHiddenInfo) {
      setTimeout(() => {
        showHiddenInfoWidget = true;
      }, 500);
    } else {
      showHiddenInfoWidget = false;
    }
  });

  function onCellRightClick(event: MouseEvent, row: number, col: number): void {
    event.preventDefault();
    const settings = get(gameSettingsStore);
    if (
      bState &&
      settings.blockModeEnabled &&
      !(row === bState.playerRow && col === bState.playerCol)
    ) {
      const visualCounts = get(visualCellVisitCounts) as Record<string, number>;
      const blocked = isCellBlocked(row, col, visualCounts, settings);
      logService.ui(
        `${blocked ? "Розблокування" : "Блокування"} клітинки [${row},${col}]`,
      );
    }
  }

  $effect(() => {
    if ($gameSettingsStore.showBoard && $uiStateStore.showBoardHiddenInfo) {
      uiStateStore.update((s) => ({ ...s, showBoardHiddenInfo: false }));
    }
  });
</script>

{#if bState}
  {#key bState.boardSize}
    {#if $gameSettingsStore.showBoard}
      <div
        class="board-bg-wrapper game-content-block"
        style="--board-size: {currentBoardSize}"
        onclick={showBoardClickHint}
        onkeydown={handleBoardWrapperKeyDown}
        role="button"
        tabindex="0"
        aria-label="Ігрове поле"
        transition:slideAndScale={{ duration: 500, easing: quintOut }}
        data-testid="board-wrapper"
      >
        <div
          class="game-board"
          style="--board-size: {currentBoardSize}"
          role="grid"
          data-testid="game-board"
        >
          <StaticGridLayer boardSize={currentBoardSize} />
          
          <EffectsLayer 
            boardSize={currentBoardSize} 
            visualCellVisitCounts={$visualCellVisitCounts} 
            gameSettings={$gameSettingsStore} 
          />

          <InteractionLayer 
            boardSize={currentBoardSize}
            availableMoves={$availableMoves}
            showMoves={$showAvailableMoves}
          />

          <PiecesLayer 
            row={$visualPosition.row} 
            col={$visualPosition.col} 
            boardSize={currentBoardSize} 
            showPiece={$gameSettingsStore.showPiece}
          />

          <InputLayer 
            boardSize={currentBoardSize} 
            on:cellRightClick={(e) => onCellRightClick(e.detail.event, e.detail.row, e.detail.col)}
          />
        </div>
      </div>
    {:else if showHiddenInfoWidget}
      <div
        transition:slide={{ duration: 400, easing: quintOut }}
        data-testid="board-hidden-info-container"
      >
        <BoardHiddenInfoWidget />
      </div>
    {/if}
  {/key}
{/if}

<style>
  /* Стилі залишаються без змін */
</style>
