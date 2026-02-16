/**
 * @file Сервіс для керування аудіо (музика та звукові ефекти).
 */

import { base } from '$app/paths';
import { logService } from './logService';

// --- Конфігурація ---
const POOL_MAX_SIZE = 5; // Максимальна кількість однакових звуків, що можуть звучати одночасно

// --- Стан ---
let musicInstance: HTMLAudioElement | null = null;
const sfxPools: Record<string, HTMLAudioElement[]> = {};

/**
 * Отримує або створює інстанс фонової музики.
 */
const getMusic = (): HTMLAudioElement | null => {
    if (typeof window === 'undefined') return null;
    if (!musicInstance) {
        musicInstance = new Audio(`${base}/dont-push-the-horses.weba`);
        musicInstance.loop = true;
    }
    return musicInstance;
};

/**
 * Отримує вільний аудіо-об'єкт з пулу або створює новий.
 */
const getFromPool = (path: string): HTMLAudioElement | null => {
    if (typeof window === 'undefined') return null;

    if (!sfxPools[path]) {
        sfxPools[path] = [];
    }

    const pool = sfxPools[path];

    // Шукаємо вільний (той, що не грає зараз)
    let audio = pool.find(a => a.paused || a.ended);

    if (!audio) {
        if (pool.length < POOL_MAX_SIZE) {
            logService.ui(`[AudioPool] Creating new instance for: ${path}`);
            audio = new Audio(path);
            pool.push(audio);
        } else {
            // Якщо пул повний, беремо найстарший і перериваємо його
            logService.ui(`[AudioPool] Pool full for ${path}, reusing oldest instance.`);
            audio = pool[0];
            audio.pause();
            audio.currentTime = 0;
        }
    }

    return audio;
};

export const audioService = {
    /**
     * Розблоковує аудіо після взаємодії користувача.
     * Активує музику та може бути розширено для активації пулів.
     */
    async unlock(): Promise<void> {
        const music = getMusic();
        if (music && music.paused) {
            try {
                await music.play();
                music.pause();
                logService.ui("[Audio] Music unlocked.");
            } catch (e) {
                logService.ui("[Audio] Music unlock failed:", e);
            }
        }
    },

    // --- Керування музикою ---
    playMusic(): void {
        const music = getMusic();
        if (music && music.paused) {
            music.currentTime = 0;
            music.play().catch(e => logService.ui("[Audio] Music play failed:", e));
        }
    },

    pauseMusic(): void {
        const music = getMusic();
        if (music && !music.paused) {
            music.pause();
        }
    },

    setMusicVolume(volume: number): void {
        const music = getMusic();
        if (music) {
            music.volume = Math.max(0, Math.min(1, volume));
        }
    },

    // --- Керування ефектами (Pooling) ---
    /**
     * Відтворює звуковий ефект з використанням пулінгу.
     * @param name Назва файлу в папці static (наприклад, 'click.mp3')
     * @param volume Гучність (0.0 - 1.0)
     */
    playEffect(name: string, volume: number = 0.5): void {
        const path = name.startsWith('http') ? name : `${base}/${name}`;
        const audio = getFromPool(path);
        
        if (audio) {
            audio.volume = Math.max(0, Math.min(1, volume));
            audio.currentTime = 0;
            audio.play().catch(e => logService.ui(`[AudioPool] Effect play failed (${name}):`, e));
        }
    },

    /**
     * Заздалегідь завантажує звуки в пул.
     */
    preloadEffects(names: string[]): void {
        if (typeof window === 'undefined') return;
        names.forEach(name => {
            const path = name.startsWith('http') ? name : `${base}/${name}`;
            getFromPool(path); // Це створить перший інстанс та почне завантаження
        });
    },

    // --- Налаштування ---
    loadVolume(): number {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('expertModeVolume');
            return saved !== null ? parseFloat(saved) : 0.3;
        }
        return 0.3;
    },

    saveVolume(volume: number): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem('expertModeVolume', String(volume));
        }
    },

    // Зворотна сумісність
    play(): void { this.playMusic(); },
    pause(): void { this.pauseMusic(); },
    setVolume(v: number): void { this.setMusicVolume(v); }
};
