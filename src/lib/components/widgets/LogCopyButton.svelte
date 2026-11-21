<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import { onDestroy } from 'svelte';
  import { debugMode } from '$lib/services/debugMode.svelte';
  import { logService } from '$lib/services/logService.svelte';
  import { Check, Copy, Bug, Trash2, EyeOff } from 'lucide-svelte';
  import { isPlainKey } from '$lib/services/keyboard';
  import ErrorLogModal from './ErrorLogModal.svelte';

  let copied = $state(false);
  let fallbackReport = $state<string | null>(null);
  let copyTimer: ReturnType<typeof setTimeout> | undefined;

  let menuOpen = $state(false);
  let modalOpen = $state(false);
  let userDismissed = $state(false);

  const urlDebug = $derived(browser && page.url.searchParams.get('debug') === '1');
  const isVisible = $derived(!userDismissed && (urlDebug || debugMode.enabled));

  onDestroy(() => {
    if (copyTimer) clearTimeout(copyTimer);
  });

  async function copyReport() {
    const report = logService.getLogReport();
    try {
      await navigator.clipboard.writeText(report);
      fallbackReport = null;
      copied = true;
      copyTimer = setTimeout(() => {
        copied = false;
      }, 1500);
    } catch (err) {
      logService.warn?.('[LogCopyButton] не вдалося скопіювати звіт', err);
      fallbackReport = report;
    }
  }

  async function handleAction(action: 'copy' | 'modal' | 'clear' | 'hide') {
    menuOpen = false;
    if (action === 'copy') await copyReport();
    else if (action === 'modal') modalOpen = true;
    else if (action === 'clear') logService.clear();
    else if (action === 'hide') {
      userDismissed = true;
      if (debugMode.enabled) debugMode.toggle();
    }
  }

  function handleWindowClick(e: MouseEvent) {
    if (!menuOpen) return;
    const target = e.target as HTMLElement | null;
    if (!target?.closest('.service-badge-wrapper')) {
      menuOpen = false;
    }
  }

  function handleWindowKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isPlainKey(e) && menuOpen) {
      menuOpen = false;
    }
  }
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

{#if fallbackReport}
  <textarea
    class="log-fallback"
    readonly
    value={fallbackReport}
    aria-label="Debug report fallback"
    data-testid="debug-log-fallback-input"
  ></textarea>
{/if}

{#if isVisible}
  <div class="service-badge-wrapper">
    {#if menuOpen}
      <div class="service-menu" role="menu" data-testid="service-badge-context-menu">
        <button
          type="button"
          class="menu-item"
          role="menuitem"
          onclick={() => handleAction('copy')}
          data-testid="service-badge-copy-report-btn"
        >
          <Copy size={13} />
          <span>Скопіювати повний звіт</span>
        </button>
        <button
          type="button"
          class="menu-item"
          role="menuitem"
          onclick={() => handleAction('modal')}
          data-testid="service-badge-view-errors-btn"
        >
          <Bug size={13} />
          <span>Переглянути помилки ({logService.errorCount})</span>
        </button>
        <button
          type="button"
          class="menu-item"
          role="menuitem"
          onclick={() => handleAction('clear')}
          data-testid="service-badge-clear-btn"
        >
          <Trash2 size={13} />
          <span>Скинути лічильник</span>
        </button>
        <button
          type="button"
          class="menu-item"
          role="menuitem"
          onclick={() => handleAction('hide')}
          data-testid="service-badge-hide-btn"
        >
          <EyeOff size={13} />
          <span>Приховати табло</span>
        </button>
      </div>
    {/if}

    <button
      type="button"
      class="log-fab"
      class:has-errors={logService.errorCount > 0}
      class:copied
      onclick={() => (menuOpen = !menuOpen)}
      oncontextmenu={(e) => {
        e.preventDefault();
        menuOpen = true;
      }}
      aria-label={`Меню діагностики — ${logService.version}`}
      aria-haspopup="menu"
      aria-expanded={menuOpen}
      data-testid="app-version-value"
    >
      {#if copied}
        <Check class="badge-icon badge-icon--hint" />
      {:else if logService.errorCount > 0}
        <span class="error-count">{logService.errorCount > 99 ? '99+' : logService.errorCount}</span>
      {:else}
        <Copy class="badge-icon badge-icon--hint" />
      {/if}
      <span class="version">{logService.version}</span>
    </button>
  </div>
{/if}

<ErrorLogModal isOpen={modalOpen} onclose={() => (modalOpen = false)} />

<style>
  .service-badge-wrapper {
    position: fixed;
    bottom: 16px;
    left: 16px;
    z-index: 9999;
  }

  .service-menu {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 0;
    min-width: 220px;
    background: #1e1e1e;
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 6px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: 10000;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 10px;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    transition:
      background-color 0.15s ease,
      color 0.15s ease;
  }

  .menu-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .log-fab {
    display: flex;
    align-items: center;
    gap: 4px;
    min-height: 32px;
    padding: 0 8px;
    border-radius: 16px;
    background-color: var(--bg-secondary, #2a2a2a);
    color: var(--text-primary, #fff);
    border: 2px solid var(--border-color, #444);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .log-fab:hover {
    transform: scale(1.05);
  }

  .log-fab:active {
    transform: scale(0.95);
  }

  .version {
    font-size: 10px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    line-height: 1;
    white-space: nowrap;
  }

  .log-fab :global(.badge-icon) {
    width: 16px;
    height: 16px;
    flex: none;
  }

  .log-fab :global(.badge-icon--hint) {
    width: 12px;
    height: 12px;
    opacity: 0.6;
  }

  .log-fab.has-errors {
    background-color: #c92a2a;
    color: white;
    border-color: #7f1d1d;
  }

  .log-fab.copied {
    background-color: #237a35;
    color: white;
    border-color: #1b5e20;
  }

  .error-count {
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1;
    padding: 2px 5px;
    border-radius: 8px;
    background-color: #7f1d1d;
    color: white;
  }

  @media (prefers-reduced-motion: reduce) {
    .menu-item,
    .log-fab {
      transition: none;
    }
  }

  @media (hover: none) {
    .service-badge-wrapper {
      bottom: 12px;
      left: 12px;
    }

    .log-fab {
      min-height: 44px;
      padding: 0 12px;
      border-radius: 22px;
    }

    .log-fab :global(.badge-icon) {
      width: 20px;
      height: 20px;
    }

    .version {
      font-size: 12px;
    }

    .error-count {
      font-size: 1rem;
    }
  }

  .log-fallback {
    position: fixed;
    bottom: 76px;
    left: 16px;
    width: min(38rem, calc(100vw - 32px));
    height: min(40dvh, 20rem);
    z-index: 9999;
    padding: 8px;
    font-family: monospace;
    font-size: 0.75rem;
    background: #1e1e1e;
    color: #ffffff;
    border: 2px solid #ef4444;
    border-radius: 8px;
    resize: none;
  }
</style>
