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

/* -------------------------------------------------------------------------
 * `light-dark()` — другий і третій класи GATE-CSS-VARS (канон v8.11).
 * ---------------------------------------------------------------------- */

/**
 * UI-UX-v8 § 1.5.1.3 (`UIUX-LIGHT-DARK-COLOR-ONLY`, HIGH) — `light-dark()`
 * приймає рівно `light-dark(<color>, <color>)`, і неколірний аргумент дає не
 * «перший аргумент», а ЗНИКЛУ ВЛАСТИВІСТЬ ЦІЛКОМ.
 *
 * ## Чому це не ловить ніщо інше
 *
 * Значення стає недійсним на момент обчислення, і властивість бере початкове:
 * `box-shadow: none`, `background-image: none`, `backdrop-filter: none`. Збірка
 * проходить, `svelte-check` у CSS не дивиться, ESLint теж. Симптом при цьому
 * вказує НЕ туди: у сусідньому `Slovko` зникнення `backdrop-filter` виглядало
 * як «крізь накладку онбордингу просвічується гра», тобто як дефект онбордингу,
 * а не палітри.
 *
 * Заміряно каноном у Chrome 148:
 *
 * | Значення                                          | Обчислене |
 * |---------------------------------------------------|-----------|
 * | `color: light-dark(#f00, #00f)`                   | працює |
 * | `box-shadow: 0 4px 20px light-dark(#0002, #0006)` | працює — `light-dark()` у КОЛІРНІЙ позиції |
 * | `box-shadow: light-dark(0 4px 20px #0002, …)`     | **none** |
 * | `background-image: light-dark(url(a), url(b))`    | **none** |
 * | `backdrop-filter: blur(light-dark(4px, 8px))`     | **none** |
 *
 * ## Чому гейт потрібен ЗАРАЗ, коли виклик у проєкті один
 *
 * § 1.5.1.1 вимагає переводити пару токенів ЦІЛКОМ і одним комітом, а тут
 * переведено поки одну властивість — фон першого кадру, і решта записана боргом
 * у `PROJECT-CONTEXT.md`. Тобто механічний прохід по шести файлах тем ще
 * попереду, і саме він в усіх чотирьох заміряних каноном проєктах затягнув у
 * `light-dark()` неколірні токени: вони стоять у тому самому блоці, виглядають
 * так само й мають таку саму пару значень. Ратчет на нулі коштує нічого, а
 * ставити його ПІСЛЯ переходу пізно — до того моменту дефект уже в проді.
 *
 * ## Чому цього не побачив би розвʼязувач контрасту
 *
 * Канон називає це прямо: розвʼязувач `light-dark()` у `contrast.test.ts` знімає
 * функцію, віддає аргумент у розбір кольору, на тіні отримує `null` і ТИХО
 * пропускає токен як «не колір, не наша справа». У `as5` це 7 мертвих токенів
 * при 207 зелених тестах, і гейт контрасту серед них. Тому нерозібране значення
 * тут — червоне, а не пропуск; список винятків нижче іменований і кінцевий.
 *
 * ## Судити по джерелах можна, і це не суперечить «лише по build/»
 *
 * Vite 8 віддає CSS через Lightning CSS, і той знижує `light-dark()` у
 * `var(--lightningcss-light, X) var(--lightningcss-dark, Y)` для БУДЬ-ЯКОГО типу
 * значення — тобто маскує дефект. Цей проєкт на `vite@^6`, тож маскування немає
 * зовсім; але гейт джерела обовʼязковий і на Vite 8, бо там працездатність
 * тримає версія збірника, і бамп мажора забере її без жодного червоного.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): дописати в
 * `lib/css/themes/gray.css` рядок `--x: light-dark(8px, 12px);` — перевірка
 * мусить назвати саме цей виклик і саме той файл.
 */

/**
 * CSS-текст файлу зі ЗБЕРЕЖЕНИМИ номерами рядків.
 *
 * Для `.svelte` і `.html` усе поза `<style>` заміняється пробілами. Без цього
 * розбір блоків ловив би фігурні дужки розмітки (`{#if …}`, `{expr}`) і
 * приписував `light-dark()` до блоку, якого не існує.
 */
function cssSideOf(source: string, file: string): string {
	if (file.endsWith('.css')) return stripComments(source);
	let out = source.replace(/[^\n]/g, ' ');
	for (const match of source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) {
		const body = match[1];
		const start = (match.index ?? 0) + match[0].indexOf(body);
		out = out.slice(0, start) + body + out.slice(start + body.length);
	}
	return stripComments(out);
}

