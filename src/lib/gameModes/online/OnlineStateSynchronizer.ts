import { get } from 'svelte/store';
import { boardStore } from '$lib/stores/boardStore.svelte';
import { playerStore } from '$lib/stores/playerStore.svelte';
import { scoreStore } from '$lib/stores/scoreStore.svelte';
import { gameSettingsStore } from '$lib/stores/gameSettingsStore';
import { gameOverStore, type GameOverStoreState } from '$lib/stores/gameOverStore';
import type { IGameStateSync, SyncableGameState } from '$lib/sync/gameStateSync.interface';
import { logService } from '$lib/services/logService';

export class OnlineStateSynchronizer {
    constructor(private stateSync: IGameStateSync) { }

    /**
     * Збирає поточний локальний стан і відправляє його на сервер.
     * @param overrides Додаткові поля для оновлення (наприклад, gameOver, noMovesClaim)
     */
    public async syncCurrentState(overrides: Partial<SyncableGameState> = {}): Promise<void> {
        // FIX: Перевіряємо з'єднання перед спробою синхронізації
        if (!this.stateSync.isConnected) {
            // Не логуємо як помилку, бо це нормальна ситуація при ініціалізації
            return;
        }

        const boardState = get(boardStore);
        const playerState = get(playerStore);
        const scoreState = get(scoreStore);
        const settings = get(gameSettingsStore);
        const gameOverState = get(gameOverStore) as GameOverStoreState;

        if (!boardState || !playerState || !scoreState) {
            // Тільки логуємо якщо ми вже в грі (є boardState)
            // Якщо його немає - це просто рання спроба синхронізації (наприклад при завантаженні налаштувань)
            if (boardState !== null) {
                logService.error('[OnlineStateSynchronizer] Cannot sync state: stores are empty');
            }
            return;
        }

        const stateToPush: SyncableGameState = {
            boardState,
            playerState,
            scoreState,
            settings: {
                boardSize: settings.boardSize,
                turnDuration: settings.turnDuration,
                blockModeEnabled: settings.blockModeEnabled,
                blockOnVisitCount: settings.blockOnVisitCount,
                autoHideBoard: settings.autoHideBoard,
                showBoard: settings.showBoard,
                showPiece: settings.showPiece,
                showMoves: settings.showMoves,
                settingsLocked: settings.settingsLocked
            },
            gameOver: gameOverState.isGameOver ? gameOverState.gameResult : null,
            version: 0, // Will be set by stateSync
            updatedAt: Date.now(),
            ...overrides
        };

        await this.stateSync.pushState(stateToPush);
    }

    private lastSyncedSettingsJson: string = '';

    /**
     * Синхронізує ТІЛЬКИ налаштування. 
     * Це запобігає перезапису ігрового поля (boardState) застарілими даними 
     * при зміні налаштувань іншим гравцем.
     */
    public async syncSettings(): Promise<void> {
        if (!this.stateSync.isConnected) return;

        // FIX: Не дозволяємо синхронізувати налаштування, якщо ігровий стан ще не ініціалізовано.
        if (!get(boardStore)) {
            return;
        }

        const settings = get(gameSettingsStore);
        
        const settingsToPatch = {
            boardSize: settings.boardSize,
            turnDuration: settings.turnDuration,
            blockModeEnabled: settings.blockModeEnabled,
            blockOnVisitCount: settings.blockOnVisitCount,
            autoHideBoard: settings.autoHideBoard,
            showBoard: settings.showBoard,
            showPiece: settings.showPiece,
            showMoves: settings.showMoves,
            settingsLocked: settings.settingsLocked
        };

        const settingsJson = JSON.stringify(settingsToPatch);
        if (settingsJson === this.lastSyncedSettingsJson) {
            return;
        }

        this.lastSyncedSettingsJson = settingsJson;

        logService.GAME_MODE('[OnlineStateSynchronizer] Patching settings...');
        await this.stateSync.patchState({ settings: settingsToPatch });
    }

    /**
     * Виконує часткове оновлення стану гри.
     */
    public async patchState(updates: Partial<SyncableGameState>): Promise<void> {
        if (!this.stateSync.isConnected) return;
        await this.stateSync.patchState(updates);
    }
}