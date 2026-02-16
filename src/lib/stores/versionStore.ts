// src/lib/stores/versionStore.ts
// Bridge pattern: writable-обгортка для Svelte 4.
// SSoT — versionState.svelte.ts (Runes).

import { writable } from 'svelte/store';
import { versionState, type VersionInfo } from './versionState.svelte';

const { subscribe, set: svelteSet } = writable<VersionInfo>(versionState.state);

const syncStore = () => { svelteSet(versionState.state); };

export const appVersion = {
    subscribe,
    setVersion: (version: string) => {
        versionState.setVersion(version);
        syncStore();
    },
    setMinVersion: (version: string) => {
        versionState.setMinVersion(version);
        syncStore();
    },
    setUpdateAvailable: (available: boolean) => {
        versionState.setUpdateAvailable(available);
        syncStore();
    }
};
