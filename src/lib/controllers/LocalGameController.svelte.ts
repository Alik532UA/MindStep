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
    const mode = this.settings.gameMode || "local";
    
    // Для локального режиму не треба застосовувати пресет, 
    // бо користувач вже налаштував гру в /local-setup.
    const shouldApplyPreset = false;
    
    this.baseInit(context, mode, shouldApplyPreset);
  }
}

export const localGameController = new LocalGameController();
