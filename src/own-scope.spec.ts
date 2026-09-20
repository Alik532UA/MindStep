// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { isOwnCacheName } from '$lib/services/ownScope';

/**
 * НА СПІЛЬНОМУ ORIGIN «СТЕРТИ ВСЕ» ОЗНАЧАЄ «СТЕРТИ ЧУЖЕ»
 * (STORAGE-NAMESPACE § 1, DEBUGGING § `DBG-HARD-RESET`, CRITICAL).
 *
 * ## Що саме тут було зламане
 *
 * `maintenanceService.hardReset()` (жест `r`) фільтрував і кеші, і реєстрації
 * service worker — з докблоком, який навіть називав сусіда, що робить це
 * неправильно. А другий шлях аварійного скидання,
 * `appInitializationService.performHardReload()` (критичне оновлення за
 * `minVersion`), ходив по всьому origin:
 *
 * ```ts
 * for (const registration of await navigator.serviceWorker.getRegistrations())
 *     await registration.unregister();
 * for (const key of await caches.keys()) await caches.delete(key);
 * ```
 *
 * Обидва API не знають нічого про підшлях: на `alik532ua.github.io` вони
 * віддають реєстрації й кеші ВСІХ проєктів акаунта. Тобто одне критичне
 * оновлення MindStep знімало service worker і витирало офлайн-кеш кожного
 * сусіднього сайту — і шукати причину довелося б у чужому репозиторії.
 *
 * Третє місце того самого класу — прибирання старого `sw.js` у
 * `+layout.svelte`: воно фільтрувало за `scriptURL.endsWith('/sw.js')`, а цим
 * умовам відповідає й сусідський `…/Slovko/sw.js`.
 *
 * ## Чому перевірка по джерелах — і чому ЇЇ ОДНІЄЇ виявилося мало
 *
 * Той дефект був у ВІДСУТНОСТІ фільтра, а не в його логіці. Тест поведінки
 * довелося б писати на кожен виклик окремо, і четвертий виклик, доданий
 * завтра, він не побачив би. Сканер джерел ловить саме це: виклик є, фільтра
 * немає.
 *
 * А потім знайшовся дефект протилежного роду, якого сканер не бачить у
 * принципі: фільтр СТОЯВ, викликався звідусіль, був зелений — і не збігався ні
 * з чим. `ownCacheNames` шукав `mindstep_`, а всі кеші цього застосунку
 * називає воркер, і зве він їх `workbox-precache-v2-<scope>`, без власного
 * префікса взагалі. Тобто крок «очистити кеші» в аварійному скиданні не робив
 * НІЧОГО, а зняття реєстрації кешів не видаляє — офлайн-копія переживала
 * скидання цілком.
 *
 * Читанням коду це не ловиться: неправильний фільтр виглядає точно так само,
 * як правильний. Тому нижче тепер два роди перевірок — сканер джерел («виклик
 * у дозволеному місці») і звичайні тести правила на іменах, які справді
 * трапляються. Саме заради других `isOwnCacheName` винесений окремою чистою
 * функцією: `ownCacheNames` бере `scope` із `window.location` і поза браузером
 * не виконується.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Повернути `for (const registration of registrations)` в
 * `appInitializationService.ts` → «getRegistrations() поза модулем межі»
 * червоніє й називає файл. Те саме з `caches.keys()`. Прибрати другу ознаку з
 * `isOwnCacheName` → падають чотири перевірки на справжніх іменах.
 */

const ROOT = 'src';

/** Єдиний модуль, якому дозволено знати, як виглядає межа «своє». */
const FILTER_MODULE = 'src/lib/services/ownScope.ts';

function sources(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) sources(full, out);
		else if (/\.(ts|svelte)$/.test(entry) && !/\.(spec|test)\.ts$/.test(entry)) out.push(full);
	}
	return out;
}

/**
 * Код без коментарів — інакше перевірка читає не те, що виконується.
 *
 * Обидва боки цієї вади справжні, і другий гірший:
 *
 *  * хибно ЧЕРВОНИЙ — файл із правильним кодом падає, бо заборонений виклик
 *    згаданий у поясненні, ЧОМУ його тут не можна. Саме так упав цей гейт,
 *    коли його ставили в сусідній `Slovko`;
 *  * хибно ЗЕЛЕНИЙ — файл із порушенням проходить, бо десь поруч у коментарі
 *    згадана назва фільтра. Правила нижче шукають `ownRegistrations(` по
 *    ВСЬОМУ файлу, і докблок із цією назвою вимикав перевірку для файлу
 *    цілком. У цьому проєкті так і було: `appInitializationService.ts`
 *    називає фільтр у докблоці, тож повернення циклу без фільтра пройшло б
 *    непоміченим (AI-AGENT-PITFALLS § 1.3).
 *
 * Знімаються блокові коментарі цілком і рядки, які ПОЧИНАЮТЬСЯ з `//`.
 * Кінцеві `// …` лишаються навмисно: наївне різання по `//` розсікало б
 * `https://` всередині рядків, тобто ховало б від перевірки справжній код.
 */
