<script lang="ts">
  import { writable, get } from "svelte/store";
  import ReplayControls from "./ReplayControls.svelte";
  import {
    replayPosition as calculateReplayPosition,
    replayCellVisitCounts as calculateReplayCellVisitCounts,
    replaySegments as calculateReplaySegments,
    replayBlockModeEnabled as calculateReplayBlockModeEnabled,
  } from "$lib/utils/replay.js";
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { onMount } from "svelte";
  import { replayAutoPlayState } from "$lib/stores/replayAutoPlayState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import StyledButton from "$lib/components/ui/StyledButton.svelte";
  import GameBoard from "./game-board/GameBoard.svelte";

  const settings = $derived(gameSettingsState.state);

  // Props
  let {
    moveHistory,
    boardSize,
    autoPlayForward = false,
    onClose,
  } = $props<{
    moveHistory: any[];
    boardSize: number;
    autoPlayForward?: boolean;
    onClose?: () => void; // Новий проп
  }>();

  onMount(() => {
    if (autoPlayForward) {
      setTimeout(() => {
        toggleAutoPlay("forward");
      }, 1000);
    }
  });

  const replayState = writable({
    isReplayMode: true,
    moveHistory,
    boardSize,
    replayCurrentStep: 0,
    autoPlayDirection: "paused" as "paused" | "forward" | "backward",
    limitReplayPath: true,
  });

  const replayPosition = calculateReplayPosition(replayState);
  const replayCellVisitCounts = calculateReplayCellVisitCounts(replayState);
  const replaySegments = calculateReplaySegments(replayState);
  const replayBlockModeEnabled = calculateReplayBlockModeEnabled(replayState);

  function goToStep(step: number) {
    replayState.update((s) => ({
      ...s,
      replayCurrentStep: Math.max(0, Math.min(step, s.moveHistory.length - 1)),
    }));
  }

  function toggleAutoPlay(direction: "forward" | "backward") {
    const currentReplayState = get(replayState);
    replayAutoPlayState.toggleAutoPlay(
      direction,
      currentReplayState,
      (updates) => replayState.update(s => ({ ...s, ...updates })),
      goToStep
    );
  }

  function toggleLimitPath() {
    replayState.update((s) => ({ ...s, limitReplayPath: !s.limitReplayPath }));
  }
</script>

<!-- FIX: Додано data-testid та структуру меню -->
<div class="replay-viewer-content" data-testid="replay-viewer-panel">
  <h2
    class="modal-title-menu"
    data-testid="replay-modal-title"
    data-i18n-key="replay.title"
  >
    {$t("replay.title")}
  </h2>

  <div
    class="board-bg-wrapper game-content-block"
    style="--board-size: {boardSize}"
  >
    <GameBoard
      {boardSize}
      visualCellVisitCounts={$replayCellVisitCounts}
      gameSettings={{
        blockModeEnabled: $replayBlockModeEnabled,
        blockOnVisitCount: settings.blockOnVisitCount,
      } as any}
      availableMoves={[]}
      showMoves={false}
      visualPosition={$replayPosition || { row: 0, col: 0 }}
      showPiece={!!$replayPosition}
    >
      {#snippet customLayers()}
        <svg class="replay-path-svg" viewBox="0 0 100 100">
          {#each $replaySegments as segment, i (i)}
            <line
              x1={segment.x1}
              y1={segment.y1}
              x2={segment.x2}
              y2={segment.y2}
              stroke={segment.color}
              stroke-opacity={segment.opacity}
            />
          {/each}
        </svg>
      {/snippet}
    </GameBoard>
  </div>

  <ReplayControls
    limitReplayPath={$replayState.limitReplayPath}
    on:toggleLimitPath={toggleLimitPath}
    on:goToStep={(e) => goToStep(e.detail)}
    on:toggleAutoPlay={(e) =>
      toggleAutoPlay(e.detail as "forward" | "backward")}
    currentStep={$replayState.replayCurrentStep}
    totalSteps={moveHistory.length}
    autoPlayDirection={$replayState.autoPlayDirection}
  />

  {#if onClose}
    <div class="actions-column">
      <StyledButton
        variant="default"
        onclick={onClose}
        dataTestId="replay-close-btn"
      >
        {$t("modal.close")}
      </StyledButton>
    </div>
  {/if}
</div>

<style>
  .replay-viewer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }

  .modal-title-menu {
    text-align: center;
    font-size: 1.8em;
    font-weight: 800;
    color: #fff;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .board-bg-wrapper {
    overflow: visible;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .actions-column {
    width: 100%;
    max-width: 400px;
  }
</style>
