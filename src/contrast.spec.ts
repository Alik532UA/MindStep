// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { KNOWN_CONTRAST_DEBT, CONTRAST_SKIPS } from './contrast-baseline';

/**
 * Контраст палітри — розвʼязувач токенів (ACCESSIBILITY-v8 § 6, UI-UX-v8
 * § 1.5.1.1).
 *
 * ## Чого не покриває гейт axe, який стоїть поруч
 *
 * `tests/e2e/a11y.spec.ts` рахує `color-contrast` на ЖИВІЙ сторінці, тобто рівно
 * в тій темі, яка застосована. Playwright ходить із чистим сховищем, отже це
 * `gray` + `dark` — типові значення з `appSettingsState`. Палітра ж двовимірна:
 * шість стилів × дві теми = дванадцять комбінацій, і одинадцять із них не бачив
 * ніхто ніколи. Побачити їх у браузері означало б дванадцять прогонів e2e; тут
 * це один прохід по джерелах.
 *
 * ## Пари беруться З КОДУ, а не з переліку в тесті
 *
 * Сканер шукає правила, які оголошують І тло, І колір тексту, і бере пару
 * токенів звідти. Написаний руками перелік пар розійшовся б із CSS на першому ж
 * новому компоненті — і саме мовчки, бо перевірка лишалася б зеленою. Заміряно:
 * два з дванадцяти токенів, які виглядали парою (`--confirm-btn-bg` /
 * `--confirm-btn-text`), не вживаються разом ЖОДНИМ правилом — тобто перелік
 * руками одразу дав би дві вигадані знахідки.
 *
 * ## Ключ — імена токенів, без запасних значень
 *
 * Те саме `var(--control-selected, #ff9800)` пишеться в проєкті пʼятьма різними
 * запасними значеннями. Виправлення при цьому одне й лежить у файлі теми, а не
 * в компоненті, тож і рядок боргу мусить бути один.
 *
 * ## Нерозібране значення — не «не наша справа»
 *
 * Канон називає цю пастку прямо (§ 1.5.1.3): розвʼязувач, який тихо пропускає
 * все, чого не зрозумів, вважає гейт зеленим саме там, де браузер має проблему.
 * Тому пропуски тут ПОРАХОВАНІ й записані числом у `contrast-baseline.ts`:
 * прозорість (композит із тим, що під низом, — окрема задача) і значення, яке не
 * розібралося як колір. Нерозвʼязаних токенів мусить бути нуль.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): підняти в
 * `themes/wood.css` `--warning-action-text` до `#000` — рядок
 * `wood/light --warning-action-bg -> --warning-action-text` мусить зникнути з
 * провалів, і перевірка червоніє на тому, що борг скоротився, а число старе.
 */

const STYLES = ['gray', 'blue', 'green', 'orange', 'purple', 'wood'] as const;
const THEMES = ['light', 'dark'] as const;
const BASE = 'src/lib/css/base/variables.css';
const THEME_DIR = 'src/lib/css/themes';

type Theme = (typeof THEMES)[number];

const strip = (s: string): string => s.replace(/\/\*[\s\S]*?\*\//g, ' ');

function walk(dir: string, out: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).split('\\').join('/');
		if (statSync(full).isDirectory()) walk(full, out);
		else if (/\.(css|svelte)$/.test(full)) out.push(full);
	}
	return out;
}

