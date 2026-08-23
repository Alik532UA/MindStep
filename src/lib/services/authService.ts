import { signInAnonymously, onAuthStateChanged, signOut, type User, type Auth, EmailAuthProvider, linkWithCredential, signInWithEmailAndPassword, sendPasswordResetEmail, deleteUser, updatePassword } from 'firebase/auth';
import { getFirebaseAuth } from './firebaseService';
import { currentUserStore } from '$lib/stores/authState.svelte';
import { logService } from "./logService.svelte";
import { userProfileService } from './auth/userProfileService';

/*
 * Стан живе у `$lib/stores/authState.svelte.ts`, а не тут.
 *
 * Тут — мережа: Firebase Auth. Тримати реактивний стан в одному модулі з SDK
 * заборонено інваріантом `cloud-database.spec.ts` (§ 10.4), і причина не
 * формальна: такий модуль не підміняється в тесті й не довантажується ліниво.
 * Ре-експорт лишається, щоб не переписувати шість місць імпорту.
 */
export { currentUserStore, userStore } from '$lib/stores/authState.svelte';

class AuthService {
    /**
     * Firebase піднімається на першому звертанні, а не на імпорті модуля.
     *
     * Доти конструктор викликав `getFirebaseAuth()` прямо під час імпорту, а
     * внизу файлу стоїть синглтон `new AuthService()`. Тому будь-який файл,
     * що транзитивно тягнув цей модуль, ініціалізував Auth — зокрема
     * `LocalGameController.spec.ts`, тест ігрової логіки, який у CI падав з
     * `auth/invalid-api-key` ще до першого тесту: 77 тестів проходили, а вся
     * сюїта не збиралася.
     *
     * Віддати юніт-тестам справжні ключі було б лікуванням симптому: тести
     * ігрової логіки почали б ходити в бойовий Firebase. Тест, який не
     * торкається автентифікації, тепер її і не піднімає.
     *
     * Поле `db` прибрано разом із конструктором: воно лише присвоювалось і
     * жодного разу не читалось, тобто ініціалізувало Firestore ні для чого.
     */
    private authInstance: Auth | null = null;

    private get auth(): Auth {
        // `getFirebaseAuth()` мемоізований, тож повторні звертання безкоштовні.
        if (!this.authInstance) {
            this.authInstance = getFirebaseAuth();
        }
        return this.authInstance;
    }

    async init() {
        onAuthStateChanged(this.auth, async (user) => {
            if (user) {
                logService.init(`[AuthService] User logged in: ${user.uid} (Anon: ${user.isAnonymous})`);
                currentUserStore.user = user;
                await userProfileService.syncUserProfile(user);
            } else {
                logService.init('[AuthService] No user logged in. Signing in anonymously...');
                currentUserStore.user = null;
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
