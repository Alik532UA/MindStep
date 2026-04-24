import { testModeState } from '$lib/stores/testModeState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { logService } from "./logService.svelte";
import type { MoveDirectionType } from '$lib/models/Piece';
import { untrack } from 'svelte';

let isInitialized = false;

export function initializeTestModeSync() {
  if (isInitialized) return;

  logService.init('Initializing Test Mode Sync Service...');

  $effect.root(() => {
    $effect(() => {
      // Читаємо ТІЛЬКИ testModeState реактивно.
      // ВСІ операції з uiState — через untrack, бо uiState.update() читає
      // this._state ($state) всередині методу, що підписує $effect на uiState._state → цикл!
      const state = testModeState.state;

      if (!state.isEnabled) {
        untrack(() => {
          if (uiState.state.testModeOverrides) {
            logService.testMode('[testModeService] Test mode disabled, clearing overrides.');
            uiState.update(s => {
              const { testModeOverrides, ...rest } = s;
              return rest;
            });
          }
        });
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
      // FIX: untrack обгортає весь виклик update(), бо всередині update()
      // читається this._state ($state) — без untrack $effect підписується на uiState
      untrack(() => {
        uiState.update(s => ({ ...s, testModeOverrides: overrides }));
      });
    });
  });

  isInitialized = true;
}

