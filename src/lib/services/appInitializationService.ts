import { appSettingsState } from "$lib/stores/appSettingsState.svelte";
import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
import { defaultGameSettings } from "$lib/stores/gameSettingsDefaults";
import { settingsPersistenceService } from "$lib/services/SettingsPersistenceService";
import { debounce } from "$lib/utils/debounce";
import { initializeI18n } from "$lib/i18n/init.svelte";
import { initializeTestModeSync } from "$lib/services/testModeService.svelte";
import { rewardsService } from "$lib/services/rewardsService";
import { logService } from "$lib/services/logService.svelte";
import { versionState } from "$lib/stores/versionState.svelte";
import { get } from "svelte/store";
import { base } from "$app/paths";
import { animationService } from "$lib/services/animationService";
import { uiState } from "$lib/stores/uiState.svelte";
import { storageService } from "$lib/services/storage";
import { ownCacheNames, ownRegistrations } from "$lib/services/ownScope";

import { urlSyncService } from "$lib/services/urlSyncService";
import { authService } from "$lib/services/authService";

const APP_VERSION_KEY = "app_version";
const VERSION_CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes

class AppInitializationService {
    private versionCheckIntervalId: any = null;

    public initialize() {
        logService.init("[AppInitializationService] Starting initialization...");

        // 1. Initialize game settings
        // Priority: URL > LocalStorage > Defaults
        const loadedGameSettings = settingsPersistenceService.load();
        const urlParams = urlSyncService.getParamsFromUrl();
        
        // ВАЖЛИВО: Починаємо з defaultGameSettings, щоб гарантувати наявність усіх полів
        const finalSettings = { 
            ...defaultGameSettings, 
            ...loadedGameSettings, 
            ...urlParams 
        };
        gameSettingsState.state = finalSettings;

        // 3. Initialize internationalization
        initializeI18n();

        /*
         * ПІДПИСКА НА СТАН АВТЕНТИФІКАЦІЇ — і доти її не запускав НІХТО.
         *
         * `authService.init()` не мав жодного виклику в усьому проєкті. Наслідок
         * не один: разом із нею не працювали `syncUserProfile` (злиття місцевого
         * рекорду з хмарним при вході) і `watchUserProfile` (жива підписка на
         * свій профіль) — тобто хмарна половина профілю оживала лише там, де
         * хтось окремо кликав вхід.
         *
         * Не `await`: ініціалізація застосунку не мусить чекати на мережу. Сама
         * підписка асинхронна за побудовою, а місця, яким `uid` потрібен ЗАРАЗ,
         * беруть його через `authService.ensureUser()`.
         */
        void authService.init();

        // 4. Initialize other services
        initializeTestModeSync();
        rewardsService.init();
        animationService.initialize();
        this.setupVisibilityListener();

        // 5. Check for updates
        this.checkForUpdates();
        this.startPeriodicVersionCheck();

        // 6. Expose debug tools in DEV
        if (import.meta.env.DEV) {
            (window as any).appSettingsState = appSettingsState;
        }

        // Remove preload class
        if (typeof document !== 'undefined') {
            document.body.classList.remove("preload-theme");
        }

        logService.init("[AppInitializationService] Initialization complete.");
    }

    /**
     * Обробник тримається полем, а не лишається анонімним
     * (SVELTE-CORE-v9 § 2.2.2, `SC-LISTENER-CLEANUP`).
     *
     * Доти тут стояла анонімна функція, тобто зняти цей обробник було
     * НЕМОЖЛИВО в принципі — а `cleanup()`, який кличе `+layout.svelte` при
     * знищенні, знімав лише інтервал версії. Кожен повторний виклик
     * `initialize()` (перемонтування кореневого layout, HMR, скидання станів у
     * тестовому режимі) додавав ще один обробник до попереднього, і кожен із
     * них далі писав у `uiState`.
     */
    private visibilityHandler: (() => void) | null = null;

    private setupVisibilityListener() {
        if (typeof document === 'undefined') return;

        // Повторна ініціалізація не має додавати другий обробник.
        this.teardownVisibilityListener();

        this.visibilityHandler = () => {
            const isVisible = document.visibilityState === 'visible';
            logService.ui(`[AppInitializationService] Visibility changed: ${document.visibilityState}`);

            uiState.update(s => ({
                ...s,
                isTabVisible: isVisible
            }));
        };
        document.addEventListener('visibilitychange', this.visibilityHandler);
    }

    private teardownVisibilityListener() {
        if (typeof document === 'undefined' || !this.visibilityHandler) return;
        document.removeEventListener('visibilitychange', this.visibilityHandler);
        this.visibilityHandler = null;
    }

