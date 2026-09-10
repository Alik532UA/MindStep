// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { defaultGameSettings } from '$lib/stores/gameSettingsDefaults';

/**
 * Гарячі клавіші: інваріанти по джерелах (HOTKEYS-v8, `GATE-HOTKEYS`).
 *
 * ## Що вже перевірялося і чого бракувало
 *
 * `services/keyboard.spec.ts` доводить, що ЗАХИСТИ працюють: `isTypingTarget`
 * бачить `contenteditable`, `isPlainKey` відкидає `Ctrl`, `acceptsShortcut`
 * пропускає `Escape` з поля. Але жодна перевірка не казала, що ці захисти
 * КЛИЧУТЬ. Обробник на вікні, написаний повз них, проходив усі гейти проєкту —
 * і саме так тут уже було: у `BaseModal` стояло `e.key === 'Escape'` без
 * перевірки модифікаторів, тож `Ctrl+Escape` (виклик меню «Пуск» у Windows)
 * закривав ще й вікно.
 *
 * Це той самий клас, що й дублювання префікса сховища: два місця, які МУСЯТЬ
 * бути однакові, розходяться саме тоді, коли одне з них правлять.
 *
 * ## Межа перевірки названа
 *
 * Дивиться лише на слухачів РІВНЯ ВІКНА Й ДОКУМЕНТА. Обробник на конкретному
 * елементі (`<button onkeydown=…>`) під правило не підпадає: він спрацьовує
 * лише коли фокус на самому елементі, тобто набір тексту командою стати не
 * може.
 */

const ROOT = 'src';

/**
 * Імпорт модуля захистів — за ФОРМОЮ ІМПОРТУ, а не за підрядком з аліасом.
 *
 * Перший варіант цієї перевірки шукав рядок `$lib/services/keyboard` і одразу ж
 * оголосив порушником `services/hotkeyService.ts` — єдиний файл проєкту, який
 * ці захисти й кличе. Він імпортує сусіда відносним шляхом (`./keyboard`), як і
 * має, бо лежить у тому самому каталозі. Тобто перевірка червоніла саме на
 * правильному коді — а такий гейт довго не живе (CODE-QUALITY-v8 § 6.4.1).
 */
const KEYBOARD_IMPORT = /from\s+['"](?:\$lib\/services\/keyboard|(?:\.{1,2}\/)+(?:services\/)?keyboard)['"]/;

function walk(dir: string, out: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).split('\\').join('/');
		if (statSync(full).isDirectory()) walk(full, out);
		else if (/\.(ts|svelte)$/.test(full) && !/\.spec\.ts$|\.test\.ts$/.test(full)) out.push(full);
	}
	return out;
}

