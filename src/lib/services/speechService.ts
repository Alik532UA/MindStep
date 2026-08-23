// speechService.ts: централізований сервіс для озвучення ходів, повідомлень тощо.
import { logService } from "$lib/services/logService.svelte";
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { playerState } from '$lib/stores/playerState.svelte';
import type { MoveDirectionType } from '$lib/models/Piece';
import { VoiceLoader } from './speech/voiceLoader';

// Прямий імпорт усіх необхідних перекладів
import ukTranslations from '$lib/i18n/uk/speech.js';
import enTranslations from '$lib/i18n/en/speech.js';
import crhTranslations from '$lib/i18n/crh/speech.js';
import nlTranslations from '$lib/i18n/nl/speech.js';

// Типи для перекладів озвучення
interface SpeechTranslations {
    directions: Record<MoveDirectionType, string>;
    testPhrase: string;
}

type SupportedLanguage = 'uk' | 'en' | 'crh' | 'nl';

const speechTranslations: Record<SupportedLanguage, SpeechTranslations> = {
    uk: ukTranslations as SpeechTranslations,
    en: enTranslations as SpeechTranslations,
    crh: crhTranslations as SpeechTranslations,
    nl: nlTranslations as SpeechTranslations
};

// Черга повідомлень для озвучення
interface QueuedUtterance {
    text: string;
    lang: string;
    voiceURI: string | null;
    onEnd?: () => void;
    force?: boolean;
}

let speechQueue: QueuedUtterance[] = [];
let isSpeaking = false;
let speechTimeout: any = null;

/**
 * Очищує чергу озвучення.
 */
export function clearSpeechQueue(): void {
    speechQueue = [];
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    if (speechTimeout) {
        clearTimeout(speechTimeout);
        speechTimeout = null;
    }
    logService.speech('[Speech] Queue cleared.');
}

// Експортуємо функції-обгортки для зворотної сумісності
export function loadAndGetVoices(): Promise<SpeechSynthesisVoice[]> {
    return VoiceLoader.loadAndGetVoices();
}

export function resetVoicesPromise(): void {
    VoiceLoader.resetCache();
}

export function filterVoicesByLang(voiceList: SpeechSynthesisVoice[], langCode: string): SpeechSynthesisVoice[] {
    return VoiceLoader.filterVoicesByLang(voiceList, langCode);
}

// Ініціюємо завантаження при першому імпорті файлу
loadAndGetVoices();

// Тип для об'єкта ходу
interface MoveData {
    direction: MoveDirectionType;
    distance: number;
}

/**
 * Озвучує ігровий хід.
 */
export function speakMove(
    move: MoveData,
    lang: string,
    voiceURI: string | null,
    onEndCallback?: () => void,
    force: boolean = false
): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !move) {
        if (onEndCallback) onEndCallback();
        return;
    }

    const settings = gameSettingsState.state;

    if (!settings.speechEnabled) {
        logService.speech('[Speech] speakMove: Speech is globally disabled.');
        if (onEndCallback) setTimeout(() => onEndCallback(), 100);
        return;
    }

    let shouldSpeak = false;

    if (force) {
        shouldSpeak = true;
        logService.speech('[Speech] speakMove: Forced speech (settings checks bypassed).');
    } else {
        const pState = playerState.state;
        if (pState) {
            const currentPlayer = pState.players[pState.currentPlayerIndex];
            shouldSpeak = currentPlayer &&
                (currentPlayer.isComputer ? settings.speechFor.computer : settings.speechFor.player);
        }
    }

    if (!shouldSpeak) {
        logService.speech('[Speech] speakMove: Speech logic determined NOT to speak.');
        if (onEndCallback) {
            setTimeout(() => onEndCallback(), 100);
        }
        return;
    }

    const allVoices = speechSynthesis.getVoices();
    if (allVoices.length === 0) {
        logService.ui('[Speech] speakMove called, but no voices are available.');
        loadAndGetVoices();
        if (onEndCallback) onEndCallback();
        return;
    }

    // Отримуємо мову для вибору перекладів
    const voicesForLang = filterVoicesByLang(allVoices, lang);
    const firstVoice = voicesForLang[0];
    const actualLangCode = firstVoice ? firstVoice.lang.split(/[-_]/)[0].toLowerCase() : lang.split(/[-_]/)[0].toLowerCase();

    const translations = (actualLangCode in speechTranslations)
        ? speechTranslations[actualLangCode as SupportedLanguage]
        : speechTranslations['en'];

    const directionText = translations.directions[move.direction] || move.direction;
    const distanceText = String(move.distance);

    let textToSpeak: string;

    if (settings.shortSpeech && move.distance === 1) {
        textToSpeak = directionText;
    } else {
        if (settings.speechOrder === 'dist_dir') {
            textToSpeak = `${distanceText} ${directionText}`;
        } else {
            textToSpeak = `${directionText} ${distanceText}`;
        }
    }

    logService.speech(`[Speech] Generating text for "${actualLangCode}": "${textToSpeak}"`);
    speakText(textToSpeak, lang, voiceURI, onEndCallback, force);
}

