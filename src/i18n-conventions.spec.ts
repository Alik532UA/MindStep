// @vitest-environment node
// Перевірка читає тільки текст компонентів.
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * I18N-v8 § 2 — user-facing текст живе у словнику, а не в розмітці.
 *
 * Застосунок говорить чотирма мовами (`uk`, `en`, `nl`, `crh`). Рядок,
 * вписаний прямо в шаблон, лишається українським у всіх чотирьох — і
 * непомітно: сторінка малюється, тести проходять, `svelte-check` мовчить.
 * Побачити це можна лише перемкнувши мову й придивившись саме до цього
 * місця, тобто практично ніколи.
 *
 * Що перевіряється: **текстові вузли** шаблону (`>текст<`) з кириличними
 * літерами. Саме вузли, а не будь-яка кирилиця у файлі: коментарі, назви
 * тем логування й повідомлення для розробника у `logService` — це не текст
 * для гравця, і вимагати від них словника означало б боротися з мовою, якою
 * тут пишуть коментарі.
 *
 * **Латиниця не перевіряється навмисно.** Відрізнити `Score` від `flex-start`
 * без розбору розмітки неможливо, а перевірка з хибними спрацюваннями
 * закінчується вимкненою перевіркою (CODE-QUALITY-v8 § 6.4.1). Кирилиця дає
 * нульовий шум і покриває той випадок, який тут справді трапляється: текст
 * набирають українською.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): вписати
 * `<h2>Досягнення</h2>` у будь-який компонент — перевірка червоніє з назвою
 * файлу, рядком і самим текстом.
 */

const ROOT = 'src';

/**
 * Сторінки-майданчики: `routes/test/` існує лише в dev і до гравця не
 * доїжджає. `ErrorBoundary` і `+error.svelte` — свідоме виключення: їх видно
 * саме тоді, коли застосунок уже зламався, і тягнути в цей момент словник
 * означало б, що екран помилки залежить від підсистеми, яка сама могла впасти.
 */
const SKIP = [
	'src/routes/test/',
	'src/routes/test-error/',
	'src/routes/+error.svelte',
	'src/lib/components/ErrorBoundary.svelte',
	/*
	 * Табло діагностики — той самий клас виключення, що й екран помилки, і воно
	 * заміряне, а не припущене. `LogCopyButton` стоїть у layout ПОЗА
	 * `ErrorBoundary` навмисно (перехоплювач при падінні заміняє дітей своєю
	 * сторінкою, тобто прибрав би табло рівно тоді, коли звіт найпотрібніший) і
	 * показує себе сам — у `dev`, за `?debug=1` і за службовим жестом `V`.
	 *
	 * Тобто воно малюється ДО того, як `svelte-i18n` отримає початкову локаль, і
	 * перший `$t` там кидає «Cannot format a message without first setting the
	 * initial locale» — без перехоплювача це біла сторінка. Прогнано 2026-09-02:
	 * переклад цієї назви поклав застосунок цілком, e2e впав із «top-language-btn
	 * не існує». Той самий симптом уже описаний у `+layout.svelte` для
	 * `NetworkMonitorWidget`.
	 *
	 * Кнопка, яка мусить працювати, коли не працює решта, не має залежати від
	 * підсистеми, яка сама могла не піднятися.
	 */
	'src/lib/components/widgets/LogCopyButton.svelte'
];

const CYRILLIC = /[Ѐ-ӿ]/;

function svelteFiles(dir: string, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) svelteFiles(full, acc);
		else if (full.endsWith('.svelte')) acc.push(full);
	}
	return acc;
}

/** Текстові вузли шаблону: те, що між `>` і `<` без вкладених тегів і виразів. */
const TEXT_NODE = />[\t ]*([^<>{}]*?)[\t ]*</g;

interface Hit {
	file: string;
	line: number;
	text: string;
}

