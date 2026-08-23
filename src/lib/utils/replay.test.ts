import { describe, expect, it, vi, afterEach } from 'vitest';
import {
	replayBlockModeEnabled,
	replayCellVisitCounts,
	replayPosition,
	replaySegments,
	type ReplayState
} from './replay';
import { replayAutoPlayState } from '$lib/stores/replayAutoPlayState.svelte';

/**
 * Обчислення перегляду запису партії.
 *
 * ## Чому цього тесту не було раніше
 *
 * Усі чотири функції приймали `Readable<ReplayState>` і повертали
 * `derived(...)` зі `svelte/store`. Щоб перевірити колір відрізка шляху або
 * прозорість, довелося б створити store, підписатися на похідний і прочитати
 * значення — тобто підняти половину реактивного рантайму заради чистої
 * арифметики. Тому 108 рядків обчислень не перевіряв ніхто.
 *
 * Після переведення на чисті функції тест — це виклик функції.
 */

const entry = (row: number, col: number, over: Partial<ReplayState['moveHistory'][number]> = {}) => ({
	pos: { row, col },
	visits: { [`${row}-${col}`]: 1 },
	blockModeEnabled: true,
	...over
});

const state = (over: Partial<ReplayState> = {}): ReplayState => ({
	isReplayMode: true,
	replayCurrentStep: 0,
	moveHistory: [entry(0, 0), entry(1, 1), entry(2, 2)],
	boardSize: 4,
	limitReplayPath: false,
	...over
});

describe('replayPosition', () => {
	it('віддає позицію поточного кроку', () => {
		expect(replayPosition(state({ replayCurrentStep: 1 }))).toEqual({ row: 1, col: 1 });
	});

	it('поза режимом запису — null', () => {
		expect(replayPosition(state({ isReplayMode: false }))).toBeNull();
	});

	it('крок за межами історії обмежується останнім записом', () => {
		// Не `undefined` і не виняток: контрол перемотування може дати число
		// більше за довжину історії (наприклад, після зміни партії).
		expect(replayPosition(state({ replayCurrentStep: 99 }))).toEqual({ row: 2, col: 2 });
	});

	it('порожня історія не кидає', () => {
		expect(replayPosition(state({ moveHistory: [] }))).toBeNull();
	});
});

describe('replayCellVisitCounts', () => {
	it('віддає лічильники поточного кроку', () => {
		expect(replayCellVisitCounts(state({ replayCurrentStep: 2 }))).toEqual({ '2-2': 1 });
	});

	it('крок із вимкненим блокуванням не показує лічильників', () => {
		// Це не оптимізація: коли на кроці блокування не діяло, підсвічені
		// клітинки означали б правило, якого тоді не було.
		const history = [entry(0, 0), entry(1, 1, { blockModeEnabled: false })];
		expect(replayCellVisitCounts(state({ moveHistory: history, replayCurrentStep: 1 }))).toEqual({});
	});

	it('поза режимом запису — порожньо', () => {
		expect(replayCellVisitCounts(state({ isReplayMode: false }))).toEqual({});
	});
});

describe('replayBlockModeEnabled', () => {
	it('читає прапорець із запису поточного кроку', () => {
		const history = [entry(0, 0, { blockModeEnabled: false }), entry(1, 1)];
		expect(replayBlockModeEnabled(state({ moveHistory: history, replayCurrentStep: 0 }))).toBe(false);
		expect(replayBlockModeEnabled(state({ moveHistory: history, replayCurrentStep: 1 }))).toBe(true);
	});

	it('поза режимом запису — false', () => {
		expect(replayBlockModeEnabled(state({ isReplayMode: false }))).toBe(false);
	});
});

