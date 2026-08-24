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
        
        /*
         * ПОРІВНЮЄМО ЗНАЧЕННЯ, А НЕ НАПИСАННЯ.
         *
         * `getParamsFromUrl` читає і `true`, і `1` як істину — тобто написання
         * рівноправні на вході. А писар порівнював РЯДКИ: побачивши `board=true`,
         * він вважав це «інакше» й переписував на `board=1`.
         *
         * Само по собі нешкідливо. Шкода почалася від другого писаря: той писав
         * `String(settings.showBoard)`, тобто `true`. Двоє переписували те саме
         * поле різними словами по колу, кожен раз через `goto` — і сторінка гри
         * НАВІГУВАЛАСЯ ЩОСЕКУНДИ. Заміряно 2026-08-25 у грі вдвох: у консолі раз
         * на ~2 с «Navigating away. Heartbeat will stop», тобто серцебиття
         * присутності зупинялося й починалося без кінця, а налаштування
         * зберігалися в сховище на кожному колі.
         *
         * Другого писаря прибрано (`URLSyncManager.svelte`), але порівняння за
         * значенням лишається тут: воно робить коло НЕМОЖЛИВИМ, а не лише
         * малоймовірним.
         */
        const flagInUrl = (key: string): boolean | null => {
            const raw = url.searchParams.get(key);
            return raw === null ? null : raw === 'true' || raw === '1';
        };

        const syncFlag = (key: string, value: boolean | undefined) => {
            if (value === undefined || flagInUrl(key) === value) return;
            url.searchParams.set(key, value ? '1' : '0');
            changed = true;
        };

        syncFlag('block', settings.blockModeEnabled);
        syncFlag('board', settings.showBoard);
        syncFlag('autohide', settings.autoHideBoard);
        
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
