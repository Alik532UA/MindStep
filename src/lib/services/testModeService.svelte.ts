import { testModeState } from '$lib/stores/testModeState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { logService } from './logService';
import type { MoveDirectionType } from '$lib/models/Piece';

let isInitialized = false;

export function initializeTestModeSync() {
  if (isInitialized) return;

  logService.init('Initializing Test Mode Sync Service...');

  // Використовуємо $effect.root, щоб створити глобальний ефект синхронізації
  $effect.root(() => {
    $effect(() => {
      const state = testModeState.state;
      logService.testMode('[testModeService] Reactive sync triggered:', state);

      if (!state.isEnabled) {
        if (uiState.state.testModeOverrides) {
          logService.testMode('[testModeService] Test mode disabled, clearing overrides.');
          uiState.update(s => {
            const { testModeOverrides, ...rest } = s;
            return rest;
          });
        }
        return;
      }

      const overrides: {
        nextComputerMove?: { direction: MoveDirectionType; distance: number };
      } = {};

      if (state.computerMoveMode === 'manual' && state.manualComputerMove.direction && state.manualComputerMove.distance) {
        overrides.nextComputerMove = {
          direction: state.manualComputerMove.direction as MoveDirectionType,
          distance: state.manualComputerMove.distance
        };
      }
      
      logService.testMode('[testModeService] Applying overrides:', overrides);
      uiState.update(s => ({ ...s, testModeOverrides: overrides }));
    });
  });

  isInitialized = true;
}
