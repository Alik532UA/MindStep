import { signInAnonymously, onAuthStateChanged, signOut, type User, type Auth, EmailAuthProvider, GoogleAuthProvider, linkWithCredential, signInWithEmailAndPassword, sendPasswordResetEmail, deleteUser, updatePassword, reauthenticateWithCredential, reauthenticateWithPopup } from 'firebase/auth';
import { getFirebaseAuth } from './firebaseService';
import { currentUserStore } from '$lib/stores/authState.svelte';
import { logService } from "./logService.svelte";
import { userProfileService } from './auth/userProfileService';
import { rewardsState } from '$lib/stores/rewardsState.svelte';

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

    /**
     * ПОВТОРНА АВТЕНТИФІКАЦІЯ перед незворотною дією.
     *
     * Firebase вимагає свіжого входу для зміни пароля й видалення акаунта, і
     * відмовляє з `auth/requires-recent-login`. Доти цього не було зовсім: обидві
     * дії кликалися прямо, і на сесії, старшій за кілька хвилин, вони просто
     * відмовляли — а на екрані це виглядало як «не працює кнопка».
     *
     * Спосіб той самий, яким людина входила: пароль або вікно Google. Сусідній
     * `Slovko` розгалужується так само, і саме звідти взято форму.
     */
    private async reauthenticate(user: User, password?: string): Promise<void> {
        const byGoogle = user.providerData.some((p) => p.providerId === 'google.com');
        if (password && user.email) {
            await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email, password));
        } else if (byGoogle) {
            await reauthenticateWithPopup(user, new GoogleAuthProvider());
        }
    }

    /**
     * Видалити акаунт: підтвердити вхід, прибрати ДАНІ, аж тоді користувача.
     *
     * ## Порядок не переставляється
     *
     * Після `deleteUser()` токена немає, а правила Firestore вимагають
     * `request.auth != null` усюди, де лежать дані гравця. Тобто все, що не
     * прибрано ДО, лишається в базі назавжди — і прибрати це не зможе вже ніхто,
     * включно з самою людиною. Доти прибирання не було жодного: рекорд у публічній
     * таблиці лідерів переживав видалення акаунта й далі показувався всім.
     */
    async deleteAccount(password?: string) {
        const user = this.auth.currentUser;
        if (!user) return false;
        try {
            await this.reauthenticate(user, password);
            await userProfileService.eraseCloudData(user.uid);
            await deleteUser(user);
            // Місцеве стирається ПІСЛЯ успіху: інакше невдале видалення лишало б
            // людину з акаунтом, але без рекорду на цьому пристрої.
            userProfileService.clearLocalUserData();
            return true;
        } catch (e) {
            logService.error('[AuthService] Delete error', e);
            return false;
        }
    }

    /** Змінити пароль. `current` потрібен для повторної автентифікації. */
    async changePassword(newPass: string, current?: string) {
        const user = this.auth.currentUser;
        if (!user) return false;
        try {
            await this.reauthenticate(user, current);
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

    /**
     * Вийти з акаунта — і НЕ лишити в браузері нічого, що набрала людина.
     *
     * ## Чому місцеве стирається
     *
     * `syncUserProfile` зливає місцевий рекорд із хмарним через `Math.max`, а
     * нагороди — обʼєднанням. Доти вихід не стирав нічого, тож послідовність
     * «вийти → увійти іншим акаунтом» ПЕРЕНОСИЛА рекорд і нагороди в той акаунт:
     * рахунок можна було переписати з чужого, не знаючи ні пароля, ні пошти.
     *
     * Метод очищення при цьому в проєкті БУВ (`clearLocalUserData`) — і його не
     * кликав жоден рядок. Саме тому це не «додано прибирання», а закрито дірку,
     * яка виглядала як реалізована функція.
     *
     * ## Порядок: стерти ДО виходу
     *
     * `onAuthStateChanged` після виходу одразу входить анонімно й кличе
     * `syncUserProfile` вже під новим `uid`. Якби місцеве стиралося після, той
     * синк устиг би прочитати старий рекорд і записати його новому анонімові.
     */
    async logout() {
        try {
            userProfileService.clearLocalUserData();
            userProfileService.resetLocalProfile();
            rewardsState.reset();
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
