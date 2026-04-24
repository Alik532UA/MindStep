import { gameEventBus, type ShowNoMovesModalPayload } from '$lib/services/gameEventBus';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { modalStateRune } from '$lib/stores/modalState.svelte';
import { roomService } from '$lib/services/roomService';
import { timeService } from '$lib/services/timeService';
import { logService } from '$lib/services/logService';
import { uiState } from '$lib/stores/uiState.svelte';
import type { GameOverPayload } from '$lib/stores/gameOverState.svelte';
import type { OnlineMatchController } from './OnlineMatchController';

export interface EventManagerCallbacks {
    onSyncState: (overrides?: any) => void;
    onSyncSettings: () => void;
    onPatchState: (updates: any) => void;
    isApplyingRemoteState: () => boolean;
}

export class OnlineGameEventManager {
    private subscriptions: (() => void)[] = [];

    constructor(
        private roomId: string,
        private myPlayerId: string,
        private matchController: OnlineMatchController,
        private callbacks: EventManagerCallbacks,
        private turnDuration: number
    ) { }

    public setupSubscriptions() {
        // 1. Settings Sync
        this.subscriptions.push(
            gameSettingsState.subscribe(settings => {
                if (!this.callbacks.isApplyingRemoteState() && this.roomId) {
                    this.callbacks.onSyncSettings();
                }
            })
        );

        // 2. Replay Requests
        this.subscriptions.push(
            gameEventBus.subscribe('ReplayGame', () => {
                this.matchController.handleRestartRequest();
            })
        );

        this.subscriptions.push(
            gameEventBus.subscribe('RequestReplay', () => {
                if (this.roomId && this.myPlayerId) {
                    roomService.setWatchingReplay(this.roomId, this.myPlayerId, true);
                }
            })
        );

        // 3. Modal Handling
        this.subscriptions.push(
            gameEventBus.subscribe('CloseModal', () => {
                if (this.roomId && this.myPlayerId) {
                    roomService.setWatchingReplay(this.roomId, this.myPlayerId, false);
                }
            })
        );

        this.subscriptions.push(
            modalStateRune.subscribe(state => {
                if (state.isOpen) {
                    logService.GAME_MODE('[OnlineEventManager] Modal opened. Pausing timer.');
                    timeService.pauseGameTimer();
                    timeService.stopTurnTimer();
                } else {
                    const uState = uiState.state;
                    if (!uState.isGameOver && this.turnDuration > 0) {
                        logService.GAME_MODE('[OnlineEventManager] Modal closed. Resuming timer.');
                        // Тут можна додати логіку відновлення таймера
                    }
                }
            })
        );

        // 4. Game Logic Events
        this.subscriptions.push(
            gameEventBus.subscribe('ShowNoMovesModal', (payload: ShowNoMovesModalPayload & { isRemote?: boolean }) => {
                timeService.stopTurnTimer();

                if (this.myPlayerId && !payload.isRemote) {
                    logService.GAME_MODE('[OnlineEventManager] Local NoMoves claim detected. Patching to server.');
                    this.callbacks.onPatchState({
                        noMovesClaim: {
                            playerId: this.myPlayerId,
                            scoreDetails: payload.scoreDetails,
                            boardSize: payload.boardSize,
                            timestamp: Date.now(),
                            isCorrect: true,
                            playerScores: payload.playerScores
                        }
                    });
                }
            })
        );

        this.subscriptions.push(
            gameEventBus.subscribe('GameOver', (payload: GameOverPayload) => {
                if (!this.callbacks.isApplyingRemoteState() && this.roomId) {
                    logService.GAME_MODE('[OnlineEventManager] Local GameOver detected. Patching to server.');
                    this.callbacks.onPatchState({
                        gameOver: payload,
                        finishRequests: {}, // FIX: Очищаємо запити на завершення
                        continueRequests: {},
                        noMovesClaim: null,
                        noMovesVotes: {} // FIX: Очищаємо голоси тут, разом з відправкою GameOver
                    });
                }
            })
        );
    }

    public cleanup() {
        this.subscriptions.forEach(unsub => unsub());
        this.subscriptions = [];
    }
}