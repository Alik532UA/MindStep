// src/lib/sync/index.ts
/**
 * @file Експорти модуля синхронізації стану гри.
 */

export type {
    IGameStateSync,
    SyncableGameState,
    SyncMoveData,
    GameStateSyncCallback,
    GameStateSyncEvent
} from './gameStateSync.interface';

export { LocalGameStateSync, localGameStateSync } from './LocalGameStateSync';

export { MatchLogGameStateSync, createMatchLogGameStateSync } from './MatchLogGameStateSync';
export { FirestoreMatchLog } from './FirestoreMatchLog';
export { MemoryMatchLog, moveKey } from './matchLog';
export type { MatchLog, MatchMove, MatchSetup, MatchSnapshot } from './matchLog';
export { replayMatch, initialState, initialCellFromSeed } from './matchReplay';
