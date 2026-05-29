<script lang="ts">
  import { t } from "$lib/i18n/typedI18n";
  import type { TranslationKey } from "$lib/types/i18n";
  import ScoreBonusExpander from "../widgets/ScoreBonusExpander.svelte";
  import NotoEmoji from "$lib/components/NotoEmoji.svelte";
  import StyledButton from "$lib/components/ui/StyledButton.svelte";
  import type {
    FinalScoreDetails,
    PlayerScoreResult,
  } from "$lib/stores/gameOverState.svelte";

  interface Props {
    content: any;
    titleKey?: TranslationKey;
    titleValues?: any;
    mode?: "game-over" | "no-moves";
    onPlayAgain?: () => void;
    onWatchReplay?: () => void;
    onMainMenu?: () => void;
    onLeaveLobby?: () => void;
    onContinue?: () => void;
    onFinish?: () => void;
    dataTestId?: string;
    continueText?: string;
    finishText?: string;
  }

  let {
    content,
    titleKey = "modal.gameOverTitle",
    titleValues = {},
    mode = "game-over",
    onPlayAgain,
    onWatchReplay,
    onMainMenu,
    onLeaveLobby,
    onContinue,
    onFinish,
    dataTestId = "game-over-modal",
    continueText,
    finishText
  }: Props = $props();

  let isCompactScoreMode = $state(true);

  const scoreDetails = $derived(content?.scoreDetails as FinalScoreDetails);
  const totalBonus = $derived(scoreDetails
    ? (scoreDetails.sizeBonus ?? 0) +
      (scoreDetails.blockModeBonus ?? 0) +
      (scoreDetails.jumpBonus ?? 0) +
      (scoreDetails.noMovesBonus ?? 0) +
      (scoreDetails.distanceBonus ?? 0) +
      (scoreDetails.finishBonus ?? 0)
    : 0);

  const playerScores = $derived(content?.playerScores as Array<
    PlayerScoreResult & {
      playerName: string;
      playerColor: string;
      isWinner: boolean;
      isLoser: boolean;
    }
  >);
</script>

