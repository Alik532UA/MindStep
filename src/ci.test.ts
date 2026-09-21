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
 * ВМІСТ WORKFLOW ЧИТАЄТЬСЯ ЛИШЕ ЧЕРЕЗ ЦЕ, і `\r\n` тут нормалізується.
 *
 * Без нормалізації розбір кроків нижче не працює ВЗАГАЛІ: у JavaScript `.` не
 * збігається з `\r` — це термінатор рядка, — а `$` без прапорця `m` стоїть
 * перед `\n`, але не перед `\r`. Тому `/^(\s+)- name: (.*)$/` на рядку
 * «      - name: Install dependencies\r» не збігається жодного разу.
 *
 * Наслідок був такий: у CI чекаут із `\n`, і розбір бачив усі кроки; на
 * Windows-чекауті цього репозиторію файли лежать із `\r\n` — і той самий розбір
 * бачив НУЛЬ. Тобто `npm run test:report` локально червонів на тому, що в CI
 * зелене, а це гірше за відсутню перевірку: вона привчає не дивитися на червоне.
 *
 * Зловила це рівно перевірка живості нижче, і саме для цього вона й стоїть.
 *
 * Нормалізація на МЕЖІ, а не в розборі: наступна регулярка без `m`, яку тут
 * допишуть, наступила б на те саме.
 */
const readWorkflow = (file: string): string =>
	readFileSync(`${DIR}/${file}`, 'utf8').replace(/\r\n/g, '\n');

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

const sourceOf = (file: string): string => withoutComments(readWorkflow(file));
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

/**
 * БЛОК БЕЗ ЖОДНОГО КЛЮЧА — валідний YAML і НЕВАЛІДНИЙ workflow.
 *
 * `env:`, під яким лишилися самі коментарі, YAML читає як `null` і не
 * скаржиться. Валідатор GitHub Actions скаржиться: «Unexpected value ''» — і
 * робить це в найгірший спосіб. Прогін створюється НА БУДЬ-ЯКІЙ гілці,
 * ігноруючи `on:`, бо `on:` він прочитати не встиг; у прогоні НУЛЬ джобів, а
 * в переліку він виглядає як звичайне падіння деплою.
 *
 * Заміряно 2026-09-21: прогін 35566515977, гілка `dev`, хоча `deploy.yml`
 * тригериться лише на `main`. Причина — прибрали останню змінну з `env:`, а
 * докблок над нею лишили. Ні `js-yaml`, ні `svelte-check`, ні решта гейтів
 * цього не бачать: файл синтаксично правильний.
 */
