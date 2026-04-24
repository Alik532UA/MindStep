// src/lib/stores/rewardsState.svelte.ts
import { storageService } from '$lib/services/storage';
import { logService } from '$lib/services/logService.svelte';
import { RewardsStateSchema, type RewardsState as RewardsData } from '$lib/schemas/rewardsSchema';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getFirestoreDb } from '$lib/services/firebaseService';

const STORAGE_KEY = 'rewards';
const defaultState: RewardsData = {
    unlockedRewards: {},
    hasUnseenRewards: false
};

class RewardsStore {
    private _state = $state<RewardsData>(defaultState);
    private subscribers: Set<(s: RewardsData) => void> = new Set();

    constructor() {
        this.loadLocal();
    }

    get state() { return this._state; }

    /**
     * Ініціалізація стору. Викликається ззовні для сумісності.
     */
    init() {
        this.loadLocal();
    }

    private loadLocal() {
        if (typeof window === 'undefined') return;

        try {
            const stored = storageService.getJSON<RewardsData>(STORAGE_KEY);
            if (stored) {
                const validation = RewardsStateSchema.safeParse(stored);
                if (validation.success) {
                    this._state = validation.data;
                    logService.info('[RewardsStore] Loaded validated state from storageService');
                } else {
                    logService.error('[RewardsStore] Invalid state in storageService, resetting to defaults.', validation.error.format());
                    this.reset();
                }
            }
        } catch (e) {
            logService.error('[RewardsStore] Failed to load from storageService', e);
        }
        this.notifySubscribers();
    }

    private saveLocal() {
        if (typeof window !== 'undefined') {
            storageService.setJSON(STORAGE_KEY, this._state);
        }
    }

    unlock(rewardId: string) {
        if (!this._state.unlockedRewards[rewardId]) {
            this._state.unlockedRewards[rewardId] = {
                id: rewardId,
                unlockedAt: Date.now()
            };
            this._state.hasUnseenRewards = true;
            this.saveLocal();
            this.notifySubscribers();
            logService.info(`[RewardsStore] Unlocked reward: ${rewardId}`);
        }
    }

    markAllAsSeen() {
        this._state.hasUnseenRewards = false;
        this.saveLocal();
        this.notifySubscribers();
    }

    async syncWithCloud(uid: string) {
        const db = getFirestoreDb();
        const docRef = doc(db, 'rewards', uid);
        
        try {
            const snap = await getDoc(docRef);
            if (snap.exists()) {
                const cloudData = snap.data() as RewardsData;
                const cloudRewards = cloudData.unlockedRewards || {};
                
                // Merge local and cloud
                const mergedRewards = { ...this._state.unlockedRewards, ...cloudRewards };
                
                this._state.unlockedRewards = mergedRewards;
                this.saveLocal();
                
                // Sync back if needed
                await setDoc(docRef, { unlockedRewards: mergedRewards }, { merge: true });
            } else {
                await setDoc(docRef, this._state);
            }
        } catch (e) {
            logService.error('[RewardsStore] Sync error', e);
        }
        this.notifySubscribers();
    }

    reset() {
        this._state = { 
            unlockedRewards: {},
            hasUnseenRewards: false
        };
        if (typeof window !== 'undefined') {
            storageService.remove(STORAGE_KEY);
        }
        this.notifySubscribers();
    }

    subscribe(fn: (s: RewardsData) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const rewardsState = new RewardsStore();
