import { collection, doc, onSnapshot, serverTimestamp, setDoc, type Unsubscribe } from 'firebase/firestore';
import { getFirestoreDb } from '$lib/services/firebaseService';
import { logService } from '$lib/services/logService.svelte';
import {
	moveKey,
	segmentOf,
	type MatchLog,
	type MatchMove,
	type MatchSetup,
	type MatchSnapshot
} from './matchLog';

/**
 * Журнал партії у Firestore.
 *
 * **Дві підписки, а не одна, і це навмисно.** Опис партії (`rooms/{id}.match`)
 * змінюється двічі за партію — на початку й на перезапуску. Журнал зростає на
 * кожен хід. Тримати їх в одному документі означало б перечитувати опис на
 * кожен хід і платити за це на кожному підписнику.
 *
 * **Кожен хід — окремий документ, і його можна лише СТВОРИТИ.** Звідси все
 * інше: журнал не переписати, хід не підписати чужим імʼям, повторний запис того
 * самого номера відкидає БАЗА (а не клієнт), і межа «~1 запис/с на документ» не
 * діє, бо документи різні. Доти обидва гравці писали той самий документ на
 * кожен хід — і впиралися і в контенцію, і в перетирання.
 */
export class FirestoreMatchLog implements MatchLog {
	#roomId: string;
	#setup: MatchSetup | null = null;
	#moves = new Map<string, MatchMove>();
	#listeners = new Set<(snapshot: MatchSnapshot) => void>();
	#unsubscribeRoom: Unsubscribe | null = null;
	#unsubscribeMoves: Unsubscribe | null = null;
	/** Чи вже приїхали ОБИДВА джерела. До того знімок віддавати не можна. */
	#gotRoom = false;
	#gotMoves = false;

	constructor(roomId: string) {
		this.#roomId = roomId;
	}

