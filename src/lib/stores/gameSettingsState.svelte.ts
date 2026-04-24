// src/lib/stores/gameSettingsState.svelte.ts
// SSoT для ігрових налаштувань. Svelte 5 Runes.
// Побічні ефекти (boardStore, availableMovesService) залишаються в bridge.

import type { GameSettingsState, GameModePreset } from './gameSettingsTypes';
import { defaultGameSettings } from './gameSettingsDefaults';
import { presetConfigurations } from './gameSettingsPresets';
import { syncGameModeLogic } from '$lib/logic/settingsLogic';
import { uiState } from './uiState.svelte';
import { boardState } from './boardState.svelte';
import { availableMovesService } from '$lib/services/availableMovesService';
import { logService } from "$lib/services/logService.svelte";
import { settingsPersistenceService } from '$lib/services/SettingsPersistenceService';
import { debounce } from '$lib/utils/debounce';

const debouncedSave = debounce((s: GameSettingsState) => settingsPersistenceService.save(s), 300);
const isBrowser = typeof window !== 'undefined';

class GameSettingsStateRune {
    private _state = $state<GameSettingsState>({ ...defaultGameSettings });

    constructor() {
        if (isBrowser) {
            $effect.root(() => {
                $effect(() => {
                    debouncedSave(this._state);
                });
            });
        }
    }

    get state() { return this._state; }
    set state(value: GameSettingsState) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: GameSettingsState) => GameSettingsState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    /**
     * Оновлює налаштування та застосовує бізнес-логіку синхронізації.
     */
    updateSettings(newSettings: Partial<GameSettingsState>) {
        logService.state('[GameSettingsState] updateSettings called with:', newSettings);
        this._state = { ...this._state, ...newSettings };
        this._state = syncGameModeLogic(this._state, uiState.state);
        this.notifySubscribers();
    }

    private subscribers: Set<(s: GameSettingsState) => void> = new Set();

    subscribe(fn: (s: GameSettingsState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }

    /**
     * Скидає налаштування до дефолтних.
     */
    reset() {
        logService.action('[GameSettingsState] Resetting settings to default.');
        this._state = { ...defaultGameSettings };
        this.notifySubscribers();
    }

    /**
     * Скидає гарячі клавіші.
     */
    resetKeybindings() {
        this._state.keybindings = { ...defaultGameSettings.keybindings };
        this.notifySubscribers();
    }

    /**
     * Перемикає видимість дошки.
     */
    toggleShowBoard(forceState?: boolean) {
        logService.state('[GameSettingsState] toggleShowBoard called', { forceState });
        const newState = typeof forceState === 'boolean' ? forceState : !this._state.showBoard;
        
        const updates: Partial<GameSettingsState> = { showBoard: newState };
        if (!newState) {
            updates.showPiece = false;
            updates.showMoves = false;
        } else {
            updates.showPiece = true;
            updates.showMoves = true;
        }
        this.updateSettings(updates);
    }

    /**
     * Перемикає автоматичне приховування дошки.
     */
    toggleAutoHideBoard() {
        this.updateSettings({ autoHideBoard: !this._state.autoHideBoard });
    }

    /**
     * Перемикає режим блокування клітинок.
     */
    toggleBlockMode() {
        const newValue = !this._state.blockModeEnabled;
        this.updateSettings({ blockModeEnabled: newValue });
        boardState.resetCellVisitCounts();
        availableMovesService.updateAvailableMoves();
    }

    /**
     * Перемикає озвучку.
     */
    toggleSpeech() {
        this._state.speechEnabled = !this._state.speechEnabled;
        this.notifySubscribers();
    }

    /**
     * Застосовує пресет ігрового режиму.
     */
    applyPreset(preset: GameModePreset) {
        logService.GAME_MODE(`[GameSettingsState] Applying preset: "${preset}"`);
        const presetSettings = presetConfigurations[preset];

        if (!presetSettings) {
            logService.error(`[GameSettingsState] Unknown preset: "${preset}"`);
            return;
        }

        if (presetSettings.blockModeEnabled !== undefined && presetSettings.blockModeEnabled !== this._state.blockModeEnabled) {
            boardState.resetCellVisitCounts();
            availableMovesService.updateAvailableMoves();
        }

        this.updateSettings(presetSettings);
    }
}

export const gameSettingsState = new GameSettingsStateRune();
