import { modalStateRune } from '$lib/stores/modalState.svelte';
import hotkeyService from './hotkeyService';
import SimpleModalContent from '../components/modals/SimpleModalContent.svelte';

let hasShownArrowKeyHint = false;

export function showArrowKeyHintModal() {
  if (hasShownArrowKeyHint) return;
  hasShownArrowKeyHint = true;

  const context = 'arrow-key-hint-modal';
  hotkeyService.pushContext(context);

  const closeModal = () => {
    modalStateRune.closeModal();
    hotkeyService.popContext(context);
  };

  modalStateRune.showModal({
    component: SimpleModalContent,
    variant: 'menu',
    dataTestId: 'arrow-key-hint-modal',
    props: {
      titleKey: 'modal.arrowKeyHintTitle',
      contentKey: 'modal.arrowKeyHintContent',
      actions: [
        {
          labelKey: 'modal.ok',
          variant: 'primary',
          isHot: true,
          onClick: closeModal,
          dataTestId: 'arrow-key-hint-ok-btn'
        }
      ]
    }
  });

  hotkeyService.register(context, 'Enter', closeModal);
  hotkeyService.register(context, 'Space', closeModal);
  hotkeyService.register(context, 'Escape', closeModal);
}
