import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { storageService } from './storage';
import { STORAGE_PREFIX } from '$lib/config/storage';

/** Мінімальне сховище в пам'яті — обходить особливості localStorage у jsdom. */
function makeMemoryStorage(overrides: Partial<Storage> = {}): Storage {
	const m = new Map<string, string>();
	return {
		get length() {
			return m.size;
		},
		key: (i: number) => Array.from(m.keys())[i] ?? null,
		getItem: (k: string) => (m.has(k) ? (m.get(k) as string) : null),
		setItem: (k: string, v: string) => {
			m.set(k, String(v));
		},
		removeItem: (k: string) => {
			m.delete(k);
		},
		clear: () => {
			m.clear();
		},
		...overrides
	} as Storage;
}

/**
 * Прапорець «сховище відмовило» живе в модулі й не скидається між тестами,
 * тому кожен тест на відмову бере СВІЙ екземпляр модуля. Інакше перший із них
 * вимкнув би сховище для решти, і ті проходили б з неправильної причини.
 */
async function freshStorage(localStorageStub: unknown) {
	vi.resetModules();
	vi.stubGlobal('localStorage', localStorageStub);
	return (await import('./storage')).storageService;
}

describe('storageService', () => {
	beforeEach(() => vi.stubGlobal('localStorage', makeMemoryStorage()));
	afterEach(() => {
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
	});

	it('додає префікс mindstep_ до кожного ключа', () => {
		storageService.set('theme', 'dark');
		expect(localStorage.getItem(STORAGE_PREFIX + 'theme')).toBe('dark');
		// Ключ без префікса — чужий, його не чіпаємо.
		expect(localStorage.getItem('theme')).toBeNull();
		expect(storageService.get('theme')).toBe('dark');
	});

	it('clear() чистить лише свої ключі, а сусідні застосунки не чіпає', () => {
		storageService.set('theme', 'dark');
		localStorage.setItem('slovko_theme', 'light');
		localStorage.setItem('theme', 'light');

		storageService.clear();

		expect(storageService.get('theme')).toBeNull();
		expect(localStorage.getItem('slovko_theme')).toBe('light');
		expect(localStorage.getItem('theme')).toBe('light');
	});

	it('getJSON повертає null на зіпсованому JSON, а не кидає', () => {
		localStorage.setItem(STORAGE_PREFIX + 'settings', '{не json');
		expect(storageService.getJSON('settings')).toBeNull();
	});

	// --- Далі — те, через що фасад узагалі переписаний: він не кидає. ---

	it('set() повертає false, а не кидає, коли скінчилася квота', async () => {
		const s = await freshStorage(
			makeMemoryStorage({
				setItem: () => {
					throw new DOMException('quota', 'QuotaExceededError');
				}
			})
		);
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		expect(() => s.set('theme', 'dark')).not.toThrow();
		expect(s.set('theme', 'dark')).toBe(false);
	});

	it('setJSON() не кидає на переповненні — саме через нього пишуться налаштування', async () => {
		const s = await freshStorage(
			makeMemoryStorage({
				setItem: () => {
					throw new DOMException('quota', 'QuotaExceededError');
				}
			})
		);
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		expect(() => s.setJSON('gameSettings', { size: 4 })).not.toThrow();
		expect(s.setJSON('gameSettings', { size: 4 })).toBe(false);
	});

	it('setJSON() повертає false на циклічній структурі й не вимикає сховище', () => {
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		const cyclic: Record<string, unknown> = {};
		cyclic.self = cyclic;
		expect(storageService.setJSON('cyclic', cyclic)).toBe(false);
		// Сховище справне — зіпсовані були дані, тому наступний запис проходить.
		expect(storageService.set('theme', 'dark')).toBe(true);
	});

	it('виживає, коли кидає сам доступ до localStorage (iframe без прав)', async () => {
		vi.resetModules();
		Object.defineProperty(globalThis, 'localStorage', {
			configurable: true,
			get() {
				throw new DOMException('blocked', 'SecurityError');
			}
		});
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		const s = (await import('./storage')).storageService;
		expect(s.get('theme')).toBeNull();
		expect(s.set('theme', 'dark')).toBe(false);
		expect(() => s.clear()).not.toThrow();
	});

	it('попереджає в консоль один раз, а не на кожен виклик', async () => {
		const s = await freshStorage(
			makeMemoryStorage({
				setItem: () => {
					throw new DOMException('quota', 'QuotaExceededError');
				}
			})
		);
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
		s.set('a', '1');
		s.set('b', '2');
		s.set('c', '3');
		expect(warn).toHaveBeenCalledTimes(1);
	});
});
