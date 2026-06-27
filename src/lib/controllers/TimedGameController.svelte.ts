/**
 * @file TimedGameController.svelte.ts
 * @description Контролер для гри на час (Timed Game).
 */

import { BaseGameController } from "./BaseGameController.svelte";

export class TimedGameController extends BaseGameController {
  /**
   * Ініціалізує гру на час.
   * @param context Назва сторінки.
   */
  init(context: string = "TimedGamePage") {
    let mode = this.settings.gameMode || "timed";

    // Захист від "stale gameMode": приймаємо лише режими на час.
    const validModes = ["timed", "virtual-player-timed"];
    if (!validModes.includes(mode)) {
      mode = "timed";
    }

    this.baseInit(context, mode, true);
  }
}

export const timedGameController = new TimedGameController();
