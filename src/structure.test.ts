// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

/**
 * СТРУКТУРА: досяжність, руни, псевдоніми, розмір
 * (PROJECT-STRUCTURE-v9 § 2.1, § 4.3.1, § 5.2, § 7.1 — `GATE-STRUCTURE`).
 *
 * ## Чому граф імпортів, а не пошук імені файлу
 *
 * v9 додала `PS-REACHABILITY` (HIGH) саме через це: пошук імені файлу в тексті
 * інших джерел не бачить **ланцюжка сиріт**. Мертвий модуль A імпортується
 * мертвим модулем B, обидва «знаходяться» гріпом, і обидва не виконуються
 * ніколи. Тут будується справжній граф від точок входу SvelteKit.
 *
 * Заміряно при написанні: 500 модулів, 27 точок входу, **нуль** нерозвʼязаних
 * специфікаторів — і один справжній сирота, `src/lib/services/analytics.ts`.
 * Він містив рівно один рядок, `export * from './analyticsService'`, і не мав
 * жодного імпортера: увесь проєкт ходив у `analyticsService` напряму. Гріп по
 * слову `analytics` при цьому давав десятки збігів, тобто найдешевша перевірка
 * сказала б «використовується».
 *
 * `knip` цього не показував як факт: він за конфігом не знає ні про
 * `new Worker(new URL(…))`, ні про динамічні імпорти в `{#await}`, тож у його
 * шести «unused files» п'ять були хибними (`ai.worker.ts`,
 * `AbandonedGameModal.svelte`, `lighthouserc.cjs`, два скрипти). Крім того,
 * `npm run lint:knip` не викликається ні в одному workflow.
 *
 * ## Перелік винятків замість «дозволити все»
 *
 * Модуль, досяжний не з застосунку, а з ПЕРЕВІРКИ, лишається законним — але
 * названим. `REACHED_BY_CHECKS` перелічує такі поіменно з причиною; без
 * переліку довелося б або терпіти червоне, або вимкнути перевірку.
 *
 * ## Ратчет розміру
 *
 * `OVERSIZED` — стеля на КОЖЕН файл, а не число в прозі й не «скільком файлам
 * можна» (`PS-SIZE-RATCHET`). Три інваріанти: файл поза переліком не
 * перевищує орієнтир; файл із переліку не перевищує свою стелю; файл, що
 * вклався в орієнтир, вилучається з переліку. Стелі поставлені на ПОТОЧНЕ
 * значення — запас перетворив би ратчет на дозвіл рости.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Повернути `src/lib/services/analytics.ts` → «сирота» червоніє з його шляхом.
 * Дописати рядок у `roomService.ts` → «понад власну стелю» червоніє з обома
 * числами. Знизити стелю на 100 → те саме. Дописати `$state(` у звичайний
 * `.ts` → «руни лише у .svelte та .svelte.ts» червоніє.
 */

const ROOT = 'src';

const norm = (path: string): string => path.split('\\').join('/');

function walk(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(norm(full));
	}
	return out;
}

/** Коментарі відрізаються всюди: цей докблок цитує саме те, що заборонено. */
const withoutComments = (source: string): string =>
	source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

/** Рядки коду: без коментарів і без порожніх. */
const countSloc = (code: string): number =>
	code
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/^\s*\/\/.*$/gm, '')
		.split(/\r?\n/)
		.filter((line) => line.trim().length > 0).length;

const all = walk(ROOT);

/**
 * Усе, що компілюється в застосунок: без перевірок і без файлів декларацій.
 *
 * `.js` тут потрібен обовʼязково: у `src/lib/actions/` лежать дві дії на
 * чистому JS, і без них граф не розвʼязував **дев'ятнадцять** імпортів —
 * тобто мовчки вважав недосяжним усе, що підключене лише через них.
 */
const code = all.filter(
	(file) =>
		/\.(ts|svelte|js)$/.test(file) &&
		!/\.(spec|test)\.(ts|js)$/.test(file) &&
		!/\.d\.ts$/.test(file)
);

// ---------------------------------------------------------------------------
// Граф імпортів від точок входу
// ---------------------------------------------------------------------------

/**
 * Точки входу — те, що SvelteKit виконує сам: файли маршрутів і клієнтські
 * хуки. Усе інше має бути досяжним звідси, інакше воно не виконується.
 */
const ENTRY = /^src\/(?:routes\/.*\+(?:page|layout|error)(?:\.[a-z]+)?\.(?:svelte|ts)|hooks\.(?:client|server)\.ts)$/;

/**
 * Модулі, досяжні не з застосунку, а з перевірок — законно, але поіменно.
 *
 * Ключ — шлях, значення — чому це не борг.
 */
const REACHED_BY_CHECKS: Record<string, string> = {
	'src/contrast-baseline.ts':
		'база боргу палітри: її читає лише src/contrast.spec.ts, у застосунку їй нічого робити',
	'src/lib/siblings.ts':
		'таблиця сусідніх сайтів — ОДНА копія у восьми репозиторіях. Тут проєкт лише ПРИЙМАЄ ?lang= ' +
		'(applyLanguageFromUrl в i18n/init.svelte.ts) і вихідних посилань не малює, тож застосунок ' +
		'таблицю не імпортує. Дрейф копії стереже src/lib/siblings.test.ts'
};

