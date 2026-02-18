// src/lib/stores/derivedState.ts
import { derived } from 'svelte/store';
import { boardState } from './boardState.svelte';
import { playerState } from './playerState.svelte';
import { uiState } from './uiState.svelte';
import { timerState } from './timerState.svelte';
import { animationState } from './animationState.svelte';
import { availableMovesState } from './availableMovesState.svelte';
import { derivedState } from './derivedState.svelte';

// Bridge pattern: Експортуємо старі стори, але запозичуємо логіку з Runes (SSoT)
// Це дозволяє поступово переходити на Runes без ламання існуючих компонентів.

export const lastComputerMove = derived(
  [],
  () => derivedState.lastComputerMove
);

export const lastPlayerMove = derived(
  [],
  () => derivedState.lastPlayerMove
);

export const isConfirmButtonDisabled = derived(
  [],
  () => derivedState.isConfirmButtonDisabled
);

export const isPlayerTurn = derived(
  [],
  () => derivedState.isPlayerTurn
);

export const availableMoves = derived(
  [],
  () => derivedState.availableMoves
);

export const previousPlayerColor = derived(
  [],
  () => derivedState.previousPlayerColor
);

export const availableDistances = derived([], () => {
  const bState = boardState.state;
  return bState ? Array.from({ length: bState.boardSize - 1 }, (_, i) => i + 1) : [];
});

function chunk<T>(arr: T[], n: number): T[][] {
  const res = [];
  for (let i = 0; i < arr.length; i += n) res.push(arr.slice(i, i + n));
  return res;
}

export const distanceRows = derived(availableDistances, $availableDistances => {
  const dists = $availableDistances;
  if (dists.length <= 4) return [dists];
  if (dists.length === 5) return [dists.slice(0, 3), dists.slice(3)];
  if (dists.length === 6) return [dists.slice(0, 3), dists.slice(3)];
  if (dists.length === 7) return [dists.slice(0, 4), dists.slice(4)];
  if (dists.length === 8) return [dists.slice(0, 4), dists.slice(4)];
  return chunk(dists, 4);
});

export const currentLanguageFlagComponent = derived(
  [],
  () => derivedState.currentLanguageFlagComponent
);

export const currentPlayer = derived(

  [],

  () => derivedState.currentPlayer

);



export const currentPlayerColor = derived(

  [],

  () => derivedState.currentPlayerColor

);



export const visualPosition = derived(

  [],

  () => derivedState.visualPosition

);



export const visualCellVisitCounts = derived(

  [],

  () => derivedState.visualCellVisitCounts

);



export const isPauseBetweenMoves = derived(

  [],

  () => animationState.state.isAnimating && animationState.state.animationQueue.length === 0

);



export const remainingTime = derived(

  [],

  () => derivedState.remainingTime

);



export const turnTimeLimit = derived(

  [],

  () => timerState.state.turnTimeLeft ?? 0

);



export const isGameOver = derived(

  [],

  () => derivedState.isGameOver

);



export const isFirstMove = derived(

  [],

  () => uiState.state.isFirstMove

);
