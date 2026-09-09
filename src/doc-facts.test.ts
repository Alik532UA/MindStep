// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

/**
 * НЕ ЛИШЕ ЧИСЛА: ШЛЯХИ, СКРИПТИ Й ВЕРСІЯ ПАКЕТА В ДОКУМЕНТАХ
 * (AI-AGENT-PITFALLS-v9 § 5.5.2, `PIT-DOC-FACTS`, HIGH, `GATE-DOC-NUMBERS`).
 *
 * ## Чому мало гейта над числами
 *
 * `src/doc-numbers.test.ts` тримає таблицю чисел і робить це добре. Але
 * документ описує проєкт не лише числами, і саме твердження старіють тихіше за
 * них. Заміряно на цьому репозиторії, три знахідки:
 *
 *  1. **Відхилення, що пережило свою причину на кілька годин.**
 *     `PROJECT-CONTEXT.md` 2026-09-02 записав «у `firestore.rules` немає жодної
 *     звірки з `request.time`, тож і перевіряти через `:commit` нема чого» — а
 *     наступний коміт того самого дня додав дві такі звірки й гейт до них.
 *     Тобто документ казав «правило незастосовне» про правило, яке вже
 *     застосоване.
 *  2. **Шлях після перейменування.** `AGENTS.md` тричі посилався на
 *     `src/lib/services/logService.ts`; файл давно зветься
 *     `logService.svelte.ts`. Читач, що йшов за шляхом, не знаходив нічого.
 *  3. **Скрипт, якого немає.** `README.md` називав `npm run test:unit`, а
 *     `countries.generated.ts` — `npm run sync:flags`. Першого не існувало
 *     (юніт-прогін звався `test:report`), другий є лише в сусідньому
 *     репозиторії.
 *
 * ## Двобічний резолвер, а не `existsSync`
 *
 * Документи згадують файли КОРОТКИМ імʼям (`Tooltip.svelte`,
 * `invariants.spec.ts`), і перевірка «шлях існує від кореня» червоніла б на
 * восьми десятках правдивих згадок. Тому токен резолвиться так само, як його
 * читає людина: точний шлях або суфікс шляху. Обидва краї — дефект:
 *
 *  * **нуль кандидатів** — згадка веде в нікуди;
 *  * **більше одного** — згадка неоднозначна, і читач піде не в той файл
 *    (той самий клас, що `SKD-AMBIGUOUS-LINK`: чуже посилання гірше за
 *    відсутнє).
 *
 * ## Зворотний експеримент (§ 1.1) — прогнано
 *
 * Повернути `logService.ts` в `AGENTS.md` → «не резолвиться» червоніє з
 * токеном. Повернути `npm run test:unit` до наявності скрипта → «скрипта немає»
 * червоніє. Змінити `v9` на `v8` в одному з двох документів → «версія пакета
 * розходиться» червоніє з обома значеннями.
 */

const ROOT = resolve(__dirname, '..');

/** Документи, які описують ПОТОЧНИЙ стан проєкту й читаються як інструкція. */
const DOCS = ['PROJECT-CONTEXT.md', 'AGENTS.md', 'README.md'];

/** Де взагалі можуть лежати згадані файли. */
const SKIP_DIRS = new Set(['node_modules', '.git', '.svelte-kit', 'build', 'dev-dist',
	'playwright-report', 'test-results', 'test-reports', '.lighthouseci', 'coverage']);

const norm = (path: string): string => path.split('\\').join('/');

function tracked(dir: string, prefix = '', out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		if (SKIP_DIRS.has(entry)) continue;
		const full = join(dir, entry);
		const rel = prefix ? `${prefix}/${entry}` : entry;
		if (statSync(full).isDirectory()) tracked(full, rel, out);
		else out.push(norm(rel));
	}
	return out;
}

const files = tracked(ROOT);
const read = (path: string): string => readFileSync(join(ROOT, path), 'utf8').replace(/\r\n/g, '\n');
const present = DOCS.filter((doc) => existsSync(join(ROOT, doc)));

/**
 * Токен у лапках, що виглядає як файл проєкту: імʼя або шлях із розширенням.
 *
 * Розширення перелічені навмисно, а не «будь-що після точки»: інакше в вибірку
 * потрапили б домени (`mindstep.odesa.ua`), прапорці CLI (`--outputFile.json`)
 * і самі розширення як поняття (`.svelte.ts`).
 */
const TOKEN = /`([A-Za-z0-9_][A-Za-z0-9_./-]*\.(?:ts|js|mjs|cjs|svelte|json|md|yml|yaml|rules|html|css))`/g;

/**
 * Артефакти збірки: у репозиторії їх немає за побудовою, а в документі вони
 * згадуються законно — саме про них і йдеться в гейтах над `build/`.
 */