/** Слухач keydown на вікні або документі — саме там набір тексту стає командою. */
const GLOBAL_KEYDOWN =
	/(window|document)\.addEventListener\(\s*['"`]keydown['"`]|<svelte:window[^>]*onkeydown/;

/**
 * Файли, які слухають клавіатуру глобально й НЕ кличуть `services/keyboard`.
 * Перелік іменований і кінцевий: кожен рядок несе причину.
 */
const KNOWN_GLOBAL_LISTENERS: Record<string, string> = {
	/*
	 * Пастка фокуса: реагує ЛИШЕ на `Tab` і нічого не виконує — переставляє
	 * фокус усередині відкритого діалогу. `Tab` не літера, розкладка на нього
	 * не впливає, і захист полів вводу тут був би шкідливий: пастка існує саме
	 * щоб тримати фокус, зокрема на полях усередині вікна.
	 */
	'src/lib/actions/trapFocus.ts': 'реагує лише на Tab і не виконує команд',
	/*
	 * Вкладка перепризначення клавіш: слухає, ЩОБ ЗАПАМʼЯТАТИ натиснуте. Захист
	 * полів вводу тут скасував би саму функцію — людина натискає клавішу навмисно
	 * й саме в цей момент. Читає `event.code`, як і решта проєкту, і діє лише
	 * коли `listeningFor` виставлено кліком.
	 */
	'src/lib/components/settings/HotkeysTab.svelte':
		'режим захоплення клавіші для перепризначення'
};

const files = walk(ROOT);
const globalListeners = files.filter((f) => GLOBAL_KEYDOWN.test(readFileSync(f, 'utf8')));

describe('перевірка жива', () => {
	it('глобальні слухачі клавіатури в проєкті знайдено', () => {
		expect(
			globalListeners.length,
			'жодного слухача keydown на вікні — регулярка зламалася, і гейт зелений ні на чому'
		).toBeGreaterThan(2);
	});

	it('перелік винятків не з’їв усі знахідки', () => {
		const guarded = globalListeners.filter((f) => !(f in KNOWN_GLOBAL_LISTENERS));
		expect(
			guarded.length,
			'усі слухачі потрапили у винятки — перевіряти нічого, гейт нічого не доводить'
		).toBeGreaterThan(0);
	});
});

describe('обробники клавіатури мають захисти (HOTKEYS-v8 § 2)', () => {
	it('кожен слухач рівня вікна кличе services/keyboard або названий винятком', () => {
		const bare = globalListeners
			.filter((file) => !(file in KNOWN_GLOBAL_LISTENERS))
			.filter((file) => !KEYBOARD_IMPORT.test(readFileSync(file, 'utf8')))
			.map((file) => `${file}: слухає keydown на вікні повз acceptsShortcut/isTypingTarget`);

		expect(
			bare,
			'обробник без захисту полів вводу перетворює набір тексту на команди, ' +
				'а без перевірки модифікаторів забирає системні комбінації ' +
				`(Ctrl+T, Ctrl+R, Ctrl+Escape дають той самий code):\n${bare.join('\n')}`
		).toEqual([]);
	});

	it('перелік винятків не містить файлів, яких уже немає', () => {
		const stale = Object.keys(KNOWN_GLOBAL_LISTENERS).filter(
			(file) => !globalListeners.includes(file)
		);
		expect(
			stale,
			`виняток пережив свою причину — файл більше не слухає keydown:\n${stale.join('\n')}`
		).toEqual([]);
	});
});

/**
 * Службові жести (HOTKEYS-v8 § 4, `HK-SERVICE-GESTURES`).
 *
 * `V` (табло версії) і `R` (аварійне скидання) — серії натискань, однакові в
 * усіх проєктах автора. Звичайна дія на тій самій літері означає, що жест або
 * не спрацює, або спрацює РАЗОМ із дією: у випадку `R` це стирання локальних
 * даних поруч зі звичайним натисканням.
 *
 * Причина, чому звук саме на `M`, а не на `V`, уже записана в
 * `gameSettingsDefaults.ts`. Тут вона стає перевіркою.
 */
describe('V і R лишаються під службові жести (HOTKEYS-v8 § 4)', () => {
	const RESERVED = ['KeyV', 'KeyR'];
	const bindings = Object.entries(defaultGameSettings.keybindings) as [string, string[]][];

	it('перевірка жива: типові призначення прочитано', () => {
		expect(bindings.length, 'мапа призначень порожня — порівнювати нема з чим').toBeGreaterThan(
			10
		);
	});

	it('жодна звичайна дія не займає V або R', () => {
		const taken = bindings
			.filter(([, keys]) => keys.some((k) => RESERVED.includes(k)))
			.map(([action, keys]) => `${action}: ${keys.filter((k) => RESERVED.includes(k)).join(', ')}`);
		expect(
			taken,
			`V — табло версії, R — аварійне скидання; звичайна дія на них ламає жест:\n${taken.join('\n')}`
		).toEqual([]);
	});
});

/**
 * Скорочення читаються з `event.code` (HOTKEYS-v8 § 2, `HK-EVENT-CODE`, HIGH).
 *
 * `event.key` віддає символ ПІСЛЯ розкладки: на українській `KeyT` дає `є`, і
 * скорочення теми зникає рівно для тих людей, які тримають систему не
 * англійською. Тобто дефект вибірковий і невидимий тому, хто його писав.
 *
 * Перевіряється сама мапа призначень: значення виду `KeyT`, `Digit1`,
 * `Numpad5`, `Escape` — це `code`; значення виду `t` або `T` — це `key`, і
 * перше ж таке в мапі означає, що десь у коді порівнюють не те.
 */
describe('призначення записані як KeyboardEvent.code (HK-EVENT-CODE)', () => {
	/** Форми `code`, які справді трапляються в цьому проєкті. */
	const CODE_SHAPED =
		/^(Key[A-Z]|Digit\d|Numpad[A-Za-z0-9]+|Arrow(Up|Down|Left|Right)|F\d{1,2}$|Escape$|Enter$|Space$|Tab$|Backspace$|Minus$|Equal$|Comma$|Period$|Slash$|Backslash$|Semicolon$|Quote$|Bracket(Left|Right)$|Backquote$)/;

	const all = Object.entries(defaultGameSettings.keybindings).flatMap(([action, keys]) =>
		(keys as string[]).map((key) => ({ action, key }))
	);

	it('перевірка жива: призначення в мапі є', () => {
		expect(all.length, 'у мапі немає жодної клавіші — перевіряти нема що').toBeGreaterThan(20);
	});

	it('регулярка справді відрізняє code від key', () => {
		expect(CODE_SHAPED.test('KeyT')).toBe(true);
		expect(CODE_SHAPED.test('Numpad5')).toBe(true);
		expect(CODE_SHAPED.test('t'), 'символ розкладки прийнято за code').toBe(false);
		expect(CODE_SHAPED.test('T'), 'символ розкладки прийнято за code').toBe(false);
		expect(CODE_SHAPED.test('є'), 'символ розкладки прийнято за code').toBe(false);
	});

	it('жодне призначення не записане символом розкладки', () => {
		const bad = all
			.filter(({ key }) => !CODE_SHAPED.test(key))
			.map(({ action, key }) => `${action}: «${key}»`);
		expect(
			bad,
			'на нелатинській розкладці event.key віддає інший символ, ' +
				`і скорочення зникає саме для тих, хто не тримає систему англійською:\n${bad.join('\n')}`
		).toEqual([]);
	});
});


/**
 * ГЛОБАЛЬНА ОДИНОЧНА ЛІТЕРА НАЗВАНА В ЗАПИСІ ПРО WCAG SC 2.1.4
 * (HOTKEYS-v9 `HK-WCAG-CHARACTER-KEY` CRITICAL, `HK-CANONICAL-MAP`,
 * `HK-LANGUAGE-KEY`, `HK-HANDLER-GUARDS`, `HK-DISCOVERABILITY`).
 *
 * ## Чому це окрема перевірка
 *
 * Пʼять правил `HK-*` мають у полі `checkedBy` не лише гейт, а й «запис у
 * PROJECT-CONTEXT.md для SC 2.1.4». Запису не було зовсім: обраний шлях жив
 * коментарями у двох файлах, і ці коментарі казали «шлях 2 — перепризначення»
 * про РІЗНІ набори клавіш. Для ігрових це правда (`/controls` дає змінити
 * будь-яку), для глобальних `T` і `L` — ні: вони зашиті в `+layout.svelte`, і
 * їх не можна ні вимкнути, ні перепризначити.
 *
 * Тобто документ стверджував відповідність критерію рівня A, якої частково
 * немає, — і жодна перевірка цього не бачила. Рівно клас `PIT-DOC-FACTS`.
 *
 * ## Що саме тут звіряється
 *
 * Не «критерій виконано» — цього статично не довести. Звіряється ПЕРЕЛІК:
 * кожна одиночна літера, зареєстрована в контексті `global` (тобто активна на
 * кожному екрані), названа в записі. Нова глобальна літера без рядка валить
 * прогін; рядок про літеру, якої в коді вже немає, валить його з другого боку.
 *
 * Саме `global`: у контексті `game` клавіші приходять із реєстру `keybindings`,
 * тобто перепризначаються за побудовою, і перелічувати їх тут означало б
 * дублювати `gameSettingsDefaults.ts`.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1) — прогнано
 *
 * Додати `hotkeyService.register("global", "KeyG", …)` у `+layout.svelte` —
 * перевірка червоніє й називає літеру. Прибрати `KeyL` із таблиці в
 * `PROJECT-CONTEXT.md` — червоніє з другого боку.
 */
describe('WCAG SC 2.1.4: глобальні літери названі в записі (HK-WCAG-CHARACTER-KEY)', () => {
	const RECORD = 'PROJECT-CONTEXT.md';
	const SECTION = 'WCAG SC 2.1.4';

	/** `hotkeyService.register("global", "KeyT", …)` — саме глобальний контекст. */
	const GLOBAL_REGISTER = /hotkeyService\.register\(\s*["'`]global["'`]\s*,\s*["'`](Key[A-Z])["'`]/g;

	/**
	 * Коментарі відрізаються перед пошуком — інакше перевірка рахує ЗГАДКУ про
	 * реєстрацію за реєстрацію. Спіймано першим же прогоном: у
	 * `TopRowWidget.svelte` лежить закоментований
	 * `// hotkeyService.register("global", "KeyI", …)`, і `KeyI` виявився
	 * «глобальною літерою», якої в застосунку немає. Той самий клас, що вже
	 * ловився в `test-runners.test.ts`, `ci.test.ts` і `testid-conventions.spec.ts`.
	 */
	const withoutComments = (source: string) =>
		source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

	function registeredGlobalLetters(): string[] {
		const found = new Set<string>();
		for (const file of files) {
			for (const match of withoutComments(readFileSync(file, 'utf8')).matchAll(GLOBAL_REGISTER)) {
				found.add(match[1]);
			}
		}
		return [...found].sort();
	}

	const record = readFileSync(RECORD, 'utf8');
	const section = record.slice(record.indexOf(SECTION));
	/*
	 * Перелік читається з ОДНОГО місця, а не з усього розділу: у таблиці поруч
	 * названі й ігрові клавіші (`KeyM`, `KeyI`), і без цієї межі перевірка
	 * оголосила б їх глобальними, яких у контексті `global` немає.
	 */
	const MARKER = '**Глобальні одиночні літери';
	const listLine = section.includes(MARKER)
		? section.slice(section.indexOf(MARKER)).split('\n').slice(0, 2).join(' ')
		: '';

	it('закоментована реєстрація не рахується за реєстрацію', () => {
		const commented = '// hotkeyService.register("global", "KeyI", show);';
		expect([...withoutComments(commented).matchAll(GLOBAL_REGISTER)]).toEqual([]);
		const live = 'hotkeyService.register("global", "KeyI", show);';
		expect([...withoutComments(live).matchAll(GLOBAL_REGISTER)].map((m) => m[1])).toEqual([
			'KeyI'
		]);
	});

	it('перевірка жива: запис існує, і глобальні літери в коді знайдено', () => {
		expect(
			record.includes(SECTION),
			`у ${RECORD} немає розділу «${SECTION}» — пʼять правил HK-* вимагають саме його`
		).toBe(true);
		expect(
			registeredGlobalLetters().length,
			'жодної глобальної літери в коді — перевірка нижче нічого не стереже'
		).toBeGreaterThan(0);
	});

	it('кожна глобальна літера названа в записі', () => {
		const missing = registeredGlobalLetters().filter((key) => !listLine.includes(key));
		expect(
			missing,
			`нова глобальна літера без рядка в «${SECTION}»: критерій рівня A вимагає ` +
				'назвати обраний шлях (вимкнути / перепризначити / лише у фокусі)\n' +
				missing.join('\n')
		).toEqual([]);
	});

	it('запис не застарів: кожна названа літера ще реєструється', () => {
		const registered = new Set(registeredGlobalLetters());
		const named = [...new Set([...listLine.matchAll(/`(Key[A-Z])`/g)].map((m) => m[1]))];
		const stale = named.filter((key) => !registered.has(key));
		expect(
			stale,
			`у «${SECTION}» названа літера, якої в коді вже немає — запис про борг, ` +
				'якого немає, читається як наявний:\n' +
				stale.join('\n')
		).toEqual([]);
	});
});
