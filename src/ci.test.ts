import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * CI-CD-AND-TOOLS-v8 § 3 — workflow теж код, і його стан перевіряється.
 *
 * Пайплайн живе поза межами всіх інших гейтів: `svelte-check` його не читає,
 * ESLint не читає, тести не читають. Помилка в ньому виявляється або на
 * наступному push (у кращому разі), або взагалі ніколи — коли крок мовчки
 * перестає щось перевіряти, а зелена галочка лишається.
 */
const DIR = '.github/workflows';

const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => /\.ya?ml$/.test(f)) : [];

/**
 * Рядки-коментарі відрізаються перед пошуком.
 *
 * Перевірка читає текст файлу, а не розібраний YAML, — і через це вважала
 * порушенням ЗГАДКУ про порушення. `ci.yml` пояснює в шапці, чому в ньому немає
 * `concurrency`, і цитує при цьому заборонений рядок; тест червонів на
 * коментарі, який описує саме те правило, яке він стереже.
 *
 * Це та сама помилка, що вже ловилася в `test-runners.test.ts` (там докблок
 * цитував мертвий імпорт і оголошував сиротою сам файл), і той самий висновок:
 * перевірка, яка червоніє без порушення, недовго лишається ввімкненою
 * (CODE-QUALITY-v8 § 6.4.1).
 *
 * Відрізаються лише ЦІЛІ рядки-коментарі: `#` усередині значення (наприклад,
 * колір) при цьому лишається на місці.
 */
