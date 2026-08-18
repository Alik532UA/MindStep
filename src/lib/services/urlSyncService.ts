import { goto } from '$app/navigation';
import { logService } from "./logService.svelte";
import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';
import { GameModePresetSchema } from '$lib/schemas/gameSettingsSchema';
import { debounce } from '$lib/utils/debounce';

/**
 * Сервіс для синхронізації стану гри з URL параметрами.
 */
export const urlSyncService = {
    /**
     * Отримує параметри з URL.
     * @param urlObj Об'єкт URL (опціонально). Якщо не передано, використовується window.location.
     */
    getParamsFromUrl(urlObj?: URL) {
        let url: URL;
        
        if (urlObj) {
            url = urlObj;
        } else if (typeof window !== 'undefined') {
            url = new URL(window.location.href);
        } else {
            return {};
        }

        const params: Record<string, any> = {};
        
        const mode = url.searchParams.get('mode');
        if (mode) {
            const validation = GameModePresetSchema.safeParse(mode);
            if (validation.success) {
                params.gameMode = mode;
            }
        }
        
        const size = url.searchParams.get('size');
        if (size) {
            const parsedSize = parseInt(size, 10);
            if (!isNaN(parsedSize) && parsedSize >= 2 && parsedSize <= 20) {
                params.boardSize = parsedSize;
            }
        }
        
        const block = url.searchParams.get('block');
        if (block !== null) {
            params.blockModeEnabled = block === 'true' || block === '1';
        }

        const showBoard = url.searchParams.get('board');
        if (showBoard !== null) {
            params.showBoard = showBoard === 'true' || showBoard === '1';
        }

        const autoHide = url.searchParams.get('autohide');
        if (autoHide !== null) {
            params.autoHideBoard = autoHide === 'true' || autoHide === '1';
        }
        
        return params;
    },

    /**
     * Внутрішній метод для негайного оновлення URL.
     */
    _performUpdate(settings: Partial<GameSettingsState>) {
        if (typeof window === 'undefined') return;
        
        const url = new URL(window.location.href);
        let changed = false;
        
        // Перевіряємо режим
        if (settings.gameMode && url.searchParams.get('mode') !== settings.gameMode) {
            url.searchParams.set('mode', settings.gameMode);
            changed = true;
        }
        
        // Перевіряємо розмір
        if (settings.boardSize && url.searchParams.get('size') !== settings.boardSize.toString()) {
            url.searchParams.set('size', settings.boardSize.toString());
            changed = true;
        }
        
        // Перевіряємо блок-режим
        if (settings.blockModeEnabled !== undefined) {
            const blockVal = settings.blockModeEnabled ? '1' : '0';
            if (url.searchParams.get('block') !== blockVal) {
                url.searchParams.set('block', blockVal);
                changed = true;
            }
        }

        // Перевіряємо видимість дошки
        if (settings.showBoard !== undefined) {
            const boardVal = settings.showBoard ? '1' : '0';
            if (url.searchParams.get('board') !== boardVal) {
                url.searchParams.set('board', boardVal);
                changed = true;
            }
        }

        // Перевіряємо автоприховування
        if (settings.autoHideBoard !== undefined) {
            const autoHideVal = settings.autoHideBoard ? '1' : '0';
            if (url.searchParams.get('autohide') !== autoHideVal) {
                url.searchParams.set('autohide', autoHideVal);
                changed = true;
            }
        }
        
        if (changed) {
            const targetUrl = window.location.pathname + url.search;
            
            // НАВІЩО: Якщо ми вже на цільовому URL — нічого не робимо.
            // Це критично для уникнення циклів навігації та стабільності тестів.
            if (targetUrl === window.location.pathname + window.location.search) {
                return;
            }

            logService.state('[UrlSyncService] Syncing URL (actual change detected):', targetUrl);
            
            goto(targetUrl, { 
                replaceState: true, 
                keepFocus: true, 
                noScroll: true
            }).catch(err => {
                // Ігноруємо помилки переривання навігації (якщо нова почалася швидше)
                if (err?.message !== 'navigation-cancelled') {
                    logService.error('[UrlSyncService] Navigation error:', err);
                }
            });
        }
    },

    /**
     * Оновлює URL параметри на основі налаштувань (з дебаунсом).
     */
    updateUrlFromSettings: debounce((settings: Partial<GameSettingsState>) => {
        urlSyncService._performUpdate(settings);
    }, 300)
};
