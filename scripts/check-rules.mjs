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
const SERVER_TIME = { '.sv': 'timestamp' };

const room = () => ({
	name: 'Проба',
	hostId: host.uid,
	status: 'waiting',
	isPrivate: false,
	players: { [host.uid]: { id: host.uid, name: 'Господар' } }
});

const move = (by, seq) => ({ seq, by, direction: 'up', distance: 1 });

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
		run: () => fsUpdate(`rooms/${ROOM}`, { ...room(), status: 'playing' }, host.token)
	},
	{
		name: 'господар дописує СВІЙ хід у журнал',
		allowed: true,
		run: () => fsCreate(`rooms/${ROOM}/moves`, '000001', move(host.uid, 1), host.token)
	},
	{
		name: 'гравець пише СВІЙ голос',
		allowed: true,
		run: () => fsCreate(`rooms/${ROOM}/votes`, host.uid, { vote: 'continue' }, host.token)
	},
	{
		name: 'гравець пише СВОЮ присутність (Firestore)',
		allowed: true,
		run: () => fsCreate(`rooms/${ROOM}/presence`, host.uid, { isDisconnected: false }, host.token)
	},
	{
		name: 'гравець пише СВОЮ присутність (RTDB)',
		allowed: true,
		run: () => dbWrite(`status/${ROOM}/${host.uid}`, { state: 'online', last_changed: SERVER_TIME }, host.token)
	},
	{
		name: 'відгук від неавторизованого відвідувача',
		allowed: true,
		run: () => fsCreate('feedback/bug/entries', 'probe', { text: 'проба' }, null)
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
		run: () => fsUpdate(`rooms/${ROOM}/moves/000001`, move(host.uid, 1), host.token)
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
		name: 'чужа присутність (Firestore)',
		allowed: false,
		run: () => fsCreate(`rooms/${ROOM}/presence`, host.uid, { isDisconnected: true }, guest.token)
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
		name: 'чужі нагороди rewards/{uid}',
		allowed: false,
		run: () => fsCreate('rewards', guest.uid, { any: 1 }, host.token)
	},
	{
		name: 'чужий рекорд leaderboards/{uid}_{mode}_{size}',
		allowed: false,
		run: () => fsCreate('leaderboards', `${guest.uid}_timed_4`, { score: 999 }, host.token)
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
