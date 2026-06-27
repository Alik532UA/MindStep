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
    let mode = this.settings.gameMode || "training";

    // Захист від "stale gameMode": режим тренування не повинен успадковувати
    // режим іншого типу гри з попередньої сесії.
    if (mode !== "training") {
      mode = "training";
    }

    this.baseInit(context, mode, true);
  }
}

export const trainingGameController = new TrainingGameController();
