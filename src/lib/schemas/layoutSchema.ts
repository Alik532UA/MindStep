import { z } from 'zod';

export const WidgetIdSchema = z.enum([
    'board-hidden-info',
    'game-board-top-row',
    'score-panel',
    'board-bg-wrapper',
    'game-controls-panel',
    'settings-expander',
    'game-info-widget',
    'player-turn-indicator',
    'timer-widget',
    'game-mode-widget'
]);

export const LayoutColumnSchema = z.object({
    id: z.string(),
    widgets: z.array(WidgetIdSchema)
});

export const LayoutSchema = z.array(LayoutColumnSchema);

export type WidgetId = z.infer<typeof WidgetIdSchema>;
export type LayoutColumn = z.infer<typeof LayoutColumnSchema>;
export type Layout = z.infer<typeof LayoutSchema>;
