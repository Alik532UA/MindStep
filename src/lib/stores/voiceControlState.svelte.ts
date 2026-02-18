// src/lib/stores/voiceControlState.svelte.ts
// SSoT для голосового керування. Svelte 5 Runes.

/**
 * Тип помилки розпізнавання мовлення
 */
export interface VoiceRecognitionError {
  error: string;
  message?: string;
}

interface VoiceControlState {
    lastTranscript: string;
    volume: number;
    recognitionError: VoiceRecognitionError | Error | null;
}

class VoiceControlStateRune {
    private _state = $state<VoiceControlState>({
        lastTranscript: '',
        volume: 0,
        recognitionError: null,
    });

    get state() { return this._state; }
    set state(value: VoiceControlState) { 
        this._state = value;
        this.notifySubscribers();
    }

    setTranscript(transcript: string) {
        this._state = { ...this._state, lastTranscript: transcript, recognitionError: null };
        this.notifySubscribers();
    }

    setVolume(volume: number) {
        this._state = { ...this._state, volume };
        this.notifySubscribers();
    }

    setError(error: VoiceRecognitionError | Error | null) {
        this._state = { ...this._state, recognitionError: error };
        this.notifySubscribers();
    }

    reset() {
        this._state = { lastTranscript: '', volume: 0, recognitionError: null };
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: VoiceControlState) => void> = new Set();

    subscribe(fn: (s: VoiceControlState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const voiceControlState = new VoiceControlStateRune();
