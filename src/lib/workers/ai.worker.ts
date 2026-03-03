// src/lib/workers/ai.worker.ts
import { calculateAvailableMoves } from '../logic/availableMovesLogic';

self.onmessage = (e: MessageEvent) => {
  const { boardState, playerState, settings } = e.data;
  
  // Розрахунок доступних ходів (чиста функція без залежностей від Svelte сторів)
  const availableMoves = calculateAvailableMoves({
    playerRow: boardState.playerRow,
    playerCol: boardState.playerCol,
    boardSize: boardState.boardSize,
    cellVisitCounts: boardState.cellVisitCounts,
    moveHistory: boardState.moveHistory,
    players: playerState.players,
    currentPlayerIndex: playerState.currentPlayerIndex,
    settings: settings
  });

  if (availableMoves.length === 0) {
    self.postMessage(null);
    return;
  }

  // Випадковий хід
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const randomMove = availableMoves[randomIndex];

  self.postMessage(randomMove);
};
