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
    const mode = this.settings.gameMode || "timed";
    this.baseInit(context, mode, true);
  }
}

export const timedGameController = new TimedGameController();
