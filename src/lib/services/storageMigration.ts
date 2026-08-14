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
