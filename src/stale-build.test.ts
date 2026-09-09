// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

/**
 * НОВИЙ ДЕПЛОЙ НЕ ЗАБИРАЄ ВІДКРИТУ ВКЛАДКУ
 * (VERSIONING-v9 § 4.4, § 4.5 `VER-OPEN-TAB-SURVIVES`, HIGH, `GATE-STALE-BUILD`).
 *
 * ## Що було
 *
 * `vite.config.ts` мав `registerType: 'autoUpdate'` разом із
 * `workbox.skipWaiting: true` і `workbox.clientsClaim: true`. Обидва прапорці
 * кажуть одне: новий воркер не стає у `waiting`, а забирає вже відкриту
 * вкладку. `cleanupOutdatedCaches` при цьому прибирає з передкешу старі
 * чанки — і сторінка, що тримає їхні хешовані адреси, отримує 404 на перший
 * же перехід.
 *
 * Білого екрана від цього не буває: SvelteKit сам перепитує
 * `_app/version.json` (`updated.check()`) і, побачивши нову версію, робить
 * повне завантаження. Але цим і вичерпується — партія, позиція фігури й
 * незбережені налаштування зникають, і людину ніхто не питав.
 *
 * ## Найдорожча частина: мертвий UI
 *
 * `ReloadPrompt.svelte` змонтований у `+layout.svelte` і показує пропозицію
 * оновитися по `needRefresh` — з кнопками «оновити» і «пізніше». При
 * `skipWaiting` воркер не чекає НІКОЛИ, тож `needRefresh` не ставало `true`
 * жодного разу. Тобто в проєкті був готовий канонічний § 4.4 і був вимкнений
 * прапорцем у сусідньому файлі.
 *
 * ## Чому перевірка читає конфіг, а не сам воркер
 *
 * `service-worker.js` генерується, у репозиторії його немає, і в юніт-прогоні
 * `build/` може не існувати. Точка керування — саме конфіг. Зібраний артефакт
 * перевіряє `scripts/check-build.mjs`: там `build/` є за побудовою, і це
 * доказ, що генератор конфіг послухав.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Повернути `skipWaiting: true` → «воркер не забирає вкладку» червоніє й
 * називає прапорець. Повернути `registerType: 'autoUpdate'` → червоніє
 * «оновлення пропонується людині».
 */

const CONFIG = 'vite.config.ts';
const PROMPT = 'src/lib/components/pwa/ReloadPrompt.svelte';
const LAYOUT = 'src/routes/+layout.svelte';

const read = (path: string): string => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

/** Тіло секції `workbox: { … }` — щоб не сплутати з коментарем деінде у файлі. */
function workboxSection(source: string): string {
	const start = source.indexOf('workbox: {');
	expect(start, `у ${CONFIG} немає секції workbox — розбір застарів`).toBeGreaterThan(-1);
	return source.slice(start, source.indexOf('devOptions', start));
}

/** Коментарі відрізаються: докблок вище цитує саме те, що заборонено. */
function withoutComments(source: string): string {
	return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

const config = withoutComments(read(CONFIG));

describe('перевірка жива', () => {
	it('конфіг прочитано і PWA-плагін у ньому є', () => {
		expect(config, `у ${CONFIG} немає VitePWA — перевіряти нема чого`).toMatch(/VitePWA\(/);
	});

	it('секцію workbox знайдено й вона непорожня', () => {
		expect(workboxSection(config).length).toBeGreaterThan(20);
	});
});

describe('GATE-STALE-BUILD: воркер не забирає відкриту вкладку (§ 4.5)', () => {
	it('skipWaiting не увімкнений', () => {
		expect(
			workboxSection(config),
			'skipWaiting: true підмінює версію під відкритою сторінкою — вона отримує чужі чанки'
		).not.toMatch(/skipWaiting:\s*true/);
	});

	it('clientsClaim не увімкнений', () => {
		expect(
			workboxSection(config),
			'clientsClaim: true віддає новому воркеру вкладки, що вже працюють'
		).not.toMatch(/clientsClaim:\s*true/);
	});

	it('передкеш не збирається через addAll()', () => {
		expect(
			config,
			'addAll() тягне весь перелік одним запитом: одна 404 валить установку воркера цілком'
		).not.toMatch(/\.addAll\(/);
	});
});

describe('оновлення пропонується людині (§ 4.4)', () => {
	it('registerType — prompt, а не autoUpdate', () => {
		expect(
			config,
			'autoUpdate застосовує нову версію за фактом; § 4.4 вимагає пропозиції'
		).toMatch(/registerType:\s*'prompt'/);
	});

	it('пропозиція існує як компонент і читає needRefresh', () => {
		const prompt = read(PROMPT);
		expect(prompt, 'ReloadPrompt мусить вести себе по needRefresh').toMatch(/needRefresh/);
		expect(
			prompt,
			'кнопка оновлення мусить кликати updateServiceWorker — інакше пропозиція нічого не робить'
		).toMatch(/updateServiceWorker\(/);
	});

	it('пропозиція справді змонтована', () => {
		expect(
			read(LAYOUT),
			'ReloadPrompt не змонтований — пропозиція існує лише як файл'
		).toMatch(/<ReloadPrompt\s*\/>/);
	});
});
