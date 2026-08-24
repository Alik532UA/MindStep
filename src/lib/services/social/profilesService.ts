import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	setDoc,
	where,
	type Firestore
} from 'firebase/firestore';
import { getFirestoreDb } from '../firebaseService';
import { logService } from '../logService.svelte';
import { hashEmail } from './emailHash';
import { isAvatar } from '$lib/config/avatars';
import { isCountry } from '$lib/config/countries';

/**
 * ПУБЛІЧНИЙ ПРОФІЛЬ: те, що видно іншим, — і рівно це.
 *
 * ## Чому окрема колекція, а не `users/{uid}`
 *
 * `users/{uid}` читає ЛИШЕ власник, і це правильно: там рекорд, нікнейм і час
 * останньої активності. Але щоб людину можна було знайти й підписатися на неї,
 * частину цього мусить бачити хтось інший — тобто потрібен документ, який
 * читається публічно. Одна колекція на дві задачі означала б або відкрити
 * приватне, або зробити профіль непошуковим.
 *
 * ## Що тут лежить і чого тут НЕ лежить
 *
 * Імʼя, аватар (`значок:колір`), країна двома літерами, перемикачі приватності —
 * і ХЕШ пошти замість самої пошти. Правил рівня поля у Firestore не існує: дозвіл
 * читати документ означає дозвіл читати всі його поля (`emailHash.ts`).
 *
 * Рекорду тут немає: він уже публічний у `leaderboards`, і другий екземпляр того
 * самого числа розійшовся б із першим.
 *
 * ## Згоду на пошук тримає ПРАВИЛО
 *
 * Запит без `where('privacy.search', '==', true)` Firestore відкидає цілком —
 * так написане правило `list`. Тобто вимкнений пошук означає відсутність у
 * знахідках, а не фільтр на клієнті, який видно лише тому, хто дивиться екраном.
 */

/** Перемикачі приватності. Типово дозволено все — див. `OPEN_PRIVACY`. */
export interface Privacy {
	/** Бути в пошуку людей. */
	search: boolean;
	/** Дозволяти підписуватися на себе. */
	follow: boolean;
	/** Показуватися в таблиці лідерів. */
	board: boolean;
}

/** Публічний профіль однієї людини. */
export interface PublicProfile {
	uid: string;
	displayName: string;
	avatar?: string;
	country?: string;
	privacy: Privacy;
}

/**
 * Типово дозволено все, і це не оптимізм: документа може ще не бути, і його
 * відсутність означає «людина не торкалася перемикачів». Показати їх вимкненими
 * означало б збрехати про стан, якого ніхто не задавав.
 */
export const OPEN_PRIVACY: Privacy = { search: true, follow: true, board: true };

/** Скільком знахідкам показуватися. Те саме число вимагає правило `list`. */
const SEARCH_LIMIT = 20;

const COLLECTION = 'profiles';

function db(): Firestore {
	return getFirestoreDb();
}

/** Привести прочитане до форми, якій можна вірити. */
function sanitize(uid: string, raw: Record<string, unknown>): PublicProfile {
	const privacy = (raw.privacy ?? {}) as Partial<Privacy>;
	return {
		uid,
		displayName: typeof raw.displayName === 'string' ? raw.displayName : '',
		// Невідомий аватар і невідома країна не малюються зовсім: `<img>` на
		// неіснуючий прапор дає порожню рамку, тобто дефект, видний лише розробнику.
		avatar: isAvatar(raw.avatar) ? (raw.avatar as string) : undefined,
		country: isCountry(raw.country) ? String(raw.country).toLowerCase() : undefined,
		privacy: {
			search: privacy.search !== false,
			follow: privacy.follow !== false,
			board: privacy.board !== false
		}
	};
}

/** Публічний профіль за `uid`. `null` — його ще немає або читання не вдалося. */
export async function readProfile(uid: string): Promise<PublicProfile | null> {
	try {
		const snap = await getDoc(doc(db(), COLLECTION, uid));
		if (!snap.exists()) return null;
		return sanitize(uid, snap.data() as Record<string, unknown>);
	} catch (error) {
		logService.error('[ProfilesService] Profile not read', error);
		return null;
	}
}

/**
 * Кілька профілів за їхніми `uid` — для списку підписок.
 *
 * По одному читанню на людину, а не запитом: `documentId() in [...]` обмежений
 * тридцятьма значеннями й вимагає окремого індексу, а список підписок і так
 * короткий. Кого немає — той просто зникає зі списку.
 */
export async function readProfiles(uids: string[]): Promise<PublicProfile[]> {
	const found = await Promise.all(uids.map((uid) => readProfile(uid)));
	return found.filter((profile): profile is PublicProfile => profile !== null);
}

/**
 * Зберегти свій публічний профіль.
 *
 * КИДАЄ: це дія, яку людина щойно натиснула, і мовчазна невдача виглядала б як
 * збережений профіль, якого немає.
 *
 * Хеш пошти оновлюється разом із рештою: він потрібен для пошуку, і рахувати
 * його окремим записом означало б стан, у якому профіль уже є, а знайти людину
 * ще не можна.
 */
export async function saveProfile(
	uid: string,
	email: string | null,
	profile: { displayName: string; avatar?: string; country?: string; privacy: Privacy }
): Promise<void> {
	const emailHash = await hashEmail(email);
	await setDoc(
		doc(db(), COLLECTION, uid),
		{
			displayName: profile.displayName.slice(0, 32),
			// Поле або є, або його немає: правило перевіряє перелік ключів, а
			// `undefined` у `setDoc` кидає ще до мережі.
			...(profile.avatar ? { avatar: profile.avatar } : {}),
			...(profile.country ? { country: profile.country } : {}),
			...(emailHash ? { searchableEmailHash: emailHash } : {}),
			privacy: profile.privacy,
			updatedAt: Date.now()
		},
		{ merge: true }
	);
}

/** Прибрати свій публічний профіль — частина видалення акаунта. */
export async function removeProfile(uid: string): Promise<void> {
	await deleteDoc(doc(db(), COLLECTION, uid));
}

/**
 * Знайти людину за ПОШТОЮ — точним збігом, по хешу.
 *
 * ## Чому не за іменем
 *
 * Пошук за префіксом імені знаходить випадкових людей і дозволяє добирати
 * схожі імена, тобто вдавати іншого. У сусідньому `Slovko` він саме тому й
 * вимкнений — прямо в коді, з підписом. Пошта ж — те, що людина сама комусь
 * сказала: знайти за нею можна лише того, кого вже знаєш.
 *
 * ## Чому хеш працює так само добре
 *
 * Точний збіг порівнює рівні значення, а SHA-256 рівність зберігає. Витягти з
 * колекції саму адресу при цьому неможливо — тобто пошук лишається, а перелік
 * пошт зникає.
 *
 * НЕ КИДАЄ: пошук, що впав, лишає порожній список, а не зламаний екран.
 */
export async function findByEmail(email: string): Promise<PublicProfile[]> {
	const emailHash = await hashEmail(email);
	if (!emailHash) return [];

	try {
		const found = await getDocs(
			query(
				collection(db(), COLLECTION),
				where('searchableEmailHash', '==', emailHash),
				// Умова згоди — не фільтр, а вимога правила: без неї запит відкидається.
				where('privacy.search', '==', true),
				limit(SEARCH_LIMIT)
			)
		);
		return found.docs.map((entry) => sanitize(entry.id, entry.data() as Record<string, unknown>));
	} catch (error) {
		logService.error('[ProfilesService] Search failed', error);
		return [];
	}
}
