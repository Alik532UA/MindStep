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
