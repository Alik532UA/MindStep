/**
 * @file TrainingGameController.svelte.ts
 * @description Контролер для режиму тренування.
 */

import { BaseGameController } from "./BaseGameController.svelte";

export class TrainingGameController extends BaseGameController {
  /**
   * Ініціалізує режим тренування.
   * @param context Назва сторінки.
   */
  init(context: string = "TrainingGamePage") {
    const mode = this.settings.gameMode || "training";
    this.baseInit(context, mode, true);
  }
}

export const trainingGameController = new TrainingGameController();
