// @vitest-environment node

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * `GATE-EOL` — кінці рядків у робочому дереві (AI-AGENT-PITFALLS-v8 § 1.5,
 * `PIT-EOL-GATE`, HIGH).
 *
 * ## Що саме тут стережеться, і чому це не косметика
 *
 * Сорок три файли перевірок у `src/` читають **власні джерела як текст** —
 * `ci.test.ts` розбирає workflow, `css-variables.spec.ts` шукає `var(--x)` у
 * CSS, `a11y-conventions.spec.ts` сканує розмітку `.svelte`, `csp-hash.test.ts`
 * хешує `app.html`. Для збірки різниця між LF і CRLF невидима. Для цих гейтів
 * вона означає **інший вердикт на різних машинах**: у JavaScript `.` не
 * збігається з `\r` (це термінатор рядка), а `$` без прапорця `m` стоїть перед
 * `\n`, але не перед `\r`.
 *
 * Найгірший прояв — не червоний тест, а **мовчазний нуль знахідок**: перевірка
 * лишається зеленою й перетворюється рівно на порожню (§ 1). У цьому проєкті це
 * вже сталося двічі, і обидва рази лікували наслідок:
 *
 * 1. хеш інлайн-скрипта в CSP рахувався над CRLF — скрипт теми мовчки
 *    блокувався браузером (`svelte.config.js` тепер нормалізує сам);
 * 2. розбір кроків workflow бачив **нуль кроків** на Windows-чекауті —
 *    докблок `src/ci.test.ts` описує це власними словами.
 *
 * Причина одна на обидва випадки й лежить на рівні репозиторію, а не гейта.
 *
 * ## Чому перевіряється СТАН, а не наявність `.gitattributes`
 *
 * Файл може лежати й не діяти: робоче дерево, вивантажене до його появи,
 * лишається з CRLF, поки його не перевивантажать. Тому нижче звіряються обидві
 * колонки `git ls-files --eol` — `i/` (індекс) і `w/` (робоче дерево), — і саме
 * друга ловить справжній дефект: гейти читають робоче дерево.
 *
 * ## Зворотний експеримент (§ 1.1)
 *
 * `printf 'a\r\nb\r\n' > src/tmp-crlf.txt && git add -f src/tmp-crlf.txt` — і
 * перевірка «в робочому дереві немає CRLF» червоніє, називаючи файл. Прогнано
 * при написанні: до `eol=lf` у `.gitattributes` вона показувала **659** файлів
 * робочого дерева з CRLF, після перевивантаження — нуль.
 */

const ATTRIBUTES_LINE = '* text=auto eol=lf';

/**
 * `git ls-files --eol` віддає рядки виду
 *
 * ```
 * i/lf    w/lf    attr/text=auto eol=lf 	src/app.html
 * i/-text w/-text attr/-text            	static/icon-192.png
 * ```
 *
 * Шлях відділений ТАБУЛЯЦІЄЮ, а `attr/` містить пробіли — тож розбір іде по
 * табуляції, а не по пробілах.
 */
interface Row {
	index: string;
	worktree: string;
	attributes: string;
	path: string;
}

const git = (args: string[]): string =>
	execFileSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });

function rows(): Row[] {
	return git(['ls-files', '--eol'])
		.split('\n')
		.filter((line) => line.trim() !== '')
		.map((line) => {
			const match = /^i\/(\S+)\s+w\/(\S+)\s+attr\/(.*?)\s*\t(.*)$/.exec(line);
			if (!match) throw new Error(`не розібрано рядок git ls-files --eol: ${JSON.stringify(line)}`);
			return { index: match[1], worktree: match[2], attributes: match[3], path: match[4] };
		});
}

const all = rows();

/** `-text` — це двійковий файл: у нього кінців рядків немає за визначенням. */
const isBinary = (row: Row): boolean => row.index === '-text' || row.worktree === '-text';

/**
 * `none` — файл без жодного переходу рядка (однорядковий `.nvmrc`, мінімізований
 * прапорець у `static/flags/`). Порушенням це не є: розходитися нема чому.
 */
