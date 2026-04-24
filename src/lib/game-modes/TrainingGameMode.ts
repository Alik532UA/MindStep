import { BaseGameMode } from './BaseGameMode';
import type { Player } from '$lib/models/player';
import { createTrainingPlayers } from '$lib/utils/playerFactory';
import { gameOverState } from '$lib/stores/gameOverState.svelte';
import { gameEventBus } from '$lib/services/gameEventBus';
import { logService } from "$lib/services/logService.svelte";
import { noMovesService } from '$lib/services/noMovesService';
import { timeService } from '$lib/services/timeService';
import { gameService } from '$lib/services/gameService';
import { endGameService } from '$lib/services/endGameService';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { boardState } from '$lib/stores/boardState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import type { ScoreChangesData } from '$lib/types/gameMove';

export class TrainingGameMode extends BaseGameMode {
  initialize(options: { newSize?: number } = {}): void {
    gameService.initializeNewGame({
      size: options.newSize,
      players: this.getPlayersConfiguration(),
    });
    this.initEngine();
    // Повідомляємо систему про ініціалізацію гри.
    // Це автоматично скине стан анімації через animationService, який слухає цю подію.
    gameEventBus.dispatch('GAME_INITIALIZED', { newSize: options.newSize });
    this.startTurn();
  }

  getPlayersConfiguration(): Player[] {
    return createTrainingPlayers();
  }

  getModeName(): 'training' | 'local' | 'timed' | 'online' | 'virtual-player' {
    return 'training';
  }

  protected async applyScoreChanges(scoreChanges: ScoreChangesData): Promise<void> {
    // No specific score changes to apply in training mode
  }

  async handleNoMoves(playerType: 'human' | 'computer'): Promise<void> {
    logService.GAME_MODE(`handleNoMoves: Обробка ситуації "немає ходів" для гравця типу: ${playerType}.`);
    const bState = boardState.state;
    if (!bState) return;

    if (gameSettingsState.state.blockModeEnabled) {
      gameOverState.resetGameOverState();
      scoreState.update(s => s ? { ...s, noMovesBonus: (s.noMovesBonus || 0) + bState.boardSize } : null);
      noMovesService.dispatchNoMovesEvent(playerType);
    } else {
      const reason = playerType === 'human' ? 'modal.gameOverReasonNoMoves' : 'modal.gameOverReasonComputerNoMoves';
      await endGameService.endGame(reason);
    }
  }

  protected startTurn(): void {
    timeService.stopTurnTimer();
  }
}