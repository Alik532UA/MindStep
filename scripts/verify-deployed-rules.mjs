/**
 * ЧИ СПРАВДІ В БАЗІ ТЕ, ЩО В GIT — перевірка ПІСЛЯ викладення.
 *
 * ## Навіщо, якщо крок деплою щойно відзвітував успіхом
 *
 * Бо «команда не впала» і «в базі тепер ця редакція» — різні твердження.
 * `--only` міг не покривати частину файлів, проєкт міг бути не той, крок міг
 * бути пропущений умовою `if`. Жоден із цих випадків не робить `deploy`
 * червоним, а результат у всіх один: у базі лишаються старі правила.
 *
 * Доказ, що це не теоретичний страх. У сусідньому `Slovko` те саме питання
 * стояло відкритим і закрилося лише звіркою (2026-09-21): у Firestore лежала
 * редакція від **2026-02-02**, на сім місяців старша за файл. Серпнева
 * ревізія, що полагодила три справжні зломи, не доїхала ЖОДНОГО разу — і
 * дізнатися про це було нізвідки, бо всі гейти дивилися у файл.
 *
 * Тут ціна була б вищою: `check-rules.mjs` перевіряє 90 випадків на
 * емуляторі, тобто зелений гейт означає «файл правильний», а не «база
 * захищена». Без цього кроку різниця між двома твердженнями не видна нізвідки.
 *
 * ## Чому порівнюється зміст, а не байти
 *
 * Відступи й переноси віддає Firebase у своєму форматуванні, а не в нашому.
 * Розбіжність у них означала б «розійшлося» там, де нічого не розійшлося, — і
 * такий звіт перестали б читати вже на другий раз.
 *
 * ## Запуск
 *
 *   GOOGLE_APPLICATION_CREDENTIALS=… FIREBASE_PROJECT=… \
 *   FIREBASE_DATABASE_URL=… node scripts/verify-deployed-rules.mjs
 *
 * Лише читання. Нічого не міняє й нічого не викладає.
 */
import { createSign } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';

const KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const PROJECT = process.env.FIREBASE_PROJECT;
const DATABASE_URL = process.env.FIREBASE_DATABASE_URL;

if (!KEY_FILE || !PROJECT) {
	console.error('Потрібні GOOGLE_APPLICATION_CREDENTIALS і FIREBASE_PROJECT.');
	process.exit(2);
}

const key = JSON.parse(readFileSync(KEY_FILE, 'utf8'));
const base64url = (s) =>
	Buffer.from(s).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

async function token(scope) {
	const now = Math.floor(Date.now() / 1000);
	const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
	const claims = base64url(
		JSON.stringify({
			iss: key.client_email,
			scope,
			aud: 'https://oauth2.googleapis.com/token',
			iat: now,
			exp: now + 3600
		})
	);
	const sign = createSign('RSA-SHA256');
	sign.update(`${header}.${claims}`);
	const res = await fetch('https://oauth2.googleapis.com/token', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
			assertion: `${header}.${claims}.${sign.sign(key.private_key, 'base64url')}`
		})
	});
	const body = await res.json();
	if (!res.ok) throw new Error(`токен: ${res.status} ${JSON.stringify(body)}`);
	return body.access_token;
}

const squeeze = (text) => text.replace(/\s+/g, ' ').trim();

let mismatched = 0;
let checked = 0;

/** @param {string} what @param {string} live @param {string} localFile @param {string} note */
function compare(what, live, localFile, note = '') {
	checked += 1;
	const local = readFileSync(localFile, 'utf8');
	if (squeeze(live) === squeeze(local)) {
		console.log(`  ${what}: збігається (${live.length} байт)${note}`);
		return;
	}
	mismatched += 1;
	console.error(
		`  ${what}: РОЗІЙШЛОСЯ — у базі ${live.length} байт, у ${localFile} ${local.length}${note}`
	);
}

console.log(`Проєкт: ${PROJECT}`);

// ─── Firestore ───────────────────────────────────────────────────────────────

if (existsSync('firestore.rules')) {
	const t = await token('https://www.googleapis.com/auth/cloud-platform');
	const rel = await fetch(`https://firebaserules.googleapis.com/v1/projects/${PROJECT}/releases`, {
		headers: { Authorization: `Bearer ${t}` }
	});
	if (!rel.ok) {
		console.error(`  Firestore: перелік релізів дав ${rel.status}`);
		mismatched += 1;
	} else {
		const release = ((await rel.json()).releases ?? []).find((r) =>
			r.name.endsWith('cloud.firestore')
		);
		if (!release) {
			console.error('  Firestore: жодного релізу правил — у базі типові');
			mismatched += 1;
		} else {
			const rs = await fetch(`https://firebaserules.googleapis.com/v1/${release.rulesetName}`, {
				headers: { Authorization: `Bearer ${t}` }
			});
			const files = (await rs.json()).source?.files ?? [];
			compare(
				'Firestore',
				files.map((f) => f.content).join('\n'),
				'firestore.rules',
				`, викладено ${release.createTime}`
			);
		}
	}
}

// ─── Realtime Database ───────────────────────────────────────────────────────

if (existsSync('database.rules.json')) {
	if (!DATABASE_URL) {
		console.error('  RTDB: немає FIREBASE_DATABASE_URL — перевірити нема за якою адресою');
		mismatched += 1;
	} else {
		const t = await token(
			'https://www.googleapis.com/auth/firebase.database https://www.googleapis.com/auth/userinfo.email'
		);
		const res = await fetch(`${DATABASE_URL}/.settings/rules.json`, {
			headers: { Authorization: `Bearer ${t}` }
		});
		if (!res.ok) {
			console.error(`  RTDB: читання дало ${res.status}`);
			mismatched += 1;
		} else {
			compare('RTDB', await res.text(), 'database.rules.json');
		}
	}
}

/*
 * Нуль перевірок — це не успіх. Саме так перевірка тихо зникає: файли
 * перейменували, умови `existsSync` перестали збігатися, крок лишився зеленим.
 */
if (checked === 0) {
	console.error('\nНе перевірено ЖОДНОГО файлу правил — перевірка дивиться не туди.');
	process.exit(2);
}

if (mismatched > 0) {
	console.error(`\nРозбіжностей: ${mismatched}. У базі не те, що в репозиторії.`);
	process.exit(1);
}

console.log(`\nПеревірено ${checked}: у базі те саме, що в git.`);