    public cleanup() {
        this.stopPeriodicVersionCheck();
        this.teardownVisibilityListener();
    }

    private startPeriodicVersionCheck() {
        this.stopPeriodicVersionCheck();
        this.versionCheckIntervalId = setInterval(() => {
            logService.init("[AppInitializationService] Periodic version check...");
            this.checkForUpdates();
        }, VERSION_CHECK_INTERVAL);
    }

    private stopPeriodicVersionCheck() {
        if (this.versionCheckIntervalId) {
            clearInterval(this.versionCheckIntervalId);
            this.versionCheckIntervalId = null;
        }
    }

    private async checkForUpdates() {
        // НАВІЩО: Вимикаємо перевірку оновлень у тестовому режимі, Playwright та CI.
        // Ми перевіряємо як внутрішній стан, так і глобальні змінні середовища тестування.
        if (typeof window !== 'undefined') {
            const isPlaywright = (window as any).updateNoticeDisabled || (window as any).__playwright_test__;
            const isTestMode = (window as any).testMode;
            if (isPlaywright || isTestMode || import.meta.env.MODE === 'test') {
                logService.init("[AppInitializationService] Skipping update check (test environment detected)");
                return;
            }
        }

        try {
            const response = await fetch(`${base}/version.json?v=${new Date().getTime()}`);
            if (!response.ok) return;

            const serverVersionData = await response.json();
            const serverVersion = serverVersionData.version;
            const minVersion = serverVersionData.minVersion;
            
            const localVersion = storageService.get(APP_VERSION_KEY);
            
            versionState.setVersion(serverVersion);
            if (minVersion) versionState.setMinVersion(minVersion);

            if (localVersion && localVersion !== serverVersion) {
                logService.init(`[AppInitializationService] New version available: ${serverVersion}`);
                versionState.setUpdateAvailable(true);

                // Check for critical update
                if (minVersion && this.isVersionLower(localVersion, minVersion)) {
                    logService.init("[AppInitializationService] Critical update required! Performing Hard Reload...");
                    await this.performHardReload();
                }
            } else if (!localVersion) {
                storageService.set(APP_VERSION_KEY, serverVersion);
            }
        } catch (error) {
            logService.error("Failed to check for app update:", error);
        }
    }

    /**
     * Порівнює дві версії (формат x.y.z)
     */
    private isVersionLower(current: string, required: string): boolean {
        const cParts = current.split('.').map(Number);
        const rParts = required.split('.').map(Number);
        
        for (let i = 0; i < Math.max(cParts.length, rParts.length); i++) {
            const c = cParts[i] || 0;
            const r = rParts[i] || 0;
            if (c < r) return true;
            if (c > r) return false;
        }
        return false;
    }

    /**
     * Виконує повне очищення кешу та перезавантаження.
     *
     * ЛИШЕ СВОЄ — за `scope` реєстрації і за префіксом імені кешу
     * (`ownScope.ts`, DEBUGGING § `DBG-HARD-RESET`). Доти обидва цикли нижче
     * ходили по всьому origin: `getRegistrations()` і `caches.keys()` не знають
     * нічого про підшлях, тож критичне оновлення MindStep знімало service
     * worker і витирало кеші кожного сусіднього проєкту на
     * `alik532ua.github.io`. Симптом у сусіда — сайт раптово перестав
     * працювати офлайн, і причина в чужому репозиторії.
     *
     * `maintenanceService.hardReset()` фільтрував правильно з самого початку —
     * розійшлися саме тому, що фільтр був копією, а не спільним модулем.
     */
    public async performHardReload() {
        logService.init("[AppInitializationService] Performing Hard Reload: clearing own SW and Caches...");

        try {
            // 1. Unregister own service workers
            if ("serviceWorker" in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (const registration of ownRegistrations(registrations)) {
                    await registration.unregister();
                }
            }

            // 2. Clear own caches
            if ("caches" in window) {
                const keys = await caches.keys();
                for (const key of ownCacheNames(keys)) {
                    await caches.delete(key);
                }
            }

            // 3. Update local version to prevent loop
            const currentVersion = versionState.state.current;
            if (currentVersion) {
                storageService.set(APP_VERSION_KEY, currentVersion);
            }

            // 4. Force reload with cache-buster
            const url = new URL(window.location.href);
            url.searchParams.set('upd', Date.now().toString());
            window.location.replace(url.toString());
        } catch (e) {
            logService.error("Hard Reload failed:", e);
            window.location.reload();
        }
    }
}

export const appInitializationService = new AppInitializationService();
