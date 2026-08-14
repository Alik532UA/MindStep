<script lang="ts">
  /**
   * @file URLSyncManager.svelte
   * @description Компонент для синхронізації налаштувань гри з URL.
   * Використовує Svelte 5 runes ($effect).
   */
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
  import { onMount } from 'svelte';
  import { urlSyncService } from '$lib/services/urlSyncService';

  let isInitialized = false;

  onMount(() => {
    // 1. Initial Load (or Route Change): URL -> Settings
    const params = urlSyncService.getParamsFromUrl(page.url);
    if (Object.keys(params).length > 0) {
        // Оновлюємо налаштування без збереження в localStorage (опціонально)? 
        // Ні, нехай зберігаються, це очікувана поведінка.
        gameSettingsState.updateSettings(params);
    }
    
    isInitialized = true;
  });

  // 2. Settings -> URL
  $effect(() => {
    if (!isInitialized) return;

    const settings = gameSettingsState.state;
    // Отримуємо поточний URL з page store, щоб мати актуальний об'єкт
    // Але нам треба бути обережними з циклічними оновленнями.
    // Використовуємо untracked, якщо хочемо уникнути реакції на зміни page.url тут?
    // Ні, просто читаємо page.url один раз.
    const currentUrl = page.url; 
    const url = new URL(currentUrl);
    let changed = false;

    // Helper to sync boolean/number
    const syncParam = (key: string, value: any, defaultValue?: any) => {
        const strVal = String(value);
        if (url.searchParams.get(key) !== strVal) {
             if (value === defaultValue) {
                 if (url.searchParams.has(key)) {
                     url.searchParams.delete(key);
                     changed = true;
                 }
             } else {
                 url.searchParams.set(key, strVal);
                 changed = true;
             }
        }
    };

    // Синхронізуємо конкретні поля
    syncParam('boardSize', settings.boardSize, 8);
    
    // Для showBoard та autoHideBoard
    if (String(settings.showBoard) !== url.searchParams.get('board')) {
        url.searchParams.set('board', String(settings.showBoard));
        changed = true;
    }

    if (String(settings.autoHideBoard) !== url.searchParams.get('autohide')) {
        url.searchParams.set('autohide', String(settings.autoHideBoard));
        changed = true;
    }

    // Блок-режим
    if (String(settings.blockModeEnabled) !== url.searchParams.get('block')) {
        url.searchParams.set('block', String(settings.blockModeEnabled));
        changed = true;
    }

    if (changed) {
        goto(url, { replaceState: true, keepFocus: true, noScroll: true });
    }
  });
</script>
