// src/lib/logic/availableMovesLogic.ts
import { Piece, MoveDirection, type MoveDirectionType } from '../models/Piece';

/**
 * Тип для налаштувань гри (мінімально необхідний для логіки)
 */
export interface MoveCalculationSettings {
  blockModeEnabled: boolean;
  blockOnVisitCount: number;
}

/**
 * Перевіряє чи є хід "дзеркальним" відносно попереднього ходу
 */
export function isMirrorMove(
  currentDirection: string,
  currentDistance: number,
  computerDirection: string,
  computerDistance: number
): boolean {
  const oppositeDirections: Record<string, string> = {
    'up': 'down',
    'down': 'up',
    'left': 'right',
    'right': 'left',
    'up-left': 'down-right',
    'up-right': 'down-left',
    'down-left': 'up-right',
    'down-right': 'up-left'
  };

  return oppositeDirections[currentDirection] === computerDirection && currentDistance <= computerDistance;
}

/**
 * Визначає, чи є клітинка заблокованою
 */
export function isCellBlocked(row: number, col: number, cellVisitCounts: Record<string, number>, settings: MoveCalculationSettings): boolean {
  const visitCount = cellVisitCounts[`${row}-${col}`] || 0;
  return settings.blockModeEnabled && visitCount > settings.blockOnVisitCount;
}

/**
 * "Чиста" функція для розрахунку доступних ходів.
 * НЕ МАЄ імпортувати жодних Svelte сторів.
 */
export function calculateAvailableMoves(
  params: {
    playerRow: number | null;
    playerCol: number | null;
    boardSize: number;
    cellVisitCounts: Record<string, number>;
    moveHistory: any[];
    players: any[];
    currentPlayerIndex: number;
    settings: MoveCalculationSettings;
  }
) {
  const { playerRow, playerCol, boardSize, cellVisitCounts, moveHistory, players, currentPlayerIndex, settings } = params;

  if (playerRow === null || playerCol === null) {
    return [];
  }

  const lastMoveEntry = moveHistory.length > 0 ? moveHistory[moveHistory.length - 1] : null;
  const piece = new Piece(playerRow, playerCol, boardSize);

  const currentPlayer = players[currentPlayerIndex];
  const lastMove = lastMoveEntry ? (lastMoveEntry as any).lastMove : null;
  const lastPlayer = lastMove ? players[lastMove.player] : null;

  const shouldCalculatePenalty = !settings.blockModeEnabled && currentPlayer?.type === 'human' && lastPlayer?.type === 'ai';

  const availableMoves = [];

  for (const direction of Object.values(MoveDirection) as MoveDirectionType[]) {
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
