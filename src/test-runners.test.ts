// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { checkTestDiscovery } from '../scripts/check-test-discovery.mjs';

/**
 * Кожен файл перевірки належить раннеру, який у проєкті справді є
 * (AI-AGENT-PITFALLS-v9 § 1.3, `GATE-TEST-RUNNERS`).
 *
 * ## Чому тут лише виклик, а логіка — у `scripts/check-test-discovery.mjs`
 *
 * Уся логіка жила тут, і це був той рідкісний випадок, коли перевірка не могла
 * впасти на власному дефекті. Вона стежить за маскою `test.include` у
 * `vite.config.ts` — а звуження маски до `src/**\/*.spec.ts` викинуло б із
 * прогону всі `.test.ts`, тобто разом із нею самою. Підсумковий рядок vitest
 * звітував би успіх по тому, що лишилося, і читався б як «усе перевірено».
 *
 * v9 називає цей клас окремо (§ 1.3.1, `PIT-TEST-DISCOVERY-PROCESS`) і вимагає
 * ОКРЕМОГО ПРОЦЕСУ. Він є: `npm run check:tests`, крок у трьох workflow. Цей
 * файл лишається другим прогоном тієї самої реалізації — дешевим і зручним
 * локально; той, що виживає при зіпсованій масці, — не він.
 *
 * ## Що лишилося саме тут
 *
 * Дві речі, яких скрипт про себе сказати не може: що він існує і що його
 * справді хтось кличе. Скрипт, який ніхто не запускає, — це рівно той самий
 * дефект, тільки на поверх вище (§ 1.4).
 */

const ROOT = resolve(__dirname, '..');
const SCRIPT = 'scripts/check-test-discovery.mjs';
const NPM_SCRIPT = 'check:tests';

describe('файли перевірок належать раннерам (GATE-TEST-RUNNERS)', () => {
	it('перевірка жива: спільна реалізація імпортується й щось повертає', () => {
		expect(typeof checkTestDiscovery, `${SCRIPT} не експортує checkTestDiscovery`).toBe(
			'function'
		);
		expect(
			Array.isArray(checkTestDiscovery(ROOT)),
			'перевірка мусить віддавати перелік проблем, хай і порожній'
		).toBe(true);
	});

	it('жодного файлу перевірки, якого не запускає ніхто', () => {
		const problems: string[] = checkTestDiscovery(ROOT);
		expect(problems, `перевірки, яких не запускає ніхто:\n${problems.join('\n')}`).toEqual([]);
	});
});

describe('окремий процес існує й викликається (PIT-TEST-DISCOVERY-PROCESS)', () => {
	it('скрипт лежить на диску', () => {
		expect(
			existsSync(resolve(ROOT, SCRIPT)),
			`${SCRIPT} зник — при зіпсованій масці include перевірку не виконає ніхто`
		).toBe(true);
	});

	it('npm-скрипт кличе саме його', () => {
		const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
		expect(
			pkg.scripts?.[NPM_SCRIPT],
			`у package.json немає скрипта «${NPM_SCRIPT}»`
		).toContain('check-test-discovery.mjs');
	});

	it('хоч один workflow виконує цей крок', () => {
		const dir = resolve(ROOT, '.github/workflows');
		const workflows = readdirSync(dir).filter((name) => /\.ya?ml$/.test(name));
		const naming = workflows.filter((name) =>
			new RegExp(`npm run ${NPM_SCRIPT}\\b`).test(readFileSync(resolve(dir, name), 'utf8'))
		);
		expect(
			naming.length,
			`скрипт існує й у CI не викликається — це той самий дефект на поверх вище; ` +
				`перевірено ${workflows.length} workflow`
		).toBeGreaterThan(0);
	});
});