function withoutComments(code: string): string {
	return code
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.split('\n')
		.filter((line) => !line.trimStart().startsWith('//'))
		.join('\n');
}

const files = sources(ROOT).map((path) => ({
	path,
	code: withoutComments(readFileSync(path, 'utf8'))
}));

describe('перевірка жива', () => {
	it('джерела знайдено', () => {
		expect(files.length, 'сканер не знайшов джерел — порівнювати нема з чим').toBeGreaterThan(50);
	});

	/**
	 * Перелік — це ПУБЛІЧНА поверхня модуля, і вона навмисно вузька.
	 *
	 * `ownScopePrefix` і `ownRegistrations` звідси прибрані з експорту: назовні
	 * потрібні не примітиви, а готові дії. Поки примітив видно, його кличуть на
	 * місці — і саме так тут і з'явилися копії циклу, у яких фільтр загубився.
	 */
	it('модуль межі експортує саме готові дії', () => {
		const filter = files.find((f) => f.path === FILTER_MODULE);
		expect(filter, `${FILTER_MODULE} зник — усі перевірки нижче стали б порожніми`).toBeDefined();
		expect(filter?.code).toMatch(/export async function unregisterOwnServiceWorkers/);
		expect(filter?.code).toMatch(/export async function ownServiceWorkerRegistrations/);
		expect(filter?.code).toMatch(/export function ownCacheNames/);
		expect(filter?.code).toMatch(/export function isOwnCacheName/);
		expect(
			filter?.code,
			'ownRegistrations знову експортований — тоді його кликатимуть на місці, ' +
				'і фільтр загубиться в наступній копії'
		).not.toMatch(/export function ownRegistrations/);
	});

	it('виклики, які перевіряються, у проєкті справді є', () => {
		const callers = files.filter((f) => /getRegistrations\(\)|caches\.keys\(\)/.test(f.code));
		expect(
			callers.length,
			'жодного виклику getRegistrations()/caches.keys() — перевірка дивиться не туди'
		).toBeGreaterThan(1);
	});
});

