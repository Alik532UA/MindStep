// src/lib/sync/FirebaseGameStateSync.ts
import {
    doc,
    getDoc,
    onSnapshot,
    updateDoc,
    collection,
    addDoc,
    serverTimestamp,
    increment,
    type Unsubscribe,
    type DocumentReference,
    type Firestore
} from 'firebase/firestore';

import type {
    IGameStateSync,
    SyncableGameState,
    SyncMoveData,
    GameStateSyncCallback,
    GameStateSyncEvent,
    VoteType
} from './gameStateSync.interface';

import { getFirestoreDb, isFirebaseConfigured } from '$lib/services/firebaseService';
import { logService } from '$lib/services/logService';
import { GameStateSerializer } from './GameStateSerializer';
import { networkStatsState } from '$lib/stores/networkStatsState.svelte';

interface FirebaseRoomDocument {
    gameState: any; // Serialized state
    createdAt: ReturnType<typeof serverTimestamp>;
    updatedAt: ReturnType<typeof serverTimestamp>;
    hostPlayerId: number;
    players: Array<any>;
    status: 'waiting' | 'playing' | 'finished';
}

export class FirebaseGameStateSync implements IGameStateSync {
    private _sessionId: string | null = null;
    private _isConnected: boolean = false;
    private _subscribers: Set<GameStateSyncCallback> = new Set();
    private _stateVersion: number = 0;
    private _unsubscribeSnapshot: Unsubscribe | null = null;
    private _roomRef: DocumentReference | null = null;
    private _db: Firestore | null = null;

    get sessionId(): string | null {
        return this._sessionId;
    }

    get isConnected(): boolean {
        return this._isConnected;
    }

    async initialize(sessionId?: string): Promise<void> {
        if (!isFirebaseConfigured()) {
            throw new Error('Firebase не налаштовано. Перевірте .env файл.');
        }

        try {
            this._db = getFirestoreDb();

            if (sessionId) {
                this._sessionId = sessionId;
                this._roomRef = doc(this._db, 'rooms', sessionId);

                const roomSnapshot = await getDoc(this._roomRef);
                if (!roomSnapshot.exists()) {
                    throw new Error(`Кімната "${sessionId}" не знайдена.`);
                }
            } else {
                const roomsCollection = collection(this._db, 'rooms');
                const newRoomRef = await addDoc(roomsCollection, {
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                    status: 'waiting',
                    players: [],
                    gameState: null
                });

                this._sessionId = newRoomRef.id;
                this._roomRef = newRoomRef;

                logService.init(`[FirebaseGameStateSync] Created new room: ${this._sessionId}`);
            }

            this._subscribeToRoomUpdates();
            this._isConnected = true;

            logService.init(`[FirebaseGameStateSync] Connected to room: ${this._sessionId}`);
        } catch (error) {
            this._isConnected = false;
            logService.error('[FirebaseGameStateSync] Initialization error:', error);
            throw error;
        }
    }

    async resetState(): Promise<void> {
        if (!this._roomRef || !this._isConnected) return;
        try {
            await updateDoc(this._roomRef, {
                gameState: null,
                updatedAt: serverTimestamp()
            });
            this._stateVersion = 0;
            logService.init('[FirebaseGameStateSync] Remote state RESET to null');
        } catch (error) {
            logService.error('[FirebaseGameStateSync] Reset state error:', error);
        }
    }

    /**
     * Перетворює об'єкт у плаский формат для updateDoc (dot notation).
     */
    private _flattenForUpdate(obj: any, prefix: string = 'gameState.'): Record<string, any> {
        const result: Record<string, any> = {};
        Object.entries(obj).forEach(([key, value]) => {
            if (key === 'version' || key === 'updatedAt') return;
            result[`${prefix}${key}`] = value;
        });
        return result;
    }

    async pushState(state: SyncableGameState): Promise<void> {
        if (!this._roomRef || !this._isConnected) {
            logService.error('[FirebaseGameStateSync] Cannot push state: not connected');
            return;
        }

        try {
            const serialized = GameStateSerializer.serialize(state);
            
            const firestoreUpdates: Record<string, any> = {
                ...this._flattenForUpdate(serialized),
                'gameState.version': increment(1),
                'gameState.updatedAt': Date.now(),
                updatedAt: serverTimestamp()
            };

            await updateDoc(this._roomRef, firestoreUpdates);

            networkStatsState.recordWrite('GameStateSync:pushState', serialized);
            logService.state(`[FirebaseGameStateSync] FULL STATE pushed. Anticipating version > ${this._stateVersion}`);
        } catch (error) {
            logService.error('[FirebaseGameStateSync] Push state error:', error);
        }
    }

