import { describe, it, expect, vi } from 'vitest';

/**
 * ТРАНСПОРТ RTDB — те, через що онлайн мовчки не з'єднувався в продакшні.
 *
 * ## Що ловить цей файл
 *
 * RTDB починає з'єднання не з вебсокета, а з ДОВГОГО ОПИТУВАННЯ, і робить його
 * вставлянням тега `<script src=".../.lp?...">`. Тобто це підвантаження
 * стороннього скрипта — воно підпадає під `script-src`, а не під `connect-src`.
 * Наша політика дозволяє `wss://*.firebasedatabase.app` у `connect-src`, але з
 * того домену не дозволяє жодного скрипта, тож початковий транспорт блокувався
 * щоразу, а до вебсокета справа не доходила: SDK підвищує транспорт лише ПІСЛЯ
 * вдалого опитування.
 *
 * Симптому в коді немає ЗОВСІМ: `getDatabase()` не кидає, підписки просто
 * мовчать. Видно це було лише в консолі бойового сайту — «Loading the script …
 * violates … script-src» на кожній спробі.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `forceWebSockets()`
 * з `getRealtimeDb()` — обидві перевірки нижче червоніють.
 */

const calls: string[] = [];

vi.mock('firebase/app', () => ({
	initializeApp: vi.fn(() => ({ name: 'test-app' })),
	getApps: vi.fn(() => [])
}));

vi.mock('firebase/database', () => ({
	getDatabase: vi.fn(() => {
		calls.push('getDatabase');
		return { kind: 'rtdb' };
	}),
	forceWebSockets: vi.fn(() => {
		calls.push('forceWebSockets');
	}),
	connectDatabaseEmulator: vi.fn()
}));

vi.mock('firebase/firestore', () => ({
	getFirestore: vi.fn(),
	connectFirestoreEmulator: vi.fn()
}));

vi.mock('firebase/auth', () => ({
	getAuth: vi.fn(),
	connectAuthEmulator: vi.fn()
}));

vi.mock('./logService.svelte', () => ({
	logService: { init: vi.fn(), error: vi.fn(), warn: vi.fn(), info: vi.fn() }
}));

const { getRealtimeDb } = await import('./firebaseService');
const { forceWebSockets } = await import('firebase/database');

describe('getRealtimeDb', () => {
	it('вимикає довге опитування', () => {
		getRealtimeDb();
		expect(forceWebSockets).toHaveBeenCalled();
	});

	/**
	 * ПОРЯДОК ТУТ — ЧАСТИНА ПРАВИЛА: перемикач транспорту діє на з'єднання, які
	 * ще не створені. Викликаний після `getDatabase()`, він не завадив би SDK
	 * піти по опитування — тобто рядок був би на місці, а дефект лишився б.
	 */
	it('робить це ДО створення бази', () => {
		expect(calls.indexOf('forceWebSockets')).toBeGreaterThanOrEqual(0);
		expect(calls.indexOf('forceWebSockets')).toBeLessThan(calls.indexOf('getDatabase'));
	});
});
