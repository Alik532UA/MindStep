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
