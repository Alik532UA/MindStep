import type { MoveDirectionType } from '$lib/models/Piece';
import { dev } from '$app/environment';

export interface UiState {
  showBoardHiddenInfo: boolean;
  isComputerMoveInProgress: boolean;
  isGameOver: boolean;
  gameOverReasonKey: string | null;
  gameOverReasonValues: Record<string, any> | null;
  selectedDirection: MoveDirectionType | null;
  selectedDistance: number | null;
  isFirstMove: boolean;
  isListening: boolean;
  voiceMoveRequested: boolean;
  intendedGameType: 'training' | 'local' | 'timed' | 'virtual-player' | 'online' | null;
  settingsMode: 'default' | 'competitive';
  isSettingsExpanderOpen: boolean;
  testModeOverrides?: {
    nextComputerMove?: { direction: MoveDirectionType; distance: number };
  };
  // Нові поля для онлайн режиму
  onlinePlayerIndex: number | null; // 0 (Host) або 1 (Guest)
  amIHost: boolean;
  shouldShowGameModeModalOnLoad: boolean;
  isTabVisible: boolean;
}

export const initialUIState: UiState = {
  showBoardHiddenInfo: false,
  isComputerMoveInProgress: false,
  isGameOver: false,
  gameOverReasonKey: null,
  gameOverReasonValues: null,
  selectedDirection: null,
  selectedDistance: null,
  isFirstMove: true,
  isListening: false,
  voiceMoveRequested: false,
  intendedGameType: null,
  settingsMode: 'default',
  isSettingsExpanderOpen: dev,
  onlinePlayerIndex: null,
  amIHost: false,
  shouldShowGameModeModalOnLoad: false,
  isTabVisible: true
};
