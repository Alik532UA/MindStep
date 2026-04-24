import { LayoutSchema } from '$lib/schemas/layoutSchema';
import { logService } from "$lib/services/logService.svelte";
import { storageService } from '$lib/services/storage';

export const WIDGETS = {
    BOARD_HIDDEN_INFO: 'board-hidden-info',
    TOP_ROW: 'game-board-top-row',
    SCORE_PANEL: 'score-panel',
    BOARD_WRAPPER: 'board-bg-wrapper',
    CONTROLS_PANEL: 'game-controls-panel',
    SETTINGS_EXPANDER: 'settings-expander',
    GAME_INFO: 'game-info-widget',
    PLAYER_TURN_INDICATOR: 'player-turn-indicator',
    TIMER: 'timer-widget',
    GAME_MODE: 'game-mode-widget',
} as const;

export type WidgetId = typeof WIDGETS[keyof typeof WIDGETS];

export interface LayoutColumn {
    id: string;
    widgets: WidgetId[];
}

export type Layout = LayoutColumn[];

export const defaultLayout: Layout = [
    {
        id: 'column-1',
        widgets: [WIDGETS.TOP_ROW, WIDGETS.GAME_INFO, WIDGETS.PLAYER_TURN_INDICATOR, WIDGETS.BOARD_WRAPPER, WIDGETS.SCORE_PANEL],
    },
    {
        id: 'column-2',
        widgets: [WIDGETS.CONTROLS_PANEL],
    },
    {
        id: 'column-3',
        widgets: [WIDGETS.TIMER, WIDGETS.GAME_MODE, WIDGETS.SETTINGS_EXPANDER],
    },
];

const isBrowser = typeof window !== 'undefined';

function loadLayout(): Layout {
    if (!isBrowser) return [...defaultLayout];
    try {
        const savedLayout = storageService.get('gameLayout');
        if (savedLayout) {
            const parsed = JSON.parse(savedLayout);
            const validation = LayoutSchema.safeParse(parsed);

            if (validation.success) {
                return validation.data as Layout;
            } else {
                logService.error('[LayoutState] Invalid layout in storage, using defaults.', validation.error.format());
                return [...defaultLayout];
            }
        }
    } catch (e) {
        logService.error('Failed to load layout from storage', e);
    }
    return [...defaultLayout];
}

function saveLayout(layout: Layout): void {
    if (isBrowser) {
        storageService.set('gameLayout', JSON.stringify(layout));
    }
}

class LayoutStateRune {
    private _state = $state<Layout>(loadLayout());

    get state() { return this._state; }
    set state(value: Layout) {
        this._state = value;
        this.sync();
    }

    update(fn: (s: Layout) => Layout) {
        this._state = fn(this._state);
        this.sync();
    }

    reset() {
        this._state = [...defaultLayout];
        this.sync();
    }

    private sync() {
        saveLayout(this._state);
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: Layout) => void> = new Set();

    subscribe(fn: (s: Layout) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const layoutState = new LayoutStateRune();
