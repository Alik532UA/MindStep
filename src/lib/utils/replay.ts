/**
 * Обчислення для перегляду запису партії — ЧИСТІ ФУНКЦІЇ від стану.
 *
 * ## Що тут було і чому змінилося
 *
 * Кожна з чотирьох функцій приймала `Readable<ReplayState>` і повертала
 * `derived(...)` зі `svelte/store`. Тобто модуль обчислень залежав від
 * реактивної системи Svelte 4, а обчислення без неї викликати було неможливо.
 * Два наслідки, обидва відчутні:
 *
 * 1. **Ці 108 рядків арифметики не мали жодного тесту.** Щоб перевірити колір
 *    відрізка шляху або прозорість, довелося б створювати store, підписуватися
 *    на похідний і читати значення — тобто піднімати половину рантайму заради
 *    чистої математики.
 * 2. `writable` у компоненті-споживачі був **обов'язковим**: похідний потребує
 *    store на вході, тож перевести компонент на руни, не змінивши цей модуль,
 *    не вийшло б.
 *
 * Тепер це звичайні функції `(state) => результат`. У компоненті вони
 * загортаються в `$derived`, у тесті викликаються напряму. Логіка не змінилася
 * ані на рядок — змінилася тільки межа.
 *
 * SVELTE-CORE-v8, анти-патерни: `writable`/`derived` зі `svelte/store` у
 * Svelte-5 коді. Interop із чужою бібліотекою, яка віддає лише store
 * (`svelte-i18n`), під це правило не підпадає — там store законний. Тут же
 * store був наш власний, і нічого, крім залежності, не додавав.
 */

export interface ReplayHistoryEntry {
	pos: { row: number; col: number };
	visits: Record<string, number>;
	blockModeEnabled: boolean;
}

export interface ReplayState {
	isReplayMode: boolean;
	replayCurrentStep: number;
	moveHistory: ReplayHistoryEntry[];
	boardSize: number;
	limitReplayPath: boolean;
}

/** Індекс запису історії, обмежений її межами. */
function historyIndexOf(state: ReplayState): number {
	return Math.min(state.replayCurrentStep, state.moveHistory.length - 1);
}

/** Позиція фігури на поточному кроці перемотування; `null` поза режимом запису. */
export function replayPosition(state: ReplayState): { row: number; col: number } | null {
	if (!state.isReplayMode) return null;
	return state.moveHistory[historyIndexOf(state)]?.pos ?? null;
}

/** Скільки разів відвідано кожну клітинку на поточному кроці. */
export function replayCellVisitCounts(state: ReplayState): Record<string, number> {
	if (!state.isReplayMode) return {};

	const entry = state.moveHistory[historyIndexOf(state)];
	// Режим блокування вимкнений на цьому кроці — лічильники не показуються.
	if (entry && entry.blockModeEnabled === false) return {};
	return entry?.visits ?? {};
}

export interface ReplaySegment {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	color: string;
	opacity: number;
}

/**
 * Відрізки шляху між послідовними ходами, з градієнтом від зеленого до червоного.
 *
 * `limitReplayPath` гасить віддалені від поточного кроку відрізки — минулі
 * швидше (0.2 на крок), майбутні повільніше (0.3): так видно, куди фігура вже
 * прийшла, і не видно, куди піде.
 */
export function replaySegments(state: ReplayState): ReplaySegment[] {
	if (!state.isReplayMode || state.moveHistory.length < 2) return [];

	const segments: ReplaySegment[] = [];
	const history = state.moveHistory;
	const totalSteps = history.length - 1;
	const cellSize = 100 / state.boardSize;
	const currentStep = state.replayCurrentStep;
	const limitPath = state.limitReplayPath;

	const startColor = { r: 76, g: 175, b: 80 };
	const endColor = { r: 244, g: 67, b: 54 };

	for (let i = 0; i < totalSteps; i++) {
		const startPos = history[i].pos;
		const endPos = history[i + 1].pos;

		const ratio = i / totalSteps;
		const r = Math.round(startColor.r + ratio * (endColor.r - startColor.r));
		const g = Math.round(startColor.g + ratio * (endColor.g - startColor.g));
		const b = Math.round(startColor.b + ratio * (endColor.b - startColor.b));

		let opacity = 1.0;
		if (limitPath) {
			const dist = Math.abs(i - currentStep);
			if (i < currentStep) {
				// Минулі ходи
				opacity = Math.max(0, 1.0 - dist * 0.2);
			} else {
				// Майбутні ходи
				opacity = Math.max(0, 1.0 - dist * 0.3);
			}
		}

		segments.push({
			x1: startPos.col * cellSize + cellSize / 2,
			y1: startPos.row * cellSize + cellSize / 2,
			x2: endPos.col * cellSize + cellSize / 2,
			y2: endPos.row * cellSize + cellSize / 2,
			color: `rgb(${r}, ${g}, ${b})`,
			opacity: Math.max(0, opacity)
		});
	}
	return segments;
}

/** Чи діяв режим блокування на поточному кроці перемотування. */
export function replayBlockModeEnabled(state: ReplayState): boolean {
	if (!state.isReplayMode) return false;
	return state.moveHistory[historyIndexOf(state)]?.blockModeEnabled ?? false;
}
