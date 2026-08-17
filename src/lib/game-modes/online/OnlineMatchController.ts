import { roomService } from '$lib/services/roomService';
import { modalService } from '$lib/services/modalService';
import { navigationService } from '$lib/services/navigationService';
import { gameEventBus } from '$lib/services/gameEventBus';
import { logService } from "$lib/services/logService.svelte";
import type { SyncableGameState, VoteType } from '$lib/sync/gameStateSync.interface';
import type { MatchLogGameStateSync } from '$lib/sync/MatchLogGameStateSync';
import type { Room } from '$lib/types/online';
import { endGameService } from '$lib/services/endGameService';

export class OnlineMatchController {
    // FIX: Захисний період після початку гри для запобігання race condition
    private gameStartedAt: number = Date.now();
    private readonly VICTORY_CHECK_GRACE_PERIOD_MS = 2000; // 2 секунди
    // FIX: Прапорець для запобігання дублюванню перемоги
    private victoryDeclared: boolean = false;

    constructor(
        private roomId: string,
        private myPlayerId: string,
        private amIHost: boolean,
        private stateSync: MatchLogGameStateSync,
        /*
         * Колбеків `resetBoard` і `advancePlayer` тут більше немає.
         *
         * Вони існували, щоб «продовжити гру» встигло змінити дошку локально ДО
         * того, як новий стан доїде з бази. У моделі журналу локального шляху не
         * існує взагалі: господар переписує опис партії, і дошка в усіх — включно
         * з ним — перебудовується з нього. Один шлях замість двох, і примиряти
         * нема чого.
         */
        private endGameCallback: (reason: string, initiatorId?: string) => void
    ) {
        this.gameStartedAt = Date.now();
    }

    public async handleRestartRequest(): Promise<void> {
        logService.GAME_MODE('[MatchController] Restart requested. Returning to lobby.');
        modalService.closeAllModals();
        await roomService.returnToLobby(this.roomId, this.myPlayerId);
        navigationService.goTo(`/online/lobby/${this.roomId}`);
    }

    /**
     * Обробляє голос гравця (Продовжити або Завершити).
     * Дозволяє змінювати голос.
     */
    public async handleVote(voteType: VoteType): Promise<void> {
        logService.GAME_MODE(`[MatchController] Voting to: ${voteType.toUpperCase()}`);

        // FIX: Використовуємо атомарне оновлення замість pull-modify-push
        await this.stateSync.updateVote(this.myPlayerId, voteType);

        // Оптимістично перевіряємо консенсус
        const currentState = await this.stateSync.pullState();
        if (currentState) {
            const currentVotes = currentState.noMovesVotes || {};
            const optimisticVotes = { ...currentVotes, [this.myPlayerId]: voteType };
            this.checkConsensus({ ...currentState, noMovesVotes: optimisticVotes } as SyncableGameState);
        }
    }

    public checkForVictory(room: Room) {
        if (room.status !== 'playing') return;

        // FIX: Якщо перемогу вже оголошено - виходимо
        if (this.victoryDeclared) return;

        // FIX: Захисний період після початку гри для запобігання race condition
        const timeSinceStart = Date.now() - this.gameStartedAt;
        if (timeSinceStart < this.VICTORY_CHECK_GRACE_PERIOD_MS) {
            logService.GAME_MODE(`[MatchController] Victory check skipped (grace period: ${Math.round(timeSinceStart / 1000)}s < ${this.VICTORY_CHECK_GRACE_PERIOD_MS / 1000}s)`);
            return;
        }

        const players = Object.values(room.players);

        // Перемога зараховується ТІЛЬКИ якщо інші гравці фізично покинули кімнату (були видалені зі списку players)
        // Логіку очікування відключених гравців (isDisconnected) обробляє OnlinePresenceManager та ReconnectionModal.
        if (players.length === 1 && players[0].id === this.myPlayerId) {
            // FIX: Встановлюємо прапорець щоб запобігти повторним викликам
            this.victoryDeclared = true;

            logService.GAME_MODE('[MatchController] Victory Check: All opponents left. Declaring victory.');
            modalService.closeAllModals();

            // FIX: Використовуємо стандартну систему завершення гри з новим reasonKey.
            // Сповіщення та модальне вікно формуються endGameService.
            endGameService.endGame('modal.gameOverReasonOpponentsLeft');
        }
    }

