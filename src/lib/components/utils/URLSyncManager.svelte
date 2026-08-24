<script lang="ts">
  /**
   * URL → налаштування, і ЛИШЕ в цей бік.
   *
   * Зворотний напрямок (налаштування → URL) належить `urlSyncService`, який
   * підключений у `routes/game/+layout.svelte`. Доти цей компонент робив те саме
   * своїм `$effect` — і два писарі писали ті самі поля різними словами:
   * `board=true` проти `board=1`. Кожен бачив чуже написання як «змінилося» й
   * переписував через `goto`.
   *
   * Заміряно 2026-08-25 у грі вдвох: сторінка гри навігувалася раз на ~2 секунди
   * без кінця, у консолі щоразу «Navigating away. Heartbeat will stop, allowing
   * reconnection» — тобто серцебиття присутності зупинялося й починалося по колу,
   * а налаштування зберігалися в сховище на кожному оберті. Партія при цьому йшла,
   * тож на око дефекту не було видно ЗОВСІМ.
   */
  import { page } from '$app/state';
  import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
  import { onMount } from 'svelte';
  import { urlSyncService } from '$lib/services/urlSyncService';

  onMount(() => {
    // Глибоке посилання: параметри з адреси стають налаштуваннями один раз, на
    // вході в сторінку гри.
    const params = urlSyncService.getParamsFromUrl(page.url);
    if (Object.keys(params).length > 0) {
      gameSettingsState.updateSettings(params);
    }
  });
</script>
