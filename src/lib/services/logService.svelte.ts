// src/lib/services/logService.svelte.ts
// Розумний сервіс для логування з динамічною обробкою груп через Proxy.
// Svelte 5 Runes.

import { storageService } from './storage';
import { untrack } from 'svelte';

const isBrowser = typeof window !== 'undefined';
const STORAGE_KEY = 'log_config';

export interface LogConfig {
    // Індексна підпис лишається навмисно: сюди приходить те, що ЛЕЖИТЬ У
    // СХОВИЩІ, а там можуть бути теми зі старіших версій застосунку.
    [key: string]: boolean;
}

/**
 * Теми логування та їхній типовий стан. Це ЄДИНЕ місце, де вони перелічені:
 * тип `LogTopic` виводиться звідси, а не дублює список окремо. Продубльований
 * перелік розійшовся б із цим на першій же новій темі — і розходження було б
 * видно лише як «чомусь не типізується» (AI-AGENT-PITFALLS-v8 § 4).
 *
 * Ключі — ідентифікатори, а не рядки в лапках, і це має значення: інваріанти
 * `cloud-database.spec.ts` шукають у джерелах рядкові літерали з назвами
 * колекцій Firestore. Тема, чия назва збігається з назвою колекції, у лапках
 * прочиталася б там як звернення до бази — і перевірка, яка стежить за
 * дзеркалом присутності, впала б на файлі логера.
 */
const initialConfig = {
    init: true,
    ui: true,
    action: true,
    score: true,
    ai: true,
    error: true,
    warn: true,
    info: true,
    sync: true,
    reward: true,
    tooltip: false,
    hotkey: false,
    state: true,
    animation: false,
    logicMove: true,
    logicVirtualPlayer: true,
    logicAvailability: false,
    testMode: true,
    modal: true,
    GAME_MODE: true,
    speech: false,
    voiceControl: true,
    presence: true
} satisfies LogConfig;

/**
 * Закритий перелік тем.
 *
 * Навіщо він з'явився. Проксі нижче віддавав функцію логування на будь-яку
 * властивість і був типізований `as any`, тож `logService.щоЗавгодно` бачився
 * компілятору робочим кодом. Двоє органів керування зневадженням через це
 * були мовчазними заглушками: `logService.errorCount` (кнопка копіювання
 * логів) повертав ФУНКЦІЮ, а `function > 0` — це `false`, тобто кнопка не
 * з'являлася ніколи; `logService.forceEnableLogging()` замість увімкнення
 * логування дописував рядок із темою `FORCEENABLELOGGING`. Обидва — рівно той
 * випадок, який AI-AGENT-PITFALLS-v8 § 3 називає «файл є, отже працює»: код на
 * місці, ніхто не перевіряв досяжність.
 *
 * Тепер перелік тем — тип, і `logService.<друкарська помилка>` валить
 * `svelte-check`.
 */
export type LogTopic = keyof typeof initialConfig;

const LOG_TOPICS = Object.keys(initialConfig) as readonly LogTopic[];

type LogFn = (message: string, ...args: unknown[]) => void;

export type LogService = Record<LogTopic, LogFn> & {
    readonly config: LogConfig;
    readonly version: string;
    /** Скільки помилок сталося за сесію. Кнопка копіювання логів живе з цього. */
    readonly errorCount: number;
    getLogReport(): string;
    /** Увімкнути всі теми до кінця сесії — прихований жест у панелі керування. */
    forceEnableLogging(): void;
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
    errorCount = $state(0);
    version = __APP_VERSION__;

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

    add(type: string, message: string, ...args: unknown[]) {
        const isDev = import.meta.env.DEV;

        // Лічильник рахує ВСІ помилки, а не лише ті, чия тема увімкнена:
        // вимкнена тема — це про шум у консолі, а не про «помилки не було».
        if (type.toLowerCase() === 'error') this.errorCount += 1;

        untrack(() => {
            if (this.config[type] === undefined) {
                this.config[type] = true;
            }

            if (this.config[type] || isForceEnabled || isDev) {
                // Час у форматі UTC hh:mm:ss.mmm, а не toLocaleTimeString().
                //
                // Цей рядок іде не лише в консоль розробника: нижче він
                // потрапляє в `this.logs`, тобто в КОЖЕН рядок звіту, який
                // гравець копіює кнопкою. toLocaleTimeString() рендериться в
                // локалі СИСТЕМИ гравця: `3:05:12 PM` в одній, `15:05:12` в
                // іншій, а подекуди й іншими цифрами. Звіт читає той, хто
                // розбирає збій, і зіставляти події за таким часом ніяк
                // (I18N-v8 § 4.3).
                const timestamp = new Date().toISOString().slice(11, 23);
                const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
                
                if (type.toLowerCase() === 'error') {
                    console.error(logEntry, ...args);
                } else if (isDev || isForceEnabled) {
                    // `warn` окремим каналом: DevTools дає йому власний фільтр
                    // і стек, а очікуваних збоїв (офлайн, відмова сховища) тут
                    // рівно цей рівень (DEBUGGING-v8 § 1.3).
                    if (type.toLowerCase() === 'warn') console.warn(logEntry, ...args);
                    else console.log(logEntry, ...args);
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

    /**
     * Вмикає всі теми й запам'ятовує це у сховищі. Викликається прихованим
     * жестом (три кліки по підпису панелі керування) — щоб зібрати звіт із
     * пристрою гравця, до якого немає доступу.
     */
    forceEnableLogging(): void {
        isForceEnabled = true;
        storageService.set('force-logging', 'true');
        this.add('init', '[logService] логування увімкнено вручну на цю сесію');
    }
}

const logState = new LogState();

/**
 * Явні члени проксі. Усе, що не тут і не в переліку тем, — друкарська помилка,
 * і тепер це видно компілятору.
 */
const facade = {
    get config() { return logState.config; },
    get version() { return logState.version; },
    get errorCount() { return logState.errorCount; },
    getLogReport: () => logState.getReport(),
    forceEnableLogging: () => logState.forceEnableLogging()
};

const loggerProxy = new Proxy(facade, {
    get(target, prop) {
        if (prop in target) return target[prop as keyof typeof target];
        // Невідома тема все ще стає рядком у звіті, а не винятком: логер не має
        // права нічого кидати (DEBUGGING-v8 § 1.5), а межу тепер тримає тип.
        return (msg: string, ...args: unknown[]) => logState.add(String(prop), msg, ...args);
    }
}) as unknown as LogService;

export const logService = loggerProxy;

/** Для інваріанта: перелік тем мусить збігатися з тим, що знає тип. */
export const LOG_TOPIC_NAMES: readonly string[] = LOG_TOPICS;
