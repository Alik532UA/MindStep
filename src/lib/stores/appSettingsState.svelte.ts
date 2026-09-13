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
        if (newSettings.theme !== undefined || newSettings.style !== undefined) {
            this._previewed = null;
            this.startThemeShift();
        }
        this._state = { ...this._state, ...newSettings };
        this.sync(this._state);
    }

    /**
     * Пара «стиль + тема», яку показуємо «на пробу» під курсором, або `null`
     * (THEME-SWITCHER § 2.1).
     *
     * ПАРА, а не одне з двох: у пікері кожен рядок стилю має три кнопки
     * світлості, і клік по будь-якій задає ОБИДВА значення. Прев'ю, що міняло б
     * лише стиль, показувало б не те, що станеться після кліку (§ 7).
     *
     * ОКРЕМО від `_state`, і тут це критичніше, ніж деінде: `updateSettings`
     * тягне за собою `saveAppSettings` — тобто курсор, який просто перетнув
     * сітку з вісімнадцяти комбінацій, зберігав би чужу тему назавжди.
     */
    private _previewed = $state<{ style: AppSettingsState['style']; theme: AppSettingsState['theme'] } | null>(null);

    get previewed() {
        return this._previewed;
    }

    /**
     * Показує пару «на пробу», поки курсор на її кнопці; `null` — вертає обрану.
     *
     * Малює документ НАПРЯМУ, повз `$effect` у конструкторі: той прив'язаний до
     * `_state`, і єдиний спосіб його зачепити — записати вибір, чого прев'ю
     * робити не має.
     */
    previewThemePair(pair: { style: AppSettingsState['style']; theme: AppSettingsState['theme'] } | null) {
        if (!isBrowser) return;
        this._previewed = pair;
        this.startThemeShift();
        document.documentElement.setAttribute('data-theme', pair?.theme ?? this._state.theme);
        document.documentElement.setAttribute('data-style', pair?.style ?? this._state.style);
    }

    /** Знімає клас плавного переходу, коли той доїхав (§ 5). */
    private shiftTimer: ReturnType<typeof setTimeout> | null = null;

    /**
     * Вмикає плавний перехід кольорів на час зміни теми.
     *
     * Тривалість із ЗАПАСОМ над 0,56 с зі стилів, а не те саме число — щоб не
     * тримати копію тривалості у двох місцях. Знімає клас ЛИШЕ таймер: зняття в
     * обробнику обривало б перехід на половині, бо вибір теми закриває модалку,
     * а її прибирання кличе `previewThemePair(null)`.
     */
    private startThemeShift() {
        if (!isBrowser) return;
        document.documentElement.classList.add('theme-shifting');
        if (this.shiftTimer) clearTimeout(this.shiftTimer);
        this.shiftTimer = setTimeout(() => {
            document.documentElement.classList.remove('theme-shifting');
            this.shiftTimer = null;
        }, 900);
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
