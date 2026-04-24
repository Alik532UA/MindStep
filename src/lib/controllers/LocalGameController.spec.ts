import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LocalGameController } from './LocalGameController.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { WIDGETS } from '$lib/stores/layoutState.svelte';

// Mock dependencies
vi.mock('$lib/services/logService.svelte', () => ({
    logService: {
        init: vi.fn(),
        ui: vi.fn(),
        error: vi.fn()
    }
}));

describe('LocalGameController', () => {
    let controller: LocalGameController;

    beforeEach(() => {
        controller = new LocalGameController();
        vi.clearAllMocks();
    });

    describe('shouldShowWidget', () => {
        it('should show TIMER only in timed modes', () => {
            // @ts-expect-error - overriding private state for testing
            gameSettingsState.state = { gameMode: 'local' };
            expect(controller.shouldShowWidget(WIDGETS.TIMER)).toBe(false);

            // @ts-expect-error
            gameSettingsState.state = { gameMode: 'timed' };
            expect(controller.shouldShowWidget(WIDGETS.TIMER)).toBe(true);

            // @ts-expect-error
            gameSettingsState.state = { gameMode: 'virtual-player-timed' };
            expect(controller.shouldShowWidget(WIDGETS.TIMER)).toBe(true);
        });

        it('should hide TIMER in observer mode even if timed', () => {
             // @ts-expect-error
            gameSettingsState.state = { gameMode: 'observer' };
            expect(controller.shouldShowWidget(WIDGETS.TIMER)).toBe(false);
        });

        it('should handle PLAYER_TURN_INDICATOR visibility', () => {
            // Online mode
            // @ts-expect-error
            gameSettingsState.state = { gameMode: 'online' };
            expect(controller.shouldShowWidget(WIDGETS.PLAYER_TURN_INDICATOR)).toBe(true);

            // Virtual player modes (should be hidden)
            // @ts-expect-error
            gameSettingsState.state = { gameMode: 'beginner' };
            expect(controller.shouldShowWidget(WIDGETS.PLAYER_TURN_INDICATOR)).toBe(false);

            // @ts-expect-error
            gameSettingsState.state = { gameMode: 'pro' };
            expect(controller.shouldShowWidget(WIDGETS.PLAYER_TURN_INDICATOR)).toBe(false);
        });

        it('should show other widgets by default', () => {
            // @ts-expect-error
            gameSettingsState.state = { gameMode: 'local' };
            expect(controller.shouldShowWidget('ANY_OTHER_WIDGET')).toBe(true);
        });
    });
});
