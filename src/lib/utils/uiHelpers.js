import { modalStateRune } from '$lib/stores/modalState.svelte';
import { logService } from '$lib/services/logService.js';
import { clearCache } from '$lib/utils/cacheManager.js';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import GameModeModal from '$lib/components/GameModeModal.svelte';
import FAQModal from '$lib/components/FAQModal.svelte';
import SimpleModalContent from '$lib/components/modals/SimpleModalContent.svelte';


export function showGameModeSelector() {
  modalStateRune.showModal({
    dataTestId: 'game-mode-modal',
    component: GameModeModal,
    variant: 'menu',
    buttons: [],
    closeOnOverlayClick: true,
  });
}

export function showGameInfoModal() {
  modalStateRune.showModal({
    dataTestId: 'faq-modal',
    component: FAQModal,
    variant: 'menu',
    buttons: [],
    closeOnOverlayClick: true,
    props: {
      onOk: () => modalStateRune.closeModal(),
      onRules: () => {
        goto(`${base}/rules`);
        modalStateRune.closeModal();
      }
    }
  });
}

export function showClearCacheModal() {
  modalStateRune.showModal({
    component: SimpleModalContent,
    variant: 'menu',
    dataTestId: 'clear-cache-modal',
    props: {
      titleKey: 'mainMenu.clearCacheModal.title',
      contentKey: 'mainMenu.clearCacheModal.content',
      actions: [
        {
          labelKey: 'mainMenu.clearCacheModal.fullClear',
          variant: 'danger',
          onClick: () => {
            logService.ui('Повне очищення кешу', 'info');
            clearCache({ keepAppearance: false });
            modalStateRune.closeModal();
          },
          dataTestId: 'full-clear-cache-btn'
        },
        {
          labelKey: 'mainMenu.clearCacheModal.keepAppearance',
          variant: 'primary',
          onClick: () => {
            logService.ui('Очищення кешу зі збереженням вигляду', 'info');
            clearCache({ keepAppearance: true });
            modalStateRune.closeModal();
          },
          dataTestId: 'keep-appearance-clear-cache-btn'
        },
        {
          labelKey: 'modal.cancel',
          onClick: () => modalStateRune.closeModal(),
          dataTestId: 'cancel-clear-cache-btn'
        }
      ]
    }
  });
}