	watch(onSnapshotCallback: (snapshot: MatchSnapshot) => void): () => void {
		this.#listeners.add(onSnapshotCallback);
		if (this.#gotRoom && this.#gotMoves) onSnapshotCallback(this.#snapshot());
		this.#subscribe();
		return () => {
			this.#listeners.delete(onSnapshotCallback);
			if (this.#listeners.size === 0) this.cleanup();
		};
	}

	async append(move: MatchMove): Promise<boolean> {
		const db = getFirestoreDb();
		const ref = doc(db, 'rooms', this.#roomId, 'moves', moveKey(move.segment, move.seq));
		try {
			/*
			 * `setDoc` без merge на документ, який правило дозволяє лише СТВОРИТИ.
			 * Зайнятий номер відкидає база: клієнтської перевірки «а чи вільно» тут
			 * немає навмисно — між перевіркою й записом лежить мережа, і саме в цей
			 * проміжок два гравці й займали той самий номер.
			 */
			await setDoc(ref, { ...move, at: serverTimestamp() });
			return true;
		} catch (error) {
			const denied =
				error instanceof Error && /permission|denied|already exists/i.test(error.message ?? '');
			if (!denied) {
				/*
				 * Решту кидаємо далі. Загальний `catch { return false }` перетворював би
				 * будь-який дефект на «хід не пройшов» без слова в журналі — а це рівно
				 * той клас помилки, через який дошка чекає на те, чого не буде.
				 */
				logService.error('[FirestoreMatchLog] append failed', error);
				throw error;
			}
			logService.state(`[FirestoreMatchLog] seq ${move.seq} вже зайнятий — хід не відбувся`);
			return false;
		}
	}

	/**
	 * Почати новий відрізок — ОДНИМ записом одного поля.
	 *
	 * Доти тут стояло читання всього журналу плюс батч видалень, і це давало три
	 * дефекти одразу: платню за кожен хід удруге, межу батча 500 (партія довша за
	 * 499 ходів не перезапускалася взагалі) і `get()` на кімнату в правилі
	 * `delete`, по одному зверненню на кожен видалений хід при межі 20 звернень на
	 * батч — тобто перезапуск після довгої партії впирався у ПРАВИЛА, а не в код.
	 *
	 * Причина всіх трьох одна: видалення журналу суперечить самій моделі журналу.
	 * Тепер відрізок отримує наступний `segment`, старі ходи лишаються назавжди, а
	 * перепрогін їх не бачить. Атомарність § 8.6 виходить сама — записується одне
	 * поле, тож проміжку «опис уже новий, а ходи ще старі» не існує в принципі
	 * (CLOUD-DATABASE-v8 § 8.7).
	 */
	async start(setup: MatchSetup): Promise<void> {
		const db = getFirestoreDb();
		const roomRef = doc(db, 'rooms', this.#roomId);
		const segment = segmentOf(setup);

		await setDoc(
			roomRef,
			{ match: { ...setup, segment, startedAt: serverTimestamp() } },
			{ merge: true }
		);

		logService.GAME_MODE(`[FirestoreMatchLog] відрізок ${segment} почато: seed ${setup.seed}`);
	}

	cleanup(): void {
		this.#unsubscribeRoom?.();
		this.#unsubscribeMoves?.();
		this.#unsubscribeRoom = null;
		this.#unsubscribeMoves = null;
		this.#listeners.clear();
		this.#moves.clear();
		this.#gotRoom = false;
		this.#gotMoves = false;
	}

	#subscribe(): void {
		if (this.#unsubscribeRoom) return;
		const db = getFirestoreDb();
		const roomRef = doc(db, 'rooms', this.#roomId);

		this.#unsubscribeRoom = onSnapshot(
			roomRef,
			(snapshot) => {
				const data = snapshot.data();
				this.#setup = (data?.match as MatchSetup | undefined) ?? null;
				this.#gotRoom = true;
				this.#emit();
			},
			(error) => logService.error('[FirestoreMatchLog] room subscription failed', error)
		);

		this.#unsubscribeMoves = onSnapshot(
			collection(roomRef, 'moves'),
			(snapshot) => {
				/*
				 * Читаємо ЗМІНИ, а не весь набір: `docChanges()` віддає лише те, що
				 * приїхало. Перечитувати весь журнал на кожен хід означало б платити за
				 * нього квадратично від довжини партії.
					 *
					 * Ключ мапи — ІДЕНТИФІКАТОР документа (`{segment}-{seq}`), а не число:
					 * `Number('001-000002')` дало б `NaN`, і всі ходи склалися б в один ключ.
				 */
				for (const change of snapshot.docChanges()) {
					if (change.type === 'removed') this.#moves.delete(change.doc.id);
					else this.#moves.set(change.doc.id, change.doc.data() as MatchMove);
				}
				this.#gotMoves = true;
				this.#emit();
			},
			(error) => logService.error('[FirestoreMatchLog] moves subscription failed', error)
		);
	}

	#snapshot(): MatchSnapshot {
		return {
			setup: this.#setup,
			// Порядок ЗАДАЄМО самі: покладатися на порядок, у якому приїхали
			// документи, означало б грати ту саму партію в різній послідовності на
			// різних пристроях.
			moves: [...this.#moves.values()]
				// Лише ПОТОЧНИЙ відрізок. Ходи попередніх лежать у журналі назавжди —
				// саме тому їх не треба видаляти, — але до стану цієї партії не належать.
				// Кімнати старішої збірки ходів без `segment` не мають, і `segmentOf`
				// трактує це як нуль.
				.filter((move) => (move.segment ?? 0) === segmentOf(this.#setup))
				.sort((a, b) => a.seq - b.seq)
		};
	}

	#emit(): void {
		// Доки не приїхали обидва джерела, знімок неповний: опис без ходів дав би
		// «партія щойно почалася», а ходи без опису — нічого.
		if (!this.#gotRoom || !this.#gotMoves) return;
		const snapshot = this.#snapshot();
		for (const listener of this.#listeners) listener(snapshot);
	}
}
