import { z } from 'zod';
import { GameSettingsSchema } from './gameSettingsSchema';

const FirestoreTimestampSchema = z.object({
    seconds: z.number(),
    nanoseconds: z.number()
});

const TimestampOrNumber = z.union([z.number(), FirestoreTimestampSchema]);

export const OnlinePlayerSchema = z.object({
    id: z.string(),
    name: z.string().min(1).max(50),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/).default('#4A90E2'),
    isReady: z.boolean().default(false),
    joinedAt: z.any(),
    isOnline: z.boolean().default(true),
    isWatchingReplay: z.boolean().optional(),
    lastSeen: z.any().optional(),
    isDisconnected: z.boolean().optional(),
    disconnectStartedAt: z.any().optional()
}).passthrough();

export const OnlineRoomStatusSchema = z.enum(['waiting', 'playing', 'finished']);

// Спрощена схема налаштувань для онлайн, максимально гнучка
export const OnlineSettingsSchema = z.object({
    boardSize: z.number().min(2).max(20).default(4),
    blockModeEnabled: z.boolean().default(false),
    blockOnVisitCount: z.number().min(0).default(0),
    gameMode: z.string().nullable().optional(),
    turnDuration: z.number().optional(),
    settingsLocked: z.boolean().optional(),
}).passthrough(); // Дозволяємо будь-які інші поля

export const RoomSchema = z.object({
    id: z.string(),
    name: z.string().min(1).max(100),
    hostId: z.string(),
    status: z.string(), // Спрощуємо до string для стабільності
    createdAt: z.any(),
    lastActivity: z.any(),
    isPrivate: z.any(),
    settingsLocked: z.any(),
    allowGuestSettings: z.any(),
    gameState: z.any().nullable(),
    players: z.any(), // Радикально!
    settings: z.any(), // Радикально!
    maxPlayers: z.any()
}).passthrough();

export const RoomSummarySchema = z.object({
    id: z.string(),
    name: z.string(),
    status: OnlineRoomStatusSchema,
    playerCount: z.number(),
    maxPlayers: z.number(),
    isPrivate: z.boolean()
});

export type OnlinePlayer = z.infer<typeof OnlinePlayerSchema>;
export type Room = z.infer<typeof RoomSchema>;
export type RoomSummary = z.infer<typeof RoomSummarySchema>;

// Aliases for compatibility
export const OnlineRoomSchema = RoomSchema;
export type OnlineRoom = Room;
export type PlayerData = OnlinePlayer;
export type GameStateData = any;
