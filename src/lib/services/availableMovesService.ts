// src/lib/services/availableMovesService.ts
import { boardState, type BoardState } from '$lib/stores/boardState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';
import { Piece, MoveDirection } from '../models/Piece';
import { isCellBlocked, isMirrorMove } from '$lib/utils/boardUtils';
import { availableMovesState } from '$lib/stores/availableMovesState.svelte';
import { logService } from '$lib/services/logService';
import { playerState, type PlayerState } from '$lib/stores/playerState.svelte';

/**
 * "Чиста" функція для розрахунку доступних ходів.
 * @param boardState - Поточний стан дошки.
 * @param playerState - Поточний стан гравців.
 * @param settings - Поточні налаштування.
 * @returns Масив доступних ходів.
 */
// НАВІЩО (Архітектурне рішення): Ця функція навмисно зроблена "чистою".
// Вона не повинна мати доступу до глобальних сторів (через get()).
// Це дозволяє aiService передавати їй будь-який стан (актуальний, гіпотетичний)
// і гарантує, що логіка розрахунку ходів завжди буде передбачуваною і вільною від побічних ефектів.
// НЕ ВИДАЛЯЙТЕ ПАРАМЕТРИ І НЕ ВИКОРИСТОВУЙТЕ get() ВСЕРЕДИНІ.
export function calculateAvailableMoves(bState: BoardState, pState: PlayerState, settings: GameSettingsState) {
  if (!bState || !pState || bState.playerRow === null || bState.playerCol === null) {
    logService.logicAvailability('(calculateAvailableMoves) No board state or player position, returning empty moves');
    return [];
  }

  const { playerRow, playerCol, boardSize, cellVisitCounts, moveHistory } = bState;
  logService.logicAvailability(`(calculateAvailableMoves) Calculating for position [${playerRow}, ${playerCol}]`);
  const { players, currentPlayerIndex } = pState;
  const lastMoveEntry = moveHistory.length > 0 ? moveHistory[moveHistory.length - 1] : null;
  
  const availableMoves = [];
  const piece = new Piece(playerRow, playerCol, boardSize);

  const currentPlayer = players[currentPlayerIndex];
  const lastMove = lastMoveEntry ? (lastMoveEntry as any).lastMove : null;
  const lastPlayer = lastMove ? players[lastMove.player] : null;

  // НАВІЩО (Архітектурне рішення): Логіка штрафу застосовується ТІЛЬКИ
  // коли хід робить людина (`currentPlayer.type === 'human'`)
  // у відповідь на хід комп'ютера (`lastPlayer?.type === 'ai'`).
  // Це запобігає неправильному нарахуванню штрафів комп'ютеру або в іграх між людьми.
  const shouldCalculatePenalty = !settings.blockModeEnabled && currentPlayer?.type === 'human' && lastPlayer?.type === 'ai';

  for (const direction of Object.values(MoveDirection)) {
    for (let distance = 1; distance < boardSize; distance++) {
      const newPosition = piece.calculateNewPosition(direction, distance);

      if (!piece.isValidPosition(newPosition.row, newPosition.col)) {
        break;
      }

      if (isCellBlocked(newPosition.row, newPosition.col, cellVisitCounts, settings)) {
        continue;
      }
      
      const isPenalty = shouldCalculatePenalty && lastMove ? isMirrorMove(direction, distance, lastMove.direction, lastMove.distance) : false;

      availableMoves.push({
        direction,
        distance,
        row: newPosition.row,
        col: newPosition.col,
        isPenalty
      });
    }
  }
  return availableMoves;
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
