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
	'src/lib/components/ErrorBoundary.svelte'
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

	it('назва для читалки й підказка не зашиті в розмітку', () => {
		const hits = findLiteralNames(svelteFiles(ROOT));
		const report = hits.map((h) => `${h.file}:${h.line} → ${h.text}`);
		expect(
			report,
			'доступна назва лишиться однією мовою для всіх чотирьох; читалка прочитає саме її'
		).toEqual([]);
	});
});
