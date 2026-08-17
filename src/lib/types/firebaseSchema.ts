import type { Timestamp } from 'firebase/firestore';

/**
 * @file Схема документів Firestore.
 *
 * **Перелічує ті самі колекції, у які пише код, — не менше й не більше.**
 * Доти цей файл описував колекцію `scores`, якої код не використовує, і НЕ
 * описував `rooms`, `general` і `presence`, у які пише щодня. Тобто читався як
 * опис бази й описував іншу базу — рівно те, що PROJECT-STRUCTURE-v8 називає
 * мертвим файлом: його правлять, на нього посилаються, він не відповідає
 * реальності.
 *
 * Перелік звіряється інваріантом (`src/cloud-database.spec.ts`): кожне ім'я
 * звідси мусить траплятися в коді, і кожен шлях із коду мусить бути тут.
 */

/** Кожна колекція верхнього рівня, до якої звертається застосунок. */
export const COLLECTIONS = {
	USERS: 'users',
	REWARDS: 'rewards',
	LEADERBOARDS: 'leaderboards',
	ROOMS: 'rooms',
	FEEDBACK: 'feedback',
	GENERAL: 'general'
} as const;

/** Підколекції кімнати. Кожна має власника — саме тому правила такі вузькі. */
export const ROOM_SUBCOLLECTIONS = {
	/** Журнал ходів: `rooms/{id}/moves/{seq}`. Лише створити, лише від себе. */
	MOVES: 'moves',
	/** Голоси: `rooms/{id}/votes/{playerId}`. Пише лише сам гравець. */
	VOTES: 'votes',
	/** Присутність: `rooms/{id}/presence/{playerId}`. Пише лише сам гравець. */
	PRESENCE: 'presence',
	/** Чат: `rooms/{id}/messages/{id}`. Створити може автор; правити — ніхто. */
	MESSAGES: 'messages'
} as const;

// === КОЛЕКЦІЯ: users ===
export interface UserDocument {
	displayName: string | null;
	isAnonymous: boolean;
	createdAt: number | Timestamp;
	lastActive: number | Timestamp;

	/** Версія додатку, на якій був створений акаунт */
	createdVersion?: string;

	/** Агреговані дані — щоб таблиця рекордів не читала історію */
	stats: UserStats;

	/** Розблоковані нагороди (Map: rewardId -> data) */
	unlockedRewards: Record<
		string,
		{
			id: string;
			unlockedAt: number;
		}
	>;
}

/**
 * Статистика гравця. Ключ формату `{mode}_{variant}_{boardSize}`,
 * наприклад `timed_classic_4x4`. Значення — найкращий результат.
 *
 * **Мапа обмежена за побудовою**: режимів і розмірів дошки скінченна кількість,
 * тож вона не росте від активності гравця. Саме тому вона й лишається полем
 * документа, а не підколекцією (CLOUD-DATABASE-v8 § 6.2).
 */
export interface UserStats {
	[leaderboardKey: string]: number;
}

// === КОЛЕКЦІЯ: rewards ===
/** `rewards/{uid}` — пише лише власник. */
export interface RewardsDocument {
	unlocked: Record<string, { id: string; unlockedAt: number }>;
	updatedAt: number | Timestamp;
}

// === КОЛЕКЦІЯ: leaderboards ===
/**
 * `leaderboards/{uid}_{mode}_{size}`.
 *
 * Власника видно з ІМЕНІ документа, і саме це дозволяє написати правило одним
 * рядком: `entryId.split('_')[0] == request.auth.uid`. Власник у полі
 * перевірявся б лише читанням цього ж документа, а на створенні його ще немає.
 */
export interface LeaderboardDocument {
	uid: string;
	displayName: string | null;
	gameMode: string;
	boardSize: number;
	score: number;
	timestamp: number | Timestamp;
}

// === КОЛЕКЦІЯ: rooms ===
/** `rooms/{roomId}` — опис кімнати. Стан партії тут НЕ зберігається. */
export interface RoomDocument {
	name: string;
	hostId: string;
	status: 'waiting' | 'playing' | 'finished';
	createdAt: number;
	lastActivity: number;
	isPrivate: boolean;
	maxPlayers: number;
	players: Record<string, { id: string; name: string }>;
	settings: Record<string, unknown>;
	/**
	 * Опис поточної партії: `{ seed, boardSize, players, settings, startedAt }`.
	 * Стан дошки не зберігається — він відтворюється перепрогоном журналу
	 * (`sync/matchReplay.ts`).
	 */
	match?: {
		seed: number;
		boardSize: number;
		players: unknown[];
		settings: Record<string, unknown>;
		startedAt: number | Timestamp;
	} | null;
}

/** `rooms/{roomId}/moves/{seq}` — один хід. Створити можна лише раз. */
export interface MoveDocument {
	seq: number;
	/** `auth.uid` того, хто зробив хід. Правило звіряє його з автором запису. */
	by: string;
	direction: string;
	distance: number;
	at: number | Timestamp;
}

/** `rooms/{roomId}/votes/{playerId}` — голос гравця. */
export interface VoteDocument {
	vote: 'continue' | 'finish';
	at: number | Timestamp;
}

/** `rooms/{roomId}/presence/{playerId}` — присутність у Firestore. */
export interface RoomPresenceDocument {
	isDisconnected: boolean;
	lastSeen?: number;
	updatedAt: number;
}

/** `rooms/{roomId}/messages/{id}` — повідомлення чату. */
export interface ChatMessageDocument {
	senderId: string;
	senderName: string;
	text: string;
	createdAt: number | Timestamp;
}

// === КОЛЕКЦІЯ: feedback ===
/** `feedback/{type}/entries/{id}`. Створює будь-хто, читає лише консоль. */
export interface FeedbackDocument {
	type: 'bug' | 'improvement' | 'other' | 'reward_suggestion';
	text: string;
	context: Record<string, unknown>;
	status: 'new' | 'read' | 'implemented';
	createdAt: number | Timestamp;
}

// === КОЛЕКЦІЯ: general ===
/** `general/stats` — спільні лічильники. Правило обмежує перелік ключів. */
export interface GeneralStatsDocument {
	lastRoomCreatedAt?: number;
	totalRooms?: number;
	totalGames?: number;
}
