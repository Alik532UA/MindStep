// src/lib/gameModes/TimedGameMode.ts
import { timeService } from '$lib/services/timeService';
import { endGameService } from '$lib/services/endGameService';
import { TrainingGameMode } from './TrainingGameMode';
import { uiState } from '$lib/stores/uiState.svelte';
import { timerState } from '$lib/stores/timerState.svelte';
import { gameSettingsStore } from '$lib/stores/gameSettingsStore';

import { type MoveDirectionType } from '$lib/models/Piece';
import { TIMED_GAME_DEFAULT_DURATION } from '$lib/config/timeConstants';

export class TimedGameMode extends TrainingGameMode {
  constructor() {
    super();
    this.gameDuration = TIMED_GAME_DEFAULT_DURATION;
  }

  getModeName(): 'training' | 'local' | 'timed' | 'online' {
    return 'timed';
  }

  initialize(options: { newSize?: number } = {}): void {
    timeService.stopGameTimer();
    super.initialize(options);
    timerState.setRemainingTime(this.gameDuration);
    gameSettingsStore.updateSettings({
      speechRate: 1.6,
      shortSpeech: true,
      speechFor: {
        player: false,
        computer: true,
        onlineMyMove: false,
        onlineOpponentMove: true
      },
    });
  }

  async handlePlayerMove(direction: MoveDirectionType, distance: number): Promise<void> {
    if (uiState.state.isFirstMove) {
      this.startGameTimer();
    } else {
      this.resumeTimers();
    }
    await super.handlePlayerMove(direction, distance);
  }

  protected startGameTimer(): void {
    if (this.gameDuration > 0) {
      timeService.startGameTimer(this.gameDuration, () => {
        endGameService.endGame('modal.gameOverReasonTimeUp');
      });
    }
  }
}