    async patchState(updates: Partial<SyncableGameState>): Promise<void> {
        if (!this._roomRef || !this._isConnected) {
            logService.error('[FirebaseGameStateSync] Cannot patch state: not connected');
            return;
        }

        try {
            const firestoreUpdates: Record<string, any> = {
                'gameState.updatedAt': Date.now(),
                'gameState.version': increment(1),
                updatedAt: serverTimestamp()
            };

            Object.entries(updates).forEach(([key, value]) => {
                if (key === 'version' || key === 'updatedAt') return;
                
                if (['boardState', 'playerState', 'scoreState', 'gameOver'].includes(key)) {
                    const tempState = { [key]: value } as any;
                    const serialized = GameStateSerializer.serialize(tempState);
                    const serializedKey = key === 'gameOver' ? 'gameOverSerialized' : key;
                    firestoreUpdates[`gameState.${serializedKey}`] = serialized[serializedKey];
                } else {
                    firestoreUpdates[`gameState.${key}`] = value;
                }
            });

            await updateDoc(this._roomRef, firestoreUpdates);

            networkStatsState.recordWrite('GameStateSync:patchState', updates);
            logService.state(`[FirebaseGameStateSync] PATCH pushed. Fields: ${Object.keys(updates).join(', ')}`);
        } catch (error) {
            logService.error('[FirebaseGameStateSync] Patch state error:', error);
        }
    }

    async updateVote(playerId: string, vote: VoteType): Promise<void> {
        if (!this._roomRef || !this._isConnected) return;
        const fieldPath = `gameState.noMovesVotes.${playerId}`;
        await updateDoc(this._roomRef, {
            [fieldPath]: vote,
            'gameState.version': increment(1),
            updatedAt: serverTimestamp()
        });
        logService.state(`[FirebaseGameStateSync] Vote patched for ${playerId}`);
    }

    async updateFinishRequest(playerId: string, requested: boolean): Promise<void> {
        if (!this._roomRef || !this._isConnected) return;
        const fieldPath = `gameState.finishRequests.${playerId}`;
        await updateDoc(this._roomRef, {
            [fieldPath]: requested,
            'gameState.version': increment(1),
            updatedAt: serverTimestamp()
        });
        logService.state(`[FirebaseGameStateSync] Finish request patched for ${playerId}`);
    }

    async pullState(): Promise<SyncableGameState | null> {
        if (!this._roomRef) return null;
        try {
            const snapshot = await getDoc(this._roomRef);
            if (!snapshot.exists()) return null;
            const data = snapshot.data() as FirebaseRoomDocument;
            const state = GameStateSerializer.deserialize(data.gameState);
            if (state && data.gameState?.version) {
                this._stateVersion = data.gameState.version;
                logService.state(`[FirebaseGameStateSync] Initial state pulled. Version: ${this._stateVersion}`);
            }
            return state;
        } catch (error) {
            logService.error('[FirebaseGameStateSync] Pull state error:', error);
            return null;
        }
    }

    async pushMove(moveData: SyncMoveData): Promise<void> {
        if (!this._roomRef || !this._db) return;
        const movesCollection = collection(this._roomRef, 'moves');
        await addDoc(movesCollection, { ...moveData, createdAt: serverTimestamp() });
    }

    subscribe(callback: GameStateSyncCallback): () => void {
        this._subscribers.add(callback);
        return () => this._subscribers.delete(callback);
    }

    async cleanup(): Promise<void> {
        if (this._unsubscribeSnapshot) this._unsubscribeSnapshot();
        this._subscribers.clear();
        this._isConnected = false;
        this._sessionId = null;
        this._roomRef = null;
        this._db = null;
        this._stateVersion = 0;
        logService.init('[FirebaseGameStateSync] Cleaned up');
    }

    private _subscribeToRoomUpdates(): void {
        if (!this._roomRef) return;
        this._unsubscribeSnapshot = onSnapshot(this._roomRef, (snapshot) => {
            if (!snapshot.exists()) {
                this._notifySubscribers({ type: 'game_ended', reason: 'room_deleted' });
                return;
            }
            const data = snapshot.data() as FirebaseRoomDocument;
            
            if (!data.gameState) {
                if (this._stateVersion !== 0) {
                    logService.state(`[FirebaseGameStateSync] Remote state is null. Resetting local version from ${this._stateVersion} to 0`);
                    this._stateVersion = 0;
                }
                return;
            }

            if (data.gameState) {
                const remoteVersion = data.gameState.version || 0;
                
                if (remoteVersion > this._stateVersion) {
                    const oldVersion = this._stateVersion;
                    this._stateVersion = remoteVersion;
                    const remoteState = GameStateSerializer.deserialize(data.gameState);
                    if (remoteState) {
                        logService.state(`[FirebaseGameStateSync] State updated: ${oldVersion} -> ${remoteVersion}`);
                        this._notifySubscribers({ type: 'state_updated', state: remoteState });
                    }
                } else if (remoteVersion < this._stateVersion) {
                    logService.error(`[FirebaseGameStateSync] VERSION REGRESSION DETECTED! Local: ${this._stateVersion}, Remote: ${remoteVersion}`);
                }
            }
        }, (error) => {
            logService.error('[FirebaseGameStateSync] Snapshot error:', error);
            this._isConnected = false;
            this._notifySubscribers({ type: 'connection_lost' });
        });
    }

    private _notifySubscribers(event: GameStateSyncEvent): void {
        this._subscribers.forEach((callback) => {
            try { 
                callback(event); 
            } catch (error) { 
                logService.error('[FirebaseGameStateSync] Subscriber callback failed:', error); 
            }
        });
    }
}

export function createFirebaseGameStateSync(): FirebaseGameStateSync {
    return new FirebaseGameStateSync();
}
