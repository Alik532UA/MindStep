import { TrainingGameMode } from './TrainingGameMode';
import type { Player } from '$lib/models/player';
import { createVirtualPlayerPlayers } from '$lib/utils/playerFactory';
import { gameSettingsStore } from '$lib/stores/gameSettingsStore';
import { timeService } from '$lib/services/timeService';

export class VirtualPlayerGameMode extends TrainingGameMode {
  initialize(options: { newSize?: number } = {}): void {
    // Вимикаємо глобальний ігровий таймер для цього режиму
    timeService.stopGameTimer();
    
    // Викликаємо ініціалізацію базового класу TrainingGameMode.
    // Це забезпечить правильну ініціалізацію гравців (через наш getPlayersConfiguration),
    // двигуна, анімацій та скидання таймера ходу.
    super.initialize(options);
    
    // Застосовуємо специфічні налаштування озвучення для віртуального режиму
    gameSettingsStore.updateSettings({
      speechRate: 1.6,
      shortSpeech: true,
      speechFor: {
        player: false,
        computer: true,
        onlineMyMove: false,
        onlineOpponentMove: true
      },
    });
  }

  getPlayersConfiguration(): Player[] {
    return createVirtualPlayerPlayers();
  }

  getModeName(): 'virtual-player' {
    return 'virtual-player';
  }
}
