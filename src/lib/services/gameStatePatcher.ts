// src/lib/services/gameStatePatcher.ts
import { logService } from './logService';
import { boardState } from '$lib/stores/boardState.svelte';

class GameStatePatcher {
  applyPatch(serverState: any): void {
    logService.logicMove('[GameStatePatcher] Applying server state to local boardState...');
    boardState.set(serverState);
    logService.logicMove('[GameStatePatcher] Patch applied.');
  }
}

export const gameStatePatcher = new GameStatePatcher();
