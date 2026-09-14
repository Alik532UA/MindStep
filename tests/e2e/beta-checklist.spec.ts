import { expect, test } from '@playwright/test';

/**
 * Сама сторінка чеклиста (BETA-CHECKLIST-v9 § 5.7, `BETA-PAGE-E2E`).
 *
 * ## Навіщо окремий файл
 *
 * Інваріанти в `src/beta-checklist.spec.ts` дивляться на ДАНІ: чи існує
 * названий файл тесту, чи є в пункта локатор, чи не перекошені рівні.
 * `tests/e2e/invariants.spec.ts` заходить сюди по дорозі — перевірити `noindex`
 * і те, що сторінка взагалі відкривається. Між ними лишалася діра розміром зі
 * сторінку: **чи працює те, заради чого все це написано**.
 *
 * Діра не теоретична. Позначки живуть у `localStorage`, звіт складається в
 * браузері, буфер обміну відмовляє буденно — і кожен із цих кроків втрачає
 * роботу тестувальника МОВЧКИ: сторінка лишається намальованою, а інваріанти
 * зеленими.
 */

const PAGE = '/beta-test-checklists';

/** Перший пункт вкладки `menu` — `id` стабільний назавжди (§ 2.2). */
const CHECK = 'menu_1';

const progress = (page: import('@playwright/test').Page) =>
	page.getByTestId('beta-progress-value').innerText();

test.beforeEach(async ({ page }) => {
	await page.goto(PAGE);
	await expect(page.getByTestId('beta-page-container')).toBeVisible({ timeout: 20_000 });
});

test('позначка переживає перезавантаження', async ({ page }) => {
	const vote = page.getByTestId(`beta-vote-ok-${CHECK}-btn`);
	await vote.click();
	await expect(vote).toHaveAttribute('aria-pressed', 'true');

	await page.reload();

	await expect(
		page.getByTestId(`beta-vote-ok-${CHECK}-btn`),
		'позначка не пережила перезавантаження — сесія тестувальника зникає мовчки'
	).toHaveAttribute('aria-pressed', 'true');
});

test('поступ росте на один, а повторний клік його повертає', async ({ page }) => {
	const before = await progress(page);
	const vote = page.getByTestId(`beta-vote-ok-${CHECK}-btn`);

	await vote.click();
	await expect(page.getByTestId('beta-progress-value'), 'поступ не зрушив').not.toHaveText(before);

	// Повторне натискання того самого стану знімає позначку (§ 3.3): помилковий
	// клік мусить бути зворотним, інакше єдиний вихід — стерти все.
	await vote.click();
	await expect(page.getByTestId('beta-progress-value'), 'повторний клік не зняв позначку').toHaveText(
		before
	);
});

/** § 8.1: вкладок вісім, і загальне число не каже, чи закінчена ця. */
test('лічильник вкладки росте окремо від загального', async ({ page }) => {
	const own = page.getByTestId('beta-tab-menu-progress-text');
	await expect(own).toBeVisible();
	const before = await own.innerText();

	await page.getByTestId(`beta-vote-ok-${CHECK}-btn`).click();

	await expect(own, 'лічильник вкладки не зрушив').not.toHaveText(before);
	await expect(
		page.getByTestId('beta-tab-online-progress-text'),
		'позначка потрапила в чужу вкладку'
	).toHaveText(/^0\//);
});

test('перемикання вкладки міняє пункти й не губить позначене', async ({ page }) => {
	await page.getByTestId(`beta-vote-ok-${CHECK}-btn`).click();

	await page.getByTestId('beta-tab-online-btn').click();
	await expect(
		page.getByTestId(`beta-check-${CHECK}-item`),
		'пункти чужої вкладки лишилися на екрані'
	).toHaveCount(0);

	await page.getByTestId('beta-tab-menu-btn').click();
	await expect(
		page.getByTestId(`beta-vote-ok-${CHECK}-btn`),
		'позначка загубилася при поверненні на вкладку'
	).toHaveAttribute('aria-pressed', 'true');
});

/**
 * § 6.3: стирання — єдина незворотна дія на сторінці, і стоїть вона в тому
 * самому рядку, що й кнопка звіту, до якої тягнуться щоразу. Доти тут був
 * `confirm()`, який у headless довелося б перехоплювати окремим обробником.
 */
test('перше натискання «стерти» нічого не стирає', async ({ page }) => {
	await page.getByTestId(`beta-vote-ok-${CHECK}-btn`).click();
	const marked = await progress(page);

	await page.getByTestId('beta-clear-btn').click();
	await expect(
		page.getByTestId('beta-progress-value'),
		'одне натискання знесло всю роботу тестувальника'
	).toHaveText(marked);

	await page.getByTestId('beta-clear-btn').click();
	await expect(page.getByTestId('beta-progress-value')).not.toHaveText(marked);
});

/**
 * Буфер обміну в headless недоступний, і це зручно: сценарій заразом доводить,
 * що запасний шлях (§ 6.2) справді працює. Перша версія чеклиста в цьому місці
 * лише писала в лог — кнопка виглядала натиснутою, а звіту не було НІДЕ.
 */
test('звіт доходить до людини навіть без буфера обміну', async ({ page, context }) => {
	await context.clearPermissions();
	await page.getByTestId(`beta-vote-ok-${CHECK}-btn`).click();
	await page.getByTestId('beta-report-btn').click();

	await expect(page.getByTestId('beta-report-hint')).toBeVisible();

	const field = page.getByTestId('beta-report-input');
	if (await field.isVisible()) {
		await expect(field).toHaveValue(new RegExp(CHECK));
	}
});