function findHardcoded(files: string[]): Hit[] {
	const out: Hit[] = [];
	for (const file of files) {
		if (SKIP.some((s) => file.startsWith(s))) continue;
		const src = readFileSync(file, 'utf8');
		// `<script>` і `<style>` — не шаблон: там кирилиця це коментарі й ключі.
		const template = src
			.replace(/<script[\s\S]*?<\/script>/g, (m) => m.replace(/[^\n]/g, ' '))
			.replace(/<style[\s\S]*?<\/style>/g, (m) => m.replace(/[^\n]/g, ' '))
			.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));

		for (const m of template.matchAll(TEXT_NODE)) {
			const text = m[1].trim();
			if (!text || !CYRILLIC.test(text)) continue;
			out.push({
				file,
				line: template.slice(0, m.index).split('\n').length,
				text: text.slice(0, 50)
			});
		}
	}
	return out;
}

describe('перевірка жива', () => {
	it('компоненти знайдено', () => {
		expect(svelteFiles(ROOT).length, 'жодного .svelte — перевірка завжди зелена').toBeGreaterThan(
			50
		);
	});

	it('текстові вузли справді виловлюються', () => {
		// Канарка на розбір: зламаний розбір дає нуль порушень, тобто виглядає
		// як чистий проєкт. Тимчасовий файл не потрібен — перевіряється сама
		// функція на синтетичному вводі.
		const sample = '<h2>Досягнення</h2>';
		expect([...sample.matchAll(TEXT_NODE)].some((m) => CYRILLIC.test(m[1]))).toBe(true);
		const viaKey = '<h2>{$t("rewards.achievementsTitle")}</h2>';
		expect([...viaKey.matchAll(TEXT_NODE)].some((m) => CYRILLIC.test(m[1]))).toBe(false);
	});
});

describe('I18N-v8 § 2', () => {
	it('у шаблонах немає тексту для гравця поза словником', () => {
		const hits = findHardcoded(svelteFiles(ROOT));
		const report = hits.map((h) => `${h.file}:${h.line} → «${h.text}»`);
		expect(report, 'текст у розмітці лишиться українським у всіх чотирьох мовах').toEqual([]);
	});
});

/**
 * Друга половина того самого правила — **доступна назва**.
 *
 * Перевірка вище дивиться текстові вузли, тобто те, що видно очима. Назву для
 * читалки й підказку браузера видно інакше, і саме тому вони роками лишалися
 * поза словником: сторінка малюється правильно, `svelte-check` мовчить, axe
 * бачить, що назва Є, і не питає, якою вона мовою.
 *
 * Заміряно 2026-09-02 (`git ls-tree` по коміту до виправлення): **17 літералів**
 * у цих атрибутах — п'ять українською («Ігрове поле», «Ім'я гравця», «Скинути
 * положення меню»), дванадцять англійською («Previous Step», «Decrease»,
 * «Fixed mode»). Найпоказовіший випадок — `SettingsLayout`: підказка поруч уже
 * йшла через `$t("ui.resetMenuLayout")`, а `aria-label` на тій самій кнопці
 * лишався зашитим українським. Тобто той, хто дивиться, отримував переклад, а
 * той, хто слухає, — ні.
 *
 * Число саме 17, а не 21, як показував перший грубий греп: чотири з них лежать
 * у виключеннях і виключеннями лишаються — два в `ErrorBoundary` (екран помилки
 * навмисно без словника) і два `placeholder=" "` у формах входу (пробіл тримає
 * плаваючий підпис і назвою не є).
 *
 * **Тут перевіряється ЛІТЕРАЛ, а не кирилиця.** У текстових вузлах латиниця
 * недоступна для перевірки (`Score` не відрізнити від `flex-start`), але в цих
 * атрибутах значення завжди призначене людині — тож будь-який літерал із
 * літерою є порушенням, і англійські «Decrease» ловляться так само, як
 * українські. Це той рідкий випадок, коли суворіше правило дає МЕНШЕ шуму.
 *
 * Порожнє значення — не порушення: `alt=""` позначає декоративне зображення, а
 * `placeholder=" "` тримає плаваючий підпис у формах входу. Обидва не є назвою.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути
 * `aria-label="Ігрове поле"` в `BoardWrapperWidget` — перевірка червоніє з
 * назвою файлу, рядком і атрибутом. Прогнано: до виправлення вона знайшла всі
 * 17 місць, після — нуль. Канарка на сам розбір стоїть окремо, бо саме тут
 * зламана регулярка дала б зелений нуль (§ 1).
 */
