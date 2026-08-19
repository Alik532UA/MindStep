// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { TOOLTIP_SAFETY_MARGIN, clampTooltipToViewport } from './tooltipPosition';

/**
 * PROJECT-CONTEXT.md тримав рядок: «`Tooltip.svelte` на `export let` — окремий
 * коміт із перевіркою на "підказка не вилазить за край вікна"». Це вона.
 *
 * Перевіряється чиста функція, а не компонент: те, що тут може бути
 * неправильним, — арифметика меж, і вона від DOM не залежить. Сам вимір
 * (`offsetWidth`) компонент тепер бере `bind:`-ом, тобто кодом Svelte, а не
 * власним — перевіряти там нічого.
 */

const VIEWPORT = { viewportWidth: 1000, viewportHeight: 800 };
const SIZE = { width: 200, height: 100 };
const M = TOOLTIP_SAFETY_MARGIN;

describe('clampTooltipToViewport', () => {
	it('лишає координати як є, коли підказка вміщається', () => {
		expect(clampTooltipToViewport({ x: 300, y: 400, ...SIZE, ...VIEWPORT })).toEqual({
			x: 300,
			y: 400
		});
	});

	it('підтягує від правого краю', () => {
		const { x } = clampTooltipToViewport({ x: 950, y: 100, ...SIZE, ...VIEWPORT });
		expect(x).toBe(1000 - 200 - M);
	});

	it('підтягує від нижнього краю', () => {
		const { y } = clampTooltipToViewport({ x: 100, y: 780, ...SIZE, ...VIEWPORT });
		expect(y).toBe(800 - 100 - M);
	});

	it('підтягує від обох країв одночасно', () => {
		expect(clampTooltipToViewport({ x: 990, y: 790, ...SIZE, ...VIEWPORT })).toEqual({
			x: 1000 - 200 - M,
			y: 800 - 100 - M
		});
	});

	it('не пускає за лівий і верхній край при відʼємних координатах', () => {
		expect(clampTooltipToViewport({ x: -50, y: -50, ...SIZE, ...VIEWPORT })).toEqual({
			x: M,
			y: M
		});
	});

	/**
	 * Найцікавіший випадок: підказка ширша за вікно (довгий текст на телефоні).
	 * Підтягування від правого краю дає від'ємний `x`, і без другого кроку
	 * початок тексту опинявся б ЗА екраном. Порядок кроків — саме про це.
	 */
	it('при підказці, ширшій за вікно, лишає видимим початок, а не хвіст', () => {
		const { x } = clampTooltipToViewport({
			x: 100,
			y: 100,
			width: 500,
			height: 100,
			viewportWidth: 320,
			viewportHeight: 640
		});
		expect(x).toBe(M);
	});

	it('невиміряний розмір не рухає підказку', () => {
		expect(
			clampTooltipToViewport({ x: 990, y: 790, width: 0, height: 0, ...VIEWPORT })
		).toEqual({ x: 990, y: 790 });
	});

	it('відступ можна задати явно', () => {
		const { x } = clampTooltipToViewport({ x: 990, y: 10, ...SIZE, ...VIEWPORT, margin: 40 });
		expect(x).toBe(1000 - 200 - 40);
	});
});
