import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	limit,
	query,
	setDoc,
	type Firestore
} from 'firebase/firestore';
import { getFirestoreDb } from '../firebaseService';
import { logService } from '../logService.svelte';

/**
 * ПІДПИСКИ, і друзі як їхня взаємність.
 *
 * ## Дві половини, а не дві копії
 *
 * `users/{uid}/following/{target}` відповідає «на кого підписаний я»,
 * `users/{target}/followers/{uid}` — «хто підписаний на нього». Це РІЗНІ питання,
 * і обидва треба відповідати одним читанням: без дзеркала друге вимагало б
 * перебрати всіх користувачів, а перелічувати `users` заборонено правилом.
 *
 * Автор кожної половини свій: у `following` пише лише власник, у `followers` —
 * лише той, хто підписується. Тому це не дублювання, а дві половини з різними
 * правами (`firestore.rules`).
 *
 * ## ДРУГ — ВЗАЄМНА ПІДПИСКА
 *
 * Так само, як у сусідніх `Slovko` і `VetCrewGames`, і причина не в наслідуванні:
 * односторонню підписку видно лише тому, хто підписався, а «друзі» — це
 * відношення, у якому погодилися обидва. Перевірити взаємність можна рівно одним
 * способом — подивившись з обох боків, і саме тому дзеркало обовʼязкове.
 *
 * ## Порядок запису: СПЕРШУ ДЗЕРКАЛО
 *
 * `followers` пише сам підписник, і саме цю половину може відкинути правило —
 * якщо людина закрила підписки на себе. `following` після неї не відмовить
 * нікому. У зворотному порядку існував би стан «я підписаний, а він про це не
 * знає», і виправити його могла б лише та сторона, яка вже пішла.
 */

/** Скільком підпискам читатися за раз. Правило вимагає межі. */
const FOLLOW_LIMIT = 100;

/** Хто вважається другом: підписка є з обох боків. */
export interface Follow {
	uid: string;
	/** Чи взаємно. `false` — я підписаний, а він на мене ні. */
	mutual: boolean;
}

function db(): Firestore {
	return getFirestoreDb();
}

/**
 * Підписатися.
 *
 * КИДАЄ, і навмисно: це дія, яку людина щойно натиснула. Найчастіша відмова —
 * `permission-denied`, і вона означає конкретну річ: той, на кого підписуються,
 * закрив підписки на себе. Мовчазна невдача виглядала б як кнопка, що не працює.
 */
export async function follow(me: string, target: string): Promise<void> {
	if (me === target) throw new Error('self-follow');
	const at = Date.now();
	await setDoc(doc(db(), 'users', target, 'followers', me), { at });
	await setDoc(doc(db(), 'users', me, 'following', target), { at });
}

/**
 * Відписатися. Прибираються ОБИДВІ половини.
 *
 * Спершу своя: право на неї безумовне. Дзеркало може не вийти лише через мережу,
 * і тоді лишається запис, який каже «він підписаний» про того, хто вже ні — це
 * сміття, а не дефект, і наступна спроба його приберає.
 */
export async function unfollow(me: string, target: string): Promise<void> {
	await deleteDoc(doc(db(), 'users', me, 'following', target));
	await deleteDoc(doc(db(), 'users', target, 'followers', me));
}

/** Прибрати чужу підписку на себе — «прибери мене зі своїх підписок». */
export async function removeFollower(me: string, who: string): Promise<void> {
	await deleteDoc(doc(db(), 'users', me, 'followers', who));
	await deleteDoc(doc(db(), 'users', who, 'following', me));
}

async function idsOf(uid: string, branch: 'following' | 'followers'): Promise<string[]> {
	try {
		const found = await getDocs(
			query(collection(db(), 'users', uid, branch), limit(FOLLOW_LIMIT))
		);
		return found.docs.map((entry) => entry.id);
	} catch (error) {
		logService.error(`[FriendsService] ${branch} not read`, error);
		return [];
	}
}

/**
 * Позначити взаємні — ЧИСТА функція, і саме тому вона окремо.
 *
 * Взаємність — це факт про ДВА списки, і єдине, що тут можна зламати, — саме її
 * підрахунок: показати «друг» там, де підписка одностороння. Мережі для цього не
 * треба, тож і тест не потребує ні емулятора, ні моків
 * (`friendsService.spec.ts`).
 */
export function markMutual(mine: string[], theirs: string[]): Follow[] {
	const other = new Set(theirs);
	return mine.map((uid) => ({ uid, mutual: other.has(uid) }));
}

/**
 * Мої підписки з позначкою взаємності.
 *
 * Два читання, а не одне: взаємність можна порахувати лише маючи обидва боки.
 * Обидва запити обмежені — межа тут умова доступу, а не оптимізація.
 */
export async function listFollowing(uid: string): Promise<Follow[]> {
	const [following, followers] = await Promise.all([
		idsOf(uid, 'following'),
		idsOf(uid, 'followers')
	]);
	return markMutual(following, followers);
}

/** Хто підписаний на мене. Взаємність рахується так само, з обох боків. */
export async function listFollowers(uid: string): Promise<Follow[]> {
	const [following, followers] = await Promise.all([
		idsOf(uid, 'following'),
		idsOf(uid, 'followers')
	]);
	return markMutual(followers, following);
}

/**
 * Прибрати всі свої підписки — обидві половини кожної.
 *
 * Потрібне видаленню акаунта: після `deleteUser()` токена немає, а правила
 * вимагають `request.auth != null`, тож усе, що не прибрано ДО, лишається в чужих
 * списках рядками, які вказують у порожнє.
 *
 * Права рівно на це вже є: правило дозволяє видалити запис і тому, на кого
 * підписані («прибери мене зі своїх підписок»).
 */
export async function eraseFollows(uid: string): Promise<void> {
	const [following, followers] = await Promise.all([
		idsOf(uid, 'following'),
		idsOf(uid, 'followers')
	]);

	const gone = (promise: Promise<void>) =>
		promise.catch((error: unknown) => {
			logService.warn('[FriendsService] Follow not erased', error);
		});

	await Promise.all([
		...following.flatMap((target) => [
			gone(deleteDoc(doc(db(), 'users', uid, 'following', target))),
			gone(deleteDoc(doc(db(), 'users', target, 'followers', uid)))
		]),
		...followers.flatMap((who) => [
			gone(deleteDoc(doc(db(), 'users', uid, 'followers', who))),
			gone(deleteDoc(doc(db(), 'users', who, 'following', uid)))
		])
	]);
}
