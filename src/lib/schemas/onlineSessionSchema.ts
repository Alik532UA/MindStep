import { z } from 'zod';

export const OnlineSessionSchema = z.object({
    roomId: z.string().nullable(),
    playerId: z.string().nullable()
});

export type OnlineSession = z.infer<typeof OnlineSessionSchema>;
