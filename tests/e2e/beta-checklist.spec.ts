import { expect, test } from './fixtures';

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

/**
 * Той самий пункт у ЛОКАТОРІ — kebab-case (§ 5.6, `BETA-LOCATOR-PER-CHECK`).
 *
 * У сховищі лежить `menu_1`, у розмітці — `menu-1`: підкреслень у локаторах
 * немає (TESTID-AND-NAMING § 1.2). Порядок сегментів теж став канонічним:
 * `beta-vote-{id}-{стан}-btn`, а не `beta-vote-{стан}-{id}-btn`.
 */
const TID = CHECK.replace(/_/g, '-');

const progress = (page: import('@playwright/test').Page) =>
	page.getByTestId('beta-progress-value').innerText();

test.beforeEach(async ({ page }) => {
	await page.goto(PAGE);
	await expect(page.getByTestId('beta-page-container')).toBeVisible({ timeout: 20_000 });
});

test('позначка переживає перезавантаження', async ({ page }) => {
	const vote = page.getByTestId(`beta-vote-${TID}-ok-btn`);
	await vote.click();
	await expect(vote).toHaveAttribute('aria-pressed', 'true');

	await page.reload();

	await expect(
		page.getByTestId(`beta-vote-${TID}-ok-btn`),
		'позначка не пережила перезавантаження — сесія тестувальника зникає мовчки'
	).toHaveAttribute('aria-pressed', 'true');
});

test('поступ росте на один, а повторний клік його повертає', async ({ page }) => {
	const before = await progress(page);
	const vote = page.getByTestId(`beta-vote-${TID}-ok-btn`);

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

	await page.getByTestId(`beta-vote-${TID}-ok-btn`).click();

	await expect(own, 'лічильник вкладки не зрушив').not.toHaveText(before);
	await expect(
		page.getByTestId('beta-tab-online-progress-text'),
		'позначка потрапила в чужу вкладку'
	).toHaveText(/^0\//);
});

test('перемикання вкладки міняє пункти й не губить позначене', async ({ page }) => {
	await page.getByTestId(`beta-vote-${TID}-ok-btn`).click();

	await page.getByTestId('beta-tab-online-btn').click();
	await expect(
		page.getByTestId(`beta-check-${CHECK}-item`),
		'пункти чужої вкладки лишилися на екрані'
	).toHaveCount(0);

	await page.getByTestId('beta-tab-menu-btn').click();
	await expect(
		page.getByTestId(`beta-vote-${TID}-ok-btn`),
		'позначка загубилася при поверненні на вкладку'
	).toHaveAttribute('aria-pressed', 'true');
});

/**
 * § 6.3: стирання — єдина незворотна дія на сторінці, і стоїть вона в тому
 * самому рядку, що й кнопка звіту, до якої тягнуться щоразу. Доти тут був
 * `confirm()`, який у headless довелося б перехоплювати окремим обробником.
 */
test('перше натискання «стерти» нічого не стирає', async ({ page }) => {
	await page.getByTestId(`beta-vote-${TID}-ok-btn`).click();
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
	/*
	 * БУФЕР ЛАМАЄТЬСЯ НАВМИСНО, а `clearPermissions()` для цього НЕ ДОСИТЬ.
	 *
	 * Заміряно: у headless Chromium `writeText` після відкликаного дозволу
	 * однаково спрацьовує, тож сторінка йшла гілкою УСПІХУ — і сценарій
	 * перевіряв не запасний шлях, а те, що кнопка є. Доти цього не було видно
	 * лише тому, що підказка успіху й підказка відмови мали ОДИН локатор
	 * (§ 6.2.1): «підказка видима» правдиве в обох випадках.
	 */
	await context.clearPermissions();
	await page.addInitScript(() => {
		Object.defineProperty(navigator, 'clipboard', {
			configurable: true,
			value: { writeText: () => Promise.reject(new Error('clipboard blocked in test')) }
		});
	});
	await page.reload();
	await page.getByTestId(`beta-vote-${TID}-ok-btn`).click();
	await page.getByTestId('beta-report-btn').click();

	// Саме локатор ВІДМОВИ (§ 6.2.1): спільний зеленів би й тоді, коли буфер
	// спрацював, тобто запасний шлях лишався б неперевіреним.
	await expect(page.getByTestId('beta-report-failed-hint')).toBeVisible();

	const field = page.getByTestId('beta-report-input');
	if (await field.isVisible()) {
		await expect(field).toHaveValue(new RegExp(CHECK));
	}
});

/**
 * § 8.3 `BETA-OWN-LANG-BTN`: мов інтерфейсу чотири (`uk`, `en`, `crh`, `nl`),
 * мов чеклиста дві. Кнопка перемикає РІВНО чеклист — адреса й мова застосунку
 * лишаються як були, інакше вона дублювала б перемикач у налаштуваннях і
 * нічого не вирішувала.
 */
test('кнопка мови перемикає чеклист, не чіпаючи адреси', async ({ page }) => {
	const text = page.getByTestId(`beta-check-${TID}-text`);
	const before = await text.innerText();
	const url = page.url();

	await page.getByTestId('beta-lang-btn').click();

	await expect(text, 'текст пункта не змінився — кнопка нічого не перемкнула').not.toHaveText(
		before
	);
	expect(page.url(), 'кнопка чеклиста змінила адресу сторінки').toBe(url);
});

/**
 * § 8.5.1 `BETA-VERSION-VISIBLE` і § 8.4 `BETA-SCREEN-LINKS`: версія відповідає
 * на «чи рахується моя позначка», перелік екранів знімає найдовший крок у
 * роботі — прочитав пункт, шукає, де це в застосунку.
 */
test('на сторінці видно версію, екрани вкладки й вихід', async ({ page }) => {
	await expect(page.getByTestId('beta-version-text')).toHaveText(/\d/);
	await expect(
		page.getByTestId('beta-home-link'),
		'зі службової сторінки нема куди піти'
	).toHaveAttribute('href', /.+/);

	const links = page.locator('[data-testid^="beta-screen-"]');
	expect(await links.count(), 'вкладка не показала жодного екрана').toBeGreaterThan(0);
	await expect(links.first()).toHaveAttribute('href', /.+/);
});
