import { BaseGameMode } from './BaseGameMode';
import type { Player } from '$lib/models/player';
import { logService } from '$lib/services/logService';
import { gameService } from '$lib/services/gameService';
import { createOnlinePlayers } from '$lib/utils/playerFactory';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { boardState } from '$lib/stores/boardState.svelte';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { gameEventBus } from '$lib/services/gameEventBus';
import type { IGameStateSync, GameStateSyncEvent, SyncableGameState } from '$lib/sync/gameStateSync.interface';
import { createFirebaseGameStateSync } from '$lib/sync/FirebaseGameStateSync';
import type { ScoreChangesData } from '$lib/types/gameMove';
import { roomService } from '$lib/services/roomService';
import { roomPlayerService } from '$lib/services/room/roomPlayerService';
import type { MoveDirectionType } from '$lib/models/Piece';
import { notificationService } from '$lib/services/notificationService';
import type { Room } from '$lib/types/online';
import { endGameService } from '$lib/services/endGameService';
import { modalStateRune } from '$lib/stores/modalState.svelte';
import { networkStatsState } from '$lib/stores/networkStatsState.svelte';


import { GameStateReconciler } from './online/GameStateReconciler';
import { OnlineMatchController } from './online/OnlineMatchController';
import { OnlineGameEventManager } from './online/OnlineGameEventManager';
import { OnlineStateSynchronizer } from './online/OnlineStateSynchronizer';
import { OnlinePresenceManager } from './online/OnlinePresenceManager';

import { navigationService } from '$lib/services/navigationService';
import { BoardStateSchema, PlayerStateSchema, ScoreStateSchema } from '$lib/schemas/gameStateSchema';

export class OnlineGameMode extends BaseGameMode {
  private stateSync: IGameStateSync | null = null;
  private reconciler: GameStateReconciler | null = null;
  private matchController: OnlineMatchController | null = null;
  private eventManager: OnlineGameEventManager | null = null;
  private synchronizer: OnlineStateSynchronizer | null = null;
  private presenceManager: OnlinePresenceManager | null = null;

  private unsubscribeSync: (() => void) | null = null;
  private unsubscribeRoom: (() => void) | null = null;

  private roomId: string | null = null;
  private myPlayerId: string | null = null;
  private amIHost: boolean = false;
  private myPlayerIndex: number = -1;
  private isApplyingRemoteState: boolean = false;
  private isEndingGame: boolean = false;
  private roomData: Room | null = null;

  constructor() {
    super();
    this.turnDuration = 30;
  }

  async initialize(options: { newSize?: number; roomId?: string; isNewGame?: boolean } = {}): Promise<void> {
    this.isEndingGame = false;
    this.resetLocalStores();

    // Start tracking network stats for this session
    if (import.meta.env.DEV) {
      networkStatsState.startSession();
    }

    if (!this.initializeSession(options.roomId)) {
      return;
    }

    await this.fetchRoomData();
    if (!this.roomData) {
      logService.error('[OnlineGameMode] Room data missing. Redirecting to menu.');
      navigationService.goTo('/online');
      return;
    }

    // ... (scenario check) ...

    this.determineRole();
    this.applyRoomSettings();
    this.initializeControllers();
    this.startPresence();

    // СИСТЕМНЕ ВИПРАВЛЕННЯ: Якщо це нова гра і ми хост - ПОВНІСТЮ очищаємо стан у Firebase.
    // Це гарантує, що старі ходи з попередніх ігор не будуть завантажені через pullState.
    if (options.isNewGame && this.amIHost && this.stateSync) {
      logService.GAME_MODE('[OnlineGameMode] New game requested by Host. Resetting remote state.');
      await this.stateSync.resetState();
    }

    await this.syncInitialState(options.newSize);
  }

  private resetLocalStores() {
    boardState.set(null);
    playerState.set(null);
    scoreState.set(null);
    gameEventBus.dispatch('GAME_RESET');
  }