describe('workflow проходить валідацію GitHub, а не лише YAML', () => {
	const BLOCK_KEYS = ['env', 'with', 'outputs', 'inputs', 'permissions', 'defaults'];

	/** Порожні блоки у файлі: рядки виду `env:` без жодного ключа під ними. */
	function emptyBlocks(file: string): string[] {
		const lines = readWorkflow(file).split('\n');
		const bad: string[] = [];
		lines.forEach((line, i) => {
			const m = /^(\s*)([A-Za-z_-]+):\s*$/.exec(line);
			if (!m || !BLOCK_KEYS.includes(m[2])) return;
			let j = i + 1;
			while (j < lines.length && (lines[j].trim() === '' || /^\s*#/.test(lines[j]))) {
				if (lines[j].trim() === '') break;
				j++;
			}
			const next = /^(\s*)\S/.exec(lines[j] ?? '');
			if (!next || next[1].length <= m[1].length) bad.push(`${file}:${i + 1} — «${m[2]}»`);
		});
		return bad;
	}

	it('жоден блок не лишився без ключів', () => {
		const bad = files.flatMap(emptyBlocks);
		expect(
			bad,
			'блок без ключів робить файл невалідним для Actions, і прогін тоді ' +
				'запускається на ЧУЖИХ гілках із нулем джобів:\n' + bad.join('\n')
		).toEqual([]);
	});

	/*
	 * Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1): на зразку з порожнім
	 * `env:` перевірка мусить знаходити рівно одне, а на заповненому — нічого.
	 * Без цього вона зеленіла б і тоді, коли розбір перестав збігатися взагалі.
	 */
	it('перевірка жива: ловить зразок і не чіпає правильний', () => {
		const lines = (s: string) => s.split('\n');
		const scan = (text: string) => {
			const ls = lines(text);
			return ls.filter((line, i) => {
				const m = /^(\s*)([A-Za-z_-]+):\s*$/.exec(line);
				if (!m || !BLOCK_KEYS.includes(m[2])) return false;
				let j = i + 1;
				while (j < ls.length && /^\s*#/.test(ls[j])) j++;
				const next = /^(\s*)\S/.exec(ls[j] ?? '');
				return !next || next[1].length <= m[1].length;
			}).length;
		};
		expect(scan('        env:\n          # самий коментар\n\n      - name: далі')).toBe(1);
		expect(scan('        env:\n          KEY: value\n')).toBe(0);
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
 * ## Три класи кроків (ревізія 9.5 канону)
 *
 * Раніше тут було два класи, і другий формулювався як бланкетне виключення:
 * усе, що залежить від `build/` або від браузерів, умови не отримувало зовсім.
 * Причина була слушна — запускати такий крок після впалої збірки означає не
 * звіт, а шум, — але наслідок неправильний: під цим виключенням ті самі гейти
 * мовчали й тоді, коли збірка ціла, а впав, скажімо, лінтер. Прохід по
 * дев'ятьох проєктах 2026-09-16 показав, що так зробили сім із них.
 *
 *   НЕЗАЛЕЖНИЙ ГЕЙТ ....... `!cancelled()`
 *     типи, lint, юніт-тести, аудит, валідація вмісту, паритет мов — і E2E:
 *     Playwright піднімає ВЛАСНИЙ preview, а не читає теку для деплою.
 *
 *   ПІСЛЯЗБІРКОВИЙ ГЕЙТ ... `!cancelled() && steps.<build>.outcome == 'success'`
 *     `check:build`, `check:bundle`, `git diff --exit-code`, Lighthouse.
 *     Дає звіт щоразу, коли є що міряти, і мовчить лише тоді, коли нема.
 *
 *   ПОБІЧНИЙ ЕФЕКТ ........ умови немає
 *     `build`, `deploy`, `upload-pages-artifact`. Деплой після впалого гейта —
 *     це і є те, від чого гейт захищає.
 *
 * Гейт визначається за КОМАНДОЮ, а не за назвою кроку: назви в проєктах різні
 * («Lint» / «Linting», «Unit Tests» / «Run unit tests»), команди однакові.
 *
 * Перший гейт у job `if` не потребує: до нього ще ніщо не падало.
 */
const INDEPENDENT_GATE =
	/npm run check(?![:\w])|npm run check:(worker|i18n|tests)\b|npm run lint(?![:\w])|npm (run )?test(?!:(e2e|watch))(:\w+)?(?!\S)|npm run audit:ci\b|npm run test:e2e\b|npx playwright test|npm run validate-content\b/;
/** Виглядає гейтом, але залежить від збірки чи браузерів. */
/**
 * Гейти, яким потрібна ЗІБРАНА тека, — третій клас із ревізії 9.5 канону.
 *
 * Раніше цей перелік був ширший (сюди входили Playwright і `check:rules`), і
 * кроки з нього виводилися з-під правила зовсім. Прохід по дев'ятьох проєктах
 * 2026-09-16 показав, чим це коштувало: під бланкетним виключенням вони мовчать
 * і тоді, коли збірка ціла, а впав, скажімо, лінтер. Тепер вони не виключені, а
 * мають ВЛАСНУ умову — `steps.<build>.outcome == 'success'` (§ 1.8).
 *
 * Playwright звідси прибрано свідомо: він піднімає власний `preview`, а не
 * читає теку для деплою, тобто це незалежний гейт. Під старим прочитанням його
 * забирав будь-який попередній червоний крок — включно з `npm audit`.
 */
const BUILD_DEPENDENT = /check:build|check:bundle|git diff --exit-code|lhci/;

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
		stepsOf(readWorkflow(file))
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

	/**
	 * Післязбіркові гейти: `!cancelled() && steps.<build>.outcome == 'success'`
	 * (CI-CD-AND-TOOLS-v9 § 1.8, третій клас).
	 *
	 * Голе `!cancelled()` тут було б гірше за відсутність умови: крок побіг би й
	 * після впалої збірки й дав вторинне падіння «теки немає», яке ховає справжню
	 * причину. А без умови взагалі — мовчить і тоді, коли міряти є що.
	 */
	/**
	 * Підготовка гейта успадковує умову гейта (CI-CD-AND-TOOLS-v9 § 1.8, 9.6).
	 *
	 * Заміряно в `Slovko`, прогін 35075608772 — перший після переходу на три
	 * класи. `Unit tests` упав, E2E під новим `!cancelled()` чесно побіг далі, а
	 * `Install Playwright chromium` умови не мав і його пропустили. Замість
	 * одного справжнього дефекту у звіті стало сорок рядків
	 * `browserType.launch: Executable doesn't exist` — тобто стан ГІРШИЙ за той,
	 * що був до послаблення: доти E2E чесно пропускали.
	 */
	it('підготовка E2E несе ту саму умову, що й сам E2E', () => {
		const PREP = /playwright install|ms-playwright/;
		const E2E_STEP = /playwright test|npm run test:e2e/;
		const offenders: string[] = [];

		for (const file of files) {
			const steps = stepsOf(readFileSync(`${DIR}/${file}`, 'utf8'));
			const byJob = new Map<string, typeof steps>();
			for (const step of steps) {
				if (!byJob.has(step.job)) byJob.set(step.job, []);
				byJob.get(step.job)!.push(step);
			}
			for (const [job, jobSteps] of byJob) {
				const gate = jobSteps.find((s) => E2E_STEP.test(s.body) && !PREP.test(s.body));
				if (!gate || !/!cancelled\(\)/.test(gate.body)) continue;
				for (const step of jobSteps) {
					if (!PREP.test(step.body)) continue;
					if (/!cancelled\(\)/.test(step.body)) continue;
					offenders.push(`${file} → ${job} → «${step.name}»`);
				}
			}
		}

		expect(
			offenders,
			`E2E побіжить без браузерів і впаде не на дефекті:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('післязбірковий гейт несе умову на результат збірки', () => {
		const afterBuild = files.flatMap((file) =>
			stepsOf(readWorkflow(file))
				.filter((s) => BUILD_DEPENDENT.test(s.body))
				.map((s) => ({ ...s, file }))
		);
		const seenBuild = new Set<string>();
		const offenders: string[] = [];
		for (const gate of afterBuild) {
			const key = `${gate.file}::${gate.job}`;
			const isFirst = !seenBuild.has(key);
			seenBuild.add(key);
			if (isFirst) continue;
			if (!/!cancelled\(\)\s*&&\s*steps\.\w+\.outcome\s*==\s*'success'/.test(gate.body)) {
				offenders.push(`${gate.file} → ${gate.job} → «${gate.name}»`);
			}
		}
		expect(
			offenders,
			`післязбірковий гейт без умови на збірку:\n${offenders.join('\n')}`
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
			/--legacy-peer-deps/.test(readWorkflow(file))
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
				...readWorkflow(file).matchAll(/node-version:\s*["']?v?(\d+)/g)
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

/**
 * Артефакт збірки не комітиться (CI-CD-AND-TOOLS-v8 § 1.5).
 *
 * ## Що саме тут зламалося
 *
 * Єдина машинна перевірка цього правила — `git diff --exit-code` ПІСЛЯ збірки:
 * якщо `npm run build` змінив хоч один відстежуваний файл, значить у репозиторії
 * лежить те, що мусить народжуватися з джерел.
 *
 * Крок був у `ci.yml` і `deploy-dev.yml`. У `deploy.yml` — тому самому, що
 * викладає в ПРОДАКШН, — лишився тільки коментар, який його описує; сам крок
 * зник, а коментар приліпився до наступного (`Lighthouse Audit`). Читалося це
 * як «перевірка є»: рівно той хибно-зелений, що й «скрипт існує й у CI не
 * викликається».
 *
 * ## Чому перевірка саме така
 *
 * Пара «є `npm run build` — є `git diff --exit-code` після нього», а не
 * «в кожному workflow мусить бути `git diff`»: workflow без збірки цього кроку
 * не потребує, і вимагати від нього означало б червоніти без порушення.
 *
 * Порядок перевіряється теж. `git diff` ПЕРЕД збіркою доводить лише те, що
 * чекаут чистий, — це не те саме твердження, і воно завжди істинне.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати крок із
 * `deploy.yml` — перевірка називає файл і job.
 */
describe('збірка не лишає слідів у репозиторії (CI-CD-AND-TOOLS-v8 § 1.5)', () => {
	/** Кроки job у порядку появи; коментарі вже відрізані. */
	const jobsWithBuild = files.flatMap((file) => {
		const steps = stepsOf(sourceOf(file));
		const jobs = [...new Set(steps.map((s) => s.job))];
		return jobs
			.map((job) => ({ file, job, steps: steps.filter((s) => s.job === job) }))
			.filter((entry) => entry.steps.some((s) => /run:\s*npm run build\b/.test(s.body)));
	});

	it('розбір живий: job зі збіркою знайдено', () => {
		expect(
			jobsWithBuild.length,
			'у workflow немає жодного job із `npm run build` — або розбір зламався, ' +
				'або збірки в CI немає; обидва випадки червоні'
		).toBeGreaterThan(0);
	});

	it('після кожної збірки стоїть git diff --exit-code', () => {
		const offenders: string[] = [];
		for (const { file, job, steps } of jobsWithBuild) {
			const build = steps.findIndex((s) => /run:\s*npm run build\b/.test(s.body));
			const diff = steps.findIndex((s) => /git diff --exit-code/.test(s.body));
			if (diff === -1) {
				offenders.push(`${file} → ${job}: збірка є, «git diff --exit-code» немає`);
			} else if (diff < build) {
				offenders.push(
					`${file} → ${job}: «git diff» стоїть ПЕРЕД збіркою — це доводить лише чистий чекаут`
				);
			}
		}
		expect(
			offenders,
			'артефакт збірки в репозиторії видно лише цим кроком: ' +
				`ні типи, ні lint, ні тести його не бачать:\n${offenders.join('\n')}`
		).toEqual([]);
	});
});

/**
 * Мажор дії — з переліку перевірених, а не з номера релізу
 * (CI-CD-AND-TOOLS-v9 § 1.9, `CI-ACTION-RUNTIME`, `GATE-CI-PIPELINE`).
 *
 * ## Чому номер релізу нічого не каже
 
 * GitHub виводить із експлуатації РАНТАЙМ дії (`runs.using` в її `action.yml`),
 * а не її версію. `node16` уже прибраний, `node20` наступний — і попередження
 * «uses node20 which is deprecated» приходить від дії, у якої мажор може бути
 * найсвіжішим. Канон заміряв це на двох: `upload-artifact@v5` і
 * `configure-pages@v5` стояли на `node20` при найновішому на той час мажорі.
 *
 * Тобто «підняти мажор» — не відповідь: підняти можна лише туди, де рантайм
 * справді новий, і перевірити це можна лише подивившись в `action.yml`
 * потрібного тега. Мережі в прогоні немає, тож перевірка тримає ПЕРЕЛІК
 * мажорів, які людина вже подивилася — а не намагається дізнатися це сама.
 *
 * ## Що це дає
 *
 * Нова дія або новий мажор наявної не проїжджають мовчки: прогін червоніє з
 * назвою й вимагає одного разу відкрити `action.yml` і дописати рядок. Саме
 * цього й бракувало — правило § 1.9 існувало, а гейта, який його ловить, не
 * було в жодному з семи проєктів (звірка 8.12).
 *
 * Зворотний експеримент (§ 1.1): підняти `actions/checkout@v7` на `@v8` —
 * перевірка червоніє з назвою дії й обома мажорами.
 */
describe('рантайм кожної дії CI перевірений людиною (§ 1.9)', () => {
	/**
	 * Дія → мажори, чий `runs.using` подивилися очима.
	 *
	 * Значення — саме перелік, а не «не нижче»: рантайм не монотонний за
	 * версією, і `@v5` на `node24` при `@v4` на `node20` — звичайна річ.
	 * Дата поруч — коли дивилися.
	 */
	const VERIFIED: Record<string, { majors: string[]; checked: string }> = {
		'actions/checkout': { majors: ['v7'], checked: '2026-09-10' },
		'actions/setup-node': { majors: ['v7'], checked: '2026-09-10' },
		'actions/setup-java': { majors: ['v5'], checked: '2026-09-10' },
		// `runs.using: node24` — прочитано в action.yml тега, а не виведено з номера.
		'actions/cache': { majors: ['v6'], checked: '2026-09-16' },
		'actions/upload-artifact': { majors: ['v7'], checked: '2026-09-10' },
		// Не з `actions/`: власний рантайм, дивиться той самий `action.yml`.
		'peaceiris/actions-gh-pages': { majors: ['v4'], checked: '2026-09-10' }
	};

	/** `uses: owner/name@vN` → пари. Локальні дії (`./…`) не мають рантайму GitHub. */
	const used = files.flatMap((file) =>
		[...sourceOf(file).matchAll(/uses:\s*([\w-]+\/[\w.-]+)@(v\d+)/g)].map((match) => ({
			file,
			action: match[1],
			major: match[2]
		}))
	);

	it('розбір живий: дії у workflow знайдено', () => {
		expect(
			used.length,
			'жодного `uses:` у workflow — або розбір зламався, або дій справді немає'
		).toBeGreaterThan(3);
	});

	it('кожна дія й мажор є в переліку перевірених', () => {
		const unknown = used
			.filter(({ action, major }) => !VERIFIED[action]?.majors.includes(major))
			.map(
				({ file, action, major }) =>
					`${file}: ${action}@${major}` +
					(VERIFIED[action]
						? ` (перевірено лише ${VERIFIED[action].majors.join(', ')})`
						: ' (дії немає в переліку зовсім)')
			);
		expect(
			[...new Set(unknown)],
			'відкрити `action.yml` цього тега, подивитися `runs.using` і дописати рядок у ' +
				`VERIFIED — номер релізу про рантайм не каже нічого:\n${[...new Set(unknown)].join('\n')}`
		).toEqual([]);
	});

	it('у переліку немає дій, які більше не використовуються', () => {
		const stale = Object.keys(VERIFIED).filter(
			(action) => !used.some((entry) => entry.action === action)
		);
		expect(
			stale,
			`ці рядки VERIFIED застаріли — дію прибрали з workflow:\n${stale.join('\n')}`
		).toEqual([]);
	});
});

/**
 * Вивантажується та збірка, яку перевіряв гейт
 * (CI-CD-AND-TOOLS-v9 § 1.10, `CI-DEPLOY-ORDER`, HIGH, `GATE-CI-PIPELINE`).
 *
 * ## Що сталося в сусіда
 *
 * В `adoptananimal` між кроком збірки й вивантаженням стояв E2E з ВЛАСНОЮ
 * збіркою. Він перезаписав `build/` іншим `BASE_PATH`, і на хостинг поїхав
 * артефакт, якого не бачив жоден гейт: 229 сторінок із canonical на чужий
 * корінь. Усі перевірки при цьому були зелені — вони дивилися на попередній
 * вміст того самого каталогу.
 *
 * ## Чому саме порядок, а не «є крок перевірки»
 *
 * `npm run check:build` може стояти й бути зеленим — він читає `build/` у той
 * момент, коли його кличуть. Твердження «вивантажено перевірене» — про
 * ПОСЛІДОВНІСТЬ: остання команда, що пише в `build/`, мусить бути тією самою
 * збіркою, після якої відпрацювали гейти.
 *
 * Крок `Preserve dev folder` — законний виняток і названий явно: він
 * розпаковує з гілки публікації підкаталог `build/dev/`, тобто дописує
 * прев'ю-збірку поруч, не торкаючись жодного файлу, який перевіряв гейт. Без
 * нього кожен деплой у продакшн зносив би прев'ю.
 *
 * Зворотний експеримент (§ 1.1): переставити крок `Check built output` перед
 * `Build` — перевірка червоніє й називає обидва кроки.
 */
describe('на хостинг їде перевірена збірка (§ 1.10)', () => {
	/** Команди, які пишуть у `build/` цілком. */
	const REBUILDS = /npm run build\b|vite build\b|npm run test:e2e\b|node scripts\/robust-test/;
	/** Дописує в `build/`, не переписуючи перевіреного — виняток названий. */
	const APPENDS_ONLY = /tar -x -C build\//;
	/** Крок, що забирає вміст `build/` назовні. */
	const PUBLISHES = /actions-gh-pages|upload-pages-artifact|publish_dir/;

	const jobs = files.flatMap((file) => {
		const steps = stepsOf(sourceOf(file));
		return [...new Set(steps.map((s) => s.job))].map((job) => ({
			file,
			job,
			steps: steps.filter((s) => s.job === job)
		}));
	});

	const publishing = jobs.filter(({ steps }) => steps.some((s) => PUBLISHES.test(s.body)));

	it('розбір живий: job із викладанням знайдено', () => {
		expect(
			publishing.length,
			'жоден workflow не викладає `build/` — або розбір зламався, або деплою немає'
		).toBeGreaterThan(0);
	});

	it('між збіркою й викладанням ніщо не переписує build/', () => {
		const offenders: string[] = [];
		for (const { file, job, steps } of publishing) {
			const publish = steps.findIndex((s) => PUBLISHES.test(s.body));
			const builds = steps
				.map((step, index) => ({ step, index }))
				.filter(({ step }) => REBUILDS.test(step.body) && !APPENDS_ONLY.test(step.body));
			if (builds.length === 0) {
				offenders.push(`${file} → ${job}: викладання є, а збірки в цьому job немає`);
				continue;
			}
			const last = builds[builds.length - 1];
			const verifiers = steps
				.map((step, index) => ({ step, index }))
				.filter(({ step }) => /check:build|check:bundle/.test(step.body));
			for (const verifier of verifiers) {
				if (verifier.index < last.index) {
					offenders.push(
						`${file} → ${job}: «${verifier.step.name}» стоїть ПЕРЕД останнім записом у build/ ` +
							`(«${last.step.name}») — перевірено не той артефакт, що поїде`
					);
				}
				if (verifier.index > publish) {
					offenders.push(
						`${file} → ${job}: «${verifier.step.name}» стоїть ПІСЛЯ викладання — ` +
							'артефакт уже на хостингу'
					);
				}
			}
			if (verifiers.length === 0) {
				offenders.push(`${file} → ${job}: збірка викладається без жодного гейта над build/`);
			}
		}
		expect(
			offenders,
			'вивантажується той вміст `build/`, який лишила ОСТАННЯ команда, що в нього писала:\n' +
				offenders.join('\n')
		).toEqual([]);
	});
});

/**
 * КОЖЕН E2E-ФАЙЛ ВЕРХНЬОГО РІВНЯ НАЗВАНИЙ У КОМАНДІ CI
 * (AI-AGENT-PITFALLS-v9 § 1.3, той самий клас, що `PIT-TEST-DISCOVERY-PROCESS`).
 *
 * ## Що ламається без цього
 *
 * Кроки e2e в `ci.yml` і `deploy.yml` перелічують файли ПОІМЕННО, і це свідоме
 * рішення: `tests/e2e/virtual/` — десять важких наборів, `tests/e2e/online/`
 * потребує емулятора Firebase, тож каталогом цілком їх запускати не можна.
 * Ціна рішення в тому, що доданий e2e-файл треба ще й вписати в два workflow —
 * а забути це нічого не коштує: прогін зелений, файл просто не виконується.
 *
 * Ловиться саме верхній рівень `tests/e2e/`: підкаталоги — це і є той виняток,
 * заради якого перелік явний. Тобто новий файл поруч із наявними мусить або
 * потрапити в команду, або переїхати в підкаталог — і те, і те видно в diff.
 *
 * Приводом став `touch-targets.spec.ts`, доданий 2026-09-11: без цієї перевірки
 * він проходив би лише локально.
 *
 * ## Зворотний експеримент (§ 1.1) — прогнано
 *
 * Прибрати `tests/e2e/reflow.spec.ts` з команди в `ci.yml` — перевірка називає
 * файл і workflow.
 */
describe('перелік e2e у CI повний (AI-AGENT-PITFALLS-v9 § 1.3)', () => {
	const E2E_DIR = 'tests/e2e';
	const topLevel = existsSync(E2E_DIR)
		? readdirSync(E2E_DIR, { withFileTypes: true })
				.filter((entry) => entry.isFile() && /\.spec\.ts$/.test(entry.name))
				.map((entry) => `${E2E_DIR}/${entry.name}`)
		: [];

	/**
	 * Файли, які запускає не крок e2e, а окрема команда, — і причина в
	 * `PROJECT-CONTEXT.md`. Перелік лише скорочується.
	 */
	const RUN_ELSEWHERE = new Set<string>([]);

	/** Workflow, у яких крок e2e взагалі є: `deploy-dev.yml` його не має навмисно. */
	const withE2E = files.filter((file) => /playwright test /.test(readWorkflow(file)));

	it('перевірка жива: e2e-файли й команди знайдено', () => {
		expect(topLevel.length, `у ${E2E_DIR} немає жодного .spec.ts верхнього рівня`).toBeGreaterThan(
			3
		);
		expect(
			withE2E.length,
			'жоден workflow не запускає playwright — перевірка нижче нічого не стереже'
		).toBeGreaterThan(0);
	});

	it('жоден e2e-файл верхнього рівня не лишився поза командою', () => {
		const missing: string[] = [];
		for (const file of withE2E) {
			const body = readWorkflow(file);
			for (const spec of topLevel) {
				if (RUN_ELSEWHERE.has(spec)) continue;
				if (!body.includes(spec)) missing.push(`${file}: не запускає ${spec}`);
			}
		}
		expect(
			missing,
			'e2e-файл, якого немає в команді, не виконується ніде, а прогін зелений:\n' +
				missing.join('\n')
		).toEqual([]);
	});
});
