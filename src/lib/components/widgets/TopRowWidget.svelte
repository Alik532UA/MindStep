<script lang="ts">
  import { navigationService } from "$lib/services/navigationService.js";
  import { t } from "$lib/i18n/typedI18n";
  import SvgIcons from "../SvgIcons.svelte";
  import { showGameInfoModal } from "$lib/utils/uiHelpers.js";
  import { hotkeyTooltip } from "$lib/actions/hotkeyTooltip.js";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { columnStyleState } from "$lib/stores/columnStyleState.svelte";
  import { uiState } from "$lib/stores/uiState.svelte";

  const columnMode = $derived(columnStyleState.state);

  function handleMainMenuClick() {
    const uState = uiState.state;
    if (uState?.isGameOver) {
      navigationService.goToMainMenu();
    } else {
      navigationService.goToMainMenu();
    }
  }

  function handleLocalSetupClick() {
    navigationService.goTo("/local-setup");
  }

  onMount(() => {
    // REMOVED: Global hotkey registration
    // hotkeyService.register("global", "KeyI", showGameInfoModal);
    // hotkeyService.register("global", "Escape", handleMainMenuClick);
  });
</script>

<div class="game-board-top-row">
  <button
    class="main-menu-btn"
    use:hotkeyTooltip={{ title: $t("gameBoard.mainMenu"), key: "ESC" }}
    onclick={handleMainMenuClick}
    data-testid="top-row-main-menu-btn"
  >
    <SvgIcons name="home" />
  </button>
  {#if $page.route.id?.includes("/game/local")}
    <button
      class="main-menu-btn"
      use:customTooltip={$t("tooltips.localGameSettings")}
      onclick={handleLocalSetupClick}
      data-testid="local-game-settings-btn"
    >
      <SvgIcons name="hamburger-menu" />
    </button>
  {/if}
  <button
    class="main-menu-btn"
    use:hotkeyTooltip={{ title: $t("faq.title"), key: "I" }}
    onclick={showGameInfoModal}
    data-testid="game-info-btn"
  >
    <SvgIcons name="info" />
  </button>
  {#if false}
    <button
      class="main-menu-btn"
      use:customTooltip={columnMode === "flexible"
        ? "Switch to Fixed"
        : "Switch to Flexible"}
      onclick={() =>
        columnStyleState.update((v) => (v === "fixed" ? "flexible" : "fixed"))}
      style="display: flex; align-items: center; justify-content: center;"
      data-testid="column-style-mode-btn"
    >
      <SvgIcons name="palette" />
      {#if columnMode === "flexible"}
        <span
          style="display: flex; align-items: center; justify-content: center; margin-left: 4px;"
          ><SvgIcons name="editing" /></span
        >
      {:else}
        <span
          style="display: flex; align-items: center; justify-content: center; margin-left: 4px;"
          ><SvgIcons name="fixed" /></span
        >
      {/if}
    </button>
  {/if}
</div>

<style>
  .game-board-top-row {
    margin: 0;
  }
</style>
