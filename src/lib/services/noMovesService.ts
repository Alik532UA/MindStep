// src/lib/services/noMovesService.ts
import { logService } from "./logService.svelte";
import { get } from 'svelte/store';
import { gameEventBus } from './gameEventBus';
import { calculateFinalScore } from './scoreService';
import { endGameService } from './endGameService';
import { availableMovesService } from './availableMovesService';
import { gameState } from '$lib/stores/gameState.svelte';
import { boardState } from '$lib/stores/boardState.svelte';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { gameModeService } from './gameModeService';

export const noMovesService = {
  async claimNoMoves(): Promise<void> {
    const pState = playerState.state;
    if (!pState) return;

    const availableMoves = availableMovesService.getAvailableMoves();

    if (availableMoves.length > 0) {
      const currentPlayerName = pState.players[pState.currentPlayerIndex].name;
      await endGameService.endGame('modal.gameOverReasonPlayerLied', { playerName: currentPlayerName });
    } else {
      this.dispatchNoMovesEvent('human');
    }
  },

  dispatchNoMovesEvent(playerType: 'human' | 'computer') {
    logService.GAME_MODE('[noMovesService] dispatchNoMovesEvent called', { playerType });
    const bState = boardState.state;
    const pState = playerState.state;
    const sState = scoreState.state;
    const uState = uiState.state;
    if (!bState || !pState || !sState || !uState) return;

    const scoreDetails = calculateFinalScore(bState, pState, sState, uState, 'training');

    // FIX: Визначаємо режим гри для правильного формування payload
    const currentGameMode = gameModeService.getCurrentMode();
    const gameType = currentGameMode ? currentGameMode.getModeName() : 'training';
    const isMultiplayer = gameType === 'local' || gameType === 'online';

    let playerScores = undefined;

    if (isMultiplayer) {
      // Для мультиплеєра формуємо список рахунків усіх гравців
      playerScores = pState.players.map(p => ({
        playerId: p.id,
        score: p.score + (p.roundScore || 0), // Показуємо поточний сумарний рахунок (фіксований + раунд)
        name: p.name,
        color: p.color,
        playerName: p.name,
        playerColor: p.color
      }));
    }

    gameEventBus.dispatch('ShowNoMovesModal', {
      playerType,
      scoreDetails,
      boardSize: bState.boardSize,
      playerScores // Передаємо список гравців
    });

    const gameMode = gameState.state.mode;
    if (gameMode) {
      gameMode.pauseTimers();
    }
  }
};