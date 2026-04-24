// src/lib/services/leaderboardService.ts
import { logService } from './logService.svelte';
import { storageService } from './storage';

const LOCAL_BEST_SCORE_KEY_PREFIX = 'best_score_';

export const leaderboardService = {
    /**
     * Зберігає кращий результат локально.
     */
    saveLocalBest(leaderboardKey: string, score: number): void {
        const localKey = `${LOCAL_BEST_SCORE_KEY_PREFIX}${leaderboardKey}`;
        const currentLocalBest = this.getLocalBestScore(leaderboardKey);

        if (score > currentLocalBest) {
            storageService.set(localKey, score.toString());
            logService.score(`[Leaderboard] New Local Best Saved: ${score}`);
        }
    },

    /**
     * Отримує кращий результат з локального сховища.
     */
    getLocalBestScore(leaderboardKey: string): number {
        if (typeof window === 'undefined') return 0;
        const val = storageService.get(`${LOCAL_BEST_SCORE_KEY_PREFIX}${leaderboardKey}`);
        return val ? parseInt(val, 10) : 0;
    }
};
