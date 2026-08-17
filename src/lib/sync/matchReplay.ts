import { GameEngine } from '$lib/logic/GameEngine';
import { createEmptyBoard } from '$lib/utils/boardUtils';
import type { BoardState } from '$lib/stores/boardState.svelte';
import type { PlayerState } from '$lib/stores/playerState.svelte';
import type { ScoreState } from '$lib/stores/scoreState.svelte';
import { initialScoreState } from '$lib/stores/scoreState.svelte';
import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';
import type { CombinedGameState } from '$lib/models/gameState';
import type { MatchMove, MatchSetup } from './matchLog';

/**
 * Стан онлайн-партії як ЧИСТА ФУНКЦІЯ від (зерно, склад, журнал ходів).
 *
 * **Чому це ядро переходу.** Доти стан партії зберігався в базі: один документ
 * `rooms/{id}` із полем `gameState`, у яке писали обидва гравці. Наслідків було
 * три, і всі три лежали в коді:
 *
 *  1. Правило доступу неможливо було звузити — документ пишуть обидва, власника
 *     немає, отже єдиний дозвіл, який не ламав гру, це `allow write: if true`.
 *     Дірка була не в правилі, а в МОДЕЛІ.
 *  2. Останній запис перетирав чужий. `updateDoc` із dot-notation зменшував
 *     площу перетину, але не прибирав її, а `increment(1)` на версії завжди
 *     зростав — тож детектор регресії ловив лише частину випадків і нічого не
 *     відновлював.
 *  3. «Нові ходи» виводилися порівнянням довжин (`moveQueue.length` →
 *     `slice(oldLength)`). Кожен пропущений, злитий або переставлений снапшот
 *     означав втрачену або двічі показану подію — і саме на цьому виросли
 *     захисні прапорці й періоди.
 *
 * Тепер у базі лежить ЛИШЕ те, що не обчислюється: опис партії (зерно, склад,
 * налаштування) і журнал ходів, де хід — окремий документ, який можна лише
 * створити. Стан не зберігається ніде: кожен учасник отримує його перепрогоном.
 *
 * **Що з цього випливає.** Учасник, який зайшов посеред партії, доганяє
 * перепрогоном, а не отримує знімок — тобто окремого механізму «синхронізувати
 * того, хто спізнився» більше не існує. Одне число (`seed`) заміняє всю
 * початкову розкладку. І головне: вимога «обидва бачать те саме» стала
 * ПЕРЕВІРНОЮ звичайним `expect`.
 *
 * **Тут немає жодного джерела нечистоти.** Ні `Math.random()`, ні `Date.now()`,
 * ні звертань до сховища чи DOM. Початкова клітинка — від зерна й лише від
 * нього; усе інше — згортка ходів.
 */

/** Результат перепрогону: рівно ті три стани, які тримають дошку. */
export interface ReplayedState {
	boardState: BoardState;
	playerState: PlayerState;
	scoreState: ScoreState;
	/** Скільком ходам журналу цей стан відповідає. */
	applied: number;
	/** Ходи, які журнал містить, але застосувати не вдалося. */
	rejected: MatchMove[];
}

/**
 * Генератор випадкових чисел від зерна (mulberry32).
 *
 * Свій, а не `Math.random()`, бо потрібна властивість, якої в `Math.random()`
 * немає за побудовою: те саме зерно мусить дати те саме число на кожному
 * пристрої й у кожному прогоні. Саме на цьому тримається «одне число замість
 * усієї початкової розкладки».
 */
