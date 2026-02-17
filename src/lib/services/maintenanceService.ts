import { logService } from './logService';

/**
 * Сервіс для технічного обслуговування додатку.
 * Дозволяє повністю очистити всі локальні дані.
 */
export const maintenanceService = {
    /**
     * Виконує повне очищення даних та перезавантажує сторінку.
     */
    async hardReset(): Promise<void> {
        logService.info('[Maintenance] Hard reset initiated. Clearing all local data...');

        // 1. Очищення сховищ
        if (typeof window !== 'undefined') {
            localStorage.clear();
            sessionStorage.clear();

            // 2. Очищення куків
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            }

            // 3. Очищення кешу Service Worker / Cache API
            if ('caches' in window) {
                try {
                    const cacheNames = await caches.keys();
                    await Promise.all(
                        cacheNames.map(name => caches.delete(name))
                    );
                    logService.info('[Maintenance] Caches cleared.');
                } catch (e) {
                    console.error('Failed to clear caches', e);
                }
            }

            // 4. Перезавантаження
            logService.info('[Maintenance] Reset complete. Reloading...');
            window.location.reload();
        }
    }
};
