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

const { MemoryMatchLog, moveKey } = await import('./matchLog');
const { replayMatch, initialState, initialCellFromSeed, rulesOf } = await import('./matchReplay');
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
			if (probe.success) return { segment: 0, seq, by, direction: direction as never, distance };
		}
	}
	throw new Error('немає жодного законного ходу — дошка не роздана');
}

/**
 * ПІДПИС ХОДУ Й НОМЕР МІСЦЯ — РІЗНІ РЕЧІ, і на цьому онлайн стояв мертвий.
 *
 * Правило `moves` вимагає `by == request.auth.uid`, тож хід підписано довгим
 * рядком автентифікації. А `MatchSetup.players` — це склад для рушія, і `id`
 * там номер місця: 1, 2. Перепрогін будував зіставлення з номерів місць і
 * шукав у ньому `auth.uid` — не знаходив НІКОЛИ й відкидав кожен хід.
 *
 * Ось як це виглядало для гравця: натиск нічого не робить, дошка не рухається,
 * помилок немає, ходи справно лежать у базі. Заміряно 2026-08-25 на живій
 * кімнаті: три ходи в журналі, `applied = 0`.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати гілку
 * `setup.playerIds` у `replayMatch` — обидві перевірки нижче червоніють, а
 * `applied` стає нулем.
 */
describe('підпис ходу зіставляється з місцем', () => {
	const HOST_UID = 'fuVEIXPINgxC6kU0yqV4VvEkjRfo';
	const GUEST_UID = 'kV1Qf0tFptvA2uLX1S6oePKPXYuE';

	/** Рівно та форма, яку записує господар у живій кімнаті. */
	const online = () =>
		setup({
			players: [player(1, 'Lucas'), player(2, 'William')],
			playerIds: [HOST_UID, GUEST_UID]
		});

	it('хід, підписаний auth.uid, зараховується', () => {
		const cfg = settings();
		const description = online();
		const first = legalMove(initialState(description), cfg, 1, HOST_UID);

		const replayed = replayMatch(description, [first], cfg);

		expect(replayed.applied, 'хід від того, чия черга, мусить застосуватися').toBe(1);
		expect(replayed.rejected, 'відкидати тут нема чого').toEqual([]);
		expect(replayed.playerState.currentPlayerIndex, 'черга мусить перейти суперникові').toBe(1);
	});

	/**
	 * Чужий підпис лишається нічим. Інакше «зіставлення за uid» відкрило б рівно
	 * ту дірку, заради якої підпис і потрібен: будь-хто дописав би хід у журнал.
	 */
	it('хід від стороннього не означає нічого', () => {
		const cfg = settings();
		const description = online();
		const stranger = legalMove(initialState(description), cfg, 1, 'сторонній-uid');

		const replayed = replayMatch(description, [stranger], cfg);

		expect(replayed.applied).toBe(0);
		expect(replayed.rejected).toHaveLength(1);
	});

	/**
	 * Кімнати, створені до появи `playerIds`, читаються далі — там підписом було
	 * саме число місця.
	 */
	it('старий опис без підписів працює по номерах місць', () => {
		const cfg = settings();
		const description = setup();
		const first = legalMove(initialState(description), cfg, 1, ME);

		expect(replayMatch(description, [first], cfg).applied).toBe(1);
	});
});

/**
 * ПРАВИЛА ПАРТІЇ ЖИВУТЬ В ОПИСІ, А НЕ В НАЛАШТУВАННЯХ ГРАВЦЯ.
 *
 * Це і є та межа, на якій тримається «сервер для узгодження не потрібен». У
 * перепрогін ішов ЛОКАЛЬНИЙ стан налаштувань — тобто той самий журнал у двох
 * браузерах згортався в різні дошки, щойно в когось інакший режим блокування.
 *
 * Заміряно 2026-08-25 у грі вдвох: після перезавантаження сторінки господар
 * відкинув хід гостя, який гість застосував. Двоє з одного журналу побачили
 * різну чергу — і жодного повідомлення про це не було.
 *
 * Зворотний експеримент (§ 1.1): передати в `replayMatch` голі місцеві
 * налаштування замість `rulesOf(...)` — «двоє з різними налаштуваннями бачать
 * те саме» червоніє.
 */
