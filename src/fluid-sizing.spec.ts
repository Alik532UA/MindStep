// @vitest-environment node
// Перевірка читає тільки текст стилів — браузер їй не потрібен.
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Дві межі з FLUID-SIZING-v8, які мовчать доти, доки хтось не відкриє сайт на
 * телефоні.
 *
 * **`vh` замість `dvh` (§ 2).** `100vh` на мобільних — це висота вікна з
 * розгорнутою панеллю браузера. Панель згортається при прокрутці, вікно стає
 * вищим, а розмір лишається старим: у оверлеї це означає, що нижній край
 * картки лежить під панеллю, а разом із ним — кнопки. На десктопі різниці
 * немає ніякої, тому дефект не видно там, де його шукають. Сам пакет називає
 * перевіркою рівно `grep -rn "[0-9]vh" src/` — тут вона просто виконується
 * автоматично.
 *
 * **`repeat(N, 1fr)` (§ 1, CRITICAL).** `1fr` — це `minmax(auto, 1fr)`:
 * мінімум колонки дорівнює мінімальному вмісту, тож довге слово або широка
 * кнопка розпирають сітку ЗА межі контейнера, замість того щоб стиснутися.
 * `minmax(0, 1fr)` знімає цей мінімум. Симптом — горизонтальна прокрутка на
 * вузькому екрані, і тільки на ньому.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути `100vh` у
 * будь-який файл стилів — перевірка червоніє й називає файл, рядок і саме
 * значення.
 */

const ROOTS = ['src'];
const EXT = /\.(svelte|css)$/;

/** `svh`/`lvh`/`dvh` — це не той `vh`, про який ідеться. */
const BARE_VH = /(?<![dsl])\b\d+(?:\.\d+)?vh\b/;
const NAIVE_FR = /repeat\(\s*\d+\s*,\s*1fr\s*\)/;

function styleFiles(dir: string, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) styleFiles(full, acc);
		else if (EXT.test(full)) acc.push(full);
	}
	return acc;
}

function hits(pattern: RegExp): string[] {
	const out: string[] = [];
	for (const file of ROOTS.flatMap((r) => styleFiles(r))) {
		readFileSync(file, 'utf8')
			.split('\n')
			.forEach((line, i) => {
				const m = pattern.exec(line);
				if (m) out.push(`${file}:${i + 1} → ${line.trim().slice(0, 70)}`);
			});
	}
	return out;
}

describe('перевірка жива', () => {
	it('файли стилів знайдено', () => {
		const files = ROOTS.flatMap((r) => styleFiles(r));
		expect(files.length, 'ні .svelte, ні .css — перевірка завжди зелена').toBeGreaterThan(50);
	});

	it('регулярка справді ловить те, від чого захищаємося', () => {
		// Канарка на сам патерн, а не на проєкт: регулярку легко зламати правкою,
		// і зламана вона дає нуль порушень — тобто виглядає як успіх.
		expect(BARE_VH.test('  height: 100vh;')).toBe(true);
		expect(BARE_VH.test('  height: 100dvh;')).toBe(false);
		expect(NAIVE_FR.test('grid-template-columns: repeat(3, 1fr);')).toBe(true);
		expect(NAIVE_FR.test('grid-template-columns: repeat(3, minmax(0, 1fr));')).toBe(false);
	});
});

describe('FLUID-SIZING-v8', () => {
	it('вертикальні розміри — від dvh, а не vh (§ 2)', () => {
		expect(hits(BARE_VH), 'на мобільних vh не враховує згортання панелі браузера').toEqual([]);
	});

	it('колонки сітки — minmax(0, 1fr), а не 1fr (§ 1)', () => {
		expect(hits(NAIVE_FR), '1fr не дає колонці стиснутися вужче за вміст').toEqual([]);
	});
});


