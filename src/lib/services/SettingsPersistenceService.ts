// src/lib/services/SettingsPersistenceService.ts
import { logService } from "./logService.svelte";
import { defaultGameSettings } from '../stores/gameSettingsDefaults';
import type { GameSettingsState } from '../stores/gameSettingsTypes';
import { GameSettingsSchema } from '../schemas/gameSettingsSchema';
import { storageService } from './storage';

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

    // Note: Session storage logic is kept but using storageService is not yet implemented 
    // for session storage specifically in storage.ts. 
    // However, for consistency with project rules, we should use a prefixed approach.
    // Since we don't have a sessionStore wrapper yet, we keep it as is but mark for future.
    
    if (settings.gameMode) {
      sessionStorage.setItem('mindstep_gameMode', settings.gameMode);
    } else {
      sessionStorage.removeItem('mindstep_gameMode');
    }

    logService.state('Saving game settings to storageService:', stateToPersist);
    storageService.setJSON(GAME_SETTINGS_KEY, stateToPersist);
  }
};
