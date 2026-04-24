<script lang="ts">
  /**
   * SvgIcons component
   * Рендерить SVG іконку за ім'ям з колекції.
   * Використовує Svelte 5 Runes.
   */
  import { icons, type IconName } from "$lib/icons";
  import type { SVGAttributes } from "svelte/elements";

  interface Props extends SVGAttributes<SVGElement> {
    name: string;
  }

  let { name, ...restProps }: Props = $props();

  // Обчислюємо компонент іконки через $derived
  const IconComponent = $derived(icons[name as IconName]);
</script>

{#if IconComponent}
  <!-- У Svelte 5 компоненти можна викликати як звичайні теги -->
  <IconComponent {...restProps} />
{:else if import.meta.env.DEV}
  <!-- Фолбек для розробки, щоб бачити, якщо іконка не знайдена -->
  <span style="color: red; font-size: 10px; border: 1px solid red;">
    Icon '{name}'?
  </span>
{/if}

<style>
  :global(.crown-svg) {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  :global(.multicolor-svg) {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
</style>
