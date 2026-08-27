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

/**
 * Слухач `onAuthStateChanged` тримається тут, щоб перевірка могла ВИКЛИКАТИ
 * його так, як це робить Firebase: із проігнорованим поверненим промісом.
 */
let authListener: ((user: unknown) => unknown) | null = null;
const onAuthStateChanged = vi.fn((_auth: unknown, cb: (user: unknown) => unknown) => {
	authListener = cb;
	return () => {};
});

vi.mock('firebase/auth', () => ({
	signInAnonymously: (...args: unknown[]) => signInAnonymously(...args),
	onAuthStateChanged: (a: unknown, cb: (user: unknown) => unknown) => onAuthStateChanged(a, cb),
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

/**
 * Слухач автентифікації не лишає відхилення без споживача.
 *
 * ## Привід — справжній лог із консолі
 *
 *     127.0.0.1:9099/…/accounts:signUp  net::ERR_CONNECTION_REFUSED
 *     [ERROR] [AuthService:SignInAnonymously] auth/network-request-failed
 *     [ERROR] [UnhandledRejection] auth/network-request-failed
 *     Uncaught (in promise) FirebaseError
 *
 * Ланцюг: `init()` віддає `onAuthStateChanged` ASYNC зворотний виклик, а
 * Firebase повернутий проміс ВІДКИДАЄ. Доти в тілі стояла
 * `await this.signInAnonymously()`, яка логує й перекидає далі — тобто
 * відхилення не мало споживача за побудовою. Далі
 * `window.onunhandledrejection` кликав `errorHandlerService.handle`, а той
 * типово малює тост: гравець без мережі бачив «Сталася помилка. Спробуйте
 * пізніше.» на сім секунд, хоч гра працює офлайн.
 *
 * ## Чому це перевіряється саме так
 *
 * Проміс зворотного виклику навмисно НЕ очікується — так само, як його не
 * очікує Firebase. Далі `await Promise.resolve()` дає мікрозадачам
 * прокрутитися; якби всередині лишалося відхилення, воно стало б
 * неперехопленим саме тут.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути
 * `await this.signInAnonymously()` у слухач — Vitest падає з
 * `Unhandled Rejection` замість зеленого прогону.
 */
describe('слухач автентифікації', () => {
	beforeEach(() => {
		auth.currentUser = null;
		signInAnonymously.mockReset();
		onAuthStateChanged.mockClear();
		authListener = null;
	});

	it('невдалий вхід у слухачі не стає неперехопленим відхиленням', async () => {
		const failure = Object.assign(new Error('network down'), {
			code: 'auth/network-request-failed'
		});
		signInAnonymously.mockRejectedValue(failure);

		await authService.init();
		expect(authListener, 'слухача не зареєстровано — перевіряти нічого').not.toBeNull();

		// Виклик БЕЗ await — рівно так, як це робить Firebase.
		authListener?.(null);
		await Promise.resolve();
		await Promise.resolve();

		expect(signInAnonymously).toHaveBeenCalledTimes(1);
	});

	it('слухач і сторонній виклик входять РАЗ, а не двічі', async () => {
		signInAnonymously.mockResolvedValue({ user: { uid: 'uid-anon' } });

		await authService.init();
		authListener?.(null);
		const fromElsewhere = await authService.ensureUser();

		expect(signInAnonymously).toHaveBeenCalledTimes(1);
		expect(fromElsewhere).toEqual({ uid: 'uid-anon' });
	});
});
