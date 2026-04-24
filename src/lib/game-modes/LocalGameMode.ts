import { BaseGameMode } from './BaseGameMode';
import type { Player } from '$lib/models/player';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { gameOverState } from '$lib/stores/gameOverState.svelte';
import { gameEventBus } from '$lib/services/gameEventBus';
import { logService } from "$lib/services/logService.svelte";
import { timeService } from '$lib/services/timeService';
import { noMovesService } from '$lib/services/noMovesService';
import { availableMovesService } from '$lib/services/availableMovesService';
import { gameService } from '$lib/services/gameService';
import { playerState } from '$lib/stores/playerState.svelte';
import { boardState } from '$lib/stores/boardState.svelte';
import { resetPlayerScore, createDefaultLocalPlayers } from '$lib/utils/playerFactory';
import type { ScoreChangesData } from '$lib/types/gameMove';
import { BASE_TURN_DURATION, DEV_TIME_MULTIPLIER, COMPUTER_TURN_DELAY } from '$lib/config/timeConstants';

export class LocalGameMode extends BaseGameMode {
  constructor() {
    super();
    this.turnDuration = import.meta.env.DEV ? BASE_TURN_DURATION * DEV_TIME_MULTIPLIER : BASE_TURN_DURATION;
  }

  initialize(options: { newSize?: number } = {}): void {
    gameService.initializeNewGame({
      size: options.newSize,
      players: this.getPlayersConfiguration(),
    });

    // Check for 'observer' mode to disable timer
    const currentSettings = gameSettingsState.state;
    if (currentSettings.gameMode === 'observer') {
      this.turnDuration = 0; // Disable timer
    } else {
      // Restore default turn duration if not observer (in case of mode switch)
      this.turnDuration = import.meta.env.DEV ? BASE_TURN_DURATION * DEV_TIME_MULTIPLIER : BASE_TURN_DURATION;
    }

    gameSettingsState.updateSettings({
      speechRate: 1.6,
      shortSpeech: true,
      speechFor: {
        player: false,
        computer: true,
        onlineMyMove: false,
        onlineOpponentMove: true
      },
    });
    gameEventBus.dispatch('GAME_INITIALIZED', { newSize: options.newSize });
    this.checkComputerTurn();
    // this.startTurn(); // Timer will start after the first move to allow infinite setup time
  }

  async continueAfterNoMoves(): Promise<void> {
    logService.GAME_MODE(`[${this.constructor.name}] continueAfterNoMoves called`);

    // Використовуємо спільну логіку з базового класу
    this.resetBoardForContinuation();

    await this.advanceToNextPlayer();
    await this.checkComputerTurn();
    this.startTurn();
    gameEventBus.dispatch('CloseModal');
  }

  async handleNoMoves(playerType: 'human' | 'computer'): Promise<void> {
    noMovesService.dispatchNoMovesEvent(playerType);
  }

  getPlayersConfiguration(): Player[] {
    const pState = playerState.state;
    if (pState) {
      // SSoT: Беремо поточних гравців, але ОБОВ'ЯЗКОВО скидаємо їхній рахунок до 0
      // для нової гри.
      return pState.players.map(p => resetPlayerScore(p));
    }
    // If no players in store (e.g. F5 refresh), generate default players
    return createDefaultLocalPlayers();
  }

  getModeName(): 'training' | 'local' | 'timed' | 'online' | 'virtual-player' {
    return 'local';
  }

  protected async advanceToNextPlayer(): Promise<void> {
    const currentPlayerState = playerState.state;
    if (!currentPlayerState) return;
    const nextPlayerIndex = (currentPlayerState.currentPlayerIndex + 1) % currentPlayerState.players.length;

    // Detect Round Completion (Wrap-around)
    if (nextPlayerIndex === 0) {
      logService.GAME_MODE(`[${this.constructor.name}] Round completed. Flushing round scores to fixed scores.`);
      this.flushRoundScores();
    }

    playerState.update(s => s ? { ...s, currentPlayerIndex: nextPlayerIndex } : null);

    await this.checkComputerTurn();
    this.startTurn();
  }

  private flushRoundScores(): void {
    playerState.update(s => {
      if (!s) return null;
      const newPlayers = s.players.map(p => ({
        ...p,
        score: p.score + (p.roundScore || 0),
        roundScore: 0
      }));
      logService.score('Flushed round scores. New fixed scores:', newPlayers.map(p => ({ name: p.name, score: p.score })));
      return { ...s, players: newPlayers };
    });
  }

  protected async applyScoreChanges(scoreChanges: ScoreChangesData): Promise<void> {
    const { bonusPoints, penaltyPoints } = scoreChanges;
    const pState = playerState.state;
    if (!pState) return;

    playerState.update(s => {
      if (!s) return null;
      const newPlayers = [...s.players];
      const playerToUpdate = { ...newPlayers[s.currentPlayerIndex] };

      // Local Game Scoring Rule: Score split (Fixed + Round)
      const currentRoundScore = playerToUpdate.roundScore || 0;
      // Calculate net change for this move
      const moveScore = bonusPoints - penaltyPoints;
      playerToUpdate.roundScore = currentRoundScore + moveScore;

      logService.score(`[LocalGameMode] applyScoreChanges for ${playerToUpdate.name}:`, {
        bonusPointsFromMove: bonusPoints,
        penaltyPointsFromMove: penaltyPoints,
        moveScore: moveScore,
        newRoundScore: playerToUpdate.roundScore,
        fixedScore: playerToUpdate.score
      });

      newPlayers[s.currentPlayerIndex] = playerToUpdate;
      return { ...s, players: newPlayers };
    });
  }

  private async checkComputerTurn(): Promise<void> {
    // Local mode is typically Human vs Human, but keeping this for safety if mixed mode is possible
    const pState = playerState.state;
    if (!pState) return;
    const currentPlayer = pState.players[pState.currentPlayerIndex];

    if (currentPlayer.type === 'computer' || currentPlayer.isComputer) {
      await new Promise(resolve => setTimeout(resolve, COMPUTER_TURN_DELAY));
      await this.triggerComputerMove();
    }
  }
}