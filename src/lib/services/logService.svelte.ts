// src/lib/services/logService.svelte.ts
// Розумний сервіс для логування з динамічною обробкою груп через Proxy.
// Svelte 5 Runes.

import { storageService } from './storage';
import { untrack } from 'svelte';

const isBrowser = typeof window !== 'undefined';
const STORAGE_KEY = 'log_config';

export interface LogConfig {
    [key: string]: boolean;
}

const initialConfig: LogConfig = {
    init: true,
    ui: true,
    action: true,
    score: true,
    ai: true,
    error: true,
    info: true,
    sync: true,
    reward: true,
    tooltip: true,
    hotkey: true,
    state: true,
    animation: true,
    logicMove: true,
    logicVirtualPlayer: true,
    logicAvailability: true,
    testMode: true,
    modal: true,
    GAME_MODE: true,
    speech: true,
    voiceControl: true,
    presence: true
};

let isForceEnabled = false;

if (isBrowser && storageService.get('force-logging') === 'true') {
    isForceEnabled = true;
}

function loadConfig(): LogConfig {
    if (!isBrowser) return { ...initialConfig };
    try {
        const savedConfig = storageService.getJSON<LogConfig>(STORAGE_KEY);
        if (savedConfig) {
            return { ...initialConfig, ...savedConfig };
        }
    } catch (e) {
        console.error('Failed to load log config', e);
    }
    return { ...initialConfig };
}

/**
 * Безпечне перетворення об'єктів у рядок для звіту (без циклічних посилань)
 */
function safeStringify(args: any[]): string {
    return args.map(arg => {
        if (arg instanceof HTMLElement) return `<${arg.tagName.toLowerCase()} />`;
        if (typeof arg === 'object' && arg !== null) {
            try {
                // Використовуємо JSON.stringify з реплейсером для захисту від циклів
                const cache = new Set();
                return JSON.stringify(arg, (key, value) => {
                    if (typeof value === 'object' && value !== null) {
                        if (cache.has(value)) return '[Circular]';
                        cache.add(value);
                    }
                    return value;
                }, 2);
            } catch (e) {
                return '[Complex Object]';
            }
        }
        return String(arg);
    }).join(' ');
}

class LogState {
    config = $state<LogConfig>(loadConfig());
    logs = $state<string[]>([]);

    constructor() {
        if (isBrowser) {
            $effect.root(() => {
                $effect(() => {
                    const currentConfig = this.config;
                    untrack(() => {
                        storageService.setJSON(STORAGE_KEY, currentConfig);
                    });
                });
            });
        }
    }

    add(type: string, message: string, ...args: any[]) {
        const isDev = import.meta.env.DEV;
        
        untrack(() => {
            if (this.config[type] === undefined) {
                this.config[type] = true;
            }

            if (this.config[type] || isForceEnabled || isDev) {
                const timestamp = new Date().toLocaleTimeString();
                const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
                
                if (type.toLowerCase() === 'error') {
                    console.error(logEntry, ...args);
                } else if (isDev || isForceEnabled) {
                    console.log(logEntry, ...args);
                }

                // Безпечно додаємо в масив логів для звіту
                this.logs.push(logEntry + (args.length > 0 ? ' ' + safeStringify(args) : ''));
                if (this.logs.length > 500) this.logs.shift();
            }
        });
    }

    getReport(): string {
        return untrack(() => this.logs.join('\n'));
    }
}

const logState = new LogState();

const loggerProxy = new Proxy({
    get config() { return logState.config; },
    getLogReport: () => logState.getReport()
} as any, {
    get(target, prop: string) {
        if (prop in target) return target[prop];
        return (msg: string, ...args: any[]) => logState.add(prop, msg, ...args);
    }
});

export const logService = loggerProxy;
