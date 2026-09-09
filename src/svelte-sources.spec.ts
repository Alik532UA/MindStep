// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * КЛАСИ, ЯКИХ КОМПІЛЯТОР НЕ БАЧИТЬ (SVELTE-CORE-v9, `GATE-SVELTE-SOURCES`).
 *
 * Три правила v9 в одному файлі — бо всі три ловляться однаково: читанням
 * джерел, і жодне з них не видно ні `svelte-check`, ні компілятору.
 *
 * ## 1. `$state`-проксі через межу серіалізації (`SC-SNAPSHOT-BOUNDARY`, HIGH)
 *
 * `structuredClone` КИДАЄ на проксі рун, а `postMessage` дає `DataCloneError`.
 * Гірший випадок — коли не кидає: SDK отримує об'єкт, що змінюється під ним,
 * і дефект виглядає як «база інколи бачить не те, що на екрані».
 *
 * Заміряно 2026-09-10: порушень **нуль**. `aiService` уже проганяє дані через
 * `JSON.parse(JSON.stringify(…))` перед `postMessage`, `betaProgress` кличе
 * `$state.snapshot`. Ратчет на нулі коштує нічого, а перша ж спроба передати
 * проксі стає видимою в прогоні.
 *
 * ## 2. Підписка, яку ніхто не кличе (`SC-SUBSCRIPTION-WIRED`, HIGH)
 *
 * У цьому проєкті клас уже коштував двох дефектів: `authService.init()` не мав
 * жодного виклику (разом із ним не працювало злиття рекорду з хмарним), а
 * `roomService.subscribeToPublicRooms()` лежав готовим, поки лобі читало
 * перелік одноразово — скарга звучала як «список оновлюється тільки кнопкою».
 *
 * `src/live-subscriptions.spec.ts` тримав це для ОДНОГО файлу
 * (`roomService.ts`), названого рядком. Тут — для кожного сервісу: новий
 * сервіс із мертвою підпискою більше не невидимий.
 *
 * ## 3. Обробник без пари (`SC-LISTENER-CLEANUP`, MEDIUM)
 *
 * Знайдений цією перевіркою дефект: `appInitializationService` реєстрував
 * `visibilitychange` АНОНІМНОЮ функцією, тобто зняти її було неможливо в
 * принципі, а `cleanup()` знімав лише інтервал версії. Другий — `setInterval`
 * у `ReloadPrompt.svelte` без `clearInterval`.
 *
 * Модулі, де обробник живе весь час життя сторінки, названі в
 * `LIFETIME_LISTENERS` поіменно: вимагати від них знімання означало б писати
 * код, який не викликається ніколи.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано на всіх трьох
 */

const ROOT = 'src';

const norm = (path: string): string => path.split('\\').join('/');

function walk(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(norm(full));
	}
	return out;
}

/**
 * Коментарі відрізаються ВСЮДИ, і це не косметика: перший прогін цієї перевірки
 * оголосив витоком `ReplayViewer.svelte`, де `setInterval` згадується двічі —
 * обидва рази в докблоці про те, ЧОМУ його звідти прибрали.
 */
const withoutComments = (source: string): string =>
	source
		.replace(/<!--[\s\S]*?-->/g, '')
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/^\s*\/\/.*$/gm, '');

const sources = walk(ROOT)
	.filter((file) => /\.(ts|svelte)$/.test(file) && !/\.(spec|test)\.ts$/.test(file))
	.map((file) => ({ file, code: withoutComments(readFileSync(file, 'utf8')) }));

describe('перевірка жива', () => {
	it('джерела знайдено', () => {
		expect(sources.length, 'сканер шукає не там').toBeGreaterThan(100);
	});

	it('коментарі справді відрізані', () => {
		// Канарка на сам фільтр: без неї «нуль знахідок» означав би або чистий
		// код, або з'їдений вхід, і відрізнити було б неможливо.
		const replay = sources.find((s) => s.file.endsWith('ReplayViewer.svelte'));
		expect(replay, 'ReplayViewer.svelte зник — канарка фільтра втратила предмет').toBeDefined();
		expect(
			replay!.code.includes('setInterval'),
			'у ReplayViewer.svelte згадки setInterval лишилися лише в коментарях — ' +
				'якщо фільтр їх не зрізав, перевірка нижче дасть хибне спрацювання'
		).toBe(false);
	});
});

