import { get } from 'svelte/store';
import { gameSettingsState } from '../stores/gameSettingsState.svelte';
import type { KeybindingAction } from '../stores/gameSettingsTypes';
import hotkeyService from './hotkeyService';
import { logService } from "./logService.svelte";
import { showArrowKeyHintModal } from './arrowKeyHintService';
import { modalStateRune } from '../stores/modalState.svelte';
import { t as tStore } from '$lib/i18n/typedI18n';
import type { TranslationKey } from '../types/i18n';
import SimpleModalContent from '../components/modals/SimpleModalContent.svelte';

let unsubscribeGameSettings: (() => void) | null = null;
const registeredGameActionHandlers: Partial<Record<KeybindingAction, (event?: KeyboardEvent) => void>> = {};

function showKeyConflictModal(key: string, actions: KeybindingAction[]) {
    logService.action(`[gameHotkeyService] Key '${key}' has a conflict. Showing resolution modal for actions:`, actions);

    const t = get(tStore);

    modalStateRune.showModal({
        component: SimpleModalContent,
        variant: 'menu',
        dataTestId: 'key-conflict-modal',
        props: {
            titleKey: 'modal.keyConflictTitle',
            contentKey: 'modal.keyConflictContent',
            contentValues: { key },
            actions: actions.map(action => ({
                label: t(`gameControls.${action}` as TranslationKey),
                variant: 'primary',
                onClick: () => {
                    logService.action(`[gameHotkeyService] User resolved conflict for '${key}'. Chose action: ${action}`);

                    const settings = gameSettingsState.state;
                    const newKeybindings = { ...settings.keybindings };

                    actions.forEach(conflictingAction => {
                        if (conflictingAction !== action) {
                            const keys = newKeybindings[conflictingAction];
                            if (keys) {
                                newKeybindings[conflictingAction] = keys.filter(k => k !== key);
                            }
                        }
                    });

                    gameSettingsState.updateSettings({
                        keybindings: newKeybindings,
                        keyConflictResolution: { ...settings.keyConflictResolution, [key]: action }
                    });

                    modalStateRune.closeModal();
                }
            }))
        }
    });
}

let lastKeybindingsJson = '';

export function registerGameAction(action: KeybindingAction, handler: (event?: KeyboardEvent) => void) {
    // Змінено на hotkey
    logService.hotkey(`[gameHotkeyService] Registering game action handler: ${action}`);
    registeredGameActionHandlers[action] = handler;
}

export function initializeGameHotkeys() {
    logService.init('[gameHotkeyService] Initializing game hotkeys.');

    if (unsubscribeGameSettings) {
        unsubscribeGameSettings();
    }

    unsubscribeGameSettings = gameSettingsState.subscribe(settings => {
        const currentKeybindingsJson = JSON.stringify(settings.keybindings);
        const currentConflictResolutionJson = JSON.stringify(settings.keyConflictResolution);
        const stateKey = `${currentKeybindingsJson}|${currentConflictResolutionJson}`;

        if (stateKey === lastKeybindingsJson) {
            return;
        }

        lastKeybindingsJson = stateKey;

        // Змінено на hotkey
        logService.hotkey('[gameHotkeyService] Keybindings changed, re-registering all hotkeys.');
        hotkeyService.unregister('game');

        const keyToActionMap = new Map<string, KeybindingAction[]>();
        for (const action in settings.keybindings) {
            const keys = settings.keybindings[action as KeybindingAction];
            if (keys) {
                keys.forEach(key => {
                    if (!keyToActionMap.has(key)) {
                        keyToActionMap.set(key, []);
                    }
                    keyToActionMap.get(key)!.push(action as KeybindingAction);
                });
            }
        }

        keyToActionMap.forEach((actions, key) => {
            const handler = registeredGameActionHandlers[actions[0]];
            if (!handler) return;

            if (actions.length === 1) {
                hotkeyService.register('game', key, handler);
            } else {
                const resolvedAction = settings.keyConflictResolution[key];
                if (resolvedAction && actions.includes(resolvedAction)) {
                    const resolvedHandler = registeredGameActionHandlers[resolvedAction];
                    if (resolvedHandler) {
                        // Змінено на hotkey
                        logService.hotkey(`[gameHotkeyService] Registering '${key}' to resolved action: ${resolvedAction}`);
                        hotkeyService.register('game', key, resolvedHandler);
                    }
                } else {
                    // Змінено на hotkey
                    logService.hotkey(`[gameHotkeyService] Registering '${key}' to conflict resolution modal for actions: ${actions.join(', ')}`);
                    hotkeyService.register('game', key, () => showKeyConflictModal(key, actions));
                }
            }
        });

        hotkeyService.register('game', 'ArrowUp', showArrowKeyHintModal);
        hotkeyService.register('game', 'ArrowDown', showArrowKeyHintModal);
        hotkeyService.register('game', 'ArrowLeft', showArrowKeyHintModal);
        hotkeyService.register('game', 'ArrowRight', showArrowKeyHintModal);
    });
}

export function cleanupGameHotkeys() {
    logService.init('[gameHotkeyService] Cleaning up game hotkeys.');
    if (unsubscribeGameSettings) {
        unsubscribeGameSettings();
        unsubscribeGameSettings = null;
    }
    hotkeyService.unregister('game');
}