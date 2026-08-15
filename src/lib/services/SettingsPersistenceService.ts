// src/lib/services/SettingsPersistenceService.ts
import { logService } from "./logService.svelte";
import { defaultGameSettings } from '../stores/gameSettingsDefaults';
import type { GameSettingsState } from '../stores/gameSettingsTypes';
import { GameSettingsSchema } from '../schemas/gameSettingsSchema';
import { storageService } from './storage';
import { getStorageKey } from '$lib/config/storage';

const isBrowser = typeof window !== 'undefined';
const GAME_SETTINGS_KEY = 'gameSettings';
const SETTINGS_VERSION = 2;

export const settingsPersistenceService = {
  load(): GameSettingsState {
    if (!isBrowser) return defaultGameSettings;

    try {
      const storedSettingsRaw = storageService.get(GAME_SETTINGS_KEY);
      if (!storedSettingsRaw) return defaultGameSettings;

      const storedSettings = JSON.parse(storedSettingsRaw);
      
      // Валідація через Zod
      const validationResult = GameSettingsSchema.safeParse(storedSettings);
      
      if (!validationResult.success) {
        logService.error('[SettingsPersistenceService] Invalid settings in storage. Falling back to defaults.', validationResult.error.format());
        return defaultGameSettings;
      }

      const { version, ...gameSettings } = validationResult.data as any;

      // Міграція версій (якщо потрібно)
      if (!version || version < SETTINGS_VERSION) {
        logService.init(`[SettingsPersistenceService] Migrating settings from version ${version || 0} to ${SETTINGS_VERSION}`);
        // Тут можна додати специфічну логіку міграції, якщо структура змінилася кардинально
      }

      return gameSettings as GameSettingsState;
    } catch (error) {
      logService.error('Error loading game settings:', error);
      return defaultGameSettings;
    }
  },

  save(settings: GameSettingsState) {
    if (!isBrowser) return;
    
    const stateToPersist = { ...settings, version: SETTINGS_VERSION };

    // Фасада над sessionStorage у проєкті ще немає, тому звернення пряме —
    // але ключ будується тим самим `getStorageKey()`, щоб префікс лишався в
    // одному місці. Обгорнуто: у приватному режимі sessionStorage теж кидає.
    //
    // БОРГ (STORAGE-NAMESPACE-v8, Крок 2): wrapper над sessionStorage має
    // існувати з тими самими guard-ами, що й над localStorage. Поки його немає,
    // ізоляція тут тримається на `getStorageKey()`, а не на конструкції.
    /* eslint-disable no-restricted-globals -- немає sessionStorage-фасаду, див. коментар вище */
    try {
      const sessionKey = getStorageKey('gameMode');
      if (settings.gameMode) {
        sessionStorage.setItem(sessionKey, settings.gameMode);
      } else {
        sessionStorage.removeItem(sessionKey);
      }
      /* eslint-enable no-restricted-globals */
    } catch (e) {
      logService.warn('[Settings] sessionStorage недоступний — режим гри не збережено на сесію', e);
    }

    logService.state('Saving game settings to storageService:', stateToPersist);
    storageService.setJSON(GAME_SETTINGS_KEY, stateToPersist);
  }
};
