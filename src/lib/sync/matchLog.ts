import type { MoveDirectionType } from '$lib/models/Piece';
import type { Player } from '$lib/models/player';
import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';

/**
 * Конверт онлайн-партії: опис + ЖУРНАЛ ХОДІВ.
 *
 * Форма даних у Firestore:
 *
 * ```
 * rooms/{roomId}                     — кімната: склад, статус, налаштування
 * rooms/{roomId}.match               — опис партії: { seed, boardSize, players, settings }
 * rooms/{roomId}/moves/{seq}         — ОДИН ХІД: { seq, by, direction, distance, at }
 * rooms/{roomId}/votes/{playerId}    — голос гравця: { vote, at }
 * rooms/{roomId}/presence/{playerId} — присутність
 * ```
 *
 * **Кожен запис має ВЛАСНИКА, і саме це дозволяє звузити правила.** Опис партії
 * пише лише господар; хід — лише той, хто його зробив, і лише один раз; голос —
 * лише сам гравець у документ, названий його ідентифікатором. Доти вся партія
 * лежала в одному документі, який писали обидва: власника не було, тож єдиний
 * дозвіл, що не ламав гру, — `allow write: if true`.
 *
 * **Стан партії тут не зберігається взагалі.** Він обчислюється перепрогоном
 * журналу (`matchReplay.ts`). Один документ на хід замість перезапису всього
 * стану знімає й межу «~1 запис/с на документ», і взаємне перетирання, і
 * потребу виводити «що нового» порівнянням довжин.
 */

/** Один хід у журналі. Ключ документа — `seq`, вирівняний нулями. */
export interface MatchMove {
	/** Порядок і ключ водночас: `moves/{seq}` можна лише СТВОРИТИ. */
	seq: number;
	/** Хто зробив — ідентифікатор гравця в кімнаті. Перевіряється правилом. */
	by: string;
	direction: MoveDirectionType;
	distance: number;
	/**
	 * Коли зробив — СЕРВЕРНИМ часом.
	 *
	 * Не для гри: стан партії від часу не залежить і залежати не має. Потрібне
	 * для діагностики й для того, щоб «хто перший зайняв номер» можна було
	 * встановити після факту, а не вгадувати.
	 */
	at?: number;
}

/** Опис партії. Усе, з чого перепрогін відтворює стан. */
export interface MatchSetup {
	/**
	 * Зерно партії. Одне число замість усієї початкової розкладки — і саме воно
	 * робить дошку однаковою в усіх без жодного обміну станом.
	 */
	seed: number;
	boardSize: number;
	/**
	 * Склад НА МОМЕНТ ПОЧАТКУ, у зафіксованому порядку.
	 *
	 * Копія, а не посилання на список кімнати: черга ходів рахується з цього
	 * порядку, тож зміна складу посеред партії не має права його зсунути. Той, хто
	 * зайшов після початку, стає глядачем до наступної партії.
	 */
	players: Player[];
	/** Налаштування, від яких залежать правила ходу. Міняє лише господар у лобі. */
	settings: Partial<GameSettingsState>;
	/** Коли партію почали — серверним часом. */
	startedAt?: number;

	/*
	 * --- Три поля нижче існують заради ОДНОГО сценарію: «продовжити гру». ---
	 *
	 * Коли гравцеві немає куди ходити, решта голосує. Якщо більшість за
	 * продовження, лічильники відвідувань обнуляються, а фігура лишається там,
	 * де стоїть, рахунок зберігається, і черга йде далі.
	 *
	 * У моделі журналу це не «правка стану», а НОВИЙ ВІДРІЗОК: опис
	 * переписується, журнал стирається. Без цих полів відрізок починався б із
	 * клітинки від зерна, з нульовим рахунком і з першого гравця — тобто
	 * «продовжити» означало б «почати спочатку».
	 */

	/** Звідки починається відрізок. Без значення — клітинка від зерна. */
	startCell?: { row: number; col: number };
	/** Чия черга на початку відрізка. Без значення — перший у складі. */
	startTurnIndex?: number;
}

/** Знімок партії з транспорту: опис і впорядкований журнал. */
export interface MatchSnapshot {
	/** `null` — партія ще не почалася: господар не написав опис. */
	setup: MatchSetup | null;
	moves: MatchMove[];
}