describe('$state не перетинає межу серіалізації (SC-SNAPSHOT-BOUNDARY)', () => {
	it('structuredClone не викликається над станом без $state.snapshot', () => {
		const offenders = sources
			.filter(({ code }) => /structuredClone\s*\(/.test(code))
			.filter(({ code }) => !/structuredClone\s*\(\s*\$state\.snapshot\s*\(/.test(code))
			.map(({ file }) => file);
		expect(
			offenders,
			`structuredClone КИДАЄ на проксі руни — потрібен $state.snapshot:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	/**
	 * Правило про СТОРОНУ СТОРІНКИ, а не про воркер.
	 *
	 * Усередині воркера немає рантайму Svelte, тобто немає й проксі, які могли
	 * б протекти: `self.postMessage(randomMove)` у `ai.worker.ts` — це відповідь
	 * воркера, порахована з простих даних. Перший прогін цієї перевірки
	 * оголосив його порушенням, і це був би саме той випадок, коли гейт
	 * вимагає зіпсувати робочий код.
	 *
	 * Ознака воркера читається з файлу, а не з шляху: `self.onmessage` або
	 * `self.postMessage`. Тоді перенесений каталог не робить перевірку сліпою.
	 */
	const isWorker = ({ code }: { code: string }): boolean =>
		/\bself\.(?:onmessage|postMessage|addEventListener)\s*[=(]/.test(code);

	it('перевірка жива: воркер розпізнається за джерелом', () => {
		const workers = sources.filter(isWorker).map(({ file }) => file);
		expect(
			workers,
			'ознака воркера перестала спрацьовувати — або воркер зник, або регулярка застаріла'
		).toContain('src/lib/workers/ai.worker.ts');
	});

	it('postMessage зі сторінки не надсилає стан без знімка або копії', () => {
		const offenders = sources
			.filter((source) => !isWorker(source))
			.filter(({ code }) => /\.postMessage\s*\(/.test(code))
			.filter(
				({ code }) =>
					!/\.postMessage\s*\(\s*(?:\$state\.snapshot\s*\(|JSON\.parse\s*\(\s*JSON\.stringify)/.test(
						code
					)
			)
			.map(({ file }) => file);
		expect(
			offenders,
			'postMessage дає DataCloneError на проксі руни; передавати $state.snapshot(…) ' +
				`або звичайну копію:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('getContext викликається лише через аксесор', () => {
		// У проєкті `getContext` не використовується зовсім; правило тримається
		// на нулі, щоб перше ж використання поза аксесором стало видимим.
		const offenders = sources
			.filter(({ code }) => /getContext\s*</.test(code) || /getContext\s*\(/.test(code))
			.filter(({ code }) => !/(?:function|get)\s+\w*[Cc]ontext\w*\s*\(/.test(code))
			.map(({ file }) => file);
		expect(
			offenders,
			`getContext поза аксесором прив'язує компонент до дерева, у якому його немає:\n${offenders.join('\n')}`
		).toEqual([]);
	});
});

describe('кожна підписка сервісу комусь потрібна (SC-SUBSCRIPTION-WIRED)', () => {
	const services = sources.filter(
		({ file }) => /^src\/lib\/services\//.test(file) && file.endsWith('.ts')
	);

	/**
	 * Методи-підписки: `subscribe*`, `init`, `start*Listener`. Відступ 1–8
	 * пробілів або табуляція — тіло об'єкта чи класу, а не вкладене замикання.
	 */
	const DECL = /^[\t ]{1,8}(?:public\s+|async\s+)*(subscribe[A-Za-z0-9]*|init|start[A-Za-z0-9]*Listener)\s*[(:]/gm;

	const declarations = services.flatMap(({ file, code }) =>
		[...new Set([...code.matchAll(DECL)].map((match) => match[1]))].map((name) => ({ file, name }))
	);

	it('перевірка жива: підписки в сервісах знайдено', () => {
		expect(
			declarations.length,
			'жодного subscribe*/init у сервісах — регулярка застаріла, і перевірка мертва'
		).toBeGreaterThan(5);
	});

	/**
	 * КЛИЧЕ — ЦЕ ЕКРАН АБО КОНТРОЛЕР, а не сусідній сервіс.
	 *
	 * Перша редакція цієї перевірки (`live-subscriptions.spec.ts`, який цей
	 * файл заміняє) лишалася зеленою після того, як лобі повернули до
	 * одноразового читання: назву методу згадував його ж
	 * `roomService.spec.ts`, і цього виявилося достатньо. Той самий клас
	 * усередині шару: `roomService.subscribeToChat` делегує в
	 * `services/room/roomFirestoreService.subscribeToChat` — та сама назва,
	 * тож виклик сервіс→сервіс тримав би перевірку зеленою при жодному екрані.
	 *
	 * Тому шукається виклик ПОЗА `src/lib/services/`. І саме виклик, а не
	 * назва: коментарі поруч називають ці методи, і перевірка на просту назву
	 * лишалася б зеленою, якби код прибрали, а пояснення — ні.
	 */
	const consumers = sources.filter(({ file }) => !/^src\/lib\/services\//.test(file));

	it('перевірка жива: споживачів поза шаром сервісів знайдено', () => {
		expect(
			consumers.length,
			'поза src/lib/services/ немає джерел — перевірка нижче була б порожньою'
		).toBeGreaterThan(50);
	});

	it('кожну кличе екран або контролер, а не сусідній сервіс', () => {
		const dead = declarations
			.filter(({ name }) =>
				consumers.every((source) => !new RegExp(`\\b${name}\\s*\\(`).test(source.code))
			)
			.map(({ file, name }) => `${file}: ${name}()`);
		expect(
			dead,
			'написана й непідключена підписка виглядає як відсутня функція: метод є, ' +
				`дописаний і прокомментований, але жоден екран його не кличе:\n${dead.join('\n')}`
		).toEqual([]);
	});
});

describe('обробник має пару в тому самому модулі (SC-LISTENER-CLEANUP)', () => {
	/**
	 * Модулі, де обробник живе весь час життя сторінки. Кожен — із причиною:
	 * вимагати від них знімання означало б писати код, який не викликається.
	 */
	const LIFETIME_LISTENERS: Record<string, string> = {
		'src/lib/services/hotkeyService.ts':
			'`setup()` викликається на рівні модуля (один раз на завантаження сторінки), ' +
			'обробник названий і глобальний — гарячі клавіші живуть стільки, скільки вкладка',
		'src/lib/stores/appSettingsState.svelte.ts':
			'`matchMedia` слухається в конструкторі синглтона всередині `$effect.root` — ' +
			'системна тема стежиться весь час життя сторінки',
		'src/lib/components/local-setup/ColorPicker.svelte':
			'обробник стоїть на `<input type="color">`, створеному тут же й не вставленому в ' +
			'документ: він збирається разом з елементом, і `removeEventListener` не має чого знімати'
	};

	const LISTENER = /\.addEventListener\s*\(/;
	const REMOVER = /\.removeEventListener\s*\(/;
	const INTERVAL = /\bsetInterval\s*\(/;
	const CLEAR = /\bclearInterval\s*\(/;
	const OBSERVE = /\.observe\s*\(/;
	const UNOBSERVE = /\.(?:unobserve|disconnect)\s*\(/;

	it('перевірка жива: модулі з обробниками знайдено', () => {
		const withListeners = sources.filter(
			({ code }) => LISTENER.test(code) || INTERVAL.test(code) || OBSERVE.test(code)
		);
		expect(
			withListeners.length,
			'жодного addEventListener/setInterval/observe — перевірка дивиться не туди'
		).toBeGreaterThan(3);
	});

	it('addEventListener має парне removeEventListener', () => {
		const offenders = sources
			.filter(({ file }) => !(file in LIFETIME_LISTENERS))
			.filter(({ code }) => LISTENER.test(code) && !REMOVER.test(code))
			.map(({ file }) => file);
		expect(
			offenders,
			'обробник без знімання переживає компонент на SPA-навігації; якщо він живе ' +
				`весь час сторінки — рядок у LIFETIME_LISTENERS із причиною:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('setInterval має парне clearInterval', () => {
		const offenders = sources
			.filter(({ file }) => !(file in LIFETIME_LISTENERS))
			.filter(({ code }) => INTERVAL.test(code) && !CLEAR.test(code))
			.map(({ file }) => file);
		expect(
			offenders,
			`інтервал без знімання продовжує ходити по мережі після знищення:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('observe() має парне disconnect()/unobserve()', () => {
		const offenders = sources
			.filter(({ file }) => !(file in LIFETIME_LISTENERS))
			.filter(({ code }) => OBSERVE.test(code) && !UNOBSERVE.test(code))
			.map(({ file }) => file);
		expect(
			offenders,
			`спостерігач без disconnect() тримає посилання на знищений вузол:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('у переліку довговічних немає файлів, які вже мають пару або зникли', () => {
		const stale = Object.keys(LIFETIME_LISTENERS).filter((file) => {
			const entry = sources.find((source) => source.file === file);
			if (!entry) return true;
			const hasCall = LISTENER.test(entry.code) || INTERVAL.test(entry.code) || OBSERVE.test(entry.code);
			const hasPair =
				(LISTENER.test(entry.code) ? REMOVER.test(entry.code) : true) &&
				(INTERVAL.test(entry.code) ? CLEAR.test(entry.code) : true) &&
				(OBSERVE.test(entry.code) ? UNOBSERVE.test(entry.code) : true);
			return !hasCall || hasPair;
		});
		expect(
			stale,
			`ці рядки LIFETIME_LISTENERS застаріли — вилучити:\n${stale.join('\n')}`
		).toEqual([]);
	});
});
