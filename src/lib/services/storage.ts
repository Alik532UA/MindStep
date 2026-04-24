/**
 * Storage Service
 * Забезпечує ізоляцію localStorage для проекту MindStep на спільному домені.
 */

const PREFIX = 'mindstep_';

const isBrowser = typeof window !== 'undefined';

export const storageService = {
    /**
     * Отримує значення за ключем
     */
    get(key: string): string | null {
        if (!isBrowser) return null;
        return localStorage.getItem(PREFIX + key);
    },

    /**
     * Зберігає значення
     */
    set(key: string, value: string): void {
        if (!isBrowser) return;
        localStorage.setItem(PREFIX + key, value);
    },

    /**
     * Видаляє значення
     */
    remove(key: string): void {
        if (!isBrowser) return;
        localStorage.removeItem(PREFIX + key);
    },

    /**
     * Очищує ТІЛЬКИ дані цього проекту (з префіксом mindstep_)
     */
    clear(): void {
        if (!isBrowser) return;
        const keysToRemove: string[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith(PREFIX)) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
    },

    /**
     * Отримує JSON-об'єкт
     */
    getJSON<T>(key: string): T | null {
        const raw = this.get(key);
        if (raw === null) return null;
        try {
            return JSON.parse(raw) as T;
        } catch {
            return null;
        }
    },

    /**
     * Зберігає JSON-об'єкт
     */
    setJSON(key: string, value: unknown): void {
        this.set(key, JSON.stringify(value));
    }
};
