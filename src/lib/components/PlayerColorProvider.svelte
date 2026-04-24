<script lang="ts">
  /**
   * PlayerColorProvider
   * Оновлює глобальну CSS змінну --current-player-shadow-color на основі кольору поточного гравця.
   * Використовує Svelte 5 Runes.
   */
  import { derivedState } from '$lib/stores/derivedState.svelte';

  /**
   * Конвертує hex у rgba
   */
  function hexToRgba(hex: string, alpha: number): string {
    if (!hex || !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      return 'rgba(0,0,0,0)';
    }
    let c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    const num = parseInt(c.join(''), 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Використовуємо $effect для синхронізації з DOM
  $effect(() => {
    const color = derivedState.currentPlayerColor;
    if (color) {
      document.documentElement.style.setProperty('--current-player-shadow-color', hexToRgba(color, 0.5));
    } else {
      document.documentElement.style.removeProperty('--current-player-shadow-color');
    }
  });
</script>

<!-- Цей компонент не рендерить власної розмітки -->
