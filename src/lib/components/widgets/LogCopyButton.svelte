<script lang="ts">
  import { dev } from '$app/environment';
  import { logService } from '$lib/services/logService.svelte';
  import { Check } from 'lucide-svelte';

  const isVisible = $derived(dev && logService.errorCount > 0);
  let copied = $state(false);

  async function copyReport() {
    try {
      const report = logService.getLogReport();
      await navigator.clipboard.writeText(report);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 1000);
    } catch (err) {
      console.error('Failed to copy logs', err);
    }
  }
</script>

{#if isVisible}
  <button class="log-fab" class:copied onclick={copyReport} aria-label="Copy Error Logs">
    {#if copied}
      <Check size={16} />
    {:else}
      <span class="error-count">{logService.errorCount}</span>
    {/if}
  </button>
{/if}

<style>
  .log-fab {
    position: fixed;
    bottom: 16px;
    left: 16px;
    z-index: 9999;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f44336;
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: bold;
    font-size: 14px;
    padding: 0;
  }

  .log-fab:hover {
    transform: scale(1.1);
  }

  .log-fab:active {
    transform: scale(0.9);
  }

  .log-fab.copied {
    background-color: #4CAF50;
  }

  @media (max-width: 768px) {
    .log-fab {
      width: 24px;
      height: 24px;
      font-size: 11px;
      bottom: 12px;
      left: 12px;
    }
  }
</style>
