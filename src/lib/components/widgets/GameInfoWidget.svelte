<script lang="ts">
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import { derivedState } from "$lib/stores/derivedState.svelte";
  import { i18nReady } from "$lib/i18n/init.js";
  import { fade, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { playerState } from '$lib/stores/playerState.svelte';
  import { uiState } from "$lib/stores/uiState.svelte";
  import { logService } from "$lib/services/logService.svelte";
  import CompactComputerMove from "$lib/components/widgets/game-info/CompactComputerMove.svelte";
  import StructuredMessage from "$lib/components/widgets/game-info/StructuredMessage.svelte";

  // FIX: Import the new factory
  import {
    createGameInfoMessage,
    type GameInfoContext,
  } from "$lib/services/game-info/gameInfoMessageFactory";

  const settings = $derived(gameSettingsState.state);
  let isCompact = $derived(settings.showGameInfoWidget === "compact");

  let displayMessage = $derived.by(() => {
    const pState = playerState.state;
    const uState = uiState.state;
    if (!pState || !uState) return { type: "SIMPLE", content: "" };

    const context: GameInfoContext = {
      playerState: pState,
      isGameOver: derivedState.isGameOver,
      isFirstMove: uState.isFirstMove,
      lastComputerMove: derivedState.lastComputerMove,
      lastPlayerMove: derivedState.lastPlayerMove,
      isPlayerTurn: derivedState.isPlayerTurn,
      translate: $t,
      isCompact: isCompact,
      gameSettings: settings,
      uiState: uState as any,
    };

    // БЕЗПЕЧНИЙ ЛОГ: Використовуємо setTimeout, щоб не порушувати цикл реактивності
    setTimeout(() => {
      logService.ui('[GameInfoWidget] Context updated:', {
        isFirstMove: context.isFirstMove,
        isPlayerTurn: context.isPlayerTurn,
        lastComputerMove: !!context.lastComputerMove,
        intendedGameType: uState.intendedGameType
      });
    }, 0);

    return createGameInfoMessage(context);
  });

  // Використовуємо рядковий ключ для анімацій, щоб уникнути перезапусків при зміні посилань на об'єкт
  let animationKey = $derived(JSON.stringify(displayMessage));
</script>

{#if $i18nReady && playerState.state}
  {#if settings.showGameInfoWidget !== "hidden"}
    <div
      class="game-info-widget"
      class:compact={isCompact}
      transition:slide={{ duration: 400, easing: quintOut }}
      data-testid="game-info-container"
    >
      <div class="game-info-content" data-testid="game-info-panel">
        {#key animationKey}
          <div
            class="fade-wrapper"
            in:fade={{ duration: 250, delay: 250 }}
            out:fade={{ duration: 250 }}
          >
            {#if displayMessage.type === "COMPACT_COMPUTER_MOVE"}
              <CompactComputerMove message={displayMessage as any} />
            {:else if displayMessage.type === "STRUCTURED"}
              <StructuredMessage lines={displayMessage.lines || []} />
            {:else}
              {displayMessage.content}
            {/if}
          </div>
        {/key}
      </div>
    </div>
  {/if}
{/if}

<style>
  .game-info-widget {
    background: var(--bg-secondary);
    padding: 20px 12px;
    border-radius: var(--unified-border-radius);
    box-shadow: var(--dynamic-widget-shadow) var(--current-player-shadow-color);
    font-size: 1.1em;
    color: var(--text-primary, #222);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: var(--unified-backdrop-filter);
    border: var(--unified-border);
    /* overflow: hidden; -- видаляємо, щоб slide працював коректно */
  }

  .game-info-content {
    font-weight: 500;
    line-height: 1.4;
    width: 100%;
    word-wrap: break-word;
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative; /* Батьківський елемент для абсолютно позиціонованої обгортки */
    min-height: 50px; /* Задаємо мінімальну висоту, щоб уникнути стрибків розміру */
  }

  .fade-wrapper {
    /* Робимо обгортку абсолютною, щоб стара і нова версії могли анімуватися одна над одною */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
