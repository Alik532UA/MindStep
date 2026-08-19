/**
 * Утримання підказки в межах вікна.
 *
 * Винесено з `Tooltip.svelte` окремою чистою функцією не заради краси. Це
 * єдине місце компонента, де є що ламати: решта — розмітка. Доки логіка жила в
 * реактивному блоці `$:` поруч із виміром DOM, перевірити її можна було лише
 * оком і лише в браузері, тобто ніколи. Тут вона перевіряється списком
 * граничних випадків (`tooltipPosition.spec.ts`), а компонент лишається тим,
 * чим має бути, — розміткою.
 */

/** Відступ від краю вікна: підказка впритул до межі виглядає обрізаною. */
export const TOOLTIP_SAFETY_MARGIN = 10;

export interface TooltipPlacement {
	/** Бажаний лівий верхній кут — там, де курсор. */
	x: number;
	y: number;
	/** Виміряний розмір підказки. Нуль означає «ще не виміряно». */
	width: number;
	height: number;
	/** Розмір вікна. */
	viewportWidth: number;
	viewportHeight: number;
	margin?: number;
}

export interface TooltipPoint {
	x: number;
	y: number;
}

/**
 * Підтягує підказку в межі вікна: спершу від правого й нижнього краю, потім від
 * лівого й верхнього.
 *
 * **Порядок важливий і не є стилістикою.** Якщо підказка ширша за вікно,
 * перший крок віднімає її ширину й дає від'ємний `x` — тобто заганяє її за
 * ЛІВИЙ край, ховаючи початок тексту. Другий крок повертає її до `margin`, і
 * обрізаним лишається хвіст, який читач бачить останнім. Зворотний порядок дав
 * би протилежне: втрачається початок.
 *
 * Нульовий розмір означає, що вимір ще не відбувся (перший кадр). Тоді
 * координати віддаються як є — рівно так поводився попередній реактивний блок,
 * і рівно так треба: підтягувати те, чого ще не виміряли, — це посунути
 * підказку на випадкову величину.
 */
export function clampTooltipToViewport({
	x,
	y,
	width,
	height,
	viewportWidth,
	viewportHeight,
	margin = TOOLTIP_SAFETY_MARGIN
}: TooltipPlacement): TooltipPoint {
	if (width <= 0 || height <= 0) return { x, y };

	let nextX = x;
	let nextY = y;

	if (nextX + width + margin > viewportWidth) nextX = viewportWidth - width - margin;
	if (nextY + height + margin > viewportHeight) nextY = viewportHeight - height - margin;
	if (nextX < margin) nextX = margin;
	if (nextY < margin) nextY = margin;

	return { x: nextX, y: nextY };
}
