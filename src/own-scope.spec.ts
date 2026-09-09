// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * НА СПІЛЬНОМУ ORIGIN «СТЕРТИ ВСЕ» ОЗНАЧАЄ «СТЕРТИ ЧУЖЕ»
 * (STORAGE-NAMESPACE § 1, DEBUGGING § `DBG-HARD-RESET`, CRITICAL).
 *
 * ## Що саме тут було зламане
 *
 * `maintenanceService.hardReset()` (жест `r`) фільтрував і кеші, і реєстрації
 * service worker — з докблоком, який навіть називав сусіда, що робить це
 * неправильно. А другий шлях аварійного скидання,
 * `appInitializationService.performHardReload()` (критичне оновлення за
 * `minVersion`), ходив по всьому origin:
 *
 * ```ts
 * for (const registration of await navigator.serviceWorker.getRegistrations())
 *     await registration.unregister();
 * for (const key of await caches.keys()) await caches.delete(key);
 * ```
 *
 * Обидва API не знають нічого про підшлях: на `alik532ua.github.io` вони
 * віддають реєстрації й кеші ВСІХ проєктів акаунта. Тобто одне критичне
 * оновлення MindStep знімало service worker і витирало офлайн-кеш кожного
 * сусіднього сайту — і шукати причину довелося б у чужому репозиторії.
 *
 * Третє місце того самого класу — прибирання старого `sw.js` у
 * `+layout.svelte`: воно фільтрувало за `scriptURL.endsWith('/sw.js')`, а цим
 * умовам відповідає й сусідський `…/Slovko/sw.js`.
 *
 * ## Чому перевірка по джерелах, а не тест поведінки
 *
 * Дефект — у ВІДСУТНОСТІ фільтра, а не в його логіці. Тест поведінки довелося б
 * писати на кожен виклик окремо, і четвертий виклик, доданий завтра, він не
 * побачив би. Тут перевіряється саме те, що ламалося: виклик є, фільтра немає.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Повернути `for (const registration of registrations)` в
 * `appInitializationService.ts` → «getRegistrations() без фільтра» червоніє й
 * називає файл. Те саме з `caches.keys()`.
 */

const ROOT = 'src';

/** Єдиний модуль, якому дозволено знати, як виглядає межа «своє». */
const FILTER_MODULE = 'src/lib/services/ownScope.ts';

function sources(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) sources(full, out);
		else if (/\.(ts|svelte)$/.test(entry) && !/\.(spec|test)\.ts$/.test(entry)) out.push(full);
	}
	return out;
}

const files = sources(ROOT).map((path) => ({ path, code: readFileSync(path, 'utf8') }));

describe('перевірка жива', () => {
	it('джерела знайдено', () => {
		expect(files.length, 'сканер не знайшов джерел — порівнювати нема з чим').toBeGreaterThan(50);
	});

	it('модуль із фільтрами існує й експортує обидва', () => {
		const filter = files.find((f) => f.path === FILTER_MODULE);
		expect(filter, `${FILTER_MODULE} зник — усі перевірки нижче стали б порожніми`).toBeDefined();
		expect(filter?.code).toMatch(/export function ownRegistrations/);
		expect(filter?.code).toMatch(/export function ownCacheNames/);
	});

	it('виклики, які перевіряються, у проєкті справді є', () => {
		const callers = files.filter((f) => /getRegistrations\(\)|caches\.keys\(\)/.test(f.code));
		expect(
			callers.length,
			'жодного виклику getRegistrations()/caches.keys() — перевірка дивиться не туди'
		).toBeGreaterThan(1);
	});
});

describe('аварійне скидання стирає лише своє (DBG-HARD-RESET)', () => {
	it('getRegistrations() ніде не обходиться без ownRegistrations()', () => {
		const offenders = files
			.filter((f) => f.path !== FILTER_MODULE)
			.filter((f) => /getRegistrations\(\)/.test(f.code))
			.filter((f) => !/ownRegistrations\s*\(/.test(f.code))
			.map((f) => f.path);
		expect(
			offenders,
			'getRegistrations() віддає реєстрації ВСЬОГО origin — без фільтра за scope ' +
				`тут знімається service worker сусіднього проєкту:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('caches.keys() ніде не обходиться без ownCacheNames()', () => {
		const offenders = files
			.filter((f) => f.path !== FILTER_MODULE)
			.filter((f) => /caches\.keys\(\)/.test(f.code))
			.filter((f) => !/ownCacheNames\s*\(/.test(f.code))
			.map((f) => f.path);
		expect(
			offenders,
			'caches.keys() віддає імена кешів ВСЬОГО origin — без фільтра за префіксом ' +
				`тут витирається офлайн-кеш сусіднього проєкту:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('localStorage.clear() і sessionStorage.clear() не викликаються в застосунку', () => {
		const offenders = files
			.filter((f) => /(?:local|session)Storage\.clear\s*\(/.test(f.code))
			.map((f) => f.path);
		expect(
			offenders,
			'clear() на спільному origin витирає дані сусіднього застосунку; ' +
				`своє знімає storageService.clear() за префіксом:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('префікс кешів не дублюється літералом — він той самий, що у сховища', () => {
		const filter = files.find((f) => f.path === FILTER_MODULE)!;
		expect(
			filter.code,
			'ownCacheNames мусить брати префікс із config/storage, а не мати власний рядок'
		).toMatch(/STORAGE_PREFIX/);
	});
});