const NAMING_ATTRIBUTES = [
	'aria-label',
	'aria-description',
	'aria-roledescription',
	'aria-valuetext',
	'aria-placeholder',
	'placeholder',
	'title',
	'alt'
];

/**
 * `(?<![\w-])` — щоб `data-title="…"` і `aria-labelledby="…"` не читалися як
 * `title` і `aria-label`. Значення береться лише в лапках: `={…}` — це вираз,
 * і саме він тут правильна форма.
 */
const LITERAL_ATTRIBUTE = new RegExp(
	`(?<![\\w-])(${NAMING_ATTRIBUTES.join('|')})="([^"]*)"`,
	'g'
);

/**
 * Значення в лапках може містити ПІДСТАВЛЕННЯ: `aria-label="{$t('x')} {n}"` —
 * законна форма Svelte, і в ній зашитого тексту немає. Тому вирази вирізаються,
 * а перевіряється лишок: `"Save {name}"` після вирізання дає `Save`, тобто
 * половину назви, яка не перекладеться, — і це порушення так само, як цілий
 * літерал. Перша версія перевірки цього не робила й дала одне хибне
 * спрацювання на `DistanceSelector`; хибне спрацювання — найкоротший шлях до
 * вимкненої перевірки (CODE-QUALITY-v8 § 6.4.1).
 */
const withoutExpressions = (value: string): string => value.replace(/\{[^}]*\}/g, '');

const HAS_LETTER = /\p{L}/u;
const isHardcoded = (value: string): boolean => HAS_LETTER.test(withoutExpressions(value));

/**
 * Третій різновид того самого дефекту — літерал ВСЕРЕДИНІ виразу:
 *
 *     aria-label={isOpen ? "Згорнути меню" : "Розгорнути меню"}
 *
 * Формально це вираз, тобто перевірка літералів вище його не бачить, — а
 * результат той самий: назва однією мовою для всіх чотирьох. Саме так це й
 * знайшлося: `MenuToggleTrigger` пройшов повз перший гейт і був виявлений лише
 * прогоном у браузері.
 *
 * Розбір: із виразу спершу вирізаються виклики `$t(...)` (їхній аргумент — ключ,
 * а не текст), і те, що лишилося в лапках і містить літеру, — зашитий текст.
 * Ключ на кшталт `"ui.collapseMenu"` після вирізання `$t(...)` не лишається,
 * тож хибних спрацювань на правильній формі немає.
 *
 * ВИРАЗ БЕРЕТЬСЯ ЗІ ЗВІРКОЮ ДУЖОК, а не регуляркою `\{[^}]*\}`. Перша версія
 * робила саме так і дала три хибні спрацювання на єдиній формі:
 * `$t("localGame.pickColor", { color })` містить `}` усередині, тож вираз
 * обрізався на ньому, виклик `$t` ставав неповним і його ключ читався як
 * зашитий текст. Це той самий клас, що вже ловився в `a11y-conventions.spec.ts`:
 * `[^>]*` зупиняється на першому `>`, а в атрибутах Svelte він трапляється
 * постійно.
 */
const EXPRESSION_START = new RegExp(`(?<![\\w-])(${NAMING_ATTRIBUTES.join('|')})=\\{`, 'g');

/** Вміст `{…}`, що починається на `from` (індексі відкривної дужки), зі звіркою дужок. */
function balanced(text: string, from: number): { body: string; end: number } | null {
	let depth = 0;
	for (let i = from; i < text.length; i += 1) {
		if (text[i] === '{') depth += 1;
		else if (text[i] === '}') {
			depth -= 1;
			if (depth === 0) return { body: text.slice(from + 1, i), end: i };
		}
	}
	return null;
}

/**
 * У шаблонному рядку `${…}` — це КОД, а не текст: `` `${a} — ${nameOf(s)}` ``
 * не містить жодного зашитого слова. Без цього кроку перевірка давала три хибні
 * спрацювання на `ThemePicker`, приймаючи `nameOf(style)` за текст.
 */
