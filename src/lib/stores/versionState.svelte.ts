// src/lib/stores/versionState.svelte.ts
// SSoT для версії додатку. Svelte 5 Runes.

export interface VersionInfo {
    current: string | null;
    minRequired: string | null;
    updateAvailable: boolean;
}

class VersionStateRune {
    private _state = $state<VersionInfo>({
        current: null,
        minRequired: null,
        updateAvailable: false
    });

    get state() { return this._state; }
    
    setVersion(version: string) {
        this._state.current = version;
        this.notifySubscribers();
    }

    setMinVersion(version: string) {
        this._state.minRequired = version;
        this.notifySubscribers();
    }

    setUpdateAvailable(available: boolean) {
        this._state.updateAvailable = available;
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: VersionInfo) => void> = new Set();

    subscribe(fn: (s: VersionInfo) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const versionState = new VersionStateRune();
