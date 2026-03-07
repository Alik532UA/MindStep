import type { ModalState } from '$lib/stores/modalState.svelte';
import LanguageDropdown from '$lib/components/main-menu/LanguageDropdown.svelte';
import ThemeDropdown from '$lib/components/main-menu/ThemeDropdown.svelte';
import AuthModal from '$lib/components/modals/AuthModal.svelte';
import FAQModal from '$lib/components/FAQModal.svelte';
import GameModeModal from '$lib/components/GameModeModal.svelte';
import DevMenu from '$lib/components/main-menu/DevMenu.svelte';
import FeedbackModal from '$lib/components/modals/FeedbackModal.svelte';
import HamburgerMenuModal from '$lib/components/modals/HamburgerMenuModal.svelte';

/**
 * Реєстр модальних вікон для Deep Linking (URL as State).
 * Дозволяє відновлювати модалки після F5 за їхнім dataTestId.
 */
export const MODAL_REGISTRY: Record<string, Partial<ModalState>> = {
    'language-modal': {
        component: LanguageDropdown,
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'theme-modal': {
        component: ThemeDropdown,
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'auth-modal': {
        component: AuthModal,
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'faq-modal': {
        component: FAQModal,
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'game-mode-modal': {
        component: GameModeModal,
        props: { extended: true },
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'dev-menu-modal': {
        component: DevMenu,
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'feedback-modal': {
        component: FeedbackModal,
        variant: 'menu',
        closeOnOverlayClick: true
    },
    'hamburger-menu-modal': {
        component: HamburgerMenuModal,
        variant: 'menu',
        closeOnOverlayClick: true
    }
};
