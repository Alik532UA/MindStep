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
  class="modal-overlay {variant}" 
  transition:fade={{ duration: 200 }}
  onclick={handleOverlayClick}
  onkeydown={handleKeydown}
  role="button"
  tabindex="-1"
  data-testid="{dataTestId}-overlay"
>
  <div 
    class="modal-container {variant}"
    use:trapFocus
    transition:scale={{ duration: 300, start: 0.9, opacity: 0, easing: quintOut }}
    data-testid={dataTestId}
  >
    {@render children()}
  </div>
</div>

<style>
  .modal-overlay {
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

  .modal-overlay.glass {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .modal-overlay.classic {
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-container {
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-sizing: border-box;
  }

  .modal-container.glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    color: white;
  }

  .modal-container.classic {
    background: var(--bg-primary, #fff);
    border: 1px solid var(--border-color, #ccc);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    color: var(--text-primary, #000);
  }
</style>
