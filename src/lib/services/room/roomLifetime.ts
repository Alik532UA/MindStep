import { Timestamp, type DocumentReference, type QuerySnapshot } from 'firebase/firestore';
import { authService } from '$lib/services/authService';
import { logService } from '$lib/services/logService.svelte';
import { roomFirestoreService } from './roomFirestoreService';
import { ensureNumber } from '$lib/utils/timeUtils';
import type { Room } from '$lib/types/online';

/**
 * СКІЛЬКИ ЖИВЕ КІМНАТА, і хто її зрештою прибирає.
 *
 * ## Що було
 *
 * Покинуті кімнати не прибирав НІХТО. `leaveRoom` видаляє кімнату, коли з неї
 * виходить останній, — але це працює лише тоді, коли людина справді натиснула
 * «вийти». Закрита вкладка, розряджений телефон, обірваний зв'язок у метро —
 * і документ лишається назавжди.
 *
 * Доти лобі просто не показувало прострочені, а в `PROJECT-CONTEXT.md` стояв
 * борг: «Покинуті кімнати ніхто не стирає». Це чесно, але кімната важить не
 * лише кілобайт: вона лежить у колекції, яку перелічує кожне відкриття лобі.
 *
 * ## Чому НЕ повернулося «клієнт видаляє чужі кімнати»
 *
 * Доти цим займався клієнт, який просто відкрив лобі, — і саме ця зручність
 * тримала `rooms` відкритими на запис: щоб прибирати чуже, потрібне право
 * видаляти чуже, а це готовий примітив «видалити всі кімнати» одним циклом.
 *
 * Тепер прибирають ДВОЄ, і жодному з них не потрібно нових прав:
 *
 *  1. **господар** — свою власну кімнату, коли вона прострочена (правило
 *     `allow delete: if hostOf(resource)` існувало завжди). Це покриває
 *     найчастіший випадок: людина створила кімнату, закрила вкладку, а завтра
 *     повернулася й відкрила лобі;
 *  2. **TTL-політика Firestore** — усе інше, зокрема кімнати тих, хто не
 *     повернеться ніколи. Політика виконується на боці бази, без клієнта й
 *     без прав у когось.
 *
 * ## Чому `expiresAt` окремо від `lastActivity`
 *
 * TTL-політика видаляє документи САМЕ за полем-позначкою часу (`Timestamp`) і
 * поля з числом не бачить узагалі. `lastActivity` — число, і таким мусить
 * лишитися: за ним сортує лобі, і на ньому стоїть складений індекс.
 *
 * Тому це два поля, і пишуться вони РАЗОМ, одним `activityStamp()`. Писати їх
 * нарізно означало б, що котресь із одинадцяти місць запису оновить одне й
 * забуде друге — і кімната або зникне під людьми, або не зникне ніколи.
 */

/**
 * Скільки кімната живе після останньої дії.
 *
 * Доба, а не десять хвилин, і різниця тут принципова. Десять хвилин
 * (`ROOM_TIMEOUT_MS`) — це «не показувати в лобі»: партія на паузі, людина
 * відійшла. Видалення ж незворотне, і застосувати його до кімнати, у яку
 * збираються повернутися, — гірше за зайвий документ у базі.
 */
export const ROOM_TTL_MS = 24 * 60 * 60 * 1000;

/**
 * Позначка «кімната жива»: обидва поля одразу.
 *
 * Розсипати по місцях виклику `lastActivity: Date.now()` можна було, поки поле
 * було одне. Друге поле робить це пасткою: пропущений `expiresAt` не ламає
 * нічого ВИДИМОГО — кімната просто перестає старіти.
 */
export function activityStamp(now: number = Date.now()) {
	return {
		lastActivity: now,
		expiresAt: Timestamp.fromMillis(now + ROOM_TTL_MS)
	};
}

/**
 * Чи кімнату вже можна прибрати.
 *
 * Читає `lastActivity`, а не `expiresAt`, навмисно: кімнати, створені старішою
 * збіркою, другого поля не мають узагалі, і саме їх прибирати найпотрібніше.
 * TTL-політика їх не побачить ніколи — лише господар при відкритті лобі.
 */
export function isRoomExpired(room: Pick<Room, 'lastActivity'>, now: number = Date.now()): boolean {
	return now - ensureNumber(room.lastActivity) > ROOM_TTL_MS;
}

/**
 * Прибрати СВОЇ прострочені кімнати.
 *
 * Не `await`: лобі не мусить чекати на прибирання, і невдача не мусить лишати
 * людину без списку кімнат.
 *
 * Але й не мовчки. Доти той самий виклик закінчувався
 * `Promise.allSettled(...).catch()` — тобто про невдачу не лишалося жодного
 * сліду, і «прибирання не працює» було б невідрізненне від «прибирати не було
 * чого». Рівень `warn`, а не `error`: кімната, яка не видалилася, нікому не
 * заважає й зникне за TTL.
 *
 * ПІДКОЛЕКЦІЇ ЛИШАЮТЬСЯ, і це не недогляд. Firestore не видаляє їх разом із
 * батьківським документом, а стирати ходи заборонено ВСІМ — журнал append-only
 * за побудовою (`firestore.rules`, `moves`). Отже прибрати їх може лише окрема
 * TTL-політика на групі колекцій; запис про це стоїть у PROJECT-CONTEXT.md.
 */
export function sweepOwnExpiredRooms(snapshot: QuerySnapshot): void {
	const myUid = authService.getCurrentUser()?.uid;
	if (!myUid) return;

	const now = Date.now();
	const refs: DocumentReference[] = [];
	snapshot.forEach((docSnap) => {
		const data = docSnap.data() as Room;
		if (data.hostId === myUid && isRoomExpired(data, now)) refs.push(docSnap.ref);
	});

	if (refs.length === 0) return;

	void Promise.allSettled(refs.map((ref) => roomFirestoreService.deleteRoomDoc(ref))).then(
		(results) => {
			const failed = results.filter((r) => r.status === 'rejected').length;
			if (failed > 0) {
				logService.warn(
					`[RoomLifetime] не прибрано ${failed} із ${refs.length} своїх прострочених кімнат`
				);
			} else {
				logService.init(`[RoomLifetime] прибрано своїх прострочених кімнат: ${refs.length}`);
			}
		}
	);
}