  private initializeSession(optionRoomId?: string): boolean {
    const session = roomService.getSession();
    this.roomId = optionRoomId || session.roomId;
    this.myPlayerId = session.playerId;

    if (!this.roomId || !this.myPlayerId) {
      logService.error('[OnlineGameMode] Missing roomId or playerId. Cannot initialize.');
      return false;
    }
    return true;
  }

  private async fetchRoomData() {
    this.roomData = await roomService.getRoom(this.roomId!);
    if (!this.roomData) {
      logService.error('[OnlineGameMode] Could not fetch room data');
    }
  }

  private determineRole() {
    if (!this.roomData || !this.myPlayerId) return;
    this.amIHost = this.roomData.hostId === this.myPlayerId;
    this.myPlayerIndex = this.amIHost ? 0 : 1;

    uiState.update(s => ({
      ...s,
      amIHost: this.amIHost,
      onlinePlayerIndex: this.myPlayerIndex,
      intendedGameType: 'online'
    }));

    logService.init(`[OnlineGameMode] Role determined. Host: ${this.amIHost}, Index: ${this.myPlayerIndex}`);
  }

  private applyRoomSettings() {
    if (this.roomData && this.roomData.settings) {
      this.isApplyingRemoteState = true;
      gameSettingsState.updateSettings({
        ...this.roomData.settings,
        settingsLocked: this.roomData.settingsLocked
      });
      if (this.roomData.settings.turnDuration) {
        this.turnDuration = this.roomData.settings.turnDuration;
      }
      this.isApplyingRemoteState = false;
    }
  }

  private initializeControllers() {
    this.stateSync = createFirebaseGameStateSync();
    this.reconciler = new GameStateReconciler(this.myPlayerId!);
    this.synchronizer = new OnlineStateSynchronizer(this.stateSync);

    this.matchController = new OnlineMatchController(
      this.roomId!,
      this.myPlayerId!,
      this.amIHost,
      this.stateSync,
      () => this.resetBoardForContinuation(),
      () => this.advanceToNextPlayer(),
      (reason: string, initiatorId?: string) => this.handleGameEnd(reason, initiatorId)
    );

    this.eventManager = new OnlineGameEventManager(
      this.roomId!,
      this.myPlayerId!,
      this.matchController,
      {
        onSyncState: (overrides: Partial<SyncableGameState>) => this.synchronizer?.syncCurrentState(overrides),
        onSyncSettings: () => this.synchronizer?.syncSettings(),
        onPatchState: (updates: Partial<SyncableGameState>) => this.synchronizer?.patchState(updates),
        isApplyingRemoteState: () => this.isApplyingRemoteState
      },
      this.turnDuration
    );

    this.presenceManager = new OnlinePresenceManager({
      roomId: this.roomId!,
      myPlayerId: this.myPlayerId!,
      isHost: () => this.amIHost,
      getPlayers: () => this.roomData ? Object.values(this.roomData.players) : [],
      onAllOpponentsLeft: () => {
        logService.GAME_MODE('[OnlineGameMode] Received onAllOpponentsLeft event. Ending game.');
        endGameService.endGame('modal.gameOverReasonOpponentsLeft');
      }
    });
  }

  private handleGameEnd(reason: string, initiatorId?: string) {
    if (this.isEndingGame) {
      logService.GAME_MODE(`[OnlineGameMode] handleGameEnd skipped: already ending. Reason: ${reason}`);
      return;
    }

    let specificPlayerIndex: number | undefined;

    if (initiatorId && this.roomData) {
      if (initiatorId === this.roomData.hostId) {
        specificPlayerIndex = 0;
      } else {
        const isGuest = Object.values(this.roomData.players).some(p => p.id === initiatorId);
        if (isGuest) {
          specificPlayerIndex = 1;
        }
      }
    }

    logService.GAME_MODE(`[OnlineGameMode] Ending game. Reason: ${reason}, Initiator: ${initiatorId}, Mapped Index: ${specificPlayerIndex}`);
    this.isEndingGame = true;
    
    // ВАЖЛИВО: Очищаємо анімаційну чергу ПЕРЕД показом результатів, 
    // щоб запобігти візуальним артефактам після завершення.
    gameEventBus.dispatch('GAME_RESET');
    
    endGameService.endGame(reason, null, specificPlayerIndex);
  }

