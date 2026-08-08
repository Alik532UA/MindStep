import { get } from 'svelte/store';
import { gameState } from '$lib/stores/gameState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { gameModeState } from '$lib/stores/gameModeState.svelte';
import { BaseGameMode } from '$lib/game-modes/BaseGameMode';
import { TrainingGameMode } from '$lib/game-modes/TrainingGameMode';
import { LocalGameMode } from '$lib/game-modes/LocalGameMode';
import { TimedGameMode } from '$lib/game-modes/TimedGameMode';
import { VirtualPlayerGameMode } from '$lib/game-modes/VirtualPlayerGameMode';
import { OnlineGameMode } from '$lib/game-modes/OnlineGameMode'; // Import OnlineGameMode
import { logService } from "./logService.svelte";
import { track } from "./analyticsService";
import { timerState } from '$lib/stores/timerState.svelte';
import { GameModePresetSchema } from '$lib/schemas/gameSettingsSchema';

class GameModeService {
  private modes: Map<string, BaseGameMode> = new Map();

  constructor() {
    this.registerMode('training', new TrainingGameMode());
    this.registerMode('local', new LocalGameMode());
    this.registerMode('timed', new TimedGameMode());
    this.registerMode('virtual-player', new VirtualPlayerGameMode());
    this.registerMode('online', new OnlineGameMode()); // Register OnlineGameMode
  }

  private registerMode(name: string, mode: BaseGameMode) {
    this.modes.set(name, mode);
  }

  /**
   * Ініціалізує ігровий режим.
   * @param modeName Назва режиму або пресету.
   * @param applyPresetSettings Чи застосовувати налаштування з пресету.
   * @param options Додаткові параметри ініціалізації (наприклад, roomId для онлайн гри).
   */
  public initializeGameMode(modeName: string | null = null, applyPresetSettings: boolean = true, options: any = {}) {
    const currentSettings = gameSettingsState.state;
    let name = modeName || currentSettings.gameMode;

    logService.GAME_MODE(`[GameModeService] Initializing: modeName="${modeName}", storeName="${currentSettings.gameMode}"`);

    // Валідація назви пресету
    const validationResult = GameModePresetSchema.safeParse(name);
    if (!validationResult.success && name !== null) {
        logService.error(`[GameModeService] Invalid game mode preset: "${name}". Falling back to default.`);
        name = 'beginner';
    }

    const presetToModeMap: Record<string, string> = {
      'virtual-player-beginner': 'training',
      'virtual-player-experienced': 'training',
      'virtual-player-pro': 'training',
      'virtual-player-timed': 'timed',
      'local-observer': 'local',
      'local-experienced': 'local',
      'local-pro': 'local',
      'online-beginner': 'online',
      'online-experienced': 'online',
      'online-pro': 'online',
      // Legacy
      beginner: 'training',
      experienced: 'training',
      pro: 'training',
      timed: 'timed',
      local: 'local',
      online: 'online',
      observer: 'local',
    };
    const implementationName = name ? presetToModeMap[name] || name : 'training';

    const mode = this.modes.get(implementationName);

    if (mode) {
      timerState.reset();

      const allowedPresets = [
        'virtual-player-beginner', 'virtual-player-experienced', 'virtual-player-pro', 'virtual-player-timed',
        'local-observer', 'local-experienced', 'local-pro',
        'online-beginner', 'online-experienced', 'online-pro',
        'beginner', 'experienced', 'pro', 'timed', 'local', 'online', 'observer'
      ];

      if (applyPresetSettings && name && allowedPresets.includes(name)) {
        gameSettingsState.applyPreset(name as any);
      }

      // Передаємо options у метод initialize режиму
      mode.initialize(options);

      gameState.setMode(mode);
      gameModeState.setActiveMode(implementationName);
      logService.GAME_MODE(`Game mode initialized: ${implementationName} (from preset: ${name})`, options);
      // The one place every mode starts from, so it is the only place a start
      // event has to be raised. `preset` carries the difficulty the player
      // picked, which is the interesting half — mode alone does not say whether
      // anyone gets past beginner.
      track('game_start', { mode: implementationName, preset: name ?? 'none' });
    } else {
      logService.GAME_MODE(`Unknown game mode or preset: ${name}`);
    }
  }

  public getCurrentMode(): BaseGameMode | null {
    return gameState.state.mode;
  }
}

export const gameModeService = new GameModeService();