<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { trapFocus } from '$lib/actions/trapFocus';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    extra?: Snippet;
    onclose?: () => void;
    closeOnOverlayClick?: boolean;
    variant?: 'glass' | 'classic';
    dataTestId?: string;
    /**
     * `id` заголовка вікна. Читалка озвучує його при вході в діалог, тож без
     * нього гравець чує «діалог» і нічого більше (ACCESSIBILITY-v8 § 4.4).
     * Заголовок малює виклик, а не `BaseModal`, тому сюди приходить саме `id`.
     */
    ariaLabelledby?: string;
    /** Запасна назва, коли заголовка на екрані немає зовсім. */
    ariaLabel?: string;
  }

  let {
    children,
    extra,
    onclose,
    closeOnOverlayClick = true,
    variant = 'glass',
    dataTestId = 'base-modal',
    ariaLabelledby,
    ariaLabel
  }: Props = $props();

  function handleOverlayClick(e: MouseEvent) {
    if (closeOnOverlayClick && onclose && e.target === e.currentTarget) {
      onclose();
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && onclose) {
      onclose();
    }
  }
</script>

<!--
  Escape слухається на вікні, а не на підкладці. Доти обробник стояв на
  `div`-підкладці й спрацьовував лише поки фокус лежав усередині неї: варто
  було фокусу піти на `<body>` (клік по тлу, закритий `<select>`, повернення з
  іншої вкладки) — і клавіша перестає закривати вікно, хоча код на місці.
  `BaseModal` існує в DOM тільки коли вікно відкрите, тож глобальний слухач
  живе рівно стільки, скільки триває діалог.
-->
<svelte:window onkeydown={handleKeydown} />

<!--
  `role="presentation"` — свідомо, і це не спосіб замовкнути попередження.
  Доти тут стояв `role="button"`: підкладка — це весь екран, тож читалка
  оголошувала «кнопка» на все вікно діалогу й пропонувала натиснути те, що
  насправді лише тло. Клік по тлу лишається зручністю для мишки; клавіатурний
  шлях до того самого — Escape вище й кнопка закриття в шапці
  (ACCESSIBILITY-v8 § 4.4).
-->
<div
  class="base-modal-backdrop {variant}"
  transition:fade={{ duration: 200 }}
  onclick={handleOverlayClick}
  role="presentation"
  data-testid="{dataTestId}-overlay"
>
  {@render extra?.()}
  <div
    class="base-modal-container {variant}"
    use:trapFocus
    transition:scale={{ duration: 300, start: 0.9, opacity: 0, easing: quintOut }}
    role="dialog"
    aria-modal="true"
    aria-labelledby={ariaLabelledby}
    aria-label={ariaLabelledby ? undefined : ariaLabel}
    data-testid={dataTestId}
  >
    {@render children()}
  </div>
</div>

<style>
  .base-modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 0;
    box-sizing: border-box;
  }

  .base-modal-backdrop.glass {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .base-modal-backdrop.classic {
    background: rgba(0, 0, 0, 0.6);
  }

  .base-modal-container {
    width: var(--responsive-max-width, 400px);
    max-width: 95vw;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }
</style>
