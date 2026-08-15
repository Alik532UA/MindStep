/**
 * Перевірка правил доступу Firestore над емулятором.
 *
 * Запускати: `npm run check:rules` (скрипт сам піднімає емулятори).
 *
 * ЧОМУ ЦЕ ОКРЕМИЙ СКРИПТ, А НЕ ТЕСТ. Правила доступу — єдина частина цього
 * проєкту, стан якої не видно ні в `src/`, ні у `build/`: вони виконуються на
 * боці Firebase. Перевірити їх можна лише запитом до емулятора, а емулятор у
 * CI не піднімається (те саме обмеження, що й у `npm run test:online`, і воно
 * записане в PROJECT-CONTEXT.md). Файл під vitest або Playwright тут був би
 * файлом, якого не запускає ніхто — саме те, що забороняє
 * AI-AGENT-PITFALLS-v8 § 1.3.
 *
 * Перевірка сама собі зворотний експеримент: половина очікувань — «дозволено»,
 * половина — «заборонено». Правила «дозволити все» валять другу половину,
 * правила «заборонити все» — першу. Зелений результат неможливий випадково.
 *
 * REST-запит без токена `owner` проходить через правила так само, як
 * клієнтський SDK — саме тому тут звичайний `fetch`, а не firebase-admin.
 */
const HOST = process.env.FIRESTORE_EMULATOR_HOST ?? '127.0.0.1:8080';
const PROJECT = process.env.GCLOUD_PROJECT ?? 'demo-no-project';
const BASE = `http://${HOST}/v1/projects/${PROJECT}/databases/(default)/documents`;

/** @param {string} path @param {string} docId */
async function write(path, docId) {
	const res = await fetch(`${BASE}/${path}?documentId=${docId}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ fields: { probe: { stringValue: 'x' } } })
	});
	return res.status;
}

/** @param {string} path */
async function read(path) {
	return (await fetch(`${BASE}/${path}`)).status;
}

/**
 * Кожен рядок — що саме перевіряємо і чого чекаємо.
 * `allowed: true` означає «застосунок мусить це вміти», `false` — «сторонній
 * не мусить цього могти».
 */
const CASES = [
	{ name: 'лічильники general/* — застосунок їх пише', allowed: true, run: () => write('general', 'probe-doc') },
	{ name: 'кімната rooms/* — обидва гравці її пишуть', allowed: true, run: () => write('rooms', 'probe-room') },
	{ name: 'чужий профіль users/{uid}', allowed: false, run: () => write('users', 'someone-else') },
	{ name: 'чужі нагороди rewards/{uid}', allowed: false, run: () => write('rewards', 'someone-else') },
	{ name: 'чужий рекорд leaderboards/{uid}_{mode}_{size}', allowed: false, run: () => write('leaderboards', 'foreign_x_1') },
	{ name: 'довільна нова колекція в чужому проєкті', allowed: false, run: () => write('hackers', 'pwn') },
	{ name: 'читання чужих відгуків feedback/*', allowed: false, run: () => read('feedback') }
];

const problems = [];

for (const { name, allowed, run } of CASES) {
	const status = await run();
	const isAllowed = status === 200;
	const verdict = isAllowed ? 'ДОЗВОЛЕНО' : `ЗАБОРОНЕНО(${status})`;
	console.log(`  ${isAllowed === allowed ? '✓' : '✗'} ${verdict.padEnd(18)} ${name}`);
	if (isAllowed !== allowed) {
		problems.push(`${name}: очікувалося ${allowed ? 'дозволено' : 'заборонено'}, отримано ${verdict}`);
	}
}

if (problems.length) {
	console.error(`\nПравила доступу не відповідають очікуванням (${problems.length}):`);
	for (const problem of problems) console.error(`  - ${problem}`);
	process.exit(1);
}

console.log(`\nПравила доступу: ${CASES.length} перевірок, розбіжностей немає.`);
