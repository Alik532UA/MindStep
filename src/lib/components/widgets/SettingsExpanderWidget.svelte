<script lang="ts">
  import { gameModeStore } from "$lib/stores/gameModeStore";
  import { gameSettingsStore } from "$lib/stores/gameSettingsStore";
  import { t } from "$lib/i18n/typedI18n";
  import { uiStateStore } from "$lib/stores/uiStateStore";
  import { onMount, tick } from "svelte";
  import { logService } from "$lib/services/logService";
  import { boardState } from "$lib/stores/boardState.svelte";
  import { layoutUpdateStore } from "$lib/stores/layoutUpdateStore";
  import { dev } from "$app/environment";

  import SettingsBoardSize from "./settings/SettingsBoardSize.svelte";
  import SettingsVisibility from "./settings/SettingsVisibility.svelte";
  import SettingsGameInfo from "./settings/SettingsGameInfo.svelte";
  import SettingsGameplay from "./settings/SettingsGameplay.svelte";
  import SettingsAudio from "./settings/SettingsAudio.svelte";
  import SettingsLayout from "./settings/SettingsLayout.svelte";
  import "$lib/css/components/settings-expander.css";

  // 1. Оголошуємо всі Runes спочатку
  const bState = $derived(boardState.state);
  
  let isOpen = $state(dev);
  let contentHeight = $state(0);
  let isHorizontalLayout = $state(true);

  // 2. Потім refs та іншу логіку
  let summaryRef = $state<HTMLElement>();
  let contentRef = $state<HTMLDivElement>();

  function syncExpanderStateToStore(open: boolean) {
    uiStateStore.update((s) => ({ ...s, isSettingsExpanderOpen: open }));
  }

  async function toggleExpander() {
    logService.action(
      'Click: "Розгорнути/Згорнути налаштування" (SettingsExpanderWidget)',
    );
    isOpen = !isOpen;
    syncExpanderStateToStore(isOpen);
    setTimeout(() => layoutUpdateStore.update((n) => n + 1), 500);
  }

  function updateLayoutMode() {
    isHorizontalLayout = window.innerWidth > 1270;
  }

  onMount(() => {
    updateLayoutMode();
    window.addEventListener("resize", updateLayoutMode);

    // Синхронізуємо початковий стан при монтуванні
    syncExpanderStateToStore(isOpen);

    if (isOpen) {
      setTimeout(() => layoutUpdateStore.update((n) => n + 1), 500);
    }

    return () => {
      window.removeEventListener("resize", updateLayoutMode);
    };
  });

  $effect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    $gameSettingsStore.blockModeEnabled;

    if (isOpen && contentRef) {
      tick().then(() => {
        if (contentRef) { // Захисна перевірка всередині promise
          contentHeight = contentRef.scrollHeight;
        }
      });
    } else {
      contentHeight = 0;
    }
  });

  const isCompetitiveMode = $derived(
    $gameModeStore.activeMode === "timed" ||
    ($gameModeStore.activeMode === "local" &&
      $gameSettingsStore.lockSettings) ||
    ($gameModeStore.activeMode === "online" &&
      $gameSettingsStore.settingsLocked) ||
    $uiStateStore.settingsMode === "competitive"
  );
</script>

{#if bState}
  <div
    class="settings-expander {isOpen ? 'open' : ''}"
    data-testid="settings-expander-widget"
  >
    <div
      data-testid="settings-expander-summary"
      class="settings-expander__summary"
      role="button"
      aria-label={$t("gameControls.settings")}
      onclick={toggleExpander}
      onkeydown={(e) =>
        (e.key === "Enter" || e.key === " ") && toggleExpander()}
      bind:this={summaryRef}
      tabindex={0}
    >
      {$t("gameControls.settings")}
      <span class="settings-expander__arrow" aria-hidden="true"
        ><svg viewBox="0 0 24 24" width="24" height="24"
          ><polyline
            points="6 9 12 15 18 9"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        ></span
      >
    </div>
    <div
      class="settings-expander__content"
      bind:this={contentRef}
      style="max-height: {contentHeight}px; opacity: {isOpen ? 1 : 0};"
      data-testid="settings-expander-content"
    >
      <SettingsBoardSize />
      <SettingsVisibility {isCompetitiveMode} />
      <SettingsGameInfo />
      <hr class="settings-expander__divider" />
      <SettingsGameplay {isCompetitiveMode} />
      <SettingsAudio />
      <hr class="settings-expander__divider" />
      {#if isHorizontalLayout}
        <SettingsLayout />
      {/if}
    </div>
  </div>
{/if}

<style>
  /* Стилі залишаються без змін */
</style>
