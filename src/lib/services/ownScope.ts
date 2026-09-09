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
 * Інваріант, що тримає це правило, — `src/own-scope.spec.ts`: жоден інший
 * модуль не кличе `getRegistrations()` чи `caches.keys()` без цих фільтрів.
 */

/**
 * Абсолютний префікс scope цього застосунку: `https://host/MindStep/`.
 *
 * Порівнювати доводиться АДРЕСАМИ, а не рядками: `registration.scope` завжди
 * абсолютний, а `base` — шлях (`/MindStep`), тож пряме `startsWith(base)` не
 * збіглося б ніколи.
 */
export function ownScopePrefix(): string {
	return new URL(`${base || ''}/`, window.location.origin).href;
}

/** Реєстрації service worker, що належать саме цьому застосунку. */
export function ownRegistrations<T extends { scope: string }>(registrations: readonly T[]): T[] {
	const prefix = ownScopePrefix();
	return registrations.filter((registration) => registration.scope.startsWith(prefix));
}

/**
 * Імена кешів цього застосунку.
 *
 * Той самий префікс, що й у сховища: єдине джерело, а не другий літерал.
 */
export function ownCacheNames(names: readonly string[]): string[] {
	return names.filter((name) => name.startsWith(STORAGE_PREFIX));
}
