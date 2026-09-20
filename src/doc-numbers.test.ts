// @vitest-environment node

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * `GATE-DOC-NUMBERS` — число в документації або стоїть під гейтом, або його не
 * пишуть (AI-AGENT-PITFALLS-v8 § 5.5.1, `PIT-NUMBER-UNDER-GATE`, HIGH).
 *
 * ## Чому виміряти замало
 *
 * § 5.5 вимагала **виміряти** число, і цього недосить: вимір правдивий у мить
 * запису й розходиться з наступного коміту. Далі його читають як факт — саме
 * тому, що колись він був заміряний чесно.
 *
 * Заміряно в цьому репозиторії 2026-09-02, тобто після проходу, який сам себе
 * називав аудитом «за всіма 37 файлами пакета»:
 *
 * | Де | Записано | Насправді |
 * |---|---|---|
 * | «Обсяг» | 179 `.svelte` + 323 `.ts` | **183 + 357** (до двох гейтів цього проходу) |
 * | гейт правил | 54 перевірки (15 / 39) | **83 (29 / 54)** |
 * | борг палітри | 46 пар | **41** |
 * | юніт-прогін | 370 перевірок у 41 файлі | **402 у 44** |
 * | e2e | 15 файлів, у CI ходять три | **16, у CI ходять чотири** |
 *
 * Жодне з цих чисел не було вигадане: усі п'ять колись заміряли. Розходяться
 * вони не від недбалості, а від часу — і тим гірше, що читач має підстави їм
 * вірити.
 *
 * ## Форма перевірки
 *
 * Числа зібрані в ОДНУ таблицю в `PROJECT-CONTEXT.md` («Числа під гейтом»), і
 * кожен рядок звіряється з тим самим джерелом, яким користується відповідний
 * гейт. Таблиця, а не розсип по тексту, — щоб місце для правки було одне; ключ,
 * а не порядок рядків, — щоб таблицю можна було переставляти.
 *
 * Звірка йде В ОБИДВА БОКИ: ключ, якого немає в таблиці, валить прогін так само,
 * як і зайвий ключ у ній. Інакше гейт мовчки перестав би стежити за числом,
 * прибраним із документа.
 *
 * ## Друга половина правила
 *
 * § 5.5.1 забороняє ще й ДУБЛІКАТ: «число, яке вже є в гейті, у документації не
 * дублюється, а називається посиланням на гейт». Тому борг ESLint у прозі більше
 * не називається числом — він живе в мапі `DEBT` (`src/eslint-baseline.test.ts`),
 * яка вже стоїть під гейтом і звіряється на РІВНІСТЬ. Регресію стереже
 * `describe('дублікатів немає')` нижче.
 *
 * Датовані історичні розділи («Нові інваріанти 2026-08-20») з цього виведені
 * навмисно: там число — запис про минулий стан, а не твердження про поточний.
 * Саме тому перевірка нижче шукає ФОРМУЛЮВАННЯ поточних тверджень, а не будь-яку
 * цифру.
 *
 * ## Зворотний експеримент (§ 1.1)
 *
 * Прогнано при написанні: таблиця, заповнена старими числами з документа
 * (179 / 323 / 54 / 46), дала **п'ять** червоних рядків із назвами ключів.
 * Канарка на сам розбір таблиці стоїть окремо: порожня таблиця валить прогін до
 * будь-якого порівняння.
 */

const CONTEXT = 'PROJECT-CONTEXT.md';
const HEADING = '## Числа під гейтом';

const read = (path: string): string => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');

function filesUnder(dir: string, matches: (name: string) => boolean, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) filesUnder(full, matches, acc);
		else if (matches(name)) acc.push(full);
	}
	return acc;
}

/** Та сама маска, що в `test.include` у `vite.config.ts`. */
const isUnitSpec = (name: string): boolean => /\.(spec|test)\.ts$/.test(name);

