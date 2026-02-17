<script lang="ts">
  import { userActionService } from "$lib/services/userActionService";
  import { replayStore } from "$lib/stores/replayStore";
  import { t } from "$lib/i18n/typedI18n";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import { playerState } from "$lib/stores/playerState.svelte";
  import { scoreStore } from '$lib/stores/scoreStore.svelte';

  import SinglePlayerScoreDisplay from "./parts/SinglePlayerScoreDisplay.svelte";
  import MultiPlayerScoreDisplay from "./parts/MultiPlayerScoreDisplay.svelte";

  const pState = $derived(playerState.state);
  const isMultiplayer = $derived(pState
    ? pState.players.filter((p) => p.type === "human").length > 1
    : false);
  const players = $derived(pState ? pState.players : []);

  async function cashOutAndEndGame() {
    await userActionService.voteToFinish("modal.gameOverReasonCashOut" as const);
  }
</script>

{#if !$replayStore.isReplayMode && pState && $scoreStore}
  <div class="score-panel game-content-block" data-testid="score-panel">
    {#if isMultiplayer}
      <MultiPlayerScoreDisplay {players} scoreStore={$scoreStore} />
    {:else}
      <SinglePlayerScoreDisplay
        score={players[0]?.score || 0}
        scoreStore={$scoreStore}
      />
    {/if}
    <button
      class="cash-out-btn"
      onclick={cashOutAndEndGame}
      use:customTooltip={isMultiplayer
        ? $t("gameBoard.cashOutLocal")
        : $t("gameBoard.cashOutTooltip")}
      data-testid="cash-out-btn"
    >
      {isMultiplayer ? $t("gameBoard.cashOutLocal") : $t("gameBoard.cashOut")}
    </button>
  </div>
{/if}

<style>
  .score-panel {
    background: var(--bg-secondary, #fff3);
    padding: 12px 16px;
    border-radius: var(--unified-border-radius);
    box-shadow: var(--unified-shadow);
    margin-bottom: 16px;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    color: var(--text-primary, #222);
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: var(--unified-backdrop-filter);
    border: var(--unified-border);
  }

  .cash-out-btn {
    background: var(--control-selected);
    color: var(--control-selected-text);
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 0.95em;
    font-weight: 700;
    cursor: pointer;
    transition:
      background 0.2s,
      transform 0.2s,
      box-shadow 0.2s;
    box-shadow: 0 2px 8px var(--shadow-color);
    white-space: pre-line;
  }
  .cash-out-btn:hover {
    background: var(--control-hover);
    transform: scale(1.05);
    box-shadow: 0 4px 12px var(--shadow-color);
  }
  .game-content-block {
    margin-bottom: 0;
    border: var(--unified-border);
    border-radius: var(--unified-border-radius);
    box-shadow: var(--dynamic-widget-shadow) var(--current-player-shadow-color);
    backdrop-filter: var(--unified-backdrop-filter);
  }
</style>
