// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Інваріанти UI-UX-v8 § 4 — три правила, кожне з яких ламається «виправленням»
 * і жодне з яких не бачить ні збірка, ні типи, ні решта гейтів.
 *
 * Файл окремий, а не дописаний до `css-variables.spec.ts`: там предмет —
 * значення CSS-змінних, тут — оболонка застосунку та словники. Спільного в них
 * лише те, що обидва читають джерела.
 */

const ROOT = 'src';
const APP_HTML = join(ROOT, 'app.html');

function walk(dir: string, out: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).split('\\').join('/');
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
}

/**
 * Інлайновий `<script>` з `app.html` — той самий, що йде в CSP хешем.
 *
 * Береться перший: у цьому файлі він єдиний, і саме він ставить `data-theme`.
 */
function inlineScript(): string {
	return readFileSync(APP_HTML, 'utf8').match(/<script>([\s\S]*?)<\/script>/)?.[1] ?? '';
}

/* ------------------------------------------------------------------------ *
 * 1. `color-scheme` не дорівнює `light`
 * ------------------------------------------------------------------------ */

/**
 * UI-UX-v8 § 1.2, HIGH.
 *
 * `<meta name="color-scheme" content="light">` — це не «сайт світлий», а
 * заявка «темної теми в мене немає». Android Chrome вмикає на такій сторінці
 * Force Dark Mode й ІНВЕРТУЄ кольори сам: тло, текст, зображення. Виглядає це
 * як зламана палітра, а причина стоїть в одному рядку `app.html`.
 *
 * Тут зараз `light dark`, і це не косметика: саме воно вмикає `light-dark()`
 * у тому самому файлі (див. `css-variables.spec.ts`). Тобто звуження до `light`
 * зламало б ще й фон першого кадру — мовчки, бо `light-dark()` без пари в
 * `color-scheme` віддає перший аргумент і не скаржиться.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): поставити
 * `content="light"` — перевірка називає знайдене значення.
 */
describe('color-scheme не провокує Force Dark Mode (UI-UX-v8 § 1.2)', () => {
	const meta = readFileSync(APP_HTML, 'utf8').match(
		/name="color-scheme"[^>]*content="([^"]+)"/
	);

	it('перевірка жива: мета-тег color-scheme в app.html знайдено', () => {
		expect(
			meta?.[1],
			'у app.html немає <meta name="color-scheme"> — порівнювати нема з чим'
		).toBeDefined();
	});

	it('значення не «light»', () => {
		expect(
			meta?.[1],
			'значення "light" вмикає Force Dark Mode на Android Chrome: браузер інвертує ' +
				'кольори сам, і це виглядає як зламана палітра'
		).not.toBe('light');
	});
});

/* ------------------------------------------------------------------------ *
 * 2. Інлайн-скрипт теми не валить перший кадр
 * ------------------------------------------------------------------------ */

/**
 * UI-UX-v8 § 1.1, HIGH.
 *
 * Скрипт першого кадру виконується ДО будь-якого коду застосунку й до
 * `ErrorBoundary`. Виняток у ньому — не «тема не застосувалася», а обрив
 * розбору `<head>`: далі не виконується нічого, і людина бачить порожню
 * сторінку без жодного сліду в UI.
 *
 * Кидати тут є чому. `localStorage` у приватному режимі частини браузерів
 * кидає на ДОСТУП, а не на запис, — тобто падає сам `typeof`-захист; те саме
 * в сторінці, відкритій у чужому iframe із заблокованим стороннім сховищем.
 * Цей самий висновок уже записаний у `services/storage.ts`, але той фасад сюди
 * не доїжджає: він приїде разом із бандлом, а скрипт працює до нього.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `try {` зі
 * скрипта в `app.html` — перевірка червоніє.
 */
