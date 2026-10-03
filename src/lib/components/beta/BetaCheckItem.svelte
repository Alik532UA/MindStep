<script lang="ts">
    import { BETA_UI } from '$lib/beta/betaChecklist.data';
    import { betaProgress } from '$lib/beta/betaProgress.svelte';
    import type { BetaCheck, BetaVote } from '$lib/beta/betaChecklist.types';

    interface Props {
        check: BetaCheck;
        lang: 'uk' | 'en';
        /**
         * Номер у списку — наскрізний по ВКЛАДЦІ, не по рівню (§ 2.2), і
         * малюється з ПОЗИЦІЇ, а не з `id`. Доти номерів не було взагалі:
         * сказати «зламалося на третьому» було ніяк, і людина вимушено
         * цитувала текст пункта цілком.
         */
        number: number;
    }

    let { check, lang, number }: Props = $props();

    const VOTES: readonly { vote: BetaVote; labelKey: keyof typeof BETA_UI }[] = [
        { vote: 'ok', labelKey: 'voteOk' },
        { vote: 'fail', labelKey: 'voteFail' },
        { vote: 'unclear', labelKey: 'voteUnclear' },
        { vote: 'skip', labelKey: 'voteSkip' }
    ];

    const mark = $derived(betaProgress.markOf(check.id));
    const stale = $derived(betaProgress.isStale(check.id));

    /**
     * Локатор бере `id` пункта в kebab-case (§ 5.6, `BETA-LOCATOR-PER-CHECK`).
     *
     * Доти `check.id` підставлявся ЯК Є, і `menu_1` давав
     * `beta-check-menu_1-item` — назву, яку TESTID-AND-NAMING § 1.2 забороняє.
     * Обидва правила стояли в каноні, і не падало жодне: за форму `id` і за
     * форму локатора відповідали різні перевірки, а перехід одного в друге не
     * дивився ніхто.
     */
    const tid = $derived(check.id.replace(/_/g, '-'));
</script>

<li
    class="beta-item"
    class:is-negative={check.negative}
    data-state={mark?.vote ?? 'unchecked'}
    data-testid="beta-check-{tid}-item"
>
    <div class="head">
        <span class="number">{number}</span>
        <span class="category" data-testid="beta-check-{tid}-category-text">
            {check.category[lang]}
        </span>
        {#if check.negative}
            <!-- Позначка межі — словом, а не лише кольором: інакше вона не існує
                 для того, хто кольори не розрізняє (ACCESSIBILITY-v8 § 6). -->
            <span class="boundary">{BETA_UI.boundary[lang]}</span>
        {/if}
        {#if stale && mark}
            <span class="stale" data-testid="beta-check-{tid}-stale-hint">
                {BETA_UI.staleHint[lang]}: {mark.version}
            </span>
        {/if}
    </div>

    <p class="text" data-testid="beta-check-{tid}-text">{check.text[lang]}</p>

    <div class="votes">
        {#each VOTES as option (option.vote)}
            <button
                type="button"
                class="vote vote-{option.vote}"
                class:chosen={mark?.vote === option.vote}
                aria-pressed={mark?.vote === option.vote}
                onclick={() => betaProgress.vote(check.id, option.vote)}
                data-testid="beta-vote-{tid}-{option.vote}-btn"
            >
                {BETA_UI[option.labelKey][lang]}
            </button>
        {/each}
    </div>
</li>

<style>
    .number {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.35));
        font-variant-numeric: tabular-nums;
    }

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
        border-color: #c24a44;
        border-width: 2px;
        border-left-width: 6px;
    }
    .beta-item[data-state='unclear'],
    .beta-item[data-state='weird'] {
        border-color: #c9862f;
        border-width: 2px;
        border-left-width: 6px;
    }
    .beta-item[data-state='ok'] {
        border-color: #2e9b85;
        border-width: 2px;
    }
    .beta-item[data-state='skip'] {
        border-color: #2563eb;
        border-width: 2px;
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
        --vote-ok: #2e9b85;
        --vote-fail: #c24a44;
        --vote-unclear: #c9862f;
        --vote-skip: #2563eb;
        min-height: 44px;
        min-width: 44px;
        padding: 0.4rem 0.9rem;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.4));
        border-radius: 6px;
        color: inherit;
        font: inherit;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .vote:hover {
        border-color: currentColor;
    }

    .vote-ok {
        background: color-mix(in srgb, var(--vote-ok) 8%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }
    .vote-fail {
        background: color-mix(in srgb, var(--vote-fail) 8%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }
    .vote-unclear,
    .vote-weird {
        background: color-mix(in srgb, var(--vote-unclear) 8%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }
    .vote-skip {
        background: color-mix(in srgb, var(--vote-skip) 8%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }

    .vote.chosen {
        font-weight: 700;
        border-width: 4px;
    }

    .vote-ok.chosen {
        background: color-mix(in srgb, var(--vote-ok) 18%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }
    .vote-fail.chosen {
        background: color-mix(in srgb, var(--vote-fail) 18%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }
    .vote-unclear.chosen,
    .vote-weird.chosen {
        background: color-mix(in srgb, var(--vote-unclear) 18%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }
    .vote-skip.chosen {
        background: color-mix(in srgb, var(--vote-skip) 18%, var(--bg-secondary, rgba(128, 128, 128, 0.06)));
    }

    .vote.chosen.vote-ok {
        border-color: var(--vote-ok);
        color: var(--vote-ok);
    }
    .vote.chosen.vote-fail {
        border-color: var(--vote-fail);
        color: var(--vote-fail);
    }
    .vote.chosen.vote-unclear,
    .vote.chosen.vote-weird {
        border-color: var(--vote-unclear);
        color: var(--vote-unclear);
    }
    .vote.chosen.vote-skip {
        border-color: var(--vote-skip);
        color: var(--vote-skip);
    }

    @media (prefers-reduced-motion: reduce) {
        .vote {
            transition: none;
        }
    }
</style>
