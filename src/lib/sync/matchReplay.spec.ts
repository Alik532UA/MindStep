import { describe, expect, it, vi } from 'vitest';

/*
 * `logService` — синглтон рівня модуля, і в ланцюжку імпортів він тягне за собою
 * сховище й налаштування. Мокаємо його з тієї самої причини, з якої канон
 * вимагає лінивої ініціалізації SDK: тест логіки не має потребувати оточення
 * браузера, щоб узагалі зібратися.
 */
vi.mock('$lib/services/logService.svelte', () => ({
	logService: new Proxy({}, { get: () => () => {} })
}));

const { MemoryMatchLog } = await import('./matchLog');
const { replayMatch, initialState, initialCellFromSeed } = await import('./matchReplay');
const { GameEngine } = await import('$lib/logic/GameEngine');

import type { MatchMove, MatchSetup } from './matchLog';
import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';
import type { Player } from '$lib/models/player';

/**
 * Онлайн-партія MindStep: стан як чиста функція від (зерно, склад, журнал).
 *
 * Головне, що тут доводиться, — **сервер для узгодження не потрібен**. Якщо двоє
 * з того самого журналу отримують ту саму дошку, то ні авторитету, ні обміну
 * станом не існує: у базі лежить опис партії й журнал, а стан не зберігається
 * ніде.
 *
 * Доти цей шар не мав ЖОДНОГО тесту: стан жив у полі `gameState` одного
 * документа, і будь-яка перевірка вимагала живої бази. Підставний транспорт
 * (`MemoryMatchLog`) знімає цю вимогу — двоє учасників живуть в одному процесі.
 */

const ME = '1';
const OPPONENT = '2';

const player = (id: number, name: string): Player => ({
	id,
	type: 'human',
	name,
	score: 0,
	color: '#000',
	isComputer: false,
	penaltyPoints: 0,
	bonusPoints: 0,
	bonusHistory: [],
	roundScore: 0
});

const settings = (over: Partial<GameSettingsState> = {}): GameSettingsState =>
	({
		boardSize: 4,
		blockModeEnabled: false,
		blockOnVisitCount: 0,
		showBoard: true,
		showMoves: true,
		showPiece: true,
		turnDuration: 30,
		autoHideBoard: false,
		settingsLocked: false,
		speechEnabled: false,
		...over
	}) as GameSettingsState;

const setup = (over: Partial<MatchSetup> = {}): MatchSetup => ({
	seed: 20260817,
	boardSize: 4,
	players: [player(1, 'Я'), player(2, 'Суперник')],
	settings: { blockModeEnabled: false, blockOnVisitCount: 0 },
	...over
});

/** Як виглядає стан: цього досить, щоб два стани збіглися або ні. */
const shape = (state: {
	boardState: { playerRow: number | null; playerCol: number | null; cellVisitCounts: unknown };
	playerState: { currentPlayerIndex: number; players: Player[] };
	scoreState: unknown;
}) =>
	JSON.stringify({
		pos: [state.boardState.playerRow, state.boardState.playerCol],
		visits: state.boardState.cellVisitCounts,
		turn: state.playerState.currentPlayerIndex,
		scores: state.playerState.players.map((p) => p.score),
		score: state.scoreState
	});

/**
 * Знайти хід, який рушій приймає з поточної позиції.
 *
 * Потрібне саме так, а не «завжди вправо на 1»: із випадкової клітинки частина
 * напрямків виводить за межі дошки, і тест на них падав би через себе, а не
 * через гру.
 */
function legalMove(
	state: ReturnType<typeof initialState>,
	cfg: GameSettingsState,
	seq: number,
	by: string
): MatchMove {
	const engine = new GameEngine(cfg);
	const combined = { ...state.boardState, ...state.playerState, ...state.scoreState };
	const directions = ['up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left', 'down-right'];
	for (const direction of directions) {
		for (let distance = 1; distance < cfg.boardSize; distance++) {
			const probe = engine.performMove(
				combined as never,
				direction as never,
				distance,
				state.playerState.currentPlayerIndex,
				'online'
			);
			if (probe.success) return { seq, by, direction: direction as never, distance };
		}
	}
	throw new Error('немає жодного законного ходу — дошка не роздана');
}