describe('правила беруться з опису партії', () => {
	const blocking = () =>
		setup({
			boardSize: 3,
			settings: { blockModeEnabled: true, blockOnVisitCount: 0, boardSize: 3 }
		});

	it('двоє з різними налаштуваннями бачать те саме', () => {
		const description = blocking();

		// Двоє гравців із протилежними місцевими налаштуваннями блокування.
		const mine = rulesOf(description, settings({ blockModeEnabled: true, blockOnVisitCount: 0 }));
		const theirs = rulesOf(description, settings({ blockModeEnabled: false, blockOnVisitCount: 9 }));

		// Журнал будуємо за правилами партії — інакше «законний хід» уже залежав би
		// від того, чиїми очима ми на нього дивимося.
		const start = initialState(description);
		const first = legalMove(start, mine, 1, ME);
		const afterFirst = replayMatch(description, [first], mine);
		const second = legalMove(afterFirst, mine, 2, OPPONENT);

		const journal = [first, second];

		expect(shape(replayMatch(description, journal, theirs))).toBe(
			shape(replayMatch(description, journal, mine))
		);
		expect(replayMatch(description, journal, theirs).applied, 'обидва ходи мусять застосуватися').toBe(2);
	});

	it('опис перекриває місцеве саме в тому, від чого залежить хід', () => {
		const rules = rulesOf(blocking(), settings({ blockModeEnabled: false, blockOnVisitCount: 9 }));

		expect(rules.blockModeEnabled, 'режим блокування — з опису').toBe(true);
		expect(rules.blockOnVisitCount, 'поріг блокування — з опису').toBe(0);
		expect(rules.boardSize, 'розмір дошки — з опису').toBe(3);
	});

	it('решта налаштувань лишається місцевою', () => {
		const rules = rulesOf(blocking(), settings({ showBoard: false, speechEnabled: true }));

		expect(rules.showBoard, 'показ дошки нікого, крім мене, не стосується').toBe(false);
		expect(rules.speechEnabled).toBe(true);
	});
});

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
		const far: MatchMove = { segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 99 };

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

describe('продовження партії після «немає ходів»', () => {
	/*
	 * Найтонший сценарій цієї моделі. Коли гравцеві немає куди ходити, решта
	 * голосує; якщо більшість за продовження — лічильники відвідувань
	 * обнуляються, фігура ЛИШАЄТЬСЯ де стоїть, рахунок зберігається, а черга йде
	 * далі.
	 *
	 * У журналі це не «правка стану», а НОВИЙ ВІДРІЗОК: опис переписується,
	 * журнал стирається. Без трьох полів опису (`startCell`, `startTurnIndex`,
	 * рахунок у `players`) «продовжити» означало б «почати спочатку» — і саме це
	 * тут і перевіряється.
	 */
	it('фігура лишається на місці, а лічильники обнуляються', () => {
		const cfg = settings();
		const description = setup();
		let state = initialState(description);
		const moves: MatchMove[] = [];
		for (let seq = 1; seq <= 3; seq++) {
			moves.push(legalMove(state, cfg, seq, seq % 2 === 1 ? ME : OPPONENT));
			state = replayMatch(description, moves, cfg);
		}
		expect(Object.keys(state.boardState.cellVisitCounts).length).toBeGreaterThan(0);

		const continued = initialState({
			...description,
			startCell: { row: state.boardState.playerRow!, col: state.boardState.playerCol! },
			startTurnIndex: 1
		});

		expect(continued.boardState.playerRow, 'фігура там само').toBe(state.boardState.playerRow);
		expect(continued.boardState.playerCol).toBe(state.boardState.playerCol);
		expect(continued.boardState.cellVisitCounts, 'лічильники чисті').toEqual({});
		expect(continued.playerState.currentPlayerIndex, 'черга наступного').toBe(1);
	});

	it('рахунок переживає продовження', () => {
		const description = setup({
			players: [{ ...player(1, 'Я'), score: 7 }, { ...player(2, 'Суперник'), score: 4 }],
			startCell: { row: 1, col: 1 }
		});

		const continued = initialState(description);

		// Рахунок береться З ОПИСУ. Якби перепрогін його обнуляв, «продовжити»
		// коштувало б гравцям усього набраного.
		expect(continued.playerState.players.map((p) => p.score)).toEqual([7, 4]);
	});

	it('свіжа партія все одно починається від зерна й з нуля', () => {
		const description = setup();
		const fresh = initialState(description);
		const fromSeed = initialCellFromSeed(description.seed, description.boardSize);

		expect({ row: fresh.boardState.playerRow, col: fresh.boardState.playerCol }).toEqual(fromSeed);
		expect(fresh.playerState.currentPlayerIndex).toBe(0);
		expect(fresh.playerState.players.every((p) => p.score === 0)).toBe(true);
	});
});

