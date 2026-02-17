import { tick } from 'svelte';
import { aiService } from '$lib/services/aiService';
import type { IGameMode } from './gameMode.interface';
import type { Player } from '$lib/models/player';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { gameOverStore } from '$lib/stores/gameOverStore';
import { gameEventBus } from '$lib/services/gameEventBus';
import { sideEffectService, type SideEffect } from '$lib/services/sideEffectService';
import { Piece, type MoveDirectionType } from '../models/Piece';
import type { GameMoveResult, SuccessfulMoveResult, ScoreChangesData, MoveQueueItem } from '$lib/types/gameMove';
import { logService } from '$lib/services/logService';
import { endGameService } from '$lib/services/endGameService';
import { noMovesService } from '$lib/services/noMovesService';
import { availableMovesService } from '$lib/services/availableMovesService';
import { timeService } from '$lib/services/timeService';
import { boardState } from '$lib/stores/boardState.svelte';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { appSettingsStore } from '$lib/stores/appSettingsStore';
import { uiEffectsStore } from '$lib/stores/uiEffectsStore';
import { voiceControlService } from '$lib/services/voiceControlService';
import { GameEngine } from '$lib/logic/GameEngine';

export abstract class BaseGameMode implements IGameMode {
  public turnDuration: number = 0;
  public gameDuration: number = 0;
  protected engine: GameEngine | null = null;

  abstract getModeName(): 'training' | 'local' | 'timed' | 'online' | 'virtual-player';
  abstract initialize(options?: { newSize?: number }): void;
  abstract getPlayersConfiguration(): Player[];

  protected initEngine(): void {
    // Скидаємо старий двигун перед ініціалізацією нового
    this.engine = null;
    const settings = gameSettingsState.state;
    // Ініціалізуємо Stateless Engine тільки з налаштуваннями
    this.engine = new GameEngine(settings);
  }

  // Змінено з abstract на virtual (з дефолтною реалізацією)
  async handleNoMoves(playerType: 'human' | 'computer'): Promise<void> {
    await noMovesService.dispatchNoMovesEvent(playerType);
  }

  // Змінено з abstract на virtual
  async continueAfterNoMoves(): Promise<void> {
    logService.GAME_MODE(`[${this.constructor.name}] continueAfterNoMoves called`);
    this.resetBoardForContinuation();

    // Специфічна логіка: після "немає ходів" зазвичай хід повертається до людини
    const pState = playerState.state;
    const humanPlayerIndex = pState?.players.findIndex(p => p.type === 'human');

    if (pState && humanPlayerIndex !== undefined && humanPlayerIndex !== -1) {
      playerState.update(s => s ? { ...s, currentPlayerIndex: humanPlayerIndex } : null);
      logService.GAME_MODE('continueAfterNoMoves: Хід повернуто гравцю-людині.', { humanPlayerIndex });
    } else {
      await this.advanceToNextPlayer();
    }

    this.startTurn();
    gameEventBus.dispatch('CloseModal', undefined);
  }

  // Змінено з abstract на virtual
  protected async advanceToNextPlayer(): Promise<void> {
    logService.GAME_MODE('advanceToNextPlayer: Передача ходу наступному гравцю.');
    const currentPlayerState = playerState.state;
    if (!currentPlayerState || !currentPlayerState.players) return;
    const nextPlayerIndex = (currentPlayerState.currentPlayerIndex + 1) % currentPlayerState.players.length;

    playerState.update(s => s ? { ...s, currentPlayerIndex: nextPlayerIndex } : null);

    const nextPlayer = playerState.state?.players[nextPlayerIndex];
    logService.GAME_MODE(`advanceToNextPlayer: Наступний гравець: ${nextPlayer?.name}, Тип: ${nextPlayer?.type}, isComputer: ${nextPlayer?.isComputer}`);

    if (nextPlayer?.type === 'ai' || nextPlayer?.type === 'computer') {
      logService.GAME_MODE('advanceToNextPlayer: Заплановано хід комп\'ютера (через таймер).');
      // НАВІЩО: Використовуємо setTimeout(0), щоб розірвати ланцюжок синхронних викликів.
      // Це дає Svelte-сторам та UI можливість оновитися ПЕРЕД початком нового ходу.
      setTimeout(() => {
        this.triggerComputerMove();
      }, 0);
    } else {
      this.startTurn();
    }
  }

  // Змінено з abstract на virtual
  protected async applyScoreChanges(scoreChanges: ScoreChangesData): Promise<void> {
    // Default implementation: do nothing (override in specific modes if needed)
  }