/**
 * Озвучує текст через чергу.
 */
export function speakText(
    textToSpeak: string,
    lang: string,
    voiceURI: string | null,
    onEndCallback?: () => void,
    force: boolean = false
): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !textToSpeak) {
        if (onEndCallback) onEndCallback();
        return;
    }

    // Якщо це форсоване повідомлення (наприклад, перемога), очищуємо чергу
    if (force) {
        clearSpeechQueue();
    }

    speechQueue.push({
        text: textToSpeak,
        lang: lang,
        voiceURI: voiceURI,
        onEnd: onEndCallback,
        force: force
    });

    // Якщо черга занадто велика (затримка), видаляємо старі повідомлення ходів
    if (speechQueue.length > 3) {
        logService.speech('[Speech] Queue too long, trimming...');
        speechQueue = speechQueue.filter(item => item.force || item === speechQueue[speechQueue.length - 1]);
    }

    processQueue();
}

/**
 * Обробляє чергу озвучення.
 */
function processQueue(): void {
    if (isSpeaking || speechQueue.length === 0) return;

    isSpeaking = true;
    const item = speechQueue.shift();
    if (!item) {
        isSpeaking = false;
        return;
    }

    const allVoices = speechSynthesis.getVoices();
    if (allVoices.length === 0) {
        logService.speech('[Speech] No voices available, waiting for voices...');
        loadAndGetVoices().then((voices) => {
            if (voices.length === 0) {
                logService.speech('[Speech] Still no voices available, giving up on this speech item.');
                isSpeaking = false;
                if (item.onEnd) item.onEnd();
                processQueue();
            } else {
                isSpeaking = false;
                speechQueue.unshift(item);
                processQueue();
            }
        });
        return;
    }

    const settings = gameSettingsState.state;
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.rate = settings.speechRate || 1.0;
    utterance.pitch = 1.0;

    const voiceToUseURI = item.voiceURI || settings.selectedVoiceURI;
    let selectedVoice: SpeechSynthesisVoice | null = null;

    if (voiceToUseURI) {
        selectedVoice = allVoices.find(v => v.voiceURI === voiceToUseURI) || null;
    }

    if (!selectedVoice) {
        const availableVoices = filterVoicesByLang(allVoices, item.lang);
        // Пріоритет локальним голосам для стабільності
        selectedVoice = availableVoices.find(v => v.localService) || availableVoices[0] || null;
    }

    if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
    } else {
        utterance.lang = item.lang;
    }

    const finishSpeak = () => {
        if (speechTimeout) {
            clearTimeout(speechTimeout);
            speechTimeout = null;
        }
        isSpeaking = false;
        if (item.onEnd) item.onEnd();
        processQueue();
    };

    utterance.onend = finishSpeak;
    utterance.onerror = (e) => {
        logService.speech('[Speech] Utterance error:', e);
        finishSpeak();
    };

    // Fallback: якщо onend не спрацював протягом 5 секунд (баг Chrome/Safari)
    speechTimeout = setTimeout(() => {
        logService.speech('[Speech] Utterance timeout reached.');
        window.speechSynthesis.cancel();
        finishSpeak();
    }, 5000);

    logService.speech(`[Speech] Speaking: "${item.text}"`);
    window.speechSynthesis.speak(utterance);
}

/**
 * Озвучує тестову фразу.
 */
export function speakTestPhrase(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const settings = gameSettingsState.state;
    const allVoices = speechSynthesis.getVoices();
    if (allVoices.length === 0) {
        loadAndGetVoices();
        return;
    }

    let voiceToUse: SpeechSynthesisVoice | null = null;
    if (settings.selectedVoiceURI) {
        voiceToUse = allVoices.find(v => v.voiceURI === settings.selectedVoiceURI) || null;
    }

    if (!voiceToUse && allVoices.length > 0) {
        voiceToUse = allVoices[0];
    }

    if (!voiceToUse) return;

    const voiceLang = voiceToUse.lang;
    const langCode = voiceLang.split(/[-_]/)[0].toLowerCase();

    const translations = (langCode in speechTranslations)
        ? speechTranslations[langCode as SupportedLanguage]
        : speechTranslations['en'];

    const phrase = translations.testPhrase;

    if (!phrase) return;

    speakText(phrase, voiceLang, voiceToUse.voiceURI, undefined, true);
}