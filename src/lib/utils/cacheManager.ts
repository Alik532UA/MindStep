import { storageService } from '$lib/services/storage';
import { STORAGE_PREFIX } from '$lib/config/storage';

export interface ClearCacheOptions {
  /** Зберегти тему, стиль та мову. */
  keepAppearance?: boolean;
  /** Зберегти всі налаштування гри. */
  keepSettings?: boolean;
}

/**
 * Очищує localStorage (тільки для MindStep), зберігаючи вказані ключі.
 */
export function clearCache(options: ClearCacheOptions = {}): void {
  const keysToKeep = new Set<string>();

  if (options.keepAppearance) {
    keysToKeep.add('theme');
    keysToKeep.add('style');
    keysToKeep.add('lang');
    keysToKeep.add('app-settings'); // Новий формат налаштувань застосунку
  }

  if (options.keepSettings) {
    keysToKeep.add('game-settings');
    keysToKeep.add('showMoves');
    keysToKeep.add('showBoard');
    keysToKeep.add('speechEnabled');
    keysToKeep.add('selectedVoiceURI');
    keysToKeep.add('blockModeEnabled');
    keysToKeep.add('showPiece');
    keysToKeep.add('blockOnVisitCount');
    keysToKeep.add('keybindings');
    keysToKeep.add('keyConflictResolution');
  }

  /*
   * Прямий доступ замість фасаду, і це свідомо (STORAGE-NAMESPACE-v8, Крок 3).
   *
   * Потрібне ВИБІРКОВЕ очищення: зняти всі ключі проєкту, крім переліку
   * `keysToKeep`. `storageService.clear()` знімає всі, тобто разом із тими, що
   * треба зберегти — іншої семантики фасад не пропонує.
   *
   * Ізоляція при цьому не порушена: перебір фільтрує за `STORAGE_PREFIX`, тож
   * жоден ключ сусіднього проєкту сюди не потрапляє. Саме цим цей випадок
   * відрізняється від справжнього обходу — префікс береться з тієї самої
   * константи, що й у фасаді, а не дублюється рядком.
   *
   * БОРГ: правильне місце для цього — метод `clearExcept(keysToKeep)` у самому
   * фасаді. Не додано тут, бо це нова публічна поверхня API, якій потрібні
   * власні тести, і робити її мимохідь неправильно.
   */
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) return;

  const PREFIX = STORAGE_PREFIX;
  const keysToRemove: string[] = [];

  /* eslint-disable no-restricted-globals -- вибіркове очищення, див. коментар вище */
  for (let i = 0; i < localStorage.length; i++) {
    const fullKey = localStorage.key(i);
    if (fullKey?.startsWith(PREFIX)) {
      const originalKey = fullKey.substring(PREFIX.length);
      if (!keysToKeep.has(originalKey)) {
        keysToRemove.push(fullKey);
      }
    }
  }

  keysToRemove.forEach(key => localStorage.removeItem(key));
  /* eslint-enable no-restricted-globals */

  // Перезавантажуємо сторінку, щоб застосувати зміни
  location.reload();
}
