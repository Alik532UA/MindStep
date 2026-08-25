import { boardState } from '$lib/stores/boardState.svelte';
import { isShowingResults } from './matchFinished';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { gameOverState } from '$lib/stores/gameOverState.svelte';
import { availableMovesService } from '$lib/services/availableMovesService';
import { gameEventBus } from '$lib/services/gameEventBus';
import { modalService } from '$lib/services/modalService';
import { modalStateRune } from '$lib/stores/modalState.svelte';
import { speakMove } from '$lib/services/speechService';
import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
import { logService } from "$lib/services/logService.svelte";
import type { SyncableGameState } from '$lib/sync/gameStateSync.interface';
import { t as tStore } from '$lib/i18n/typedI18n';
import { timeService } from '$lib/services/timeService';
import { get } from 'svelte/store';

export class GameStateReconciler {
    private lastProcessedNoMovesClaim: number = 0;

    constructor(private myPlayerId: string) { }

    public apply(remoteState: SyncableGameState): void {
        const bState = boardState.state;
        const isGameOver = uiState.state.isGameOver;

        if (remoteState.boardState) {
            const oldQueueLength = bState?.moveQueue?.length || 0;
            const newQueueLength = remoteState.boardState.moveQueue?.length || 0;

            logService.state(`[Reconciler] Comparing queues: Local=${oldQueueLength}, Remote=${newQueueLength}, isGameOver=${isGameOver}`);

            if (bState && remoteState.boardState.moveHistory.length < bState.moveHistory.length) {
                logService.GAME_MODE('[Reconciler] Detected game reset. Resetting animation service.');
                gameEventBus.dispatch('GAME_RESET');
            }

            // Тільки якщо гра ще триває, ми додаємо нові ходи до черги анімації
            if (newQueueLength > oldQueueLength && !isGameOver) {
                const newMoves = remoteState.boardState.moveQueue.slice(oldQueueLength);
                logService.state(`[Reconciler] Found ${newMoves.length} new moves to animate.`);

                newMoves.forEach(move => {
                    logService.animation('[Reconciler] Dispatching animation event for move:', move);
                    gameEventBus.dispatch('new_move_added', move);
                    this.handleOpponentVoiceover(move);
                });
            }
        }

        // --- ДІАГНОСТИКА: Оновлюємо стани з детальним логуванням ---
        try {
            if (remoteState.boardState) {
                logService.state('[Reconciler] Updating boardState...');
                boardState.set(remoteState.boardState);
            }
            if (remoteState.playerState) {
                logService.state('[Reconciler] Updating playerState...', {
                    currentPlayer: remoteState.playerState.currentPlayerIndex,
                    players: remoteState.playerState.players.map(p => ({
                        name: p.name,
                        type: p.type,
                        isComputer: p.isComputer
                    }))
                });
                playerState.set(remoteState.playerState);
            }
            if (remoteState.scoreState) {
                logService.state('[Reconciler] Updating scoreState...');
                scoreState.set(remoteState.scoreState);
            }
        } catch (e: any) {
            logService.error(`[Reconciler] Error during state updates: ${e?.message}`, e);
            throw e;
        }

        if (remoteState.settings) {
            gameSettingsState.update(s => ({ ...s, ...remoteState.settings }));
        }

        this.handleGameOver(remoteState);
        this.handleNoMovesClaim(remoteState);

        availableMovesService.updateAvailableMoves();
    }

    private handleOpponentVoiceover(move: any) {
        const movePlayerIndex = move.player - 1;
        const myIndex = uiState.state.onlinePlayerIndex;
        const settings = gameSettingsState.state;

        if (movePlayerIndex !== myIndex && settings.speechEnabled && settings.speechFor.onlineOpponentMove) {
            speakMove(
                { direction: move.direction, distance: move.distance },
                appSettingsState.state.language || 'uk',
                settings.selectedVoiceURI,
                undefined,
                true
            );
        }
    }

