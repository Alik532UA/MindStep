<script lang="ts">
  import { base } from "$app/paths";
  import { goto } from "$app/navigation";
  import { t } from "$lib/i18n/typedI18n";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { onMount } from "svelte";
  import { logService } from "$lib/services/logService.svelte";
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { localGameController } from "$lib/controllers/LocalGameController.svelte";
  import GameModeButton from "./game-modes/GameModeButton.svelte";
  import NotoEmoji from "./NotoEmoji.svelte";
  import { Users } from 'lucide-svelte';

  import { showGameInfoModal } from "$lib/utils/uiHelpers";

  import { uiState } from "$lib/stores/uiState.svelte";

  interface Props {
    extended?: boolean;
  }

  let { extended = true }: Props = $props();

  let buttonsNode: HTMLElement;

  async function handleOnlineGame() {
    logService.ui("Online Game selected from modal");
    uiState.update(s => ({ ...s, intendedGameType: 'online' }));
    modalStateRune.closeModal();
    await goto(`${base}/online`);
  }

  function selectMode(mode: string) {
    logService.ui(`Mode selected: ${mode}`);
    gameSettingsState.applyPreset(mode as any);
    
    // Встановлюємо тип гри для правильної маршрутизації в uiService
    const gameType = (mode === 'timed' || mode === 'virtual-player-timed') 
      ? 'timed' 
      : 'virtual-player';
      
    uiState.update(s => ({ ...s, intendedGameType: gameType }));

    if (mode === 'beginner') {
      showGameInfoModal();
    } else {
      modalStateRune.closeModal();
      goto(`${base}/game/virtual-player`);
    }
  }

  function handleLocalGame() {
    logService.ui("Local Game selected");
    uiState.update(s => ({ ...s, intendedGameType: 'local' }));
    localGameController.init("GameModeModal");
    modalStateRune.closeModal();
    goto(`${base}/local-setup`);
  }

  onMount(() => {
    const firstButton = buttonsNode?.querySelector("button");
    if (firstButton) (firstButton as HTMLElement).focus();
  });
</script>

{#snippet globeIcon()}
  <NotoEmoji name="globe_showing_europe_africa" size="100%" />
{/snippet}

{#snippet chickIcon()}
  <NotoEmoji name="hatching_chick" size="100%" />
{/snippet}

{#snippet brainIcon()}
  <NotoEmoji name="brain" size="100%" />
{/snippet}

{#snippet fireIcon()}
  <NotoEmoji name="fire" size="100%" />
{/snippet}

{#snippet stopwatchIcon()}
  <NotoEmoji name="stopwatch" size="100%" />
{/snippet}

{#snippet usersIcon()}
  <Users size="100%" />
{/snippet}

<div class="game-mode-buttons" bind:this={buttonsNode}>
  {#if extended}
    <GameModeButton
      text={$t("mainMenu.playOnline")}
      dataTestId="online-game-btn"
      onclick={handleOnlineGame}
      iconSnippet={globeIcon}
    />
    <div class="divider"></div>
  {/if}

  <GameModeButton
    text={$t("gameModes.beginner")}
    dataTestId="beginner-mode-btn"
    onclick={() => selectMode("beginner")}
    iconSnippet={chickIcon}
  />

  <GameModeButton
    text={$t("gameModes.experienced")}
    dataTestId="experienced-mode-btn"
    onclick={() => selectMode("experienced")}
    iconSnippet={brainIcon}
  />

  <GameModeButton
    text={$t("gameModes.pro")}
    dataTestId="pro-mode-btn"
    onclick={() => selectMode("pro")}
    iconSnippet={fireIcon}
  />

  {#if extended}
    <GameModeButton
      text={$t("mainMenu.timedGame")}
      dataTestId="timed-game-btn"
      onclick={() => selectMode("timed")}
      iconSnippet={stopwatchIcon}
    />

    <div class="divider"></div>

    <GameModeButton
      text={$t("mainMenu.localGame")}
      dataTestId="local-game-btn"
      onclick={handleLocalGame}
      iconSnippet={usersIcon}
    />
  {/if}
</div>

<style>
  .game-mode-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
  }

  .divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 8px 0;
  }
</style>
