// src/lib/i18n/init.svelte.ts
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
import { AppSettingsSchema } from '$lib/schemas/appSettingsSchema';
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
 * МОВА З АДРЕСИ — `?lang=`, і це свідоме відхилення від I18N-v8 § 3.1.
 *
 * Сусідні сайти автора посилаються сюди й передають мову, якою відвідувач читав
 * там: перехід між сайтами однієї мережі не мусить скидати обрану мову. На
 * сайтах із мовним сегментом це робить ШЛЯХ (`/VetCrewGames/de/`), і саме так
 * канон і приписує. Тут мовного сегмента немає взагалі — мова живе лише в
 * налаштуваннях, — тож параметр є єдиною ручкою в адресі. Таблиця, з якої
 * сусіди будують ці посилання, лежить у `src/lib/siblings.ts`.
 *
 * **Пише в налаштування, а не поверх них.** На сайтах із мовою в шляху вхідна
 * мова діє на візит і сховища не чіпає — там є ДВА місця, поточна мова й
 * збережений вибір. Тут місце одне: `appSettingsState.state.language` — це і те,
 * що показує інтерфейс, і те, що лягає в сховище, і те, за чим `derivedState`
 * малює прапор у шапці. Застосувати мову, не записавши її, означало б інтерфейс
 * англійською з українським прапором на кнопці мов.
 *
 * **Параметр лишається в адресі.** Прибрати його через `replaceState` — те, що
 * канон приписує для старих `?lang=` посилань, — тут означало б, що перезаван‑
 * таження сторінки вертає попередню мову. Оскільки мова тепер таки збережена,
 * це не критично, але адреса, яку можна переслати, лишається чеснішою.
 *
 * Тег звіряється строго, без зведення `en-US` → `en`: посилання будує
 * `siblingUrl()`, і воно надсилає лише точні теги з переліку. Невідоме значення
 * ігнорується мовчки — це не помилка застосунку, а чужий параметр в адресі.
 */
function applyLanguageFromUrl(): void {
  if (typeof window === 'undefined') return;

  const asked = new URLSearchParams(window.location.search).get('lang');
  if (!asked) return;

  const parsed = AppSettingsSchema.shape.language.safeParse(asked);
  if (!parsed.success) {
    logService.info(`i18n: ignoring unknown ?lang=${asked}`);
    return;
  }

  if (appSettingsState.state.language === parsed.data) return;
  logService.info(`i18n: language taken from the address: ${parsed.data}`);
  appSettingsState.updateSettings({ language: parsed.data });
}

/**
 * Initializes the i18n system.
 * This function should be called on the client side.
 */
export function initializeI18n(): void {
  try {
    // ПЕРЕД читанням налаштувань: адреса має перекривати збережений вибір, і
    // після цього рядка обидва джерела кажуть одне.
    applyLanguageFromUrl();

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