describe('транспорт журналу', () => {
	it('зайнятий номер ходу займають лише раз', async () => {
		const log = new MemoryMatchLog(setup());
		const first: MatchMove = { segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1 };

		expect(await log.append(first), 'перший займає номер').toBe(true);
		expect(await log.append({ ...first, by: OPPONENT }), 'другий отримує відмову').toBe(false);
		expect(log.moves).toHaveLength(1);
		expect(log.moves[0].by, 'у журналі лишився перший').toBe(ME);
	});

	it('підписка одразу віддає поточний стан', async () => {
		const log = new MemoryMatchLog(setup());
		await log.append({ segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1 });

		const seen: number[] = [];
		const off = log.watch((snapshot) => seen.push(snapshot.moves.length));

		expect(seen, 'учасник, що зайшов посеред партії, мусить одразу побачити журнал').toEqual([1]);
		off();
	});

	it('час ходу ставить транспорт, а не той, хто надіслав', async () => {
		const log = new MemoryMatchLog(setup());
		await log.append({ segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1, at: 5 });
		expect(log.moves[0].at, 'підроблене значення заміщено «серверним»').not.toBe(5);
	});

	it('undefined усередині ходу кидає — як і справжня база', async () => {
		const log = new MemoryMatchLog(setup());
		await expect(
			log.append({ segment: 0, seq: 1, by: ME, direction: undefined as never, distance: 1 })
		).rejects.toThrow(/direction is undefined/);
	});

	it('нова партія НЕ стирає журнал, а починає новий відрізок', async () => {
		/*
		 * Доти цей тест вимагав протилежного — щоб журнал спорожнів, — і саме тому
		 * приймав реалізацію, у якій «нова партія» означала прочитати всі ходи й
		 * видалити їх батчем. У Firestore це давало три дефекти одразу: платню за
		 * кожен хід удруге, межу батча 500 (партія довша за 499 ходів не
		 * перезапускалася) і `get()` на кімнату в правилі видалення при межі 20
		 * звернень на батч (CLOUD-DATABASE-v8 § 8.7, § 4.8).
		 */
		const cfg = settings();
		const log = new MemoryMatchLog(setup());
		await log.append({ segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1 });

		await log.start(setup({ seed: 999, segment: 1 }));

		expect(log.moves, 'старий хід лишається в журналі назавжди').toHaveLength(1);
		expect(
			shape(replayMatch(setup({ seed: 999 }), [], cfg)),
			'дошка інша, бо зерно інше'
		).not.toBe(shape(replayMatch(setup(), [], cfg)));
	});

	it('ходи попереднього відрізка не потрапляють у поточний', async () => {
		// Це і є те, що раніше забезпечувалося видаленням. Тепер — фільтром за
		// сегментом, тож старі ходи лишаються, але на стан не впливають.
		const log = new MemoryMatchLog(setup());
		await log.append({ segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1 });

		let seen: MatchMove[] = [];
		log.watch((snapshot) => (seen = snapshot.moves));
		expect(seen, 'у нульовому відрізку хід видно').toHaveLength(1);

		await log.start(setup({ segment: 1 }));
		expect(seen, 'у першому відрізку ходів нульового не видно').toHaveLength(0);

		await log.append({ segment: 1, seq: 1, by: ME, direction: 'up' as never, distance: 1 });
		expect(seen, 'номери починаються заново в кожному відрізку').toHaveLength(1);
		expect(seen[0].segment).toBe(1);
	});

	it('той самий номер у РІЗНИХ відрізках — не колізія', async () => {
		// Ключ документа — пара (сегмент, номер). Підставка, яка відмовляла б за
		// номером самим по собі, забороняла б перший хід нового відрізка.
		const log = new MemoryMatchLog(setup());
		expect(
			await log.append({ segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1 })
		).toBe(true);
		expect(
			await log.append({ segment: 1, seq: 1, by: ME, direction: 'up' as never, distance: 1 }),
			'той самий номер в іншому відрізку мусить пройти'
		).toBe(true);
		expect(
			await log.append({ segment: 1, seq: 1, by: ME, direction: 'up' as never, distance: 1 }),
			'той самий номер у ТОМУ САМОМУ відрізку — зайнятий'
		).toBe(false);
	});

	it('ключ ходу впорядкований лексикографічно так само, як числом', () => {
		// Без вирівнювання нулями «10» стало б між «1» і «2», і партія грала б у
		// різній послідовності на різних пристроях (§ 8.2).
		const keys = [moveKey(0, 2), moveKey(0, 10), moveKey(0, 1), moveKey(1, 1)];
		expect([...keys].sort()).toEqual([moveKey(0, 1), moveKey(0, 2), moveKey(0, 10), moveKey(1, 1)]);
	});

	it('відписка справді знімає слухача', async () => {
		const log = new MemoryMatchLog(setup());
		let calls = 0;
		const off = log.watch(() => calls++);
		expect(calls).toBe(1);
		off();
		await log.append({ segment: 0, seq: 1, by: ME, direction: 'up' as never, distance: 1 });
		expect(calls, 'після відписки знімки не приходять').toBe(1);
	});
});
