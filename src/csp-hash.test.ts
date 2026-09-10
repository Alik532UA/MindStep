// @vitest-environment node
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import config from '../svelte.config.js';

/**
 * Хеш інлайн-скрипта у CSP мусить збігатися з тим, що обчислить БРАУЗЕР
 * (SECURITY-v8 § 6.3, § 16).
 *
 * ## Навіщо це окремою перевіркою
 *
 * Хеш у цьому проєкті рахується з `src/app.html`, а не вписується рядком, — і
 * цього ВСЕ ОДНО недосить. Браузер хешує не байти файлу, а текстовий вузол
 * `<script>` ПІСЛЯ розбору HTML, а розбір нормалізує `\r\n` у `\n`
 * («preprocessing the input stream» у HTML Standard). Тобто на машині, де файл
 * лежить із CRLF (Windows + `core.autocrlf`), у політику їде хеш, якого браузер
 * не приймає, і скрипт першого кадру блокується ЦІЛКОМ.
 *
 * Це не гіпотеза. 2026-08-23 дефект був живий у `DigitalWorkshop` (браузер
 * вимагав `sha256-DRXz6NOS…`) і в `teatralo4ka`, де він вимкнув заставку з
 * кулісами: без `data-splash` CSS куліс не спрацьовував, і лишався суцільний
 * жовтий фон — виглядало як «куліси видалили». `MindStep` і `VetCrewGames`
 * натрапили на нього раніше й нормалізують текст перед хешуванням.
 *
 * ## Чому саме юніт, а не E2E
 *
 * На Linux (CI, продакшн) файл із LF, хеші збігаються, дефекту немає. Тобто
 * E2E-перевірка була б зелена рівно там, де перевіряти нічого, і не запускалася
 * б там, де дефект живе, — на машині розробника. Клас AI-AGENT-PITFALLS-v8 § 1.4.
 */

/** Рівно те, що робить HTML-парсер із текстом скрипта перед хешуванням. */
const asBrowserSees = (text: string): string => text.replace(/\r\n/g, '\n');

const sha256 = (text: string): string =>
	`sha256-${createHash('sha256').update(text).digest('base64')}`;

/** Усі інлайн-скрипти `app.html` без атрибутів — саме ті, що потребують хеша. */
function inlineScripts(): string[] {
	const html = readFileSync('src/app.html', 'utf8');
	const open = '<script>';
	const close = '</' + 'script>';
	const bodies: string[] = [];
	let from = 0;
	for (;;) {
		const start = html.indexOf(open, from);
		if (start < 0) break;
		const end = html.indexOf(close, start);
		if (end < 0) break;
		bodies.push(html.slice(start + open.length, end));
		from = end + close.length;
	}
	return bodies;
}

/** Хеші зі зібраного конфігу — те, що справді поїде в заголовок. */
const cspHashes: string[] = (
	(config as { kit?: { csp?: { directives?: Record<string, string[]> } } }).kit?.csp
		?.directives?.['script-src'] ?? []
).filter((value) => typeof value === 'string' && value.startsWith('sha256-'));

describe('CSP: хеш інлайн-скрипта збігається з тим, що обчислить браузер', () => {
	it('перевірка жива: інлайн-скрипт знайдено і в CSP є sha256', () => {
		expect(inlineScripts().length, 'у app.html немає інлайн-скриптів — хешувати нічого').toBeGreaterThan(0);
		expect(cspHashes.length, 'у script-src немає жодного sha256').toBeGreaterThan(0);
	});

	it('кожен інлайн-скрипт має в політиці свій браузерний хеш', () => {
		const missing = inlineScripts()
			.map((body) => sha256(asBrowserSees(body)))
			.filter((hash) => !cspHashes.includes(hash));
		expect(
			missing,
			`браузер вимагає ${missing.join(', ')}, а в script-src лежить ${cspHashes.join(', ')}. ` +
				'Якщо різниця лише в переносах рядків — хеш обчислено над CRLF; ' +
				'у svelte.config.js перед хешуванням треба .replace(/\\r\\n/g, "\\n").'
		).toEqual([]);
	});

	it('CRLF-хеш у політику НЕ потрапляє', () => {
		const crlf = inlineScripts()
			.filter((body) => body.includes('\r'))
			.map((body) => sha256(body))
			.filter((hash) => cspHashes.includes(hash));
		expect(
			crlf,
			`у script-src лежить хеш над CRLF (${crlf.join(', ')}) — браузер його не приймає`
		).toEqual([]);
	});
});


