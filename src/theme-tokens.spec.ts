// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

/**
 * Каскад тем: два інваріанти, обидва — про те, що НЕ видно в жодному файлі
 * окремо (UI-UX-v8 § 1.5, SVELTE-UI-v8 `SUI-SCOPE-SPECIFICITY`).
 *
 * ## Як влаштована палітра
 *
 * Три шари, і в них різна специфічність:
 *
 * | шар                                      | токенів | специфічність |
 * |------------------------------------------|---------|---------------|
 * | `:root`                                  | 70      | (0,1,0)       |
 * | `[data-theme="dark"]`                    | 28      | (0,1,0)       |
 * | `[data-style="S"]`                       | 0…19    | (0,1,0)       |
 * | `[data-style="S"][data-theme="light|dark"]` | ~30   | (0,2,0)       |
 *
 * Блок стилю дає лише близько тридцяти токенів із сімдесяти. Решта приходить
 * знизу — і саме там ховаються обидва класи дефектів.
 *
 * ## Навіщо ці гейти саме тепер
 *
 * Проєкт додає ТРЕТЮ тему. Кожна асиметрія, яка сьогодні існує в одному стилі,
 * після цього скопіюється ушестеро — тому гейт ставиться ПЕРЕД роботою, а не
 * після.
 */

const BASE = 'src/lib/css/base/variables.css';
const THEME_DIR = 'src/lib/css/themes';
const STYLES = ['gray', 'blue', 'green', 'orange', 'purple', 'wood'] as const;
const THEMES = ['light', 'dark'] as const;

