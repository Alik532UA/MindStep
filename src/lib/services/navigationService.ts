// src/lib/services/navigationService.ts
/**
 * @file Сервіс для навігації.
 */

import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { logService } from './logService';
import { modalStateRune } from '$lib/stores/modalState.svelte';

export const navigationService = {
    goTo(route: string): void {
        try {
            logService.ui('NavigationService: Navigating to', `${base}${route}`);
            modalStateRune.closeAllModals(); // FIX: Гарантовано закриваємо всі модалки
            goto(`${base}${route}`);
        } catch (error) {
            logService.ui('NavigationService: Error navigating to', route, error);
        }
    },

    resumeGame(route: string): void {
        this.goTo(route);
    },

    goToMainMenu(): void {
        try {
            logService.ui('NavigationService: Going to main menu');
            modalStateRune.closeAllModals(); // FIX: Гарантовано закриваємо всі модалки
            goto(`${base}/`);
        } catch (error) {
            logService.ui('NavigationService: Error going to main menu', error);
        }
    },

    goBack(): void {
        try {
            logService.ui('NavigationService: Going back');
            modalStateRune.closeAllModals(); // Також закриваємо при натисканні "Назад"
            history.back();
        } catch (error) {
            logService.ui('NavigationService: Error going back', error);
        }
    }
};