/** Розширення, які додаються до специфікатора без розширення. */
const CANDIDATES = ['', '.ts', '.js', '.svelte', '/index.ts', '/index.js', '/index.svelte'];

/**
 * Специфікатор → шлях у репозиторії; `null` — зовнішній модуль (`$app/…`,
 * `svelte`, `firebase/…`), `undefined` — не розвʼязався, і це окремий сигнал.
 */
function resolveSpec(from: string, spec: string): string | null | undefined {
	let base: string;
	if (spec === '$lib') base = 'src/lib';
	else if (spec.startsWith('$lib/')) base = `src/lib/${spec.slice(5)}`;
	else if (spec.startsWith('./') || spec.startsWith('../')) base = norm(join(dirname(from), spec));
	else return null;

	// `./foo.js` у проєкті на TS означає `./foo.ts` (allowImportingTsExtensions).
	base = base.replace(/\.js$/, '');
	for (const suffix of CANDIDATES) {
		if (code.includes(base + suffix)) return base + suffix;
	}
	if (all.includes(base)) return base;
	return undefined;
}

/**
 * Форми, якими модуль справді підключається:
 * `from '…'`, `import('…')`, бічний `import '…'`, `new URL('…', import.meta.url)`.
 *
 * Останню довелося додати окремо: `ai.worker.ts` підключається саме так, і без
 * неї він виглядав би сиротою — тобто перевірка вимагала б прибрати робочий код.
 */
