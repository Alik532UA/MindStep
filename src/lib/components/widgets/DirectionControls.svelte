<script lang="ts">
  import { onMount } from "svelte";
  import { registerGameAction } from "$lib/services/gameHotkeyService";
  import { logService } from "$lib/services/logService.js";
  import { voiceControlService } from "$lib/services/voiceControlService.js";
  import type { MoveDirectionType } from "$lib/models/Piece";

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
    centerInfoProps?: any;
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
    centerInfoProps = {},
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

  let registeredDistances = $state(new Set<number>());

  onMount(() => {
    isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    availableDirections.forEach((dir) => {
      if (dir) {
        registerGameAction(
          dir as import("$lib/stores/gameSettingsStore").KeybindingAction,
          () => handleDirection(dir as MoveDirectionType),
        );
      }
    });

    registerGameAction("confirm", handleConfirm);
    registerGameAction("no-moves", handleNoMoves);
  });

  $effect(() => {
    if (distanceRows && distanceRows.length > 0) {
      const flatDistances = distanceRows.flat();
      // Перевіряємо чи змінився набір відстаней
      const hasChanges = flatDistances.length !== registeredDistances.size || 
                        flatDistances.some(d => !registeredDistances.has(d));
      
      if (hasChanges) {
        flatDistances.forEach((dist) => {
          registerGameAction(`distance-${dist}` as any, () =>
            handleDistance(dist),
          );
        });
        registeredDistances = new Set(flatDistances);
      }
    }
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
  <DirectionGrid
    {selectedDirection}
    disabled={controlsDisabled}
    {centerInfoProps}
    ondirection={handleDirection}
    oncentral={handleCentral}
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
