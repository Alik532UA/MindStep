import { test, expect } from '@playwright/test';

/**
 * Рантайм-дублікати `data-testid` (TESTID-AND-NAMING-v8 § 1.9.2).
 *
 * Статична перевірка (`src/testid-conventions.spec.ts`) бачить кожен testid у
 * джерелах, але не знає, скільки разів компонент опиниться на сторінці. Коли
 * той самий id відповідає двом елементам, Playwright бере перший-ліпший — тест
 * зелений, а перевіряє не те.
 *
 * Перелік розширений із трьох сторінок до семи: раніше поза перевіркою
 * лишалися ті, де найбільше повторюваних компонентів — правила, керування,
 * нагороди, приєднання до кімнати. Адмінських сторінок тут немає, а онлайн-гра
 * потребує кімнати, тому `/online` і `/game/*` не входять: покрити їх можна
 * лише з піднятим емулятором Firebase, і це окрема задача.
 *
 * `/about` був восьмим і прибраний разом із самим маршрутом: то був демо-файл
 * `npx sv create`, і в продакшн-збірці він віддавав порожній документ.
 */
const PAGES = [
	'/',
	'/settings',
	'/local-setup',
	'/rules',
	'/controls',
	'/rewards',
	'/join'
];

for (const path of PAGES) {
	test(`unique data-testid on ${path}`, async ({ page }) => {
		await page.goto(path);
		// Застосунок рендериться на клієнті (adapter-static із fallback), тому
		// одразу після goto DOM майже порожній. Без цього очікування перевірка
		// міряла порожню сторінку й проходила — саме так вона й «працювала» до
		// цього коміту.
		await page.waitForFunction(() => document.querySelectorAll('[data-testid]').length > 5);

		const ids = await page.$$eval('[data-testid]', (els) =>
			els.map((el) => el.getAttribute('data-testid') ?? '').filter(Boolean)
		);

		// Канарка: без неї порожня сторінка (зламаний білд, змінений base path)
		// давала б «дублікатів немає» — зелений тест на непрацюючому застосунку
		// (AI-AGENT-PITFALLS-v8 § 1).
		expect(ids.length, `${path}: жодного data-testid — перевірка мертва`).toBeGreaterThan(5);

		const dupes = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
		expect(dupes, `${path}: duplicate data-testid: ${dupes.join(', ')}`).toEqual([]);
	});
}

/**
 * Модальне вікно — діалог із назвою (ACCESSIBILITY-v8 § 4.4).
 *
 * Перевірка саме рантаймова, і саме через роль: `getByRole('dialog')` бачить
 * те, що бачить читалка, а не те, що написано в розмітці. До цього коміту
 * підкладка була `role="button"`, а сама картка вікна — безрольовим `div`:
 * тобто на екрані існувала кнопка на все вікно й НІ ОДНОГО діалогу. Ні
 * `svelte-check`, ні ESLint цього не бачать — обидва вважають розмітку
 * правильною, бо роль присутня, просто не та.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `role="dialog"`
 * у `BaseModal.svelte` — перший `expect` червоніє на таймауті; прибрати
 * `aria-labelledby` разом із `id` заголовка — червоніє другий.
 *
 * `game-mode-modal` як зразок: це єдине вікно, яке відкривається з головної
 * одним кліком, без гри, кімнати й емулятора.
 */
test('модалка оголошується діалогом і має назву', async ({ page }) => {
	await page.goto('/');
	await page.addInitScript(() => {
		(window as unknown as Record<string, boolean>).updateNoticeDisabled = true;
	});
	await page.waitForFunction(() => document.querySelectorAll('[data-testid]').length > 5);

	await page.getByTestId('center-play-btn').click();

	const dialog = page.getByRole('dialog');
	await expect(dialog, 'вікно не оголошується діалогом').toBeVisible();

	// `/./` — будь-який непорожній підпис. Точний текст залежить від мови
	// інтерфейсу, і закріплювати його тут означало б зламати перевірку першим
	// же перекладом (I18N-v8 § 2).
	await expect(dialog, 'діалог без назви — читалка озвучує лише «діалог»').toHaveAccessibleName(
		/./
	);

	// Кнопки закриття в шапці тут немає навмисно: усі вікна головного меню —
	// варіанта `menu`, який шапки не малює зовсім, а `standard` вимагає початої
	// партії. Підпис хрестика перевіряє статичний інваріант у
	// `src/a11y-conventions.spec.ts` — і там же названо, чому саме статичний.
});
