/**
 * Storage Migration Service
 * Переносить старі дані (без префікса) у нову систему з префіксом mindstep_.
 */
import { storageService } from './storage';
import { logService } from './logService.svelte';
import { STORAGE_PREFIX as PREFIX } from '$lib/config/storage';
const MIGRATION_KEY = 'migrated_to_v5';

export function migrateStorage(): void {
    if (typeof localStorage === 'undefined') return;

    // ДО прапорця: ключі меню перейменовані пізніше за міграцію v5, тому в
    // більшості браузерів прапорець уже стоїть, а старі ключі ще лежать.
    // Прохід самозавершний — коли переносити нічого, він нічого й не робить.
    migrateFlexibleMenuKeys();

    migrateThemeToThreeThemes();

    // Якщо міграція вже була проведена, нічого не робимо
    if (storageService.get(MIGRATION_KEY)) return;

    logService.init('[StorageMigration] Starting migration to prefixed storage...');

    // Карта старих ключів та їх нових назв
    const mapping: Record<string, string> = {
        'theme': 'theme',
        'style': 'style',
        'language': 'language',
        'gameLayout': 'gameLayout',
        'expertModeVolume': 'expertModeVolume',
        'online_playerName': 'online_playerName',
        'local_best_time_score': 'local_best_time_score',
        'sotb_rewards': 'rewards', // Оптимізуємо назву при нагоді
        'force-logging': 'force-logging'
    };

    for (const [oldKey, newKey] of Object.entries(mapping)) {
        const value = localStorage.getItem(oldKey);
        
        // Якщо старе значення існує, а нове (з префіксом) ще ні
        if (value !== null && storageService.get(newKey) === null) {
            storageService.set(newKey, value);
            // Видаляємо старий ключ, щоб очистити глобальний простір
            localStorage.removeItem(oldKey);
            logService.init(`[StorageMigration] Migrated: ${oldKey} -> ${PREFIX}${newKey}`);
        }
    }

    storageService.set(MIGRATION_KEY, 'true');
    logService.init('[StorageMigration] Migration completed successfully.');
}

/**
 * Стан меню зберігалося ключем `flexibleMenu:<назва>` без префікса.
 *
 * У таблиці вище його немає й бути не може: назва частина ключа, тобто ключів
 * стільки, скільки меню в застосунку. Тому вони переносяться перебором.
 *
 * Викликається ДО перевірки прапорця `migrated_to_v5`. Інакше не спрацювало б
 * там, де воно найпотрібніше: перейменування ключів меню сталося пізніше за
 * міграцію v5, тож у більшості браузерів прапорець уже стоїть, і рання
 * відмова `migrateStorage` пропустила б цей прохід назавжди.
 */
export function migrateFlexibleMenuKeys(): void {
    if (typeof localStorage === 'undefined') return;

    const legacy: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('flexibleMenu:')) legacy.push(key);
    }

    for (const oldKey of legacy) {
        const value = localStorage.getItem(oldKey);
        if (value !== null && storageService.get(oldKey) === null) {
            storageService.set(oldKey, value);
        }
        localStorage.removeItem(oldKey);
        logService.init(`[StorageMigration] Migrated: ${oldKey} -> ${PREFIX}${oldKey}`);
    }
}

/**
 * Збережене `theme: 'dark'` → `'normal'` для чотирьох стилів із шести.
 *
 * ## Чому міграція ПО-СТИЛЮ, а не одним рядком
 *
 * З 2026-08-28 тем три, і мапінг НЕ однорідний (рішення автора):
 *
 * | стиль | нинішній темний вигляд | що з ним стало |
 * |---|---|---|
 * | purple, green, gray, orange | став «звичайним» | `dark` → `normal` |
 * | blue, wood | лишився темним | `dark` лишається `dark` |
 *
 * Тобто людина, яка відкриє гру після оновлення, побачить РІВНО те, що бачила
 * вчора; нова, глибша темна (або новий стандарт для blue/wood) лишається
 * свідомим вибором, а не сюрпризом.
 *
 * Одним рядком це зробити не можна: `dark → normal` для всіх забрало б у тих,
 * хто обрав темний blue або wood, саму темну тему.
 *
 * ## Чому прапорець окремий від `migrated_to_v5`
 *
 * Той прапорець уже стоїть майже в усіх браузерах — тобто гілка під ним не
 * виконається. Ця міграція мусить пройти в кожного, тож має власний ключ і
 * стоїть ДО перевірки старого прапорця.
 */
const THEME_MIGRATION_KEY = 'migrated_theme_three';

/** Стилі, у яких нинішній темний вигляд отримав назву «звичайний». */
const DARK_BECAME_NORMAL = ['purple', 'green', 'gray', 'orange'];

function migrateThemeToThreeThemes(): void {
    if (storageService.get(THEME_MIGRATION_KEY)) return;

    const theme = storageService.get('theme');
    const style = storageService.get('style');

    if (theme === 'dark' && style !== null && DARK_BECAME_NORMAL.includes(style)) {
        storageService.set('theme', 'normal');
        logService.init(
            `[StorageMigration] Тема dark → normal для стилю ${style}: вигляд не змінюється, змінюється лише назва`
        );
    }

    storageService.set(THEME_MIGRATION_KEY, 'true');
}