function seededRandom(seed: number): () => number {
	let state = seed >>> 0;
	return () => {
		state = (state + 0x6d2b79f5) >>> 0;
		let t = state;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

/** Початкова клітинка партії — від зерна, однакова в усіх. */
export function initialCellFromSeed(seed: number, boardSize: number): { row: number; col: number } {
	const random = seededRandom(seed);
	return {
		row: Math.floor(random() * boardSize),
		col: Math.floor(random() * boardSize)
	};
}

/** Стан партії до першого ходу. Теж чиста функція від опису. */
export function initialState(setup: MatchSetup): ReplayedState {
	/*
	 * Клітинка від зерна — типовий випадок. Явна клітинка приходить лише тоді,
	 * коли це ПРОДОВЖЕННЯ партії: фігура лишається де стояла, а обнуляються
	 * тільки лічильники відвідувань (див. `MatchSetup.startCell`).
	 */
	const { row, col } = setup.startCell ?? initialCellFromSeed(setup.seed, setup.boardSize);
	const board = createEmptyBoard(setup.boardSize);
	board[row][col] = 1;

	return {
		boardState: {
			boardSize: setup.boardSize,
			board,
			playerRow: row,
			playerCol: col,
			cellVisitCounts: {},
			/*
			 * Перший запис історії — не хід, а початкова позиція. `boardState`
			 * виводить із неї і позицію, і лічильники відвідувань, тож без цього
			 * запису дошка не знала б, де стоїть фігура.
			 */
			moveHistory: [
				{
					pos: { row, col },
					blocked: [],
					visits: {},
					blockModeEnabled: setup.settings.blockModeEnabled
				}
			],
			moveQueue: []
		},
		playerState: {
			/*
			 * Копії, а не посилання: згортка не має права правити опис партії.
			 *
			 * Рахунок береться З ОПИСУ, а не обнуляється. Для свіжої партії він і
			 * так нульовий (`startMatch` це гарантує), а для продовження після
			 * «немає ходів» саме тут зберігається все, що гравці набрали.
			 */
			players: setup.players.map((player) => ({ ...player })),
			currentPlayerIndex: setup.startTurnIndex ?? 0
		},
		scoreState: { ...initialScoreState },
		applied: 0,
		rejected: []
	};
}

/**
 * Перепрогнати журнал і отримати стан партії.
 *
 * **Незаконний хід нікого не розводить.** Хід не від того, чия черга, і хід у
 * заблоковану клітинку відкидаються — і відкидаються В УСІХ, бо правило те саме
 * й журнал той самий. Тому учасник, який спробує зіграти позачергово або
 * дописати хід напряму в базу, не зламає партію: його запис просто нічого не
 * означає, і всі бачать це однаково.
 *
 * `rejected` існує не для гри, а для діагностики: тихо проігнорований хід — це
 * саме той клас дефекту, через який доводиться дивитися в базу руками.
 */
export function replayMatch(
	setup: MatchSetup,
	moves: readonly MatchMove[],
	settings: GameSettingsState
): ReplayedState {
	const engine = new GameEngine(settings);
	const state = initialState(setup);
	const byId = new Map(setup.players.map((player, index) => [String(player.id), index]));

	// Порядок ЗАДАЄМО самі. Покладатися на порядок, у якому приїхали документи,
	// означало б грати ту саму партію в різній послідовності на різних пристроях.
	const ordered = [...moves].sort((a, b) => a.seq - b.seq);

	for (const move of ordered) {
		const playerIndex = byId.get(move.by);

		// Хід від того, кого немає в складі (глядач, старий учасник), або не в
		// свою черга — не означає нічого.
		if (playerIndex === undefined || playerIndex !== state.playerState.currentPlayerIndex) {
			state.rejected.push(move);
			continue;
		}

		const combined: CombinedGameState = {
			...state.boardState,
			...state.playerState,
			...state.scoreState
		};

		const result = engine.performMove(
			combined,
			move.direction,
			move.distance,
			playerIndex,
			'online'
		);

		if (!result.success || !result.changes) {
			// Поза межами дошки або в заблоковану клітинку. Так само нічого.
			state.rejected.push(move);
			continue;
		}

		state.boardState = { ...state.boardState, ...result.changes.boardState } as BoardState;
		state.playerState = {
			...state.playerState,
			...result.changes.playerState,
			// Черга переходить рівно так, як у локальній грі: наступний за колом.
			currentPlayerIndex:
				(state.playerState.currentPlayerIndex + 1) % state.playerState.players.length
		};
		state.scoreState = { ...state.scoreState, ...result.changes.scoreState } as ScoreState;
		state.applied++;
	}

	return state;
}
