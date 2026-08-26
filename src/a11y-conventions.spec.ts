// @vitest-environment node
// Перевірка лише читає джерела — DOM їй не потрібен.
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Кнопка-іконка мусить мати назву (ACCESSIBILITY-v8 § 4, UI-ELEMENTS-v8 § 1).
 *
 * Чому статична, а не рантаймова. Назву елемента чесно міряє лише браузер —
 * `toHaveAccessibleName()` у Playwright. Але дістатися до кнопки в браузері
 * можна тільки якщо вона на екрані: половина кнопок тут живе в модалках,
 * панелях тестового режиму, чаті кімнати й гілках `{#if}`, куди перевірка
 * після `page.goto()` не потрапляє ніколи. Джерела ж видно всі — тому
 * розподіл такий: рантаймово (`tests/e2e/invariants.spec.ts`) перевіряється
 * головний шлях, статично — повнота.
 *
 * Що саме ловиться: `<button>`, у видимому вмісті якого немає ні літери, ні
 * цифри — тобто всередині лишається іконка (`<SvgIcons>`, `<NotoEmoji>`,
 * `<svg>`) або символ (`×`, `«», `+`). Для читалки це кнопка без назви:
 * `×` вона озвучує як «знак множення», а компонент-іконку — як ніщо.
 *
 * Чому `title` не рахується назвою тут. Формально він працює як запасний
 * підпис, але лише поки мишка над кнопкою; на тач-екрані його не існує, і
 * саме `title` найчастіше лишається захардкодженим рядком (I18N-v8 § 2).
 * Тому вимагається `aria-label` / `aria-labelledby`.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `aria-label`
 * у будь-якій кнопці з `TopRowWidget.svelte` — перевірка червоніє й називає
 * файл, рядок і вміст кнопки.
 */

const ROOT = 'src';

/**
 * Сторінки-піддослідні. `src/routes/test/` — майданчик для анімацій, який
 * існує лише в dev і до гравця не доїжджає; тримати його в переліку означало
 * б вимагати підписів від декорацій.
 */
const SKIP = ['src/routes/test/', 'src/routes/test-error/'];

function svelteFiles(dir: string, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) svelteFiles(full, acc);
		else if (full.endsWith('.svelte')) acc.push(full);
	}
	return acc;
}

const LETTER_OR_DIGIT = /[\p{L}\p{N}]/u;

interface Offender {
	file: string;
	line: number;
	body: string;
}

/**
 * Розбір `<button …>` — з урахуванням `{ … }` і лапок у значеннях атрибутів.
 *
 * ## ЧОМУ НЕ РЕГУЛЯРКА
 *
 * Доти тут стояло `/<button\b([^>]*)>([\s\S]*?)<\/button\s*>/`. `[^>]*`
 * зупиняється на ПЕРШОМУ `>` — а в Svelte найчастіший атрибут кнопки це
 * `onclick={() => …}`, і стрілка містить `>`. Тобто розбір різав атрибути
 * посеред обробника, і все, що йшло далі, потрапляло у «вміст кнопки»:
 * `data-testid="…"`, `class:active={…}`, самі назви функцій. Літери там є
 * завжди — отже кнопка вважалася підписаною.
 *
 * Заміряно на цьому дереві: 58 кнопок зі 110 мали `>` в атрибутах, тобто гейт
 * не дивився на БІЛЬШІСТЬ кнопок проєкту. Він звітував нуль порушень; точний
 * розбір знайшов 16 — серед них кнопка перезапуску на екрані аварії
 * (`ErrorBoundary`), єдиний працездатний елемент керування в момент, коли все
 * інше зламалося.
 *
 * Це рівно той клас, який AI-AGENT-PITFALLS-v8 § 1 називає найдорожчим:
 * перевірка є, вона правильна на вигляд, і вона дивиться не туди. Гірше за
 * відсутню, бо на неї посилаються як на доказ.
 *
 * ## Що робить сканер
 *
 * Іде по символах від `<button`, тримає глибину `{}` і стан лапок; закриває
 * тег лише на `>`, що стоїть поза виразом і поза рядком.
 */
interface ParsedButton {
	attrs: string;
	body: string;
	index: number;
}

function parseButtons(src: string): ParsedButton[] {
	const out: ParsedButton[] = [];
	for (let i = 0; i < src.length; i++) {
		if (!/^<button[\s>]/.test(src.slice(i, i + 8))) continue;
		let j = i + 7;
		let depth = 0;
		let quote: string | null = null;
		for (; j < src.length; j++) {
			const c = src[j];
			if (quote) {
				if (c === quote) quote = null;
				continue;
			}
			if (c === '"' || c === "'") quote = c;
			else if (c === '{') depth++;
			else if (c === '}') depth--;
			else if (c === '>' && depth === 0) break;
		}
		const close = src.indexOf('</button', j);
		if (close === -1) continue;
		out.push({ attrs: src.slice(i + 7, j), body: src.slice(j + 1, close), index: i });
	}
	return out;
}

/**
 * Видимий текст кнопки. Теги знімаються (їхній вміст — це вже інший елемент
 * або іконка), вирази `{…}` знімаються окремо: `{label}` — це назва, яку
 * приносить проп, і кнопка з нею підписана.
 */
function findOffenders(): Offender[] {
	const out: Offender[] = [];
	for (const file of svelteFiles(ROOT)) {
		if (SKIP.some((s) => file.startsWith(s))) continue;
		const src = readFileSync(file, 'utf8');
		for (const { attrs, body, index } of parseButtons(src)) {
			if (/\baria-label(ledby)?\b/.test(attrs)) continue;

			const withoutTags = body.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, '');
			// Вираз, що повертає текст, — це підпис. Вираз-обробник (`() => …`)
			// у вмісті кнопки не буває, тож розрізняти їх не потрібно.
			const hasExpression = /\{[^{}]+\}/.test(withoutTags);
			const staticText = withoutTags.replace(/\{[^{}]*\}/g, '');
			if (hasExpression || LETTER_OR_DIGIT.test(staticText)) continue;

			out.push({
				file,
				line: src.slice(0, index).split('\n').length,
				body: body.replace(/\s+/g, ' ').trim().slice(0, 60)
			});
		}
	}
	return out;
}

describe('перевірка жива', () => {
	it('файли компонентів знайдено', () => {
		expect(
			svelteFiles(ROOT).length,
			'жодного .svelte — перевірка нічого не бачить і завжди зелена'
		).toBeGreaterThan(50);
	});

	it('кнопки в переліку взагалі є', () => {
		const total = svelteFiles(ROOT)
			.map((f) => readFileSync(f, 'utf8').match(/<button\b/g)?.length ?? 0)
			.reduce((a, b) => a + b, 0);
		expect(total, 'жодного <button> — регулярка перестала збігатися').toBeGreaterThan(30);
	});

	/**
	 * Канарка на САМ РОЗБІР, а не на його результат.
	 *
	 * Попередній розбір ділив тег регуляркою `[^>]*` і зупинявся на `>` усередині
	 * `onclick={() => …}`. Помітити це по результату не можна було ніяк: гейт
	 * лишався зеленим, бо все, що після зрізу, вважалося текстом кнопки.
	 */
	it('розбір не спотикається на стрілці в onclick', () => {
		const parsed = parseButtons('<button onclick={() => go()} class="x">×</button>');
		expect(parsed.length, 'кнопку не знайдено зовсім').toBe(1);
		expect(parsed[0].attrs).toContain('onclick={() => go()}');
		expect(parsed[0].attrs).toContain('class="x"');
		expect(parsed[0].body.trim(), 'у вміст кнопки затекли атрибути').toBe('×');
	});

	it('розбір бачить aria-label, що містить вираз зі стрілкою поруч', () => {
		const parsed = parseButtons(
			'<button onclick={() => f()} aria-label={$t("a.b")}><Icon /></button>'
		);
		expect(parsed[0].attrs).toContain('aria-label=');
	});
});

describe('кнопки-іконки мають назву (ACCESSIBILITY-v8 § 4)', () => {
	it('жодна кнопка без тексту не лишилася без aria-label', () => {
		const offenders = findOffenders();
		const report = offenders.map((o) => `${o.file}:${o.line} → «${o.body}»`);
		expect(report, 'кнопка без видимого тексту й без aria-label').toEqual([]);
	});
});