describe('аварійне скидання стирає лише своє (DBG-HARD-RESET)', () => {
	/**
	 * Вимога сильніша за «є фільтр поруч»: виклику тут немає ВЗАГАЛІ.
	 *
	 * Слабша форма дивиться на файл цілком, тож проходить і той, у якому два
	 * виклики, а фільтр лише в одного. Відколи зняття реєстрацій робить
	 * `unregisterOwnServiceWorkers()`, писати цей виклик на місці немає жодної
	 * причини — отже й дозволу немає.
	 */
	it('getRegistrations() не викликається поза модулем межі', () => {
		const offenders = files
			.filter((f) => f.path !== FILTER_MODULE)
			.filter((f) => /getRegistrations\(\)/.test(f.code))
			.map((f) => f.path);
		expect(
			offenders,
			'getRegistrations() віддає реєстрації ВСЬОГО origin. Знімати свої треба ' +
				`через unregisterOwnServiceWorkers() з ${FILTER_MODULE}:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('зняття реєстрацій справді проходить через модуль межі', () => {
		const filter = files.find((f) => f.path === FILTER_MODULE);
		expect(filter?.code).toMatch(/export async function unregisterOwnServiceWorkers/);

		const callers = files.filter((f) => /unregisterOwnServiceWorkers\s*\(/.test(f.code));
		expect(
			callers.length,
			'ніхто не кличе unregisterOwnServiceWorkers() — або прибирання зникло, ' +
				'або його знову написали на місці в обхід межі'
		).toBeGreaterThan(1);
	});

	/**
	 * Фільтр кешів мусить збігатися з РЕАЛЬНИМИ іменами, а не лише існувати.
	 *
	 * Це те, чого не бачив жоден із сусідніх тестів: `ownCacheNames` стояв на
	 * місці, викликався звідусіль, був зелений — і віддавав порожній список,
	 * бо шукав `mindstep_`, а воркер зве кеш `workbox-precache-v2-<scope>`.
	 * Тобто крок «очистити кеші» в аварійному скиданні не робив нічого, а
	 * зняття реєстрації кешів не видаляє — офлайн-копія переживала скидання.
	 */
	it('застосунок і далі не називає кешів сам', () => {
		const namers = files.filter((f) => /caches\.open\(/.test(f.code)).map((f) => f.path);
		expect(
			namers,
			'зʼявився caches.open() — отже кеш із власним імʼям існує, і правило в ' +
				`isOwnCacheName() треба звірити з ним, а не лише з іменами воркера:\n${namers.join('\n')}`
		).toEqual([]);
	});

	it('caches.keys() ніде не обходиться без ownCacheNames()', () => {
		const offenders = files
			.filter((f) => f.path !== FILTER_MODULE)
			.filter((f) => /caches\.keys\(\)/.test(f.code))
			.filter((f) => !/ownCacheNames\s*\(/.test(f.code))
			.map((f) => f.path);
		expect(
			offenders,
			'caches.keys() віддає імена кешів ВСЬОГО origin — без фільтра за префіксом ' +
				`тут витирається офлайн-кеш сусіднього проєкту:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('localStorage.clear() і sessionStorage.clear() не викликаються в застосунку', () => {
		const offenders = files
			.filter((f) => /(?:local|session)Storage\.clear\s*\(/.test(f.code))
			.map((f) => f.path);
		expect(
			offenders,
			'clear() на спільному origin витирає дані сусіднього застосунку; ' +
				`своє знімає storageService.clear() за префіксом:\n${offenders.join('\n')}`
		).toEqual([]);
	});

	it('префікс кешів не дублюється літералом — він той самий, що у сховища', () => {
		const filter = files.find((f) => f.path === FILTER_MODULE)!;
		expect(
			filter.code,
			'ownCacheNames мусить брати префікс із config/storage, а не мати власний рядок'
		).toMatch(/STORAGE_PREFIX/);
	});
});

/**
 * ПРАВИЛО «СВІЙ КЕШ» — на справжніх іменах, а не на вигляді коду.
 *
 * Саме цього тут і бракувало. `ownCacheNames` існував, викликався з обох місць
 * скидання, був зелений — і віддавав ПОРОЖНІЙ список: він шукав `mindstep_`, а
 * всі кеші цього застосунку називає воркер, і зве він їх
 * `workbox-precache-v2-<scope>`. Власного префікса в такому імені немає
 * жодного. Тобто крок «очистити кеші» не робив НІЧОГО, а зняття реєстрації
 * кешів не видаляє — офлайн-копія переживала аварійне скидання цілком, тобто
 * саме та причина, заради якої скидання й натискають.
 *
 * Читанням коду це не ловиться: неправильний фільтр виглядає точно так само,
 * як правильний. Ловиться лише звіркою з іменами, які справді трапляються.
 */
describe('isOwnCacheName — на іменах, які справді трапляються', () => {
	const SCOPE = 'https://alik532ua.github.io/MindStep/';

	it('бере передкеш воркера — те, чого фільтр за префіксом не бачив', () => {
		expect(isOwnCacheName(`workbox-precache-v2-${SCOPE}`, SCOPE)).toBe(true);
		expect(isOwnCacheName(`workbox-runtime-${SCOPE}`, SCOPE)).toBe(true);
	});

	it('бере кеш із власним префіксом, якщо такий колись зʼявиться', () => {
		expect(isOwnCacheName('mindstep_assets-v3', SCOPE)).toBe(true);
	});

	it('не чіпає кеші сусідів на спільному origin', () => {
		expect(
			isOwnCacheName('workbox-precache-v2-https://alik532ua.github.io/Slovko/', SCOPE)
		).toBe(false);
		expect(isOwnCacheName('slovko-cache-0.7.698', SCOPE)).toBe(false);
		expect(isOwnCacheName('workbox-precache-v2-https://alik532ua.github.io/', SCOPE)).toBe(
			false
		);
	});

	/**
	 * Кінцевий слеш у `scope` — не косметика: без нього `/MindStep2/` підпадав
	 * би під `/MindStep`, тобто фільтр забирав би кеш сусіда з довшою назвою.
	 */
	it('сусід із довшою назвою не підпадає', () => {
		expect(
			isOwnCacheName('workbox-precache-v2-https://alik532ua.github.io/MindStep2/', SCOPE)
		).toBe(false);
	});
});
