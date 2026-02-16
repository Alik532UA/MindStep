import { goto } from '$app/navigation';
import { logService } from './logService';
import type { GameSettingsState } from '$lib/stores/gameSettingsStore';
import { GameModePresetSchema } from '$lib/schemas/gameSettingsSchema';
import { debounce } from '$lib/utils/debounce';

/**
 * Сервіс для синхронізації стану гри з URL параметрами.
 */
export const urlSyncService = {
    /**
     * Отримує параметри з URL.
     */
    getParamsFromUrl() {
        if (typeof window === 'undefined') return {};
        
        const url = new URL(window.location.href);
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
                    console.error('[UrlSyncService] Navigation error:', err);
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