/**
 * Тіло виклику, що починається на `(` за позицією `open`, — підрахунком дужок.
 * `null`, якщо дужка не закрита.
 */
function callBody(source: string, open: number): string | null {
	let depth = 0;
	for (let i = open; i < source.length; i++) {
		if (source[i] === '(') depth++;
		else if (source[i] === ')') {
			depth--;
			if (depth === 0) return source.slice(open + 1, i);
		}
	}
	return null;
}

/**
 * Ділення аргументів ПІДРАХУНКОМ ДУЖОК, а не `split(',')`.
 *
 * `rgba(255, 255, 255, 0.7)` сам містить коми. При наївному поділі перший
 * аргумент обривається на `rgba(255`, не розбирається як колір — і перевірка
 * МОВЧКИ рахує пару непокритою, тобто «проблем немає». Канон називає саме цю
 * пастку (§ 1.5.1.1), і саме тому нижче стоїть тест на сам розбір.
 */
function splitTopLevel(inner: string): string[] {
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

/** Повний перелік іменованих кольорів CSS — дані, а не евристика. */
const NAMED_COLORS = new Set(
	(
		'transparent currentcolor aliceblue antiquewhite aqua aquamarine azure beige bisque black ' +
		'blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral ' +
		'cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen ' +
		'darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon ' +
		'darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink ' +
		'deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ' +
		'ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ' +
		'ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan ' +
		'lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen ' +
		'lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen ' +
		'magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen ' +
		'mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream ' +
		'mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid ' +
		'palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum ' +
		'powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown ' +
		'seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen ' +
		'steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen'
	).split(' ')
);

const HEX_COLOR = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const COLOR_FUNCTION =
	/^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix|light-dark)\(/i;

/**
 * Чи є значення кольором.
 *
 * `var(--x)` навмисно НЕ вважається кольором: судити про нього перевірка не
 * може, а тихий пропуск — це рівно та поведінка, через яку в `as5` сім мертвих
 * токенів жили при зелених тестах. Законний випадок оформлюється винятком
 * нижче, тобто видимим рядком у diff.
 */
function isColor(value: string): boolean {
	const v = value.trim();
	if (!v) return false;
	if (HEX_COLOR.test(v)) return true;
	if (COLOR_FUNCTION.test(v) && v.endsWith(')')) return true;
	return NAMED_COLORS.has(v.toLowerCase());
}

/**
 * Аргументи `light-dark()`, які розбір не визнав кольором і які при цьому
 * законні. Перелік ІМЕНОВАНИЙ і КІНЦЕВИЙ (§ 1.5.1.3).
 *
 * Порожній — і мусить лишатися порожнім: кожен рядок тут означав би або
 * властивість, яку браузер викидає, або значення, про яке гейт не може судити.
 */
const KNOWN_NON_COLOR_ARGUMENTS: readonly string[] = [];

type LightDarkCall = {
	at: string;
	call: string;
	args: string[];
	inBlockWithScheme: boolean;
};

/** Межі кожного блоку `{ … }`; внутрішні йдуть перед зовнішніми. */
function blocksOf(css: string): { start: number; end: number }[] {
	const stack: number[] = [];
	const blocks: { start: number; end: number }[] = [];
	for (let i = 0; i < css.length; i++) {
		if (css[i] === '{') stack.push(i);
		else if (css[i] === '}') {
			const start = stack.pop();
			if (start !== undefined) blocks.push({ start, end: i });
		}
	}
	return blocks;
}

const lightDarkCalls: LightDarkCall[] = [];

for (const file of files.filter((f) => STYLE_FILE.test(f))) {
	const css = cssSideOf(readFileSync(file, 'utf8'), file);
	const blocks = blocksOf(css);

	for (const match of css.matchAll(/light-dark\s*\(/g)) {
		const start = match.index ?? 0;
		const open = start + match[0].length - 1;
		const body = callBody(css, open);
		if (body === null) continue;

		// Найглибший блок, що містить виклик. `color-scheme` мусить стояти в
		// ТОМУ САМОМУ блоці: без нього браузер бере схему з іншого рівня, і
		// пара мовчки віддає не той аргумент.
		const inner = blocks
			.filter((b) => b.start < open && open < b.end)
			.sort((a, b) => b.start - a.start)[0];

		lightDarkCalls.push({
			at: `${file}:${css.slice(0, start).split('\n').length}`,
			call: `light-dark(${body})`,
			args: splitTopLevel(body),
			inBlockWithScheme: inner
				? /(^|[^-\w])color-scheme\s*:/.test(css.slice(inner.start, inner.end))
				: false
		});
	}
}

describe('розбір light-dark() (перевірка на саму перевірку)', () => {
	it('аргументи діляться підрахунком дужок, а не комою', () => {
		expect(splitTopLevel('rgba(255, 255, 255, 0.7), #1a1a1a')).toEqual([
			'rgba(255, 255, 255, 0.7)',
			'#1a1a1a'
		]);
	});

	it('тіло виклику береться до ПАРНОЇ дужки', () => {
		const source = 'background: light-dark(rgb(1, 2, 3), #fff) no-repeat;';
		expect(callBody(source, source.indexOf('('))).toBe('rgb(1, 2, 3), #fff');
	});

	it('isColor не завжди-true: неколірні значення відкидаються', () => {
		for (const value of ['8px', 'url(a.webp)', '0 4px 20px #0002', 'blur(4px)', 'var(--x)']) {
			expect(isColor(value), `${value} прийнято за колір — гейт нічого не доводить`).toBe(false);
		}
	});

	it('isColor не завжди-false: колірні форми приймаються', () => {
		for (const value of [
			'#fff',
			'#f5f6fa',
			'#00000080',
			'rgba(0, 0, 0, 0.5)',
			'oklch(0.7 0.1 250)',
			'red',
			'transparent',
			'currentColor'
		]) {
			expect(isColor(value), `${value} не визнано кольором — гейт червонітиме дарма`).toBe(true);
		}
	});
});

describe('light-dark() (UI-UX-v8 § 1.5.1.3, GATE-CSS-VARS)', () => {
	it('перевірка жива: виклики light-dark() у джерелах знайдено', () => {
		// Проєкт переводить палітру на `light-dark()` (див. PROJECT-CONTEXT.md,
		// «Фон першого кадру»). Нуль тут означав би, що сканер шукає не там, а
		// не що дефектів немає.
		expect(
			lightDarkCalls.length,
			'жодного light-dark() у src/ — сканер зламався або перехід відкотили'
		).toBeGreaterThan(0);
	});

	it('кожен аргумент — колір (§ 1.5.1.3)', () => {
		const bad = lightDarkCalls
			.flatMap((c) => c.args.map((arg) => ({ ...c, arg })))
			.filter((c) => !isColor(c.arg) && !KNOWN_NON_COLOR_ARGUMENTS.includes(c.arg))
			.map((c) => `${c.at}: «${c.arg}» у ${c.call}`);

		expect(
			bad,
			'неколірний аргумент не дає «перший аргумент» — він гасить властивість ЦІЛКОМ ' +
				'(box-shadow: none, background-image: none). Тінь ставиться як ' +
				'`0 4px 20px light-dark(світла, темна)`; для url() і довжин механізму немає — ' +
				`пара відтворюється селекторами html[data-theme]:\n${bad.join('\n')}`
		).toEqual([]);
	});

	it('аргументів рівно два (§ 1.5.1.1)', () => {
		const bad = lightDarkCalls
			.filter((c) => c.args.length !== 2)
			.map((c) => `${c.at}: ${c.args.length} аргументів у ${c.call}`);
		expect(
			bad,
			'light-dark() приймає рівно два аргументи; трійка компонент ' +
				`(--accent-rgb: 0, 102, 204) у нього не влазить:\n${bad.join('\n')}`
		).toEqual([]);
	});

	it('поруч у тому самому блоці оголошено color-scheme (§ 1.5.1)', () => {
		const bad = lightDarkCalls.filter((c) => !c.inBlockWithScheme).map((c) => `${c.at}: ${c.call}`);
		expect(
			bad,
			'без color-scheme у тому ж блоці браузер бере схему з іншого рівня, ' +
				`і пара мовчки віддає не той аргумент:\n${bad.join('\n')}`
		).toEqual([]);
	});
});

/* -------------------------------------------------------------------------
 * Запасне значення в КОЛІРНІЙ властивості — колір, який не бачить тему.
 * ---------------------------------------------------------------------- */

/**
 * UI-UX-v8 § 1.6 + § 1.5 — четвертий клас GATE-CSS-VARS, і він виріс із межі
 * першого.
 *
 * ## Чому перший клас цього не ловить, і чому це правильно
 *
 * Перевірка вище червоніє лише на `var(--x)` БЕЗ запасного значення: із
 * запасним поведінка визначена, тож це не дефект, а свідомий типовий варіант.
 * Так і є — доки змінна десь оголошена. Коли її немає НІДЕ, «запасне значення»
 * перестає бути запасним: воно стає ЄДИНИМ, тобто звичайним літералом, який
 * лише виглядає як токен теми.
 *
 * У колірній властивості це не косметика. Літерал заморожений під ту тему, у
 * якій його писали, і в протилежній дає пару, якої не було в жодній.
 *
 * ## Що це коштувало тут (заміряно 2026-08-27, 11 змінних, 25 вживань)
 *
 * | Місце | Було | У світлій темі |
 * |---|---|---|
 * | `MenuButton.primary` (центральна кнопка меню) | `color: var(--text-color, #fff)` на `var(--control-bg, #444)` | білий текст на `#e0e1e6` — **1.31:1**, тобто напис зникає |
 * | `ErrorBoundary` і `+error.svelte`, `.action-btn.secondary` | `background: var(--bg-tertiary, #2d3748)` + `color: var(--text-primary)` | темний текст на темному тлі — **1.03:1** на екрані аварії |
 * | `MenuButton.primary.active` | `var(--primary-color, #ffaa00)` + `var(--black, #000)` | помаранчевий із чорним у ВСІХ шести стилях однаково |
 *
 * Жодна з цих змінних не оголошена ніде: `--text-color`, `--text-muted`,
 * `--success-color`, `--accent-text`, `--bg-tertiary`, `--warning-color`,
 * `--primary-color`, `--input-bg`, `--time-bar-color`, `--black`,
 * `--background-alt`. Це імена з чужого дизайн-токен-набору, які приїхали
 * разом зі скопійованим CSS.
 *
 * ## Що зроблено замість того, щоб оголосити їх
 *
 * Кожне вживання переведене на токен, який у палітрі ВЖЕ Є, зі збереженням
 * того самого літерала запасним: `var(--text-color, #fff)` →
 * `var(--text-primary, #fff)`. Оголосити одинадцять нових імен означало б
 * подвоїти половину палітри синонімами; запасне значення при цьому лишається
 * на місці — воно потрібне екрану аварії, який мусить малюватися й тоді, коли
 * `app.css` не приїхав.
 *
 * ## Межа правила названа
 *
 * Правило стосується лише КОЛІРНИХ властивостей. `var(--unified-radius, 18px)`
 * без оголошення дає ту саму геометрію в кожній темі — там літерал і є
 * відповіддю, а не замороженим вибором.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути в
 * `MenuButton.svelte` рядок `color: var(--text-color, #fff)` — перевірка
 * називає змінну, файл і рядок.
 */

/** Властивості, значення яких — колір. */
const COLOR_PROPERTY =
	/(^|[;{\s])(color|background|background-color|border(?:-\w+)?-color|outline-color|fill|stroke|caret-color|text-decoration-color|column-rule-color|accent-color)\s*:\s*([^;}]+)/g;

type FallbackOnly = { at: string; variable: string; declaration: string };

const fallbackOnly: FallbackOnly[] = [];

for (const file of files.filter((f) => STYLE_FILE.test(f))) {
	const css = cssSideOf(readFileSync(file, 'utf8'), file);
	css.split('\n').forEach((line, index) => {
		for (const property of line.matchAll(COLOR_PROPERTY)) {
			const value = property[3];
			for (const use of value.matchAll(/var\(\s*(--[a-zA-Z][\w-]*)\s*,[^)]*\)/g)) {
				if (declared.has(use[1])) continue;
				fallbackOnly.push({
					at: `${file}:${index + 1}`,
					variable: use[1],
					declaration: `${property[2]}: ${value.trim().slice(0, 60)}`
				});
			}
		}
	});
}

describe('колірні властивості не залежать від неоголошених змінних (UI-UX-v8 § 1.6)', () => {
	it('перевірка жива: колірні властивості в джерелах знайдено', () => {
		let found = 0;
		for (const file of files.filter((f) => STYLE_FILE.test(f))) {
			const css = cssSideOf(readFileSync(file, 'utf8'), file);
			found += [...css.matchAll(COLOR_PROPERTY)].length;
		}
		expect(found, 'жодної колірної властивості — регулярка зламана').toBeGreaterThan(100);
	});

	it('запасне значення не лишається єдиним', () => {
		const bad = fallbackOnly.map((f) => `${f.at}: ${f.variable} у «${f.declaration}»`);
		expect(
			bad,
			'змінної немає в жодній темі, тож «запасне» значення стає ЄДИНИМ — ' +
				'звичайним літералом, замороженим під ту тему, у якій його писали. ' +
				'У протилежній темі це дає пару, якої не було в жодній ' +
				`(заміряно: білий текст на #e0e1e6 — 1.31:1):\n${bad.join('\n')}`
		).toEqual([]);
	});
});
