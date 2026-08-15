<script lang="ts">
  import { slide } from "svelte/transition";
  import { untrack } from "svelte";
  import { t } from "$lib/i18n/typedI18n";
  import type { TranslationKey } from "$lib/types/i18n";
  // Саме той тип, який приходить із `GameOverContent`. У `models/score.ts`
  // лежить однойменний інтерфейс із обов'язковими полями — не він.
  import type { FinalScoreDetails } from "$lib/stores/gameOverState.svelte";

  /** Ключі бонусів, які показує розгортка. Порядок — порядок у списку. */
  const bonusKeys = [
    "sizeBonus",
    "blockModeBonus",
    "jumpBonus",
    "noMovesBonus",
    "distanceBonus",
    "finishBonus",
  ] as const satisfies readonly (keyof FinalScoreDetails)[];

  interface Props {
    // Було `any` — тобто друкарська помилка в назві бонуса не давала
    // ні помилки типів, ні рядка в UI (CODE-QUALITY-v8 § 1).
    bonusDetails: FinalScoreDetails;
    totalBonus: number;
    /** Лише ПОЧАТКОВИЙ стан розгортання — далі ним керує сам користувач. */
    expanded?: boolean;
  }

  let { bonusDetails, totalBonus, expanded = false }: Props = $props();

  /*
   * Навмисна чернетка (SVELTE-CORE-v8 § 1.10, третій випадок): проп задає
   * лише початкове значення, а далі блок відкриває й закриває користувач.
   * `untrack` тут означає конкретний наслідок: якщо `expanded` зміниться
   * згори (гравець перемкнув компактний режим підрахунку в налаштуваннях),
   * уже розгорнутий блок НЕ згорнеться назад.
   *
   * У легасі-версії тут стояло `$: isOpen = expanded`, тобто зворотна
   * поведінка. Різниця видима лише в одному сценарії — зміна налаштування
   * при відкритому вікні підсумку, — і нова поведінка там правильніша:
   * налаштування не має скасовувати щойно зроблену дію.
   */
  let isOpen = $state(untrack(() => expanded));

  function toggle() {
    isOpen = !isOpen;
  }

  const fullText = $derived(
    $t("modal.scoreDetails.bonusScore", { bonus: totalBonus }),
  );
  const parts = $derived(fullText.split("+"));
</script>

<div class="bonus-expander" class:open={isOpen}>
  <div
    class="expander-summary"
    onclick={toggle}
    onkeydown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
    role="button"
    tabindex="0"
    aria-expanded={isOpen}
    data-testid="bonus-expander-toggle"
  >
    <span class="bonus-score-summary" data-testid="total-bonus-value">
      {parts[0]}<span class="bonus-value">+{parts[1] || totalBonus}</span>
    </span>
    <span class="arrow" class:open={isOpen} aria-hidden="true"
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
  {#if isOpen}
    <div class="expander-content" transition:slide|local>
      {#each bonusKeys as key (key)}
        {@const value = bonusDetails[key] ?? 0}
        {#if value > 0}
          <div class="score-detail-row">
            <span>{$t(`modal.scoreDetails.${key}` as TranslationKey)}</span>
            <span data-testid={`${key}-value`}>+{value}</span>
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .bonus-expander {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-bottom: 20px;
    transition: background 0.2s;
  }

  .expander-summary {
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: bold;
    color: var(--text-primary);
  }

  .bonus-score-summary {
    font-weight: normal;
    color: var(--text-secondary);
  }

  .bonus-value {
    color: var(--confirm-action-bg);
    font-weight: bold;
    margin-left: 0.5em;
  }

  .arrow {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(0deg);
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .expander-content {
    padding: 0 16px 12px;
    overflow: hidden;
  }

  .score-detail-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 1em;
    color: var(--text-secondary);
  }
  .score-detail-row:last-of-type {
    border-bottom: none;
  }
  .score-detail-row span[data-testid$="-value"] {
    font-weight: bold;
    color: var(--text-primary);
  }
</style>
