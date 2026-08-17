import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getFirestoreDb } from './firebaseService';
import { COLLECTIONS } from '$lib/types/firebaseSchema';
import { logService } from './logService.svelte';

/**
 * Нагороди в хмарі: `rewards/{uid}`.
 *
 * **Чому окремо від `rewardsState.svelte.ts`.** Той файл — сховище з рунами, і
 * SDK бази в ньому означав би мережу, зрощену з реактивністю: не підмінити в
 * тесті, не винести, а кожен тест, що транзитивно тягне сховище, вимагав би
 * бойових ключів (CLOUD-DATABASE-v8 § 10.4).
 *
 * **Документ пише лише власник** — правило звужене до `request.auth.uid == uid`.
 * Тому й адреса тут завжди через `uid`, а не через якийсь пошук.
 */

export interface RewardsSnapshot {
	unlockedRewards: Record<string, unknown>;
}

class RewardsCloudService {
	private ref(uid: string) {
		return doc(getFirestoreDb(), COLLECTIONS.REWARDS, uid);
	}

	/**
	 * Злити місцеві нагороди з хмарними й повернути результат.
	 *
	 * Злиття, а не заміна: нагорода, здобута офлайн, не має зникати від того, що
	 * хмара про неї ще не знає, — і навпаки. Обидва боки лише додають.
	 *
	 * Повертає `null`, якщо синхронізація не вдалася. Нагороди — не той випадок,
	 * коли збій мережі має зупиняти гру: місцевий стан лишається чинним.
	 */
	async merge(uid: string, local: Record<string, unknown>): Promise<Record<string, unknown> | null> {
		try {
			const snapshot = await getDoc(this.ref(uid));
			if (!snapshot.exists()) {
				await setDoc(this.ref(uid), { unlockedRewards: local }, { merge: true });
				return local;
			}

			const cloud = (snapshot.data()?.unlockedRewards ?? {}) as Record<string, unknown>;
			const merged = { ...local, ...cloud };
			await setDoc(this.ref(uid), { unlockedRewards: merged }, { merge: true });
			return merged;
		} catch (error) {
			logService.error('[RewardsCloudService] Не вдалося злити нагороди', error);
			return null;
		}
	}
}

export const rewardsCloudService = new RewardsCloudService();
