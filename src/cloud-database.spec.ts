// @vitest-environment node
// Перевірка лише читає файли — DOM їй не потрібен.
import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Інваріанти роботи з хмарною базою за CLOUD-DATABASE-v8 § 14.
 *
 * **Чого ці перевірки НЕ роблять.** Вони не перевіряють самі правила доступу —
 * ті виконуються на боці Firebase, і побачити їхній стан можна лише запитом до
 * емулятора. Це робить `npm run check:rules`, і він стоїть окремим джобом у CI.
 *
 * Тут — форма коду й форма файлів правил: те, що видно з джерел і що можна
 * зламати правкою, не торкаючись бази. Жодна з двох половин не заміняє іншу:
 * гейт над емулятором не побачить статичного імпорту SDK, а ці інваріанти не
 * побачать дозволу, який забули звузити.
 */

const IGNORED_DIRS = new Set(['node_modules', '.svelte-kit', 'build', 'dist', 'dev-dist']);

function walk(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		if (IGNORED_DIRS.has(entry)) continue;
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full.replace(/\\/g, '/'));
	}
	return out;
}

const sources = walk('src').filter((f) => /\.(ts|svelte)$/.test(f));
const firestoreRules = readFileSync('firestore.rules', 'utf8');
/** Коментарі не рахуються: у них `if true` цитують саме як опис дефекту. */
const rulesCode = firestoreRules.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
const databaseRules = readFileSync('database.rules.json', 'utf8').replace(/^\s*\/\/.*$/gm, '');

