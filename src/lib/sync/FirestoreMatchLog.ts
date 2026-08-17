import {
	collection,
	doc,
	onSnapshot,
	serverTimestamp,
	setDoc,
	getDocs,
	writeBatch,
	type Unsubscribe
} from 'firebase/firestore';
import { getFirestoreDb } from '$lib/services/firebaseService';
import { logService } from '$lib/services/logService.svelte';
import { moveKey, type MatchLog, type MatchMove, type MatchSetup, type MatchSnapshot } from './matchLog';

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
	#moves = new Map<number, MatchMove>();
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
		const ref = doc(db, 'rooms', this.#roomId, 'moves', moveKey(move.seq));
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

	async start(setup: MatchSetup): Promise<void> {
		const db = getFirestoreDb();
		const roomRef = doc(db, 'rooms', this.#roomId);
		const movesRef = collection(roomRef, 'moves');

		/*
		 * Опис і стирання журналу — ОДНИМ батчем.
		 *
		 * Двома записами існувала б мить, у яку опис уже новий, а ходи ще старі:
		 * усі роздали б нову дошку й програли б на ній чужу партію.
		 */
		const stale = await getDocs(movesRef);
		const batch = writeBatch(db);
		batch.set(roomRef, { match: { ...setup, startedAt: serverTimestamp() } }, { merge: true });
		for (const move of stale.docs) batch.delete(move.ref);
		await batch.commit();

		logService.GAME_MODE(
			`[FirestoreMatchLog] партію почато: seed ${setup.seed}, стерто ходів: ${stale.size}`
		);
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
				 */
				for (const change of snapshot.docChanges()) {
					if (change.type === 'removed') this.#moves.delete(Number(change.doc.id));
					else this.#moves.set(Number(change.doc.id), change.doc.data() as MatchMove);
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
			moves: [...this.#moves.values()].sort((a, b) => a.seq - b.seq)
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
