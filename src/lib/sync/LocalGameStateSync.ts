// src/lib/sync/LocalGameStateSync.ts
import { get } from 'svelte/store';
import type {
    IGameStateSync,
    SyncableGameState,
    SyncMoveData,
    GameStateSyncCallback,
    GameStateSyncEvent,
    VoteType
} from './gameStateSync.interface';
import { boardState } from '$lib/stores/boardState.svelte';
import { playerState } from '$lib/stores/playerState.svelte';
import { scoreState } from '$lib/stores/scoreState.svelte';
import { logService } from "$lib/services/logService.svelte";

/**
 * Локальна реалізація синхронізації стану гри.
 */
export class LocalGameStateSync implements IGameStateSync {
    private _sessionId: string | null = null;
    private _isConnected: boolean = false;
    private _subscribers: Set<GameStateSyncCallback> = new Set();
    private _stateVersion: number = 0;
    private _localVotes: Record<string, VoteType> = {};

    get sessionId(): string | null {
        return this._sessionId;
    }

    get isConnected(): boolean {
        return this._isConnected;
    }

    async initialize(sessionId?: string): Promise<void> {
        this._sessionId = sessionId || `local-${Date.now()}`;
        this._isConnected = true;
        this._stateVersion = 0;
        this._localVotes = {};
        logService.init(`[LocalGameStateSync] Initialized with session: ${this._sessionId}`);
    }

    async pushState(state: SyncableGameState): Promise<void> {
        this._stateVersion++;

        if (state.boardState) boardState.set(state.boardState);
        if (state.playerState) playerState.set(state.playerState);
        if (state.scoreState) scoreState.set(state.scoreState);

        if (state.noMovesVotes) {
            this._localVotes = state.noMovesVotes;
        }

        this._notifySubscribers({
            type: 'state_updated',
            state: { ...state, version: this._stateVersion, updatedAt: Date.now() }
        });

        logService.state(`[LocalGameStateSync] State pushed, version: ${this._stateVersion}`);
    }

    async patchState(updates: Partial<SyncableGameState>): Promise<void> {
        logService.state(`[LocalGameStateSync] patchState called with updates:`, Object.keys(updates));
        const currentState = await this.pullState();
        if (currentState) {
            const newState = { ...currentState, ...updates };
            await this.pushState(newState);
        } else {
            logService.error(`[LocalGameStateSync] patchState failed: No current state to patch.`);
        }
    }

    async resetState(): Promise<void> {
        this._stateVersion = 0;
        this._localVotes = {};
        this._notifySubscribers({
            type: 'state_updated',
            state: {
                boardState: null as any,
                playerState: null as any,
                scoreState: null as any,
                version: 0,
                updatedAt: Date.now()
            }
        });
        logService.state(`[LocalGameStateSync] State reset.`);
    }

    async updateVote(playerId: string, vote: VoteType): Promise<void> {
        this._localVotes[playerId] = vote;
        logService.logicMove(`[LocalGameStateSync] Vote updated locally for ${playerId}: ${vote}`);

        const currentState = await this.pullState();
        if (currentState) {
            this._notifySubscribers({
                type: 'state_updated',
                state: currentState
            });
        }
    }

    // FIX: Заглушка для локального режиму
    async updateFinishRequest(playerId: string, requested: boolean): Promise<void> {
        logService.logicMove(`[LocalGameStateSync] Finish request updated locally for ${playerId}: ${requested}`);
        // У локальному режимі це не критично, бо ми не використовуємо цей механізм
    }

    async pullState(): Promise<SyncableGameState | null> {
        const bState = boardState.state;
        const pState = playerState.state;
        const sState = scoreState.state;

        if (!bState || !pState || !sState) {
            return null;
        }

        return {
            boardState: bState,
            playerState: pState,
            scoreState: sState,
            version: this._stateVersion,
            updatedAt: Date.now(),
            noMovesVotes: this._localVotes
        };
    }

    async pushMove(moveData: SyncMoveData): Promise<void> {
        logService.logicMove(`[LocalGameStateSync] Move pushed:`, moveData);
    }

    subscribe(callback: GameStateSyncCallback): () => void {
        this._subscribers.add(callback);
        return () => {
            this._subscribers.delete(callback);
        };
    }

    async cleanup(): Promise<void> {
        this._subscribers.clear();
        this._isConnected = false;
        this._sessionId = null;
        this._localVotes = {};
        logService.init(`[LocalGameStateSync] Cleaned up`);
    }

    private _notifySubscribers(event: GameStateSyncEvent): void {
        this._subscribers.forEach(callback => {
            try {
                callback(event);
            } catch (error) {
                logService.error(`[LocalGameStateSync] Subscriber error:`, error);
            }
        });
    }
}

export const localGameStateSync = new LocalGameStateSync();