import { describe, expect, it, vi, beforeEach } from 'vitest';

/**
 * ЖИВИЙ ПЕРЕЛІК КІМНАТ: підписка чекає на вхід і скасовується до нього.
 *
 * ## Що ловить цей файл
 *
 * Скарга автора: у MindStep кімната, створена в сусідньому вікні, з'являлася лише
 * після натиску «Оновити», а у `VetCrewGames` перелік оновлюється сам. Живої
 * підписки при цьому НЕ БРАКУВАЛО — `subscribeToPublicRooms` лежав у сервісі
 * готовим і не мав жодного виклику, а екран читав перелік одноразово на
 * монтуванні.
 *
 * Але просто підключити його було не можна, і саме це перевіряється тут. Правило
 * `allow list` вимагає авторизованого, а анонімний вхід асинхронний: підписка,
 * відкрита раніше за вхід, отримує відмову ПЕРШИМ ЖЕ знімком — тобто повернувся б
 * той самий дефект «перелік не прочитався» при живій кімнаті в сусідньому вікні.
 *
 * Друге твердження — про гроші й про знищений компонент: функція віддає
 * «відписатися» одразу, тому людина може піти з екрана раніше, ніж повернеться
 * вхід. Без прапорця скасування слухач відкрився б уже після того, як екран зник.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `ensureUser` —
 * червоніє «слухач відкривається лише після входу»; прибрати прапорець —
 * червоніє «відписка до входу не відкриває слухача».
 */

const ensureUser = vi.fn();
const subscribe = vi.fn();
const unsubscribe = vi.fn();

vi.mock('./authService', () => ({ authService: { ensureUser: () => ensureUser() } }));
vi.mock('./room/roomFirestoreService', () => ({
	roomFirestoreService: {
		subscribeToPublicRooms: (...args: unknown[]) => subscribe(...args)
	}
}));
vi.mock('./logService.svelte', () => ({
	logService: new Proxy({}, { get: () => () => {} })
}));
vi.mock('./chatService', () => ({ chatService: {} }));
vi.mock('./room/roomSessionService', () => ({ roomSessionService: {} }));
vi.mock('./room/roomPlayerService', () => ({ roomPlayerService: {} }));
vi.mock('./errorHandlerService', () => ({ errorHandlerService: { handle: vi.fn() } }));

const { roomService } = await import('./roomService');

/** Вхід, який ще не завершився: тест сам вирішує, коли його віддати. */
function pendingUser() {
	let settle: (user: unknown) => void = () => {};
	ensureUser.mockReturnValue(new Promise((resolve) => (settle = resolve)));
	return (user: unknown) => {
		settle(user);
		// Мікрозавдання: `.then` у сервісі спрацює саме тут.
		return Promise.resolve();
	};
}

describe('roomService.subscribeToPublicRooms', () => {
	beforeEach(() => {
		ensureUser.mockReset();
		subscribe.mockReset();
		unsubscribe.mockReset();
		subscribe.mockReturnValue(unsubscribe);
	});

	it('слухач відкривається лише після входу', async () => {
		const signIn = pendingUser();
		roomService.subscribeToPublicRooms(() => {});

		expect(subscribe, 'до входу слухача бути не може: правило відмовить першому знімку').not.toHaveBeenCalled();

		await signIn({ uid: 'uid-1' });
		expect(subscribe).toHaveBeenCalledTimes(1);
	});

	it('відписка до входу не відкриває слухача', async () => {
		const signIn = pendingUser();
		const stop = roomService.subscribeToPublicRooms(() => {});

		stop();
		await signIn({ uid: 'uid-1' });

		expect(
			subscribe,
			'екран уже зник — слухач читав би базу за рахунок власника проєкту'
		).not.toHaveBeenCalled();
	});

	it('відписка після входу закриває слухача', async () => {
		const signIn = pendingUser();
		const stop = roomService.subscribeToPublicRooms(() => {});
		await signIn({ uid: 'uid-1' });

		stop();

		expect(unsubscribe).toHaveBeenCalledTimes(1);
	});

	/**
	 * «Увійти не вийшло» — це стан екрана, і він НЕ те саме, що «кімнат немає».
	 */
	it('невдалий вхід віддає «не прочиталося», а не порожній перелік', async () => {
		const signIn = pendingUser();
		const seen: Array<{ rooms: unknown[]; unavailable?: boolean }> = [];
		roomService.subscribeToPublicRooms((result) => seen.push(result));

		await signIn(null);

		expect(subscribe).not.toHaveBeenCalled();
		expect(seen).toEqual([{ rooms: [], unavailable: true }]);
	});
});