const withoutComments = (yaml: string): string =>
	yaml
		.split('\n')
		.filter((line) => !/^\s*#/.test(line))
		.join('\n');

const sourceOf = (file: string): string => withoutComments(readFileSync(`${DIR}/${file}`, 'utf8'));
const all = files.map(sourceOf).join('\n');
const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as {
	scripts?: Record<string, string>;
};
const scripts = pkg.scripts ?? {};

describe('перевірка жива', () => {
	it('workflow знайдено', () => {
		expect(files.length, 'у .github/workflows немає жодного yml — перевіряти нема що').toBeGreaterThan(0);
	});
});

describe('CI', () => {
	it('тести запускаються в CI (§ 1.6)', () => {
		expect(/run:\s*npm (test|run test)/.test(all), 'у workflow немає кроку з тестами').toBe(true);
	});

	it('використовується npm ci, а не npm install', () => {
		expect(/run:\s*npm install\b/.test(all), 'npm install робить білд невідтворюваним').toBe(
			false
		);
	});

	it('Playwright має крок встановлення браузерів (§ 1.3)', () => {
		if (!/playwright test/.test(all)) return;
		expect(/playwright install/.test(all), 'без install крок падає на відсутньому браузері').toBe(
			true
		);
	});

	it('жоден тестовий скрипт не у watch-режимі (§ 1.4)', () => {
		// Не лише `test`: гейтом у workflow буває `test:unit`, `test:report`,
		// `test:ci` — і саме там watch і зустрічається, бо `test` перевіряють, а
		// решту ні. `test:watch` виключений навмисно: він для цього й існує.
		const watchers = Object.entries(scripts)
			.filter(([name]) => /^test(:|$)/.test(name) && name !== 'test:watch')
			.filter(([, cmd]) => /^vitest\s*$/.test(cmd));
		expect(watchers, 'watch-режим підвисне поза CI, де немає CI=true').toEqual([]);
	});

	/**
	 * CI-CD-AND-TOOLS-v8 § 1.3 + AI-AGENT-PITFALLS-v8 § 1.4.
	 *
	 * `cancel-in-progress: true` у деплой-пайплайні виглядає економією часу, а
	 * коштує прогонів, яких не було: пуш пачкою комітів скасовує все, крім
	 * останнього, і щойно доданий гейт може не виконатися жодного разу. У цьому
	 * проєкті так і сталося — `Unique data-testid invariant` був червоний від
	 * народження, а виявилося це за кілька днів і випадково.
	 */
	it('деплой-пайплайн не скасовує проміжні прогони (§ 1.3)', () => {
		const cancelling = files.filter((f) =>
			/cancel-in-progress:\s*true/.test(sourceOf(f))
		);
		expect(
			cancelling,
			'скасований прогін ховає гейт, який жодного разу не виконувався'
		).toEqual([]);
	});

	/**
	 * CODE-QUALITY-v8 § 6.1 — гейти виконуються на Pull Request.
	 *
	 * Доти обидва workflow були прив'язані до викладання: `push` у `main` і
	 * ручний запуск. На PR не виконувалося нічого — а `.github/dependabot.yml`
	 * щотижня відкриває до п'яти PR з оновленнями залежностей, тобто рівно той
	 * стан, який DEPENDENCIES-v8 § 3.1 називає «автоматичне злиття оновлень без
	 * запуску тестів».
	 *
	 * Перевіряється саме тригер, а не назва файлу: гейт може переїхати в інший
	 * workflow, і це нормально; зникнути з PR — ні.
	 */
	it('є workflow, що запускається на pull_request (§ 6.1)', () => {
		const onPullRequest = files.filter((f) => /^\s{1,4}pull_request:/m.test(sourceOf(f)));
		expect(
			onPullRequest.length,
			'жоден workflow не запускається на PR — оновлення залежностей приїжджають неперевіреними'
		).toBeGreaterThan(0);
	});

	/**
	 * Пункт поза шаблоном пакета — знайдений у цих проєктах.
	 *
	 * Workflow кличе npm-скрипти за іменем. Перейменування скрипта в
	 * `package.json` не ламає нічого локально й нічого не ламає на збірці: воно
	 * ламає рівно той крок CI, який на нього посилався, і виявляється це вже
	 * після push. Тут це видно до коміту.
	 */
	it('кожен npm-скрипт із workflow існує в package.json', () => {
		const referenced = [...all.matchAll(/run:\s*npm run ([\w:-]+)/g)].map((m) => m[1]);
		const missing = [...new Set(referenced)].filter((name) => !(name in scripts));
		expect(
			missing,
			`workflow кличе скрипт, якого немає — крок упаде на push: ${missing.join(', ')}`
		).toEqual([]);
	});
});

/**
 * Впала перевірка не забирає звіт у решти (CI-CD-AND-TOOLS-v8 § 1.8).
 *
 * ## Що саме ловить ця перевірка
 *
 * GitHub за замовчуванням НЕ запускає кроки після впалого. Job із рядка
 * `check → lint → test → audit` при червоному `lint` дає один рядок у звіті —
 * і про тести з аудитом відомо не «зелені» й не «червоні», а НІЧОГО.
 *
 * Це не гіпотеза. У `teatralo4ka` крок `Lint` падав на 26 помилках, і `gh run
 * list` показував `failure` на шести послідовних пушах; три наступні гейти
 * (`Unit tests`, `Audit`, `Validate content`) за ці дві доби не виконалися ані
 * разу. Червоне при цьому стало звичним фоном — тобто гірше за зелену галочку
 * без прогону, бо виглядає як чесне падіння.
 *
 * ## Межа правила
 *
 * Під нього підпадають лише НЕЗАЛЕЖНІ СТАТИЧНІ гейти — ті, яким потрібні самі
 * `node_modules`: типи, lint, юніт-тести, аудит, валідація вмісту, паритет мов.
 * Кроки з побічним ефектом (`build`, `deploy`, `upload-pages-artifact`) і кроки,
 * що залежать від `build/` або від браузерів (`check:build`, `check:bundle`,
 * Playwright, Lighthouse), `!cancelled()` НЕ отримують: запускати їх після
 * впалої збірки означає не звіт, а шум.
 *
 * Гейт визначається за КОМАНДОЮ, а не за назвою кроку: назви в проєктах різні
 * («Lint» / «Linting», «Unit Tests» / «Run unit tests»), команди однакові.
 *
 * Перший гейт у job `if` не потребує: до нього ще ніщо не падало.
 */
const INDEPENDENT_GATE =
	/npm run check(?![:\w])|npm run check:(worker|i18n)\b|npm run lint(?![:\w])|npm (run )?test(?!:(e2e|watch))(:\w+)?(?!\S)|npm audit\b|npm run validate-content\b/;
/** Виглядає гейтом, але залежить від збірки чи браузерів. */
const BUILD_DEPENDENT = /check:build|check:bundle|check:rules|playwright|lhci|npm run build/;

/**
 * Кроки одного workflow у порядку появи, з розбиттям на job.
 *
 * Розбір регуляркою, а не YAML-парсером: `js-yaml` є не в кожному проєкті, а
 * додавати залежність заради однієї перевірки дорожче за розбір рівнів відступу.
 * Ціна — перевірка «розбір живий» нижче, без якої порожній результат читався б
 * як «порушень немає».
 */
function stepsOf(text: string): { job: string; name: string; body: string }[] {
	const steps: { job: string; name: string; body: string }[] = [];
	const lines = text.split('\n');
	let job = '(поза job)';
	for (let i = 0; i < lines.length; i++) {
		const jobLine = /^ {2}([A-Za-z0-9_.-]+):\s*$/.exec(lines[i]);
		if (jobLine) {
			job = jobLine[1];
			continue;
		}
		const stepLine = /^(\s+)- name: (.*)$/.exec(lines[i]);
		if (!stepLine) continue;
		const [, indent, name] = stepLine;
		let j = i + 1;
		// Коментар на рівні кроку належить НАСТУПНОМУ кроку: інакше рядок
		// «# playwright install без кешу…» приліплюється до `Audit dependencies`
		// і виключає його як залежний від браузерів.
		while (
			j < lines.length &&
			!new RegExp(`^${indent}- `).test(lines[j]) &&
			!new RegExp(`^${indent}#`).test(lines[j])
		) {
			j++;
		}
		steps.push({ job, name: name.trim(), body: lines.slice(i, j).join('\n') });
	}
	return steps;
}

describe('гейти не ховають один одного (CI-CD-AND-TOOLS-v8 § 1.8)', () => {
	// Свій перелік файлів, а не спільний `all`: назва файлу потрібна в тексті
	// помилки, а склеєний вміст її втрачає.
	const gates = files.flatMap((file) =>
		stepsOf(readFileSync(`${DIR}/${file}`, 'utf8'))
			.filter((s) => INDEPENDENT_GATE.test(s.body) && !BUILD_DEPENDENT.test(s.body))
			.map((s) => ({ ...s, file }))
	);

	it('розбір живий: незалежні статичні гейти знайдено', () => {
		expect(
			gates.length,
			'у workflow не знайдено жодного кроку з `npm run check/lint/test/audit` — ' +
				'або розбір зламався, або гейтів справді немає; обидва випадки червоні'
		).toBeGreaterThan(0);
	});

	it('кожен гейт після першого в job несе `if: !cancelled()`', () => {
		const seen = new Set<string>();
		const offenders: string[] = [];
		for (const gate of gates) {
			const key = `${gate.file}::${gate.job}`;
			const isFirst = !seen.has(key);
			seen.add(key);
			if (isFirst) continue;
			if (!/!cancelled\(\)/.test(gate.body)) {
				offenders.push(`${gate.file} → ${gate.job} → «${gate.name}»`);
			}
		}
		expect(
			offenders,
			`перший червоний гейт забере звіт у цих кроків:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('`continue-on-error` не стоїть на гейтах', () => {
		// `continue-on-error: true` — не альтернатива `!cancelled()`, а
		// протилежність: job зеленіє при червоному гейті. Це рівно те, що § 1.6
		// забороняє.
		const lax = gates
			.filter((g) => /continue-on-error:\s*true/.test(g.body))
			.map((g) => `${g.file} → «${g.name}»`);
		expect(lax, `гейт, який не валить job:\n${lax.join('\n')}`).toEqual([]);
	});
});

/**
 * `--legacy-peer-deps` у CI (DEPENDENCIES-v8 § 2.4, `DEP-TOOL-ENGINE-CONFLICT`).
 *
 * Прапорець знімає перевірку peer-залежностей для УСЬОГО дерева — тобто гасить
 * сигнал там, де він потрібен, заради одного пакета, який його породив. І
 * головне: він переживає причину. У `MindStep` його додали 2026-03-03 комітом
 * «resolve Vite 7 dependency conflict» і не знімали пів року; на 2026-08-23
 * `npm ci` без прапорця проходить чисто, тобто екосистема наздогнала Vite 7
 * давно, а перевірка peer-залежностей лишалася вимкненою.
 *
 * Правильний спосіб для інструмента, чиї транзитивні `engines` конфліктують із
 * проєктом, — обгортка над `npx` із послабленням РІВНО для дочірнього процесу
 * (`scripts/firebase-cli.mjs`), а не прапорець на весь install.
 *
 * Перевірка тримає нуль: у шести проєктах із семи прапорця не було ніколи, і
 * ратчет на нулі коштує нічого — зате перша ж спроба «швидко полагодити install»
 * стає видимою в прогоні, а не через пів року.
 */
describe('install у CI не глушить перевірку peer-залежностей', () => {
	it('жоден workflow не кличе npm із --legacy-peer-deps', () => {
		const offenders = files.filter((file) =>
			/--legacy-peer-deps/.test(readFileSync(`${DIR}/${file}`, 'utf8'))
		);
		expect(
			offenders,
			'прапорець знімає перевірку peer-залежностей для всього дерева; ' +
				'для інструмента з конфліктом engines є обгортка над npx (DEPENDENCIES-v8 § 2.4):\n' +
				offenders.join('\n')
		).toEqual([]);
	});

	it('перевірка жива: workflow прочитано', () => {
		expect(files.length, 'у .github/workflows немає жодного yml').toBeGreaterThan(0);
	});
});

/**
 * Версія Node в трьох місцях одразу (DEPENDENCIES-v8 § 2.3, CI-CD-AND-TOOLS-v8 § 1.2).
 *
 * `engines.node`, `.nvmrc` і `node-version` у workflow мусять називати ту саму
 * мажорну версію. Розбіжність дає найнеприємніший клас падіння: локально не
 * відтворюється взагалі, бо локально стоїть третя версія.
 *
 * Аудит v8 (прохід 4) заміряв стан: із семи проєктів трійку мали ДВА
 * (`VetCrewGames`, `teatralo4ka`), а `as5.odesa.ua` тримав у CI Node 20 — версію,
 * що вийшла з підтримки 2026-04-30 — і не мав ні `engines`, ні `.nvmrc`, тобто
 * розходження не бачив жоден гейт.
 *
 * Форма `engines.node` — `">=X.Y.Z"`: перевірка порівнює мажори, а не рядки,
 * інакше `">= 22"` і `">=22.12.0"` читалися б як розбіжність.
 */
describe('версія Node узгоджена в трьох місцях (§ 2.3)', () => {
	/** Найбільший мажор із діапазону виду `>=22.12.0`; null, якщо форма інша. */
	const majorOfRange = (range: string): number | null => {
		const m = /^>=\s*(\d+)/.exec(range.trim());
		return m ? Number(m[1]) : null;
	};

	it('engines.node, .nvmrc і node-version у CI називають той самий мажор', () => {
		const pkgJson = JSON.parse(readFileSync('package.json', 'utf8')) as {
			engines?: Record<string, string>;
		};
		const engines = pkgJson.engines?.node;
		expect(engines, 'у package.json немає engines.node').toBeDefined();

		const enginesMajor = majorOfRange(engines as string);
		expect(enginesMajor, `engines.node="${engines}" не у формі ">=X"`).not.toBeNull();

		expect(
			existsSync('.nvmrc'),
			'немає .nvmrc — локальна версія ні з чим не звіряється'
		).toBe(true);
		const nvmrcMajor = Number(
			readFileSync('.nvmrc', 'utf8').trim().replace(/^v/, '').split('.')[0]
		);
		expect(nvmrcMajor, '.nvmrc не містить номера версії').not.toBeNaN();

		const ciMajors = files
			.flatMap((file) => [
				...readFileSync(`${DIR}/${file}`, 'utf8').matchAll(/node-version:\s*["']?v?(\d+)/g)
			])
			.map((m) => Number(m[1]));
		expect(
			ciMajors.length,
			'у workflow не знайдено node-version — перевірка мертва'
		).toBeGreaterThan(0);

		const mismatch = [...new Set(ciMajors.filter((v) => v !== nvmrcMajor))];
		expect(
			mismatch,
			`node-version у CI (${mismatch.join(', ')}) розходиться з .nvmrc (${nvmrcMajor})`
		).toEqual([]);
		expect(
			nvmrcMajor,
			`.nvmrc ${nvmrcMajor} не збігається з мажором engines.node "${engines}"`
		).toBe(enginesMajor);
	});
});