  /**
   * Скидає стан дошки для продовження гри після "немає ходів".
   * Використовується в різних GameModes для уникнення дублювання.
   * 
   * ВАЖЛИВО: Цей метод лише скидає стан дошки і оновлює доступні ходи.
   * Специфічна логіка режиму (перемикання гравців, таймери) залишається в конкретних реалізаціях.
   */
  protected resetBoardForContinuation(): void {
    const bState = boardState.state;
    const settings = gameSettingsState.state;
    if (!bState || bState.playerRow === null || bState.playerCol === null) return;

    const continuationData = {
      cellVisitCounts: {} as Record<string, number>,
      moveHistory: [{
        pos: { row: bState.playerRow, col: bState.playerCol },
        blocked: [] as { row: number; col: number }[],
        visits: {},
        blockModeEnabled: settings.blockModeEnabled
      }],
      moveQueue: [] as MoveQueueItem[],
    };

    boardState.update(s => s ? ({ ...s, ...continuationData }) : null);

    // Оновлюємо двигун при скиданні дошки (перестворюємо з новими налаштуваннями)
    if (this.engine) {
      this.engine = new GameEngine(settings);
    }

    availableMovesService.updateAvailableMoves();
    gameOverStore.resetGameOverState();
    gameEventBus.dispatch('GAME_RESET');
  }

  protected startTurn(): void {
    if (this.turnDuration > 0) {
      timeService.startTurnTimer(this.turnDuration, () => {
        endGameService.endGame('modal.gameOverReasonTimeUp');
      });
    }
  }

  async claimNoMoves(): Promise<void> {
    await noMovesService.claimNoMoves();
  }

  async handlePlayerMove(direction: MoveDirectionType, distance: number, onEndCallback?: () => void): Promise<void> {
    if (!this.engine) {
      this.initEngine();
    }

    if (!this.engine) {
      logService.error('[BaseGameMode] Failed to initialize engine for move.');
      return;
    }

    const pState = playerState.state;
    const bState = boardState.state;
    const sState = scoreState.state;
    const uState = uiState.state;

    if (!pState || !bState || !sState || !uState || bState.playerRow === null || bState.playerCol === null) return;

    const currentPlayer = pState.players[pState.currentPlayerIndex];
    logService.logicMove(`[BaseGameMode.handlePlayerMove] EXECUTION START: playerIndex=${pState.currentPlayerIndex}, playerName=${currentPlayer?.name}, playerType=${currentPlayer?.type}, isComputer=${currentPlayer?.isComputer}, direction=${direction}, distance=${distance}`);

    // МИТТЄВО очищаємо вибір гравця, щоб UI не "залипав" на старому ході
    uiState.update(s => ({
      ...s,
      selectedDirection: null,
      selectedDistance: null,
      isFirstMove: false
    }));

    // Оновлюємо налаштування в двигуні перед ходом (на випадок змін)
    this.engine.updateSettings(gameSettingsState.state);

    // Створюємо актуальний знімок стану ПЕРЕД ходом (SSoT)
    const currentGameState = { ...bState, ...pState, ...sState, ...uState };

    const moveResult = this.engine.performMove(
      currentGameState,
      direction,
      distance,
      pState.currentPlayerIndex,
      this.getModeName()
    );

    if (moveResult.success && moveResult.changes) {
      // МИТТЄВЕ оновлення (через руни)
      boardState.update(s => s ? ({ ...s, ...moveResult.changes!.boardState }) : null);
      playerState.update(s => s ? ({ ...s, ...moveResult.changes!.playerState }) : null);
      scoreState.update(s => s ? ({ ...s, ...moveResult.changes!.scoreState }) : null);

      // Оновлюємо останній хід у uiState
      uiState.update(s => ({
        ...s,
        lastMove: {
          direction,
          distance,
          player: pState.currentPlayerIndex
        }
      }));

      // Event-Driven UI: Повідомляємо про успішний хід
      gameEventBus.dispatch('GAME_MOVE_SUCCESS', {
        direction,
        distance,
        playerIndex: pState.currentPlayerIndex,
        bonusPoints: moveResult.bonusPoints || 0,
        penaltyPoints: moveResult.penaltyPoints || 0,
        newPosition: moveResult.newPosition!
      });

      const newMove = moveResult.changes.boardState.moveQueue!.slice(-1)[0];
      if (newMove) {
        // Візуалізація дошки підпишеться на цей івент
        gameEventBus.dispatch('new_move_added', newMove);
      }

      await this.applyScoreChanges({
        bonusPoints: moveResult.bonusPoints || 0,
        penaltyPoints: moveResult.penaltyPoints || 0
      });

      // Обробка побічних ефектів (TTS)
      const settings = gameSettingsState.state;
      const currentPlayer = pState.players[pState.currentPlayerIndex];
      let shouldSpeak = false;

      if (settings.speechEnabled) {
        if (uState.intendedGameType === 'online') {
          shouldSpeak = pState.currentPlayerIndex === uState.onlinePlayerIndex
            ? settings.speechFor.onlineMyMove
            : settings.speechFor.onlineOpponentMove;
        } else {
          shouldSpeak = (currentPlayer.isComputer && settings.speechFor.computer) ||
            (!currentPlayer.isComputer && settings.speechFor.player);
        }
      }

      if (shouldSpeak || onEndCallback) {
        sideEffectService.execute({
          type: 'speak_move',
          payload: {
            move: { direction, distance },
            lang: (appSettingsStore as any).language || 'uk', // appSettingsStore все ще стор
            voiceURI: settings.selectedVoiceURI,
            onEndCallback,
            force: true
          }
        });
      }

      await this.onPlayerMoveSuccess();
    } else {
      // Event-Driven UI: Повідомляємо про помилку
      gameEventBus.dispatch('GAME_MOVE_FAILURE', {
        direction,
        distance,
        playerIndex: pState.currentPlayerIndex,
        reason: moveResult.reason
      });
      await this.onPlayerMoveFailure(moveResult.reason, direction, distance);
    }
  }