/** CSS-бік файлу: для `.svelte` — лише вміст `<style>`. */
function cssOf(file: string): string {
	const src = readFileSync(file, 'utf8');
	if (file.endsWith('.css')) return strip(src);
	return strip([...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n'));
}

/** Оголошення всередині блоків, чий селектор збігається з `match`. */
function blockVars(css: string, match: (selector: string) => boolean): Record<string, string> {
	const out: Record<string, string> = {};
	for (const block of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
		if (!match(block[1].trim().replace(/\s+/g, ' '))) continue;
		for (const d of block[2].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) out[d[1]] = d[2].trim();
	}
	return out;
}

const baseCss = strip(readFileSync(BASE, 'utf8'));
const rootTokens = blockVars(baseCss, (s) => s === ':root');
const darkTokens = blockVars(baseCss, (s) => s === '[data-theme="dark"]');

/**
 * Каскад для пари (стиль, тема): `:root` → `[data-theme="dark"]` → блок стилю.
 * Порядок саме такий, бо `[data-theme="dark"]` має ту саму специфічність, що
 * `:root`, і виграє позицією у файлі, а блок стилю специфічніший за обидва.
 */
function tokensFor(style: string, theme: Theme): Record<string, string> {
	const themeCss = strip(readFileSync(`${THEME_DIR}/${style}.css`, 'utf8'));
	return {
		...rootTokens,
		...(theme === 'dark' ? darkTokens : {}),
		...blockVars(themeCss, (s) => s === `[data-style="${style}"][data-theme="${theme}"]`)
	};
}

/** Ділення аргументів підрахунком дужок — `rgba(…)` сам містить коми. */
function splitArgs(inner: string): string[] {
	const parts: string[] = [];
	let depth = 0;
	let current = '';
	for (const ch of inner) {
		if (ch === '(') depth++;
		else if (ch === ')') depth--;
		if (ch === ',' && depth === 0) {
			parts.push(current.trim());
			current = '';
			continue;
		}
		current += ch;
	}
	parts.push(current.trim());
	return parts;
}

/**
 * Розкриття значення до літерала: `var(--x)`, `var(--x, запас)` і `light-dark()`.
 *
 * `light-dark()` розуміється саме як його розуміє браузер — перший аргумент для
 * світлої схеми, другий для темної. Без цього перехід палітри на `light-dark()`
 * (борг у PROJECT-CONTEXT.md) зробив би цей гейт сліпим на кожен переведений
 * токен, і виглядало б це як «проблем немає».
 */
function resolveValue(
	value: string,
	tokens: Record<string, string>,
	theme: Theme,
	depth = 0
): string | null {
	if (depth > 6) return null;
	const v = value.trim().replace(/\s*!important$/, '');

	const lightDark = /^light-dark\(([\s\S]+)\)$/.exec(v);
	if (lightDark) {
		const args = splitArgs(lightDark[1]);
		if (args.length !== 2) return null;
		return resolveValue(theme === 'dark' ? args[1] : args[0], tokens, theme, depth + 1);
	}

	const use = /^var\(\s*(--[\w-]+)\s*(?:,([\s\S]+))?\)$/.exec(v);
	if (!use) return v;
	const declared = tokens[use[1]];
	if (declared !== undefined) return resolveValue(declared, tokens, theme, depth + 1);
	if (use[2] !== undefined) return resolveValue(use[2], tokens, theme, depth + 1);
	return null;
}

const NAMED: Record<string, [number, number, number, number]> = {
	white: [255, 255, 255, 1],
	black: [0, 0, 0, 1]
};

function parseColor(value: string): [number, number, number, number] | null {
	const s = value.trim().replace(/\s*!important$/, '');
	const hex = /^#([0-9a-f]{3,8})$/i.exec(s);
	if (hex) {
		let h = hex[1];
		if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
		if (h.length !== 6 && h.length !== 8) return null;
		return [
			parseInt(h.slice(0, 2), 16),
			parseInt(h.slice(2, 4), 16),
			parseInt(h.slice(4, 6), 16),
			h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1
		];
	}
	const fn = /^rgba?\(([^)]+)\)$/i.exec(s);
	if (fn) {
		const p = fn[1].split(/[\s,/]+/).filter(Boolean).map(Number);
		if (p.length >= 3 && p.slice(0, 3).every(Number.isFinite))
			return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1];
	}
	return NAMED[s.toLowerCase()] ?? null;
}

const channel = (c: number): number => {
	const x = c / 255;
	return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
};
const luminance = ([r, g, b]: [number, number, number, number]): number =>
	0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
const contrast = (
	a: [number, number, number, number],
	b: [number, number, number, number]
): number => {
	const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return (hi + 0.05) / (lo + 0.05);
};

