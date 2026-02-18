// src/lib/stores/appSettingsState.svelte.ts
// SSoT для налаштувань додатку. Svelte 5 Runes.
// localStorage-персистенція залишається в bridge-шарі.

import { AppSettingsSchema, type AppSettings } from '$lib/schemas/appSettingsSchema';
import { logService } from '$lib/services/logService';
import { debounce } from '$lib/utils/debounce';

export type AppSettingsState = AppSettings;

export const defaultAppSettings: AppSettingsState = {
    language: 'uk',
    theme: 'dark',
    style: 'gray',
};

const isBrowser = typeof window !== 'undefined';

function loadAppSettings(): AppSettingsState {
    if (!isBrowser) return defaultAppSettings;
    try {
        const rawSettings: Record<string, string | null> = {
            theme: localStorage.getItem('theme'),
            style: localStorage.getItem('style'),
            language: localStorage.getItem('language'),
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
    localStorage.setItem('theme', settings.theme);
    localStorage.setItem('style', settings.style);
    localStorage.setItem('language', settings.language);
}

const debouncedSave = debounce(saveAppSettings, 300);

class AppSettingsStateRune {
    private _state = $state<AppSettingsState>(loadAppSettings());

    constructor() {
        if (isBrowser) {
            this.applyDomAttributes(this._state);
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
            this.applyDomAttributes(settings);
            debouncedSave(settings);
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