    private handleGameOver(remoteState: SyncableGameState) {
        if (remoteState.gameOver) {
            const currentGameOver = gameOverState.state;
            uiState.update(s => ({ ...s, isGameOver: true }));

            if (!currentGameOver.isGameOver) {
                logService.GAME_MODE('[Reconciler] Syncing GameOver state from server');
                gameOverState.setGameOver(remoteState.gameOver);
                modalService.showGameOverModal(remoteState.gameOver!);
            }
        } else {
            const votes = remoteState.noMovesVotes || {};
            const totalPlayers = remoteState.playerState?.players?.length || 0;
            if (totalPlayers === 0) return;

            const majorityThreshold = Math.floor(totalPlayers / 2) + 1;
            const finishCount = Object.values(votes).filter(v => v === 'finish').length;

            if (finishCount >= majorityThreshold) {
                return;
            }

            const currentGameOver = gameOverState.state;
            const currentModal = modalStateRune.state;
            const showingResults = isShowingResults({
                uiOver: uiState.state.isGameOver,
                resultsOver: currentGameOver.isGameOver,
                openModalTestId: currentModal.dataTestId
            });

            /*
             * ЧУЖИЙ ПЕРЕЗАПУСК НЕ «РОЗЗАВЕРШУЄ» МОЮ ПАРТІЮ.
             *
             * Доти цей рядок стояв беззастережно, і саме він робив із «суперник пішов
             * у лобі» подію моєї партії: спільна ознака «завершено» зникала з бази
             * (перезапуск її чистить), тут прапорець ставав `false`, а далі сторож
             * присутності бачив «партія триває, суперника немає» й накривав мої
             * результати вікном перепідключення.
             *
             * Поки в мене відкрите вікно результатів, партія для мене завершена — і
             * чиїсь дії в іншій кімнаті цього не змінюють. Закриє його людина сама:
             * «Грати ще раз» або «Вийти».
             */
            if (!showingResults) {
                uiState.update(s => ({ ...s, isGameOver: false }));
            }

            // Не закриваємо модалку автоматично, якщо це вікно результатів:
            // воно має закриватися тільки за дією користувача.
            if (currentGameOver.isGameOver && !showingResults) {
                logService.GAME_MODE('[Reconciler] Clearing local GameOver state');
                gameOverState.resetGameOverState();
                modalService.closeAllModals();
            }
        }
    }

    private handleNoMovesClaim(remoteState: SyncableGameState) {
        if (!remoteState.noMovesClaim) {
            const currentModal = modalStateRune.state;
            if (currentModal.isOpen && (currentModal.dataTestId === 'player-no-moves-modal' || currentModal.dataTestId === 'opponent-trapped-modal')) {
                gameEventBus.dispatch('CloseModal');
            }
            return;
        }

        const claim = remoteState.noMovesClaim;

        if (claim.timestamp > this.lastProcessedNoMovesClaim) {
            this.lastProcessedNoMovesClaim = claim.timestamp;

            timeService.stopTurnTimer();

            gameEventBus.dispatch('ShowNoMovesModal', {
                playerType: 'human',
                scoreDetails: claim.scoreDetails,
                boardSize: claim.boardSize,
                playerScores: claim.playerScores,
                isRemote: true
            });
        }

        this.updateModalButtonsState(remoteState);
    }

    private updateModalButtonsState(remoteState: SyncableGameState) {
        const currentModal = modalStateRune.state;
        if (currentModal.isOpen && (currentModal.dataTestId === 'player-no-moves-modal' || currentModal.dataTestId === 'opponent-trapped-modal')) {
            if (!remoteState.playerState) return;

            const t = get(tStore);
            const votes = remoteState.noMovesVotes || {};
            const totalPlayers = remoteState.playerState.players.length;

            let continueCount = 0;
            let finishCount = 0;

            Object.values(votes).forEach(v => {
                if (v === 'continue') continueCount++;
                if (v === 'finish') finishCount++;
            });

            const newButtons = [...currentModal.buttons];
            let updated = false;

            const continueBtnText = `${t('modal.continueGame')} (${continueCount}/${totalPlayers})`;
            if (newButtons[0] && newButtons[0].text !== continueBtnText) {
                newButtons[0] = { ...newButtons[0], text: continueBtnText, textKey: undefined, disabled: false };
                updated = true;
            }

            const baseFinishText = t('modal.finishGameWithBonus', { bonus: remoteState.noMovesClaim?.boardSize || 0 });
            const finishBtnText = `${baseFinishText} (${finishCount}/${totalPlayers})`;

            if (newButtons[1] && newButtons[1].text !== finishBtnText) {
                newButtons[1] = { ...newButtons[1], text: finishBtnText, textKey: undefined, disabled: false };
                updated = true;
            }

            if (updated) {
                modalStateRune.update(s => ({ ...s, buttons: newButtons }));
            }
        }
    }
}
