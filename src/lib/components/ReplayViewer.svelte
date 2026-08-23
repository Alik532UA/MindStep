<script lang="ts">
  import { onDestroy, untrack } from "svelte";
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

  /*
   * Стан перемотування — `$state`, а не `writable` (SVELTE-CORE-v8, анти-патерни).
   *
   * `untrack` лишається й означає те саме, що й раніше: «так, саме ПОЧАТКОВЕ
   * значення». Перегляд запису бере знімок партії на момент відкриття — якщо
   * `moveHistory` зміниться далі, перемотування не має стрибати під руками.
   *
   * Заміна `writable` на `$state` тут не косметична, і причина не в стилі.
   * `get(replayState)` віддавав НЕЗМІННИЙ знімок, а `replayAutoPlayState`
   * тримає його в замиканні `setInterval` і читає `state.replayCurrentStep` на
   * кожному такті. Тобто автоперемотування рахувало наступний крок від того
   * самого числа щосекунди: воно робило один крок і зупинялося на ньому,
   * створюючи вигляд працюючої кнопки. `$state` — проксі, читання з нього живе,
   * і той самий код тепер справді йде по кроках. Ловить це
   * `src/lib/utils/replay.test.ts`.
   */
  const replayState = $state({
    isReplayMode: true,
    moveHistory: untrack(() => moveHistory),
    boardSize: untrack(() => boardSize),
    replayCurrentStep: 0,
    autoPlayDirection: "paused" as "paused" | "forward" | "backward",
    limitReplayPath: true,
  });

  // Обчислення живуть у `utils/replay.ts` чистими функціями від стану, тож тут
  // їх досить загорнути в `$derived` — а в тесті вони викликаються напряму.
  const replayPosition = $derived(calculateReplayPosition(replayState));
  const replayCellVisitCounts = $derived(calculateReplayCellVisitCounts(replayState));
  const replaySegments = $derived(calculateReplaySegments(replayState));
  const replayBlockModeEnabled = $derived(calculateReplayBlockModeEnabled(replayState));

  function goToStep(step: number) {
    replayState.replayCurrentStep = Math.max(
      0,
      Math.min(step, replayState.moveHistory.length - 1),
    );
  }

  function toggleAutoPlay(direction: "forward" | "backward") {
    replayAutoPlayState.toggleAutoPlay(
      direction,
      replayState,
      (updates) => Object.assign(replayState, updates),
      goToStep,
    );
  }

  function toggleLimitPath() {
    replayState.limitReplayPath = !replayState.limitReplayPath;
  }

  /*
   * Зупинка автоперемотування при закритті (SVELTE-CORE-v8 § 2.2).
   *
   * Її тут не було: `setInterval` жив у синглтоні `replayAutoPlayState`, і
   * закриття вікна його не спиняло — таймер смикав `goToStep` уже знищеного
   * компонента до кінця сеансу. Єдиним, хто його зупиняв, був
   * `testingService.cancelAllEffects()`, тобто службовий скид.
   */
  onDestroy(() => replayAutoPlayState.stop());
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
      visualCellVisitCounts={replayCellVisitCounts}
      gameSettings={{
        blockModeEnabled: replayBlockModeEnabled,
        blockOnVisitCount: settings.blockOnVisitCount,
      } as any}
      availableMoves={[]}
      showMoves={false}
      visualPosition={replayPosition || { row: 0, col: 0 }}
      showPiece={!!replayPosition}
    >
      {#snippet customLayers()}
        <svg class="replay-path-svg" viewBox="0 0 100 100">
          {#each replaySegments as segment, i (i)}
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
    limitReplayPath={replayState.limitReplayPath}
    ontoggleLimitPath={toggleLimitPath}
    ongoToStep={goToStep}
    ontoggleAutoPlay={toggleAutoPlay}
    currentStep={replayState.replayCurrentStep}
    totalSteps={moveHistory.length}
    autoPlayDirection={replayState.autoPlayDirection}
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
