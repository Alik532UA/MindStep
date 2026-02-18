import type { RewardsState, UnlockedReward } from '$lib/types/rewards';
import { logService } from '$lib/services/logService';
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFirebaseApp } from '$lib/services/firebaseService';
import { RewardsStateSchema } from '$lib/schemas/rewardsSchema';

const STORAGE_KEY = 'sotb_rewards';

const defaultState: RewardsState = {
    unlockedRewards: {},
    hasUnseenRewards: false
};

class RewardsStateRune {
    private _state = $state<RewardsState>({ ...defaultState });

    get state() { return this._state; }
    set state(value: RewardsState) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: RewardsState) => RewardsState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    private getDb() {
        try {
            return getFirestore(getFirebaseApp());
        } catch (e) {
            return null;
        }
    }

    init() {
        if (typeof window === 'undefined') return;

        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                const validation = RewardsStateSchema.safeParse(parsed);
                
                if (validation.success) {
                    this._state = validation.data;
                    logService.info('[RewardsState] Loaded validated state from localStorage');
                } else {
                    logService.error('[RewardsState] Invalid state in localStorage, resetting to defaults.', validation.error.format());
                    this.reset();
                }
            }
        } catch (e) {
            logService.error('[RewardsState] Failed to load from localStorage', e);
        }
        this.notifySubscribers();
    }

    unlock(rewardId: string) {
        if (this._state.unlockedRewards[rewardId]) return;

        const newReward: UnlockedReward = {
            id: rewardId,
            unlockedAt: Date.now()
        };

        this._state.unlockedRewards = {
            ...this._state.unlockedRewards,
            [rewardId]: newReward
        };
        this._state.hasUnseenRewards = true;

        // Зберігаємо локально
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
        }

        // Зберігаємо в хмару
        const auth = getAuth(getFirebaseApp());
        const user = auth.currentUser;
        const db = this.getDb();

        if (user && db) {
            const userRef = doc(db, 'users', user.uid);
            const updateData = {
                [`unlockedRewards.${rewardId}`]: newReward
            };
            updateDoc(userRef, updateData).catch(err => {
                if (err.code === 'not-found') {
                    setDoc(userRef, { unlockedRewards: { [rewardId]: newReward } }, { merge: true });
                } else {
                    logService.error('[RewardsState] Cloud save failed', err);
                }
            });
        }

        logService.info(`[RewardsState] Unlocked reward: ${rewardId}`);
        this.notifySubscribers();
    }

    markAllAsSeen() {
        this._state.hasUnseenRewards = false;
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
        }
        this.notifySubscribers();
    }

    async syncWithCloud(uid: string) {
        const db = this.getDb();
        if (!db) return;

        const userRef = doc(db, 'users', uid);

        try {
            const snap = await getDoc(userRef);
            let remoteRewards: Record<string, UnlockedReward> = {};

            if (snap.exists()) {
                remoteRewards = snap.data().unlockedRewards || {};
            }

            const mergedRewards = { ...this._state.unlockedRewards };
            let hasChangesToUpload = false;

            for (const [id, reward] of Object.entries(remoteRewards)) {
                if (!mergedRewards[id]) {
                    mergedRewards[id] = reward;
                } else {
                    if (reward.unlockedAt < mergedRewards[id].unlockedAt) {
                        mergedRewards[id] = reward;
                    }
                }
            }

            for (const id of Object.keys(mergedRewards)) {
                if (!remoteRewards[id]) {
                    hasChangesToUpload = true;
                }
            }

            this._state.unlockedRewards = mergedRewards;
            
            if (typeof window !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
            }

            if (hasChangesToUpload) {
                await setDoc(userRef, { unlockedRewards: mergedRewards }, { merge: true });
                logService.action('[RewardsState] Synced local rewards to cloud.');
            } else {
                logService.action('[RewardsState] Synced cloud rewards to local.');
            }

        } catch (e) {
            logService.error('[RewardsState] Sync failed', e);
        }
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...defaultState };
        if (typeof window !== 'undefined') {
            localStorage.removeItem(STORAGE_KEY);
        }
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: RewardsState) => void> = new Set();

    subscribe(fn: (s: RewardsState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const rewardsState = new RewardsStateRune();
