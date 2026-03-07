<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { trapFocus } from '$lib/actions/trapFocus';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    onclose?: () => void;
    closeOnOverlayClick?: boolean;
    variant?: 'glass' | 'classic';
    dataTestId?: string;
  }

  let { 
    children, 
    onclose, 
    closeOnOverlayClick = true, 
    variant = 'glass',
    dataTestId = 'base-modal'
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

<div 
  class="base-modal-backdrop {variant}" 
  transition:fade={{ duration: 200 }}
  onclick={handleOverlayClick}
  onkeydown={handleKeydown}
  role="button"
  tabindex="-1"
  data-testid="{dataTestId}-overlay"
>
  <div 
    class="base-modal-container {variant}"
    use:trapFocus
    transition:scale={{ duration: 300, start: 0.9, opacity: 0, easing: quintOut }}
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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
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
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }
</style>
