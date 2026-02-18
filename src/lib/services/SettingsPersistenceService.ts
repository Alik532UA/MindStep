// src/lib/services/SettingsPersistenceService.ts
import { logService } from './logService';
import { defaultGameSettings } from '../stores/gameSettingsDefaults';
import type { GameSettingsState } from '../stores/gameSettingsTypes';
import { GameSettingsSchema } from '../schemas/gameSettingsSchema';

const isBrowser = typeof window !== 'undefined';
const GAME_SETTINGS_KEY = 'gameSettings';
const SETTINGS_VERSION = 2;

export const settingsPersistenceService = {
  load(): GameSettingsState {
    if (!isBrowser) return defaultGameSettings;

    try {
      const storedSettingsRaw = localStorage.getItem(GAME_SETTINGS_KEY);
      if (!storedSettingsRaw) return defaultGameSettings;

      const storedSettings = JSON.parse(storedSettingsRaw);
      
      // Валідація через Zod
      const validationResult = GameSettingsSchema.safeParse(storedSettings);
      
      if (!validationResult.success) {
        logService.error('[SettingsPersistenceService] Invalid settings in localStorage. Falling back to defaults.', validationResult.error.format());
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

    // Session-specific settings
    if (settings.gameMode) {
      sessionStorage.setItem('gameMode', settings.gameMode);
    } else {
      sessionStorage.removeItem('gameMode');
    }

    logService.state('Saving game settings to localStorage:', stateToPersist);
    localStorage.setItem(GAME_SETTINGS_KEY, JSON.stringify(stateToPersist));
  }
};
