// src/lib/i18n/init.ts
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
import { get, writable } from 'svelte/store';
import { logService } from '$lib/services/logService.svelte';

export const i18nReady = writable(false);

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

    i18nReady.set(true);
    logService.init('✅ i18n initialized successfully');
  } catch (error) {
    logService.error('❌ Error initializing i18n:', error);
    // Even on error, set ready to avoid UI freeze
    i18nReady.set(true);
  }
}
