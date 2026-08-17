import { doc, updateDoc } from 'firebase/firestore';
import { getFirestoreDb } from '../firebaseService';
import { COLLECTIONS } from '$lib/types/firebaseSchema';
import type { OnlinePlayer } from '$lib/schemas/onlineSchema';

/**
 * Операції лобі над документом кімнати.
 *
 * **Чому окремий файл, а не методи контролера.** `LobbyController` — це
 * `.svelte.ts`, тобто модуль із рунами. SDK бази в такому модулі означає, що
 * мережевий шар приходить разом із реактивністю: його не підмінити в тесті, не
 * винести й не перевірити окремо, а будь-який тест, що транзитивно тягне
 * контролер, вимагає бойових ключів (SVELTE-CORE-v8 § 8.1,
 * CLOUD-DATABASE-v8 § 10.4).
 *
 * Тут — чисті async-функції без рун. Контролер тримає стан і кличе їх.
 *
 * **Кожен запис звужений до автора правилом бази.** Гравець пише лише свій
 * рядок у складі; статус і налаштування — лише господар. Тому шляхи тут
 * точкові (`players.{uid}.isReady`), а не «перезаписати кімнату цілком»: правило
 * дозволяє учаснику правити кімнату, і точковий шлях робить видимим, що саме
 * він править.
 */
class RoomLobbyService {
	private get db() {
		return getFirestoreDb();
	}

	private roomRef(roomId: string) {
		return doc(this.db, COLLECTIONS.ROOMS, roomId);
	}

	/** Перемкнути власну готовність. Пише лише про себе. */
	async setReady(roomId: string, playerId: string, ready: boolean): Promise<void> {
		await updateDoc(this.roomRef(roomId), { [`players.${playerId}.isReady`]: ready });
	}

	/** Почати партію. Дозволено господареві. */
	async setStatus(roomId: string, status: 'waiting' | 'playing' | 'finished'): Promise<void> {
		await updateDoc(this.roomRef(roomId), { status, lastActivity: Date.now() });
	}

	/** Змінити налаштування партії. Дозволено господареві. */
	async setSetting(roomId: string, key: string, value: unknown): Promise<void> {
		await updateDoc(this.roomRef(roomId), { [`settings.${key}`]: value });
	}

	/** Змінити властивість самої кімнати (приватність, назва). Господар. */
	async setRoomField(roomId: string, key: string, value: unknown): Promise<void> {
		await updateDoc(this.roomRef(roomId), { [key]: value });
	}

	/** Оновити свій рядок у складі. */
	async updatePlayer(
		roomId: string,
		playerId: string,
		player: Partial<OnlinePlayer>
	): Promise<void> {
		await updateDoc(this.roomRef(roomId), { [`players.${playerId}`]: player });
	}
}

export const roomLobbyService = new RoomLobbyService();
