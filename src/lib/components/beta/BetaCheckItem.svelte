<script lang="ts">
    import { BETA_UI } from '$lib/beta/betaChecklist.data';
    import { betaProgress } from '$lib/beta/betaProgress.svelte';
    import type { BetaCheck, BetaVote } from '$lib/beta/betaChecklist.types';

    interface Props {
        check: BetaCheck;
        lang: 'uk' | 'en';
    }

    let { check, lang }: Props = $props();

    const VOTES: readonly { vote: BetaVote; labelKey: keyof typeof BETA_UI }[] = [
        { vote: 'fail', labelKey: 'voteFail' },
        { vote: 'weird', labelKey: 'voteWeird' },
        { vote: 'ok', labelKey: 'voteOk' }
    ];

    const mark = $derived(betaProgress.markOf(check.id));
    const stale = $derived(betaProgress.isStale(check.id));
</script>

<li
    class="beta-item"
    class:is-negative={check.negative}
    data-state={mark?.vote ?? 'unchecked'}
    data-testid="beta-check-{check.id}-item"
>
    <div class="head">
        <span class="category" data-testid="beta-check-{check.id}-category-text">
            {check.category[lang]}
        </span>
        {#if check.negative}
            <!-- Позначка межі — словом, а не лише кольором: інакше вона не існує
                 для того, хто кольори не розрізняє (ACCESSIBILITY-v8 § 6). -->
            <span class="boundary">{BETA_UI.boundary[lang]}</span>
        {/if}
        {#if stale && mark}
            <span class="stale" data-testid="beta-check-{check.id}-stale-hint">
                {BETA_UI.staleHint[lang]}: {mark.version}
            </span>
        {/if}
    </div>

    <p class="text" data-testid="beta-check-{check.id}-text">{check.text[lang]}</p>

    <div class="votes">
        {#each VOTES as option (option.vote)}
            <button
                type="button"
                class="vote vote-{option.vote}"
                class:chosen={mark?.vote === option.vote}
                aria-pressed={mark?.vote === option.vote}
                onclick={() => betaProgress.vote(check.id, option.vote)}
                data-testid="beta-vote-{option.vote}-{check.id}-btn"
            >
                {BETA_UI[option.labelKey][lang]}
            </button>
        {/each}
    </div>
</li>

<style>
    .beta-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.85rem 1rem;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.35));
        border-left-width: 4px;
        border-radius: 6px;
        background: var(--bg-secondary, rgba(128, 128, 128, 0.06));
        list-style: none;
    }

    /*
     * Стан позначається трьома незалежними ознаками: колір лівої межі, її
     * товщина і насиченість тексту. Кольором одним — недоступно тому, хто його
     * не розрізняє (ACCESSIBILITY-v8, анти-патерни).
     */
    .beta-item[data-state='fail'] {
        border-left-color: #c24a44;
        border-left-width: 6px;
    }
    .beta-item[data-state='weird'] {
        border-left-color: #c9862f;
        border-left-width: 6px;
    }
    .beta-item[data-state='ok'] {
        border-left-color: #2e9b85;
    }
    .beta-item[data-state='ok'] .text {
        opacity: 0.62;
    }
    .beta-item[data-state='fail'] .text {
        font-weight: 600;
    }

    .head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8125rem;
    }

    .category {
        text-transform: uppercase;
        letter-spacing: 0.06em;
        opacity: 0.7;
    }

    .boundary,
    .stale {
        padding: 0.05rem 0.4rem;
        border: 1px solid currentColor;
        border-radius: 3px;
        font-size: 0.6875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .boundary {
        color: #c9862f;
    }

    .stale {
        opacity: 0.8;
    }

    .text {
        margin: 0;
        line-height: 1.55;
    }

    .votes {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    /* 44px — мінімальна сенсорна зона (ACCESSIBILITY-v8, WCAG 2.5.8). */
    .vote {
        min-height: 44px;
        min-width: 44px;
        padding: 0.4rem 0.9rem;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.4));
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .vote:hover {
        border-color: currentColor;
    }

    .vote.chosen {
        font-weight: 700;
        border-width: 2px;
    }

    .vote-fail.chosen {
        border-color: #c24a44;
        color: #c24a44;
    }
    .vote-weird.chosen {
        border-color: #c9862f;
        color: #c9862f;
    }
    .vote-ok.chosen {
        border-color: #2e9b85;
        color: #2e9b85;
    }

    @media (prefers-reduced-motion: reduce) {
        .vote {
            transition: none;
        }
    }
</style>
