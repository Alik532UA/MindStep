import {
	doc,
	onSnapshot,
	setDoc,
	updateDoc,
	deleteField,
	collection,
	serverTimestamp,
	type Unsubscribe
} from 'firebase/firestore';
import { getFirestoreDb } from '$lib/services/firebaseService';
import { logService } from '$lib/services/logService.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { FirestoreMatchLog } from './FirestoreMatchLog';
import { replayMatch, initialState } from './matchReplay';
import type { MatchLog, MatchMove, MatchSetup, MatchSnapshot } from './matchLog';
import type {
	IGameStateSync,
	SyncableGameState,
	SyncMoveData,
	GameStateSyncCallback,
	GameStateSyncEvent,
	VoteType
} from './gameStateSync.interface';
import type { MoveDirectionType } from '$lib/models/Piece';
import type { GameOverPayload } from '$lib/stores/gameOverState.svelte';
import type { Player } from '$lib/models/player';

/**
 * Синхронізація онлайн-партії через ЖУРНАЛ ХОДІВ.
 *
 * Замінює `FirebaseGameStateSync`, який тримав усю партію полем `gameState`
 * одного документа. Різниця не в реалізації, а в тому, ЩО лежить у базі:
 *
 * | | було | стало |
 * |---|---|---|
 * | стан партії | поле `gameState`, пишуть обидва | **не зберігається** — перепрогін журналу |
 * | хід | перезапис усього стану | окремий документ `moves/{seq}`, лише створити |
 * | голос | поле в `gameState` | власний документ `votes/{playerId}` |
 * | кінець партії | поле в `gameState` | `matchOver` у кімнаті, пише господар |
 *
 * **Що це полагодило.**
 *
 *  1. *Правило доступу.* Документ без власника вимагав `allow write: if true`.
 *     Тепер у кожного запису є автор, і правило звужене до нього.
 *  2. *Перетирання.* Двоє більше не пишуть той самий документ: ходи — різні
 *     документи, голоси — різні документи. Зникає і межа «~1 запис/с».
 *  3. *«Що нового».* Раніше це виводили порівнянням довжини `moveQueue`, і
 *     кожен злитий чи переставлений снапшот означав втрачену або двічі показану
 *     подію. Тепер стан — детермінована функція журналу, тож він просто
 *     перераховується.
 *
 * **Інтерфейс `IGameStateSync` лишився тим самим навмисно.** Він і був швом:
 * решта онлайн-коду говорить `SyncableGameState`, а звідки цей стан узявся —
 * прочитаний із бази чи обчислений із журналу — її не стосується. Завдяки цьому
 * заміна моделі не розповзлася по грі.
 */
export class MatchLogGameStateSync implements IGameStateSync {
	#roomId: string | null = null;
	#myPlayerId: string;
	#log: MatchLog | null = null;
	#unwatch: (() => void) | null = null;
	#unsubscribeSide: Unsubscribe | null = null;
	#subscribers = new Set<GameStateSyncCallback>();

