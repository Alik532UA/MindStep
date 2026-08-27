// src/lib/stores/appSettingsState.svelte.ts
// SSoT для налаштувань додатку. Svelte 5 Runes.
// localStorage-персистенція залишається в bridge-шарі (storageService).

import { AppSettingsSchema, type AppSettings } from '$lib/schemas/appSettingsSchema';
import { logService } from "$lib/services/logService.svelte";
import { debounce } from '$lib/utils/debounce';
import { storageService } from '$lib/services/storage';

export type AppSettingsState = AppSettings;

export const defaultAppSettings: AppSettingsState = {
    language: 'uk',
    theme: 'normal',
    style: 'gray',
};

const isBrowser = typeof window !== 'undefined';

function loadAppSettings(): AppSettingsState {
    if (!isBrowser) return defaultAppSettings;
    try {
        const rawSettings: Record<string, string | null> = {
            theme: storageService.get('theme'),
            style: storageService.get('style'),
            language: storageService.get('language'),
        };

        const filteredSettings = Object.fromEntries(
            Object.entries(rawSettings).filter(([_, v]) => v !== null)
        );

        const result = AppSettingsSchema.safeParse(filteredSettings);
        if (result.success) {
            return result.data;
        } else {
            logService.error('App settings validation failed, using defaults:', result.error.format());
            return defaultAppSettings;
        }
    } catch (e) {
        logService.error('Failed to load app settings from localStorage', e);
        return defaultAppSettings;
    }
}

function saveAppSettings(settings: AppSettingsState) {
    if (!isBrowser) return;
    storageService.set('theme', settings.theme);
    storageService.set('style', settings.style);
    storageService.set('language', settings.language);
}

const debouncedSave = debounce(saveAppSettings, 300);

class AppSettingsStateRune {
    private _state = $state<AppSettingsState>(loadAppSettings());

    constructor() {
        if (isBrowser) {
            $effect.root(() => {
                $effect(() => {
                    this.applyDomAttributes(this._state);
                    debouncedSave(this._state);
                });

                // Автоматична зміна теми при зміні налаштувань ОС (тільки якщо користувач ще не вибрав вручну)
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const handleSystemThemeChange = (e: MediaQueryListEvent) => {
                    if (!storageService.get('theme')) {
                        // Системна перевага дає ПАРУ, а тем три: темна сторона
                        // пари — `normal`, бо саме вона є типовим виглядом.
                        this.updateSettings({ theme: e.matches ? 'normal' : 'light' });
                    }
                };
                mediaQuery.addEventListener('change', handleSystemThemeChange);
            });
        }
    }

    get state() { return this._state; }
    set state(value: AppSettingsState) { 
        this._state = value;
        this.sync(value);
    }

    update(fn: (s: AppSettingsState) => AppSettingsState) {
        this._state = fn(this._state);
        this.sync(this._state);
    }

    updateSettings(newSettings: Partial<AppSettingsState>) {
        this._state = { ...this._state, ...newSettings };
        this.sync(this._state);
    }

    reset() {
        this._state = { ...defaultAppSettings };
        this.sync(this._state);
    }

    private sync(settings: AppSettingsState) {
        if (isBrowser) {
            // Тепер синхронізація відбувається автоматично через $effect у конструкторі
        }
        this.notifySubscribers();
    }

    private applyDomAttributes(settings: AppSettingsState) {
        document.documentElement.setAttribute('data-theme', settings.theme);
        document.documentElement.setAttribute('data-style', settings.style);
    }

    private subscribers: Set<(s: AppSettingsState) => void> = new Set();

    subscribe(fn: (s: AppSettingsState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const appSettingsState = new AppSettingsStateRune();