/**
 * КОМПОНЕНТ МІРЯЄ СЕБЕ, А НЕ ВІКНО — І ПЕРЕЛІК ВИНЯТКІВ ЛИШЕ СКОРОЧУЄТЬСЯ
 * (FLUID-SIZING-v9 § 7A, `FS-CONTAINER`, HIGH).
 *
 * ## Що не так із `@media` всередині компонента
 *
 * Медіазапит міряє ВІКНО. Картка ж стоїть у сітці, у модалці або в бічній
 * панелі — і на широкому екрані має 240 px. Тобто `@media (min-width: 768px)`
 * усередині компонента дає правильний вигляд рівно в одному розкладі й хибний
 * у всіх інших; ламається це вперше тоді, коли компонент кладуть у нове місце.
 *
 * Канон називає перевіркою рівно `grep -rn "@media" src/lib/components/`, і
 * `PROJECT-CONTEXT.md` тримав це рядком боргу з 2026-08-27: «18 `@media`,
 * жодного `@container`». Рядок прози боргом не є — його не видно в жодному
 * прогоні, і за пів року він стає невірним мовчки.
 *
 * ## Чому саме ратчет, а не заборона
 *
 * Частина цих запитів ПРАВИЛЬНІ: сторінка помилки на весь екран, сітка лобі,
 * `100vw` у плаваючому вікні чату, показ десктопного ряду іконок. Заборона
 * `@media` у компонентах змусила б обходити її, а обійдену перевірку не
 * читають. Тому два списки, і кожен запис у них має причину:
 *
 * - {@link DEVICE_QUERIES} — це справді про пристрій чи вікно. Список може
 *   зростати, але кожен новий запис — це рядок із поясненням у diff.
 * - {@link CONTAINER_DEBT} — це мало б бути `@container`. Список **лише
 *   скорочується**: перевести запит і не прибрати рядок так само червоно, як
 *   додати новий.
 *
 * Запит, якого немає в жодному списку, валить прогін. Тобто новий `@media` у
 * компоненті доводиться свідомо віднести до одного з двох, а не просто додати.
 *
 * ## Що НЕ перевіряється тут
 *
 * Правильність порогу після переведення. `@media (max-width: 360px)` і
 * `@container (max-width: 360px)` спрацьовують у різні моменти — контейнер
 * вужчий за вікно на відступи сторінки, — і підібрати число можна лише
 * заміром у браузері. Тому переведення тут не автоматизоване й не приховане:
 * кожен рядок боргу називає майбутній контейнер, а число підбирає той, хто
 * дивиться на результат.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1) — прогнано
 *
 * Додати `@media (max-width: 500px)` у будь-який компонент — перевірка
 * червоніє й називає файл та умову. Прибрати рядок із {@link CONTAINER_DEBT},
 * не чіпаючи код, — червоніє з іншого боку, як застарілий борг.
 */

/** `@media` у компоненті, який справді про пристрій або вікно. */
const DEVICE_QUERIES: Record<string, string> = {
	'DraggableColumns.svelte (max-width: 1270px)':
		'розкладка сторінки: колонки стають стовпцем — це про вікно, а не про батька',
	'DraggableColumns.svelte (max-width: 600px)':
		'усередині — 95vw і 100vw, тобто вимір і є вікном',
	'ErrorBoundary.svelte (max-width: 600px)':
		'сторінка помилки на весь екран: батька, вужчого за вікно, тут не буває',
	'main-menu/v2/TopIconsBar.svelte (min-width: 768px)':
		'показ десктопного ряду іконок — рішення про КЛАС ПРИСТРОЮ, а не про місце',
	'online/ChatWidget.svelte (max-width: 480px)':
		'плаваюче вікно чату міряється в 100vw — воно й прив’язане до вікна',
	'online/Lobby.svelte (max-width: 900px)':
		'сітка сторінки лобі: скільки колонок помістити — питання до вікна (§ 7A, остання нотатка)'
};

/**
 * `@media`, який мав би бути `@container`. Заміряно 2026-09-11; список лише
 * скорочується. Значення — де оголошувати контейнер після переведення.
 */
