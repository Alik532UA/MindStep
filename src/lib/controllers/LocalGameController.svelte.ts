/**
 * @file LocalGameController.svelte.ts
 * @description Специфічний контролер для локальної гри (2 гравці).
 */

import { BaseGameController } from "./BaseGameController.svelte";

export class LocalGameController extends BaseGameController {
  /**
   * Ініціалізує локальну гру.
   * @param context Назва сторінки.
   */
  init(context: string = "LocalGamePage") {
    let mode = this.settings.gameMode || "local";
    
    // Якщо gameMode не є локальним пресетом — примусово використовуємо "local"
    const localModes = ["local", "local-observer", "local-experienced", "local-pro", "observer"];
    if (!localModes.includes(mode)) {
      mode = "local";
    }
    
    // Для локального режиму іноді не треба скидати налаштування пресетів
    const shouldApplyPreset = !["observer"].includes(mode);
    
    this.baseInit(context, mode, shouldApplyPreset);
  }
}

export const localGameController = new LocalGameController();
