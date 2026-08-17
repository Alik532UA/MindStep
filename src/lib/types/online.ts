import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';

export type FirestoreTimestamp = { seconds: number; nanoseconds: number };
export type TimestampOrNumber = number | FirestoreTimestamp;

export interface OnlinePlayer {
    id: string;
    name: string;
    color: string;
    isReady: boolean;
    joinedAt: TimestampOrNumber;
    isOnline: boolean;
    isWatchingReplay?: boolean;
    lastSeen?: TimestampOrNumber;
    isDisconnected?: boolean;
    disconnectStartedAt?: TimestampOrNumber;
}

export interface Room {
    id: string;
    name: string;
    hostId: string;
    status: 'waiting' | 'playing' | 'finished';
    createdAt: TimestampOrNumber;
    lastActivity: TimestampOrNumber;
    isPrivate: boolean;
    settingsLocked: boolean;
    allowGuestSettings: boolean;
    players: Record<string, OnlinePlayer>;
    settings: GameSettingsState;
    maxPlayers?: number;
}

export interface RoomSummary {
    id: string;
    name: string;
    status: 'waiting' | 'playing' | 'finished';
    playerCount: number;
    maxPlayers: number;
    isPrivate: boolean;
}
