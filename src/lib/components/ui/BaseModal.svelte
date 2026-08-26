<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { trapFocus } from '$lib/actions/trapFocus';
  import { acceptsShortcut } from '$lib/services/keyboard';
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

  /*
   * Захисти беруться з `services/keyboard`, а не пишуться тут удруге.
   *
   * Доти стояло `e.key === 'Escape'` без жодного захисту — тобто `Ctrl+Escape`
   * (у Windows це виклик меню «Пуск») закривав ще й вікно, а `Alt+Escape` і
   * `Meta+Escape` разом із ним. HOTKEYS-v8 § 2 вимагає перевіряти модифікатори
   * саме тому: комбінація належить системі, і застосунок не має на неї
   * реагувати.
   *
   * `acceptsShortcut` пропускає `Escape` навіть із поля вводу — і це та сама
   * причина, з якої обробник живе на вікні: панель, відкриту клавішею, інакше
   * не закрити зсередини.
   *
   * `e.code`, а не `e.key`: у решті проєкту скорочення читаються з `code`
   * (HK-EVENT-CODE), і два різні джерела для однієї клавіші — це рівно те
   * розходження, заради усунення якого модуль `keyboard.ts` і виділявся.
   */
  function handleKeydown(e: KeyboardEvent) {
    if (!acceptsShortcut(e)) return;
    if (e.code === 'Escape' && onclose) {
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
