<script lang="ts">
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import SimpleModalContent from "$lib/components/modals/SimpleModalContent.svelte";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { animationState } from "$lib/stores/animationState.svelte";
  import { derivedState } from "$lib/stores/derivedState.svelte";
  import { logService } from "$lib/services/logService.js";
  import { isCellBlocked } from "$lib/logic/availableMovesLogic";
  import { boardState } from "$lib/stores/boardState.svelte";
  import { uiState } from "$lib/stores/uiState.svelte";
  import BoardHiddenInfoWidget from "./BoardHiddenInfoWidget.svelte";
  import GameBoard from "../game-board/GameBoard.svelte";

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

  const showAvailableMoves = $derived(
    gameSettingsState.state.showMoves &&
    !animationState.state.isAnimating &&
    derivedState.currentPlayer?.type === "human"
  );

  function showBoardClickHint(e: Event) {
    if (e && typeof e.stopPropagation === "function") e.stopPropagation();
    modalStateRune.showModal({
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
            onclick: () => modalStateRune.closeModal(),
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

  // Скидаємо локальний стан, коли дошка з'являється
  $effect(() => {
    if (gameSettingsState.state.showBoard) {
        showHiddenInfoWidget = false;
        // Також синхронізуємо глобальний стан UI, якщо потрібно
        if (uiState.state.showBoardHiddenInfo) {
             uiState.update((s) => ({ ...s, showBoardHiddenInfo: false }));
        }
    }
  });

  function onBoardOutroEnd() {
    // Коли дошка повністю зникла, показуємо віджет (якщо це потрібно глобально)
    if (uiState.state.showBoardHiddenInfo) {
        showHiddenInfoWidget = true;
    }
  }

  function onCellRightClick(data: { event: MouseEvent; row: number; col: number }): void {
    const { event, row, col } = data;
    event.preventDefault();
    const settings = gameSettingsState.state;
    if (
      bState &&
      settings.blockModeEnabled &&
      !(row === bState.playerRow && col === bState.playerCol)
    ) {
      const visualCounts = derivedState.visualCellVisitCounts;
      const blocked = isCellBlocked(row, col, visualCounts, settings);
      logService.ui(
        `${blocked ? "Розблокування" : "Блокування"} клітинки [${row},${col}]`,
      );
    }
  }
</script>

{#if bState}
  {#key bState.boardSize}
    {#if gameSettingsState.state.showBoard}
      <div
        class="board-bg-wrapper game-content-block"
        style="--board-size: {currentBoardSize}"
        onclick={showBoardClickHint}
        onkeydown={handleBoardWrapperKeyDown}
        role="button"
        tabindex="0"
        aria-label="Ігрове поле"
        transition:slideAndScale={{ duration: 500, easing: quintOut }}
        onoutroend={onBoardOutroEnd}
        data-testid="board-wrapper"
      >
        <GameBoard
          boardSize={currentBoardSize}
          visualCellVisitCounts={derivedState.visualCellVisitCounts}
          gameSettings={gameSettingsState.state}
          availableMoves={derivedState.availableMoves}
          showMoves={showAvailableMoves}
          visualPosition={derivedState.visualPosition}
          showPiece={gameSettingsState.state.showPiece}
          oncellRightClick={onCellRightClick}
        />
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