  private setupSubscriptions() {
    this.unsubscribeRoom = roomService.subscribeToRoom(this.roomId!, (updatedRoom) => {
      if (!updatedRoom) {
        logService.GAME_MODE('[OnlineGameMode] Room deleted while playing.');
        const isGameOver = uiState.state.isGameOver;
        if (!isGameOver) {
          // Кімнату видалено (ймовірно всі опоненти вийшли)
          endGameService.endGame('modal.gameOverReasonOpponentsLeft');
        }
        return;
      }

      this.roomData = updatedRoom;
      const wasHost = this.amIHost;
      this.amIHost = updatedRoom.hostId === this.myPlayerId;
      if (wasHost !== this.amIHost) {
        logService.init(`[OnlineGameMode] Host role changed: ${wasHost} -> ${this.amIHost}`);
        uiState.update(s => ({ ...s, amIHost: this.amIHost }));
      }
      this.matchController?.checkForVictory(updatedRoom);
      this.presenceManager?.handleRoomUpdate(updatedRoom);
    });
  }

  private startPresence() {
    this.presenceManager?.start();
  }

  private async syncInitialState(newSize?: number) {
    try {
      await this.stateSync!.initialize(this.roomId!);
      this.unsubscribeSync = this.stateSync!.subscribe((event) => this.handleSyncEvent(event));
      
      const remoteState = await this.stateSync!.pullState();

      // СИСТЕМНЕ ВИПРАВЛЕННЯ: Вважаємо гру "існуючою" тільки якщо в ній є стан дошки.
      // Якщо там тільки налаштування (після патчу) — хост має ініціалізувати нову гру.
      const isRemoteStateComplete = remoteState && remoteState.boardState && remoteState.playerState;

      if (isRemoteStateComplete) {
        logService.GAME_MODE('[OnlineGameMode] Loaded existing state from server');
        this.applyRemoteState(remoteState);
      } else {
        if (this.amIHost) {
          logService.GAME_MODE('[OnlineGameMode] I am Host. Initializing new game state.');
          const playersConfig = this.getPlayersConfiguration();
          const finalSize = newSize || gameSettingsState.state.boardSize || 4;
          gameService.initializeNewGame({
            size: finalSize,
            players: playersConfig,
          });
          await this.synchronizer!.syncCurrentState();
        } else {
          logService.GAME_MODE('[OnlineGameMode] I am Guest. Waiting for Host to initialize state...');
        }
      }

      // Підписуємось на події ТІЛЬКИ ПІСЛЯ того, як початковий стан встановлено.
      // Це запобігає відправці патчів налаштувань у порожню кімнату до створення гри.
      this.eventManager!.setupSubscriptions();

      this.applyLocalSettings();
      gameEventBus.dispatch('GAME_INITIALIZED', { newSize });

      if (boardState.state) {
        // Даємо UI час відрендеритися перед початком ходу
        setTimeout(() => {
          this.startTurn();
        }, 100);
      }

    } catch (error) {
      logService.error('[OnlineGameMode] Initialization failed:', error);
    }
  }

  private applyLocalSettings() {
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
  }

  cleanup(): void {
    if (this.presenceManager) this.presenceManager.stop();
    if (this.unsubscribeSync) this.unsubscribeSync();
    if (this.unsubscribeRoom) this.unsubscribeRoom();
    if (this.eventManager) this.eventManager.cleanup();
    if (this.stateSync) this.stateSync.cleanup();

    if (import.meta.env.DEV) {
      networkStatsState.stopSession();
    }

    super.cleanup();
    logService.GAME_MODE('[OnlineGameMode] Cleaned up');
  }

