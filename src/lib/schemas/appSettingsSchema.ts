import { z } from 'zod';

export const AppSettingsSchema = z.object({
    language: z.enum(['uk', 'en', 'crh', 'nl']).default('uk'),
    /*
     * Три теми з 2026-08-28: `normal` — середній тон між світлою й темною.
     * Типовим стало `normal`, а не `dark`: для чотирьох стилів нинішній темний
     * вигляд отримав саме цю назву, тож новий відвідувач бачить те саме, що
     * бачив досі (рішення автора).
     */
    theme: z.enum(['light', 'normal', 'dark']).default('normal'),
    style: z.enum(['purple', 'green', 'blue', 'gray', 'orange', 'wood']).default('gray')
});

export type AppSettings = z.infer<typeof AppSettingsSchema>;
