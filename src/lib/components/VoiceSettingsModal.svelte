<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { logService } from "$lib/services/logService.svelte";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import StyledButton from "$lib/components/ui/StyledButton.svelte";

  let showFade = $state(false);
  let voiceListContainer = $state<HTMLDivElement | null>(null);

  // Lazy Loading
  let VoiceSettings: any = $state(null);
  let VoiceList: any = $state(null);

  function updateFadeState() {
    if (!voiceListContainer) return;
    const { scrollTop, scrollHeight, clientHeight } = voiceListContainer;
    const isScrollable = scrollHeight > clientHeight;
    const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 1;
    showFade = isScrollable && !isAtBottom;
  }

  let mutationObserver: MutationObserver | null = null;
  let resizeObserver: ResizeObserver | null = null;

  onMount(() => {
    // Динамічне завантаження
    Promise.all([
        import("./VoiceSettings.svelte"),
        import("./VoiceList.svelte")
    ]).then(([vs, vl]) => {
        VoiceSettings = vs.default;
        VoiceList = vl.default;
    });

    if (voiceListContainer) {
      setTimeout(updateFadeState, 0);

      resizeObserver = new ResizeObserver(updateFadeState);
      resizeObserver.observe(voiceListContainer);

      mutationObserver = new MutationObserver(updateFadeState);
      mutationObserver.observe(voiceListContainer, {
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

<div
  class="voice-settings-modal-content"
  data-testid="voice-settings-inner-panel"
>
  <!-- Removed main title to match VoiceTab -->

  <div class="voice-settings-body">
    <div class="setup-grid" data-testid="voice-modal-setup-list">
      <div class="grid-column" data-testid="voice-settings-section">
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
            bind:this={voiceListContainer}
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
  </div>

  <div class="actions-column">
    <StyledButton
      variant="primary"
      size="large"
      onclick={() => modalStateRune.closeModal()}
      dataTestId="voice-settings-save-footer-btn"
    >
      {$t("common.save")}
    </StyledButton>
  </div>
</div>

<style>
  :global(.base-modal-container[data-testid="voice-settings-modal"]) {
    width: min(1200px, 95vw) !important;
    max-width: 95vw !important;
    --responsive-max-width: min(1200px, 95vw) !important;
  }
  
  :global(.base-modal-container[data-testid="voice-settings-modal"] .modal-window),
  :global(.base-modal-container[data-testid="voice-settings-modal"] .modal-content) {
    width: 100% !important;
    max-width: min(1200px, 95vw) !important;
  }

  .voice-settings-modal-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  }



  .voice-settings-body {
    padding: 0;
    max-height: 65dvh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .settings-label {
    font-weight: 600;
    color: var(--text-secondary);
  }

  .setup-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
    width: 100%;
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

  .voice-list-wrapper {
    flex: 1 1 auto;
    min-height: 300px;
    max-height: 50dvh;
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

  .actions-column {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0 16px;
  }
</style>
