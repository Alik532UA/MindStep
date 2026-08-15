// @vitest-environment node
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * DEPENDENCIES-v8 § 6 — стан залежностей перевіряється, а не приймається на віру.
 *
 * Кожне правило тут уже коштувало комусь часу: два lockfile дають дві різні
 * збірки; плаваюча версія робить білд невідтворюваним; інструмент у
 * `dependencies` розширює те, що аудит вважає поверхнею атаки; розбіжність
 * `engines.node` із версією в CI виявляється лише на раннері.
 */
const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as {
	engines?: Record<string, string>;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
};

describe('залежності', () => {
	it('перевірка жива: package.json прочитано й він непорожній', () => {
		const total = Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).length;
		expect(total, 'жодної залежності — читається не той файл').toBeGreaterThan(5);
	});

	it('один менеджер пакетів', () => {
		const locks = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'bun.lockb'].filter(
			(f) => existsSync(f)
		);
		expect(locks, `знайдено кілька lockfile: ${locks.join(', ')}`).toHaveLength(1);
	});

	it('немає плаваючих версій', () => {
		const all = { ...pkg.dependencies, ...pkg.devDependencies };
		const floating = Object.entries(all)
			.filter(([, v]) => v === '*' || v === 'latest')
			.map(([k]) => k);
		expect(floating, `невідтворювані версії: ${floating.join(', ')}`).toEqual([]);
	});

	it('інструменти збірки не в dependencies (§ 2.2)', () => {
		const runtime = Object.keys(pkg.dependencies ?? {});
		const buildOnly = runtime.filter((d) =>
			/^(vite|vitest|typescript|svelte-check|@sveltejs\/|eslint|prettier|@playwright|knip|husky|@types\/)/.test(
				d
			)
		);
		expect(buildOnly, `мають бути у devDependencies: ${buildOnly.join(', ')}`).toEqual([]);
	});

	/**
	 * § 2.3: версія Node вказана і збігається з тією, що стоїть у CI.
	 *
	 * Розбіжність не ламає нічого локально: вона проявляється на раннері, де
	 * стоїть інша версія, і виглядає як помилка коду, а не конфігурації.
	 */
	it('engines.node збігається з версією Node у workflow (§ 2.3)', () => {
		const engine = pkg.engines?.node;
		expect(engine, 'engines.node не вказано').toBeDefined();

		const required = Number(/(\d+)/.exec(engine as string)?.[1]);
		expect(Number.isFinite(required), `не вдалося прочитати версію з "${engine}"`).toBe(true);

		const dir = '.github/workflows';
		const workflows = existsSync(dir) ? readdirSync(dir).filter((f) => /\.ya?ml$/.test(f)) : [];
		expect(workflows.length, 'workflow не знайдено — перевіряти нема з чим').toBeGreaterThan(0);

		const mismatched: string[] = [];
		for (const file of workflows) {
			const source = readFileSync(`${dir}/${file}`, 'utf8');
			for (const [, version] of source.matchAll(/node-version:\s*'?(\d+)/g)) {
				if (Number(version) < required) mismatched.push(`${file}: node ${version} < ${required}`);
			}
		}
		expect(mismatched, `CI бере старший Node, ніж вимагає package.json:\n${mismatched.join('\n')}`).toEqual(
			[]
		);
	});
});
