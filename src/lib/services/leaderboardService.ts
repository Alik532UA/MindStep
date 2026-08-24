// src/lib/services/leaderboardService.ts
import { logService } from './logService.svelte';
import { storageService } from './storage';
import { collection, query, where, orderBy, limit, getDocs, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { getFirestoreDb } from './firebaseService';
import { authService } from './authService';

const LOCAL_BEST_SCORE_KEY_PREFIX = 'best_score_';

export interface LeaderboardEntry {
    uid: string;
    displayName: string;
    score: number;
    boardSize: number;
    timestamp: any;
}

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
    },

    /**
     * Прибрати ВСІ свої рядки з таблиці лідерів.
     *
     * Потрібне двом речам, і обидві однаково важливі. Перше — перемикач
     * «показувати мене в таблиці»: правило бази цю згоду не перевіряє (рядок може
     * написати лише сам власник, тобто порушити її може тільки СВІЙ клієнт), тож
     * вимикання означає прибрати рядки й більше їх не писати. Друге — видалення
     * акаунта: доти рекорд видаленого лишався в публічній таблиці назавжди.
     *
     * Запитом за `uid`, а не переліком назв: ідентифікатор рядка —
     * `{uid}_{mode}_{size}`, тобто режимів і розмірів у людини стільки, скільки
     * вона зіграла. `limit` — умова доступу, а не оптимізація (§ 7.1).
     */
    async removeMyEntries(uid: string): Promise<void> {
        try {
            const db = getFirestoreDb();
            const rows = await getDocs(
                query(collection(db, 'leaderboards'), where('uid', '==', uid), limit(100))
            );
            for (const row of rows.docs) {
                await deleteDoc(row.ref).catch((error: unknown) => {
                    logService.warn('[Leaderboard] Row not removed', error);
                });
            }
        } catch (error) {
            logService.error('[Leaderboard] Rows not removed', error);
        }
    },

    /**
     * Надсилає результат у хмарну таблицю лідерів (Firebase).
     */
    async submitScore(score: number, options: { mode: string; size: number; lastPlayed: any }) {
        // Зберігаємо локально завжди
        this.saveLocalBest(options.mode, score);

        const user = authService.getCurrentUser();
        if (!user) return;

        const db = getFirestoreDb();
        const leaderboardRef = collection(db, 'leaderboards');
        
        // Створюємо унікальний ID для запису (User + Mode + Size)
        const entryId = `${user.uid}_${options.mode}_${options.size}`;
        const entryRef = doc(leaderboardRef, entryId);

        try {
            await setDoc(entryRef, {
                uid: user.uid,
                displayName: user.displayName || 'Гравець',
                score: score,
                boardSize: options.size,
                mode: options.mode,
                timestamp: serverTimestamp()
            }, { merge: true });
            
            logService.score('[Leaderboard] Score submitted to Firebase');
        } catch (e) {
            logService.error('[Leaderboard] Failed to submit score', e);
        }
    },

    /**
     * Отримує топ гравців з Firebase.
     */
    async getTopPlayers(mode: string, size: number | 'all', limitCount: number = 10): Promise<LeaderboardEntry[]> {
        const db = getFirestoreDb();
        const leaderboardRef = collection(db, 'leaderboards');
        
        let q;
        if (size === 'all') {
            q = query(
                leaderboardRef, 
                where('mode', '==', mode),
                orderBy('score', 'desc'),
                limit(limitCount)
            );
        } else {
            q = query(
                leaderboardRef, 
                where('mode', '==', mode),
                where('boardSize', '==', size),
                orderBy('score', 'desc'),
                limit(limitCount)
            );
        }

        try {
            const snap = await getDocs(q);
            return snap.docs.map(d => ({ ...d.data() } as LeaderboardEntry));
        } catch (e) {
            logService.error('[Leaderboard] Failed to fetch top players', e);
            return [];
        }
    }
};
