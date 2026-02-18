// src/lib/stores/isModalOpenStore.ts
/**
 * @file Derived store for modal open state.
 */

import { derived } from 'svelte/store';
import { modalStateRune } from '$lib/stores/modalState.svelte';

export const isModalOpen = derived(
    modalStateRune,
    ($modalState) => $modalState.isOpen
);
