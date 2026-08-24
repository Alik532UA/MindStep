/**
 * Перевірка правил доступу (Firestore + Realtime Database) над емулятором.
 *
 * Запускати: `npm run check:rules` (скрипт сам піднімає емулятори).
 *
 * ЧОМУ ЦЕ ОКРЕМИЙ СКРИПТ, А НЕ ТЕСТ. Правила доступу — єдина частина цього
 * проєкту, стан якої не видно ні в `src/`, ні у `build/`: вони виконуються на
 * боці Firebase. Файл під vitest або Playwright, який вимагає живого емулятора,
 * у звичайному прогоні або падає, або тихо пропускається — тобто стає
 * перевіркою, якої не запускає ніхто (AI-AGENT-PITFALLS-v8 § 1.3).
 *
 * ЧОМУ НЕ firebase-admin. Він ходить в ОБХІД правил, тобто перевіряв би не те.
 * Тут звичайний `fetch` із токеном звичайного користувача — він проходить крізь
 * правила так само, як клієнтський SDK.
 *
 * ЗВОРОТНИЙ ЕКСПЕРИМЕНТ УСЕРЕДИНІ: половина очікувань — «застосунок мусить це
 * вміти», половина — «сторонній не мусить цього могти». Правила «дозволити все»
 * валять другу половину, «заборонити все» — першу, тож зелений результат
 * неможливий випадково (CLOUD-DATABASE-v8 § 3.1).
 */

const FS_HOST = process.env.FIRESTORE_EMULATOR_HOST ?? '127.0.0.1:8080';
const DB_HOST = process.env.FIREBASE_DATABASE_EMULATOR_HOST ?? '127.0.0.1:9000';
const AUTH_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST ?? '127.0.0.1:9099';
const PROJECT = process.env.GCLOUD_PROJECT ?? 'demo-mindstep';
const FS = `http://${FS_HOST}/v1/projects/${PROJECT}/databases/(default)/documents`;
const NS = `${PROJECT}-default-rtdb`;

/** Анонімний користувач в емуляторі Auth. Ключ будь-який — емулятор не перевіряє. */
async function signIn(label) {
	const res = await fetch(
		`http://${AUTH_HOST}/identitytoolkit.googleapis.com/v1/accounts:signUp?key=emulator`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ returnSecureToken: true })
		}
	);
	if (!res.ok) throw new Error(`емулятор Auth не дав токен для ${label}: ${res.status}`);
	const body = await res.json();
	return { uid: body.localId, token: body.idToken };
}

const auth = (token) => (token ? { Authorization: `Bearer ${token}` } : {});

/** Значення Firestore у REST-формі. Досить трьох типів, які реально пишуться. */
const value = (raw) => {
	if (typeof raw === 'string') return { stringValue: raw };
	if (typeof raw === 'number') return Number.isInteger(raw) ? { integerValue: String(raw) } : { doubleValue: raw };
	if (typeof raw === 'boolean') return { booleanValue: raw };
	if (raw && typeof raw === 'object') {
		return { mapValue: { fields: Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, value(v)])) } };
	}
	return { nullValue: null };
};

const fields = (data) => Object.fromEntries(Object.entries(data).map(([k, v]) => [k, value(v)]));

/** @param {string} path @param {string} docId @param {object} data @param {string|null} token */
async function fsCreate(path, docId, data, token) {
	const res = await fetch(`${FS}/${path}?documentId=${docId}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', ...auth(token) },
		body: JSON.stringify({ fields: fields(data) })
	});
	return res.status;
}

/** PATCH без маски = перезапис документа. Саме так пише клієнтський `setDoc`. */
async function fsUpdate(path, data, token) {
	const res = await fetch(`${FS}/${path}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json', ...auth(token) },
		body: JSON.stringify({ fields: fields(data) })
	});
	return res.status;
}

async function fsDelete(path, token) {
	return (await fetch(`${FS}/${path}`, { method: 'DELETE', headers: auth(token) })).status;
}

async function fsRead(path, token) {
	return (await fetch(`${FS}/${path}`, { headers: auth(token) })).status;
}

/**
 * ЗАПИТ до колекції — саме ним перевіряються правила `list`.
 *
 * `fsRead('profiles?pageSize=5')` перевіряє не те: правило `list` дивиться на
 * `request.query.limit` і на поля КОЖНОГО документа, тож без справжнього
 * `structuredQuery` умова «лише ті, хто дозволив пошук» не перевіряється нічим.
 *
 * @param {string} collectionId
 * @param {Array<{path: string, raw: unknown}>} equals рівності через AND
 * @param {number | null} max `limit` запиту; `null` — запит БЕЗ межі
 * @param {string | null} token
 */
