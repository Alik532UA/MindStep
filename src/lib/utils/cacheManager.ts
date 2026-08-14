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

  // Отримуємо всі ключі проекту MindStep через storageService
  // Примітка: storageService.clear() видаляє все, тому ми робимо вибірково
  
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) return;

  const PREFIX = STORAGE_PREFIX;
  const keysToRemove: string[] = [];

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

  // Перезавантажуємо сторінку, щоб застосувати зміни
  location.reload();
}
