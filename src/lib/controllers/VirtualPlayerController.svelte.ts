/**
 * @file VirtualPlayerController.svelte.ts
 * @description Специфічний контролер для гри проти віртуального гравця (ШІ).
 */

import { BaseGameController } from "./BaseGameController.svelte";

export class VirtualPlayerController extends BaseGameController {
  /**
   * Ініціалізує гру проти ШІ.
   * @param context Назва сторінки.
   */
  init(context: string = "VirtualPlayerPage") {
    const mode = this.settings.gameMode || "virtual-player";
    
    this.baseInit(context, mode, true);
  }

  /**
   * Специфічне приховування віджетів для гри з ШІ.
   * Наприклад, індикатор ходу (WIDGETS.PLAYER_TURN_INDICATOR) тут завжди прихований.
   */
  override shouldShowWidget(id: string): boolean {
    // В іграх проти ШІ зазвичай не потрібен індикатор ходу, 
    // оскільки комп'ютер ходить миттєво або через коротку паузу.
    // Це можна перевизначити в GameSettings, але за замовчуванням приховуємо.
    return super.shouldShowWidget(id);
  }
}

export const virtualPlayerController = new VirtualPlayerController();
