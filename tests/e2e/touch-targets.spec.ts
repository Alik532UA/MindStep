import { expect, test } from './fixtures';
import { TOUCH_OVERLAP_BASELINE, type TouchPageKey } from '../touch-targets-baseline';
import { waitForMeasurablePage } from '../wait-for-ui';

/**
 * СЕНСОРНІ ЦІЛІ ПЕРЕВІРЯЮТЬСЯ ПАРАМИ
 * (ACCESSIBILITY-v9 § 10.3.1, `A11Y-TOUCH-OVERLAP`, `GATE-A11Y-AXE`).
 *
 * ## Чому поелементної перевірки мало
 *
 * `target-size` в axe міряє КОЖНУ ціль окремо, і зелений він і тоді, коли дві
 * цілі по 44×44 лежать одна на одній. Канон описує саме такий випадок у `CV`:
 * бейдж, збільшений до 44 пікселів, геометрично зʼїв кнопку закриття поруч —
 * і клік по кутку кнопки почав відкривати бейдж. Кожна ціль окремо правилу
 * відповідала.
 *
 * Другий бік того самого: `padding` розширює зону кліку НЕВИДИМО. Візуально не
 * змінилося нічого, а сусідній елемент програв саме там.
 *
 * ## Що саме міряється
 *
 * Дві різні речі, і обидві потрібні:
 *
 * 1. **Фактичні прямокутники.** Дві інтерактивні цілі не перетинаються більш
 *    ніж на {@link TOLERANCE_PX} CSS px по ОБОХ осях. Допуск, а не нуль:
 *    сусідні кнопки в ряду регулярно ділять пів-пікселя на межі через
 *    заокруглення subpixel-розкладки, і нуль червонів би від зміни шрифту.
 * 2. **Цілі, вирощені до 44×44.** Те, що станеться, якщо виконати вимогу
 *    розміру найпростішим способом — додати `padding` навколо центра. Саме цей
 *    крок і зʼїв сусіда в `CV`, тож він перевіряється ДО того, як його зроблять.
 *
 * Вкладені пари виключені: картка-посилання з кнопкою всередині — законна
 * конструкція, і зовнішній елемент там ціль навмисно (`el.contains(other)`).
 *
 * ## Чому вузьке вікно
 *
 * 390×844 — телефон, тобто той пристрій, на якому сенсорна ціль узагалі має
 * сенс. На 1900 px, з яким ходять решта наборів, елементи розʼїжджаються, і
 * перевірка була б зеленою завжди — тобто її не було б.
 *
 * ## Чому база, а не нуль
 *
 * Та сама причина, що в `tests/a11y-baseline.ts`: борг має бути названий і
 * вимірний. Різниця в тому, що тут база — ПЕРЕЛІК пар, а не число: пара
 * називає обидва елементи, тож нова знахідка не розчиняється в лічильнику, а
 * зникла — валить прогін проханням прибрати рядок.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1) — прогнано
 *
 * Тимчасовий `padding: 30px` на `.top-icons-bar button` дає перелік пар із
 * назвами обох кнопок і числом перекриття по кожній осі.
 */

/** Допуск на межі: менше — це заокруглення subpixel-розкладки, а не дефект. */
const TOLERANCE_PX = 4;

/** Нормативний мінімум сенсорної цілі (WCAG 2.5.5 AAA / 2.5.8 AA — 24). */
const MIN_TARGET_PX = 44;

/** Телефон: саме там цілі стоять щільно. */
const VIEWPORT = { width: 390, height: 844 };

const PAGES: { key: TouchPageKey; path: string }[] = [
	{ key: 'home', path: '/' },
	{ key: 'settings', path: '/settings' },
	{ key: 'localSetup', path: '/local-setup' },
	{ key: 'rules', path: '/rules' },
	{ key: 'controls', path: '/controls' },
	{ key: 'rewards', path: '/rewards' },
	{ key: 'join', path: '/join' },
	{ key: 'betaChecklists', path: '/beta-test-checklists' }
];

/**
 * Той самий виняток, що в `a11y.spec.ts`, і з тієї ж причини: панель
 * `NetworkMonitorWidget` змонтована під `import.meta.env.DEV` і до відвідувача
 * не доїжджає ніколи, а e2e поки ходять по dev-серверу.
 */
const DEV_ONLY = '[data-testid="network-monitor-panel"]';

