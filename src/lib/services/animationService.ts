// src/lib/services/animationService.ts
import { animationState } from '$lib/stores/animationState.svelte';
import { logService } from './logService';
import { gameModeState } from '$lib/stores/gameModeState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { animationConfig, type AnimationConfigMode, type AnimationConfigPreset } from '$lib/config/animationConfig';
import { gameEventBus } from './gameEventBus';
import type { MoveDirectionType } from '$lib/models/Piece';

function createAnimationService() {
  let unsubscribe: (() => void) | null = null;
  let animationTimeout: NodeJS.Timeout | null = null;

  function addToAnimationQueue(move: { direction: MoveDirectionType; distance: number; player: number }) {
    logService.animation('[AnimationService] addToAnimationQueue:', move);
    animationState.update(state => {
      const newQueue = [...state.animationQueue, move];

      if (!state.isPlayingAnimation) {
        if (animationTimeout) clearTimeout(animationTimeout);
        animationTimeout = setTimeout(() => playNextAnimation(true), 0);
      }
      return { ...state, animationQueue: newQueue };
    });
  }

  function playNextAnimation(isFirstCall = false) {
    if (isFirstCall) {
      animationState.update(s => ({ ...s, isAnimating: true, isPlayingAnimation: true, isComputerMoveCompleted: false, visualMoveQueue: [] }));
    }

    const state = animationState.state;
    if (state.animationQueue.length === 0) {
      animationState.update(s => ({ ...s, isAnimating: false, isPlayingAnimation: false }));
      return;
    }

    const move = state.animationQueue[0];
    animationState.update(s => ({
      ...s,
      visualMoveQueue: [...s.visualMoveQueue, move]
    }));

    const isPlayerMove = move.player === 1;
    const animationDuration = 500;

    const activeMode = gameModeState.state.activeMode;
    const currentPreset = gameSettingsState.state.gameMode;
    const isListening = uiState.state.isListening;

    let pauseValues = { player: 100, computer: 100 };

    if (isListening) {
      pauseValues = { player: 30, computer: 30 };
    } else if (activeMode === 'training' || activeMode === 'virtual-player') {
      const cleanPreset = currentPreset?.replace('virtual-player-', '') as AnimationConfigPreset;

      if (cleanPreset && animationConfig.training[cleanPreset]) {
        pauseValues = animationConfig.training[cleanPreset];
      }
    } else if (activeMode && activeMode in animationConfig) {
      const configForMode = animationConfig[activeMode as AnimationConfigMode];
      if ('player' in configForMode) {
        pauseValues = configForMode as { player: number, computer: number };
      }
    }

    let pauseAfterMove = isPlayerMove ? pauseValues.player : pauseValues.computer;

    if (state.animationQueue.length >= 2) {
      logService.animation(`[AnimationService] Catch-up mode active (queue: ${state.animationQueue.length}). Reducing pause to 1ms.`);
      pauseAfterMove = 1;
    } else {
      logService.animation(`[AnimationService] Playing move. Standard pause: ${pauseAfterMove}ms`);
    }

    if (animationTimeout) clearTimeout(animationTimeout);
    animationTimeout = setTimeout(() => {
      if (!isPlayerMove) {
        animationState.update(s => ({ ...s, isComputerMoveCompleted: true }));
      }
      animationState.update(s => ({
        ...s,
        animationQueue: s.animationQueue.slice(1)
      }));
      playNextAnimation(false);
    }, animationDuration + pauseAfterMove);
  }

  function resetInternal() {
    logService.animation('[AnimationService] reset() called via Event/Method. Clearing state and timeouts.');
    if (animationTimeout) {
      clearTimeout(animationTimeout);
      animationTimeout = null;
    }
    animationState.reset();
  }

  return {
    initialize: () => {
      if (unsubscribe) return;
      logService.init('[AnimationService] Initializing global listeners.');
      
      const unsubMoves = gameEventBus.subscribe('new_move_added', addToAnimationQueue);
      const unsubReset = gameEventBus.subscribe('GAME_RESET', resetInternal);
      // GAME_INITIALIZED також може викликати reset, щоб гарантувати чистоту перед стартом
      const unsubInit = gameEventBus.subscribe('GAME_INITIALIZED', resetInternal);

      unsubscribe = () => {
        unsubMoves();
        unsubReset();
        unsubInit();
      };
    },
    destroy: () => {
      if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
      }
      if (animationTimeout) {
        clearTimeout(animationTimeout);
        animationTimeout = null;
      }
    },
    reset: resetInternal
  };
}

export const animationService = createAnimationService();