const CONTAINER_DEBT: Record<string, string> = {
	'VoiceSettingsModal.svelte (min-width: 768px)':
		'.setup-grid у МОДАЛЦІ: ширина модалки не дорівнює ширині вікна → container-type на тілі модалки',
	'settings/tabs/GeneralTab.svelte (min-width: 768px)':
		'.setup-grid у вкладці налаштувань → container-type на контейнері вкладки',
	'settings/tabs/VoiceTab.svelte (min-width: 768px)':
		'.setup-grid і .voice-list-wrapper у тій самій вкладці → той самий container-type на контейнері вкладки',
	'ui/ButtonGroup.svelte (max-width: 360px)':
		'відступи кнопок від ширини САМОЇ групи: вона стоїть і в модалці, і у віджеті → container-type на .button-group-container',
	'ui/FlexibleMenu/parts/FlexibleMenuPanel.svelte (min-width: 768px)':
		'форма панелі від ширини панелі → container-type на обгортці меню',
	'game-modes/GameModeButton.svelte (max-width: 360px)':
		'розміри пункту меню від ширини списку, у якому він стоїть → container-type на списку',
	'rewards/PersonalBestSection.svelte (max-width: 600px)':
		'картка стає стовпцем від ширини картки, а не вікна → container-type на .personal-best-section'
};

describe('FS-CONTAINER: @media у компонентах під ратчетом (FLUID-SIZING-v9 § 7A)', () => {
	/** Умова запиту як написана: `(max-width: 360px)`. */
	const MEDIA = /@media\s*(\([^)]*\))/g;
	/**
	 * Ознаки пристрою, а не розміру: їх канон прямо лишає за `@media`, тож у
	 * списки вони не потрапляють зовсім.
	 */
	const NOT_A_SIZE = /prefers-|hover:|pointer:|forced-colors|display-mode/;

	const COMPONENTS = 'src/lib/components';

	function widthQueries(): string[] {
		const found: string[] = [];
		for (const file of styleFiles(COMPONENTS)) {
			const short = file.slice(COMPONENTS.length + 1);
			for (const match of readFileSync(file, 'utf8').matchAll(MEDIA)) {
				if (NOT_A_SIZE.test(match[1])) continue;
				found.push(`${short} ${match[1]}`);
			}
		}
		return found.sort();
	}

	it('перевірка жива: запити в компонентах знайдено, і ознака розміру відрізняється', () => {
		expect(
			widthQueries().length,
			'у компонентах не знайдено жодного @media за шириною — перевірка нічого не стереже'
		).toBeGreaterThan(0);
		expect(NOT_A_SIZE.test('(prefers-reduced-motion: reduce)')).toBe(true);
		expect(NOT_A_SIZE.test('(hover: none)')).toBe(true);
		expect(NOT_A_SIZE.test('(max-width: 360px)'), 'ширину прийнято за ознаку пристрою').toBe(
			false
		);
	});

	it('кожен @media за шириною віднесений або до пристрою, або до боргу', () => {
		const known = new Set([...Object.keys(DEVICE_QUERIES), ...Object.keys(CONTAINER_DEBT)]);
		const unlisted = [...new Set(widthQueries())].filter((entry) => !known.has(entry));
		expect(
			unlisted,
			'новий @media усередині компонента: віднесіть його до DEVICE_QUERIES із причиною ' +
				'або до CONTAINER_DEBT із майбутнім контейнером\n' +
				unlisted.join('\n')
		).toEqual([]);
	});

	it('перелік боргу не застарів: кожен рядок ще існує в коді', () => {
		const present = new Set(widthQueries());
		const stale = [...Object.keys(CONTAINER_DEBT), ...Object.keys(DEVICE_QUERIES)].filter(
			(entry) => !present.has(entry)
		);
		expect(
			stale,
			'запит зник із коду, а рядок лишився — борг, якого немає, читається як наявний ' +
				'(CODE-QUALITY § 6.4.3):\n' +
				stale.join('\n')
		).toEqual([]);
	});

	it('кожен рядок боргу називає майбутній контейнер', () => {
		const empty = Object.entries(CONTAINER_DEBT)
			.filter(([, reason]) => !reason.includes('container-type'))
			.map(([entry]) => entry);
		expect(
			empty,
			'рядок боргу без відповіді «де оголошувати контейнер» не допомагає тому, хто ' +
				'візьметься його закривати:\n' +
				empty.join('\n')
		).toEqual([]);
	});
});