	#snapshot: MatchSnapshot = { setup: null, moves: [] };
	/** Голоси, заявки й кінець партії — усе, що не є ходом. */
	#side: {
		votes: Record<string, VoteType>;
		finishRequests: Record<string, boolean>;
		claim: SyncableGameState['noMovesClaim'];
		over: GameOverPayload | null;
	} = { votes: {}, finishRequests: {}, claim: null, over: null };

	#connected = false;

	constructor(myPlayerId: string) {
		this.#myPlayerId = myPlayerId;
	}

	get sessionId(): string | null {
		return this.#roomId;
	}

	get isConnected(): boolean {
		return this.#connected;
	}

	/** Номер, під яким піде наступний хід. Журнал відкине повтор сам. */
	get nextSeq(): number {
		return this.#snapshot.moves.length > 0
			? Math.max(...this.#snapshot.moves.map((move) => move.seq)) + 1
			: 1;
	}

	get hasMatch(): boolean {
		return this.#snapshot.setup !== null;
	}

	async initialize(sessionId?: string): Promise<void> {
		if (!sessionId) throw new Error('MatchLogGameStateSync: потрібен roomId');
		this.#roomId = sessionId;
		this.#log = new FirestoreMatchLog(sessionId);

		this.#unwatch = this.#log.watch((snapshot) => {
			this.#snapshot = snapshot;
			this.#emitState();
		});
		this.#watchSide(sessionId);
		this.#connected = true;
		logService.init(`[MatchLogGameStateSync] під'єднано до кімнати ${sessionId}`);
	}

	/**
	 * Почати партію: записати опис і стерти журнал. Кличе ГОСПОДАР.
	 *
	 * Зерно тут — єдине джерело початкової розкладки. Одне число замість усього
	 * стану дошки, і саме воно робить дошку однаковою в усіх без обміну станом.
	 */
	async startMatch(
		players: Player[],
		boardSize: number,
		options: { seed?: number; startCell?: { row: number; col: number }; startTurnIndex?: number } = {}
	): Promise<void> {
		if (!this.#log) return;
		const settings = gameSettingsState.state;
		const setup: MatchSetup = {
			seed: options.seed ?? Math.floor(Math.random() * 2 ** 31),
			boardSize,
			/*
			 * Рахунок обнуляється тут, а не в перепрогоні. Різниця важлива: свіжа
			 * партія починається з нуля, а ПРОДОВЖЕННЯ після «немає ходів» передає
			 * накопичений рахунок через `players` — і перепрогін бере його як є.
			 */
			players: players.map((player) => ({
				...player,
				score: options.startCell ? player.score : 0
			})),
			settings: {
				blockModeEnabled: settings.blockModeEnabled,
				blockOnVisitCount: settings.blockOnVisitCount,
				boardSize
			},
			...(options.startCell ? { startCell: options.startCell } : {}),
			...(options.startTurnIndex !== undefined ? { startTurnIndex: options.startTurnIndex } : {})
		};
		await this.#log.start(setup);
		await this.#clearSide();
	}

	/**
	 * Продовжити партію після «немає ходів»: нові лічильники, та сама позиція,
	 * той самий рахунок, наступна черга.
	 *
	 * У моделі журналу це НОВИЙ ВІДРІЗОК, а не правка стану — опис переписується,
	 * журнал стирається. Тому обнулення лічильників відвідувань не потребує
	 * жодного «скинути поле»: їх просто немає в новому відрізку.
	 */
	async continueMatch(): Promise<void> {
		const current = this.pullSync();
		if (!current || !this.#snapshot.setup) return;

		const board = current.boardState;
		const next =
			(current.playerState.currentPlayerIndex + 1) % current.playerState.players.length;

		await this.startMatch(current.playerState.players, board.boardSize, {
			seed: this.#snapshot.setup.seed,
			startCell: { row: board.playerRow ?? 0, col: board.playerCol ?? 0 },
			startTurnIndex: next
		});
	}

	/**
	 * Дописати хід.
	 *
	 * `false` означає, що номер уже зайнятий — тобто цей хід НЕ відбувся. Не
	 * помилка: журнал і є правда, а клієнтської перевірки «чи вільний номер» тут
	 * немає навмисно — між перевіркою й записом лежить мережа.
	 */
	async appendMove(direction: MoveDirectionType, distance: number): Promise<boolean> {
		if (!this.#log) return false;
		const move: MatchMove = {
			seq: this.nextSeq,
			by: this.#myPlayerId,
			direction,
			distance
		};
		return this.#log.append(move);
	}

	/**
	 * Стан партії — обчислений, а не прочитаний.
	 *
	 * Повертає `null`, доки господар не написав опис: партії ще немає, і показувати
	 * нема чого.
	 */
	pullSync(): SyncableGameState | null {
		const setup = this.#snapshot.setup;
		if (!setup) return null;

		const replayed = replayMatch(setup, this.#snapshot.moves, gameSettingsState.state);

		return {
			boardState: replayed.boardState,
			playerState: replayed.playerState,
			scoreState: replayed.scoreState,
			settings: setup.settings,
			// Версія = скільки ходів застосовано. Монотонна за побудовою, тож
			// «регресія версії» тут неможлива в принципі.
			version: replayed.applied,
			updatedAt: setup.startedAt ?? 0,
			gameOver: this.#side.over,
			noMovesVotes: this.#side.votes,
			finishRequests: this.#side.finishRequests,
			noMovesClaim: this.#side.claim
		};
	}

	async pullState(): Promise<SyncableGameState | null> {
		return this.pullSync();
	}

	/**
	 * Сумісність з інтерфейсом: у моделі журналу «запхати стан» не існує.
	 *
	 * Стан обчислюється, тож із усього, що приходить сюди, до бази потрапляє лише
	 * те, що журналом не виводиться: кінець партії й заявка «немає ходів».
	 */
	async pushState(state: SyncableGameState): Promise<void> {
		await this.patchState(state);
	}

	async patchState(updates: Partial<SyncableGameState>): Promise<void> {
		if (!this.#roomId) return;

		if (updates.gameOver !== undefined) await this.#writeOver(updates.gameOver);
		if (updates.noMovesClaim !== undefined) await this.#writeMine({ claim: updates.noMovesClaim });
		if (updates.settings) await this.#writeSettings(updates.settings);

		// Порожній обʼєкт голосів означає «скинути голосування» — це робить
		// господар після того, як більшість вирішила продовжити.
		if (updates.noMovesVotes && Object.keys(updates.noMovesVotes).length === 0) {
			await this.#clearSide();
		}
	}

	async resetState(): Promise<void> {
		await this.#clearSide();
	}

	/** Голос гравця — його ВЛАСНИЙ документ, тож перетирати нема чого. */
	async updateVote(playerId: string, vote: VoteType): Promise<void> {
		await this.#writeMine({ vote }, playerId);
	}

	async updateFinishRequest(playerId: string, requested: boolean): Promise<void> {
		await this.#writeMine({ finishRequested: requested }, playerId);
	}

	/**
	 * Історичний метод інтерфейсу. У моделі журналу хід дописує `appendMove`, і
	 * окремої «копії ходу» більше не існує — вона й була дублюванням.
	 */
	async pushMove(_moveData: SyncMoveData): Promise<void> {
		/* нічого: журнал уже містить хід */
	}

	subscribe(callback: GameStateSyncCallback): () => void {
		this.#subscribers.add(callback);
		return () => this.#subscribers.delete(callback);
	}

	async cleanup(): Promise<void> {
		this.#unwatch?.();
		this.#unsubscribeSide?.();
		this.#log?.cleanup();
		this.#unwatch = null;
		this.#unsubscribeSide = null;
		this.#log = null;
		this.#subscribers.clear();
		this.#connected = false;
		this.#roomId = null;
		this.#snapshot = { setup: null, moves: [] };
		logService.init('[MatchLogGameStateSync] прибрано');
	}

	// --- нижче: те, що не виводиться з журналу ---

	/**
	 * Голоси, заявки й запити на завершення.
	 *
	 * Кожен гравець пише РІВНО ОДИН документ — про себе. Тому правило доступу
	 * тут однорядкове (`playerId == auth.uid`), а перетирання чужого голосу
	 * неможливе за побудовою. Доти все це лежало полями в `gameState`, тож
	 * проголосувати означало переписати весь стан партії.
	 */
	#watchSide(roomId: string): void {
		const db = getFirestoreDb();
		this.#unsubscribeSide = onSnapshot(
			collection(doc(db, 'rooms', roomId), 'votes'),
			(snapshot) => {
				const votes: Record<string, VoteType> = {};
				const finishRequests: Record<string, boolean> = {};
				let claim: SyncableGameState['noMovesClaim'] = null;
				let over: GameOverPayload | null = null;

				snapshot.forEach((entry) => {
					const data = entry.data() as {
						vote?: VoteType;
						finishRequested?: boolean;
						claim?: SyncableGameState['noMovesClaim'];
						over?: GameOverPayload;
					};
					if (data.vote) votes[entry.id] = data.vote;
					if (data.finishRequested) finishRequests[entry.id] = true;
					if (data.claim) claim = data.claim;
					// Кінець партії оголошує господар — документ `__match`.
					if (entry.id === '__match' && data.over) over = data.over;
				});

				this.#side = { votes, finishRequests, claim, over };
				this.#emitState();
			},
			(error) => {
				logService.error('[MatchLogGameStateSync] підписка на голоси впала', error);
				this.#connected = false;
				this.#notify({ type: 'connection_lost' });
			}
		);
	}

	async #writeMine(
		patch: Record<string, unknown>,
		playerId = this.#myPlayerId
	): Promise<void> {
		if (!this.#roomId) return;
		const db = getFirestoreDb();
		await setDoc(
			doc(db, 'rooms', this.#roomId, 'votes', playerId),
			{ ...patch, at: serverTimestamp() },
			{ merge: true }
		);
	}

	/** Кінець партії — окремий документ, який пише лише той, хто його оголосив. */
	async #writeOver(over: GameOverPayload | null | undefined): Promise<void> {
		if (!this.#roomId) return;
		const db = getFirestoreDb();
		await setDoc(
			doc(db, 'rooms', this.#roomId, 'votes', '__match'),
			over ? { over, at: serverTimestamp() } : { over: deleteField() },
			{ merge: true }
		);
	}

	async #writeSettings(settings: Partial<SyncableGameState['settings']>): Promise<void> {
		if (!this.#roomId) return;
		const db = getFirestoreDb();
		await updateDoc(doc(db, 'rooms', this.#roomId), {
			settings: { ...settings },
			lastActivity: Date.now()
		});
	}

	/** Стерти голоси й заявки — нова партія або «продовжуємо». */
	async #clearSide(): Promise<void> {
		if (!this.#roomId) return;
		const db = getFirestoreDb();
		const ids = new Set([...Object.keys(this.#side.votes), '__match', this.#myPlayerId]);
		await Promise.all(
			[...ids].map((id) =>
				setDoc(
					doc(db, 'rooms', this.#roomId!, 'votes', id),
					{ vote: deleteField(), finishRequested: deleteField(), claim: deleteField(), over: deleteField() },
					{ merge: true }
				).catch(() => {
					/* чужий документ прибрати не дадуть — і правильно */
				})
			)
		);
	}

	#emitState(): void {
		const state = this.pullSync();
		if (!state) return;
		this.#notify({ type: 'state_updated', state });
	}

	#notify(event: GameStateSyncEvent): void {
		this.#subscribers.forEach((callback) => {
			try {
				callback(event);
			} catch (error) {
				logService.error('[MatchLogGameStateSync] підписник кинув', error);
			}
		});
	}
}

/** Стан партії до першого ходу — потрібен, щоб показати дошку одразу. */
export { initialState as initialMatchState };

export function createMatchLogGameStateSync(myPlayerId: string): MatchLogGameStateSync {
	return new MatchLogGameStateSync(myPlayerId);
}