/**
 * Транспорт партії. Дві реалізації: справжня база й підставна для тестів.
 *
 * Інтерфейс тут не для «гнучкості на майбутнє», а тому що інакше правила
 * онлайн-партії неперевірні: із живою базою кожна перевірка вимагала б мережі,
 * ключів і чужого часу — і шар синхронізації лишався б без жодного тесту, як і
 * було. Із підставним транспортом двоє учасників живуть в одному процесі, і
 * питання «обидва бачать те саме» стає звичайним `expect`.
 */
export interface MatchLog {
	/** Підписка на знімки. Повертає відписку. */
	watch(onSnapshot: (snapshot: MatchSnapshot) => void): () => void;

	/**
	 * Дописати хід.
	 *
	 * `false` означає, що номер уже зайнятий — тобто хтось зробив хід раніше, і
	 * ЦЕЙ хід не відбувся. Це не помилка: журнал і є правда.
	 */
	append(move: MatchMove): Promise<boolean>;

	/**
	 * Почати партію: записати опис і стерти журнал. Дозволено господареві.
	 *
	 * Одним записом, а не двома. Порядок тут не косметика: якби спершу зʼявився
	 * новий опис, усі роздали б нову дошку й програли на ній СТАРІ ходи, які ще
	 * лежать у журналі.
	 */
	start(setup: MatchSetup): Promise<void>;

	/** Відписатися й відпустити ресурси. */
	cleanup(): void;
}

/** Ключ документа ходу: нулі попереду, щоб порядок ключів дорівнював порядку чисел. */
export const moveKey = (seq: number): string => String(seq).padStart(6, '0');

/**
 * Партія в памʼяті: той самий транспорт, тільки без мережі.
 *
 * Заразом це чесна модель обмежень справжньої бази: `append` відмовляє на
 * зайнятому номері рівно так, як відмовить правило «лише створити». Підставка,
 * добріша за оригінал, доводить не те, що треба.
 */
export class MemoryMatchLog implements MatchLog {
	#setup: MatchSetup | null = null;
	#moves: MatchMove[] = [];
	#listeners = new Set<(snapshot: MatchSnapshot) => void>();
	/** «Серверний» час. Не `Date.now()`: тест мусить керувати ним сам. */
	#now: number;

	constructor(setup: MatchSetup | null = null, startAt = 1_000_000) {
		this.#now = startAt;
		if (setup) this.#setup = { ...setup, startedAt: startAt };
	}

	/** Просунути «серверний» час. */
	tick(ms: number): number {
		this.#now += ms;
		return this.#now;
	}

	watch(onSnapshot: (snapshot: MatchSnapshot) => void): () => void {
		this.#listeners.add(onSnapshot);
		// Перший знімок — одразу: підписка мусить давати ПОТОЧНИЙ стан, а не лише
		// майбутні зміни. Інакше учасник, який зайшов посеред партії, сидів би з
		// порожньою дошкою до чийогось наступного ходу.
		onSnapshot(this.#snapshot());
		return () => this.#listeners.delete(onSnapshot);
	}

	async append(move: MatchMove): Promise<boolean> {
		/*
		 * `undefined` усередині ходу — помилка програмування, і тут вона кидає
		 * рівно так, як кидає запис у Firestore. Підставка, яка приймає більше за
		 * базу, ховає справжній дефект: хід зникає безслідно, а дошка чекає на те,
		 * чого не буде.
		 */
		for (const [key, value] of Object.entries(move)) {
			if (value === undefined && key !== 'at') throw new Error(`move.${key} is undefined`);
		}
		if (this.#moves.some((existing) => existing.seq === move.seq)) return false;
		this.#moves.push({ ...move, at: this.#now });
		this.#moves.sort((a, b) => a.seq - b.seq);
		this.#emit();
		return true;
	}

	async start(setup: MatchSetup): Promise<void> {
		// Обидві половини одночасно, як і в справжній базі.
		this.#moves = [];
		this.#setup = { ...setup, startedAt: this.#now };
		this.#emit();
	}

	cleanup(): void {
		this.#listeners.clear();
	}

	get moves(): readonly MatchMove[] {
		return this.#moves;
	}

	#snapshot(): MatchSnapshot {
		// Копії, а не посилання: адаптер не має жодного права правити журнал «на
		// місці» — у справжній базі це неможливо.
		return {
			setup: this.#setup ? { ...this.#setup, players: this.#setup.players.map((p) => ({ ...p })) } : null,
			moves: this.#moves.map((move) => ({ ...move }))
		};
	}

	#emit(): void {
		const snapshot = this.#snapshot();
		for (const listener of this.#listeners) listener(snapshot);
	}
}
