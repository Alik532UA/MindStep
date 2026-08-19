// src/lib/stores/gameSettingsDefaults.ts
/**
 * @file Default values for game settings.
 * @description Contains all default values for game settings.
 * Extracted to reduce file size and improve maintainability.
 */

import type { GameSettingsState, KeybindingAction } from './gameSettingsTypes';

/**
 * Дефолтні гарячі клавіші.
 */
export const defaultKeybindings: Record<KeybindingAction, string[]> = {
    // Напрямки (Numpad + QWEASDZXC)
    'up-left': ['Numpad7', 'KeyQ'],
    'up': ['Numpad8', 'KeyW'],
    'up-right': ['Numpad9', 'KeyE'],
    'left': ['Numpad4', 'KeyA'],
    'right': ['Numpad6', 'KeyD'],
    'down-left': ['Numpad1', 'KeyZ'],
    'down': ['Numpad2', 'KeyX', 'KeyS'],
    'down-right': ['Numpad3', 'KeyC'],

    // Дії
    'confirm': ['Numpad5', 'Enter', 'Space', 'NumpadEnter', 'KeyS'],
    'no-moves': ['NumpadDecimal', 'Backspace'],

    // Відстані
    'distance-1': ['Digit1'],
    'distance-2': ['Digit2'],
    'distance-3': ['Digit3'],
    'distance-4': ['Digit4'],
    'distance-5': ['Digit5'],
    'distance-6': ['Digit6'],
    'distance-7': ['Digit7'],
    'distance-8': ['Digit8'],

    // Налаштування
    'toggle-block-mode': ['NumpadMultiply', 'KeyB'],
    'toggle-board': ['NumpadDivide', 'KeyH'],
    'increase-board': ['NumpadAdd', 'Equal'],
    'decrease-board': ['NumpadSubtract', 'Minus'],
    /*
     * `M` (звук), а не `V`.
     *
     * Дві причини, і обидві важать.
     *
     * `V` зарезервована під службове табло версії й логу — серію натискань, яка
     * має бути однаковою в усіх проєктах (HOTKEYS-v8 § 1.1, § 4). Звичайна дія на
     * тій самій літері означала б, що жест або не спрацює, або спрацює разом із
     * нею.
     *
     * `M` — бо в канонічній карті це «звук», а озвучення ходів тут єдиний
     * перемикач, який на звук впливає: ні глушника музики, ні окремого регулятора
     * ефектів у проєкті немає (`audioService` має лише `setMusicVolume`). Якщо
     * колись з'явиться глушник музики — він забирає `M`, а озвучення переїжджає,
     * бо «звук» для відвідувача означає саме тишу в колонках.
     */
    'toggle-speech': ['KeyM'],
    'auto-hide-board': ['Numpad0'],
    'show-help': ['KeyI'],
    'main-menu': ['Escape'],

    /*
     * ТЕМА Й МОВА лишаються порожніми ТУТ — і це рішення, а не забуття.
     *
     * `T` і `L` зареєстровані в контексті `global` (`+layout.svelte`), бо тема й
     * мова потрібні на кожному екрані, а не лише під час партії: цей перелік діє
     * в контексті `game`. Прописати їх ще й тут означало б дві реєстрації на ту
     * саму літеру, і `showKeyConflictModal` питав би про конфлікт, якого немає.
     *
     * Дії лишаються в переліку, щоб їх можна було ПРИЗНАЧИТИ вручну: людина, якій
     * `T` незручна, вписує свою клавішу, і саме це виконує WCAG SC 2.1.4
     * (HOTKEYS-v8 § 3, шлях 2).
     */
    'toggle-theme': [],
    'toggle-language': []
};

/**
 * Дефолтні налаштування гри.
 * Використовується при ініціалізації та скиданні налаштувань.
 */
export const defaultGameSettings: GameSettingsState = {
    // Візуальні налаштування дошки
    showMoves: true,
    showBoard: true,
    showPiece: true,
    autoHideBoard: true,
    showGameInfoWidget: 'compact',

    // Розмір дошки
    boardSize: 4,

    // Block Mode
    blockModeEnabled: false,
    blockOnVisitCount: 0,

    // Звукові налаштування
    speechEnabled: true,
    selectedVoiceURI: null,
    speechRate: 1.4,
    speechOrder: 'dist_dir',
    shortSpeech: true,
    speechFor: {
        player: false,
        computer: true,
        // Defaults for Online Mode (FIXED)
        onlineMyMove: false,
        onlineOpponentMove: true
    },
    speakModalTitles: true,

    // Режим гри
    gameMode: 'experienced',
    rememberGameMode: true,
    showGameModeModal: true,
    showDifficultyWarningModal: true,
    lockSettings: false,
    settingsLocked: false, // За замовчуванням розблоковано

    // Таймер
    turnDuration: 30,

    // Гарячі клавіші
    keybindings: defaultKeybindings,
    keyConflictResolution: {},
};