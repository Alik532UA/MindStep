// src/lib/services/localInputProvider.ts
import { uiState } from '$lib/stores/uiState.svelte';
import { userActionService } from './userActionService';
import { logService } from './logService';

export const localInputProvider = {
  confirmMove(): void {
    const state = uiState.state;
    if (!state || !state.selectedDirection || !state.selectedDistance) {
      logService.logicMove('[LocalInputProvider] Attempted to confirm move without direction or distance.');
      return;
    }

    userActionService.confirmMove();
  }
};