<div class="game-over-content" data-testid="game-over-content">
  <!-- Заголовок -->
  <h2
    class="modal-title-menu"
    data-testid={`${dataTestId}-title`}
    data-i18n-key={titleKey}
  >
    {$t(titleKey, titleValues)}
  </h2>

  <!-- Причина (текст) -->
  {#if typeof content === "object" && content && "reason" in content}
    <p
      class="reason-text"
      data-testid={`${dataTestId}-content-reason`}
      data-i18n-key={content.reasonKey}
    >
      {content.reason}
    </p>
  {/if}

  <!-- Картка з результатами -->
  <div class="results-card">
    {#if playerScores && playerScores.length > 0}
      <div class="player-scores-container">
        <h3>{$t("modal.playerScores")}:</h3>
        {#each playerScores as playerScore}
          <div
            class="player-score-row"
            class:winner={playerScore.isWinner}
            class:loser={playerScore.isLoser}
          >
            <div class="score-content-wrapper">
              {#if playerScore.isWinner}
                <span class="winner-badge"
                  ><NotoEmoji name="trophy" size="1.2em" /></span
                >
              {:else if playerScore.isLoser}
                <span class="loser-badge"
                  ><NotoEmoji name="spiral_shell" size="1.2em" /></span
                >
              {/if}

              <span
                class="player-name-plate"
                style={playerScore.playerColor
                  ? `background-color: ${playerScore.playerColor}`
                  : ""}
              >
                {playerScore.playerName}
              </span>

              <span class="score-value">: {playerScore.score}</span>
            </div>
          </div>
        {/each}
      </div>
    {:else if scoreDetails}
      <div
        class="score-details-container"
        data-testid="score-details-container"
      >
        <div class="score-detail-row" data-testid="base-score">
          {$t("modal.scoreDetails.baseScore")}
          <span data-testid="base-score-value"
            >{scoreDetails.baseScore ?? 0}</span
          >
        </div>
      </div>

      {#if totalBonus > 0}
        <ScoreBonusExpander
          bonusDetails={scoreDetails}
          {totalBonus}
          expanded={!isCompactScoreMode}
        />
      {/if}

      {#if scoreDetails.totalPenalty > 0}
        <div class="score-detail-row penalty" data-testid="total-penalty">
          {$t("modal.scoreDetails.penalty")}
          <span data-testid="total-penalty-value"
            >-{scoreDetails.totalPenalty}</span
          >
        </div>
      {/if}

      <div class="final-score-container" class:compact={isCompactScoreMode}>
        {#if isCompactScoreMode}
          <div class="final-score-compact">
            <span class="final-score-label-inline"
              >{$t("modal.scoreDetails.finalScore")}</span
            >
            <span
              class="final-score-value-inline"
              data-testid="final-score-value"
            >
              {scoreDetails.totalScore ?? 0}
            </span>
          </div>
        {:else}
          <div class="final-score-label">
            {$t("modal.scoreDetails.finalScore")}
          </div>
          <div class="final-score-value" data-testid="final-score-value">
            {scoreDetails.totalScore ?? 0}
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <!-- КНОПКИ ДІЙ (Інтегровані в контент) -->
  <div class="actions-column">
    {#if mode === "no-moves"}
      <!-- Кнопки для ситуації "Немає ходів" -->
      {#if onContinue}
        <StyledButton
          variant="primary"
          size="large"
          onclick={onContinue}
          dataTestId="continue-game-no-moves-btn"
        >
          {continueText || $t("modal.continueGame")}
        </StyledButton>
      {/if}

      {#if onFinish}
        <StyledButton
          variant="default"
          onclick={onFinish}
          dataTestId="finish-game-with-bonus-btn"
        >
          {finishText || $t("modal.finishGameWithBonus")}
        </StyledButton>
      {/if}
    {:else}
      <!-- Кнопки для ситуації "Game Over" -->
      {#if onPlayAgain}
        <StyledButton
          variant="primary"
          size="large"
          onclick={onPlayAgain}
          dataTestId="play-again-btn"
        >
          {$t("modal.playAgain")}
        </StyledButton>
      {/if}
    {/if}

    <!-- Спільна кнопка перегляду запису -->
    {#if onWatchReplay}
      <StyledButton
        variant="info"
        onclick={onWatchReplay}
        dataTestId="watch-replay-btn"
      >
        {$t("modal.watchReplay")}
      </StyledButton>
    {/if}

    <!-- Кнопка виходу з лобі (тільки для Online) -->
    {#if onLeaveLobby}
      <StyledButton
        variant="danger"
        onclick={onLeaveLobby}
        dataTestId="leave-lobby-btn"
      >
        {$t("modal.leaveLobby")}
      </StyledButton>
    {/if}

    <!-- Кнопка головного меню (тільки для Game Over) -->
    {#if mode === "game-over" && onMainMenu}
      <StyledButton
        variant="default"
        onclick={onMainMenu}
        dataTestId="game-over-main-menu-btn"
      >
        {$t("modal.mainMenu")}
      </StyledButton>
    {/if}
  </div>
</div>

<style>
  .game-over-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: var(--responsive-max-width, 360px);
    box-sizing: border-box;
  }

  .modal-title-menu {
    text-align: center;
    font-size: 1.8em;
    font-weight: 800;
    color: #fff;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    white-space: pre-line;
  }

  .reason-text {
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1em;
    margin: 0;
    white-space: pre-line;
  }

  .results-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    box-sizing: border-box;
  }

  .actions-column {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-top: 10px;
  }

  /* Стилі для таблиці результатів */
  .player-scores-container {
    margin-bottom: 0;
    padding: 0;
    background: transparent;
    border: none;
  }
  .player-scores-container h3 {
    margin: 0 0 10px 0;
    font-size: 1.1em;
    color: #fff;
  }
  .player-score-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .player-score-row:last-child {
    border-bottom: none;
  }
  .score-content-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
  }
  .winner-badge,
  .loser-badge {
    margin-right: 10px;
    display: inline-flex;
    align-items: center;
  }
  .player-name-plate {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    color: #ffffff;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  .score-value {
    font-weight: bold;
    white-space: nowrap;
    margin-left: 4px;
    color: #fff;
  }

  /* Стилі для деталей рахунку */
  .score-details-container {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    padding: 12px 16px;
    margin-bottom: 20px;
  }
  .score-detail-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 1em;
    color: rgba(255, 255, 255, 0.7);
  }
  .score-detail-row.penalty span {
    color: var(--error-color);
  }
  .score-detail-row span {
    font-weight: bold;
    color: #fff;
  }
  .final-score-container {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    padding: 16px;
    text-align: center;
  }
  .final-score-container.compact {
    padding: 12px;
  }
  .final-score-compact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  .final-score-label-inline {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
  }
  .final-score-value-inline {
    font-size: 2.2em;
    font-weight: 700;
    color: #fff;
    line-height: 1;
  }
  .final-score-label {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 8px;
  }
  .final-score-value {
    font-size: 2.8em;
    font-weight: 700;
    color: #fff;
    line-height: 1;
  }
</style>