/** Випадки гейта правил рахуються з масиву `CASES`, а не з підсумкового рядка. */
function rulesCases(): { total: number; denied: number } {
	const source = read('scripts/check-rules.mjs');
	const start = source.indexOf('const CASES = [');
	const end = source.indexOf('for (const { name, allowed, run } of CASES)');
	if (start < 0 || end < 0 || end <= start) {
		throw new Error('у scripts/check-rules.mjs не знайдено масив CASES — розбір застарів');
	}
	const body = source.slice(start, end);
	return {
		total: (body.match(/^\t\{/gm) ?? []).length,
		denied: (body.match(/allowed:\s*false/g) ?? []).length
	};
}

/** Файли e2e, які справді названі кроком workflow. */
function e2eInCi(): number {
	const named = new Set<string>();
	for (const file of readdirSync('.github/workflows').filter((name) => /\.ya?ml$/.test(name))) {
		const source = read(`.github/workflows/${file}`);
		for (const match of source.matchAll(/tests\/e2e\/[\w./-]+\.spec\.ts/g)) named.add(match[0]);
	}
	return named.size;
}

function contrastDebt(): number {
	const source = read('src/contrast-baseline.ts');
	const body = source.slice(source.indexOf('KNOWN_CONTRAST_DEBT'));
	return (body.match(/'[^']+'/g) ?? []).length;
}

const rules = rulesCases();

/**
 * Ключ → чим він міряється. Опис іде в повідомлення про розбіжність: читач має
 * дізнатися не лише «число інше», а й яким рядком його переміряти.
 */
const MEASURED: Record<string, { actual: number; how: string }> = {
	'svelte-files': {
		actual: filesUnder('src', (name) => name.endsWith('.svelte')).length,
		how: "find src -name '*.svelte' | wc -l"
	},
	'ts-files': {
		actual: filesUnder('src', (name) => name.endsWith('.ts')).length,
		how: "find src -name '*.ts' | wc -l"
	},
	routes: {
		actual: filesUnder('src/routes', (name) => name === '+page.svelte').length,
		how: "find src/routes -name '+page.svelte' | wc -l"
	},
	'unit-spec-files': {
		actual: filesUnder('src', isUnitSpec).length,
		how: 'маска test.include у vite.config.ts'
	},
	'e2e-spec-files': {
		actual: filesUnder('tests/e2e', (name) => name.endsWith('.spec.ts')).length,
		how: "find tests/e2e -name '*.spec.ts' | wc -l"
	},
	'e2e-in-ci': {
		actual: e2eInCi(),
		how: 'файли, названі кроком `npx playwright test` у .github/workflows/'
	},
	'rules-cases': { actual: rules.total, how: 'масив CASES у scripts/check-rules.mjs' },
	'rules-cases-denied': {
		actual: rules.denied,
		how: '`allowed: false` у масиві CASES (scripts/check-rules.mjs)'
	},
	'contrast-debt': {
		actual: contrastDebt(),
		how: 'довжина KNOWN_CONTRAST_DEBT у src/contrast-baseline.ts'
	}
};

/** `| `ключ` | 183 | …` — беруться перші дві клітинки, решта рядка вільна. */
function declaredNumbers(): Map<string, number> {
	const document = read(CONTEXT);
	const start = document.indexOf(HEADING);
	if (start < 0) throw new Error(`у ${CONTEXT} немає розділу «${HEADING}»`);
	const rest = document.slice(start + HEADING.length);
	const end = rest.indexOf('\n## ');
	const section = end < 0 ? rest : rest.slice(0, end);

	const found = new Map<string, number>();
	for (const line of section.split('\n')) {
		const match = /^\|\s*`([\w-]+)`\s*\|\s*\*{0,2}(\d+)\*{0,2}\s*\|/.exec(line.trim());
		if (match) found.set(match[1], Number(match[2]));
	}
	return found;
}

const declared = declaredNumbers();

describe('перевірка жива', () => {
	/**
	 * Без цієї канарки перейменований заголовок або зіпсована регулярка дали б
	 * порожню мапу — і нуль розбіжностей на нулі порівнянь (§ 1).
	 */
	it('таблицю «Числа під гейтом» розібрано', () => {
		expect(declared.size, `у розділі «${HEADING}» не розібрано жодного рядка`).toBeGreaterThan(0);
	});

	it('кожне джерело виміру справді щось порахувало', () => {
		const empty = Object.entries(MEASURED)
			.filter(([, { actual }]) => actual === 0)
			.map(([key]) => key);
		expect(empty, `ці виміри дали нуль — джерело переїхало:\n${empty.join('\n')}`).toEqual([]);
	});
});

describe('GATE-DOC-NUMBERS: числа в PROJECT-CONTEXT.md (PIT-NUMBER-UNDER-GATE)', () => {
	it('кожне записане число збігається з дійсністю', () => {
		const drift: string[] = [];
		for (const [key, { actual, how }] of Object.entries(MEASURED)) {
			const claimed = declared.get(key);
			if (claimed === undefined) continue;
			if (claimed !== actual) drift.push(`${key}: записано ${claimed}, насправді ${actual} (${how})`);
		}
		expect(drift, `оновити таблицю «${HEADING}» тим самим комітом:\n${drift.join('\n')}`).toEqual(
			[]
		);
	});

	it('у таблиці є рядок для кожного ключа, за яким стежить гейт', () => {
		const missing = Object.keys(MEASURED).filter((key) => !declared.has(key));
		expect(
			missing,
			`ці ключі гейт міряє, а в таблиці їх немає — число зникло з документа мовчки:\n${missing.join('\n')}`
		).toEqual([]);
	});

	it('у таблиці немає рядка, за яким ніхто не стежить', () => {
		const orphans = [...declared.keys()].filter((key) => !(key in MEASURED));
		expect(
			orphans,
			`ці ключі стоять у таблиці, але гейт їх не міряє — тобто вони застаріють мовчки:\n${orphans.join('\n')}`
		).toEqual([]);
	});
});

/**
 * ЧИСЛА В КОМЕНТАРЯХ CI — теж числа, і вони старіють швидше за інші.
 *
 * Таблиця в `PROJECT-CONTEXT.md` була правильна саме тому, що стояла під
 * гейтом вище. Коментар у `deploy.yml` під гейтом не стояв — і казав «31
 * випадок: 10 і 21» при справжніх 89 і 59. Тобто читач CI бачив третину
 * справжнього, а виглядало це як точний опис.
 *
 * Перевірка навмисно вимагає ТОЧНОГО рядка, а не «десь є таке число»: число
 * без одиниці виміру поруч нічого не означає, а `89` могло б випадково
 * збігтися з таймаутом чи номером кроку.
 */
describe('числа про гейт правил у workflow', () => {
	const workflow = read('.github/workflows/deploy.yml');

	it('загальна кількість випадків названа правильно', () => {
		expect(
			workflow,
			`у .github/workflows/deploy.yml має стояти «${rules.total} випадків» — ` +
				'стільки їх у масиві CASES зараз'
		).toContain(`${rules.total} випадків`);
	});

	it('кількість негативних випадків названа правильно', () => {
		expect(
			workflow,
			`у .github/workflows/deploy.yml має стояти «${rules.denied} «сторонній» — ` +
				'саме негативний набір доводить, що правила не «дозволити все»'
		).toContain(`${rules.denied} «сторонній`);
	});
});

/**
 * ПРАВИЛА, ПЕРЕВІРЕНІ НА ЕМУЛЯТОРІ Й НЕ ВИКЛАДЕНІ, — це зелений гейт над
 * станом, якого ніхто не змінив.
 *
 * Саме так тут і було: `rooms` зі звуженням `update` по полях, входом гостя
 * окремим випадком і append-only журналом лежали у файлі, `check:rules`
 * зеленів, а база приймала старі, ширші правила. `PROJECT-CONTEXT.md` чесно
 * писав «нові звуження там відсутні» — і це могло стояти місяцями.
 */
describe('правила доїжджають до бази', () => {
	const workflow = read('.github/workflows/deploy.yml');

	it('є джоб, який їх викладає', () => {
		expect(workflow, 'джоб publish-rules зник — правила знову лише перевіряються').toContain(
			'publish-rules:'
		);
		expect(workflow).toContain('firebase-tools');
	});

	it('викладання йде ПЕРЕД збіркою', () => {
		expect(
			workflow,
			'build-and-deploy більше не чекає на publish-rules: нові правила сумісні ' +
				'зі старим кодом, старі з новим — ні, тож порядок тут не стильовий'
		).toContain('needs: publish-rules');
	});

	it('індекси їдуть тим самим кроком', () => {
		expect(
			workflow,
			'емулятор індексів не перевіряє взагалі, а Firestore без індексу відмовляє ' +
				'лише в продакшні — тобто запит, зелений локально, падає в людей'
		).toContain('firestore:indexes');
	});

	/*
	 * Успішний `deploy` доводить, що команда не впала, — і більше нічого.
	 * `--only` міг не покрити файл, проєкт міг бути не той, крок міг бути
	 * пропущений умовою `if`. У сусідньому `Slovko` така різниця прожила сім
	 * місяців непоміченою (CLOUD-DATABASE-v9 § 2.3, `CDB-RULES-READBACK`).
	 */
	it('після викладення правила читаються з бази назад', () => {
		expect(
			workflow,
			'крок звірки зник: тоді «правила викладено» знову означає лише «команда ' +
				'не впала», а не «у базі те, що в git»'
		).toContain('scripts/verify-deployed-rules.mjs');

		const script = read('scripts/verify-deployed-rules.mjs');
		expect(
			script,
			'звірка байт-у-байт червонітиме на правильних правилах: відступи віддає ' +
				'Firebase у своєму форматуванні'
		).toMatch(/replace\(\/\\s\+\/g, ' '\)/);
		expect(
			script,
			'нуль звірених файлів — не успіх: саме так перевірка тихо зникає, коли ' +
				'файли перейменували, а умови existsSync перестали збігатися'
		).toMatch(/checked === 0/);
	});

	it('ключ сервісного акаунта прибирається пасткою, а не останнім рядком', () => {
		expect(
			workflow,
			'deploy падає саме тоді, коли правила не приймаються — тобто найімовірніше. ' +
				'Рядок із rm наприкінці в цьому випадку не виконається взагалі'
		).toContain("trap 'rm -f");
	});
});

/**
 * Формулювання поточних тверджень, які раніше несли число в прозі. Кожне
 * прибране разом із появою таблиці; перевірка тримає їх прибраними.
 *
 * Шукаються саме ФОРМУЛЮВАННЯ, а не цифри: датовані історичні розділи
 * («Числа боргу ESLint перезаміряні 2026-08-20: 341 попередження») лишаються
 * як є — там число описує минулий стан і переміряти його нема сенсу.
 */
const FORBIDDEN: ReadonlyArray<{ pattern: RegExp; why: string }> = [
	{
		pattern: /Обсяг:\s*\d+/,
		why: 'обсяг проєкту — рядки `svelte-files` / `ts-files` / `routes` у таблиці'
	},
	{
		pattern: /\*\*\d+\s+перевірк[аи]:\s*\d+\s+дозволено/,
		why: 'випадки гейта правил — рядки `rules-cases` / `rules-cases-denied` у таблиці'
	},
	{
		pattern: /\*\*\d+\s+пар\*\*\s+нижче|Палітра:\s*\d+\s+пар/,
		why: 'борг палітри — рядок `contrast-debt` у таблиці'
	},
	{
		pattern: /Числа боргу ESLint на \d{4}-\d{2}-\d{2}/,
		why: 'борг ESLint уже стоїть під гейтом у мапі DEBT (src/eslint-baseline.test.ts) — у прозі він називається посиланням, а не другою копією числа'
	}
];

describe('дублікатів немає (§ 5.5.1)', () => {
	it('поточні твердження не несуть числа в прозі', () => {
		const document = read(CONTEXT);
		const offenders = FORBIDDEN.filter(({ pattern }) => pattern.test(document)).map(
			({ pattern, why }) => `${pattern} — ${why}`
		);
		expect(offenders, `число повернулося в прозу:\n${offenders.join('\n')}`).toEqual([]);
	});
});
