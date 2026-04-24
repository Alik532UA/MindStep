// src/lib/stores/layoutState.svelte.ts
import { LayoutSchema, type Layout } from '$lib/schemas/layoutSchema';
import { logService } from '$lib/services/logService.svelte';
import { storageService } from '$lib/services/storage';

const isBrowser = typeof window !== 'undefined';

const defaultLayout: Layout = [
    { id: 'left-menu', position: { x: 0, y: 0 }, isVisible: true },
    { id: 'right-menu', position: { x: 0, y: 0 }, isVisible: true },
    { id: 'center-info', position: { x: 0, y: 0 }, isVisible: true },
    { id: 'game-board', position: { x: 0, y: 0 }, isVisible: true },
];

function loadLayout(): Layout {
    if (!isBrowser) return [...defaultLayout];
    try {
        const savedLayout = storageService.get('gameLayout');
        if (savedLayout) {
            const parsed = JSON.parse(savedLayout);
            const validation = LayoutSchema.safeParse(parsed);
            if (validation.success) {
                return validation.data;
            } else {
                logService.error('[LayoutState] Invalid layout in localStorage, using defaults.', validation.error.format());
                return [...defaultLayout];
            }
        }
    } catch (e) {
        logService.error('Failed to load layout from localStorage', e);
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

    updateWidget(id: string, updates: Partial<Layout[0]>) {
        this._state = this._state.map(w => 
            w.id === id ? { ...w, ...updates } : w
        );
        saveLayout(this._state);
    }

    reset() {
        this._state = [...defaultLayout];
        saveLayout(this._state);
    }
}

export const layoutState = new LayoutStateRune();
