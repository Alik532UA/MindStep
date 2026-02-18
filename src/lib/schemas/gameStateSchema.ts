import { z } from 'zod';

// === Player State ===
export const PlayerSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.enum(['human', 'computer', 'ai']),
  color: z.string(), // Hex color regex removed for simplicity unless strict
  isComputer: z.boolean(),
  score: z.number(),
});

export const PlayerStateSchema = z.object({
  players: z.array(PlayerSchema),
  currentPlayerIndex: z.number().int().min(0),
});

// === Score State ===
export const ScoreStateSchema = z.object({
  penaltyPoints: z.number(),
  movesInBlockMode: z.number(),
  jumpedBlockedCells: z.number(),
  distanceBonus: z.number().default(0).optional(),
});

// === Board State ===
const MoveDirectionSchema = z.enum([
  'up', 'down', 'left', 'right',
  'up-left', 'up-right', 'down-left', 'down-right'
]);

const PositionSchema = z.object({
  row: z.number().int(),
  col: z.number().int(),
});

// Допоміжний об'єкт для історії ходів
const MoveHistoryItemSchema = z.object({
  pos: PositionSchema,
  blocked: z.array(PositionSchema),
  visits: z.record(z.string(), z.number()), // key: "row-col" -> count
  blockModeEnabled: z.boolean(),
  lastMove: z.object({
      direction: MoveDirectionSchema,
      distance: z.number(),
      player: z.number(),
  }).optional(),
});

const MoveQueueItemSchema = z.object({
  player: z.number(),
  direction: MoveDirectionSchema,
  distance: z.number(),
  to: PositionSchema,
});

export const BoardStateSchema = z.object({
  boardSize: z.number().int().min(4).max(20),
  board: z.array(z.array(z.number())), // 0 or 1
  playerRow: z.number().int().nullable(),
  playerCol: z.number().int().nullable(),
  cellVisitCounts: z.record(z.string(), z.number()),
  moveHistory: z.array(MoveHistoryItemSchema),
  moveQueue: z.array(MoveQueueItemSchema),
});

// === Combined Game State ===
// Використовуємо .merge() для чистого поєднання об'єктів
export const CombinedGameStateSchema = BoardStateSchema
  .merge(PlayerStateSchema)
  .merge(ScoreStateSchema)
  .merge(z.object({
    // UI State props that might be passed
    isFirstMove: z.boolean().optional(),
    selectedDirection: z.string().nullable().optional(),
    selectedDistance: z.number().nullable().optional(),
  }));

// Експортуємо типи
export type Player = z.infer<typeof PlayerSchema>;
export type PlayerState = z.infer<typeof PlayerStateSchema>;
export type ScoreState = z.infer<typeof ScoreStateSchema>;
export type BoardState = z.infer<typeof BoardStateSchema>;
export type CombinedGameState = z.infer<typeof CombinedGameStateSchema>;
