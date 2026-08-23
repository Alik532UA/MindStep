import { doc, getDoc, setDoc, type Firestore } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { getFirestoreDb } from '../firebaseService';
import { logService } from "../logService.svelte";
import { rewardsState } from '$lib/stores/rewardsState.svelte';
import { versionState } from '$lib/stores/versionState.svelte';
import { storageService } from '../storage';
import { userProfileStore, type UserProfile } from '$lib/stores/authState.svelte';

// `UserProfile` оголошений разом зі станом; тут лише ре-експорт для сумісності.
export type { UserProfile } from '$lib/stores/authState.svelte';

const getInitialProfile = (): UserProfile => {
    if (typeof window === 'undefined') {
        return { uid: 'local', displayName: null, bestTimeScore: 0, isAnonymous: true };
    }
    const localName = storageService.get('online_playerName');
    const displayName = (localName === 'Player' || !localName) ? null : localName;

    return {
        uid: 'local',
        displayName: displayName,
        bestTimeScore: parseInt(storageService.get('local_best_time_score') || '0'),
        isAnonymous: true
    };
};

/*
 * Стан живе у `$lib/stores/authState.svelte.ts` (§ 10.4: SDK і реактивний
 * модуль не змішуються). Тут — мережа: Firestore. Початкове значення
 * виставляється звідси, бо `getInitialProfile()` читає локальне сховище, а це
 * теж робота сервісу, не стану.
 */
export { userProfileStore } from '$lib/stores/authState.svelte';

// Початкове значення — з локального сховища, один раз на завантаження модуля.
userProfileStore.profile = getInitialProfile();

class UserProfileService {
    private db: Firestore;

    constructor() {
        this.db = getFirestoreDb();
    }

    async syncUserProfile(user: User) {
        const userRef = doc(this.db, 'users', user.uid);

        rewardsState.syncWithCloud(user.uid);

        try {
            const snap = await getDoc(userRef);

            const localBest = parseInt(storageService.get('local_best_time_score') || '0');
            const localNameRaw = storageService.get('online_playerName');
            const localName = (localNameRaw === 'Player') ? null : localNameRaw;

            if (snap.exists()) {
                const data = snap.data();
                const cloudBest = data.bestTimeScore || 0;
                const cloudName = data.displayName || null;

                const finalBest = Math.max(localBest, cloudBest);

                const updates: any = { lastActive: Date.now() };
                if (localBest > cloudBest) updates.bestTimeScore = localBest;

                if (!cloudName && localName) updates.displayName = localName;

                await setDoc(userRef, updates, { merge: true });

                if (cloudBest > localBest) {
                    storageService.set('local_best_time_score', cloudBest.toString());
                }
                if (cloudName) {
                    storageService.set('online_playerName', cloudName);
                }

                userProfileStore.profile = ({
                    uid: user.uid,
                    displayName: cloudName || localName,
                    bestTimeScore: finalBest,
                    isAnonymous: user.isAnonymous
                });
            } else {
                const currentVersion = versionState.state.current;
                const initialData = {
                    displayName: localName,
                    bestTimeScore: localBest,
                    createdAt: Date.now(),
                    lastActive: Date.now(),
                    createdVersion: currentVersion || 'unknown'
                };
                await setDoc(userRef, initialData);

                userProfileStore.profile = ({
                    uid: user.uid,
                    displayName: localName,
                    bestTimeScore: localBest,
                    isAnonymous: user.isAnonymous
                });
            }
        } catch (e) {
            logService.error('[UserProfileService] Sync profile failed', e);
            const localBest = parseInt(storageService.get('local_best_time_score') || '0');
            const localName = storageService.get('online_playerName');

            userProfileStore.profile = ({
                uid: user.uid,
                displayName: localName === 'Player' ? null : localName,
                bestTimeScore: localBest,
                isAnonymous: user.isAnonymous
            });
        }
    }

    async updateNickname(name: string, currentUser: User | null) {
        const nameToSave = (name && name.trim() !== '' && name !== 'Player') ? name : null;

        if (userProfileStore.profile) userProfileStore.profile.displayName = nameToSave;

        if (nameToSave) {
            storageService.set('online_playerName', nameToSave);
        } else {
            storageService.remove('online_playerName');
        }

        if (!currentUser) return;

        try {
            const { updateProfile } = await import('firebase/auth');
            await updateProfile(currentUser, { displayName: nameToSave });

            const userRef = doc(this.db, 'users', currentUser.uid);

            await setDoc(userRef, {
                displayName: nameToSave,
                lastActive: Date.now()
            }, { merge: true });

            logService.action(`[UserProfileService] Nickname updated to ${nameToSave}`);
        } catch (error) {
            logService.error('[UserProfileService] Update profile error', error);
        }
    }

    public clearLocalUserData() {
        logService.init('[UserProfileService] Clearing local user data...');
        storageService.remove('local_best_time_score');
        storageService.remove('sotb_rewards');
        storageService.remove('online_playerName');
    }

    public resetLocalProfile() {
        userProfileStore.profile = ({
            uid: 'local',
            displayName: null,
            bestTimeScore: 0,
            isAnonymous: true
        });
    }
}

export const userProfileService = new UserProfileService();
