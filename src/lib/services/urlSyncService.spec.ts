import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * АДРЕСУ ПИШЕ ОДИН, І ПИШЕ ЇЇ ЗА ЗНАЧЕННЯМ.
 *
 * ## Що ловить цей файл
 *
 * `getParamsFromUrl` читає і `board=true`, і `board=1` як істину. А писар
 * порівнював РЯДКИ — тобто бачив у `board=true` «іншe значення» й переписував.
 * Разом із другим писарем (`URLSyncManager.svelte`, який писав `String(true)`)
 * це давало нескінченне коло: двоє переписували те саме поле різними словами,
 * кожен раз через `goto`.
 *
 * Заміряно 2026-08-25 у грі вдвох: сторінка гри навігувалася раз на ~2 секунди,
 * у консолі щоразу «Navigating away. Heartbeat will stop» — серцебиття
 * присутності зупинялося й починалося по колу. Партія при цьому йшла, тож на
 * око дефекту не було видно зовсім.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути порівняння
 * рядків у `_performUpdate` — «інше написання того самого не переписується»
 * червоніє.
 */

/*
 * `vi.hoisted`, бо фабрику `vi.mock` піднімають НАД оголошеннями модуля: звичайна
 * константа тут була б ще не створена на момент виклику.
 */
const { navigations } = vi.hoisted(() => ({ navigations: [] as string[] }));

vi.mock('$app/navigation', () => ({
	goto: (url: unknown) => {
		navigations.push(String(url));
		return Promise.resolve();
	}
}));
vi.mock('./logService.svelte', () => ({
	logService: new Proxy({}, { get: () => () => {} })
}));

const { urlSyncService } = await import('./urlSyncService');

/** Мінімальне вікно: сервісові потрібні лише `href`, `pathname` і `search`. */
function atUrl(href: string) {
	const url = new URL(href);
	(globalThis as { window?: unknown }).window = {
		location: { href: url.href, pathname: url.pathname, search: url.search }
	};
}

describe('urlSyncService._performUpdate', () => {
	beforeEach(() => (navigations.length = 0));
	afterEach(() => {
		delete (globalThis as { window?: unknown }).window;
	});

	it('інше написання того самого не переписується', () => {
		atUrl('http://localhost/game/online?board=true&autohide=false&block=true');

		urlSyncService._performUpdate({
			showBoard: true,
			autoHideBoard: false,
			blockModeEnabled: true
		});

		expect(navigations, 'адреса вже означає рівно це — навігувати нема за чим').toEqual([]);
	});

	it('справжня зміна значення переписується', () => {
		atUrl('http://localhost/game/online?board=true');

		urlSyncService._performUpdate({ showBoard: false });

		expect(navigations).toHaveLength(1);
		expect(navigations[0]).toContain('board=0');
	});

	/**
	 * Написане цим писарем мусить читатися ним же як те саме значення — інакше
	 * коло повернулося б і з одним писарем.
	 */
	it('те, що записано, більше не вважається зміною', () => {
		atUrl('http://localhost/game/online?board=true');
		urlSyncService._performUpdate({ showBoard: false });

		const written = navigations[0];
		atUrl('http://localhost' + written);
		navigations.length = 0;

		urlSyncService._performUpdate({ showBoard: false });
		expect(navigations, 'другий прохід на власному написанні мусить мовчати').toEqual([]);
	});
});