describe('хмарна база', () => {
	it('знаходить джерела — перевірка жива', () => {
		expect(sources.length).toBeGreaterThan(0);
		expect(rulesCode).toContain('service cloud.firestore');
	});

	it('обидва файли правил прив’язані через firebase.json (§ 2.2)', () => {
		const config = JSON.parse(readFileSync('firebase.json', 'utf8'));
		for (const key of ['firestore', 'database'] as const) {
			const path = config[key]?.rules;
			expect(path, `firebase.json не вказує правила для ${key}`).toBeTruthy();
			expect(existsSync(path), `${path} немає`).toBe(true);
		}
	});

	it('гейт правил існує, кличе емулятор і закріплює проєкт (§ 3)', () => {
		const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
		const script = pkg.scripts['check:rules'];
		expect(script, 'немає скрипта check:rules').toMatch(/emulators:exec/);
		/*
		 * `--project` обовʼязковий, і це не педантизм. Без нього емулятор RTDB
		 * бере інший простір імен, ніж припускає скрипт, — пише в НОВИЙ простір із
		 * типовими відкритими правилами, і гейт зеленіє на правилах, яких не читав.
		 * Знайдено прогоном 2026-08-18.
		 */
		expect(script, 'без --project гейт перевіряє не ті правила').toMatch(/--project\s+\S+/);
		expect(existsSync('scripts/check-rules.mjs')).toBe(true);
	});

	it('гейт правил стоїть у CI (§ 3.4)', () => {
		const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8');
		expect(workflow, 'джоба з check:rules немає').toMatch(/check:rules/);
		expect(workflow, 'емулятору потрібна Java, кроку setup-java немає').toMatch(/setup-java/);
	});

	it('перевірка правил містить обидві полярності (§ 3.1)', () => {
		const script = readFileSync('scripts/check-rules.mjs', 'utf8');
		const positives = [...script.matchAll(/allowed:\s*true/g)].length;
		const negatives = [...script.matchAll(/allowed:\s*false/g)].length;
		expect(positives, 'немає випадків «застосунок мусить це вміти»').toBeGreaterThan(0);
		expect(negatives, 'немає випадків «сторонній не мусить цього могти»').toBeGreaterThan(0);
	});

	/**
	 * Безумовний дозвіл існує рівно у трьох місцях, і кожне з них назване.
	 *
	 * Це не whitelist «щоб тест мовчав»: перелік працює як базова лінія, яка може
	 * лише скорочуватися. Новий `if true` не пройде, доки хтось не додасть його
	 * сюди разом із причиною — тобто доки не сформулює вголос, чому дані справді
	 * публічні.
	 */
	const NAMED_OPEN_RULES: Array<{ rule: string; why: string }> = [
		{
			rule: 'allow get: if true;',
			why: 'таблиця рекордів: вона й існує, щоб її бачили всі; перелік обмежений limit'
		},
		{
			rule: 'allow create: if true;',
			why: 'відгук: форму відкриває будь-хто, зокрема неавторизований відвідувач'
		},
		{
			rule: 'allow read: if true;',
			why: 'лічильники general/*: публічна статистика, запис обмежений переліком ключів'
		}
	];

	it('безумовний дозвіл лише там, де він названий (§ 1.3)', () => {
		const open = [...rulesCode.matchAll(/allow\s+[a-z, ]+:\s*if\s+true\s*;/g)].map((m) => m[0]);
		const allowed = new Set(NAMED_OPEN_RULES.map((entry) => entry.rule));

		const unexpected = open.filter((rule) => !allowed.has(rule));
		expect(unexpected, `безумовний дозвіл без причини:\n${unexpected.join('\n')}`).toEqual([]);

		// Другий бік тієї самої перевірки: виняток, який більше не потрібен,
		// мусить зникнути зі списку, інакше він приховає наступний.
		const stale = NAMED_OPEN_RULES.filter((entry) => !open.includes(entry.rule)).map((e) => e.rule);
		expect(stale, `виняток більше не потрібен — прибрати зі списку:\n${stale.join('\n')}`).toEqual(
			[]
		);
	});

	it('останнє правило Firestore — заборона (§ 1.3)', () => {
		expect(rulesCode).toMatch(
			/match\s+\/\{document=\*\*\}\s*\{[^}]*allow\s+read,\s*write:\s*if\s+false/
		);
	});

	it('RTDB не має безумовного дозволу (§ 1.3)', () => {
		const open = [...databaseRules.matchAll(/"\.(?:read|write)"\s*:\s*(?:true|"true")\s*[,}]/g)];
		expect(open.map((m) => m[0]), 'відкрита гілка в RTDB').toEqual([]);
	});

	it('журнал ходів можна лише СТВОРИТИ, і лише від себе (§ 4.2)', () => {
		// Без цього правила журнал перестає бути правдою: хід перезаписується, і
		// його можна підписати чужим імʼям.
		const moves = rulesCode.match(/match\s+\/moves\/\{seq\}\s*\{([\s\S]*?)\n\s{6}\}/);
		expect(moves, 'правила для moves/{seq} не знайдено').not.toBeNull();
		expect(moves?.[1]).toMatch(/allow\s+create:/);
		expect(moves?.[1]).toMatch(/allow\s+update:\s*if\s+false/);
		expect(moves?.[1]).toMatch(/request\.resource\.data\.by\s*==\s*request\.auth\.uid/);
	});

	/**
	 * Тіло виклику `query(...)` з урахуванням вкладених дужок.
	 *
	 * Регулярним виразом це не робиться, і перша спроба довела чому: `[\s\S]*?\)`
	 * зупиняється на першій же закритій дужці, тобто на `orderBy(...)`, — і
	 * `limit()`, що стоїть далі, «зникає». Перевірка тоді звинувачує чотири
	 * правильні файли, і єдиний спосіб її «полагодити» — послабити, тобто
	 * зробити марною.
	 */
	function queryBodies(text: string): string[] {
		const bodies: string[] = [];
		const call = /\bquery\s*\(/g;
		let match: RegExpExecArray | null;
		while ((match = call.exec(text)) !== null) {
			let depth = 1;
			let i = match.index + match[0].length;
			const start = i;
			while (i < text.length && depth > 0) {
				if (text[i] === '(') depth++;
				else if (text[i] === ')') depth--;
				i++;
			}
			bodies.push(text.slice(start, i - 1));
		}
		return bodies;
	}

	it('кожен запит колекції має limit() (§ 7.1)', () => {
		const bad: string[] = [];
		for (const file of sources) {
			// Сам файл перевірки містить приклади запитів у тексті — інакше він
			// звинувачував би себе.
			if (file.endsWith('cloud-database.spec.ts')) continue;
			for (const body of queryBodies(readFileSync(file, 'utf8'))) {
				// Запит поверх іншого запиту (`query(q, where(...))`) успадковує межу
				// зовнішнього — його вважати безмежним не можна.
				const isDerived = /^\s*q\s*,/.test(body);
				if (!/\blimit\s*\(/.test(body) && !isDerived && !/unbounded-query/.test(body)) {
					bad.push(`${file}: query(${body.slice(0, 60).replace(/\s+/g, ' ')}…)`);
				}
			}
		}
		expect(bad, `запит без limit():\n${bad.join('\n')}`).toEqual([]);
	});

	it('orderBy asc + limit не використовується як «останні N» (§ 7.2)', () => {
		// Перші N — не останні N. Дефект не виглядає як дефект: перші N на місці й
		// правильні, а на малих даних поведінка бездоганна.
		const bad: string[] = [];
		for (const file of sources) {
			const text = readFileSync(file, 'utf8');
			for (const match of text.matchAll(/orderBy\([^)]*['"]asc['"]\s*\)[\s\S]{0,80}?limit\(/g)) {
				bad.push(`${file}: ${match[0].replace(/\s+/g, ' ').slice(0, 70)}`);
			}
		}
		expect(bad, `перші N замість останніх N:\n${bad.join('\n')}`).toEqual([]);
	});

	it('SDK не імпортується у .svelte.ts (§ 10.4)', () => {
		// Мережа, зрощена з реактивністю, не підміняється в тесті й не виноситься.
		const bad = sources
			.filter((file) => file.endsWith('.svelte.ts'))
			.filter((file) => /from\s+['"]firebase\//.test(readFileSync(file, 'utf8')));
		expect(bad, `Firebase у реактивному модулі:\n${bad.join('\n')}`).toEqual([]);
	});

	it('SDK не ініціалізується в тілі модуля (§ 10.1)', () => {
		/*
		 * Знайдений випадок: `LocalGameController.spec.ts` падав у CI з
		 * `auth/invalid-api-key` ДО першого тесту, бо транзитивно тягнув модуль,
		 * чий конструктор піднімав SDK на імпорті.
		 *
		 * Ознака саме «в тілі модуля» — НУЛЬОВИЙ ВІДСТУП. Виклик усередині
		 * функції має відступ і виконується тоді, коли функцію покличуть; виклик
		 * на нульовому — на імпорті. Перша версія перевірки цього не розрізняла й
		 * звинувачувала правильний файл.
		 */
		const bad = sources.filter((file) =>
			/^(?:(?:const|let|var)\s+\w+\s*=\s*)?initializeApp\s*\(/m.test(readFileSync(file, 'utf8'))
		);
		expect(bad, `initializeApp у тілі модуля:\n${bad.join('\n')}`).toEqual([]);
	});

	it('стан партії не зберігається в базі (§ 8)', () => {
		// Модель журналу: у базі лежить ОПИС партії й ходи, а стан обчислюється.
		// Повернення `gameState` означало б повернення всіх трьох дефектів разом:
		// правило без власника, взаємне перетирання й «що нового» через довжини.
		const offenders = sources.filter((file) => {
			if (file.includes('/sync/') || file.endsWith('.spec.ts')) return false;
			return /gameState\s*:/.test(readFileSync(file, 'utf8'));
		});
		expect(offenders, `повний стан партії пишеться в базу:\n${offenders.join('\n')}`).toEqual([]);
	});

	it('схема перелічує ті самі колекції, у які пише код (§ 6.4)', () => {
		const schema = readFileSync('src/lib/types/firebaseSchema.ts', 'utf8');
		const declared = [...schema.matchAll(/^\s*[A-Z_]+:\s*'([a-z_0-9]+)'/gm)].map((m) => m[1]);
		expect(declared.length, 'у схемі немає жодної колекції').toBeGreaterThan(0);

		const used = new Set<string>();
		for (const file of sources) {
			if (file.endsWith('firebaseSchema.ts')) continue;
			for (const match of readFileSync(file, 'utf8').matchAll(
				/(?:doc|collection)\(\s*[\w.()]+\s*,\s*'([a-z_0-9]+)'/g
			)) {
				used.add(match[1]);
			}
		}

		// Колекція, яку код пише, а схема не описує, — це база, про яку файл
		// мовчить. Зворотне — опис бази, якої немає.
		const undocumented = [...used].filter((name) => !declared.includes(name));
		expect(undocumented, `у коді є, у схемі немає: ${undocumented.join(', ')}`).toEqual([]);
	});
});
