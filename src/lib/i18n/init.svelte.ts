// src/lib/i18n/init.svelte.ts
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
import { get } from 'svelte/store';
import { logService } from '$lib/services/logService.svelte';

/**
 * Чи готова система перекладів (SVELTE-CORE-v8 § 1.4, анти-патерни).
 *
 * Було `writable(false)` — стан Svelte 4 у Svelte-5 проєкті. Тепер `$state` у
 * module-level класі, тож файл мусить мати розширення `.svelte.ts`: руни
 * компілюються лише в ньому (PROJECT-STRUCTURE-v8, правило розширень).
 *
 * `get(locale)` нижче лишається — це interop із `svelte-i18n`, яка віддає ЛИШЕ
 * store і жодного іншого API не має. Правило проти `svelte/store` стосується
 * власного стану, а не читання чужої бібліотеки.
 */
class I18nReadyState {
  /** `false`, поки не завантажено словники; UI до цього не показує ключів. */
  ready = $state(false);
}

export const i18nReady = new I18nReadyState();

// Register all languages
register('en', () => import('./en.ts'));
register('uk', () => import('./uk.ts'));
register('crh', () => import('./crh.ts'));
register('nl', () => import('./nl.ts'));

/**
 * Initializes the i18n system.
 * This function should be called on the client side.
 */
export function initializeI18n(): void {
  try {
    const initialLocale = appSettingsState.state.language || getLocaleFromNavigator() || 'uk';

    init({
      fallbackLocale: 'uk',
      initialLocale: initialLocale,
    });

    appSettingsState.subscribe((settings) => {
      if (settings.language && get(locale) !== settings.language) {
        locale.set(settings.language);
      }
    });

    i18nReady.ready = true;
    logService.init('✅ i18n initialized successfully');
  } catch (error) {
    logService.error('❌ Error initializing i18n:', error);
    // Even on error, set ready to avoid UI freeze
    i18nReady.ready = true;
  }
}
