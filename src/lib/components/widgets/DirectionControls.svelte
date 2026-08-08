<script lang="ts">
  import { onMount } from "svelte";
  import { registerGameAction } from "$lib/services/gameHotkeyService";
  import { logService } from "$lib/services/logService.svelte";
  import { voiceControlService } from "$lib/services/voiceControlService.js";
  import type { MoveDirectionType } from "$lib/models/Piece";
  import type { CenterInfoState } from "$lib/utils/centerInfoUtil";
  import { uiState } from "$lib/stores/uiState.svelte";

  // FIX: Import external styles
  import "$lib/css/widgets/direction-controls.css";

  import DirectionGrid from "./controls/DirectionGrid.svelte";
  import DistanceSelector from "./controls/DistanceSelector.svelte";
  import ActionButtons from "./controls/ActionButtons.svelte";
  import { fade } from "svelte/transition";

  interface Props {
    isMoveInProgress?: boolean;
    selectedDirection?: MoveDirectionType | null;
    selectedDistance?: number | null;
    distanceRows?: number[][];
    isPlayerTurn?: boolean;
    blockModeEnabled?: boolean;
    centerInfoProps: CenterInfoState;
    isConfirmDisabled?: boolean;
    ondirection?: (dir: MoveDirectionType) => void;
    ondistance?: (dist: number) => void;
    oncentral?: () => void;
    onconfirm?: () => void;
    onnoMoves?: () => void;
  }

  let {
    isMoveInProgress = false,
    selectedDirection = null,
    selectedDistance = null,
    distanceRows = [],
    isPlayerTurn = false,
    blockModeEnabled = false,
    centerInfoProps,
    isConfirmDisabled = false,
    ondirection,
    ondistance,
    oncentral,
    onconfirm,
    onnoMoves,
  }: Props = $props();

  export const availableDirections: string[] = [
    "up-left",
    "up",
    "up-right",
    "left",
    "center",
    "right",
    "down-left",
    "down",
    "down-right",
  ];

  const isVoiceSupported = voiceControlService.isApiSupported;
  let isIos = $state(false);

  let isOnline = $derived(uiState.state?.intendedGameType === "online");
  let visuallyDisabled = $derived(isOnline && !isPlayerTurn);

  let controlsDisabled = $derived.by(() => {
    return isMoveInProgress || !isPlayerTurn;
  });

  let confirmButtonBlocked = $derived.by(() => {
    return visuallyDisabled || isConfirmDisabled || !selectedDirection || !selectedDistance;
  });

  onMount(() => {
    isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Реєструємо напрямки
    availableDirections.forEach((dir) => {
      if (dir) {
        registerGameAction(
          dir as import("$lib/stores/gameSettingsTypes").KeybindingAction,
          () => handleDirection(dir as MoveDirectionType),
        );
      }
    });

    // Реєструємо кнопки дій
    registerGameAction("confirm", handleConfirm);
    registerGameAction("no-moves", handleNoMoves);

    // Реєструємо дистанції заздалегідь (до 5, для запасу)
    [1, 2, 3, 4, 5].forEach(dist => {
      // @ts-ignore
      registerGameAction(`distance-${dist}`, () => handleDistance(dist));
    });
  });

  function handleDirection(dir: MoveDirectionType) {
    if (controlsDisabled) return;
    logService.action(`Click: "Напрямок: ${dir}" (DirectionControls)`);
    ondirection?.(dir);
  }
  function handleDistance(dist: number) {
    if (controlsDisabled) return;
    logService.action(`Click: "Відстань: ${dist}" (DirectionControls)`);
    ondistance?.(dist);
  }
  function handleCentral() {
    if (controlsDisabled) return;
    logService.action('Click: "Центральна кнопка" (DirectionControls)');
    oncentral?.();
  }
  function handleConfirm() {
    if (controlsDisabled) return;
    logService.action('Click: "Підтвердити хід" (DirectionControls)');
    onconfirm?.();
  }
  function handleNoMoves() {
    if (controlsDisabled) return;
    logService.action(`Click: "Ходів немає" (DirectionControls)`);
    onnoMoves?.();
  }
  function handleVoiceCommand() {
    if (controlsDisabled) return;
    logService.action(`Click: "Голосова команда" (DirectionControls)`);
    voiceControlService.toggleListening();
  }
</script>

<div class="direction-controls-panel" data-testid="direction-controls-panel">
  {#snippet centerSnippet()}
    <button
      id="center-info"
      class="control-btn center-info {centerInfoProps.class}"
      type="button"
      aria-label={centerInfoProps.aria}
      aria-live="polite"
      onclick={handleCentral}
      tabindex="0"
      disabled={visuallyDisabled}
      style={centerInfoProps.backgroundColor
        ? `background-color: ${centerInfoProps.backgroundColor} !important`
        : ""}
      data-testid="center-info-btn"
    >
      {#key centerInfoProps.content}
        <span in:fade={{ duration: 300, delay: 50 }}>
          {centerInfoProps.content}
        </span>
      {/key}
    </button>
  {/snippet}

  <DirectionGrid
    {selectedDirection}
    disabled={visuallyDisabled}
    center={centerSnippet}
    ondirection={handleDirection}
  />

  <DistanceSelector
    {distanceRows}
    {selectedDistance}
    disabled={visuallyDisabled}
    ondistance={handleDistance}
  />

  <ActionButtons
    confirmDisabled={confirmButtonBlocked}
    {blockModeEnabled}
    {isVoiceSupported}
    disabled={visuallyDisabled}
    {isIos}
    onconfirm={handleConfirm}
    onnoMoves={handleNoMoves}
    onvoiceCommand={handleVoiceCommand}
  />
</div>

<style>
  .direction-controls-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    width: 100%;
  }
</style>