const OK = new Set(['lf', 'none']);

const text = all.filter((row) => !isBinary(row));

/**
 * Розширення, які справді лежать у репозиторії двійковими. Перелік дублює
 * `.gitattributes` навмисно: там він — інструкція для Git, тут — твердження, що
 * інструкція подіяла. `.svg` у переліку НЕМАЄ — це текст.
 */
const BINARY_EXTENSIONS = ['.ico', '.png', '.weba'];

describe('перевірка жива', () => {
	/**
	 * Канарка на САМ РОЗБІР. Без неї зламана регулярка або порожній вивід `git`
	 * дали б нуль порушень і зелений гейт — тобто перевірку, якої немає (§ 1).
	 * Порівняння саме з `git ls-files`, а не з константою: число файлів росте, і
	 * записана стеля застаріла б наступним комітом (§ 5.5.1).
	 */
	it('розібрано рівно стільки рядків, скільки Git відстежує файлів', () => {
		const tracked = git(['ls-files']).split('\n').filter((line) => line.trim() !== '').length;
		expect(all.length, 'git ls-files --eol розібрано не повністю').toBe(tracked);
	});

	it('серед відстежуваного є і текст, і двійкове', () => {
		expect(text.length, 'жодного текстового файлу — звіряти нема чого').toBeGreaterThan(0);
		expect(
			all.filter(isBinary).length,
			'жодного двійкового файлу — перевірка переліку binary нижче нічого не доводить'
		).toBeGreaterThan(0);
	});
});

describe('GATE-EOL: кінці рядків (PIT-EOL-GATE)', () => {
	it('.gitattributes оголошує `* text=auto eol=lf`', () => {
		const declared = readFileSync('.gitattributes', 'utf8')
			.split(/\r?\n/)
			.some((line) => line.trim().replace(/\s+/g, ' ') === ATTRIBUTES_LINE);
		expect(
			declared,
			`у .gitattributes немає рядка «${ATTRIBUTES_LINE}». Без \`eol=lf\` робоче дерево ` +
				'на Windows отримує CRLF, і гейти, що читають власні джерела текстом, дають ' +
				'інший вердикт, ніж у CI'
		).toBe(true);
	});

	it('в індексі немає CRLF', () => {
		const offenders = text.filter((row) => !OK.has(row.index)).map((row) => `${row.path} (i/${row.index})`);
		expect(
			offenders,
			`ці файли лежать у репозиторії з CRLF:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('у робочому дереві немає CRLF — саме його читають гейти', () => {
		const offenders = text
			.filter((row) => !OK.has(row.worktree))
			.map((row) => `${row.path} (w/${row.worktree})`);
		expect(
			offenders,
			'ці файли вивантажені з CRLF, тобто локальний прогін і CI читають різний текст.\n' +
				'Перевивантажити: `git rm --cached -r . -q && git reset --hard`.\n' +
				offenders.slice(0, 20).join('\n') +
				(offenders.length > 20 ? `\n…та ще ${offenders.length - 20}` : '')
		).toEqual([]);
	});

	it('індекс і робоче дерево бачать той самий текст', () => {
		const drift = text
			.filter((row) => row.index !== row.worktree)
			.map((row) => `${row.path}: i/${row.index} проти w/${row.worktree}`);
		expect(drift, `розбіжність індексу й робочого дерева:\n${drift.join('\n')}`).toEqual([]);
	});

	it('двійкові типи, що лежать у репозиторії, оголошені явно', () => {
		const leaked = all
			.filter((row) => BINARY_EXTENSIONS.some((extension) => row.path.endsWith(extension)))
			.filter((row) => !isBinary(row))
			.map((row) => row.path);
		expect(
			leaked,
			'ці файли двійкові, але Git вважає їх текстом — евристика `text=auto` може ' +
				`«нормалізувати» вміст:\n${leaked.join('\n')}`
		).toEqual([]);
	});
});
