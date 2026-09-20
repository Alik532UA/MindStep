/**
 * УВІМКНУТИ TTL-ПОЛІТИКИ FIRESTORE — без консолі й без `gcloud`.
 *
 * ## Навіщо
 *
 * Поле `expiresAt` пишеться в кімнати, але сама база за ним нічого не робить,
 * доки для колекції не ввімкнено TTL-політику. Тобто без цього кроку
 * прибирання працює лише для тих, хто повернувся й відкрив лобі, — а
 * найпотрібніше воно саме для тих, хто не повернеться ніколи.
 *
 * ## Чому скрипт, а не десять кліків у консолі
 *
 * Три причини, і жодна не про лінощі:
 *
 *  1. **відтворюваність.** Консоль лишає по собі стан, якого немає в
 *     репозиторії: якщо проєкт колись перестворять, ніхто не згадає, що там
 *     було ввімкнено;
 *  2. **перевірність.** Скрипт друкує, який стан у політики ЗАРАЗ, — і це
 *     відповідь на «чи справді ввімкнено», якої інакше нема де взяти;
 *  3. **`gcloud` тут не встановлений**, а ставити його заради двох дій не
 *     варто. REST API Firestore уміє те саме.
 *
 * ## Чим він ходить у базу
 *
 * Тим самим сервісним акаунтом, який уже лежить у секретах репозиторію й
 * викладає правила. Нового доступу не заводиться.
 *
 * Токен здобувається без жодної бібліотеки: підписаний JWT (RS256 через
 * вбудований `crypto`) обмінюється на access token. Це стандартний потік
 * сервісного акаунта Google; єдине, чого він вимагає, — правильний час на
 * машині.
 *
 * ## Запуск
 *
 *   GOOGLE_APPLICATION_CREDENTIALS=/шлях/до/ключа.json \
 *   FIREBASE_PROJECT=stay-on-the-board \
 *   node scripts/firestore-ttl.mjs [--apply]
 *
 * Без `--apply` він лише ПОКАЗУЄ поточний стан і нічого не міняє. Умикання
 * TTL означає, що база почне видаляти документи, — таке не робиться як побічний
 * ефект запуску.
 */
import { createSign } from 'node:crypto';
import { readFileSync } from 'node:fs';

/** Групи колекцій і поле, за яким рахується строк. */
const POLICIES = [
	{
		collectionGroup: 'rooms',
		field: 'expiresAt',
		why: 'покинута кімната: закрили вкладку й не повернулися'
	},
	{
		collectionGroup: 'moves',
		field: 'expiresAt',
		/*
		 * Друга політика потрібна тому, що Firestore НЕ видаляє підколекції
		 * разом із батьківським документом. Кімната зникає, а її
		 * `rooms/{id}/moves/*` лишаються сиротами — і дістатися до них потім
		 * нічим, бо шлях починається з ідентифікатора кімнати, якої вже немає.
		 * Стерти ходи не може навіть господар: журнал append-only за побудовою.
		 */
		why: 'ходи, що лишилися б сиротами після видалення кімнати'
	}
];

const KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const PROJECT = process.env.FIREBASE_PROJECT;
const APPLY = process.argv.includes('--apply');

if (!KEY_FILE) {
	console.error('Немає GOOGLE_APPLICATION_CREDENTIALS — шляху до ключа сервісного акаунта.');
	process.exit(2);
}
if (!PROJECT) {
	console.error('Немає FIREBASE_PROJECT — ідентифікатора проєкту.');
	process.exit(2);
}

const base64url = (input) =>
	Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

/**
 * Access token сервісного акаунта.
 *
 * Без бібліотек: JWT, підписаний приватним ключем із файлу, обмінюється на
 * токен. `scope` — рівно `datastore`: ширший тут не потрібен, а вужчого немає.
 */
async function accessToken(key) {
	const now = Math.floor(Date.now() / 1000);
	const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
	const claims = base64url(
		JSON.stringify({
			iss: key.client_email,
			scope: 'https://www.googleapis.com/auth/datastore',
			aud: 'https://oauth2.googleapis.com/token',
			iat: now,
			exp: now + 3600
		})
	);

	const sign = createSign('RSA-SHA256');
	sign.update(`${header}.${claims}`);
	const signature = sign.sign(key.private_key, 'base64url');

	const res = await fetch('https://oauth2.googleapis.com/token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
			assertion: `${header}.${claims}.${signature}`
		})
	});

	const body = await res.json();
	if (!res.ok) {
		/*
		 * Найчастіша причина — розбіжність годинника: JWT дійсний вузьким
		 * вікном, і «invalid_grant» тут означає саме це, а не поганий ключ.
		 */
		throw new Error(`не вдалося отримати токен (${res.status}): ${JSON.stringify(body)}`);
	}
	return body.access_token;
}

const fieldUrl = (collectionGroup, field) =>
	`https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/collectionGroups/${collectionGroup}/fields/${field}`;

async function currentState(token, policy) {
	const res = await fetch(fieldUrl(policy.collectionGroup, policy.field), {
		headers: { Authorization: `Bearer ${token}` }
	});
	if (!res.ok) throw new Error(`читання стану дало ${res.status}: ${await res.text()}`);
	const body = await res.json();
	// `ttlConfig` відсутній — політики немає. `state` каже, чи вона вже діє.
	return body.ttlConfig?.state ?? 'НЕМАЄ';
}

async function enable(token, policy) {
	const url = `${fieldUrl(policy.collectionGroup, policy.field)}?updateMask.fieldPaths=ttlConfig`;
	const res = await fetch(url, {
		method: 'PATCH',
		headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
		body: JSON.stringify({ ttlConfig: {} })
	});
	if (!res.ok) throw new Error(`увімкнення дало ${res.status}: ${await res.text()}`);
}

const key = JSON.parse(readFileSync(KEY_FILE, 'utf8'));
const token = await accessToken(key);

console.log(`Проєкт: ${PROJECT}`);
console.log(APPLY ? 'Режим: УВІМКНУТИ\n' : 'Режим: лише показати (додайте --apply, щоб увімкнути)\n');

let failed = 0;
for (const policy of POLICIES) {
	const label = `${policy.collectionGroup}.${policy.field}`;
	try {
		const before = await currentState(token, policy);
		if (!APPLY) {
			console.log(`  ${label}: ${before}  — ${policy.why}`);
			continue;
		}
		if (before === 'ACTIVE' || before === 'CREATING') {
			console.log(`  ${label}: уже ${before}, нічого не робимо`);
			continue;
		}
		await enable(token, policy);
		console.log(`  ${label}: ${before} → ${await currentState(token, policy)}  — ${policy.why}`);
	} catch (error) {
		failed += 1;
		console.error(`  ${label}: ${error.message}`);
	}
}

if (failed > 0) {
	console.error(`\nНевдач: ${failed}.`);
	console.error(
		'Якщо це PERMISSION_DENIED — сервісному акаунтові бракує ролі «Cloud Datastore Owner»\n' +
			'або «Firebase Rules Admin» не досить: TTL керується правами Datastore.'
	);
	process.exit(1);
}

console.log(
	APPLY
		? '\nГотово. Стан CREATING переходить в ACTIVE за кілька хвилин; перше видалення\n' +
				'може статися протягом доби після настання часу — Firestore не обіцяє миттєвості.'
		: '\nНічого не змінено.'
);