const BUILD_ARTIFACTS = new Set([
	'index.html',
	'404.html',
	'service-worker.js',
	'sitemap.xml',
	'workbox-config.js'
]);

/**
 * Імена, які не є файлами ЦЬОГО репозиторію й ніколи ними не стануть.
 *
 * Перелік поіменний, а не за шаблоном: `action.yml` — маніфест чужої дії
 * GitHub, і саме про нього йдеться в `CI-ACTION-RUNTIME`. Шаблон «будь-який
 * .yml» пропустив би справжню згадку власного workflow.
 */
const NOT_OURS: Record<string, string> = {
	'action.yml': 'маніфест дії GitHub усередині чужого репозиторію (CI-ACTION-RUNTIME)'
};

/** Шляхи в ІНШІ репозиторії: тут їх не існує, і це не дефект. */
const OTHER_REPO = /^(sveltekit-canon|product_criteria)\//;

/** Усе під `build/` — артефакт, а не файл репозиторію. */
const BUILD_DIR = /^build\//;

describe('перевірка жива', () => {
	it('документи знайдено', () => {
		expect(present.length, `жодного з ${DOCS.join(', ')} — перевіряти нема чого`).toBe(DOCS.length);
	});

	it('файли репозиторію проскановані', () => {
		expect(files.length, 'сканер не знайшов файлів — резолвер порожній').toBeGreaterThan(500);
	});

	it('токени в документах справді знаходяться', () => {
		const total = present.reduce((sum, doc) => sum + [...read(doc).matchAll(TOKEN)].length, 0);
		expect(
			total,
			'у документах не знайдено жодної згадки файлу — регулярка застаріла, і перевірка мертва'
		).toBeGreaterThan(30);
	});
});

describe('GATE-DOC-NUMBERS: шляхи в документах резолвяться (PIT-DOC-FACTS)', () => {
	it('кожна згадка файлу веде рівно в один файл', () => {
		const problems: string[] = [];
		for (const doc of present) {
			for (const match of read(doc).matchAll(TOKEN)) {
				const token = match[1];
				if (BUILD_ARTIFACTS.has(token) || OTHER_REPO.test(token)) continue;
				if (BUILD_DIR.test(token) || token in NOT_OURS) continue;
				if (files.includes(token)) continue;
				const candidates = files.filter((file) => file.endsWith(`/${token}`));
				if (candidates.length === 0) problems.push(`${doc}: \`${token}\` — не резолвиться`);
				else if (candidates.length > 1) {
					problems.push(
						`${doc}: \`${token}\` — ${candidates.length} кандидатів (${candidates.join(', ')})`
					);
				}
			}
		}
		expect(
			[...new Set(problems)],
			'згадка, що веде в нікуди або в два місця, гірша за відсутню — ' +
				`читач іде за нею й не знаходить нічого:\n${[...new Set(problems)].join('\n')}`
		).toEqual([]);
	});
});

