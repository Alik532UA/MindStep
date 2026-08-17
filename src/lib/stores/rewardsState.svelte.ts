// src/lib/stores/rewardsState.svelte.ts
import { storageService } from '$lib/services/storage';
import { logService } from '$lib/services/logService.svelte';
import { RewardsStateSchema, type RewardsState as RewardsData } from '$lib/schemas/rewardsSchema';
import { rewardsCloudService } from '$lib/services/rewardsCloudService';

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

    /**
     * Злити нагороди з хмарою.
     *
     * SDK бази тут немає: це сховище з рунами, і мережа живе окремо
     * (`rewardsCloudService`). Збій синхронізації не чіпає місцевого стану —
     * нагорода, здобута офлайн, лишається здобутою.
     */
    async syncWithCloud(uid: string) {
        const merged = await rewardsCloudService.merge(uid, this._state.unlockedRewards);
        if (merged) {
            this._state.unlockedRewards = merged as typeof this._state.unlockedRewards;
            this.saveLocal();
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