  protected async onPlayerMoveSuccess(): Promise<void> {
    const pState = playerState.state;
    const currentPlayer = pState!.players[pState!.currentPlayerIndex];

    if (currentPlayer.type === 'human') {
      const settings = gameSettingsState.state;
      if (settings.autoHideBoard) {
        gameEventBus.dispatch('UI_REQUEST_HIDE_BOARD', { delay: 0 });
      }
    }

    await this.advanceToNextPlayer();

    availableMovesService.updateAvailableMoves();
  }

  protected async onPlayerMoveFailure(reason: string | undefined, direction: MoveDirectionType, distance: number): Promise<void> {
    const bState = boardState.state;
    const pState = playerState.state;
    if (!bState || !pState || bState.playerRow === null || bState.playerCol === null) return;

    const piece = new Piece(bState.playerRow, bState.playerCol, bState.boardSize);
    const finalInvalidPosition = piece.calculateNewPosition(direction, distance);

    const finalMoveForAnimation = {
      player: pState.currentPlayerIndex + 1,
      direction: direction,
      distance: distance,
      to: finalInvalidPosition
    };

    boardState.update(s => {
      if (!s) return null;
      const updatedMoveHistory = [...s.moveHistory, {
        pos: { row: finalInvalidPosition.row, col: finalInvalidPosition.col },
        blocked: [] as { row: number, col: number }[],
        visits: { ...s.cellVisitCounts },
        blockModeEnabled: gameSettingsState.state.blockModeEnabled
      }];
      return {
        ...s,
        moveQueue: [...s.moveQueue, finalMoveForAnimation],
        moveHistory: updatedMoveHistory
      };
    });

    gameEventBus.dispatch('new_move_added', finalMoveForAnimation);

    if (reason === 'out_of_bounds') {
      await endGameService.endGame('modal.gameOverReasonOut');
    } else if (reason === 'blocked_cell') {
      await endGameService.endGame('modal.gameOverReasonBlocked');
    }
  }

  async restartGame(options: { newSize?: number } = {}): Promise<void> {
    this.initialize(options);
    this.initEngine();
    // animationService reset is handled by initialize -> GAME_INITIALIZED event
    gameEventBus.dispatch('CloseModal', undefined);
  }

  cleanup(): void {
    logService.GAME_MODE(`[${this.constructor.name}] cleanup called`);
    timeService.stopGameTimer();
    timeService.stopTurnTimer();
    uiState.reset();
    uiEffectsStore.destroy();
  }

  pauseTimers(): void {
    timeService.pauseGameTimer();
  }

  resumeTimers(): void {
    logService.GAME_MODE(`[${this.constructor.name}] Resuming timers.`);
    timeService.resumeGameTimer();
  }

  protected async triggerComputerMove(): Promise<void> {
    const pState = playerState.state;
    const currentPlayer = pState?.players[pState?.currentPlayerIndex || 0];
    logService.GAME_MODE(`BaseGameMode.triggerComputerMove CALLED. Checking permissions... Player: ${currentPlayer?.name}, Type: ${currentPlayer?.type}, isComputer: ${currentPlayer?.isComputer}`);
    logService.GAME_MODE('triggerComputerMove: Початок ходу комп\'ютера.');
    uiState.update(s => s ? ({ ...s, isComputerMoveInProgress: true }) : s);

    const bState = boardState.state;
    const uState = uiState.state;
    if (!bState || !pState || !uState) return;

    const computerMove = await aiService.getComputerMove(bState, pState, uState);
    logService.GAME_MODE('triggerComputerMove: Результат getComputerMove:', computerMove);

    if (computerMove) {
      logService.GAME_MODE('triggerComputerMove: Комп\'ютер має хід, виконуємо...');
      const { direction, distance } = computerMove;

      const onEndCallback = uiState.state.voiceMoveRequested ? () => {
        logService.voiceControl('[triggerComputerMove] onEndCallback: Re-enabling voice control.');
        voiceControlService.startListening();
        uiState.update(s => ({ ...s, voiceMoveRequested: false }));
      } : undefined;

      await this.handlePlayerMove(direction, distance, onEndCallback);
      // Set to false after successful move
      uiState.update(s => s ? ({ ...s, isComputerMoveInProgress: false }) : s);
    } else {
      logService.GAME_MODE('triggerComputerMove: У комп\'ютера немає ходів, викликаємо handleNoMoves.');
      // Set to false before handling no moves
      uiState.update(s => s ? ({ ...s, isComputerMoveInProgress: false }) : s);
      await this.handleNoMoves('computer');
    }

    await tick();
  }
}