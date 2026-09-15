import { expect, test } from './fixtures';
import { waitForMeasurablePage } from '../wait-for-ui';

/**
 * WCAG 1.4.10 REFLOW: НА 320 CSS PX НЕМАЄ ГОРИЗОНТАЛЬНОЇ ПРОКРУТКИ
 * (ACCESSIBILITY-v9 § 10.8, `A11Y-REFLOW`, `GATE-A11Y-AXE`).
 *
 * ## Чому цього не бачить axe
 *
 * `tests/e2e/a11y.spec.ts` міряє порушення, які axe вміє вивести з DOM і
 * обчислених стилів. Reflow до них не належить **у принципі**: він про
 * геометрію сторінки на конкретній ширині, а не про розмітку. axe дасть нуль
 * порушень на сторінці, яку на телефоні доводиться прокручувати вбік, —
 * і саме так і буде, бо це не помилка розмітки.
 *
 * 320 CSS px — не «маленький телефон», а нормативна цифра критерію: 1280 px
 * при збільшенні 400 %. Тобто перевіряється те саме, що бачить людина зі
 * слабким зором на звичайному ноутбуці.
 *
 * ## Чому не просто `scrollWidth > clientWidth` на `<body>`
 *
 * Такий вимір каже «десь вилазить» і не каже, що саме, — а виправляти доводиться
 * саме елемент. Тому при перевищенні перелічуються ВИННІ вузли: ті, чий правий
 * край виходить за вікно. Без цього повідомлення довелося б шукати очима, а
 * перевірка, яку дорого читати, недовго лишається ввімкненою.
 *
 * Виміри беруться після появи розмітки — той самий гард, що в `a11y.spec.ts`:
 * профіль static із `fallback: index.html` віддає майже порожній DOM одразу
 * після `goto()`, і будь-який вимір над ним «проходить», нічого не поміривши.
 *
 * ## Що НЕ перевіряється тут
 *
 * Вертикальна прокрутка — норма. Елемент із власним `overflow-x: auto`
 * (дошка гри на вузькому екрані) законний за критерієм: прокручується вміст,
 * а не сторінка. Тому вимірюється саме документ, а виною вважається лише вузол,
 * що виходить за межі вікна.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Тимчасовий `min-width: 500px` на `.main-content` валить перевірку з назвою
 * сторінки, обома числами й селектором винного вузла.
 */

/** Нормативна ширина критерію 1.4.10: 1280 px при збільшенні 400 %. */
const REFLOW_WIDTH = 320;

/** Висота взята з найпоширенішого вузького пристрою; критерій її не задає. */
const REFLOW_HEIGHT = 640;

/**
 * Ті самі сторінки, що в аудиті axe: перелік один, бо розходження двох
 * переліків означає сторінку, перевірену однією половиною гейта.
 */
const PAGES = [
	'/',
	'/settings',
	'/local-setup',
	'/rules',
	'/controls',
	'/rewards',
	'/join',
	'/beta-test-checklists'
];

/** Скільки пікселів вважати шумом округлення субпіксельних розмірів. */
const TOLERANCE = 1;

test.describe('WCAG 1.4.10 Reflow', () => {
	test.use({ viewport: { width: REFLOW_WIDTH, height: REFLOW_HEIGHT } });

	for (const path of PAGES) {
		test(`немає горизонтальної прокрутки на ${REFLOW_WIDTH} px: ${path}`, async ({ page }) => {
			await page.goto(path);
			await waitForMeasurablePage(page);

			const measured = await page.evaluate((tolerance) => {
				const doc = document.documentElement;
				const limit = doc.clientWidth + tolerance;

				/** Селектор вузла в читабельній формі — для повідомлення, не для локатора. */
				const describe = (element: Element): string => {
					const testId = element.getAttribute('data-testid');
					if (testId) return `[data-testid="${testId}"]`;
					const classes = element.className
						? `.${String(element.className).trim().split(/\s+/).slice(0, 2).join('.')}`
						: '';
					return `${element.tagName.toLowerCase()}${classes}`;
				};

				const guilty: string[] = [];
				for (const element of document.body.querySelectorAll('*')) {
					const box = element.getBoundingClientRect();
					if (box.width === 0 || box.height === 0) continue;
					if (box.right <= limit) continue;
					// Виною вважається лише вузол, чий БАТЬКО не прокручується сам:
					// вміст усередині власного overflow-x критерій дозволяє.
					const parent = element.parentElement;
					const scrollable =
						parent && getComputedStyle(parent).overflowX.match(/auto|scroll/) !== null;
					if (scrollable) continue;
					guilty.push(`${describe(element)} → правий край ${Math.round(box.right)}`);
				}

				return {
					scrollWidth: doc.scrollWidth,
					clientWidth: doc.clientWidth,
					nodes: [...new Set(guilty)].slice(0, 10)
				};
			}, TOLERANCE);

			// Канарка: сторінка, що не відмалювалася, дає нульову ширину — і
			// порівняння «нуль не більший за нуль» пройшло б, нічого не поміривши.
			expect(
				measured.clientWidth,
				`${path}: вікно нульової ширини — вимір відбувся над невідмальованою сторінкою`
			).toBeGreaterThan(0);

			expect(
				measured.scrollWidth,
				`${path}: сторінка ширша за вікно (${measured.scrollWidth} проти ` +
					`${measured.clientWidth}). Вузли, що виходять за межі:\n  ` +
					`${measured.nodes.join('\n  ') || '(жодного — винен відступ або власна ширина body)'}`
			).toBeLessThanOrEqual(measured.clientWidth + TOLERANCE);
		});
	}
});