const strip = (source: string): string => source.replace(/\/\*[\s\S]*?\*\//g, ' ');

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
const darkBaseTokens = blockVars(baseCss, (s) => s === '[data-theme="dark"]');
const styleCss = Object.fromEntries(
	STYLES.map((style) => [style, strip(readFileSync(`${THEME_DIR}/${style}.css`, 'utf8'))])
) as Record<(typeof STYLES)[number], string>;

const unthemedOf = (style: string) =>
	blockVars(styleCss[style as (typeof STYLES)[number]], (s) => s === `[data-style="${style}"]`);
const themedOf = (style: string, theme: string) =>
	blockVars(
		styleCss[style as (typeof STYLES)[number]],
		(s) => s === `[data-style="${style}"][data-theme="${theme}"]`
	);

describe('перевірка жива', () => {
	it('усі шари прочитано', () => {
		expect(Object.keys(rootTokens).length, ':root не прочитано').toBeGreaterThan(50);
		expect(Object.keys(darkBaseTokens).length, 'базовий dark не прочитано').toBeGreaterThan(20);
		for (const style of STYLES) {
			for (const theme of THEMES) {
				expect(
					Object.keys(themedOf(style, theme)).length,
					`${style}/${theme}: блок токенів не знайдено`
				).toBeGreaterThan(20);
			}
		}
	});
});

/* ------------------------------------------------------------------------ *
 * 1. Блоки тем одного стилю оголошують ТОЙ САМИЙ набір токенів
 * ------------------------------------------------------------------------ */

/**
 * ## Що ловить
 *
 * Токен, якому стиль дав власне значення в одній темі й НЕ дав в іншій. Тоді в
 * другій темі він приходить із загального шару — тобто з чужої родини кольорів.
 *
 * ## Заміряна ціна: темний purple
 *
 * Шість токенів оголошені у світлому фіолетовому й відсутні в темному, тож
 * темний фіолетовий бере їх із загального `[data-theme="dark"]`. Стовпчик
 * «споживачів» дописаний ПІСЛЯ заміру `var(--токен)` по джерелах — без нього
 * перші чотири рядки читалися б як однаково дорогі, а вони не однакові:
 *
 * | токен | фіолетове | бере темний purple | споживачів |
 * |---|---|---|---|
 * | `--control-hover` | `#a259e6` | `#1976d2` — синій | **18** |
 * | `--piece-shadow` | фіолетова | `rgba(0, 0, 0, 0.7)` | **8** |
 * | `--confirm-btn-hover` | `#7c3aed` | `#2e7d32` — зелений | **2** |
 * | `--piece-color` | `#a259e6` | `#ffd54f` — бурштиновий | **1** |
 * | `--cell-blocked` | `#b39ddb` | `#626262` | **0** |
 * | `--no-moves-btn-hover` | `#e0c3fc` | `#f57c00` — оранжевий | **0** |
 *
 * Тобто справжня ціна — синій ховер у вісімнадцяти місцях і зелений ховер
 * підтвердження. Бурштиновий `--piece-color` малюється в ОДНОМУ місці, і не на
 * ігровій дошці, а на сторінці правил (`.dir-btn-visual.center-piece`); два
 * останні рядки не малюються ніде взагалі — токен оголошений у сімох файлах і
 * не спожитий жодним.
 *
 * Це виправлення до першої редакції цього докблоку, яка перелічувала всі шість
 * як однаково видимі й казала «фігури на дошці». Гейт від того не слабший —
 * асиметрія справжня в усіх шести, — але ціна в рядках різна, і числа тут саме
 * тому.
 *
 * ## Чому саме симетрія блоків, а не «покриття всіх 70 токенів»
 *
 * Вимагати від стилю всі сімдесят означало б заборонити спільний шар, який для
 * цього й існує (`--debug-btn-bg` однаковий усюди). Симетрія ж перевіряє те, що
 * стиль сам уже вирішив: якщо він дав токену родинне значення в одній темі, він
 * мусить дати його в кожній.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати
 * `--cell-light` із темного блоку `gray.css` — перевірка називає стиль, тему й
 * токен.
 */
/**
 * Відома асиметрія — іменована, кінцева, лише скорочується.
 *
 * ФОРМАТ КЛЮЧА: `<тема, У ЯКІЙ ТОКЕНА НЕМАЄ>:<токен>`. Я записав його навпаки
 * з першого разу — і гейт це зловив сам: перевірка «перелік не застарів»
 * назвала всі девʼять рядків уже полагодженими, бо шукала їх не з того боку.
 * Формат названий тут саме тому.
 */
const KNOWN_ASYMMETRY: Readonly<Record<string, readonly string[]>> = {
	/*
	 * purple переписується на фіолетову родину в усіх трьох темах — рішення
	 * автора від 2026-08-28. Доти асиметрія записана, а не мовчить: шість
	 * токенів має світлий і не має темний, три — навпаки.
	 *
	 * Рядки ПРИБИРАЮТЬСЯ тим самим комітом, що перебудує purple.
	 */
	purple: [
		'dark:--cell-blocked',
		'dark:--piece-color',
		'dark:--piece-shadow',
		'dark:--control-hover',
		'dark:--confirm-btn-hover',
		'dark:--no-moves-btn-hover',
		'light:--modal-content-bg',
		'light:--modal-bg',
		'light:--text-shadow'
	],
	/*
	 * `--toggle-off-bg` — доріжка перемикача (`DontShowAgainCheckbox`), і на ній
	 * НЕМАЄ ТЕКСТУ: по ній їздить біла кулька. Темна доріжка на світлій темі —
	 * це «вимкнено», а не промах, і контрасту тексту тут не існує.
	 *
	 * Тобто ці три стилі свідомо не перекривають базове `#23272f` у світлій
	 * темі. Виняток названий, а не прихований послабленням гейта.
	 *
	 * Побічно видно й інше: темний блок `gray` присвоює цьому токену РІВНО
	 * базове значення, тобто його перекриття зайве. Прибирати не цим комітом.
	 */
	gray: ['light:--toggle-off-bg'],
	blue: ['light:--toggle-off-bg'],
	green: ['light:--toggle-off-bg']
};

describe('блоки тем одного стилю симетричні (UI-UX-v8 § 1.5)', () => {
	it('токен, оголошений в одній темі, оголошений і в решті', () => {
		const problems: string[] = [];
		for (const style of STYLES) {
			const byTheme = Object.fromEntries(
				THEMES.map((theme) => [theme, new Set(Object.keys(themedOf(style, theme)))])
			);
			const union = new Set(THEMES.flatMap((theme) => [...byTheme[theme]]));
			const missing: string[] = [];
			for (const token of [...union].sort()) {
				for (const theme of THEMES) {
					if (!byTheme[theme].has(token)) missing.push(`${theme}:${token}`);
				}
			}
			const known = KNOWN_ASYMMETRY[style] ?? [];
			const unexpected = missing.filter((m) => !known.includes(m));
			for (const m of unexpected) {
				const [theme, token] = m.split(':');
				const from = token in darkBaseTokens ? '[data-theme="dark"]' : ':root';
				problems.push(
					`${style}/${theme}: ${token} не оголошено — прийде з ${from}, тобто з чужої родини`
				);
			}
		}
		expect(
			problems,
			'токен без пари в іншій темі бере значення із загального шару; ' +
				`це дає колір, якого в цій родині немає:\n${problems.join('\n')}`
		).toEqual([]);
	});

	it('перелік відомої асиметрії не застарів', () => {
		const stale: string[] = [];
		for (const [style, known] of Object.entries(KNOWN_ASYMMETRY)) {
			const byTheme = Object.fromEntries(
				THEMES.map((theme) => [theme, new Set(Object.keys(themedOf(style, theme)))])
			);
			const union = new Set(THEMES.flatMap((theme) => [...byTheme[theme]]));
			const actual = new Set(
				[...union].flatMap((token) =>
					THEMES.filter((theme) => !byTheme[theme].has(token)).map((theme) => `${theme}:${token}`)
				)
			);
			for (const entry of known) {
				if (!actual.has(entry)) stale.push(`${style}: ${entry} — уже симетрично`);
			}
		}
		expect(
			stale,
			`асиметрію полагоджено, а рядок лишився — приберіть його тим самим комітом:\n${stale.join('\n')}`
		).toEqual([]);
	});
});

/* ------------------------------------------------------------------------ *
 * 2. Жоден токен не вирішується НІЧИЄЮ специфічності
 * ------------------------------------------------------------------------ */

/**
 * SVELTE-UI-v8 `SUI-SCOPE-SPECIFICITY`, HIGH.
 *
 * `[data-style="S"]`, `:root` і `[data-theme="dark"]` мають ОДНАКОВУ
 * специфічність — (0,1,0). Коли той самий токен оголошено у двох із них і
 * жоден специфічніший блок його не перекриває, переможця обирає ПОРЯДОК ПРАВИЛ
 * у складеній таблиці, а не специфічність. Канон називає це прямо: нічия
 * віддає вибір збірнику, і в dev він може бути іншим, ніж у продакшні.
 *
 * ## Заміряна ціна: світлий purple
 *
 * Два токени в нічиї, і обидва видимі:
 *
 * | токен | `:root` | `[data-style="purple"]` |
 * |---|---|---|
 * | `--modal-bg` | `rgba(0, 0, 0, 0.6)` — темна заслінка | `#fdf4f8` — майже біле |
 * | `--modal-content-bg` | `white` | `#fef6e4` |
 *
 * Тобто заслінка модального вікна перетворюється з темної на майже білу
 * залежно від того, який файл склеївся пізніше.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): дописати
 * `--text-primary` у блок `[data-style="gray"]` — перевірка називає токен і
 * обидва значення, що змагаються.
 */
const KNOWN_TIES: readonly string[] = [
	/*
	 * Обидві зникнуть разом із перебудовою purple: неthemed блок
	 * `[data-style="purple"]` розходиться по трьох темах, і нічиї не лишається.
	 */
	'purple:--modal-content-bg',
	'purple:--modal-bg'
];

describe('токени не вирішуються нічиєю специфічності (SUI-SCOPE-SPECIFICITY)', () => {
	/** Нічиї стилю: токен є в `[data-style="S"]` і в шарі тієї ж специфічності. */
	function tiesOf(style: string, theme: string): string[] {
		const unthemed = unthemedOf(style);
		const themed = themedOf(style, theme);
		const sameSpecificity = theme === 'dark' ? { ...rootTokens, ...darkBaseTokens } : rootTokens;
		return Object.keys(unthemed).filter((token) => token in sameSpecificity && !(token in themed));
	}

	it('перевірка жива: неthemed блоки стилів знайдено', () => {
		const withUnthemed = STYLES.filter((style) => Object.keys(unthemedOf(style)).length > 0);
		expect(
			withUnthemed.length,
			'жоден стиль не має блоку [data-style="S"] — розбір зламався, і нічиїх не буде видно'
		).toBeGreaterThan(0);
	});

	it('жодної нічиї поза переліком', () => {
		const problems: string[] = [];
		for (const style of STYLES) {
			for (const theme of THEMES) {
				for (const token of tiesOf(style, theme)) {
					const key = `${style}:${token}`;
					if (KNOWN_TIES.includes(key)) continue;
					const base = theme === 'dark' && token in darkBaseTokens ? darkBaseTokens : rootTokens;
					problems.push(
						`${style}/${theme}: ${token} — «${base[token]}» проти «${unthemedOf(style)[token]}», ` +
							'обидва (0,1,0); переможця обирає порядок склеювання'
					);
				}
			}
		}
		expect(
			problems,
			'нічия специфічності означає, що вигляд залежить від збірника, а не від коду; ' +
				`переносьте значення у блок [data-style][data-theme] — це (0,2,0):\n${problems.join('\n')}`
		).toEqual([]);
	});

	it('перелік нічиїх не застарів', () => {
		const actual = new Set(
			STYLES.flatMap((style) => THEMES.flatMap((theme) => tiesOf(style, theme).map((t) => `${style}:${t}`)))
		);
		const stale = KNOWN_TIES.filter((key) => !actual.has(key));
		expect(
			stale,
			`нічию прибрано, а рядок лишився — приберіть його тим самим комітом:\n${stale.join('\n')}`
		).toEqual([]);
	});
});

/* ------------------------------------------------------------------------ *
 * 3. Один блок токенів на комбінацію стиль×тема
 * ------------------------------------------------------------------------ */

/**
 * ## Що ловить
 *
 * Два блоки з ОДНАКОВИМ селектором `[data-style="S"][data-theme="T"]` у тому
 * самому файлі. Специфічність у них рівна, тож при перетині токенів переможе
 * той, що стоїть НИЖЧЕ, — і читач, який знайшов перший, побачить не те
 * значення, що малюється.
 *
 * ## Заміряна ціна
 *
 * `purple.css` мав два таких блоки — рядки 24 і 86. Токени в них не
 * перетиналися, тож вигляд був правильний ВИПАДКОВО. Побічна ціна вже
 * заплачена: я двічі за цей вечір помилився в підрахунку токенів purple саме
 * через це розкидання, і виправляв обидва рази.
 *
 * Зведено в один блок; обчислені значення до й після ідентичні — доведено
 * знімком усіх дванадцяти комбінацій, а не оглядом.
 *
 * ## Чому саме перед третьою темою
 *
 * Кожна нова тема — це +6 місць, де те саме значення може бути оголошене двічі
 * й розійтися. Гейт на нулі коштує нічого.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): дописати в кінець
 * `gray.css` другий блок `[data-style="gray"][data-theme="dark"] { --x: 1px; }`
 * — перевірка називає файл, селектор і число блоків.
 */
describe('один блок токенів на комбінацію (UI-UX-v8 § 1.5)', () => {
	/** Скільки блоків мають РІВНО цей селектор. */
	function blockCount(style: string, theme: string): number {
		const css = styleCss[style as (typeof STYLES)[number]];
		const selector = `[data-style="${style}"][data-theme="${theme}"]`;
		let count = 0;
		for (const block of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
			if (block[1].trim().replace(/\s+/g, ' ') === selector) count++;
		}
		return count;
	}

	it('перевірка жива: блоки взагалі знаходяться', () => {
		const total = STYLES.flatMap((s) => THEMES.map((t) => blockCount(s, t))).reduce(
			(a, b) => a + b,
			0
		);
		expect(total, 'жодного блоку токенів — розбір селекторів зламався').toBe(
			STYLES.length * THEMES.length
		);
	});

	it('жодна комбінація не оголошена двічі', () => {
		const duplicated: string[] = [];
		for (const style of STYLES) {
			for (const theme of THEMES) {
				const n = blockCount(style, theme);
				if (n > 1) {
					duplicated.push(
						`themes/${style}.css: [data-style="${style}"][data-theme="${theme}"] — ${n} блоки; ` +
							'при перетині токенів переможе нижній, і читач першого побачить не те значення'
					);
				}
			}
		}
		expect(duplicated, duplicated.join('\n')).toEqual([]);
	});
});
