<script lang="ts">
  import { t } from "$lib/i18n/typedI18n";
  import { navigationService } from "$lib/services/navigationService.js";
  import ColorPicker from "./ColorPicker.svelte";
  import { logService } from "$lib/services/logService.js";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import { playerState } from "$lib/stores/playerState.svelte";
  import NotoEmoji from "$lib/components/NotoEmoji.svelte";

  // SSoT: Використовуємо стан з Runes
  const state = $derived(playerState.state);

  function startGame() {
    logService.action('Click: "Почати гру" (PlayerManager)');
    navigationService.goTo("/game/local");
  }

  function handleAddPlayer() {
    logService.action('Click: "Додати гравця" (PlayerManager)');
    playerState.addPlayer();
  }

  function handleRemovePlayer(playerId: number, playerName: string) {
    logService.action(`Click: "Видалити гравця: ${playerName}" (PlayerManager)`);
    playerState.removePlayer(playerId);
  }

  function handleUpdatePlayer(playerId: number, data: any) {
    playerState.updatePlayer(playerId, data);
  }
</script>

{#if state}
  <div class="player-manager-card">
    <h2 data-testid="player-manager-title">
      {$t("localGame.playerManagerTitle")}
    </h2>

    <div class="player-list">
      {#each state.players as player (player.id)}
        <div class="player-row">
          <ColorPicker
            value={player.color}
            dataTestId="player-color-picker-{player.id}"
            on:change={(e) =>
              handleUpdatePlayer(player.id, { color: e.detail.value })}
          />
          <button
            class="player-type-btn"
            use:customTooltip={$t("localGame.togglePlayerType")}
            onclick={() =>
              handleUpdatePlayer(player.id, {
                type: player.type === "human" ? "ai" : "human",
              })}
            data-testid="player-type-btn-{player.id}"
          >
            {#if player.type === "ai"}
              <NotoEmoji name="robot" size="24px" />
            {:else}
              <NotoEmoji name="bust_in_silhouette" size="24px" />
            {/if}
          </button>
          <input
            type="text"
            class="player-name-input"
            placeholder="Ім'я гравця"
            value={player.name}
            oninput={(e) =>
              handleUpdatePlayer(player.id, {
                name: (e.currentTarget as HTMLInputElement).value,
              })}
            data-testid="player-name-input-{player.id}"
          />
          <button
            class="remove-player-btn"
            use:customTooltip={$t("localGame.removePlayer")}
            onclick={() => handleRemovePlayer(player.id, player.name)}
            disabled={state.players.length <= 2}
            data-testid="remove-player-btn-{player.id}"
          >
            ×
          </button>
        </div>
      {/each}
    </div>

    <div class="manager-actions">
      <button
        class="add-player-btn"
        onclick={handleAddPlayer}
        disabled={state.players.length >= 8}
        data-testid="add-player-btn"
      >
        {$t("localGame.addPlayer")}
      </button>
      <button
        class="start-game-btn"
        onclick={startGame}
        data-testid="start-game-btn"
      >
        {$t("localGame.startGame")}
      </button>
    </div>
  </div>
{/if}

<style>
  .player-manager-card {
    background: var(--bg-secondary);
    padding: 24px;
    border-radius: var(--unified-border-radius);
    box-shadow: var(--unified-shadow);
    border: var(--unified-border);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  h2 {
    text-align: center;
    margin: 0 0 10px 0;
    color: var(--text-primary);
  }
  .player-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .player-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .player-type-btn {
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 8px;
    border: var(--global-border-width) solid var(--border-color);
    background: var(--control-bg);
    color: var(--text-primary);
    font-size: 1.5em;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .player-name-input {
    flex-grow: 1;
    padding: 10px 14px;
    border-radius: 8px;
    border: var(--global-border-width) solid var(--border-color);
    background: var(--control-bg);
    color: var(--text-primary);
    font-size: 1em;
  }
  .remove-player-btn {
    width: 32px;
    height: 32px;
    min-height: 32px;
    max-height: 32px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background: var(--error-color);
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    align-self: center;
  }
  .remove-player-btn:disabled {
    background: var(--disabled-bg);
    cursor: not-allowed;
    opacity: 0.5;
  }
  .manager-actions {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .add-player-btn,
  .start-game-btn {
    padding: 12px;
    font-size: 1.1em;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition:
      background 0.2s,
      transform 0.1s;
  }
  .add-player-btn {
    background: var(--control-bg);
    color: var(--text-primary);
  }
  .add-player-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .start-game-btn {
    background: var(--confirm-action-bg);
    color: var(--confirm-action-text);
  }
</style>