/** Джерела `.svelte` без коментарів: докблок, що цитує порушення, — не порушення. */
function svelteSources(): { file: string; text: string }[] {
	const out: { file: string; text: string }[] = [];
	const walk = (dir: string): void => {
		for (const name of readdirSync(dir)) {
			const full = `${dir}/${name}`;
			if (statSync(full).isDirectory()) walk(full);
			else if (full.endsWith('.svelte')) {
				out.push({ file: full, text: stripComments(readFileSync(full, 'utf8')) });
			}
		}
	};
	walk('src');
	return out;
}

/** `+page.ts` / `+layout.ts` — саме там оголошують `ssr` і `prerender`. */
function routeModules(): string[] {
	const out: string[] = [];
	const walk = (dir: string): void => {
		for (const name of readdirSync(dir)) {
			const full = `${dir}/${name}`;
			if (statSync(full).isDirectory()) walk(full);
			else if (/[/\\]\+(page|layout)(\.server)?\.ts$/.test(full)) out.push(full);
		}
	};
	walk('src/routes');
	return out;
}

const stripComments = (source: string): string =>
	source.replace(/<!--[\s\S]*?-->/g, '').replace(/\/\*[\s\S]*?\*\//g, '');


/**
 * РОЗГОРТАННЯ АТРИБУТІВ НА МЕДІА-ЕЛЕМЕНТІ — І ТРИГЕР, ЩО ЗНІМАЄ ВІДХИЛЕННЯ
 * (SECURITY-v9 § 6.3.2, `SEC-CSP-SPREAD-HANDLER`, HIGH, `GATE-INLINE-HANDLERS`).
 *
 * ## Що це за клас
 *
 * Політика без `'unsafe-inline'` і без `'unsafe-hashes'` відмовляється виконати
 * будь-який атрибут-обробник у розмітці, і хеші на обробники подій не
 * поширюються в принципі («hashes do not apply to event handlers»). Таких
 * атрибутів ніхто не пише — їх додає компілятор Svelte під час SSR: механізм
 * відтворення подій `onload="this.__e=event"` вставляється в елемент, чиї
 * атрибути задані РОЗГОРТАННЯМ `{...obj}`, бо що всередині обʼєкта, компілятор
 * не знає. Заміряно каноном на восьмому проєкті: тринадцять `<img>` дали
 * пʼятнадцять порушень CSP на головній сторінці при чистому `svelte-check` і
 * зелених юніт-перевірках.
 *
 * ## Чому тут перевірка по джерелах, а не над `build/`
 *
 * Канон каже прямо: перевірка над `build/`, і лише там, бо в `src/` цих
 * атрибутів немає за визначенням. У цьому проєкті так не вийде — і це записане
 * відхилення в `PROJECT-CONTEXT.md`: `+layout.ts` вимикає SSR цілком, тож у
 * `build/` лежать оболонка SPA і `404.html`, у яких розмітки компонентів немає
 * зовсім. Перевірка над цими двома файлами була б рівно порожньою, а канон сам
 * застерігає: нуль знайдених місць означає «дивимося не туди».
 *
 * Тому перевіряється не НАСЛІДОК (атрибут у зібраному HTML), а ПРИЧИНА
 * (розгортання на елементі, який може отримати `onload`/`onerror`) — вона
 * видима в джерелах і від профілю не залежить.
 *
 * ## І окремо — тригер, який досі жив у прозі
 *
 * Відхилення трималося на одному факті: SSR вимкнений. Факт записано словами, і
 * речення «тригер перегляду: увімкнення SSR або prerender хоча б одного
 * маршруту» ніхто не виконає — його просто не буде видно в той момент, коли SSR
 * увімкнуть. Тепер тригер — червоний тест із інструкцією, а не абзац.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1) — прогнано
 *
 * `<img src={s} {...size} />` у будь-якому компоненті — перевірка називає файл і
 * елемент. `export const ssr = true` у `+layout.ts` — червоніє тригер із
 * інструкцією добудувати шар над `build/`.
 */
describe('SEC-CSP-SPREAD-HANDLER: розгортання на медіа-елементі (SECURITY-v9 § 6.3.2)', () => {
	/** Елементи, у які компілятор додає гачки відтворення подій. */
	const RISKY = 'img|iframe|video|audio|source|embed|object';
	const OPEN_TAG = new RegExp(`<(${RISKY})\\b[^>]*>`, 'gs');

	const svelte = svelteSources();

	it('перевірка жива: медіа-елементи в джерелах є, і регулярка бачить розгортання', () => {
		const total = svelte.reduce(
			(sum, { text }) => sum + [...text.matchAll(OPEN_TAG)].length,
			0
		);
		expect(total, 'жодного медіа-елемента в джерелах — перевірка нижче порожня').toBeGreaterThan(
			0
		);
		expect([...'<img src={s} {...size} />'.matchAll(OPEN_TAG)][0]?.[0]).toContain('{...');
		expect([...'<img src={s} width={w} />'.matchAll(OPEN_TAG)][0]?.[0]).not.toContain('{...');
	});

	it('атрибути медіа-елемента не задаються розгортанням', () => {
		const offenders: string[] = [];
		for (const { file, text } of svelte) {
			for (const match of text.matchAll(OPEN_TAG)) {
				if (match[0].includes('{...')) {
					offenders.push(`${file}: <${match[1]}> із розгортанням атрибутів`);
				}
			}
		}
		expect(
			offenders,
			'компілятор допише сюди onload/onerror, і CSP заблокує їх без жодного сліду в ' +
				'розмітці — назвіть атрибути явно:\n' + offenders.join('\n')
		).toEqual([]);
	});

	it('тригер відхилення: SSR і prerender лишаються вимкненими', () => {
		const layout = readFileSync('src/routes/+layout.ts', 'utf8');
		expect(
			/export\s+const\s+ssr\s*=\s*false/.test(layout),
			'SSR увімкнено — відхилення в PROJECT-CONTEXT.md («гейта над build/ немає, ' +
				'бо розмітки компонентів там немає») втратило підставу. Тепер потрібен ДРУГИЙ ' +
				'шар: перевірка на onload=/onerror= у build/**/*.html'
		).toBe(true);

		/*
		 * Тригер — саме `ssr`, а НЕ `prerender`, і різниця тут не формальна.
		 * `src/routes/+page.ts` уже має `prerender = true` і мав його весь час:
		 * із вимкненим SSR це дає той самий порожній каркас SPA, бо серверного
		 * рендеру не відбувається взагалі («Overwriting build/index.html with
		 * fallback page» у виводі adapter-static). Розмітка компонентів
		 * зʼявиться в `build/` лише тоді, коли якийсь маршрут поверне `ssr`.
		 *
		 * Формулювання «увімкнення SSR або prerender» у PROJECT-CONTEXT.md було
		 * саме тому неточним: половина умови вже виконана.
		 */
		const enabled: string[] = [];
		for (const { file, text } of svelte) {
			if (/export\s+const\s+ssr\s*=\s*true/.test(text)) enabled.push(file);
		}
		for (const file of routeModules()) {
			const text = readFileSync(file, 'utf8');
			if (/export\s+const\s+ssr\s*=\s*true/.test(text)) enabled.push(file);
		}
		expect(
			enabled,
			'маршрут увімкнув SSR — у build/ зʼявиться розмітка компонентів, і разом із нею ' +
				'клас § 6.3.2, якого перевірка по джерелах не покриває цілком:\n' +
				enabled.join('\n')
		).toEqual([]);
	});
});
