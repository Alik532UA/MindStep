import { appSettingsStore } from "$lib/stores/appSettingsStore";
import { gameSettingsStore } from "$lib/stores/gameSettingsStore";
import { settingsPersistenceService } from "$lib/services/SettingsPersistenceService";
import { debounce } from "$lib/utils/debounce";
import { initializeI18n } from "$lib/i18n/init.js";
import { initializeTestModeSync } from "$lib/services/testModeService.svelte";
import { rewardsService } from "$lib/services/rewardsService";
import { logService } from "$lib/services/logService";
import { appVersion } from "$lib/stores/versionStore";
import { get } from "svelte/store";
import { base } from "$app/paths";
import { animationService } from "$lib/services/animationService";

import { urlSyncService } from "$lib/services/urlSyncService";

const APP_VERSION_KEY = "app_version";
const VERSION_CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes

class AppInitializationService {
    private unsubscribeGameSettings: (() => void) | null = null;
    private versionCheckIntervalId: any = null;

    public initialize() {
        logService.init("[AppInitializationService] Starting initialization...");

        // 1. Initialize app settings (theme, language)
        appSettingsStore.init();

        // 2. Initialize game settings
        // Priority: URL > LocalStorage > Defaults
        const loadedGameSettings = settingsPersistenceService.load();
        const urlParams = urlSyncService.getParamsFromUrl();
        
        const finalSettings = { ...loadedGameSettings, ...urlParams };
        gameSettingsStore.set(finalSettings);

        // 3. Subscribe to game settings changes to persist them
        const debouncedSave = debounce(settingsPersistenceService.save, 300);
        this.unsubscribeGameSettings = gameSettingsStore.subscribe((settings) => {
            debouncedSave(settings);
        });

        // 4. Initialize internationalization
        initializeI18n();

        // 5. Initialize other services
        initializeTestModeSync();
        rewardsService.init();
        animationService.initialize();

        // 6. Check for updates
        this.checkForUpdates();
        this.startPeriodicVersionCheck();

        // 7. Expose debug tools in DEV
        if (import.meta.env.DEV) {
            (window as any).appSettingsStore = appSettingsStore;
        }

        // Remove preload class
        if (typeof document !== 'undefined') {
            document.body.classList.remove("preload-theme");
        }

        logService.init("[AppInitializationService] Initialization complete.");
    }

    public cleanup() {
        if (this.unsubscribeGameSettings) {
            this.unsubscribeGameSettings();
        }
        this.stopPeriodicVersionCheck();
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
            
            const localVersion = localStorage.getItem(APP_VERSION_KEY);
            
            appVersion.setVersion(serverVersion);
            if (minVersion) appVersion.setMinVersion(minVersion);

            if (localVersion && localVersion !== serverVersion) {
                logService.init(`[AppInitializationService] New version available: ${serverVersion}`);
                appVersion.setUpdateAvailable(true);

                // Check for critical update
                if (minVersion && this.isVersionLower(localVersion, minVersion)) {
                    logService.init("[AppInitializationService] Critical update required! Performing Hard Reload...");
                    await this.performHardReload();
                }
            } else if (!localVersion) {
                localStorage.setItem(APP_VERSION_KEY, serverVersion);
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
     * Виконує повне очищення кешу та перезавантаження
     */
    public async performHardReload() {
        logService.init("[AppInitializationService] Performing Hard Reload: clearing SW and Caches...");
        
        try {
            // 1. Unregister all service workers
            if ("serviceWorker" in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (const registration of registrations) {
                    await registration.unregister();
                }
            }

            // 2. Clear all caches
            if ("caches" in window) {
                const keys = await caches.keys();
                for (const key of keys) {
                    await caches.delete(key);
                }
            }

            // 3. Update local version to prevent loop
            const currentVersion = get(appVersion).current;
            if (currentVersion) {
                localStorage.setItem(APP_VERSION_KEY, currentVersion);
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