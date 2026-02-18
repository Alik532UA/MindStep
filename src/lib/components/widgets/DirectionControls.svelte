<script lang="ts">
  import { onMount } from "svelte";
  import { registerGameAction } from "$lib/services/gameHotkeyService";
  import { logService } from "$lib/services/logService.js";
  import { voiceControlService } from "$lib/services/voiceControlService.js";
  import type { MoveDirectionType } from "$lib/models/Piece";
  import type { CenterInfoState } from "$lib/utils/centerInfoUtil";
  import hotkeyService from "$lib/services/hotkeyService";

  // FIX: Import external styles
  import "$lib/css/widgets/direction-controls.css";

  import DirectionGrid from "./controls/DirectionGrid.svelte";
  import DistanceSelector from "./controls/DistanceSelector.svelte";
  import ActionButtons from "./controls/ActionButtons.svelte";

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
    onnoMoves
  }: Props = $props();

  export const availableDirections: string[] = [
    "up-left",
    "up",
    "up-right",
    "left",
    null,
    "right",
    "down-left",
    "down",
    "down-right",
  ];

  const isVoiceSupported = voiceControlService.isApiSupported;
  let isIos = $state(false);

  let controlsDisabled = $derived(isMoveInProgress || !isPlayerTurn);
  let confirmButtonBlocked = $derived(
    isConfirmDisabled || !selectedDirection || !selectedDistance
  );

  onMount(() => {
    isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    availableDirections.forEach((dir) => {
      if (dir) {
        registerGameAction(
          dir as import("$lib/stores/gameSettingsTypes").KeybindingAction,
          () => handleDirection(dir as MoveDirectionType),
        );
      }
    });

    registerGameAction("confirm", handleConfirm);
    registerGameAction("no-moves", handleNoMoves);
  });

  $effect(() => {
    // Створюємо локальну копію актуальних дистанцій для цього запуску ефекту
    const currentDistances = new Set(distanceRows.flat());
    
    currentDistances.forEach((dist) => {
      // @ts-ignore - динамічний тип action
      registerGameAction(`distance-${dist}`, () => handleDistance(dist));
    });

    return () => {
      // Cleanup використовує ту ж саму локальну копію (closure), 
      // тому ми точно видалимо те, що додали в цьому циклі.
      currentDistances.forEach((dist) => {
        // @ts-ignore
        hotkeyService.unregister(`game.distance-${dist}`);
      });
    };
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

<div class="direction-controls-panel">
  {#snippet centerSnippet()}
    <!-- FIX: disabled={false} гарантує, що кнопка ніколи не виглядає заблокованою (сірою/прозорою),
           навіть якщо зараз хід суперника. Логіка кліку контролюється в handleCentral. -->
    <button
      id="center-info"
      class="control-btn center-info {centerInfoProps.class}"
      type="button"
      aria-label={centerInfoProps.aria}
      aria-live="polite"
      onclick={handleCentral}
      tabindex="0"
      disabled={false}
      style={centerInfoProps.backgroundColor
        ? `background-color: ${centerInfoProps.backgroundColor} !important`
        : ""}
      data-testid="center-info-btn"
    >
      {centerInfoProps.content}
    </button>
  {/snippet}

  <DirectionGrid
    {selectedDirection}
    disabled={controlsDisabled}
    center={centerSnippet}
    ondirection={handleDirection}
  />

  <DistanceSelector
    {distanceRows}
    {selectedDistance}
    disabled={controlsDisabled}
    ondistance={handleDistance}
  />

  <ActionButtons
    confirmDisabled={confirmButtonBlocked}
    {blockModeEnabled}
    {isVoiceSupported}
    disabled={controlsDisabled}
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
