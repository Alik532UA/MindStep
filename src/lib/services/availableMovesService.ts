// src/lib/services/availableMovesService.ts
import { boardState } from '$lib/stores/boardState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { availableMovesState } from '$lib/stores/availableMovesState.svelte';
import { logService } from "$lib/services/logService.svelte";
import { playerState } from '$lib/stores/playerState.svelte';
import { calculateAvailableMoves as calculateMovesLogic } from '../logic/availableMovesLogic';

/**
 * Обертка над чистою логікою для зручного використання в UI.
 */
export function calculateAvailableMoves(bState: any, pState: any, settings: any) {
  if (!bState || !pState) return [];
  
  return calculateMovesLogic({
    playerRow: bState.playerRow,
    playerCol: bState.playerCol,
    boardSize: bState.boardSize,
    cellVisitCounts: bState.cellVisitCounts,
    moveHistory: bState.moveHistory,
    players: pState.players,
    currentPlayerIndex: pState.currentPlayerIndex,
    settings: settings
  });
}

export const availableMovesService = {
  updateAvailableMoves() {
    const bState = boardState.state;
    const pState = playerState.state;
    const settings = gameSettingsState.state;

    logService.logicAvailability(`[availableMovesService] updateAvailableMoves called. BoardState present: ${!!bState}, PlayerState present: ${!!pState}`);

    if (!bState || !pState) {
      availableMovesState.state = [];
      return;
    }
    
    const moves = calculateAvailableMoves(bState, pState, settings);
    availableMovesState.state = moves;
  },
  getAvailableMoves: () => availableMovesState.state
};