const withoutInterpolation = (value: string): string => value.replace(/\$\{[^}]*\}/g, '');

const literalsInExpression = (expression: string): string[] =>
	[
		...expression
			.replace(/\$?t\(\s*(['"`])[^'"`]*\1[\s\S]*?\)/g, '')
			.matchAll(/(['"`])([^'"`]*)\1/g)
	]
		.map((m) => (m[1] === '`' ? withoutInterpolation(m[2]) : m[2]))
		.filter((value) => HAS_LETTER.test(value));

function findLiteralNames(files: string[]): Hit[] {
	const out: Hit[] = [];
	for (const file of files) {
		if (SKIP.some((s) => file.startsWith(s))) continue;
		const src = readFileSync(file, 'utf8');
		const template = src
			.replace(/<script[\s\S]*?<\/script>/g, (m) => m.replace(/[^\n]/g, ' '))
			.replace(/<style[\s\S]*?<\/style>/g, (m) => m.replace(/[^\n]/g, ' '))
			.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));

		for (const m of template.matchAll(LITERAL_ATTRIBUTE)) {
			if (!isHardcoded(m[2])) continue;
			out.push({
				file,
				line: template.slice(0, m.index).split('\n').length,
				text: `${m[1]}="${m[2].slice(0, 40)}"`
			});
		}

		for (const m of template.matchAll(EXPRESSION_START)) {
			const expression = balanced(template, m.index + m[0].length - 1);
			if (!expression) continue;
			for (const literal of literalsInExpression(expression.body)) {
				out.push({
					file,
					line: template.slice(0, m.index).split('\n').length,
					text: `${m[1]}={… «${literal.slice(0, 40)}» …}`
				});
			}
		}
	}
	return out;
}

describe('I18N-v8 § 2 — доступна назва теж із словника', () => {
	it('розбір атрибутів справді працює', () => {
		const bad = '<div aria-label="Ігрове поле" data-title="ignored">';
		const found = [...bad.matchAll(LITERAL_ATTRIBUTE)].filter((m) => isHardcoded(m[2]));
		expect(found.map((m) => m[1]), 'літерал не знайдено або зачеплено data-title').toEqual([
			'aria-label'
		]);

		const good = '<div aria-label={$t("gameBoard.boardLabel")} alt="" placeholder=" ">';
		expect(
			[...good.matchAll(LITERAL_ATTRIBUTE)].filter((m) => isHardcoded(m[2])).length,
			'вираз, порожній alt або пробіл у placeholder — не порушення'
		).toBe(0);
	});

	it('літерал усередині виразу теж видно', () => {
		const literals = (markup: string): string[] =>
			[...markup.matchAll(EXPRESSION_START)].flatMap((m) => {
				const expression = balanced(markup, m.index + m[0].length - 1);
				return expression ? literalsInExpression(expression.body) : [];
			});

		expect(
			literals('<button aria-label={isOpen ? "Згорнути меню" : "Розгорнути меню"}>'),
			'зашитий текст у тернарнику не знайдено'
		).toEqual(['Згорнути меню', 'Розгорнути меню']);

		expect(
			literals(
				'<button aria-label={isOpen ? $t("ui.collapseMenu") : $t(\'ui.expandMenu\')} title={item.label ?? item.tooltip}>'
			),
			'ключ у $t(…) і звернення до поля — не зашитий текст'
		).toEqual([]);

		// Канарка на звірку дужок: `{ color }` усередині виклику обрізав вираз і
		// перетворював ключ на «зашитий текст» (три хибні спрацювання).
		expect(
			literals('<button aria-label={$t("localGame.pickColor", { color })}>'),
			'вираз обрізано на внутрішній дужці — ключ прочитався як текст'
		).toEqual([]);
	});

	it('назва для читалки й підказка не зашиті в розмітку', () => {
		const hits = findLiteralNames(svelteFiles(ROOT));
		const report = hits.map((h) => `${h.file}:${h.line} → ${h.text}`);
		expect(
			report,
			'доступна назва лишиться однією мовою для всіх чотирьох; читалка прочитає саме її'
		).toEqual([]);
	});
});
