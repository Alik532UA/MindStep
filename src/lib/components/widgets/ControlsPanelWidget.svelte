<script lang="ts">
  import { userActionService } from "$lib/services/userActionService";
  import { t } from "$lib/i18n/typedI18n";
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { derivedState } from "$lib/stores/derivedState.svelte";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import DirectionControls from "./DirectionControls.svelte";
  import SimpleModalContent from "$lib/components/modals/SimpleModalContent.svelte";
  import { getCenterInfoState, type CenterInfoState } from "$lib/utils/centerInfoUtil";
  import { logService } from "$lib/services/logService.svelte";
  import { uiState } from "$lib/stores/uiState.svelte";
  import { voiceControlState } from "$lib/stores/voiceControlState.svelte";
  import { debugLogState } from "$lib/stores/debugLogState.svelte";

  let showDebug = $state(false);
  let clickCount = $state(0);
  let clickTimer: ReturnType<typeof setTimeout>;

  let selectedDirection = $derived(uiState.state?.selectedDirection);
  let selectedDistance = $derived(uiState.state?.selectedDistance);
  let isMoveInProgress = $derived(uiState.state?.isComputerMoveInProgress);



  let centerInfoProps = $derived<CenterInfoState>(getCenterInfoState({
    selectedDirection: selectedDirection,
    selectedDistance,
    lastComputerMove: derivedState.lastComputerMove,
    lastPlayerMove: derivedState.lastPlayerMove,
    isPlayerTurn: derivedState.isPlayerTurn,
    previousPlayerColor: derivedState.previousPlayerColor,
  }));

  function handleDirection(dir: any) {
    userActionService.selectDirection(dir);
  }
  function handleDistance(dist: any) {
    userActionService.selectDistance(dist);
  }
  function handleCentral() {
    if (centerInfoProps.clickable) onConfirmClick();
  }
  function handleConfirm() {
    onConfirmClick();
  }
  function handleNoMoves() {
    userActionService.claimNoMoves();
  }

  function onConfirmClick() {
    if (derivedState.isConfirmButtonDisabled) {
      modalStateRune.update(s => ({
        ...s,
        isOpen: true,
        component: SimpleModalContent,
        variant: "menu",
        dataTestId: "confirm-move-hint-modal",
        props: {
          titleKey: "modal.confirmMoveHintTitle" as const,
          contentKey: "modal.confirmMoveHintContent" as const,
          actions: [
            {
              labelKey: "modal.ok" as const,
              variant: "primary",
              isHot: true,
              onClick: () => modalStateRune.reset(),
              dataTestId: "confirm-move-hint-ok-btn",
            },
          ],
        },
      }));
      return;
    }
    userActionService.confirmMove();
  }

  function handleLabelClick() {
    clearTimeout(clickTimer);
    clickCount++;
    if (clickCount === 3) {
      showDebug = !showDebug;
      clickCount = 0;
      if (showDebug) {
        logService.forceEnableLogging();
      }
    }
    clickTimer = setTimeout(() => {
      clickCount = 0;
    }, 1000);
  }

  function handleLabelKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      handleLabelClick();
    }
  }

  function copyLogs() {
    const voiceTranscript =
      document.getElementById("voice-transcript")?.innerText || "";
    const recognitionError =
      document.getElementById("recognition-error")?.innerText || "";
    const generalLogs =
      document.getElementById("general-logs")?.innerText || "";

    const fullLog = `---
Voice Transcript ---
${voiceTranscript}

--- Recognition Error ---
${recognitionError}

--- General Logs ---
${generalLogs}`;

    navigator.clipboard.writeText(fullLog);
    logService.ui("[ControlsPanelWidget] Copied full debug log to clipboard.");
  }

  function clearLogs() {
    debugLogState.clear();
  }
</script>

{#if uiState.state}
  <div class="game-controls-panel" data-testid="controls-panel">
    <!-- FIX: Додано data-testid для заголовка, який вмикає дебаг -->
    <div
      class="select-direction-label"
      onclick={handleLabelClick}
      onkeydown={handleLabelKeyDown}
      role="button"
      tabindex="0"
      data-testid="controls-panel-title"
    >
      {uiState.state?.intendedGameType === "online" && !derivedState.isPlayerTurn
        ? $t("gameControls.waitYourTurn")
        : $t("gameControls.selectDirectionAndDistance")}
    </div>
    <DirectionControls
      distanceRows={derivedState.distanceRows}
      isPlayerTurn={derivedState.isPlayerTurn}
      blockModeEnabled={gameSettingsState.state.blockModeEnabled}
      isConfirmDisabled={derivedState.isConfirmButtonDisabled}
      {centerInfoProps}
      {isMoveInProgress}
      {selectedDirection}
      {selectedDistance}
      ondirection={handleDirection}
      ondistance={handleDistance}
      oncentral={handleCentral}
      onconfirm={handleConfirm}
      onnoMoves={handleNoMoves}
    />
    {#if showDebug}
      <div class="debug-panel" data-testid="voice-debug-panel">
        <div class="debug-controls">
          <button class="debug-btn" onclick={copyLogs}>Copy</button>
          <button class="debug-btn" onclick={clearLogs}>Clear</button>
        </div>
        <p>Recognized Text:</p>
        <pre id="voice-transcript">{voiceControlState.state.lastTranscript ||
            "No speech detected yet."}</pre>
        {#if voiceControlState.state.recognitionError}
          <p>Recognition Error Details:</p>
          <pre id="recognition-error">{JSON.stringify(
              voiceControlState.state.recognitionError,
              null,
              2,
            )}</pre>
        {/if}
        <p>--- General Logs ---</p>
        <div id="general-logs" class="logs-container">
          {#each debugLogState.state as log, i (i)}
            <div class="log-entry">{log}</div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .game-controls-panel {
    background: var(--bg-secondary);
    box-shadow: var(--dynamic-widget-shadow) var(--current-player-shadow-color);
    border-radius: var(--unified-border-radius);
    padding: 24px 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    width: 100%;
    box-sizing: border-box;
    backdrop-filter: var(--unified-backdrop-filter);
    border: var(--unified-border);
  }

  .select-direction-label {
    width: 100%;
    text-align: center;
    font-size: 1.13em;
    font-weight: 500;
    margin-bottom: 6px;
    color: var(--text-primary);
    cursor: pointer;
  }

  .debug-panel {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #2c2c2c; /* Slightly lighter dark */
    color: #f0f0f0; /* Lighter text */
    border-radius: 8px; /* Softer corners */
    font-family: monospace;
    position: relative;
    border: var(--global-border-width) solid #444;
    max-height: 400px; /* Limit height */
    overflow-y: auto; /* Allow scrolling */
    font-size: 0.85em;
  }

  .debug-controls {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    gap: 5px;
  }

  .debug-btn {
    background: #555;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .debug-btn:hover {
    background: #777;
  }

  .logs-container {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #555;
    white-space: pre-wrap; /* Wrap long log lines */
    word-break: break-all; /* Break long words */
  }

  .log-entry {
    padding: 2px 0;
    border-bottom: 1px dotted #444;
  }

  .log-entry:last-child {
    border-bottom: none;
  }
</style>
