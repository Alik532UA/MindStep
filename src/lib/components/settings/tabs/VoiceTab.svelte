<script lang="ts">
  import { t } from "$lib/i18n/typedI18n";
  import { onMount, onDestroy } from "svelte";

  let showFade = $state(false);
  let voiceListWrapper = $state<HTMLDivElement | null>(null);

  // Lazy Loading
  let VoiceSettings: any = $state(null);
  let VoiceList: any = $state(null);

  function updateFadeState() {
    if (!voiceListWrapper) return;
    const { scrollTop, scrollHeight, clientHeight } = voiceListWrapper;
    const isScrollable = scrollHeight > clientHeight;
    const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 1;
    showFade = isScrollable && !isAtBottom;
  }

  let mutationObserver: MutationObserver;
  let resizeObserver: ResizeObserver;

  onMount(() => {
    // Завантажуємо компоненти після монтування таба
    Promise.all([
        import("$lib/components/VoiceSettings.svelte"),
        import("$lib/components/VoiceList.svelte")
    ]).then(([vs, vl]) => {
        VoiceSettings = vs.default;
        VoiceList = vl.default;
    });

    if (voiceListWrapper) {
      setTimeout(updateFadeState, 0);
      resizeObserver = new ResizeObserver(updateFadeState);
      resizeObserver.observe(voiceListWrapper);
      mutationObserver = new MutationObserver(updateFadeState);
      mutationObserver.observe(voiceListWrapper, {
        childList: true,
        subtree: true,
      });
    }
  });

  onDestroy(() => {
    if (mutationObserver) mutationObserver.disconnect();
    if (resizeObserver) resizeObserver.disconnect();
  });
</script>

<div class="setup-grid" data-testid="voice-tab-setup-grid">
  <div class="grid-column" data-testid="voice-settings-column">
    <div class="settings-card" data-testid="voice-settings-card">
      <span class="settings-label">{$t("settings.voiceSettings")}</span>
      {#if VoiceSettings}
        <VoiceSettings />
      {:else}
        <div class="loading-placeholder">Завантаження...</div>
      {/if}
    </div>
  </div>
  <div class="grid-column" data-testid="voice-list-column">
    <div class="settings-card" data-testid="voice-list-card">
      <span class="settings-label">{$t("settings.voiceList")}</span>
      <div
        class="voice-list-wrapper"
        class:fade-bottom={showFade}
        bind:this={voiceListWrapper}
        onscroll={updateFadeState}
      >
        {#if VoiceList}
          <VoiceList />
        {:else}
          <div class="loading-placeholder">Завантаження...</div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .setup-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .setup-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
    min-height: 0;
    height: 100%;
  }

  .settings-card {
    background: var(--bg-secondary);
    padding: 24px;
    border-radius: var(--unified-border-radius);
    box-shadow: var(--unified-shadow);
    border: var(--unified-border);
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
    min-height: 0;
    height: 100%;
    box-sizing: border-box;
  }

  .settings-label {
    font-weight: 600;
    color: var(--text-secondary);
  }

  .voice-list-wrapper {
    flex: 1 1 auto;
    min-height: 300px;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    .voice-list-wrapper {
      flex: 1 1 0;
      min-height: 0;
      max-height: none;
    }
  }

  .voice-list-wrapper.fade-bottom {
    -webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
  }

  .voice-list-wrapper::-webkit-scrollbar {
    width: 8px;
  }

  .voice-list-wrapper::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.02);
    border-radius: 4px;
  }

  .voice-list-wrapper::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 4px;
  }

  .voice-list-wrapper::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.25);
  }
</style>
