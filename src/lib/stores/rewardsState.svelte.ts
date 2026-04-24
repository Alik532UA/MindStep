// src/lib/stores/rewardsState.svelte.ts
import { storageService } from '$lib/services/storage';
import { logService } from '$lib/services/logService.svelte';
import { RewardsStateSchema, type RewardsStateData } from '$lib/schemas/rewardsSchema';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';
import { getFirebaseApp } from '$lib/services/firebaseService';

const STORAGE_KEY = 'rewards';
const defaultState: RewardsStateData = {
    unlockedItems: [],
    hasUnseenRewards: false
};

class RewardsState {
    private _state = $state<RewardsStateData>(defaultState);
    private subscribers: Set<(s: RewardsStateData) => void> = new Set();

    constructor() {
        this.loadLocal();
    }

    get state() { return this._state; }

    private loadLocal() {
        if (typeof window === 'undefined') return;

        try {
            const stored = storageService.getJSON<RewardsStateData>(STORAGE_KEY);
            if (stored) {
                const validation = RewardsStateSchema.safeParse(stored);
                if (validation.success) {
                    this._state = validation.data;
                    logService.info('[RewardsState] Loaded validated state from storageService');
                } else {
                    logService.error('[RewardsState] Invalid state in storageService, resetting to defaults.', validation.error.format());
                    this.reset();
                }
            }
        } catch (e) {
            logService.error('[RewardsState] Failed to load from storageService', e);
        }
        this.notifySubscribers();
    }

    private saveLocal() {
        if (typeof window !== 'undefined') {
            storageService.setJSON(STORAGE_KEY, this._state);
        }
    }

    unlock(itemId: string) {
        if (!this._state.unlockedItems.includes(itemId)) {
            this._state.unlockedItems.push(itemId);
            this._state.hasUnseenRewards = true;
            this.saveLocal();
            this.notifySubscribers();
        }
    }

    markAllSeen() {
        this._state.hasUnseenRewards = false;
        this.saveLocal();
        this.notifySubscribers();
    }

    async syncWithCloud(uid: string) {
        const db = getFirestore(getFirebaseApp());
        const docRef = doc(db, 'rewards', uid);
        
        try {
            const snap = await getDoc(docRef);
            if (snap.exists()) {
                const cloudData = snap.data() as RewardsStateData;
                // Merge local and cloud items
                const localItems = this._state.unlockedItems;
                const cloudItems = cloudData.unlockedItems || [];
                const mergedItems = Array.from(new Set([...localItems, ...cloudItems]));
                
                this._state.unlockedItems = mergedItems;
                this.saveLocal();
                
                // If local had more items, sync back to cloud
                if (localItems.some(i => !cloudItems.includes(i))) {
                    await setDoc(docRef, { unlockedItems: mergedItems }, { merge: true });
                }
            } else {
                // Upload local data to cloud
                await setDoc(docRef, this._state);
            }
        } catch (e) {
            logService.error('[RewardsState] Sync error', e);
        }
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...defaultState };
        if (typeof window !== 'undefined') {
            storageService.remove(STORAGE_KEY);
        }
        this.notifySubscribers();
    }

    subscribe(fn: (s: RewardsStateData) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const rewardsState = new RewardsState();
