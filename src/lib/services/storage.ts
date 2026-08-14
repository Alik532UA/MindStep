/**
 * Storage Service — фасад над `localStorage` (STORAGE-NAMESPACE-v8).
 *
 * Забезпечує ізоляцію даних MindStep на спільному домені й — головне —
 * **ніколи не кидає**.
 *
 * Перевірки `typeof window !== 'undefined'` досить для prerender і недосить
 * для браузера: сховище буває на місці й при цьому кидає.
 *
 * - `setItem` кидає `QuotaExceededError` при переповненні — а сюди пишуться
 *   налаштування гри, стан онлайн-сесії та кеш словників;
 * - у приватному режимі частини браузерів запис кидає завжди;
 * - у сторінці, відкритій у чужому iframe із заблокованим стороннім сховищем,
 *   кидає вже сам ДОСТУП до `localStorage`, тобто `typeof`-перевірка сама.
 *
 * До цього виняток летів у місце виклику: `setJSON` без обгортки викликається
 * зі збереження налаштувань, стану дошки й онлайн-присутності. Один такий
 * виняток — і застосунок стає.
 */
import { STORAGE_PREFIX, getStorageKey } from '$lib/config/storage';

/**
 * Вимикається назавжди після першої відмови: у приватному режимі вона не
 * тимчасова, а сотні спроб за сесію коштують і часу, і засміченої консолі.
 */
let available = true;

function fail(operation: string, key: string, error: unknown): void {
	if (available) {
		// Одне попередження на сесію, не на виклик. `console.warn`, а не
		// logService: сховище падає й на старті, до ініціалізації сервісів.
		console.warn(`[storage] сховище недоступне (${operation} «${key}») — працюємо без нього`, error);
	}
	available = false;
}

function ls(): Storage | null {
	if (!available) return null;
	try {
		return typeof localStorage !== 'undefined' ? localStorage : null;
	} catch (e) {
		fail('access', '—', e);
		return null;
	}
}

export const storageService = {
	/** Значення за ключем; `null`, якщо ключа немає або сховище недоступне. */
	get(key: string): string | null {
		const store = ls();
		if (!store) return null;
		try {
			return store.getItem(getStorageKey(key));
		} catch (e) {
			fail('get', key, e);
			return null;
		}
	},

	/** `false` означає, що значення НЕ збережено — квота, приватний режим або SSR. */
	set(key: string, value: string): boolean {
		const store = ls();
		if (!store) return false;
		try {
			store.setItem(getStorageKey(key), value);
			return true;
		} catch (e) {
			// Втратити збереження прийнятно; втратити застосунок — ні.
			fail('set', key, e);
			return false;
		}
	},

	remove(key: string): void {
		const store = ls();
		if (!store) return;
		try {
			store.removeItem(getStorageKey(key));
		} catch (e) {
			fail('remove', key, e);
		}
	},

	/** Очищує ТІЛЬКИ дані цього проєкту (з префіксом `mindstep_`). */
	clear(): void {
		const store = ls();
		if (!store) return;
		try {
			const keysToRemove: string[] = [];
			for (let i = 0; i < store.length; i++) {
				const key = store.key(i);
				if (key?.startsWith(STORAGE_PREFIX)) {
					keysToRemove.push(key);
				}
			}
			keysToRemove.forEach((k) => store.removeItem(k));
		} catch (e) {
			fail('clear', '*', e);
		}
	},

	getJSON<T>(key: string): T | null {
		const raw = this.get(key);
		if (raw === null) return null;
		try {
			return JSON.parse(raw) as T;
		} catch {
			return null;
		}
	},

	setJSON(key: string, value: unknown): boolean {
		let raw: string;
		try {
			raw = JSON.stringify(value);
		} catch (e) {
			// Циклічна структура: кидає JSON.stringify, а не сховище. Тому
			// `available` тут НЕ вимикається — сховище справне, дані зіпсовані.
			console.warn(`[storage] значення «${key}» не серіалізується`, e);
			return false;
		}
		return this.set(key, raw);
	}
};