async function fsQuery(collectionId, equals, max, token) {
	// `raw`, а не `value`: однойменне поле затінило б функцію `value()` вище, і
	// фільтр поїхав би сирим значенням замість REST-форми.
	const filters = equals.map(({ path, raw }) => ({
		fieldFilter: { field: { fieldPath: path }, op: 'EQUAL', value: value(raw) }
	}));
	const structuredQuery = {
		from: [{ collectionId }],
		...(filters.length === 1 ? { where: filters[0] } : {}),
		...(filters.length > 1 ? { where: { compositeFilter: { op: 'AND', filters } } } : {}),
		...(max === null ? {} : { limit: max })
	};
	const res = await fetch(`${FS}:runQuery`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', ...auth(token) },
		body: JSON.stringify({ structuredQuery })
	});
	return res.status;
}

/** RTDB через REST: токен передається параметром, як і в клієнта. */
async function dbWrite(path, data, token) {
	const suffix = token ? `&auth=${token}` : '';
	const res = await fetch(`http://${DB_HOST}/${path}.json?ns=${NS}${suffix}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
	return res.status;
}

async function dbRead(path, token) {
	const suffix = token ? `&auth=${token}` : '';
	return (await fetch(`http://${DB_HOST}/${path}.json?ns=${NS}${suffix}`)).status;
}

const host = await signIn('господар');
const guest = await signIn('гість');
const ROOM = 'room-probe';
/** Кімната для випадків про звуження `update` — своя, щоб не залежати від порядку. */
const ROOM_FIELDS = 'room-fields';
const SERVER_TIME = { '.sv': 'timestamp' };

const room = (extra = {}) => ({
	name: 'Проба',
	hostId: host.uid,
	status: 'waiting',
	isPrivate: false,
	maxPlayers: 8,
	lastActivity: 1,
	players: { [host.uid]: { id: host.uid, name: 'Господар' } },
	...extra
});

/** Склад із двома учасниками — потрібен випадкам про звуження `update`. */
const bothPlayers = {
	[host.uid]: { id: host.uid, name: 'Господар' },
	[guest.uid]: { id: guest.uid, name: 'Гість' }
};

const move = (by, seq, segment = 0) => ({ segment, seq, by, direction: 'up', distance: 1 });

/**
 * Порядок має значення: пізніші випадки спираються на стан, створений раніше.
 * `allowed: true` — «застосунок мусить це вміти», `false` — «сторонній не мусить
 * цього могти».
 */
const CASES = [
	// --- застосунок мусить це вміти ---
	{
		name: 'господар створює кімнату, назвавши господарем СЕБЕ',
		allowed: true,
		run: () => fsCreate('rooms', ROOM, room(), host.token)
	},
	{
		name: 'учасник читає кімнату',
		allowed: true,
		run: () => fsRead(`rooms/${ROOM}`, host.token)
	},
	{
		name: 'господар править кімнату (склад, налаштування)',
		allowed: true,
		run: () => fsUpdate(`rooms/${ROOM}`, room({ players: bothPlayers, status: 'playing' }), host.token)
	},
	{
		/*
		 * ВХІД ГОСТЯ — випадок, якого тут не було, і саме тому він був зламаний.
		 *
		 * Той, хто заходить, ще НЕ у складі, тож правило, звужене до складу
		 * (`memberOf(resource)` дивиться на СТАРИЙ документ), забороняло не дірку,
		 * а функцію: приєднатися до кімнати не міг ніхто, крім господаря
		 * (CLOUD-DATABASE-v8 § 4.7).
		 */
		name: 'ГІСТЬ заходить у кімнату — додає рівно свій рядок складу',
		allowed: true,
		run: () => fsUpdate(`rooms/${ROOM}`, room({ players: bothPlayers }), guest.token)
	},
	{
		name: 'господар дописує СВІЙ хід у журнал',
		allowed: true,
		run: () => fsCreate(`rooms/${ROOM}/moves`, '000-000001', move(host.uid, 1), host.token)
	},
	{
		/*
		 * КІНЕЦЬ ПАРТІЇ. Доти застосунок писав його в `rooms/{id}/votes/__match`,
		 * а правило цієї колекції звіряє ідентифікатор документа з `auth.uid`:
		 * `'__match'` не дорівнює жодному uid, тож запис відкидався ЗАВЖДИ —
		 * кінець партії не доїжджав до суперника ніколи. Колекція випадок мала,
		 * не збігався лише ідентифікатор документа (CLOUD-DATABASE-v8 § 3.5).
		 */
		name: 'той, хто оголосив кінець партії, пише його у СВІЙ документ',
		allowed: true,
		run: () =>
			fsCreate(
				`rooms/${ROOM}/votes`,
				guest.uid,
				{ over: { reason: 'modal.gameOverReasonOut' } },
				guest.token
			)
	},
	{
		name: 'гравець пише СВІЙ голос',
		allowed: true,
		run: () => fsCreate(`rooms/${ROOM}/votes`, host.uid, { vote: 'continue' }, host.token)
	},
	{
		// Позначка «я тут» тепер ОДНА — поле `players.{uid}.lastSeen` у документі
		// кімнати. Швидкий heartbeat у дзеркало присутності прибраний разом із самим
		// дзеркалом (CLOUD-DATABASE-v8 § 5.2).
		name: 'учасник оновлює СВОЮ позначку активності в кімнаті',
		allowed: true,
		run: () =>
			fsUpdate(
				`rooms/${ROOM}`,
				room({ players: { ...bothPlayers, [guest.uid]: { id: guest.uid, name: 'Гість', lastSeen: 2 } } }),
				guest.token
			)
	},
	{
		name: 'господар дозволяє гостям правити налаштування',
		allowed: true,
		run: () =>
			fsUpdate(
				`rooms/${ROOM}`,
				room({ players: bothPlayers, status: 'playing', allowGuestSettings: true }),
				host.token
			)
	},
	{
		// Прапорець `allowGuestSettings` існував і доти, але тримався виключно на
		// UI: той самий SDK із консолі писав `settings` попри нього.
		name: 'гість править налаштування, коли господар це ДОЗВОЛИВ',
		allowed: true,
		run: () =>
			fsUpdate(
				`rooms/${ROOM}`,
				room({
					players: bothPlayers,
					status: 'playing',
					allowGuestSettings: true,
					settings: { boardSize: 3 }
				}),
				guest.token
			)
	},
	{
		name: 'гравець пише СВОЮ присутність (RTDB)',
		allowed: true,
		run: () => dbWrite(`status/${ROOM}/${host.uid}`, { state: 'online', last_changed: SERVER_TIME }, host.token)
	},
	{
		name: 'відгук від неавторизованого відвідувача',
		allowed: true,
		run: () => fsCreate('feedback/bug/entries', 'probe', { type: 'bug', text: 'проба' }, null)
	},
	{
		name: 'лічильники general/* — застосунок їх пише',
		allowed: true,
		run: () => fsCreate('general', 'stats', { lastRoomCreatedAt: 1 }, host.token)
	},

	// --- сторонній не мусить цього могти ---
	{
		name: 'неавторизований читає кімнату',
		allowed: false,
		run: () => fsRead(`rooms/${ROOM}`, null)
	},
	{
		name: 'неавторизований править кімнату',
		allowed: false,
		run: () => fsUpdate(`rooms/${ROOM}`, { status: 'finished' }, null)
	},
	{
		name: 'не-учасник править чужу кімнату',
		allowed: false,
		run: () => fsUpdate(`rooms/${ROOM}`, { ...room(), status: 'finished' }, guest.token)
	},
	{
		name: 'створити кімнату, назвавши господарем ІНШОГО',
		allowed: false,
		run: () => fsCreate('rooms', 'room-forged', room(), guest.token)
	},
	{
		name: 'ПЕРЕЗАПИС уже зайнятого номера ходу',
		allowed: false,
		run: () => fsUpdate(`rooms/${ROOM}/moves/000-000001`, move(host.uid, 1), host.token)
	},
	{
		name: 'хід, підписаний ЧУЖИМ uid',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/moves`, '000002', move(host.uid, 2), guest.token)
	},
	{
		name: 'хід без обовʼязкових полів',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/moves`, '000003', { by: guest.uid }, guest.token)
	},
	{
		name: 'чужий голос',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/votes`, host.uid, { vote: 'finish' }, guest.token)
	},
	{
		// Підколекції присутності більше не існує: дзеркало прибране, і разом із ним
		// правило. Тепер її ловить catch-all — тобто випадкове повернення дзеркала в
		// код одразу впаде, а не запрацює тихо (CLOUD-DATABASE-v8 § 5.2).
		name: 'присутність у Firestore — підколекції більше немає',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/presence`, guest.uid, { isDisconnected: true }, guest.token)
	},
	{
		/*
		 * ОКРЕМА КІМНАТА для випадків нижче, і це не охайність.
		 *
		 * Негативні випадки спираються на стан, який створили попередні, — і якщо
		 * ЗЛОМАНЕ правило дає раніше стоячому випадку пройти, він змінює стан так,
		 * що наступні перестають перевіряти те, що збиралися. Зворотний дослід це й
		 * показав: із поверненим `allow update: if hostOf || memberOf` упав ОДИН
		 * випадок, а всі шість про підвищення прав «пройшли» — бо той, що впав,
		 * устиг викинути гостя зі складу, і далі він уже не був учасником.
		 *
		 * Ця кімната створюється господарем одразу з ОБОМА учасниками, тож випадки
		 * нижче не залежать ні від входу гостя, ні від порядку.
		 */
		name: 'господар створює кімнату з обома учасниками (для випадків нижче)',
		allowed: true,
		run: () => fsCreate('rooms', ROOM_FIELDS, room({ players: bothPlayers }), host.token)
	},
	{
		/*
		 * ГОЛОВНИЙ НЕГАТИВНИЙ ВИПАДОК ЦЬОГО ФАЙЛУ.
		 *
		 * Доти `allow update: if hostOf(resource) || memberOf(resource)` дозволяв
		 * учасникові кімнати поставити `hostId` собі. Позитивні випадки на такому
		 * правилі проходять УСІ до одного, тож без цього рядка гейт був зелений
		 * (CLOUD-DATABASE-v8 § 4.7).
		 */
		name: 'учасник підвищує СЕБЕ до господаря',
		allowed: false,
		run: () =>
			fsUpdate(
				`rooms/${ROOM_FIELDS}`,
				room({ players: bothPlayers, hostId: guest.uid }),
				guest.token
			)
	},
	{
		name: 'учасник переписує ЧУЖИЙ рядок складу',
		allowed: false,
		run: () =>
			fsUpdate(
				`rooms/${ROOM_FIELDS}`,
				room({
					players: { ...bothPlayers, [host.uid]: { id: host.uid, name: 'Підміна' } }
				}),
				guest.token
			)
	},
	{
		name: 'учасник викидає решту складу',
		allowed: false,
		run: () =>
			fsUpdate(
				`rooms/${ROOM_FIELDS}`,
				room({ players: { [guest.uid]: { id: guest.uid, name: 'Гість' } } }),
				guest.token
			)
	},
	{
		name: 'учасник перевертає публічність кімнати',
		allowed: false,
		run: () =>
			fsUpdate(`rooms/${ROOM_FIELDS}`, room({ players: bothPlayers, isPrivate: true }), guest.token)
	},
	{
		// Перекотити зерно посеред партії = перероздати дошку всім.
		name: 'учасник підмінює опис партії (seed)',
		allowed: false,
		run: () =>
			fsUpdate(
				`rooms/${ROOM_FIELDS}`,
				room({ players: bothPlayers, match: { seed: 999, segment: 0, boardSize: 2 } }),
				guest.token
			)
	},
	{
		name: 'учасник міняє налаштування, коли господар НЕ дозволив',
		allowed: false,
		run: () =>
			fsUpdate(
				`rooms/${ROOM_FIELDS}`,
				room({ players: bothPlayers, settings: { boardSize: 9 } }),
				guest.token
			)
	},
	{
		name: 'стан кімнати поза переліком',
		allowed: false,
		run: () =>
			fsUpdate(`rooms/${ROOM_FIELDS}`, room({ players: bothPlayers, status: 'winner' }), guest.token)
	},
	{
		// Ключ, який не є `uid`, у колекції, чиє правило звіряє `uid`. Саме такий
		// документ (`__match`) і робив кінець партії недоставленим.
		name: 'службовий документ __match у колекції голосів',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/votes`, '__match', { over: { any: 1 } }, host.token)
	},
	{
		name: 'хід із ЗАЙВИМ полем',
		allowed: false,
		run: () =>
			fsCreate(
				`rooms/${ROOM}/moves`,
				'000-000002',
				{ ...move(host.uid, 2), score: 999 },
				host.token
			)
	},
	{
		// Журнал append-only: подія, яку можна стерти, не є подією. Разом із
		// видаленням зникли межа батча 500 і `get()` у правилі (§ 8.7, § 4.8).
		name: 'ГОСПОДАР стирає хід із журналу',
		allowed: false,
		run: () => fsDelete(`rooms/${ROOM}/moves/000-000001`, host.token)
	},
	{
		name: 'спільний лічильник назад',
		allowed: false,
		run: () => fsUpdate('general/stats', { lastRoomCreatedAt: 0 }, host.token)
	},
	{
		name: 'відгук із типом, що не збігається зі шляхом',
		allowed: false,
		run: () => fsCreate('feedback/bug/entries', 'wrong-type', { type: 'other', text: 'х' }, null)
	},
	{
		name: 'відгук у неіснуючий тип',
		allowed: false,
		run: () => fsCreate('feedback/pwned/entries', 'probe', { type: 'pwned', text: 'х' }, null)
	},
	{
		name: 'відгук із текстом на межі мегабайта',
		allowed: false,
		run: () =>
			fsCreate('feedback/bug/entries', 'too-long', { type: 'bug', text: 'я'.repeat(4001) }, null)
	},
	{
		name: 'чужа присутність (RTDB)',
		allowed: false,
		run: () => dbWrite(`status/${ROOM}/${host.uid}`, { state: 'offline', last_changed: SERVER_TIME }, guest.token)
	},
	{
		name: 'присутність без авторизації (RTDB)',
		allowed: false,
		run: () => dbWrite(`status/${ROOM}/${host.uid}`, { state: 'offline' }, null)
	},
	{
		name: 'читання кореня RTDB',
		allowed: false,
		run: () => dbRead('', host.token)
	},
	{
		name: 'довільна нова гілка в RTDB',
		allowed: false,
		run: () => dbWrite('hackers/pwn', { any: 1 }, host.token)
	},
	{
		name: 'чужий профіль users/{uid}',
		allowed: false,
		run: () => fsCreate('users', guest.uid, { displayName: 'вкрадено' }, host.token)
	},
	{
		// Живий зонд 2026-08-18 показав, що `GET /documents/users` без токена
		// повертав документи: читання було `if true`, і це перелічувало всіх
		// користувачів разом зі статистикою.
		name: 'ПЕРЕЛІЧИТИ всіх користувачів без токена',
		allowed: false,
		run: () => fsRead('users?pageSize=5', null)
	},
	{
		name: 'ПЕРЕЛІЧИТИ всіх користувачів з токеном',
		allowed: false,
		run: () => fsRead('users?pageSize=5', guest.token)
	},
	{
		name: 'читати чужий профіль users/{uid}',
		allowed: false,
		run: () => fsRead(`users/${guest.uid}`, host.token)
	},
	{
		name: 'читати чужі нагороди rewards/{uid}',
		allowed: false,
		run: () => fsRead(`rewards/${guest.uid}`, host.token)
	},
	{
		name: 'чужі нагороди rewards/{uid}',
		allowed: false,
		run: () => fsCreate('rewards', guest.uid, { any: 1 }, host.token)
	},
	/*
	 * ПУБЛІЧНИЙ ПРОФІЛЬ, ПОШУК І ПІДПИСКИ.
	 *
	 * Головний випадок тут один, і він третій: запит до `profiles` БЕЗ умови
	 * «лише ті, хто дозволив пошук» мусить відмовити. Саме цим правило
	 * відрізняється від фільтра на клієнті — той приховує від того, хто дивиться
	 * екраном, і не приховує нічого від того, хто відкрив консоль.
	 */
	{
		name: 'гість пише СВІЙ публічний профіль',
		allowed: true,
		run: () =>
			fsCreate(
				'profiles',
				guest.uid,
				{
					displayName: 'Гість',
					avatar: 'cat:blue',
					country: 'ua',
					searchableEmailHash: 'deadbeef',
					privacy: { search: true, follow: true, board: true },
					updatedAt: 1
				},
				guest.token
			)
	},
	{
		name: 'читати чужий профіль за uid (список підписок)',
		allowed: true,
		run: () => fsRead(`profiles/${guest.uid}`, host.token)
	},
	{
		name: 'пошук за поштою — із умовою згоди й межею',
		allowed: true,
		run: () =>
			fsQuery(
				'profiles',
				[
					{ path: 'searchableEmailHash', raw: 'deadbeef' },
					{ path: 'privacy.search', raw: true }
				],
				20,
				host.token
			)
	},
	{
		name: 'пошук БЕЗ умови згоди на пошук',
		allowed: false,
		run: () =>
			fsQuery('profiles', [{ path: 'searchableEmailHash', raw: 'deadbeef' }], 20, host.token)
	},
	{
		name: 'пошук без межі',
		allowed: false,
		run: () =>
			fsQuery(
				'profiles',
				[
					{ path: 'searchableEmailHash', raw: 'deadbeef' },
					{ path: 'privacy.search', raw: true }
				],
				null,
				host.token
			)
	},
	{
		name: 'ЧУЖИЙ публічний профіль',
		allowed: false,
		run: () =>
			fsCreate(
				'profiles',
				`${host.uid}`,
				{ displayName: 'Не я', privacy: { search: true, follow: true, board: true } },
				guest.token
			)
	},
	{
		name: 'у профілі поле, якого схема не знає',
		allowed: false,
		run: () =>
			fsUpdate(
				`profiles/${guest.uid}`,
				{
					displayName: 'Гість',
					role: 'admin',
					privacy: { search: true, follow: true, board: true }
				},
				guest.token
			)
	},
	{
		name: 'перемикач приватності НЕ булевий',
		allowed: false,
		run: () =>
			fsUpdate(
				`profiles/${guest.uid}`,
				{ displayName: 'Гість', privacy: { search: 'yes', follow: true, board: true } },
				guest.token
			)
	},
	{
		name: 'господар пише свій профіль (для випадків про підписки)',
		allowed: true,
		run: () =>
			fsCreate(
				'profiles',
				host.uid,
				{
					displayName: 'Господар',
					privacy: { search: true, follow: true, board: true },
					updatedAt: 1
				},
				host.token
			)
	},
	{
		// Дзеркало пише САМ підписник: ключ — його `uid`, і правило це вимагає.
		name: 'гість додає себе в підписники господаря',
		allowed: true,
		run: () => fsCreate(`users/${host.uid}/followers`, guest.uid, { at: 1 }, guest.token)
	},
	{
		name: 'гість пише свою підписку',
		allowed: true,
		run: () => fsCreate(`users/${guest.uid}/following`, host.uid, { at: 1 }, guest.token)
	},
	{
		name: 'у записі підписки поле, якого схема не знає',
		allowed: false,
		run: () =>
			fsCreate(`users/${guest.uid}/following`, 'someone', { at: 1, note: 'привіт' }, guest.token)
	},
	{
		/*
		 * ЧУЖУ ПІДПИСКУ НЕ СТВОРИТИ, і це не дрібниця: без цього правила будь-хто
		 * дописував би собі підписників, а взаємність — це і є друзі. Тобто
		 * «дружба» ставала б односторонньою заявою.
		 */
		name: 'записати чужу підписку за нього',
		allowed: false,
		run: () => fsCreate(`users/${host.uid}/following`, guest.uid, { at: 1 }, guest.token)
	},
	{
		name: 'записати себе чужим підписником від третьої особи',
		allowed: false,
		run: () => fsCreate(`users/${guest.uid}/followers`, host.uid, { at: 1 }, guest.token)
	},
	{
		name: 'господар закриває підписки на себе',
		allowed: true,
		run: () =>
			fsUpdate(
				`profiles/${host.uid}`,
				{
					displayName: 'Господар',
					privacy: { search: true, follow: false, board: true },
					updatedAt: 2
				},
				host.token
			)
	},
	{
		// ГОЛОВНИЙ ВИПАДОК приватності підписок: згоду тримає правило, а не екран.
		name: 'підписатися на того, хто закрив підписки',
		allowed: false,
		run: () => fsCreate(`users/${host.uid}/followers`, 'stranger-uid', { at: 1 }, guest.token)
	},
	{
		// Прибрати себе з чужих підписників можна ЗАВЖДИ: інакше людина, яка щойно
		// закрила підписки, замкнула б наявних підписників назавжди.
		name: 'зняти свою підписку при закритих підписках',
		allowed: true,
		run: () => fsDelete(`users/${host.uid}/followers/${guest.uid}`, guest.token)
	},
	{
		// «Прибери мене зі своїх підписок»: без цього права відписати наполегливого
		// підписника було б нічим.
		name: 'той, на кого підписані, знімає чужу підписку на себе',
		allowed: true,
		run: () => fsDelete(`users/${guest.uid}/following/${host.uid}`, host.token)
	},
	{
		name: 'чужий публічний профіль прибрати не можна',
		allowed: false,
		run: () => fsDelete(`profiles/${host.uid}`, guest.token)
	},
	{
		name: 'гість прибирає СВІЙ публічний профіль (видалення акаунта)',
		allowed: true,
		run: () => fsDelete(`profiles/${guest.uid}`, guest.token)
	},

	{
		name: 'чужий рекорд leaderboards/{uid}_{mode}_{size}',
		allowed: false,
		run: () => fsCreate('leaderboards', `${guest.uid}_timed_4`, { score: 999 }, host.token)
	},

	/*
	 * ПРИБИРАННЯ ЗА СОБОЮ — те, чого доти не було зовсім: рекорд видаленого
	 * акаунта лишався в публічній таблиці назавжди, разом з іменем людини, якої
	 * вже немає, і прибрати його не міг ніхто.
	 */
	{
		name: 'гість пише СВІЙ рекорд',
		allowed: true,
		run: () =>
			fsCreate('leaderboards', `${guest.uid}_timed_5`, { uid: guest.uid, score: 42 }, guest.token)
	},
	{
		name: 'гість прибирає СВІЙ рекорд (видалення акаунта)',
		allowed: true,
		run: () => fsDelete(`leaderboards/${guest.uid}_timed_5`, guest.token)
	},
	{
		name: 'прибрати ЧУЖИЙ рекорд',
		allowed: false,
		run: () => fsDelete(`leaderboards/${host.uid}_timed_4`, guest.token)
	},
	{
		name: 'гість прибирає свій документ users/{uid}',
		allowed: true,
		run: () => fsDelete(`users/${guest.uid}`, guest.token)
	},
	{
		name: 'прибрати ЧУЖИЙ документ users/{uid}',
		allowed: false,
		run: () => fsDelete(`users/${host.uid}`, guest.token)
	},
	{
		name: 'довільна нова колекція в чужому проєкті',
		allowed: false,
		run: () => fsCreate('hackers', 'pwn', { any: 1 }, host.token)
	},
	{
		name: 'довільна підколекція кімнати',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/backdoor`, 'x', { any: 1 }, host.token)
	},
	{
		name: 'читання чужих відгуків feedback/*',
		allowed: false,
		run: () => fsRead('feedback/bug/entries', null)
	},
	{
		name: 'довільний ключ у спільні лічильники',
		allowed: false,
		run: () => fsUpdate('general/stats', { pwned: 1 }, host.token)
	},
	{
		name: 'не-господар зносить кімнату',
		allowed: false,
		run: () => fsDelete(`rooms/${ROOM}`, guest.token)
	},

	// --- знесення останнє: воно прибирає стан для решти ---
	{
		name: 'господар зносить свою кімнату',
		allowed: true,
		run: () => fsDelete(`rooms/${ROOM}`, host.token)
	}
];

const problems = [];
let positives = 0;

for (const { name, allowed, run } of CASES) {
	if (allowed) positives++;
	const status = await run();
	const ok = status >= 200 && status < 300;
	const verdict = ok ? 'ДОЗВОЛЕНО' : `ЗАБОРОНЕНО(${status})`;
	console.log(`  ${ok === allowed ? '✓' : '✗'} ${verdict.padEnd(18)} ${name}`);
	if (ok !== allowed) {
		problems.push(`${name}: очікувалося ${allowed ? 'дозволено' : 'заборонено'}, отримано ${verdict}`);
	}
}

/* Перевірка живості самої перевірки (AI-AGENT-PITFALLS-v8 § 1). */
const negatives = CASES.length - positives;
if (positives === 0 || negatives === 0) {
	console.error('\nПеревірка вироджена: потрібні і позитивні, і негативні випадки.');
	process.exit(1);
}

if (problems.length) {
	console.error(`\nПравила доступу не відповідають очікуванням (${problems.length}):`);
	for (const problem of problems) console.error(`  - ${problem}`);
	process.exit(1);
}

console.log(
	`\nПравила доступу: ${CASES.length} перевірок (${positives} дозволено, ${negatives} заборонено), розбіжностей немає.`
);
