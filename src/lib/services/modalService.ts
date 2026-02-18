import { modalStateRune } from '$lib/stores/modalState.svelte';
import { navigationService } from './navigationService';
import { gameEventBus } from './gameEventBus';
import { roomService } from './roomService';
import { roomPlayerService } from './room/roomPlayerService';
import { get } from 'svelte/store';
import { t as tStore } from '$lib/i18n/typedI18n';
import type { TranslationKey } from '$lib/types/i18n';
import { locale } from 'svelte-i18n';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { speakText } from './speechService';
import type { Player } from '$lib/models/player';
import type { GameOverPayload, PlayerScoreResult, FinalScoreDetails } from '$lib/stores/gameOverStore';
import { uiState } from '$lib/stores/uiState.svelte';
import GameOverContent from '$lib/components/modals/GameOverContent.svelte';
import SimpleModalContent from '$lib/components/modals/SimpleModalContent.svelte';

interface GameOverModalContent {
  reasonKey: string;
  reason: string;
  scoreDetails: FinalScoreDetails;
  playerScores?: Array<PlayerScoreResult & { playerName: string; playerColor: string; isWinner: boolean; isLoser: boolean }>;
  winnerName?: string;
  winnerNumbers?: string;
}

function showGameOverModal(payload: GameOverPayload) {
  const { reasonKey, reasonValues, finalScoreDetails, winners, gameType } = payload;

  let titleKey = 'modal.gameOverTitle';
  let content: GameOverModalContent = {
    reasonKey: reasonKey,
    reason: get(tStore)(reasonKey as TranslationKey, reasonValues || undefined),
    scoreDetails: finalScoreDetails
  };

  if (gameType === 'training' || gameType === 'virtual-player') {
    titleKey = 'modal.trainingOverTitle';
  } else if (gameType === 'local' || gameType === 'online') {
    titleKey = winners && winners.length === 1 ? 'modal.winnerTitle' : 'modal.drawTitle';
    content.playerScores = payload.scores.map((s: PlayerScoreResult) => ({
      ...s,
      playerName: s.name,
      playerColor: s.color,
      isWinner: winners.some((w: Player) => w.id === s.playerId),
      isLoser: payload.loser !== null && payload.loser.id === s.playerId
    }));

    if (winners && winners.length === 1) {
      content.winnerName = winners[0].name;
    } else if (winners && winners.length > 1) {
      content.winnerNumbers = winners.map((w: Player) => w.name).join(', ');
    }
  }

  if (gameSettingsState.state.speakModalTitles) {
    const speechValues: { winners?: string; winnerName?: string } = { winners: winners ? winners.map((w: Player) => w.name).join(', ') : '' };
    if (winners && winners.length === 1) {
      speechValues.winnerName = winners[0].name;
    }
    const title = get(tStore)(titleKey as TranslationKey, speechValues);
    const lang = get(locale) || 'uk';
    const voiceURI = gameSettingsState.state.selectedVoiceURI;
    speakText(title, lang, voiceURI, undefined);
  }

  // FIX: Використовуємо variant="menu" і передаємо колбеки через props
  modalStateRune.showModal({
    content: content,
    component: GameOverContent,
    variant: 'menu',
    buttons: [], // Кнопки тепер всередині компонента
    closable: false,
    closeOnOverlayClick: false,
    dataTestId: 'game-over-modal',
    props: {
      titleKey,
      titleValues: { winners: winners.map((w: Player) => w.name).join(', '), winnerName: winners[0]?.name },
      mode: 'game-over',
      dataTestId: 'game-over-modal',
      onPlayAgain: () => {
        gameEventBus.dispatch('ReplayGame');
        if (uiState.state.intendedGameType !== 'online') {
          modalStateRune.closeAllModals();
        }
      },
      onWatchReplay: () => {
        gameEventBus.dispatch('RequestReplay');
      },
      onMainMenu: async () => {
        if (gameType === 'online') {
          const session = roomService.getSession();
          if (session.roomId && session.playerId) {
            await roomPlayerService.leaveRoom(session.roomId, session.playerId);
          }
        }
        navigationService.goToMainMenu();
      },
      onLeaveLobby: gameType === 'online' ? async () => {
        const session = roomService.getSession();
        if (session.roomId && session.playerId) {
          await roomPlayerService.leaveRoom(session.roomId, session.playerId);
        }
        navigationService.goTo('/online');
      } : undefined
    }
  });
}

function showBoardResizeModal(newSize: number) {

  modalStateRune.showModal({

    component: SimpleModalContent,

    variant: 'menu',

    dataTestId: 'board-resize-confirm-modal',

    props: {

      titleKey: 'modal.resetScoreTitle',

      contentKey: 'modal.boardResizeContent',

      actions: [

        {

          labelKey: 'modal.confirm',

          variant: 'primary',

          onClick: () => {

            gameEventBus.dispatch('BoardResizeConfirmed', { newSize });

          },

          dataTestId: 'board-resize-confirm-btn'

        },

        {

          labelKey: 'modal.cancel',

          onClick: () => modalStateRune.closeModal(),

          dataTestId: 'board-resize-cancel-btn'

        }

      ]

    }

  });

}



export const modalService = {

  showModal: (params: any) => modalStateRune.showModal(params),

  closeModal: () => modalStateRune.closeModal(),

  closeAllModals: () => modalStateRune.closeAllModals(),

  showGameOverModal,

  showBoardResizeModal,

  subscribe: (fn: any) => modalStateRune.subscribe(fn)

};