describe('replaySegments', () => {
	it('на N ходів дає N−1 відрізків', () => {
		expect(replaySegments(state())).toHaveLength(2);
	});

	it('менше двох ходів — жодного відрізка', () => {
		expect(replaySegments(state({ moveHistory: [entry(0, 0)] }))).toEqual([]);
	});

	it('координати — центри клітинок у відсотках дошки', () => {
		// boardSize 4 → cellSize 25 → центр першої клітинки 12.5.
		const [first] = replaySegments(state());
		expect(first).toMatchObject({ x1: 12.5, y1: 12.5, x2: 37.5, y2: 37.5 });
	});

	it('градієнт іде від зеленого до червоного', () => {
		const segments = replaySegments(state());
		expect(segments[0].color).toBe('rgb(76, 175, 80)');
		// Останній відрізок ще не «чистий червоний»: ratio = i/totalSteps, і для
		// останнього i воно менше за 1. Саме тому тут не rgb(244, 67, 54).
		expect(segments.at(-1)!.color).toBe('rgb(160, 121, 67)');
	});

	it('без limitReplayPath усі відрізки повністю видимі', () => {
		expect(replaySegments(state()).every((s) => s.opacity === 1)).toBe(true);
	});

	it('з limitReplayPath минуле гасне повільніше за майбутнє', () => {
		const history = [entry(0, 0), entry(1, 1), entry(2, 2), entry(3, 3), entry(0, 3)];
		const segments = replaySegments(
			state({ moveHistory: history, replayCurrentStep: 2, limitReplayPath: true })
		);
		// Минулі: 1 − dist × 0.2. Майбутні: 1 − dist × 0.3.
		expect(segments[0].opacity).toBeCloseTo(0.6); // dist 2, минуле
		expect(segments[1].opacity).toBeCloseTo(0.8); // dist 1, минуле
		expect(segments[2].opacity).toBeCloseTo(1.0); // dist 0
		expect(segments[3].opacity).toBeCloseTo(0.7); // dist 1, майбутнє
	});

	it('прозорість не буває відʼємною', () => {
		const history = Array.from({ length: 12 }, (_, i) => entry(i % 4, Math.floor(i / 4)));
		const segments = replaySegments(
			state({ moveHistory: history, replayCurrentStep: 11, limitReplayPath: true })
		);
		expect(segments.every((s) => s.opacity >= 0)).toBe(true);
	});
});

/**
 * Автоперемотування читає крок ЖИВИМ, а не зі знімка.
 *
 * `replayAutoPlayState.toggleAutoPlay` тримає переданий стан у замиканні
 * `setInterval` і читає `state.replayCurrentStep` на кожному такті. Доки
 * `ReplayViewer` тримав стан у `writable`, він передавав туди `get(store)` —
 * тобто НЕЗМІННИЙ знімок. Наступний крок рахувався від того самого числа
 * щосекунди: перемотування робило один крок і зупинялося, лишаючи вигляд
 * працюючої кнопки. Симптом м'який саме тому, що перший крок відбувався.
 *
 * Після переходу на `$state` компонент передає проксі, читання з якого живе.
 * Тут це відтворено без Svelte: об'єкт, який справді мутують, проти знімка.
 */
describe('автоперемотування йде по кроках, а не топчеться на одному', () => {
	afterEach(() => {
		replayAutoPlayState.stop();
		vi.useRealTimers();
	});

	it('живий обʼєкт стану дає послідовні кроки', () => {
		vi.useFakeTimers();
		const live = { replayCurrentStep: 0, moveHistory: [0, 1, 2, 3, 4], autoPlayDirection: 'paused' as const };
		const seen: number[] = [];

		replayAutoPlayState.toggleAutoPlay(
			'forward',
			live,
			(updates) => Object.assign(live, updates),
			(step) => {
				live.replayCurrentStep = step;
				seen.push(step);
			}
		);

		vi.advanceTimersByTime(3000);
		expect(seen, 'кроки мусять іти 1 → 2 → 3').toEqual([1, 2, 3]);
	});

	it('знімок стану топчеться на одному кроці — саме той дефект', () => {
		vi.useFakeTimers();
		const live = { replayCurrentStep: 0, moveHistory: [0, 1, 2, 3, 4], autoPlayDirection: 'paused' as const };
		// Рівно те, що робив `get(writable)`: копія, яку мутації не зачіпають.
		const snapshot = { ...live };
		const seen: number[] = [];

		replayAutoPlayState.toggleAutoPlay(
			'forward',
			snapshot,
			(updates) => Object.assign(snapshot, updates),
			(step) => {
				live.replayCurrentStep = step;
				seen.push(step);
			}
		);

		vi.advanceTimersByTime(3000);
		expect(
			seen,
			'зі знімком той самий код повторює один крок — це і був дефект до переходу на $state'
		).toEqual([1, 1, 1]);
	});
});
