import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { A11Y_BASELINE, A11Y_KNOWN } from '../a11y-baseline';

/**
 * Машинний аудит доступності (ACCESSIBILITY-v8 § 10, `GATE-A11Y-AXE`).
 *
 * ## Чому цього не було й чому це не замінюють наявні перевірки
 *
 * У проєкті вже є дві статичні перевірки доступності (`a11y-conventions.spec.ts`
 * — назви кнопок, `invariants.spec.ts` — роль діалогу й видимий фокус) і
 * `svelte/valid-compile` для a11y-попереджень компілятора. Жодна з них не
 * рахує контраст, не бачить порядку заголовків, не перевіряє `lang`, не знає
 * про дублікати `id` і не міряє ARIA на зібраному DOM. Саме це й покриває axe —
 * приблизно ТРЕТИНУ проблем доступності, і саме ту третину, яку людина очима не
 * ловить.
 *
 * `PROJECT-CONTEXT.md` тримав це рядком боргу «немає axe у пайплайні, хоч
 * Playwright уже є» разом із другим рядком «контраст палітри ніде не
 * міряється». Обидва закриває один цей файл: `color-contrast` — правило axe.
 *
 * ## Межа методу, яку треба знати
 *
 * Зелений axe НЕ означає, що сторінка доступна. Порядок фокусу, осмисленість
 * `alt`, логічність заголовків, зрозумілість `aria-label`, працездатність focus
 * trap — цього він не бачить. § 11 канону (ручне тестування) лишається
 * обовʼязковою другою половиною, і в проєкті вона живе окремо: вкладка
 * доступності в `/beta-test-checklists`.
 *
 * ## Аудит бачить лише те, що на екрані
 *
 * `analyze()` перевіряє стан одразу після `goto()`. Модалки, відкриті меню й
 * стани помилок у нього не потрапляють НІКОЛИ — тому нижче є окремий випадок із
 * ВІДКРИТОЮ модалкою налаштувань.
 *
 * ## Про очікування перед аналізом
 *
 * Профіль static із `fallback: index.html`: одразу після `goto()` DOM майже
 * порожній, і аудит порожньої сторінки дає нуль порушень — тобто зелено на
 * непрацюючому застосунку. Те саме очікування, що й у `invariants.spec.ts`, і з
 * тієї ж причини.
 */

type PageKey = keyof typeof A11Y_BASELINE;

const PAGES: { key: PageKey; path: string }[] = [
	{ key: 'home', path: '/' },
	{ key: 'settings', path: '/settings' },
	{ key: 'localSetup', path: '/local-setup' },
	{ key: 'rules', path: '/rules' },
	{ key: 'controls', path: '/controls' },
	{ key: 'rewards', path: '/rewards' },
	{ key: 'join', path: '/join' },
	{ key: 'betaChecklists', path: '/beta-test-checklists' }
];

/** Ті самі теги, що називає канон: WCAG 2.0/2.1/2.2 рівнів A і AA. */
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

/**
 * ЄДИНИЙ виняток, і він тут через те, що E2E ходять по dev-серверу.
 *
 * `NetworkMonitorWidget` змонтований під `{#if import.meta.env.DEV && …}` у
 * кореневому layout — тобто до відвідувача він не доїжджає НІКОЛИ. axe при
 * цьому бачить його на кожній сторінці й дає по три порушення: `.header` має
 * `role="button"` і містить дві справжні кнопки (`nested-interactive`), а самі
 * кнопки менші за 24 px (`target-size` ×2).
 *
 * Записати їх у базу означало б тримати вічний борг за те, чого немає в проді,
 * — і, головне, СХОВАТИ справжній `nested-interactive`, якби він зʼявився в
 * тому, що відвантажується: перелік `id` уже містив би це правило, і нова
 * знахідка розчинилася б у ньому.
 *
 * Виняток адресний (один `data-testid`), а не за правилом, і саме тому видимий
 * у diff (ACCESSIBILITY-v8 § 10.3). Він зникне сам, коли e2e переїдуть на
 * зібраний сайт — це записаний борг у PROJECT-CONTEXT.md.
 */
const DEV_ONLY = '[data-testid="network-monitor-panel"]';

/** Порушення в читабельний рядок: правило, кількість, перший селектор. */
function describeViolations(
	violations: { id: string; help: string; nodes: { target: unknown[] }[] }[]
): string {
	return violations
		.map((v) => `${v.id} ×${v.nodes.length} — ${v.help}\n      ${String(v.nodes[0]?.target)}`)
		.join('\n  ');
}

function assertWithinBaseline(
	key: PageKey,
	violations: { id: string; help: string; nodes: { target: unknown[] }[] }[]
): void {
	const ids = [...new Set(violations.map((v) => v.id))].sort();

	// Спершу ПЕРЕЛІК, потім кількість: новий тип порушення мусить бути названий
	// поіменно, а не розчинитися в лічильнику (§ 10.1.1).
	expect(
		ids,
		`${key}: зʼявився тип порушення, якого немає в базі.\n  ${describeViolations(violations)}`
	).toEqual([...A11Y_KNOWN[key]]);

	const limit = A11Y_BASELINE[key];
	expect(
		violations.length,
		`${key}: порушень стало більше за базу (${limit}).\n  ${describeViolations(violations)}`
	).toBeLessThanOrEqual(limit);

	// Другий бік ратчета: база, що застаріла, — це борг, якого немає, і
	// наступний читач бачить його як наявний (CODE-QUALITY-v8 § 6.4.3).
	expect(
		violations.length,
		`${key}: порушень стало МЕНШЕ (${violations.length}) за базу (${limit}). ` +
			'Опустіть число в tests/a11y-baseline.ts тим самим комітом.'
	).toBe(limit);
}

for (const { key, path } of PAGES) {
	test(`axe: ${path}`, async ({ page }) => {
		await page.goto(path);
		await page.waitForFunction(() => document.querySelectorAll('[data-testid]').length > 5);

		const results = await new AxeBuilder({ page })
			.withTags(TAGS)
			.exclude(DEV_ONLY)
			.analyze();

		// Канарка: axe, що не взяв жодного вузла, дає нуль порушень і читається
		// як «чисто» (AI-AGENT-PITFALLS-v8 § 1).
		expect(
			results.passes.length + results.violations.length,
			`${path}: axe не перевірив жодного правила — аудит міряв порожнечу`
		).toBeGreaterThan(0);

		assertWithinBaseline(key, results.violations);
	});
}

/**
 * Модалка перевіряється окремо й у ВІДКРИТОМУ стані (§ 10.2).
 *
 * Шлях узятий той самий, що в `invariants.spec.ts` («модалка оголошується
 * діалогом»), і з тієї ж причини: `game-mode-modal` — єдине вікно, яке
 * відкривається з головної одним кліком, без гри, кімнати й емулятора. Спільний
 * локатор на два гейти означає, що перейменування testid валить обидва разом, а
 * не лишає один тихо перевіряти порожнечу.
 */
test('axe: відкрита модалка', async ({ page }) => {
	await page.goto('/');
	await page.waitForFunction(() => document.querySelectorAll('[data-testid]').length > 5);

	await page.getByTestId('center-play-btn').click();
	await expect(page.getByRole('dialog')).toBeVisible();

	const results = await new AxeBuilder({ page })
		.withTags(TAGS)
		.exclude(DEV_ONLY)
		.analyze();
	expect(
		results.passes.length + results.violations.length,
		'axe не перевірив жодного правила у відкритій модалці'
	).toBeGreaterThan(0);

	assertWithinBaseline('settingsModal', results.violations);
});
