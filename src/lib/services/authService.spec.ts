import { describe, it, expect, vi, beforeEach } from 'vitest';

/**
 * `ensureUser` — те, чого бракувало екрану онлайну.
 *
 * ## Що ловить цей файл
 *
 * Анонімний вхід у проєкті відбувається НА ВИМОГУ: кожне місце, якому потрібен
 * `uid`, само перевіряє поточного користувача й, якщо порожньо, входить. Перелік
 * кімнат цього не робив — і йшов у Firestore без користувача, а правило
 * `allow list: if signedIn()` його відмовляло. На екрані це виглядало як «Кімнат
 * не знайдено» при живій кімнаті в сусідньому вікні.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `pendingSignIn` —
 * червоніє «два одночасні виклики входять РАЗ»; прибрати `catch` — червоніє
 * «невдалий вхід віддає null, а не кидає».
 */

const auth = { currentUser: null as { uid: string } | null };
const signInAnonymously = vi.fn();

vi.mock('firebase/auth', () => ({
	signInAnonymously: (...args: unknown[]) => signInAnonymously(...args),
	onAuthStateChanged: vi.fn(() => () => {}),
	signOut: vi.fn(),
	EmailAuthProvider: { credential: vi.fn() },
	GoogleAuthProvider: vi.fn(),
	linkWithCredential: vi.fn(),
	signInWithEmailAndPassword: vi.fn(),
	sendPasswordResetEmail: vi.fn(),
	deleteUser: vi.fn(),
	updatePassword: vi.fn(),
	reauthenticateWithCredential: vi.fn(),
	reauthenticateWithPopup: vi.fn()
}));

vi.mock('./firebaseService', () => ({
	getFirebaseAuth: () => auth
}));

vi.mock('./logService.svelte', () => ({
	logService: { init: vi.fn(), error: vi.fn(), info: vi.fn(), warn: vi.fn() }
}));

vi.mock('./auth/userProfileService', () => ({
	userProfileService: {
		syncUserProfile: vi.fn(),
		watchUserProfile: vi.fn(),
		stopWatching: vi.fn()
	}
}));

vi.mock('$lib/stores/authState.svelte', () => ({
	currentUserStore: { user: null }
}));

const { authService } = await import('./authService');

describe('authService.ensureUser', () => {
	beforeEach(() => {
		auth.currentUser = null;
		signInAnonymously.mockReset();
	});

	it('віддає того, хто вже ввійшов, і мережі не чіпає', async () => {
		auth.currentUser = { uid: 'uid-already' };
		const user = await authService.ensureUser();
		expect(user).toEqual({ uid: 'uid-already' });
		expect(signInAnonymously).not.toHaveBeenCalled();
	});

	it('входить анонімно, коли користувача немає', async () => {
		signInAnonymously.mockResolvedValue({ user: { uid: 'uid-new' } });
		const user = await authService.ensureUser();
		expect(user).toEqual({ uid: 'uid-new' });
		expect(signInAnonymously).toHaveBeenCalledTimes(1);
	});

	/**
	 * Два одночасні виклики — ОДИН вхід. Інакше лобі й профіль на тій самій
	 * сторінці почали б два входи, а другий отримав би іншого анонімного
	 * користувача — тобто дві різні особи в одному браузері.
	 */
	it('два одночасні виклики входять РАЗ', async () => {
		signInAnonymously.mockImplementation(
			() => new Promise((resolve) => setTimeout(() => resolve({ user: { uid: 'uid-one' } }), 10))
		);
		const [first, second] = await Promise.all([authService.ensureUser(), authService.ensureUser()]);
		expect(first).toEqual({ uid: 'uid-one' });
		expect(second).toEqual({ uid: 'uid-one' });
		expect(signInAnonymously).toHaveBeenCalledTimes(1);
	});

	/**
	 * Невдалий вхід віддає `null`, а не кидає: «увійти не вийшло» — це стан
	 * екрана, і він НЕ те саме, що «даних немає».
	 */
	it('невдалий вхід віддає null, а не кидає', async () => {
		signInAnonymously.mockRejectedValue(new Error('network down'));
		await expect(authService.ensureUser()).resolves.toBeNull();
	});

	it('після невдачі наступна спроба входить знову', async () => {
		signInAnonymously.mockRejectedValueOnce(new Error('network down'));
		expect(await authService.ensureUser()).toBeNull();

		signInAnonymously.mockResolvedValue({ user: { uid: 'uid-later' } });
		expect(await authService.ensureUser()).toEqual({ uid: 'uid-later' });
	});
});
