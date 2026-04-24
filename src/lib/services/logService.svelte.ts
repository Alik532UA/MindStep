// src/lib/services/logService.svelte.ts
// Сервіс для логування з підтримкою фільтрації в рантаймі.
// Svelte 5 Runes.

import { storageService } from './storage';

const isBrowser = typeof window !== 'undefined';
const STORAGE_KEY = 'log_config';

export interface LogConfig {
    init: boolean;
    ui: boolean;
    action: boolean;
    score: boolean;
    ai: boolean;
    error: boolean;
    info: boolean;
    sync: boolean;
    reward: boolean;
}

const defaultConfig: LogConfig = {
    init: true,
    ui: true,
    action: true,
    score: true,
    ai: true,
    error: true,
    info: true,
    sync: true,
    reward: true
};

let isForceEnabled = false;

// Check localStorage to force logs on production
if (isBrowser && storageService.get('force-logging') === 'true') {
    isForceEnabled = true;
}

function loadConfig(): LogConfig {
    if (!isBrowser) return defaultConfig;
    try {
        const savedConfig = storageService.getJSON<LogConfig>(STORAGE_KEY);
        if (savedConfig) {
            return { ...defaultConfig, ...savedConfig };
        }
    } catch (e) {
        console.error('Failed to load log config', e);
    }
    return defaultConfig;
}

class LogState {
    config = $state<LogConfig>(loadConfig());
    logs = $state<string[]>([]);

    constructor() {
        $effect.root(() => {
            $effect(() => {
                if (isBrowser) {
                    storageService.setJSON(STORAGE_KEY, this.config);
                }
            });
        });
    }

    add(type: keyof LogConfig, message: string, ...args: any[]) {
        const isDev = import.meta.env.DEV;
        
        if (this.config[type] || isForceEnabled || isDev) {
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
            
            // Виводимо в консоль
            if (type === 'error') {
                console.error(logEntry, ...args);
            } else if (isDev || isForceEnabled) {
                console.log(logEntry, ...args);
            }

            // Зберігаємо в пам'яті для звіту (лімітуємо до 500 записів)
            this.logs.push(logEntry + (args.length > 0 ? ' ' + JSON.stringify(args) : ''));
            if (this.logs.length > 500) this.logs.shift();
        }
    }

    getReport(): string {
        return this.logs.join('\n');
    }
}

const logState = new LogState();

export const logService = {
    get config() { return logState.config; },
    init: (msg: string, ...args: any[]) => logState.add('init', msg, ...args),
    ui: (msg: string, ...args: any[]) => logState.add('ui', msg, ...args),
    action: (msg: string, ...args: any[]) => logState.add('action', msg, ...args),
    score: (msg: string, ...args: any[]) => logState.add('score', msg, ...args),
    ai: (msg: string, ...args: any[]) => logState.add('ai', msg, ...args),
    error: (msg: string, ...args: any[]) => logState.add('error', msg, ...args),
    info: (msg: string, ...args: any[]) => logState.add('info', msg, ...args),
    sync: (msg: string, ...args: any[]) => logState.add('sync', msg, ...args),
    reward: (msg: string, ...args: any[]) => logState.add('reward', msg, ...args),
    getLogReport: () => logState.getReport()
};
