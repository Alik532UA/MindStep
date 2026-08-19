// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * UI-UX-v8 § 16 (GATE-CSS-VARS) — `var(--x)` без оголошення в жодній темі.
 *
 * **Чому це не видно нічим іншим.** `var(--немає)` — не синтаксична помилка.
 * Значення стає *invalid at computed-value time*, і властивість тихо бере
 * успадковане або початкове. Збірка проходить, `svelte-check` мовчить (він не
 * дивиться в CSS), ESLint мовчить, тести зелені. Різниця видна лише оком, і
 * лише якщо знати, як воно мало виглядати.
 *
 * У момент появи цієї перевірки в проєкті було шість таких змінних. Найдорожча
 * — `--unified-backdrop-filter`: сім віджетів просили розмиття під собою й не
 * отримували жодного. Далі — тло активної кнопки мови, тло кнопки чату під
 * курсором, підсвітка власного рядка в таблиці рекордів, колір рамки відкритої
 * нагороди й колір рядка переможця.
 *
 * **Червоніє лише вживання БЕЗ запасного значення.** `var(--x, blur(10px))`
 * має визначену поведінку навіть без оголошення, тож це не дефект, а свідомий
 * типовий варіант. Ловити його разом із рештою означало б зробити перевірку
 * шумною — а шумну перевірку вимикають (CODE-QUALITY-v8 § 6.4.1).
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати
 * `--unified-backdrop-filter` з `lib/css/base/variables.css` — перевірка
 * червоніє з сімома адресами.
 */

const ROOT = 'src';

/** Файли, у яких узагалі буває CSS. */
const STYLE_FILE = /\.(css|svelte|html)$/;
/** Файли, у яких бувають виклики `style.setProperty('--x', …)`. */
const SCRIPT_FILE = /\.(ts|js|svelte)$/;

function walk(dir: string, out: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full.split('\\').join('/'));
	}
	return out;
}

/**
 * Коментарі відрізаються перед пошуком.
 *
 * У `GameBoard.svelte` лежить закоментований рядок
 * `/* transition: transform 0.5s var(--transition-bounce); *\/`. Змінної немає
 * ніде — і не мусить бути: правило вимкнене. Перевірка, яка червоніє на
 * коментарі, змушує або оголошувати мертві змінні, або її вимкнути.
 */
/**
 * Викинутий шматок заміняється пробілами, а не зникає: інакше всі наступні
 * рядки з'їжджають, і перевірка звітує адресу, за якою нічого немає. Один раз
 * саме так і сталося при написанні цього файлу.
 */
function blankOut(source: string, pattern: RegExp): string {
	return source.replace(pattern, (match) => match.replace(/[^\n]/g, ' '));
}

function stripComments(source: string): string {
	return blankOut(blankOut(source, /\/\*[\s\S]*?\*\//g), /<!--[\s\S]*?-->/g);
}

/**
 * `<script>` викидається з розмітки: там `var(--x)` буває в рядку, який
 * складають для `setProperty`, і це оголошення, а не вживання.
 */
function styleSideOf(source: string, file: string): string {
	const markup =
		file.endsWith('.ts') || file.endsWith('.js')
			? ''
			: blankOut(source, /<script[\s\S]*?<\/script>/g);
	return stripComments(markup);
}

const files = walk(ROOT);
const declared = new Map<string, string[]>();
const used = new Map<string, { at: string; hasFallback: boolean }[]>();

function push<T>(map: Map<string, T[]>, key: string, value: T): void {
	const list = map.get(key);
	if (list) list.push(value);
	else map.set(key, [value]);
}

for (const file of files) {
	const raw = readFileSync(file, 'utf8');

	if (STYLE_FILE.test(file)) {
		const css = styleSideOf(raw, file);
		css.split('\n').forEach((line, index) => {
			// Оголошення: `--x:` у блоці правил або в інлайновому `style="--x: …"`.
			for (const match of line.matchAll(/(^|[^-\w])(--[a-zA-Z][\w-]*)\s*:/g)) {
				push(declared, match[2], file);
			}
			// Вживання; друга група — кома, тобто наявність запасного значення.
			for (const match of line.matchAll(/var\(\s*(--[a-zA-Z][\w-]*)\s*(,)?/g)) {
				push(used, match[1], { at: `${file}:${index + 1}`, hasFallback: Boolean(match[2]) });
			}
		});
	}

	if (SCRIPT_FILE.test(file)) {
		// Змінна, яку виставляє код у рантаймі, оголошена так само законно.
		for (const match of stripComments(raw).matchAll(/setProperty\(\s*['"`](--[a-zA-Z][\w-]*)/g)) {
			push(declared, match[1], file);
		}
	}
}

describe('CSS-змінні (UI-UX-v8 § 16)', () => {
	it('перевірка жива: змінні знайдено з обох боків', () => {
		expect(declared.size, 'жодного оголошення — сканер шукає не там').toBeGreaterThan(50);
		expect(used.size, 'жодного вживання — регулярка зламана').toBeGreaterThan(50);
	});

	it('кожна змінна без запасного значення десь оголошена', () => {
		const missing = [...used.entries()]
			.filter(([name]) => !declared.has(name))
			.map(([name, uses]) => ({ name, bare: uses.filter((u) => !u.hasFallback) }))
			.filter((entry) => entry.bare.length > 0)
			.map((entry) => `${entry.name} → ${entry.bare.map((u) => u.at).join(', ')}`);

		expect(
			missing,
			`var(--x) без оголошення й без запасного значення мовчки не робить нічого:\n${missing.join('\n')}`
		).toEqual([]);
	});
});
