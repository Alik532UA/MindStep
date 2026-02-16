import { z } from 'zod';

export const UnlockedRewardSchema = z.object({
    id: z.string(),
    unlockedAt: z.number()
});

export const RewardsStateSchema = z.object({
    unlockedRewards: z.record(z.string(), UnlockedRewardSchema),
    hasUnseenRewards: z.boolean()
});

export type UnlockedReward = z.infer<typeof UnlockedRewardSchema>;
export type RewardsState = z.infer<typeof RewardsStateSchema>;