const SPEC = /(?:from\s*|import\s*\(\s*|import\s+|new URL\(\s*)['"]([^'"]+)['"]/g;

const entries = code.filter((file) => ENTRY.test(file));
const reached = new Set<string>(entries);
const unresolved: string[] = [];
const queue = [...entries];
while (queue.length) {
	const file = queue.pop()!;
	const source = withoutComments(readFileSync(file, 'utf8'));
	for (const match of source.matchAll(SPEC)) {
		const target = resolveSpec(file, match[1]);
		if (target === null) continue;
		if (target === undefined) {
			unresolved.push(`${file} → ${match[1]}`);
			continue;
		}
		if (!reached.has(target)) {
			reached.add(target);
			queue.push(target);
		}
	}
}

describe('перевірка жива', () => {
	it('джерела знайдено', () => {
		expect(code.length, 'сканер шукає не там — жодного джерела').toBeGreaterThan(100);
	});

	it('точки входу знайдено — графу є від чого будувати', () => {
		expect(
			entries.length,
			'жодного +page/+layout — регулярка точок входу застаріла, і сиротою став би весь проєкт'
		).toBeGreaterThan(5);
	});

	it('граф справді пройшов далі за точки входу', () => {
		expect(
			reached.size,
			'граф не вийшов за межі точок входу — розбір специфікаторів зламався'
		).toBeGreaterThan(entries.length * 3);
	});

	it('кожен специфікатор розвʼязано', () => {
		// Нерозвʼязаний специфікатор робить перевірку сиріт брехливою в обидва
		// боки: цілі не видно як досяжної, а причина не видна зовсім.
		expect(
			[...new Set(unresolved)],
			`ці імпорти не розвʼязалися — граф неповний:\n${[...new Set(unresolved)].join('\n')}`
		).toEqual([]);
	});
});

describe('досяжність модулів (§ 4.3.1, PS-REACHABILITY)', () => {
	it('кожен модуль досяжний графом імпортів від точки входу', () => {
		const orphans = code
			.filter((file) => !reached.has(file))
			.filter((file) => !(file in REACHED_BY_CHECKS));
		expect(
			orphans,
			'мертвий файл читається як зроблена робота: його правлять, на нього посилаються, ' +
				`він не виконується. Якщо це навмисно — рядок у REACHED_BY_CHECKS із причиною:\n${orphans.join('\n')}`
		).toEqual([]);
	});

	it('у переліку винятків немає того, що вже досяжне або зникло', () => {
		const stale = Object.keys(REACHED_BY_CHECKS).filter(
			(file) => reached.has(file) || !code.includes(file)
		);
		expect(
			stale,
			`ці рядки REACHED_BY_CHECKS застаріли — вилучити:\n${stale.join('\n')}`
		).toEqual([]);
	});
});

describe('руни й псевдоніми (§ анти-патерни, § 5.2)', () => {
	it('руни лише у .svelte та .svelte.ts', () => {
		const bad = all
			.filter(
				(file) =>
					file.endsWith('.ts') && !file.endsWith('.svelte.ts') && !/\.(test|spec)\.ts$/.test(file)
			)
			.filter((file) =>
				/\$state[({<]|\$derived[({<]|\$effect[({.]/.test(withoutComments(readFileSync(file, 'utf8')))
			);
		expect(
			bad,
			`руни у звичайному .ts не компілюються в реактивність — вони просто нічого не роблять:\n${bad.join('\n')}`
		).toEqual([]);
	});

	it('псевдонім імпорту збігається з іменем файлу компонента', () => {
		const bad: string[] = [];
		const alias = /import\s+([A-Z][A-Za-z0-9]*)\s+from\s+["'][^"']*\/([A-Z][A-Za-z0-9]*)\.svelte["']/g;
		for (const file of code) {
			for (const match of readFileSync(file, 'utf8').matchAll(alias)) {
				if (match[1] !== match[2]) bad.push(`${file}: ${match[1]} → ${match[2]}.svelte`);
			}
		}
		expect(
			bad,
			`перейменований компонент і старий псевдонім — найдешевший спосіб шукати не той файл:\n${bad.join('\n')}`
		).toEqual([]);
	});
});

describe('розмір файлів — ратчет, а не число в прозі (§ 7.1, PS-SIZE-RATCHET)', () => {
	/** Орієнтири § 7. Перший збіг виграє, тож `.svelte.ts` стоїть перед `.ts`. */
	const LIMITS: Array<[RegExp, number]> = [
		[/\/routes\/.*\+(page|layout|error)\.svelte$/, 400],
		[/\.svelte$/, 300],
		[/\.svelte\.ts$/, 300],
		[/\.(ts|js)$/, 250]
	];

	/**
	 * Стеля на кожен файл, поставлена на ПОТОЧНЕ значення (заміряно 2026-09-10).
	 * Перелік лише скорочується: новий файл сюди не додається, а той, що
	 * вклався в орієнтир, вилучається — цього вимагає окремий інваріант нижче.
	 */
	const OVERSIZED: Record<string, number> = {
		// Схема перекладів — один union на весь застосунок; ділити її означало б
		// ділити словники, а паритет ключів тримається саме проти цього файлу.
		'src/lib/i18n/translationSchema.ts': 835,
		// Генерований перелік країн, для яких є прапор (`countries.generated.ts`).
		'src/lib/config/countries.generated.ts': 264,
		// Справжній борг: онлайн-режим і кімнати — найбільші за відповідальністю.
		'src/lib/game-modes/OnlineGameMode.ts': 450,
		'src/lib/services/roomService.ts': 325,
		'src/lib/game-modes/BaseGameMode.ts': 298,
		'src/lib/sync/MatchLogGameStateSync.ts': 293,
		'src/lib/stores/gameSettingsPresets.ts': 273,
		'src/lib/services/game-info/gameInfoMessageFactory.ts': 258,
		'src/lib/services/userActionService.ts': 251,
		// Компоненти понад орієнтир: розмітка + стилі в одному файлі.
		'src/lib/components/ErrorBoundary.svelte': 419,
		'src/lib/components/modals/GameOverContent.svelte': 371,
		'src/lib/components/social/FriendsPanel.svelte': 370
	};

	const measured = code.map((file) => ({
		file,
		sloc: countSloc(readFileSync(file, 'utf8')),
		limit: LIMITS.find(([re]) => re.test(file))?.[1] ?? Infinity
	}));

	it('перевірка жива: розмір порахований і не нульовий', () => {
		expect(measured.every((m) => m.sloc > 0)).toBe(true);
		expect(Object.keys(OVERSIZED).length, 'порожній ратчет нічого не тримає').toBeGreaterThan(0);
	});

	it('файл поза переліком не перевищує орієнтир § 7', () => {
		const bad = measured
			.filter(({ file }) => !(file in OVERSIZED))
			.filter(({ sloc, limit }) => sloc > limit)
			.map(({ file, sloc, limit }) => `${file}: ${sloc} SLOC (орієнтир ${limit})`);
		expect(
			bad,
			`новий файл понад межу: поділити за відповідальністю або внести в OVERSIZED з причиною:\n${bad.join('\n')}`
		).toEqual([]);
	});

	it('файл із переліку не перевищує СВОЮ стелю', () => {
		const bad = measured
			.filter(({ file }) => file in OVERSIZED)
			.filter(({ file, sloc }) => sloc > OVERSIZED[file])
			.map(({ file, sloc }) => `${file}: ${sloc} SLOC понад власну стелю ${OVERSIZED[file]}`);
		expect(bad, `ратчет тримає межу, а не дозволяє рости:\n${bad.join('\n')}`).toEqual([]);
	});

	it('файл, що вклався в орієнтир, вилучається з переліку', () => {
		const bad = measured
			.filter(({ file }) => file in OVERSIZED)
			.filter(({ sloc, limit }) => sloc <= limit)
			.map(({ file, sloc, limit }) => `${file}: ${sloc} SLOC уже в межі ${limit}`);
		expect(bad, `перелік лише скорочується — вилучити з OVERSIZED:\n${bad.join('\n')}`).toEqual(
			[]
		);
	});

	it('у переліку немає файлів, яких більше немає', () => {
		const gone = Object.keys(OVERSIZED).filter((file) => !code.includes(file));
		expect(gone, `у OVERSIZED є, а файлу немає:\n${gone.join('\n')}`).toEqual([]);
	});
});
