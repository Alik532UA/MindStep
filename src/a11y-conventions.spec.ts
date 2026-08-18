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
 * Видимий текст кнопки. Теги знімаються (їхній вміст — це вже інший елемент
 * або іконка), вирази `{…}` знімаються окремо: `{label}` — це назва, яку
 * приносить проп, і кнопка з нею підписана.
 */
function findOffenders(): Offender[] {
	const out: Offender[] = [];
	for (const file of svelteFiles(ROOT)) {
		if (SKIP.some((s) => file.startsWith(s))) continue;
		const src = readFileSync(file, 'utf8');
		for (const m of src.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button\s*>/g)) {
			const [, attrs, body] = m;
			if (/\baria-label(ledby)?\b/.test(attrs)) continue;

			const withoutTags = body.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, '');
			// Вираз, що повертає текст, — це підпис. Вираз-обробник (`() => …`)
			// у вмісті кнопки не буває, тож розрізняти їх не потрібно.
			const hasExpression = /\{[^{}]+\}/.test(withoutTags);
			const staticText = withoutTags.replace(/\{[^{}]*\}/g, '');
			if (hasExpression || LETTER_OR_DIGIT.test(staticText)) continue;

			out.push({
				file,
				line: src.slice(0, m.index).split('\n').length,
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
});

describe('кнопки-іконки мають назву (ACCESSIBILITY-v8 § 4)', () => {
	it('жодна кнопка без тексту не лишилася без aria-label', () => {
		const offenders = findOffenders();
		const report = offenders.map((o) => `${o.file}:${o.line} → «${o.body}»`);
		expect(report, 'кнопка без видимого тексту й без aria-label').toEqual([]);
	});
});