describe('інлайн-скрипт теми не валить перший кадр (UI-UX-v8 § 1.1)', () => {
	it('перевірка жива: інлайн-скрипт в app.html знайдено', () => {
		expect(
			inlineScript().length,
			'у app.html немає інлайнового <script> — перевіряти нема що'
		).toBeGreaterThan(50);
	});

	it('обгорнутий у try/catch', () => {
		expect(
			/\btry\s*\{/.test(inlineScript()),
			'виняток у скрипті першого кадру обриває розбір <head>: далі не виконується ' +
				'нічого, і сторінка лишається порожньою без сліду в UI'
		).toBe(true);
	});
});

/* ------------------------------------------------------------------------ *
 * 3. Немає емодзі в рядках, які бачить гравець
 * ------------------------------------------------------------------------ */

/**
 * UI-UX-v8, анти-патерни (§ 3 — іконки це SVG, а не символ шрифту).
 *
 * ## Чому саме по словниках, а не по компонентах
 *
 * Канон каже це прямо: user-facing тексти живуть у словниках. Перевірка по
 * компонентах ловила б і те, що емодзі бути МОЖЕ (коментар, назва класу), і
 * пропускала б рядок, який приїхав із перекладу.
 *
 * ## Що це коштувало тут
 *
 * `testMode.set` дорівнював `"✔️"` у всіх чотирьох мовах — тобто підписом
 * кнопки був символ шрифту. Ціна не лише в тому, що він малюється по-різному
 * на кожній платформі: читалка озвучує його як «heavy check mark», і кнопка
 * стає безіменною. Наявний інваріант `a11y-conventions.spec.ts` цього не бачив
 * за побудовою — він шукає кнопку БЕЗ тексту, а тут текст формально був.
 *
 * Полагоджено разом із цим гейтом: іконка `Check` із `lucide-svelte` плюс
 * `aria-label` зі словника, а значення в словниках стало словом.
 *
 * ## Межа перевірки
 *
 * Дивиться лише в каталоги мов. `i18n/init.svelte.ts` під неї не підпадає
 * навмисно: `✅`/`❌` там у повідомленнях `logService`, які бачить розробник у
 * консолі й у звіті про помилку, а не гравець в інтерфейсі.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути `"✔️"` у
 * будь-який словник — перевірка називає мову, файл, ключ і сам символ.
 */
const LOCALES = ['uk', 'en', 'nl', 'crh'] as const;
/** Емодзі й піктограми; діапазони з UI-UX-v8 § 4. */
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

describe('у перекладах немає емодзі (UI-UX-v8, анти-патерни)', () => {
	const dictionaries = LOCALES.flatMap((locale) => walk(join(ROOT, 'lib/i18n', locale)))
		.filter((f) => f.endsWith('.ts'))
		.map((file) => ({ file, source: readFileSync(file, 'utf8') }));

	it('перевірка жива: словники знайдено в кожній мові', () => {
		for (const locale of LOCALES) {
			const own = dictionaries.filter((d) => d.file.includes(`/i18n/${locale}/`));
			expect(own.length, `у мові ${locale} не знайдено жодного файлу словника`).toBeGreaterThan(
				5
			);
		}
	});

	it('регулярка справді ловить те, від чого захищаємося', () => {
		// Канарка на саму перевірку: зламана регулярка дає нуль порушень, тобто
		// виглядає як «емодзі немає» (AI-AGENT-PITFALLS-v8 § 1).
		expect(EMOJI.test('set: "✔️"')).toBe(true);
		expect(EMOJI.test('set: "Підтвердити"')).toBe(false);
	});

	it('жодне значення словника не містить емодзі', () => {
		const bad: string[] = [];
		for (const { file, source } of dictionaries) {
			source.split('\n').forEach((line, index) => {
				if (EMOJI.test(line)) bad.push(`${file}:${index + 1}: ${line.trim().slice(0, 80)}`);
			});
		}
		expect(
			bad,
			'емодзі малюється по-різному на кожній платформі, а читалка озвучує його ' +
				`описом символу — кнопка з таким підписом лишається безіменною:\n${bad.join('\n')}`
		).toEqual([]);
	});
});

/* ------------------------------------------------------------------------ *
 * 4. Сторінки не малюють SVG самі
 * ------------------------------------------------------------------------ */

/**
 * UI-UX-v8 § 3.
 *
 * Сирий `<svg>` у файлі маршруту — це та сама іконка, скопійована в друге
 * місце: вона не бере кольору теми (`currentColor` копіюють не завжди), не має
 * спільного розміру й не потрапляє під жодне правило скіна. Місце іконки —
 * компонент у `lib/`, і саме звідти її беруть усі.
 *
 * Зараз таких нуль, тож ратчет коштує нічого — а перша ж вставлена іконка
 * стане видимою в прогоні, а не через пів року, коли її вже скопіюють утретє.
 */
describe('сторінки не містять сирого <svg> (UI-UX-v8 § 3)', () => {
	const routes = walk(join(ROOT, 'routes')).filter((f) => f.endsWith('.svelte'));

	it('перевірка жива: файли маршрутів знайдено', () => {
		expect(routes.length, 'жодного .svelte у src/routes — сканер шукає не там').toBeGreaterThan(
			10
		);
	});

	it('жоден файл маршруту не малює <svg> сам', () => {
		const bad = routes.filter((file) => /<svg\b/.test(readFileSync(file, 'utf8')));
		expect(
			bad,
			'іконка в маршруті не бере кольору теми й не має спільного розміру; ' +
				`місце іконки — компонент у lib/:\n${bad.join('\n')}`
		).toEqual([]);
	});
});

/* ------------------------------------------------------------------------ *
 * 5. Кнопка без жодного стану — натискання без відгуку
 * ------------------------------------------------------------------------ */

/**
 * UI-ELEMENTS-v8 § 1, ACCESSIBILITY-v8 § 3.
 *
 * ## Привід — скарга на кнопку «Скинути до стандартних»
 *
 * «Немає візуального зворотного зв'язку: користувач не розуміє, що кнопка була
 * натиснута». У стилях `.reset-button` було рівно `padding`, `background`,
 * `border-radius`, `font-weight` і `cursor: pointer`. Ні `:hover`, ні `:active`,
 * ні `:focus-visible` — тобто натискання не малювало нічого, а той, хто ходить
 * Tab-ом, не бачив навіть, де він стоїть.
 *
 * ## Чому це перевірка, а не одноразова правка
 *
 * Заміряно на цьому дереві: 55 класів виглядають кнопкою, і девʼять із них не
 * мають ЖОДНОГО зі трьох станів. Тобто це не одна кнопка, а спосіб їх писати:
 * поки станів немає в спільному місці, кожна нова кустарна кнопка народжується
 * без відгуку, і побачити це можна лише пальцем.
 *
 * Правильна відповідь — `StyledButton`, де всі три стани описані ОДИН раз
 * (`styled-button.css`): `:active` дає `translateY(1px)`, `:hover` — підйом і
 * `brightness(1.1)`, `:focus-visible` — рамку 3px. Саме туди й переведено
 * кнопку скидання.
 *
 * ## Чому решта вісім лишаються в переліку, а не полагоджені разом
 *
 * Кожна з них — окремий екран із власними розмірами й формою (`×` видалення
 * гравця, квадратна кнопка тестового режиму, посилання в тексті правил).
 * Переписати їх наосліп — це вісім візуальних змін без жодного ока на
 * результаті. Тому вони названі рядками: борг видимий і вимірний, а нова
 * кустарна кнопка без відгуку тепер валить прогін.
 *
 * ## Межа перевірки названа
 *
 * Дивиться лише на класи, у чиїй назві є `btn`/`button` і в чиєму правилі є
 * `cursor: pointer` або пара `padding` + `background`. Стан шукається В УСІХ
 * файлах, а не лише в тому, де клас оголошено: `.control-btn` описаний у
 * `direction-controls.css`, а `:hover` для нього — у файлі теми, і це законно.
 *
 * ## Поріг — ХОЧА Б ОДИН стан, і межу треба знати
 *
 * Вимагати всі три означало б червоніти на кнопці-посиланні, якій підйом і тінь
 * не потрібні за задумом. Ціна цього вибору названа: прибрати
 * `.styled-button:active` зі спільного файлу — і перевірка ЛИШИТЬСЯ ЗЕЛЕНОЮ, бо
 * `:hover` і `:focus-visible` для того самого класу лежать поруч. Перевірено
 * прогоном, а не припущено. Тобто гейт стереже появу кнопки БЕЗ ВІДГУКУ ВЗАГАЛІ,
 * а не повноту трійки станів; повноту тримає те, що всі три описані один раз і в
 * одному місці.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): дописати в будь-який
 * компонент клас виду `.brand-new-btn { padding: 8px; background: red; cursor:
 * pointer; }` — перевірка називає його разом із файлом.
 */

/** Правило CSS у будь-якому файлі джерел. */
type CssRule = { file: string; selector: string; body: string };

function cssRules(): CssRule[] {
	const out: CssRule[] = [];
	for (const file of walk(ROOT)) {
		if (!/\.(css|svelte)$/.test(file)) continue;
		const source = readFileSync(file, 'utf8');
		const css = file.endsWith('.css')
			? source
			: [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n');
		const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, ' ');
		for (const block of withoutComments.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
			out.push({
				file,
				selector: block[1].trim().replace(/\s+/g, ' '),
				body: block[2]
			});
		}
	}
	return out;
}

const RULES = cssRules();
const INTERACTION_STATE = /:hover|:active|:focus-visible/;

const classesOf = (selector: string): string[] =>
	[...selector.matchAll(/\.([a-zA-Z][\w-]*)/g)].map((m) => m[1]);

/** Правило виглядає описом кнопки, а не контейнера. */
const looksLikeButton = (rule: CssRule): boolean =>
	/cursor\s*:\s*pointer/.test(rule.body) ||
	(/padding\s*:/.test(rule.body) && /background/.test(rule.body));

const buttonClasses = new Map<string, CssRule>();
for (const rule of RULES) {
	if (!looksLikeButton(rule)) continue;
	if (/:hover|:active|:focus|:disabled|::/.test(rule.selector)) continue;
	for (const cls of classesOf(rule.selector)) {
		if (!/btn|button/i.test(cls)) continue;
		if (!buttonClasses.has(cls)) buttonClasses.set(cls, rule);
	}
}

const withoutState = [...buttonClasses.keys()].filter(
	(cls) => !RULES.some((r) => INTERACTION_STATE.test(r.selector) && classesOf(r.selector).includes(cls))
);

/**
 * Класи без жодного стану, які лишаються такими СВІДОМО. Перелік іменований,
 * кінцевий і лише скорочується; рядок прибирається разом із виправленням.
 *
 * Два з них — не кнопки, а контейнери, які потрапили сюди через назву; вони не
 * потребують станів і названі саме тому, щоб наступний читач не «лагодив» їх.
 */
const KNOWN_WITHOUT_FEEDBACK: Readonly<Record<string, string>> = {
	'button-group-container': 'контейнер групи, а не кнопка (назва вводить в оману)',
	'modal-action-buttons': 'контейнер рядка кнопок у модалці, а не кнопка',
	'add-player-btn': 'екран локальної гри — переписати на StyledButton разом із рештою трьох',
	'start-game-btn': 'екран локальної гри — той самий прохід',
	'player-type-btn': 'екран локальної гри — той самий прохід',
	'remove-player-btn': 'екран локальної гри, кнопка «×» — потрібен свій розмір',
	'custom-dropdown-btn': 'кнопка вибору теми в головному меню',
	'inline-link-button': 'посилання в тексті правил — вигляд тексту, а не кнопки',
	'test-mode-square-btn': 'панель тестового режиму, лише dev'
};

describe('кнопка має відгук на натискання (UI-ELEMENTS-v8 § 1)', () => {
	it('перевірка жива: класи-кнопки знайдено', () => {
		expect(
			buttonClasses.size,
			'жодного класу, що виглядає кнопкою — розбір CSS зламався'
		).toBeGreaterThan(30);
	});

	it('перевірка жива: у більшості кнопок стани Є', () => {
		// Без цього рядка зламаний пошук станів дав би «усі без відгуку», і
		// перелік винятків розрісся б до всього проєкту.
		expect(
			buttonClasses.size - withoutState.length,
			'стани не знайдено ні в кого — регулярка станів зламана'
		).toBeGreaterThan(20);
	});

	it('жодна кнопка без hover/active/focus-visible не зʼявилася поза переліком', () => {
		const unlisted = withoutState
			.filter((cls) => !(cls in KNOWN_WITHOUT_FEEDBACK))
			.map((cls) => `.${cls} → ${buttonClasses.get(cls)?.file}`);
		expect(
			unlisted,
			'натискання без відгуку не видно ніяк, окрім пальцем; ' +
				'усі три стани описані один раз у styled-button.css — ' +
				`беріть StyledButton замість власної кнопки:\n${unlisted.join('\n')}`
		).toEqual([]);
	});

	it('перелік винятків не містить уже полагоджених класів', () => {
		const stale = Object.keys(KNOWN_WITHOUT_FEEDBACK).filter((cls) => !withoutState.includes(cls));
		expect(
			stale,
			`клас уже має стани або зник — приберіть рядок із переліку:\n${stale.join('\n')}`
		).toEqual([]);
	});
});

/* ------------------------------------------------------------------------ *
 * У кожного мета-тега один власник (SEO-v9 § 4.4, `SEO-HEAD-SINGLE-OWNER`)
 * ------------------------------------------------------------------------ */

/**
 * `<svelte:head>` ДОПИСУЄ до `<head>`, а не заміщує в ньому — HIGH.
 *
 * У сусідньому `adoptananimal` це коштувало двохсот сторінок із логотипом
 * замість фотографії: макет ставив `og:image`, сторінка ставила свій, у
 * документі опинялися ДВА теги, і який із них візьме краулер — не вирішує
 * ніхто.
 *
 * ## Чому потрібні саме два шари
 *
 * `+layout.ts` вимикає SSR для всього застосунку, тож у `build/` немає нічого
 * зі `<svelte:head>`: уся розмітка для краулерів живе в `app.html`. Отже
 * перевірка над `build/` (вона є, у `scripts/check-build.mjs`) бачить лише
 * половину — дубль, зроблений `app.html` сам собі. Другу половину, тег зі
 * `<svelte:head>` поверх уже наявного в `app.html`, видно ЛИШЕ в джерелах, і
 * саме її тримає ця перевірка.
 *
 * Проєкт уже наступав на це рівно один раз, і в правильний бік: сторінка
 * `/beta-test-checklists` мусить бути `noindex`, а `app.html` несе
 * `robots: index, follow`. Замість другого тега вона ПРАВИТЬ наявний через
 * `$effect` і повертає значення на виході — з докблоком, який пояснює чому.
 * Тобто рішення в проєкті є, а гейта над ним не було.
 *
 * ## Що вважається дублем
 *
 * `<title>` не вважається: Svelte підмінює його як властивість документа, а не
 * додає другий вузол. Мета-тег із `name` або `property`, який уже є в
 * `app.html`, — вважається.
 *
 * Зворотний експеримент (§ 1.1) — прогнано: дописати
 * `<meta name="robots" content="noindex" />` у `<svelte:head>` сторінки
 * чеклиста → перевірка червоніє з назвою файлу й тега.
 */
describe('у кожного мета-тега один власник (SEO-HEAD-SINGLE-OWNER)', () => {
	/** `name`/`property` кожного `<meta>` з оболонки застосунку. */
	function shellMeta(): Set<string> {
		const html = readFileSync(APP_HTML, 'utf8');
		return new Set(
			[...html.matchAll(/<meta[^>]+(?:name|property)="([^"]+)"/g)].map((match) => match[1])
		);
	}

	/**
	 * Коментарі відрізаються ПЕРЕД пошуком — і це знайшла сама перевірка.
	 *
	 * Перший прогін оголосив порушником саме той файл, який робить усе
	 * правильно: докблок `beta-test-checklists/+page.svelte` пояснює, чому тег
	 * там ПРАВИТЬСЯ, а не додається, і цитує при цьому і `<svelte:head>`, і
	 * `<meta name="robots" …>`. Ліниве `[\s\S]*?` зачепилося за згадку в
	 * коментарі на 21-му рядку й дотягнулося до справжнього `</svelte:head>` на
	 * 117-му — тобто проглинуло весь файл.
	 *
	 * Це вже третій випадок того самого класу в цьому репозиторії
	 * (`test-runners.test.ts`, `ci.test.ts`, тепер тут), і висновок той самий:
	 * перевірка, яка червоніє без порушення, недовго лишається ввімкненою
	 * (CODE-QUALITY § 6.4.1).
	 */
	function withoutHtmlComments(source: string): string {
		return source
			.replace(/<!--[\s\S]*?-->/g, '')
			.replace(/\/\*[\s\S]*?\*\//g, '')
			.replace(/^\s*\/\/.*$/gm, '');
	}

	/** Вміст усіх `<svelte:head>` проєкту, за файлами. */
	function heads(): { file: string; body: string }[] {
		return walk(ROOT)
			.filter((file) => file.endsWith('.svelte'))
			.flatMap((file) =>
				[
					...withoutHtmlComments(readFileSync(file, 'utf8')).matchAll(
						/<svelte:head>([\s\S]*?)<\/svelte:head>/g
					)
				].map((match) => ({ file, body: match[1] }))
			);
	}

	it('перевірка жива: коментарі відрізані, і саме той файл більше не порушник', () => {
		// Канарка на фільтр. Без неї «нуль знахідок» означав би або чистий
		// проєкт, або з'їдений вхід — і відрізнити було б неможливо.
		const suspect = heads().filter((entry) =>
			entry.file.endsWith('beta-test-checklists/+page.svelte')
		);
		expect(
			suspect.length,
			'у сторінки чеклиста мусить бути рівно один <svelte:head>; ' +
				'більше означає, що фільтр коментарів перестав працювати'
		).toBe(1);
		// Ознака захвату — послідовність `*/`, тобто кінець докблоку: у
		// справжньому `<svelte:head>` її не буває, а будь-яке над-захоплення
		// коментаря її принесе. Шукати `<meta>` тут було б неправильно: канарка
		// червоніла б разом зі справжнім порушенням і казала б про нього неправду.
		expect(
			suspect[0].body,
			'у цей <svelte:head> потрапив кінець докблоку — ліниве [\\s\\S]*? знову зачепилося за коментар'
		).not.toContain('*/');
	});

	it('перевірка жива: оболонка несе мета-теги, а `<svelte:head>` у проєкті є', () => {
		expect(shellMeta().size, `в ${APP_HTML} не знайдено жодного <meta> — розбір застарів`).toBeGreaterThan(
			5
		);
		expect(
			heads().length,
			'жодного <svelte:head> — перевірка нижче була б порожньою, і про це треба знати'
		).toBeGreaterThan(0);
	});

	it('`<svelte:head>` не додає мета-тег, який уже є в оболонці', () => {
		const owned = shellMeta();
		const conflicts: string[] = [];
		for (const { file, body } of heads()) {
			for (const match of body.matchAll(/<meta[^>]+(?:name|property)="([^"]+)"/g)) {
				if (owned.has(match[1])) conflicts.push(`${file}: <meta … "${match[1]}">`);
			}
		}
		expect(
			conflicts,
			'`<svelte:head>` дописує, а не заміщує: у документі опиниться ДВА теги з тим самим ' +
				`іменем, і який візьме краулер — не вирішує ніхто. Правити наявний в app.html:\n${conflicts.join('\n')}`
		).toEqual([]);
	});

	it('в оболонці немає двох тегів з тим самим іменем', () => {
		const html = readFileSync(APP_HTML, 'utf8');
		const seen = new Map<string, number>();
		for (const match of html.matchAll(/<meta[^>]+(?:name|property)="([^"]+)"/g)) {
			seen.set(match[1], (seen.get(match[1]) ?? 0) + 1);
		}
		const duplicates = [...seen].filter(([, count]) => count > 1).map(([name]) => name);
		expect(duplicates, `дубль у самому app.html:\n${duplicates.join('\n')}`).toEqual([]);
	});
});
