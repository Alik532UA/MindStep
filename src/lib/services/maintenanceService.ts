import { logService } from "./logService.svelte";
import { storageService } from "./storage";
import { base } from "$app/paths";
import { STORAGE_PREFIX } from '$lib/config/storage';

/**
 * Текст підтвердження свідомо НЕ через i18n.
 *
 * `confirm()` — блокуючий діалог браузера, і він може знадобитися саме тоді, коли
 * зламалося завантаження словників: тоді переклад віддав би ключ, тобто людина
 * побачила б «reset.confirm» перед знищенням прогресу.
 */
const CONFIRM_TEXT =
    'Це видалить усі локальні дані MindStep: прогрес, налаштування, нагороди. Продовжити?';

/**
 * Сервіс для технічного обслуговування додатку.
 * Дозволяє повністю очистити всі локальні дані проекту.
 */
export const maintenanceService = {
    /**
     * Виконує повне очищення даних ТІЛЬКИ цього проекту та перезавантажує сторінку.
     *
     * @param askConfirmation питати підтвердження. У проді обов'язково: доти жест
     * стирав прогрес без жодного запитання.
     */
    async hardReset(askConfirmation = false): Promise<void> {
        if (askConfirmation && typeof window !== 'undefined' && !window.confirm(CONFIRM_TEXT)) {
            logService.info('[Maintenance] Hard reset cancelled by user.');
            return;
        }

        logService.info('[Maintenance] Hard reset initiated. Clearing project-specific data...');

        // 1. Очищення сховищ (Лише префіксовані дані MindStep)
        if (typeof window !== 'undefined') {
            storageService.clear();
            // Якщо використовуємо sessionStorage в майбутньому, тут теж треба очищувати через сервіс

            // 2. Очищення куків (Лише для шляху цього проекту)
            const cookies = document.cookie.split(";");
            const projectPath = base || "/";
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${projectPath}`;
            }

            // 3. Очищення кешу Service Worker / Cache API (Лише MindStep кеші)
            if ('caches' in window) {
                try {
                    const cacheNames = await caches.keys();
                    // Той самий префікс, що й у сховища — з єдиного джерела.
                    const CACHE_PREFIX = STORAGE_PREFIX;
                    await Promise.all(
                        cacheNames
                            .filter(name => name.startsWith(CACHE_PREFIX))
                            .map(name => caches.delete(name))
                    );
                    logService.info('[Maintenance] Project-specific caches cleared.');
                } catch (e) {
                    logService.error('[Maintenance] Failed to clear caches', e);
                }
            }

            /*
             * 4. Знімання реєстрації service worker — ЛИШЕ СВОЄЇ, за `scope`.
             *
             * Доти цього кроку не було зовсім, і скидання лишалося неповним:
             * кеші стерті, а сторінка приїжджає з того самого service worker і
             * виглядає незміненою.
             *
             * Фільтр за `scope` обов'язковий: `getRegistrations()` віддає
             * реєстрації ВСЬОГО origin, тобто разом із сусідніми проєктами на
             * `alik532ua.github.io`. Сусідній `Slovko` саме тут і помиляється —
             * він знімає кожну реєстрацію без фільтра, тобто одне натискання `r`
             * там вбиває service worker MindStep і решти проєктів.
             *
             * Порівняння як АДРЕСИ, а не рядка: `scope` завжди абсолютний
             * (`https://host/MindStep/`), а `base` — шлях (`/MindStep`), тож
             * пряме `startsWith(base)` не збіглося б ніколи.
             */
            if ('serviceWorker' in navigator) {
                try {
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    const scopePrefix = new URL(`${base || ''}/`, window.location.origin).href;
                    await Promise.all(
                        registrations
                            .filter((registration) => registration.scope.startsWith(scopePrefix))
                            .map((registration) => registration.unregister())
                    );
                    logService.info('[Maintenance] Own service worker registrations removed.');
                } catch (e) {
                    logService.error('[Maintenance] Failed to unregister service worker', e);
                }
            }

            // 5. Перезавантаження
            logService.info('[Maintenance] Reset complete. Reloading...');
            window.location.reload();
        }
    }
};