    /**
     * Перевіряє, чи набрала якась опція більшість голосів (> 50%).
     */
    public checkConsensus(state: SyncableGameState) {
        // FIX: Перевірка запитів на завершення (Cash Out)
        if (state.finishRequests) {
            // Знаходимо ID гравця, який ініціював завершення
            const initiatorEntry = Object.entries(state.finishRequests).find(([_, requested]) => requested);

            if (initiatorEntry) {
                const [initiatorId] = initiatorEntry;
                logService.GAME_MODE(`[MatchController] Finish request detected from ${initiatorId}.`);
                this.executeFinishGame(state, 'modal.gameOverReasonCashOut', initiatorId);
                return;
            }
        }

        if (!state.noMovesVotes || !state.playerState) return;

        const votes = state.noMovesVotes;
        const totalPlayers = state.playerState.players.length;

        // Поріг більшості: Math.floor(total / 2) + 1
        const majorityThreshold = Math.floor(totalPlayers / 2) + 1;

        let continueCount = 0;
        let finishCount = 0;

        Object.values(votes).forEach(vote => {
            if (vote === 'continue') continueCount++;
            if (vote === 'finish') finishCount++;
        });

        logService.GAME_MODE(`[MatchController] Votes: Continue=${continueCount}, Finish=${finishCount}, Threshold=${majorityThreshold}`);

        // 1. Перевірка перемоги "Продовжити"
        if (continueCount >= majorityThreshold) {
            logService.GAME_MODE('[MatchController] Majority voted to CONTINUE.');
            this.executeContinueGame();
            return;
        }

        // 2. Перевірка перемоги "Завершити"
        if (finishCount >= majorityThreshold) {
            logService.GAME_MODE('[MatchController] Majority voted to FINISH.');
            this.executeFinishGame(state, 'modal.gameOverReasonBonus');
            return;
        }
    }

    /**
     * Більшість вирішила продовжити: лічильники відвідувань обнуляються, фігура
     * лишається де стоїть, рахунок зберігається, черга йде далі.
     *
     * **У моделі журналу це НОВИЙ ВІДРІЗОК, а не правка стану.** Господар
     * переписує опис партії (та сама позиція, той самий рахунок, наступна черга)
     * і стирає журнал — тож обнуляти лічильники окремо не треба, їх просто немає
     * в новому відрізку.
     *
     * Доти тут вручну збирався новий `boardState` із порожніми `cellVisitCounts`
     * і пхався в базу поверх чужого стану. Разом із локальним оновленням це й
     * давало два стани, які доводилося примиряти.
     */
    private executeContinueGame() {
        // Виконує лише господар: інакше двоє одночасно почали б різні відрізки.
        if (!this.amIHost) return;

        logService.GAME_MODE('[MatchController] Я господар. Продовжую партію новим відрізком.');
        gameEventBus.dispatch('CloseModal');
        void this.stateSync.continueMatch();
    }

    private executeFinishGame(state: SyncableGameState, reason: string, initiatorId?: string) {
        if (!state.gameOver) {
            if (this.amIHost) {
                logService.GAME_MODE(`[MatchController] I am Host. Executing FINISH logic. Reason: ${reason}, Initiator: ${initiatorId}`);
                // Хост ініціює завершення. OnlineGameMode перехопить подію і відправить на сервер.
                this.endGameCallback(reason, initiatorId);
            }
        }
    }

    public checkVotes(remoteState: SyncableGameState) {
        this.checkConsensus(remoteState);
    }

    private async syncState(overrides: Partial<SyncableGameState>) {
        await this.stateSync.patchState(overrides);
    }
}