type Pair = {
	a: string;
	b: string;
	hintA: string;
	hintB: string;
	dx: number;
	dy: number;
	grown: boolean;
};

type Measurement = { overlaps: Pair[]; targets: number; layers: number };

/**
 * Вимір цілком у сторінці: пар квадратично багато, і ганяти кожен прямокутник
 * через міст Playwright означало б хвилини замість секунд.
 */
function collectOverlaps({
	tolerance,
	minTarget,
	devOnly
}: {
	tolerance: number;
	minTarget: number;
	devOnly: string;
}): Measurement {
	const SELECTOR = [
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

	const excluded = document.querySelector(devOnly);

	/**
	 * Стійке імʼя цілі — те, що НЕ змінюється від вмісту.
	 *
	 * Перша версія дописувала сюди текст кнопки, і на /controls це дало сорок
	 * рядків замість одного: та сама пара «клавіша × хрестик» повторювалася для
	 * кожної призначеної клавіші, а перепризначення клавіші міняло базу. Текст
	 * лишився, але окремо — у рядку деталей, який читає людина.
	 */
	function describe(el: Element): string {
		const testid = el.getAttribute('data-testid');
		if (testid) return `[data-testid="${testid}"]`;
		const tag = el.tagName.toLowerCase();
		const cls =
			el.className && typeof el.className === 'string'
				? `.${el.className.trim().split(/\s+/)[0]}`
				: '';
		return `${tag}${cls}`;
	}

	/** Те, що допомагає знайти конкретний екземпляр очима, але не входить у базу. */
	function hintOf(el: Element): string {
		const label = el.getAttribute('aria-label');
		if (label) return label;
		return (el.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 24);
	}

	/**
	 * Шар цілі — найближчий предок із `position: fixed` (або сама сторінка).
	 *
	 * Це НАЗВАНИЙ виняток, той самий, що § 10.3.1 дозволяє для навмисно
	 * вкладених цілей, тільки виражений властивістю, а не переліком селекторів:
	 * плаваюче меню і службове табло версії лежать над сторінкою НАВМИСНО і
	 * видимо. Пара «кнопка меню × кнопка сторінки» тому не є «ціль зʼїла
	 * сусіда»: людина цілиться в те, що зверху, і спрацьовує саме воно.
	 *
	 * САМЕ ЕЛЕМЕНТ, А НЕ ПРАПОРЕЦЬ «плаває чи ні». Прапорець тут не працює:
	 * на `/`, `/join` і `/controls` уся сторінка лежить усередині фіксованої
	 * обгортки, тож «плаваючими» ставали геть усі цілі, і поділ переставав
	 * ділити. Порівняння за самим елементом-шаром дає те, що треба, на обох
	 * розкладках: меню — окремий шар, вміст — свій.
	 *
	 * Виняток вузький рівно настільки, наскільки треба: пари всередині ОДНОГО
	 * шару лишаються під перевіркою — зокрема дві кнопки одного меню.
	 */
	const layerOf = (el: Element): Element | null => {
		for (let node: Element | null = el; node; node = node.parentElement) {
			if (getComputedStyle(node).position === 'fixed') return node;
		}
		return null;
	};

	const targets: {
		el: Element;
		rect: DOMRect;
		name: string;
		hint: string;
		layer: Element | null;
	}[] = [];
	for (const el of Array.from(document.querySelectorAll(SELECTOR))) {
		if (excluded?.contains(el)) continue;
		if (el.closest('[aria-hidden="true"], [inert], [hidden]')) continue;
		if ((el as HTMLButtonElement).disabled) continue;

		const style = getComputedStyle(el);
		if (style.visibility === 'hidden' || style.display === 'none') continue;
		if (style.pointerEvents === 'none') continue;

		const rect = el.getBoundingClientRect();
		if (rect.width < 1 || rect.height < 1) continue;
		targets.push({
			el,
			rect,
			name: describe(el),
			hint: hintOf(el),
			layer: layerOf(el)
		});
	}

	/** Прямокутник, вирощений навколо центра до мінімального розміру цілі. */
	function grow(rect: DOMRect): { l: number; r: number; t: number; b: number } {
		const padX = Math.max(0, (minTarget - rect.width) / 2);
		const padY = Math.max(0, (minTarget - rect.height) / 2);
		return {
			l: rect.left - padX,
			r: rect.right + padX,
			t: rect.top - padY,
			b: rect.bottom + padY
		};
	}

	const asBox = (r: DOMRect) => ({ l: r.left, r: r.right, t: r.top, b: r.bottom });
	type Box = ReturnType<typeof asBox>;
	const cross = (x: Box, y: Box) => ({
		dx: Math.min(x.r, y.r) - Math.max(x.l, y.l),
		dy: Math.min(x.b, y.b) - Math.max(x.t, y.t)
	});

	const overlaps: Pair[] = [];
	for (let i = 0; i < targets.length; i++) {
		for (let j = i + 1; j < targets.length; j++) {
			const a = targets[i];
			const b = targets[j];
			if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
			if (a.layer !== b.layer) continue;

			const raw = cross(asBox(a.rect), asBox(b.rect));
			if (raw.dx > tolerance && raw.dy > tolerance) {
				overlaps.push({
					a: a.name,
					b: b.name,
					hintA: a.hint,
					hintB: b.hint,
					dx: Math.round(raw.dx),
					dy: Math.round(raw.dy),
					grown: false
				});
				continue;
			}

			/*
			 * Рівно те, що каже канон: збільшується ОДНА ціль, сусід лишається
			 * як є. Виростити обидві — інша, суворіша вимога, і вона червоніла б
			 * на двох рядах кнопок по 40 px, де жодна з них ще нічого не зʼїла.
			 */
			for (const [grownOne, other] of [
				[a, b],
				[b, a]
			] as const) {
				const hit = cross(grow(grownOne.rect), asBox(other.rect));
				if (hit.dx > tolerance && hit.dy > tolerance) {
					overlaps.push({
						a: grownOne.name,
						b: other.name,
						hintA: grownOne.hint,
						hintB: other.hint,
						dx: Math.round(hit.dx),
						dy: Math.round(hit.dy),
						grown: true
					});
					break;
				}
			}
		}
	}
	return { overlaps, targets: targets.length, layers: new Set(targets.map((t) => t.layer)).size };
}

/** Пара в стабільний рядок: він і є одиницею бази, тож порядок фіксований. */
function key(pair: Pair): string {
	const [first, second] = [pair.a, pair.b].sort();
	return `${first} ↔ ${second}${pair.grown ? ' (після росту до 44×44)' : ''}`;
}

test.use({ viewport: VIEWPORT });

for (const { key: pageKey, path } of PAGES) {
	test(`сенсорні цілі не перекривають сусідні: ${path}`, async ({ page }) => {
		await page.goto(path);
		// Спільний гард на три гейти: розмітка є, переклад приїхав, кількість
		// цілей перестала рости. Останнє тут критичне — саме цей вимір і
		// показав, що /controls рендерить свої 44 клавіші пізніше (див.
		// `tests/wait-for-ui.ts`).
		await waitForMeasurablePage(page);

		const { overlaps, targets, layers } = await page.evaluate(collectOverlaps, {
			tolerance: TOLERANCE_PX,
			minTarget: MIN_TARGET_PX,
			devOnly: DEV_ONLY
		});

		// Канарка: сканер, який не взяв жодної цілі, дає нуль пар і читається як
		// «чисто» (AI-AGENT-PITFALLS-v9 § 1).
		expect(
			targets,
			`${path}: не знайдено жодної інтерактивної цілі — вимір нічого не поміряв`
		).toBeGreaterThan(5);

		// Друга канарка, і вона ж — сторож винятку: поділ на «плаваюче» й «у
		// потоці» має справді щось ділити. Якби `position: fixed` зник з обох
		// шарів або, навпаки, охопив усе, одна з груп спорожніла б, а виняток
		// мовчки перестав би значити те, що написано вище.
		expect(
			layers,
			`${path}: усі цілі в одному шарі — поділ нічого не ділить, і виняток ` +
				'для плаваючих або зайвий, або мовчки зʼїв половину перевірки'
		).toBeGreaterThan(1);

		const found = [...new Set(overlaps.map(key))].sort();
		const expected = [...TOUCH_OVERLAP_BASELINE[pageKey]].sort();

		const detail = overlaps
			.map(
				(o) =>
					`${key(o)} — перекриття ${o.dx}×${o.dy} px` +
					(o.hintA || o.hintB ? ` («${o.hintA}» / «${o.hintB}»)` : '')
			)
			.join('\n  ');

		expect(found, `${path}: перелік пар, що перекриваються:\n  ${detail}`).toEqual(expected);
	});
}