describe('партія відтворюється із зерна', () => {
	it('перевірка жива: початкова клітинка в межах дошки', () => {
		const cell = initialCellFromSeed(20260817, 4);
		expect(cell.row).toBeGreaterThanOrEqual(0);
		expect(cell.row).toBeLessThan(4);
		expect(cell.col).toBeGreaterThanOrEqual(0);
		expect(cell.col).toBeLessThan(4);
	});

	it('те саме зерно — та сама клітинка, і це не залежить від прогону', () => {
		expect(initialCellFromSeed(777, 8)).toEqual(initialCellFromSeed(777, 8));
	});

	it('різні зерна дають різні партії', () => {
		const cells = new Set(
			Array.from({ length: 40 }, (_, i) => JSON.stringify(initialCellFromSeed(i * 7919, 8)))
		);
		// Одна клітинка на сорок зерен означала б, що зерно ні на що не впливає.
		expect(cells.size).toBeGreaterThan(5);
	});

	it('фігура стоїть на дошці, і перший запис історії — початкова позиція', () => {
		const state = initialState(setup());
		expect(state.boardState.moveHistory).toHaveLength(1);
		expect(state.boardState.moveHistory[0].pos).toEqual({
			row: state.boardState.playerRow,
			col: state.boardState.playerCol
		});
		expect(state.boardState.board[state.boardState.playerRow!][state.boardState.playerCol!]).toBe(1);
	});
});

describe('журнал дає однаковий стан усім', () => {
	it('двоє з того самого журналу бачать те саме', () => {
		const cfg = settings();
		const description = setup();
		const start = initialState(description);
		const first = legalMove(start, cfg, 1, ME);

		const mine = replayMatch(description, [first], cfg);
		const theirs = replayMatch(description, [first], cfg);

		expect(shape(mine)).toBe(shape(theirs));
		expect(mine.applied).toBe(1);
	});

	it('порядок, у якому приїхали ходи, нічого не змінює', () => {
		const cfg = settings();
		const description = setup();
		let state = initialState(description);
		const moves: MatchMove[] = [];
		for (let seq = 1; seq <= 4; seq++) {
			const by = seq % 2 === 1 ? ME : OPPONENT;
			const move = legalMove(state, cfg, seq, by);
			moves.push(move);
			state = replayMatch(description, moves, cfg);
		}

		const straight = replayMatch(description, moves, cfg);
		const shuffled = replayMatch(description, [...moves].reverse(), cfg);

		expect(shape(shuffled), 'транспорт міг віддати ходи в будь-якому порядку').toBe(shape(straight));
	});

	it('пізній учасник доганяє перепрогоном, а не знімком', () => {
		const cfg = settings();
		const description = setup();
		let state = initialState(description);
		const moves: MatchMove[] = [];
		for (let seq = 1; seq <= 3; seq++) {
			const move = legalMove(state, cfg, seq, seq % 2 === 1 ? ME : OPPONENT);
			moves.push(move);
			state = replayMatch(description, moves, cfg);
		}

		// Той, хто відкрив сторінку щойно, має лише опис і журнал — і цього досить.
		const late = replayMatch(description, moves, cfg);
		expect(shape(late)).toBe(shape(state));
	});
});

