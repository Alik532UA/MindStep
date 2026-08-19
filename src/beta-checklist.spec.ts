// @vitest-environment node
// Перевірка читає джерела — DOM їй не потрібен.
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { BETA_CHECKS, BETA_TABS, BETA_UNCOVERED_ROUTES } from '$lib/beta/betaChecklist.data';
import { COVERAGE_ORDER, type BetaCheck } from '$lib/beta/betaChecklist.types';
import { sortChecks } from '$lib/beta/betaChecklist';

/**
 * Інваріанти чеклиста бета-тестування (BETA-CHECKLIST-v8 § 5).
 *
 * **Навіщо вони, якщо чеклист щойно написаний.** Найдорожча пастка чеклистів —
 * не помилка в пункті, а ВІДСТАВАННЯ: код змінився, пункт лишився, і людина
 * ставить «перевірено» на тому, чого вже немає. Попередній чеклист цього
 * проєкту лежав Markdown-файлом сім місяців і встиг набути обох симптомів —
 * посилання на маршрут `/game/vs-computer`, якого не існує, і 44 галочки без
 * жодної позначки версії. Правило в документі помічає таке тоді, коли документ
 * хтось перечитає; інваріант — на кожному прогоні.
 *
 * Половину роботи тут робить ТИП (`betaChecklist.types.ts`): пункт без
 * англійського тексту або `covered` без назви тесту не збереться взагалі. Нижче
 * — те, чого тип не бачить.
 */

const ROUTES_DIR = 'src/routes';

/** Маршрути з дерева файлів — джерело, яке не можна забути поповнити. */
function realRoutes(dir = ROUTES_DIR, prefix = ''): string[] {
	const out: string[] = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			out.push(...realRoutes(full, `${prefix}/${entry}`));
		} else if (entry === '+page.svelte') {
			out.push(prefix === '' ? '/' : prefix);
		}
	}
	return out;
}

/**
 * Локатори так, як їх збирає браузер, а не як вони лежать у рядках.
 *
 * У SvelteKit локатор буває складений із двох файлів: `dataTestId="faq-modal"`
 * в одному, `data-testid="{dataTestId}-title"` — в іншому; рядка
 * `faq-modal-title` немає ніде. Без розкриття шаблонів перевірка бракувала б
 * правильні назви, і єдиним способом її «полагодити» було б послаблення, тобто
 * знищення (§ 5.3).
 */
