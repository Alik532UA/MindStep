import { test, expect } from '@playwright/test';

/**
 * Рантайм-дублікати `data-testid` (TESTID-AND-NAMING-v8 § 1.9.2).
 *
 * Статична перевірка (`src/testid-conventions.spec.ts`) бачить кожен testid у
 * джерелах, але не знає, скільки разів компонент опиниться на сторінці. Коли
 * той самий id відповідає двом елементам, Playwright бере перший-ліпший — тест
 * зелений, а перевіряє не те.
 *
 * Перелік розширений із трьох сторінок до восьми: раніше поза перевіркою
 * лишалися ті, де найбільше повторюваних компонентів — правила, керування,
 * нагороди, приєднання до кімнати. Адмінських сторінок тут немає, а онлайн-гра
 * потребує кімнати, тому `/online` і `/game/*` не входять: покрити їх можна
 * лише з піднятим емулятором Firebase, і це окрема задача.
 */
const PAGES = [
	'/',
	'/settings',
	'/local-setup',
	'/rules',
	'/controls',
	'/rewards',
	'/about',
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