describe('незаконний хід нікого не розводить', () => {
	it('хід не в свою черга відкидають — і однаково в усіх', () => {
		const cfg = settings();
		const description = setup();
		const start = initialState(description);
		const legal = legalMove(start, cfg, 1, ME);
		// Перший хід за гравцем з індексом 0, тобто за ME. Підписуємо суперником.
		const stolen: MatchMove = { ...legal, by: OPPONENT };

		const state = replayMatch(description, [stolen], cfg);

		expect(state.applied, 'хід не застосовано').toBe(0);
		expect(state.rejected).toHaveLength(1);
		expect(shape(state), 'дошка не ворухнулася').toBe(shape(start));
	});

	it('хід за межі дошки відкидають', () => {
		const cfg = settings();
		const description = setup();
		const far: MatchMove = { seq: 1, by: ME, direction: 'up' as never, distance: 99 };

		const state = replayMatch(description, [far], cfg);

		expect(state.applied).toBe(0);
		expect(state.rejected).toHaveLength(1);
	});

	it('хід від того, кого немає у складі партії, відкидають', () => {
		const cfg = settings();
		const description = setup();
		const start = initialState(description);
		const outsider: MatchMove = { ...legalMove(start, cfg, 1, ME), by: 'глядач-99' };

		const state = replayMatch(description, [outsider], cfg);

		expect(state.applied).toBe(0);
	});

	it('відкинутий хід не з’їдає чергу наступного', () => {
		// Дефект, який це закриває: якби відкинутий хід зсував чергу, будь-хто
		// одним записом пропускав би чужий хід.
		const cfg = settings();
		const description = setup();
		const start = initialState(description);
		const stolen: MatchMove = { ...legalMove(start, cfg, 1, ME), by: OPPONENT };
		const mine = legalMove(start, cfg, 2, ME);

		const state = replayMatch(description, [stolen, mine], cfg);

		expect(state.applied, 'застосовано лише законний').toBe(1);
		expect(state.playerState.currentPlayerIndex, 'черга перейшла рівно один раз').toBe(1);
	});
});

describe('транспорт журналу', () => {
	it('зайнятий номер ходу займають лише раз', async () => {
		const log = new MemoryMatchLog(setup());
		const first: MatchMove = { seq: 1, by: ME, direction: 'up' as never, distance: 1 };

		expect(await log.append(first), 'перший займає номер').toBe(true);
		expect(await log.append({ ...first, by: OPPONENT }), 'другий отримує відмову').toBe(false);
		expect(log.moves).toHaveLength(1);
		expect(log.moves[0].by, 'у журналі лишився перший').toBe(ME);
	});

	it('підписка одразу віддає поточний стан', async () => {
		const log = new MemoryMatchLog(setup());
		await log.append({ seq: 1, by: ME, direction: 'up' as never, distance: 1 });

		const seen: number[] = [];
		const off = log.watch((snapshot) => seen.push(snapshot.moves.length));

		expect(seen, 'учасник, що зайшов посеред партії, мусить одразу побачити журнал').toEqual([1]);
		off();
	});

	it('час ходу ставить транспорт, а не той, хто надіслав', async () => {
		const log = new MemoryMatchLog(setup());
		await log.append({ seq: 1, by: ME, direction: 'up' as never, distance: 1, at: 5 });
		expect(log.moves[0].at, 'підроблене значення заміщено «серверним»').not.toBe(5);
	});

	it('undefined усередині ходу кидає — як і справжня база', async () => {
		const log = new MemoryMatchLog(setup());
		await expect(
			log.append({ seq: 1, by: ME, direction: undefined as never, distance: 1 })
		).rejects.toThrow(/direction is undefined/);
	});

	it('нова партія стирає журнал і дає нову дошку', async () => {
		const cfg = settings();
		const log = new MemoryMatchLog(setup());
		await log.append({ seq: 1, by: ME, direction: 'up' as never, distance: 1 });

		await log.start(setup({ seed: 999 }));

		expect(log.moves, 'журнал порожній').toHaveLength(0);
		expect(
			shape(replayMatch(setup({ seed: 999 }), [], cfg)),
			'дошка інша, бо зерно інше'
		).not.toBe(shape(replayMatch(setup(), [], cfg)));
	});

	it('відписка справді знімає слухача', async () => {
		const log = new MemoryMatchLog(setup());
		let calls = 0;
		const off = log.watch(() => calls++);
		expect(calls).toBe(1);
		off();
		await log.append({ seq: 1, by: ME, direction: 'up' as never, distance: 1 });
		expect(calls, 'після відписки знімки не приходять').toBe(1);
	});
});
