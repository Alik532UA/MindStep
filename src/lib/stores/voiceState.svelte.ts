// src/lib/stores/voiceState.svelte.ts
/**
 * @file Стан для керування голосами озвучування.
 */

import { loadAndGetVoices, filterVoicesByLang } from '$lib/services/speechService';
import { VoiceLoader } from '$lib/services/speech/voiceLoader';
import { locale } from 'svelte-i18n';
import { logService } from "$lib/services/logService.svelte";
import { gameSettingsState } from './gameSettingsState.svelte';
import { get } from 'svelte/store';

/**
 * Тип голосу.
 */
export interface Voice {
    name: string;
    lang: string;
    voiceURI: string;
}

class VoiceStateRune {
    private _availableVoices = $state<Voice[]>([]);
    private _isLoading = $state<boolean>(true);

    get availableVoices() { return this._availableVoices; }
    get isLoading() { return this._isLoading; }

    async initializeVoices(): Promise<void> {
        this._isLoading = true;
        const currentLocale = get(locale) || 'uk';
        try {
            const allVoices = await loadAndGetVoices();
            const mainVoices = filterVoicesByLang(allVoices, currentLocale);

            if (currentLocale === 'nl') {
                mainVoices.sort((a: Voice, b: Voice) => {
                    if (a.lang === 'nl-NL' && b.lang !== 'nl-NL') return -1;
                    if (a.lang !== 'nl-NL' && b.lang === 'nl-NL') return 1;
                    return a.name.localeCompare(b.name);
                });
            }

            /*
             * `dedupeByURI` — ОДИН механізм на всі повтори, а не два.
             *
             * Доти тут стояв власний `Set` над `mainVoices`, і він прибирав
             * лише ті англійські голоси, що вже були в основному переліку.
             * Повторів УСЕРЕДИНІ одного переліку він не бачив — а саме вони й
             * приходять від `getVoices()` на пристроях Apple, де той самий
             * голос трапляється в списку кілька разів. Далі keyed `{#each}` у
             * `VoiceList.svelte` кидав `each_key_duplicate`, і вкладка голосу
             * не працювала цілком (див. докблок `VoiceLoader.dedupeByURI`).
             *
             * Тепер повтори прибираються один раз, на фінальному переліку, і
             * порядок «спершу мовні, потім англійські» це зберігає: фільтр
             * лишає ПЕРШЕ входження.
             */
            const merged =
                currentLocale !== 'en'
                    ? [...mainVoices, ...filterVoicesByLang(allVoices, 'en')]
                    : mainVoices;
            this._availableVoices = VoiceLoader.dedupeByURI(merged);

            this.checkDefaultVoice();
        } catch (error) {
            logService.ui("Помилка завантаження голосів:", error);
            this._availableVoices = [];
        }

        this._isLoading = false;
        this.notifySubscribers();
    }

    private checkDefaultVoice() {
        if (this._availableVoices.length > 0) {
            const settings = gameSettingsState.state;
            if (!settings.selectedVoiceURI) {
                gameSettingsState.updateSettings({ selectedVoiceURI: this._availableVoices[0].voiceURI });
                logService.ui(`Default voice reactively selected: ${this._availableVoices[0].name}`);
            }
        }
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: Voice[]) => void> = new Set();

    subscribe(fn: (s: Voice[]) => void): () => void {
        fn(this._availableVoices);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._availableVoices));
    }
}

export const voiceState = new VoiceStateRune();

// Side effects
locale.subscribe(newLocale => {
    if (newLocale) {
        logService.ui(`Locale changed to ${newLocale}, re-initializing voices.`);
        voiceState.initializeVoices();
    }
});
