import { logService } from "./logService.svelte";
import { storageService } from "./storage";
import { base } from "$app/paths";

/**
 * Сервіс для технічного обслуговування додатку.
 * Дозволяє повністю очистити всі локальні дані проекту.
 */
export const maintenanceService = {
    /**
     * Виконує повне очищення даних ТІЛЬКИ цього проекту та перезавантажує сторінку.
     */
    async hardReset(): Promise<void> {
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
                    // Префікс проекту для кешу (визначений в STORAGE-NAMESPACE-v5.md)
                    const CACHE_PREFIX = 'mindstep_'; 
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

            // 4. Перезавантаження
            logService.info('[Maintenance] Reset complete. Reloading...');
            window.location.reload();
        }
    }
};
