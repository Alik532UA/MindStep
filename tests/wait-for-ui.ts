import type { Page } from '@playwright/test';

/**
 * ЧЕКАННЯ, ПІСЛЯ ЯКОГО СТОРІНКУ МОЖНА МІРЯТИ
 * (AI-AGENT-PITFALLS-v9 § 1 — «перевірка, що поміряла порожнечу, зелена»).
 *
 * ## Навіщо спільний модуль
 *
 * Три гейти міряють геометрію й розмітку тих самих восьми сторінок: axe
 * (`a11y.spec.ts`), reflow (`reflow.spec.ts`) і сенсорні цілі
 * (`touch-targets.spec.ts`). Кожен мав власний гард, і різні гарди означали
 * різну сторінку під тим самим `goto()`.
 *
 * ## Три речі, яких треба дочекатися, і чому саме три
 *
 * 1. **Розмітка зʼявилася.** Профіль static із `fallback: index.html` віддає
 *    майже порожній DOM одразу після `goto()`. Будь-який вимір над ним
 *    «проходить», не помірявши нічого.
 * 2. **Переклад приїхав.** Доки `svelte-i18n` не віддав локаль, `$t` малює САМ
 *    КЛЮЧ — `mainMenu.clearCacheModal.keepAppearance`. Це довгий токен без
 *    пробілів, тобто нерозривний, і він розсуває розкладку сильніше за
 *    будь-який справжній текст. Перша версія гейта reflow на цьому й
 *    спіймалася: чотири «червоні» сторінки з переконливими числами, і жодного
 *    справжнього дефекту.
 * 3. **Кількість інтерактивних цілей перестала рости.** Це третій гард, і
 *    доданий він 2026-09-11 за заміром, а не з обережності: на `/controls`
 *    одразу після пункту 1 у DOM **нуль** `.key-button`, а через дві секунди —
 *    **сорок чотири**. Тобто axe, reflow і сенсорні цілі роками міряли
 *    сторінку керування без жодної клавіші на ній. Знайшлося це випадково:
 *    гейт сенсорних цілей один раз побачив 40 пар «клавіша × хрестик», а
 *    наступні чотири прогони — жодної.
 *
 * ## Чому «перестала рости», а не «чекати на .key-button»
 *
 * Локатор конкретної сторінки довелося б додавати до цього модуля щоразу, коли
 * зʼявляється нова сторінка з відкладеним вмістом, — і саме цього ніхто не
 * зробить. Ознака «лічильник не змінився за {@link QUIET_MS}» не знає про
 * сторінки нічого й працює на всіх однаково.
 *
 * ## Зворотний експеримент (§ 1.1) — прогнано
 *
 * Заміряно на `/controls`: зі старим гардом вимір бачить 0 клавіш, із цим —
 * 44. На інших сторінках список цілей той самий, тобто гард нічого не змінив
 * там, де й не мав.
 */

/** Ті самі елементи, що вважаються сенсорною ціллю в `touch-targets.spec.ts`. */
export const INTERACTIVE_SELECTOR = [
	'a[href]',
	'button',
	'input:not([type="hidden"])',
	'select',
	'textarea',
	'summary',
	'[role="button"]',
	'[role="link"]',
	'[role="checkbox"]',
	'[role="switch"]',
	'[role="tab"]',
	'[role="menuitem"]',
	'[role="option"]',
	'[tabindex]:not([tabindex="-1"])'
].join(',');

/**
 * Скільки лічильник має простояти незмінним. 400 мс — із заміру: на
 * `/controls` клавіші приїжджають однією порцією приблизно на 300 мс, тож
 * менший поріг ловив би паузу всередині рендеру.
 */
const QUIET_MS = 400;

/** Ознака неперекладеного тексту: ASCII-токен із точкою всередині, без пробілів. */
const KEY_SHAPED = /^[a-zA-Z][\w]*(\.[a-zA-Z][\w]*)+$/;

/**
 * 20 c, а не типові 5: e2e ходять по dev-серверу, який компілює модулі на
 * перший запит. На холодному кеші Vite сторінка зʼявляється пізніше за пʼяту
 * секунду, і перевірка падала б там, де порушення немає, — плаваючий гейт, на
 * який швидко перестають дивитися (CODE-QUALITY § 6.4.2).
 */
const TIMEOUT_MS = 20_000;

export async function waitForMeasurablePage(page: Page): Promise<void> {
	await page.waitForFunction(() => document.querySelectorAll('[data-testid]').length > 5, null, {
		timeout: TIMEOUT_MS
	});

	await page.waitForFunction(
		(shape: string) => {
			const keyShaped = new RegExp(shape);
			return ![...document.body.querySelectorAll('*')]
				.filter((element) => element.children.length === 0)
				.some((element) => keyShaped.test((element.textContent ?? '').trim()));
		},
		KEY_SHAPED.source,
		{ timeout: TIMEOUT_MS }
	);

	await page.waitForFunction(
		({ selector, quietMs }: { selector: string; quietMs: number }) => {
			const scratch = window as unknown as { __uiCount?: number; __uiSince?: number };
			const count = document.querySelectorAll(selector).length;
			const now = Date.now();
			if (scratch.__uiCount !== count) {
				scratch.__uiCount = count;
				scratch.__uiSince = now;
				return false;
			}
			return now - (scratch.__uiSince ?? now) >= quietMs;
		},
		{ selector: INTERACTIVE_SELECTOR, quietMs: QUIET_MS },
		{ timeout: TIMEOUT_MS, polling: 100 }
	);
}