describe('GATE-DOC-NUMBERS: `npm run X` у прозі існує (PIT-DOC-FACTS)', () => {
	const pkg = JSON.parse(read('package.json')) as { scripts?: Record<string, string> };
	const scripts = new Set(Object.keys(pkg.scripts ?? {}));

	/**
	 * Скануються документи й КОМЕНТАРІ джерел, а не код.
	 *
	 * У `src/ci.test.ts` лежить регулярка, що перелічує форми гейтів у семи
	 * проєктах (`check:worker`, `validate-content`) — вони законно відсутні
	 * саме тут. Це не стала згадка, а зразок; і саме тому код у вибірку не
	 * входить, а коментарі входять: `npm run sync:flags` жив рівно в докблоці.
	 */
	const comments = (source: string): string =>
		[
			...[...source.matchAll(/\/\*[\s\S]*?\*\//g)].map((m) => m[0]),
			...[...source.matchAll(/^\s*(?:\/\/|#).*$/gm)].map((m) => m[0])
		].join('\n');

	function walkSources(dir: string, prefix: string, out: string[] = []): string[] {
		if (!existsSync(join(ROOT, dir))) return out;
		for (const entry of readdirSync(join(ROOT, dir))) {
			const rel = `${dir}/${entry}`;
			if (statSync(join(ROOT, rel)).isDirectory()) walkSources(rel, prefix, out);
			else if (/\.(ts|js|mjs|cjs|svelte|ya?ml)$/.test(entry)) out.push(norm(rel));
		}
		return out;
	}

	const sources = [
		...walkSources('src', 'src'),
		...walkSources('scripts', 'scripts'),
		...walkSources('.github', '.github')
	];

	it('перевірка жива: скрипти прочитано, джерела знайдено', () => {
		expect(scripts.size, 'у package.json немає жодного скрипта').toBeGreaterThan(5);
		expect(sources.length, 'сканер джерел порожній').toBeGreaterThan(100);
	});

	/**
	 * Скрипти СУСІДНІХ репозиторіїв — названі поіменно, а не дозволені загалом.
	 *
	 * Виняток тут законний рівно тоді, коли текст поруч сам каже, що скрипт
	 * чужий: інакше згадка читається як «запусти це в себе». Тому в переліку
	 * лежить не лише назва, а й вимога до контексту — слово «сусід» у тому
	 * самому абзаці.
	 */
	const OTHER_REPO_SCRIPTS: Record<string, RegExp> = {
		// Набір прапорів генерується в `VetCrewGames` із `country-flag-icons`;
		// тут того пакета в залежностях немає (`countries.ts`).
		//
		// Альтернативи перелічені, бо сказати це можна двома способами, і обидва
		// однаково зрозумілі читачеві: «у сусідньому VetCrewGames» і «скрипта,
		// якого в цьому проєкті немає». Вимагати одного слова означало б
		// вимагати формулювання, а не змісту.
		'sync:flags': /сусід|у цьому проєкті нема|в цьому проєкті нема/i
	};

	it('кожен названий у прозі npm-скрипт існує', () => {
		const problems: string[] = [];
		const named = (text: string, where: string) => {
			for (const match of text.matchAll(/npm run ([a-zA-Z][\w-]*(?::[\w-]+)*)/g)) {
				const script = match[1];
				if (scripts.has(script)) continue;
				const context = OTHER_REPO_SCRIPTS[script];
				if (context) {
					// Абзац навколо згадки мусить сам називати її чужою.
					const around = text.slice(Math.max(0, match.index - 400), match.index + 400);
					if (context.test(around)) continue;
					problems.push(
						`${where}: \`npm run ${script}\` — скрипт сусіднього репозиторію, ` +
							'але поруч про це не сказано; читач запустить його тут і не знайде'
					);
					continue;
				}
				problems.push(`${where}: \`npm run ${script}\``);
			}
		};
		for (const doc of present) named(read(doc), doc);
		for (const file of sources) {
			// Файли workflow — цілком інструкція, коментарі з них не вирізаються.
			const source = read(file);
			named(/\.ya?ml$/.test(file) ? source : comments(source), file);
		}
		expect(
			[...new Set(problems)],
			'скрипта з такою назвою в package.json немає — команда з документа не запуститься:\n' +
				[...new Set(problems)].join('\n')
		).toEqual([]);
	});
});

describe('версія пакета інструкцій названа однаково в усіх документах', () => {
	/**
	 * Тут не перевіряється, ЩО за версія правильна — сусіднього репозиторію на
	 * раннері немає. Перевіряється, що документи не розійшлися між собою:
	 * половинчасте оновлення (шапка на v9, посилання на v8) — рівно той стан,
	 * у якому агент читає стандарт минулої ревізії й вважає, що читає поточний.
	 */
	/**
	 * Рахуються лише ЖИВІ посилання — у лапках або в markdown-посиланні.
	 *
	 * У цих документах лапки означають «це існує зараз», і та сама умова
	 * потрібна тут: розділ «нові інваріанти» цитує старий шлях як опис дефекту
	 * («вів у selection_criteria/v8 при шапці на v9»), і без цієї межі гейт
	 * читав би ЗГАДКУ ПРО ПОРУШЕННЯ як порушення — той самий клас, що вже
	 * ловився в `ci.test.ts`.
	 */
	// `[^\s`)]*` навмисно забороняє пробіли: інакше вираз перестрибнув би цілий
	// абзац від випадкової дужки до згадки в прозі — і саме це й сталося на
	// першому прогоні.
	const LIVE_REFERENCE = /[`(][^\s`)]*selection_criteria\/(v\d+)/g;

	const versions = new Map<string, Set<string>>();
	for (const doc of present) {
		const found = new Set([...read(doc).matchAll(LIVE_REFERENCE)].map((match) => match[1]));
		if (found.size) versions.set(doc, found);
	}

	it('перевірка жива: посилання на пакет знайдено', () => {
		expect(
			versions.size,
			'жоден документ не посилається на selection_criteria — перевірка порожня'
		).toBeGreaterThan(0);
	});

	it('усі документи називають ту саму версію', () => {
		const all = [...new Set([...versions.values()].flatMap((set) => [...set]))];
		expect(
			all,
			'документи розійшлися у версії пакета: ' +
				[...versions].map(([doc, set]) => `${doc} → ${[...set].join(', ')}`).join('; ')
		).toHaveLength(1);
	});
});
