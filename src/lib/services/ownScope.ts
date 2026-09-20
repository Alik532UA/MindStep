import { base } from '$app/paths';
import { STORAGE_PREFIX } from '$lib/config/storage';

/**
 * Межа «своє / чуже» на СПІЛЬНОМУ origin (STORAGE-NAMESPACE § 1, DEBUGGING § DBG-HARD-RESET).
 *
 * Проєкт живе на `alik532ua.github.io` разом із рештою проєктів акаунта. Три
 * браузерні API не знають нічого про підшлях і віддають дані ВСЬОГО origin:
 *
 *  * `localStorage` — звідси `STORAGE_PREFIX` і `storageService.clear()`;
 *  * `caches.keys()` — імена кешів усіх сусідів;
 *  * `navigator.serviceWorker.getRegistrations()` — реєстрації всіх сусідів.
 *
 * Перші два місця проєкт уже фільтрував, третє — лише в одному з двох. Тому
 * фільтри живуть тут, а не копіями в кожному сервісі: копія розходиться саме
 * тоді, коли додається третій виклик (`maintenanceService` фільтрував, а
 * `appInitializationService.performHardReload()` стирав усе поспіль — тобто
 * критичне оновлення MindStep знімало service worker і кеші сусідніх сайтів).
 *
 * Інваріант, що тримає це правило, — `src/own-scope.spec.ts`, і він перевіряє
 * ДВІ різні речі, бо дефекти тут бувають двох протилежних родів:
 *
 *  * фільтра немає — ловить сканер джерел: `getRegistrations()` поза цим
 *    модулем заборонений цілком, `caches.keys()` — лише через `ownCacheNames`;
 *  * фільтр є й не збігається ні з чим — ловлять звичайні тести правила на
 *    іменах, які справді трапляються. Саме цим і був другий дефект:
 *    `ownCacheNames` шукав `STORAGE_PREFIX`, а кеші тут називає воркер, і
 *    власного префікса в їхніх іменах немає взагалі (докладно нижче).
 */

/**
 * Абсолютний префікс scope цього застосунку: `https://host/MindStep/`.
 *
 * Порівнювати доводиться АДРЕСАМИ, а не рядками: `registration.scope` завжди
 * абсолютний, а `base` — шлях (`/MindStep`), тож пряме `startsWith(base)` не
 * збіглося б ніколи.
 */
function ownScopePrefix(): string {
	return new URL(`${base || ''}/`, window.location.origin).href;
}

/** Реєстрації service worker, що належать саме цьому застосунку. */
function ownRegistrations<T extends { scope: string }>(registrations: readonly T[]): T[] {
	const prefix = ownScopePrefix();
	return registrations.filter((registration) => registration.scope.startsWith(prefix));
}

/**
 * Зняти реєстрації ЦЬОГО застосунку. Повертає, скільки їх було.
 *
 * Готова дія, а не лише фільтр, — бо однаковий цикл «взяти всі, відфільтрувати,
 * зняти» стояв копіями у двох місцях (`maintenanceService.hardReset` і
 * `appInitializationService.performHardReload`), і рівно в цих копіях фільтр і
 * розійшовся: у другої його не було зовсім. Поки цикл пишеться на місці
 * виклику, наступна копія знову буде без фільтра.
 */
export async function unregisterOwnServiceWorkers(): Promise<number> {
	const own = await ownServiceWorkerRegistrations();
	await Promise.all(own.map((registration) => registration.unregister()));
	return own.length;
}

/**
 * Реєстрації цього застосунку, вже відфільтровані. Порожньо там, де воркерів
 * немає взагалі.
 *
 * Потрібна окремо від `unregisterOwnServiceWorkers()`, бо є випадок, коли серед
 * СВОЇХ реєстрацій треба вибрати ще: `+layout.svelte` знімає лише застарілий
 * `sw.js`, що лишився після переїзду на `service-worker.js`.
 *
 * Саме заради цього випадку й існує ця функція, а не послаблене правило в
 * гейті. Дозвіл «можна кликати `getRegistrations()`, якщо поруч є фільтр»
 * дивиться на файл цілком — тобто пропускає файл, у якому два виклики, а
 * фільтр лише в одного. Тут натомість виклику немає ніде, крім цього модуля,
 * і перевірити це можна однією умовою без винятків.
 */
export async function ownServiceWorkerRegistrations(): Promise<ServiceWorkerRegistration[]> {
	if (!('serviceWorker' in navigator)) return [];
	return ownRegistrations(await navigator.serviceWorker.getRegistrations());
}

/**
 * Імена кешів цього застосунку — за ДВОМА ознаками, і друга тут єдина робоча.
 *
 * Доти фільтр стояв лише за `STORAGE_PREFIX`, і докблок пояснював це як «єдине
 * джерело, а не другий літерал». Джерело справді єдине; збігів — жодного.
 *
 * Застосунок НЕ називає кешів сам: `caches.open()` тут не викликається ніде,
 * усе передкешування робить воркер, згенерований плагіном. А він зве кеш
 * `workbox-precache-v2-<scope>`, де `<scope>` це `registration.scope`, тобто
 * `https://host/MindStep/`. Власного префікса в такому імені НЕМАЄ ЖОДНОГО —
 * отже `names.filter(startsWith('mindstep_'))` віддавав порожній список, і крок
 * «очистити кеші» в аварійному скиданні не робив НІЧОГО. Зняття реєстрації
 * кешів не видаляє, тож офлайн-копія переживала скидання цілком — тобто сама
 * причина, заради якої скидання й натискають.
 *
 * Помітити це читанням коду було майже неможливо: обидва цикли виглядають
 * однаково, обидва зелені, а різниця лише в тому, чи збігається рядок із
 * реальним іменем. Тому ознака тепер друга — наш `scope` усередині імені.
 * Сусідський `…-https://host/Slovko/` її не має, і саме кінцевий слеш робить
 * перевірку точною: гіпотетичний `/MindStep2/` під `/MindStep/` не підпадає.
 *
 * Перша ознака лишається для кешів, які застосунок колись назве сам, і для
 * залишків старих збірок.
 */
export function ownCacheNames(names: readonly string[]): string[] {
	const scope = ownScopePrefix();
	return names.filter((name) => isOwnCacheName(name, scope));
}

/**
 * Саме правило, з `scope` параметром, — щоб його можна було ПЕРЕВІРИТИ.
 *
 * `ownCacheNames` бере `scope` із `window.location`, тобто поза браузером не
 * виконується взагалі. Доки правило жило всередині неї, єдиним способом
 * перевірити його лишалося читання коду — а читанням коду ця помилка й не
 * ловиться: неправильний фільтр виглядає точно так само, як правильний.
 */
export function isOwnCacheName(name: string, scope: string): boolean {
	return name.startsWith(STORAGE_PREFIX) || name.includes(scope);
}
