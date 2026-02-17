import { Piece, type MoveDirectionType } from '../models/Piece';
import { isCellBlocked } from '$lib/utils/boardUtils';
import { calculateMoveScore } from '$lib/services/scoreService';
import type { CombinedGameState, MoveResult } from '$lib/models/gameState';
import type { GameSettingsState } from '$lib/stores/gameSettingsStore';
import type { MoveHistoryEntry } from '$lib/models/moveHistory';
import { logService } from '$lib/services/logService';

/**
 * Headless ігровий рушій.
 * Stateless версія: не зберігає стан, а приймає його як аргумент.
 * Це гарантує використання завжди актуальних даних (SSoT).
 */
export class GameEngine {
  // Ми залишаємо settings тут, але вони також можуть бути передані в метод,
  // проте для зручності використання в BaseGameMode залишимо можливість їх оновлення.
  private settings: GameSettingsState;

  constructor(settings: GameSettingsState) {
    this.settings = settings;
  }

  /**
   * Оновлює налаштування рушія.
   */
  public updateSettings(settings: GameSettingsState): void {
    this.settings = settings;
  }

  /**
   * Виконує хід та повертає результат і зміни стану.
   * Тепер приймає currentState як аргумент.
   */
  public performMove(
    currentState: CombinedGameState,
    direction: MoveDirectionType,
    distance: number,
    playerIndex: number,
    actualGameMode: string
  ): MoveResult {
    logService.logicMove(`[GameEngine] performMove: ${direction} ${distance} (player ${playerIndex})`);
    logService.logicMove(`[GameEngine] Current Pos BEFORE move: [${currentState.playerRow}, ${currentState.playerCol}]`);

    const piece = new Piece(currentState.playerRow!, currentState.playerCol!, currentState.boardSize);
    const newPosition = piece.calculateNewPosition(direction, distance);

    // 1. Валідація меж
    if (!piece.isValidPosition(newPosition.row, newPosition.col)) {
      return { success: false, reason: 'out_of_bounds' };
    }

    // 2. Валідація заблокованих клітинок
    if (isCellBlocked(newPosition.row, newPosition.col, currentState.cellVisitCounts, this.settings)) {
      return { success: false, reason: 'blocked_cell' };
    }

    // 3. Розрахунок очок
    const scoreChanges = calculateMoveScore(currentState, newPosition, playerIndex, this.settings, distance, direction);

    // 4. Оновлення стану відвіданих клітинок
    const startCellKey = `${currentState.playerRow}-${currentState.playerCol}`;
    const updatedCellVisitCounts = { 
      ...currentState.cellVisitCounts, 
      [startCellKey]: (currentState.cellVisitCounts[startCellKey] || 0) + 1 
    };

    // 5. Визначення очок для додавання (різна логіка для режимів)
    const isLocalOrOnlineGame = actualGameMode === 'local' || actualGameMode === 'online';
    const shouldApplyBaseScore = !isLocalOrOnlineGame;
    const baseScoreToAdd = shouldApplyBaseScore ? scoreChanges.baseScoreChange : 0;

    // 6. Формування змін стану
    const changes = {
      boardState: {
        playerRow: newPosition.row,
        playerCol: newPosition.col,
        cellVisitCounts: updatedCellVisitCounts,
        moveQueue: [...currentState.moveQueue, { player: playerIndex + 1, direction, distance, to: newPosition }],
        moveHistory: [...currentState.moveHistory, { 
          pos: newPosition, 
          blocked: [] as { row: number; col: number }[], 
          visits: updatedCellVisitCounts, 
          blockModeEnabled: this.settings.blockModeEnabled, 
          lastMove: { direction, distance, player: playerIndex } 
        }] as MoveHistoryEntry[],
      },
      playerState: {
        players: currentState.players.map((p, i) => 
          i === playerIndex ? { ...p, score: p.score + baseScoreToAdd } : p
        ),
      },
      scoreState: {
        penaltyPoints: currentState.penaltyPoints + scoreChanges.penaltyPoints,
        movesInBlockMode: currentState.movesInBlockMode + scoreChanges.movesInBlockModeChange,
        jumpedBlockedCells: currentState.jumpedBlockedCells + scoreChanges.jumpedBlockedCellsChange,
        distanceBonus: (currentState.distanceBonus || 0) + scoreChanges.distanceBonusChange,
      }
    };

    return {
      success: true,
      changes,
      newPosition,
      bonusPoints: scoreChanges.bonusPoints,
      penaltyPoints: scoreChanges.penaltyPointsForMove
    };
  }
}