  async handlePlayerMove(direction: MoveDirectionType, distance: number, onEndCallback?: () => void): Promise<void> {
    const pState = playerState.state;
    if (!pState || this.myPlayerIndex === -1) return;

    const currentPlayer = pState.players[pState.currentPlayerIndex];
    logService.GAME_MODE(`[OnlineGameMode.handlePlayerMove] Called: playerIndex=${pState.currentPlayerIndex}, playerName=${currentPlayer?.name}, playerType=${currentPlayer?.type}, myIndex=${this.myPlayerIndex}, direction=${direction}, distance=${distance}`);

    if (pState.currentPlayerIndex !== this.myPlayerIndex) {
      logService.GAME_MODE(`[OnlineGameMode] Move rejected: Not my turn. Local index: ${this.myPlayerIndex}, Current turn index: ${pState.currentPlayerIndex}, Player Type: ${currentPlayer?.type}`);
      notificationService.show({ type: 'warning', messageRaw: 'Зачекайте свого ходу!' });
      return;
    }

    logService.GAME_MODE(`[OnlineGameMode] Executing local move: ${direction} ${distance}`);
    await super.handlePlayerMove(direction, distance, onEndCallback);

    // Implicit Heartbeat: Хід підтверджує присутність. Не чекаємо завершення.
    if (this.roomId && this.myPlayerId) {
      roomPlayerService.sendHeartbeat(this.roomId, this.myPlayerId).catch(() => { });
    }

    await this.synchronizer?.syncCurrentState();
  }

  async claimNoMoves(): Promise<void> {
    const pState = playerState.state;
    if (pState?.currentPlayerIndex !== this.myPlayerIndex) {
      notificationService.show({ type: 'warning', messageRaw: 'Зачекайте свого ходу!' });
      return;
    }
    await super.claimNoMoves();
  }

  async handleNoMoves(playerType: 'human' | 'computer'): Promise<void> {
    await super.handleNoMoves(playerType);
  }

  getPlayersConfiguration(): Player[] {
    if (this.roomData) {
      const onlinePlayers = Object.values(this.roomData.players);
      const configs = createOnlinePlayers(onlinePlayers, this.roomData.hostId);
      logService.GAME_MODE('[OnlineGameMode] Player configuration created from room data:', configs.map(p => ({ name: p.name, type: p.type, isComputer: p.isComputer })));
      return configs;
    }
    const defaultConfigs = createOnlinePlayers();
    logService.GAME_MODE('[OnlineGameMode] Player configuration created from defaults (room data missing):', defaultConfigs.map(p => ({ name: p.name, type: p.type, isComputer: p.isComputer })));
    return defaultConfigs;
  }

  protected async triggerComputerMove(): Promise<void> {
    logService.GAME_MODE('[OnlineGameMode] triggerComputerMove blocked. AI is not allowed in Online mode.');
  }

  getModeName(): 'training' | 'local' | 'timed' | 'online' | 'virtual-player' {
    return 'online';
  }

  async voteToContinue(): Promise<void> {
    if (this.matchController) {
      await this.matchController.handleVote('continue');
    }
  }

  async voteToFinish(reasonKey?: string): Promise<void> {
    if (this.stateSync && this.myPlayerId) {
      logService.GAME_MODE(`[OnlineGameMode] Requesting finish (Cash Out).`);
      await this.stateSync.updateFinishRequest(this.myPlayerId, true);
    }
  }

  async continueAfterNoMoves(): Promise<void> {
    await this.voteToContinue();
  }

