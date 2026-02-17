import { gameOverState } from '$lib/stores/gameOverState.svelte';
import { calculateFinalScore, determineWinner } from './scoreService';
import { gameEventBus } from './gameEventBus';
import { logService } from './logService';
import { timeService } from './timeService';
import { boardState } from '$lib/stores/boardState.svelte';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState, initialScoreState } from '$lib/stores/scoreState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import type { Player } from '$lib/models/player';
import { tick } from 'svelte';
import { gameModeService } from './gameModeService';
import { leaderboardService } from './leaderboardService';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { authService } from './authService';
import { doc, updateDoc, getFirestore } from 'firebase/firestore';
import { getFirebaseApp } from './firebaseService';
import { rewardsService } from './rewardsService';

export const endGameService = {
  // FIX: Додано параметр specificPlayerIndex для явного вказання гравця, що програв/ініціював завершення
  async endGame(reasonKey: string, reasonValues: Record<string, any> | null = null, specificPlayerIndex?: number): Promise<void> {
    // FIX: Запобігаємо повторному виклику, якщо гра вже завершена.
    const uState = uiState.state;
    if (uState.isGameOver) {
      logService.GAME_MODE(`[endGameService] Game already over. Ignoring duplicate call for reason: '${reasonKey}'`);
      return;
    }

    logService.GAME_MODE(`[endGameService] endGame called with reason: '${reasonKey}', specificPlayerIndex: ${specificPlayerIndex}`);

    uiState.update(s => ({ ...s, isGameOver: true, gameOverReasonKey: reasonKey, gameOverReasonValues: reasonValues }));
    timeService.stopGameTimer();
    timeService.stopTurnTimer();

    await tick();

    const bState = boardState.state;
    const pState = playerState.state;
    const sState = scoreState.state;
    const uStateFinal = uiState.state;

    if (!bState || !pState || !sState || !uStateFinal) {
      logService.score('[endGameService] Aborted: one or more stores are not available.');
      return;
    }

    const currentGameMode = gameModeService.getCurrentMode();
    const gameType = currentGameMode ? currentGameMode.getModeName() : 'training';

    const finalScoreDetails = calculateFinalScore(bState, pState, sState, uStateFinal, gameType);
    logService.score('[endGameService] Final score calculated:', finalScoreDetails);

    if (gameType !== 'local' && gameType !== 'online') {
      const humanPlayer = pState.players.find(p => p.type === 'human');
      if (humanPlayer) {
        const updatedPlayers = pState.players.map(p =>
          p.id === humanPlayer.id ? { ...p, score: finalScoreDetails.totalScore } : p
        );
        playerState.state = { ...pState, players: updatedPlayers };

        logService.score('[endGameService] Submitting score to leaderboard...');

        let cleanMode = gameType;
        if (gameType === 'virtual-player') {
          const preset = gameSettingsState.state.gameMode;
          if (preset && preset.includes('timed')) cleanMode = 'timed';
          else cleanMode = 'training';
        }

        const lastPlayedInfo = {
          mode: cleanMode,
          size: bState.boardSize,
          score: finalScoreDetails.totalScore,
          timestamp: Date.now()
        };

        leaderboardService.submitScore(finalScoreDetails.totalScore, {
          mode: cleanMode,
          size: bState.boardSize,
          lastPlayed: lastPlayedInfo
        });

        logService.score('[endGameService] Checking achievements with final score...');
        rewardsService.checkAchievements({
          score: finalScoreDetails.totalScore,
          gameMode: cleanMode,
          boardSize: bState.boardSize
        });
      }
    }

    scoreState.state = initialScoreState;

    const finalPlayerState = playerState.state!;

    // FIX: Визначаємо індекс гравця для логіки перемоги/поразки.
    const playerIndexForLogic = specificPlayerIndex !== undefined ? specificPlayerIndex : pState.currentPlayerIndex;

    const { winners, loser } = determineWinner(finalPlayerState, reasonKey, playerIndexForLogic);

    let finalReasonKey = reasonKey;
    const finalReasonValues = { ...reasonValues };

    // Логіка формування повідомлення про причину завершення
    if (gameType === 'local' || gameType === 'online') {
      // Якщо це Cash Out (дострокове завершення), додаємо ім'я ініціатора
      if (reasonKey === 'modal.gameOverReasonCashOut') {
        const initiator = finalPlayerState.players[playerIndexForLogic];
        if (initiator) {
          finalReasonValues.playerName = initiator.name;
        }
      }
      // Якщо є переможений (вихід за межі, блокування), додаємо його ім'я
      else if (loser) {
        if (reasonKey === 'modal.gameOverReasonOut') {
          finalReasonKey = 'modal.gameOverReasonPlayerOut';
        } else if (reasonKey === 'modal.gameOverReasonBlocked') {
          finalReasonKey = 'modal.gameOverReasonPlayerBlocked';
        }
        finalReasonValues.playerName = loser.name;
      }
    }

    const gameOverPayload = {
      scores: finalPlayerState.players.map((p: Player) => ({ playerId: p.id, score: p.score, name: p.name, color: p.color })),
      winners: winners,
      loser: loser,
      reasonKey: finalReasonKey,
      reasonValues: finalReasonValues,
      finalScoreDetails,
      gameType: gameType,
    };

    logService.score('[endGameService] Dispatching GameOver event:', gameOverPayload);
    gameOverState.setGameOver(gameOverPayload);

        // @ts-ignore

        gameEventBus.dispatch('GameOver', { ...gameOverPayload, state: { ...bState, ...finalPlayerState, ...scoreState.state!, ...uStateFinal } });

      }

    };

    