function collectLocators(): { literals: Set<string>; patterns: RegExp[] } {
	const literals = new Set<string>();
	const patterns: RegExp[] = [];
	/** Значення, які приходять у проп `dataTestId` / `testId`. */
	const propValues = new Set<string>();

	const files: string[] = [];
	const walk = (dir: string) => {
		for (const entry of readdirSync(dir)) {
			const full = join(dir, entry);
			if (statSync(full).isDirectory()) {
				if (['node_modules', '.svelte-kit', 'build'].includes(entry)) continue;
				walk(full);
			} else if (/\.(svelte|ts)$/.test(entry)) files.push(full);
		}
	};
	walk('src');

	for (const file of files) {
		const text = readFileSync(file, 'utf8')
			.replace(/<style[\s\S]*?<\/style>/g, '')
			.replace(/<!--[\s\S]*?-->/g, '');

		// значення пропа: dataTestId="x" | dataTestId={'x'} | dataTestId: 'x'
		for (const m of text.matchAll(
			/\b(?:dataTestId|testId)\s*[:=]\s*(?:\{?\s*["'`]([^"'`]+)["'`]\s*\}?)/g
		)) {
			propValues.add(m[1]);
		}

		for (const m of text.matchAll(
			/data-testid=(?:"([^"]*)"|\{`([^`]*)`\}|\{"([^"]*)"\}|\{'([^']*)'\})/g
		)) {
			const raw = m[1] ?? m[2] ?? m[3] ?? m[4];
			if (!/[{}]/.test(raw)) {
				literals.add(raw);
				continue;
			}
			/*
			 * Шаблон, що ПОЧИНАЄТЬСЯ з пропа, розкривається значеннями цього пропа —
			 * і тільки ними. Спокуса дописати сюди ще й `^.+-btn$` «про запас»
			 * коштувала одного червоного прогону: такий шаблон підходить до будь-чого,
			 * що кінчається на `-btn`, тобто перевірка починає приймати вигадані
			 * назви. Канарка нижче спіймала це одразу — § 5.3 попереджає про рівно
			 * цей крок, і попередження виявилося буквальним.
			 */
			const leading = raw.match(/^\$?\{\s*(?:dataTestId|testId)\s*\}(.*)$/);
			if (leading) {
				for (const value of propValues) literals.add(value + leading[1]);
				continue;
			}
			patterns.push(
				new RegExp('^' + raw.split(/\$?\{[^}]*\}/).map(escapeRe).join('.+') + '$')
			);
		}
	}
	/*
	 * Другий прохід: значення пропа могло зустрітися у файлі, який обходили
	 * ПІСЛЯ компонента з шаблоном. Тут же покривається `data-testid={dataTestId}`
	 * без суфікса — так підписаний `ToggleButton`, і саме на ньому стоїть
	 * `speech-toggle`, який чеклист називає.
	 */
	for (const file of files) {
		const text = readFileSync(file, 'utf8');
		for (const m of text.matchAll(
			/data-testid=(?:\{`\$?\{\s*(?:dataTestId|testId)\s*\}([^`]*)`\}|\{\s*(?:dataTestId|testId)\s*\})/g
		)) {
			const suffix = m[1] ?? '';
			for (const value of propValues) literals.add(value + suffix);
		}
	}
	return { literals, patterns };
}

/**
 * Один обхід дерева на весь файл.
 *
 * Перша редакція кликала `collectLocators()` у трьох перевірках окремо, тобто
 * читала все `src` тричі. Під паралельним прогоном 21 файлу це перевалило за
 * типові 5 c, і перевірка почала падати з таймауту — плаваючий гейт, на який
 * швидко перестають дивитися (CODE-QUALITY-v8 § 6.4.2). Дані за прогін не
 * змінюються, тож обхід має бути один.
 */
const LOCATORS = collectLocators();
const resolvesLocator = (id: string) =>
	LOCATORS.literals.has(id) || LOCATORS.patterns.some((p) => p.test(id));

function escapeRe(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const CYRILLIC = /[Ѐ-ӿ]/;
/** Службові назви, яких у тексті для гравця бути не мусить (§ 2.1). */
const INTERNAL_NAMES =
	/VirtualPlayer|center-info|Test Mode|localStorage|RTDB|Firestore|\$state|\$derived|\.svelte|\.ts\b|data-testid/;
/** Оціночні слова: двоє людей поставлять різні позначки на тому самому екрані. */
const VAGUE = /\b(коректно|адекватно|нормально|правильно|належно|correctly|properly|adequately)\b/i;

const checks = BETA_CHECKS as readonly BetaCheck[];

describe('перевірка жива', () => {
	it('пункти й вкладки знайдено', () => {
		expect(checks.length, 'чеклист порожній — перевіряти нема що').toBeGreaterThan(20);
		expect(BETA_TABS.length).toBeGreaterThan(3);
	});

	it('маршрути читаються з дерева файлів', () => {
		const routes = realRoutes();
		expect(routes, 'не знайдено жодного маршруту — обхід зламався').toContain('/');
		expect(routes.length).toBeGreaterThan(10);
	});

	it('локатори збираються, і вигаданий не проходить', () => {
		expect(
			LOCATORS.literals.size,
			'жодного локатора — регулярка перестала збігатися'
		).toBeGreaterThan(100);
		// Канарка: без неї послаблена перевірка приймала б будь-що й виглядала
		// як доказ (AI-AGENT-PITFALLS-v8 § 1.1).
		expect(resolvesLocator('this-locator-does-not-exist-anywhere-btn')).toBe(false);
	});
});

describe('BETA-CHECKLIST-v8 § 5.1 — маршрути', () => {
	it('кожен маршрут заявлений рівно однією вкладкою', () => {
		const claimed = new Map<string, string[]>();
		for (const tab of BETA_TABS) {
			for (const route of tab.routes) {
				claimed.set(route, [...(claimed.get(route) ?? []), tab.id]);
			}
		}

		const twice = [...claimed.entries()]
			.filter(([, tabs]) => tabs.length > 1)
			.map(([route, tabs]) => `${route} ← ${tabs.join(', ')}`);
		expect(twice, 'маршрут заявлено двома вкладками — незрозуміло, де його перевіряють').toEqual(
			[]
		);

		const uncovered = realRoutes().filter(
			(route) => !claimed.has(route) && !BETA_UNCOVERED_ROUTES.includes(route)
		);
		expect(uncovered, 'сторінка є, а перевіряти її нічим').toEqual([]);
	});

	it('перелік винятків не містить неіснуючих маршрутів', () => {
		// Інакше виняток переживає сторінку, і наступна сторінка з таким шляхом
		// тихо лишиться без перевірок.
		const routes = new Set(realRoutes());
		const stale = BETA_UNCOVERED_ROUTES.filter((r) => !routes.has(r));
		expect(stale, 'виняток для маршруту, якого немає').toEqual([]);
	});

	it('заявлені маршрути справді існують', () => {
		const routes = new Set(realRoutes());
		const ghosts = BETA_TABS.flatMap((tab) =>
			tab.routes.filter((r) => !routes.has(r)).map((r) => `${tab.id} → ${r}`)
		);
		// Саме цей інваріант спіймав би `/game/vs-computer` у старому чеклисті.
		expect(ghosts, 'вкладка заявляє маршрут, якого не існує').toEqual([]);
	});
});

describe('BETA-CHECKLIST-v8 § 5.2 — покриття', () => {
	it('covered називає файл тесту, і файл існує', () => {
		const missing = checks
			.filter((c) => c.coverage === 'covered')
			.filter((c) => !existsSync((c as { test: string }).test))
			.map((c) => `${c.id} → ${(c as { test: string }).test}`);
		expect(missing, 'названий тест не існує — твердження про покриття гниє швидше за чеклист').toEqual(
			[]
		);
	});

	it('manual і testable не називають тесту', () => {
		// Тип це вже забороняє (`test?: never`), але дані можуть прийти з JSON,
		// і тоді типу немає. Перевірка лишається як межа рантайму.
		const wrong = checks
			.filter((c) => c.coverage !== 'covered')
			.filter((c) => 'test' in c && (c as { test?: string }).test)
			.map((c) => `${c.id} (${c.coverage})`);
		expect(wrong, 'непокритий пункт називає тест — одне з двох неправда').toEqual([]);
	});

	it('є пункти всіх трьох рівнів', () => {
		for (const level of COVERAGE_ORDER) {
			expect(
				checks.some((c) => c.coverage === level),
				`рівня ${level} немає жодного — чеклист виродився в один із трьох станів`
			).toBe(true);
		}
	});
});

describe('BETA-CHECKLIST-v8 § 5.3 — «натисніть» вимагає локатора', () => {
	it('пункт, що просить натиснути, називає локатор', () => {
		const naked = checks
			.filter((c) => /натисн/i.test(c.text.uk) || /\bpress\b|\bclick\b/i.test(c.text.en))
			.filter((c) => !c.testid)
			.map((c) => c.id);
		expect(naked, 'неперевірний за побудовою: просить натиснути те, чого не назвати').toEqual([]);
	});

	it('кожен названий локатор існує в розмітці', () => {
		const ghosts = checks
			.filter((c) => c.testid)
			.filter((c) => !resolvesLocator(c.testid as string))
			.map((c) => `${c.id} → ${c.testid}`);
		expect(ghosts, 'локатор із чеклиста не знайдено в жодному компоненті').toEqual([]);
	});
});

describe('BETA-CHECKLIST-v8 § 5.4 — форма пункта', () => {
	const tabIds = new Set(BETA_TABS.map((t) => t.id));

	it('id унікальні', () => {
		const seen = new Set<string>();
		const dupes = checks.filter((c) => (seen.has(c.id) ? true : (seen.add(c.id), false)));
		expect(dupes.map((c) => c.id), 'два пункти з одним id — прогрес людини перезапишеться').toEqual(
			[]
		);
	});

	it('id має форму {вкладка}_{номер}, і вкладка існує', () => {
		const bad = checks
			.filter((c) => {
				const m = c.id.match(/^([a-z]+)_(\d+)$/);
				return !m || !tabIds.has(m[1]);
			})
			.map((c) => c.id);
		expect(bad, 'id не розбирається на вкладку й номер').toEqual([]);
	});

	it('тексти й категорії непорожні двома мовами', () => {
		const bad: string[] = [];
		for (const c of checks) {
			for (const [field, value] of [
				['text.uk', c.text.uk],
				['text.en', c.text.en],
				['category.uk', c.category.uk],
				['category.en', c.category.en]
			] as const) {
				if (value.trim().length < 3) bad.push(`${c.id} → ${field}`);
			}
		}
		expect(bad, 'порожнє поле').toEqual([]);
	});

	it('в англійському тексті немає кирилиці, в українському вона є', () => {
		// Забутий переклад тип не бачить: скопійований український рядок — теж
		// рядок, і `Localized` його приймає.
		const notTranslated = checks
			.filter((c) => CYRILLIC.test(c.text.en) || CYRILLIC.test(c.category.en))
			.map((c) => c.id);
		expect(notTranslated, 'англійський текст містить кирилицю — переклад забули').toEqual([]);

		const notUkrainian = checks
			.filter((c) => !CYRILLIC.test(c.text.uk))
			.map((c) => c.id);
		expect(notUkrainian, 'український текст без кирилиці — переклали не туди').toEqual([]);
	});

	it('у кожної вкладки є пункт manual', () => {
		const barren = BETA_TABS.filter(
			(tab) => !checks.some((c) => c.id.startsWith(`${tab.id}_`) && c.coverage === 'manual')
		).map((t) => t.id);
		// Вкладка, де все покрито машиною, марнує час людини.
		expect(barren, 'вкладка без жодного пункта для людини').toEqual([]);
	});

	it('у кожної вкладки є пункт-межа', () => {
		const barren = BETA_TABS.filter(
			(tab) => !checks.some((c) => c.id.startsWith(`${tab.id}_`) && c.negative)
		).map((t) => t.id);
		// Ліміт, що перестав діяти, виглядає точно так само, як ліміт, що діє.
		expect(barren, 'вкладка без перевірки «не мусить»').toEqual([]);
	});

	it('пункт-межа справді формулює заборону', () => {
		const soft = checks
			.filter((c) => c.negative)
			.filter((c) => !/НЕ мусить|НЕ мусить|must NOT/.test(`${c.text.uk} ${c.text.en}`))
			.map((c) => c.id);
		expect(soft, 'позначено як межу, але заборони в тексті немає').toEqual([]);
	});

	it('текст не починається з номера', () => {
		// Вписаний номер розійдеться з позицією на першій же вставці.
		const numbered = checks
			.filter((c) => /^\s*\d+[.)]/.test(c.text.uk) || /^\s*\d+[.)]/.test(c.text.en))
			.map((c) => c.id);
		expect(numbered, 'номер вписано в текст — його малює сторінка з позиції').toEqual([]);
	});

	it('у тексті немає службових назв', () => {
		const leaked = checks
			.filter((c) => INTERNAL_NAMES.test(`${c.text.uk} ${c.text.en}`))
			.map((c) => `${c.id}: ${(`${c.text.uk} ${c.text.en}`.match(INTERNAL_NAMES) ?? [''])[0]}`);
		expect(leaked, 'людина, яка згодилася потикати сайт, цих назв не знає').toEqual([]);
	});

	it('у тексті немає оціночних слів', () => {
		const vague = checks
			.filter((c) => VAGUE.test(`${c.text.uk} ${c.text.en}`))
			.map((c) => `${c.id}: ${(`${c.text.uk} ${c.text.en}`.match(VAGUE) ?? [''])[0]}`);
		expect(vague, 'двоє людей поставлять різні позначки на тому самому екрані').toEqual([]);
	});

	it('в українському тексті один вид апострофа', () => {
		// Два різні апострофи ламають пошук по чеклисту — а шукати доводиться
		// щоразу, коли зі звіту треба знайти пункт за словом.
		const straight = checks.filter((c) => c.text.uk.includes("'")).map((c) => c.id);
		expect(straight, "апостроф U+0027 замість ’ (U+2019)").toEqual([]);
	});
});

describe('BETA-CHECKLIST-v8 § 3 — порядок показу', () => {
	it('сортування дає manual → testable → covered', () => {
		const levels = sortChecks(checks).map((c) => c.coverage);
		const firstIndex = COVERAGE_ORDER.map((l) => levels.indexOf(l)).filter((i) => i >= 0);
		expect(
			[...firstIndex].sort((a, b) => a - b),
			'рівні перемішані — людина витрачається не там, де машини немає'
		).toEqual(firstIndex);
	});

	it('усередині рівня зберігається порядок оголошення', () => {
		// Порядок тематичний: перемішавши його, розділи розсипаються.
		for (const level of COVERAGE_ORDER) {
			const declared = checks.filter((c) => c.coverage === level).map((c) => c.id);
			const sorted = sortChecks(checks)
				.filter((c) => c.coverage === level)
				.map((c) => c.id);
			expect(sorted, `рівень ${level} переставлено`).toEqual(declared);
		}
	});

	it('сортування не втрачає й не додає пунктів', () => {
		expect(sortChecks(checks)).toHaveLength(checks.length);
	});
});
