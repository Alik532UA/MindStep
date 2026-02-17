import { logService } from '$lib/services/logService';
import type { MoveDirectionType } from '$lib/models/Piece';

const directionArrows: Record<MoveDirectionType, string> = {
  'up-left': '↖',
  'up': '↑',
  'up-right': '↗',
  'left': '←',
  'right': '→',
  'down-left': '↙',
  'down': '↓',
  'down-right': '↘',
};

/**
 * Стан центральної інформаційної кнопки
 */
export interface CenterInfoState {
  class: string;
  content: string;
  clickable: boolean;
  aria: string;
  backgroundColor?: string;
}

export function getCenterInfoState({
  selectedDirection,
  selectedDistance,
  lastComputerMove,
  lastPlayerMove,
  isPlayerTurn,
  previousPlayerColor = null
}: {
  selectedDirection: MoveDirectionType | null;
  selectedDistance: number | null;
  lastComputerMove?: { direction?: MoveDirectionType; distance?: number } | null;
  lastPlayerMove?: { direction?: MoveDirectionType; distance?: number } | null;
  isPlayerTurn: boolean;
  previousPlayerColor?: string | null;
}): CenterInfoState {
  // RADICAL FIX: Якщо це не хід гравця, ми ОБНУЛЯЄМО його вибір для відображення
  const effectiveDirection = isPlayerTurn ? selectedDirection : null;
  const effectiveDistance = isPlayerTurn ? selectedDistance : null;

  // DEBUG LOG
  if (selectedDirection || selectedDistance || lastComputerMove) {
    logService.ui('[getCenterInfoState] Calculating state:', {
      isPlayerTurn,
      selectedDirection,
      selectedDistance,
      effectiveDirection,
      hasLastCompMove: !!lastComputerMove
    });
  }

  // 1. Якщо гравець вибрав хід (напрямок + відстань) - показуємо кнопку підтвердження
  if (effectiveDirection && effectiveDistance) {
    let dir = '';
    if (directionArrows[effectiveDirection]) {
      dir = directionArrows[effectiveDirection];
    }
    return {
      class: 'confirm-btn-active',
      content: `${dir}${effectiveDistance}`,
      clickable: true,
      aria: `Підтвердити хід: ${dir}${effectiveDistance}`
    };
  }

  // 2. Якщо вибрано тільки напрямок
  if (effectiveDirection) {
    let dir = '';
    if (directionArrows[effectiveDirection]) {
      dir = directionArrows[effectiveDirection];
    }
    return {
      class: 'direction-distance-state',
      content: dir,
      clickable: false,
      aria: `Вибрано напрямок: ${dir}`
    };
  }

  // 3. Якщо вибрано тільки відстань
  if (!effectiveDirection && effectiveDistance) {
    return {
      class: 'direction-distance-state',
      content: String(effectiveDistance),
      clickable: false,
      aria: `Вибрано відстань: ${effectiveDistance}`
    };
  }

  // 4. Якщо немає вибору гравця, показуємо останній хід комп'ютера
  // Це має відбуватися миттєво після оновлення логіки, незалежно від анімації.
  if (lastComputerMove) {
    let dir = '';
    let dist = '';
    if (lastComputerMove.direction && directionArrows[lastComputerMove.direction]) {
      dir = directionArrows[lastComputerMove.direction];
    }
    if (typeof lastComputerMove.distance === 'number') {
      dist = String(lastComputerMove.distance);
    }
    return {
      class: 'computer-move-display',
      content: `${dir}${dist}`,
      clickable: false,
      aria: `Хід комп'ютера: ${dir}${dist}`
    };
  }

  // 5. Якщо немає ходу комп'ютера, показуємо останній хід гравця (ТІЛЬКИ якщо зараз хід гравця)
  if (isPlayerTurn && lastPlayerMove) {
    let dir = '';
    let dist = '';
    if (lastPlayerMove.direction && directionArrows[lastPlayerMove.direction]) {
      dir = directionArrows[lastPlayerMove.direction];
    }
    if (typeof lastPlayerMove.distance === 'number') {
      dist = String(lastPlayerMove.distance);
    }
    return {
      class: 'player-move-display',
      content: `${dir}${dist}`,
      clickable: false,
      aria: `Останній хід гравця: ${dir}${dist}`,
      backgroundColor: previousPlayerColor || '#43a047'
    };
  }

  // 6. Порожній стан
  return { class: '', content: '', clickable: false, aria: 'Порожньо' };
}