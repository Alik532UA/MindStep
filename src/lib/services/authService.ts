import { signInAnonymously, onAuthStateChanged, signOut, type User, type Auth, EmailAuthProvider, linkWithCredential, signInWithEmailAndPassword, sendPasswordResetEmail, deleteUser, updatePassword } from 'firebase/auth';
import { type Firestore } from 'firebase/firestore';
import { getFirebaseAuth, getFirestoreDb } from './firebaseService';
import { logService } from "./logService.svelte";
import { userProfileService } from './auth/userProfileService';
import { writable } from 'svelte/store';

export const currentUserStore = writable<User | null>(null);
export const userStore = currentUserStore;

class AuthService {
    private auth: Auth;
    private db: Firestore;

    constructor() {
        this.auth = getFirebaseAuth();
        this.db = getFirestoreDb();
    }

    async init() {
        onAuthStateChanged(this.auth, async (user) => {
            if (user) {
                logService.init(`[AuthService] User logged in: ${user.uid} (Anon: ${user.isAnonymous})`);
                currentUserStore.set(user);
                await userProfileService.syncUserProfile(user);
            } else {
                logService.init('[AuthService] No user logged in. Signing in anonymously...');
                currentUserStore.set(null);
                await this.signInAnonymously();
            }
        });
    }

    async signInAnonymously() {
        try {
            const result = await signInAnonymously(this.auth);
            return result.user;
        } catch (error: any) {
            logService.error('[AuthService:SignInAnonymously] Firebase:', error);
            throw error;
        }
    }

    async linkEmailPassword(email: string, pass: string) {
        const user = this.auth.currentUser;
        if (!user) return false;
        try {
            const credential = EmailAuthProvider.credential(email, pass);
            await linkWithCredential(user, credential);
            return true;
        } catch (e) {
            logService.error('[AuthService] Link error', e);
            return false;
        }
    }

    async loginEmailPassword(email: string, pass: string) {
        try {
            await signInWithEmailAndPassword(this.auth, email, pass);
            return true;
        } catch (e) {
            logService.error('[AuthService] Login error', e);
            return false;
        }
    }

    async resetPassword(email: string) {
        try {
            await sendPasswordResetEmail(this.auth, email);
            return true;
        } catch (e) {
            logService.error('[AuthService] Reset error', e);
            return false;
        }
    }

    async deleteAccount(password?: string) {
        const user = this.auth.currentUser;
        if (!user) return false;
        try {
            // Для видалення може знадобитися ре-автентифікація, але тут спрощена версія
            await deleteUser(user);
            return true;
        } catch (e) {
            logService.error('[AuthService] Delete error', e);
            return false;
        }
    }

    async changePassword(newPass: string) {
        const user = this.auth.currentUser;
        if (!user) return false;
        try {
            await updatePassword(user, newPass);
            return true;
        } catch (e) {
            logService.error('[AuthService] Change password error', e);
            return false;
        }
    }

    async updateNickname(name: string) {
        const user = this.auth.currentUser;
        return userProfileService.updateNickname(name, user);
    }

    async logout() {
        try {
            await signOut(this.auth);
        } catch (error) {
            logService.error('[AuthService:Logout] Firebase:', error);
        }
    }

    getCurrentUser(): User | null {
        return this.auth.currentUser;
    }
}

export const authService = new AuthService();