  protected async advanceToNextPlayer(): Promise<void> {
    const currentPlayerState = playerState.state;
    if (!currentPlayerState) return;
    const nextPlayerIndex = (currentPlayerState.currentPlayerIndex + 1) % currentPlayerState.players.length;

    logService.GAME_MODE(`[OnlineGameMode] Advancing turn: ${currentPlayerState.currentPlayerIndex} -> ${nextPlayerIndex}`);

    if (nextPlayerIndex === 0) {
      logService.GAME_MODE(`[OnlineGameMode] Round completed. Flushing round scores to fixed scores.`);
      this.flushRoundScores();
    }

    playerState.update(s => s ? { ...s, currentPlayerIndex: nextPlayerIndex } : null);

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
      logService.score('[OnlineGameMode] Flushed round scores.', newPlayers.map(p => ({ name: p.name, score: p.score })));
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

      const currentRoundScore = playerToUpdate.roundScore || 0;
      const moveScore = bonusPoints - penaltyPoints;
      playerToUpdate.roundScore = currentRoundScore + moveScore;

      logService.score(`[OnlineGameMode] applyScoreChanges for ${playerToUpdate.name}:`, {
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

  private applyRemoteState(remoteState: SyncableGameState): void {
    // ВАЖЛИВО: Перевіряємо чи стан повний. 
    if (!remoteState.boardState || !remoteState.playerState || !remoteState.scoreState) {
      logService.GAME_MODE('[OnlineGameMode] Received incomplete remote state. Skipping application.');
      return;
    }

    // --- ZOD VALIDATION START ---
    const boardVal = BoardStateSchema.safeParse(remoteState.boardState);
    const playerVal = PlayerStateSchema.safeParse(remoteState.playerState);
    const scoreVal = ScoreStateSchema.safeParse(remoteState.scoreState);

    if (!boardVal.success || !playerVal.success || !scoreVal.success) {
        const validationErrors = {
            board: !boardVal.success ? boardVal.error.format() : null,
            player: !playerVal.success ? playerVal.error.format() : null,
            score: !scoreVal.success ? scoreVal.error.format() : null
        };
        logService.error('[OnlineGameMode] Remote state validation failed!', validationErrors);
        notificationService.show({ type: 'error', messageRaw: 'Data validation error' });
        return;
    }
    // --- ZOD VALIDATION END ---

    // СИСТЕМНЕ ВИПРАВЛЕННЯ: Форсуємо тип "human" для всіх гравців в онлайн-режимі.
    // Це гарантує, що локальний AI ніколи не перехопить хід опонента, 
    // навіть якщо в даних на сервері стався збій типів.
    if (remoteState.playerState.players) {
      remoteState.playerState.players = remoteState.playerState.players.map(p => ({
        ...p,
        type: 'human',
        isComputer: false
      }));
    }

    this.isApplyingRemoteState = true;

    const previousPlayerIndex = playerState.state?.currentPlayerIndex;

    if (this.reconciler) {
      this.reconciler.apply(remoteState);
    }

    if (this.matchController) {
      this.matchController.checkVotes(remoteState);
    }

    if (remoteState.settings && remoteState.settings.turnDuration) {
      this.turnDuration = remoteState.settings.turnDuration;
    }

    const newPlayerIndex = remoteState.playerState.currentPlayerIndex;
    const isNewTurn = previousPlayerIndex !== newPlayerIndex;
    const isGameActive = !uiState.state.isGameOver;

    const currentModalState = modalStateRune.state;
    if (isNewTurn && isGameActive && !currentModalState.isOpen) {
      logService.GAME_MODE(`[OnlineGameMode] Turn changed (${previousPlayerIndex} -> ${newPlayerIndex}). Restarting timer.`);
      this.startTurn();
    }

    this.isApplyingRemoteState = false;
  }

  private handleSyncEvent(event: GameStateSyncEvent): void {
    switch (event.type) {
      case 'state_updated':
        this.applyRemoteState(event.state);
        break;
      case 'player_left':
        const remainingPlayers = this.roomData ? Object.values(this.roomData.players) : [];
        if (remainingPlayers.length > 1) {
          notificationService.show({ type: 'warning', messageRaw: 'Гравець покинув гру' });
        }
        break;
      case 'connection_lost':
        notificationService.show({ type: 'error', messageRaw: 'Втрачено з\'єднання з сервером' });
        break;
    }
  }
}