/** Значення, для яких пари «тло + текст» не існує як числа. */
const NOT_A_FLAT_COLOR = /gradient|transparent|inherit|currentcolor|^none$|url\(/i;

/**
 * Пара, у якій ЖОДНА зі сторін не є текстом: фігура гри на клітинці дошки.
 * WCAG 1.4.11 просить для неї 3:1, а не 4.5:1 (це не текст).
 */
const GRAPHIC_PAIRS = new Set(['--cell-dark -> --piece-color', '--cell-light -> --piece-color']);

const TEXT_THRESHOLD = 4.5;
const GRAPHIC_THRESHOLD = 3;

/** Ім’я токена без запасного значення: `var(--x, #fff)` → `--x`. */
const tokenName = (value: string): string =>
	/^var\(\s*(--[\w-]+)/.exec(value.trim())?.[1] ?? value.trim();

type Rule = { file: string; selector: string; bg: string; fg: string };

const rules: Rule[] = [];
for (const file of walk('src')) {
	for (const block of cssOf(file).matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
		const selector = block[1].trim().replace(/\s+/g, ' ');
		if (selector.startsWith('@')) continue;
		const body = block[2];
		const bg = /(?:^|[;\s])background(?:-color)?\s*:\s*([^;]+)/.exec(body)?.[1]?.trim();
		const fg = /(?:^|[;\s])color\s*:\s*([^;]+)/.exec(body)?.[1]?.trim();
		if (!bg || !fg) continue;
		if (NOT_A_FLAT_COLOR.test(bg) || NOT_A_FLAT_COLOR.test(fg)) continue;
		// Обидва боки — токени теми: це обіцянки палітри, і виправлення для них
		// лежить у файлі теми. Пари «токен + літерал» під це правило не
		// підпадають — там колір зашитий у компоненті, і це інша задача.
		if (!/^var\(--/.test(bg) || !/^var\(--/.test(fg)) continue;
		// Неактивний елемент керування виведений із вимоги 1.4.3 самим WCAG.
		if (/--disabled-/.test(bg) || /--disabled-/.test(fg)) continue;
		rules.push({ file, selector, bg, fg });
	}
}

const failures = new Map<string, { ratio: number; bg: string; fg: string; where: string }>();
const skips = { alpha: 0, notColor: 0, unresolved: 0 };
let compared = 0;

for (const style of STYLES) {
	for (const theme of THEMES) {
		const tokens = tokensFor(style, theme);
		for (const rule of rules) {
			// Правило, прив’язане до ІНШОГО стилю чи теми, у цій парі не діє.
			const pinnedStyle = [...rule.selector.matchAll(/\[data-style=["']?([\w-]+)["']?\]/g)].map(
				(m) => m[1]
			);
			const pinnedTheme = [...rule.selector.matchAll(/\[data-theme=["']?([\w-]+)["']?\]/g)].map(
				(m) => m[1]
			);
			if (pinnedStyle.length && !pinnedStyle.includes(style)) continue;
			if (pinnedTheme.length && !pinnedTheme.includes(theme)) continue;

			const bgValue = resolveValue(rule.bg, tokens, theme);
			const fgValue = resolveValue(rule.fg, tokens, theme);
			if (bgValue === null || fgValue === null) {
				skips.unresolved++;
				continue;
			}
			const bg = parseColor(bgValue);
			const fg = parseColor(fgValue);
			if (!bg || !fg) {
				skips.notColor++;
				continue;
			}
			if (bg[3] < 1 || fg[3] < 1) {
				skips.alpha++;
				continue;
			}

			compared++;
			const pair = `${tokenName(rule.bg)} -> ${tokenName(rule.fg)}`;
			const threshold = GRAPHIC_PAIRS.has(pair) ? GRAPHIC_THRESHOLD : TEXT_THRESHOLD;
			const ratio = contrast(bg, fg);
			if (ratio >= threshold) continue;

			const key = `${style}/${theme} ${pair}`;
			if (!failures.has(key)) {
				failures.set(key, {
					ratio,
					bg: bgValue,
					fg: fgValue,
					where: `${rule.file}: ${rule.selector.slice(0, 50)}`
				});
			}
		}
	}
}

describe('розвʼязувач токенів (перевірка на саму перевірку)', () => {
	it('light-dark() береться за темою, а не за першим аргументом', () => {
		const tokens = { '--x': 'light-dark(#ffffff, #000000)' };
		expect(resolveValue('var(--x)', tokens, 'light')).toBe('#ffffff');
		expect(resolveValue('var(--x)', tokens, 'dark')).toBe('#000000');
	});

	it('аргументи діляться підрахунком дужок', () => {
		expect(splitArgs('rgba(1, 2, 3, .5), #fff')).toEqual(['rgba(1, 2, 3, .5)', '#fff']);
	});

	it('контраст рахується за WCAG: білий на чорному — 21:1', () => {
		expect(contrast([255, 255, 255, 1], [0, 0, 0, 1])).toBeCloseTo(21, 1);
		expect(contrast([255, 255, 255, 1], [255, 255, 255, 1])).toBeCloseTo(1, 5);
	});

	it('запасне значення береться лише за відсутнього токена', () => {
		expect(resolveValue('var(--a, #111)', { '--a': '#222' }, 'light')).toBe('#222');
		expect(resolveValue('var(--a, #111)', {}, 'light')).toBe('#111');
	});
});

describe('перевірка жива', () => {
	it('правила «тло + текст» із двома токенами знайдено', () => {
		expect(
			rules.length,
			'жодного правила з парою токенів — сканер шукає не там, і будь-який висновок нижче порожній'
		).toBeGreaterThan(30);
	});

	it('порівнянь зроблено більше, ніж пропущено', () => {
		expect(compared, 'нуль порівнянь — розвʼязувач не розібрав нічого').toBeGreaterThan(300);
	});

	it('усі дванадцять комбінацій стилю й теми прочитано', () => {
		for (const style of STYLES) {
			for (const theme of THEMES) {
				const tokens = tokensFor(style, theme);
				expect(
					Object.keys(tokens).length,
					`${style}/${theme}: токенів не знайдено — файл теми не прочитався`
				).toBeGreaterThan(40);
			}
		}
	});
});

describe('пропуски пораховані, а не мовчазні (UI-UX-v8 § 1.5.1.3)', () => {
	it('нерозвʼязаних токенів немає', () => {
		expect(
			skips.unresolved,
			'токен без оголошення й без запасного значення — це вже інший гейт (css-variables.spec.ts), ' +
				'але тут він означає, що пара не порівнювалася ЗОВСІМ'
		).toBe(0);
	});

	it('число пропусків по прозорості не зрушило', () => {
		expect(
			skips.alpha,
			'пара з прозорістю потребує композиту з тим, що під низом; ' +
				'число тут записане, щоб поява нових таких пар була видима, а не мовчазна'
		).toBe(CONTRAST_SKIPS.alpha);
	});

	it('число нерозібраних значень не зрушило', () => {
		expect(
			skips.notColor,
			'значення, яке розбір не визнав кольором; число записане з тієї ж причини'
		).toBe(CONTRAST_SKIPS.notColor);
	});
});

describe('контраст палітри (ACCESSIBILITY-v8 § 6)', () => {
	it('борг не зріс і жоден рядок не застарів', () => {
		const actual = [...failures.keys()].sort();
		const known = [...KNOWN_CONTRAST_DEBT].sort();

		const appeared = actual
			.filter((k) => !known.includes(k))
			.map((k) => {
				const f = failures.get(k)!;
				return `+ ${k} = ${f.ratio.toFixed(2)}:1 (${f.bg} / ${f.fg})\n      ${f.where}`;
			});
		const gone = known.filter((k) => !actual.includes(k)).map((k) => `- ${k}`);

		expect(
			[...appeared, ...gone],
			appeared.length
				? 'зʼявилася пара, якої не було в базі:\n  ' + [...appeared, ...gone].join('\n  ')
				: 'борг скоротився — приберіть ці рядки з contrast-baseline.ts тим самим комітом:\n  ' +
						gone.join('\n  ')
		).toEqual([]);
	});
});
