import { z } from 'zod';
import { GameSettingsSchema } from './gameSettingsSchema';

const FirestoreTimestampSchema = z.object({
    seconds: z.number(),
    nanoseconds: z.number()
});

const TimestampOrNumber = z.union([z.number(), FirestoreTimestampSchema]);

export const OnlinePlayerSchema = z.object({
    id: z.string().uuid().or(z.string()), // Firebase IDs might not be UUIDs sometimes, but here we use uuidv4
    name: z.string().min(1).max(50),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    isReady: z.boolean(),
    joinedAt: TimestampOrNumber,
    isOnline: z.boolean(),
    isWatchingReplay: z.boolean().optional(),
    lastSeen: TimestampOrNumber.optional(),
    isDisconnected: z.boolean().optional(),
    disconnectStartedAt: TimestampOrNumber.optional()
});

export const RoomStatusSchema = z.enum(['waiting', 'playing', 'finished']);

export const RoomSchema = z.object({
    id: z.string(),
    name: z.string().min(1).max(100),
    hostId: z.string(),
    status: RoomStatusSchema,
    createdAt: TimestampOrNumber,
    lastActivity: TimestampOrNumber,
    isPrivate: z.boolean(),
    settingsLocked: z.boolean(),
    allowGuestSettings: z.boolean(),
    gameState: z.any().nullable(), // SyncableGameState is complex, using any for now or I can define it later
    players: z.record(z.string(), OnlinePlayerSchema),
    settings: GameSettingsSchema
});

export const RoomSummarySchema = z.object({
    id: z.string(),
    name: z.string(),
    status: RoomStatusSchema,
    playerCount: z.number(),
    maxPlayers: z.number(),
    isPrivate: z.boolean()
});

export type OnlinePlayer = z.infer<typeof OnlinePlayerSchema>;
export type Room = z.infer<typeof RoomSchema>;
export type RoomSummary = z.infer<typeof RoomSummarySchema>;
