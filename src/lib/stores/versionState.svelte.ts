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
    }

    setMinVersion(version: string) {
        this._state.minRequired = version;
    }

    setUpdateAvailable(available: boolean) {
        this._state.updateAvailable = available;
    }
}

export const versionState = new VersionStateRune();
