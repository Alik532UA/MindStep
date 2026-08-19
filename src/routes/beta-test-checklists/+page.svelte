<script lang="ts">
    import { locale } from 'svelte-i18n';
    import { resolve } from '$app/paths';
    import { BETA_CHECKS, BETA_TABS, BETA_UI } from '$lib/beta/betaChecklist.data';
    import { checksOfLevel, checksOfTab, progressOf } from '$lib/beta/betaChecklist';
    import { COVERAGE_ORDER, type Coverage } from '$lib/beta/betaChecklist.types';
    import { betaProgress } from '$lib/beta/betaProgress.svelte';
    import { buildReport } from '$lib/beta/betaReport';
    import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
    import { logService } from '$lib/services/logService.svelte';
    import BetaCheckItem from '$lib/components/beta/BetaCheckItem.svelte';

    /**
     * Сторінка чеклиста бета-тестування (BETA-CHECKLIST-v8).
     *
     * Дві мови, не чотири, і це рішення § 2.4: пункти живуть у власних даних, а
     * не в словнику інтерфейсу. Решта мов показує англійський.
     */
    const lang = $derived($locale?.startsWith('uk') ? 'uk' : 'en');

    let activeTab = $state(BETA_TABS[0].id);

    const LEVEL_TITLE: Record<Coverage, keyof typeof BETA_UI> = {
        manual: 'levelManual',
        testable: 'levelTestable',
        covered: 'levelCovered'
    };
    const LEVEL_HINT: Record<Coverage, keyof typeof BETA_UI> = {
        manual: 'levelManualHint',
        testable: 'levelTestableHint',
        covered: 'levelCoveredHint'
    };

    const tabChecks = $derived(checksOfTab(activeTab));
    const overall = $derived(progressOf(BETA_CHECKS, betaProgress.marks, betaProgress.version));

    let reportText = $state('');
    let reportHint = $state('');

    async function copyReport() {
        const tabTitles = Object.fromEntries(BETA_TABS.map((tab) => [tab.id, tab.title[lang]]));
        const text = buildReport(BETA_CHECKS, betaProgress.marks, tabTitles, {
            version: betaProgress.version,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            language: $locale ?? 'unknown',
            theme: appSettingsState.state.theme
        });

        /*
         * Запасний шлях обов'язковий (§ 6.2). `writeText` відмовляє буденно:
         * вкладка не у фокусі, сторінка не через https, немає дозволу. Перша
         * версія в чужому джерелі лише писала в лог — кнопка виглядала
         * натиснутою, а звіту не було НІДЕ, тобто вся робота тестувальника
         * зникала на останньому кроці.
         */
        try {
            if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
            await navigator.clipboard.writeText(text);
            reportText = '';
            reportHint = BETA_UI.copied[lang];
        } catch (e) {
            logService.warn('[beta] буфер обміну недоступний — звіт показано текстом', e);
            reportText = text;
            reportHint = BETA_UI.copyFailed[lang];
        }
    }

    function clearMarks() {
        if (!confirm(BETA_UI.clearConfirm[lang])) return;
        betaProgress.clear();
        reportText = '';
        reportHint = '';
    }
</script>

<svelte:head>
    <!--
      Сторінка службова: у пошуку їй нема чого робити — вона конкурувала б із
      грою й приводила туди тих, хто прийшов грати (§ 4). Це НЕ таємниця:
      статичний сайт із відкритого репозиторію її не тримає, і `robots.txt`
      разом із відсутністю в sitemap — про індексацію, а не про доступ.
      Адреса працює завжди, її дають посиланням тому, хто згодився допомогти.
    -->
    <meta name="robots" content="noindex, nofollow" />
    <title>{BETA_UI.pageTitle[lang]}</title>
</svelte:head>

<div class="beta-page" data-testid="beta-page-container">
    <header>
        <!--
          `resolve('/')`, а не `{base}/`: він типізований проти списку реальних
          маршрутів, тож помилка в адресі стає помилкою компіляції, а не
          мовчазним 404 у збірці з іншим base (SEO-v8 § 1.5).
        -->
        <a class="back" href={resolve('/')}>← {lang === 'uk' ? 'На головну' : 'Home'}</a>
        <h1>{BETA_UI.pageTitle[lang]}</h1>
        <p class="intro">{BETA_UI.intro[lang]}</p>
        <p class="progress">
            {BETA_UI.progress[lang]}:
            <b data-testid="beta-progress-value">{overall.current} / {overall.total}</b>
            <span class="version">{betaProgress.version}</span>
            {#if overall.stale > 0}
                <span class="stale-total">
                    {BETA_UI.staleHint[lang]}: {overall.stale}
                </span>
            {/if}
        </p>
    </header>

    <nav class="tabs" aria-label={BETA_UI.pageTitle[lang]}>
        {#each BETA_TABS as tab (tab.id)}
            <button
                type="button"
                class="tab"
                class:active={activeTab === tab.id}
                aria-pressed={activeTab === tab.id}
                onclick={() => (activeTab = tab.id)}
                data-testid="beta-tab-{tab.id}-btn"
            >
                {tab.title[lang]}
            </button>
        {/each}
    </nav>

    {#each COVERAGE_ORDER as level (level)}
        {@const items = checksOfLevel(activeTab, level)}
        {#if items.length > 0}
            <section class="level" data-testid="beta-level-{level}-section">
                <h2>{BETA_UI[LEVEL_TITLE[level]][lang]}</h2>
                <p class="level-hint">{BETA_UI[LEVEL_HINT[level]][lang]}</p>
                <ul class="items">
                    {#each items as check (check.id)}
                        <BetaCheckItem {check} {lang} />
                    {/each}
                </ul>
            </section>
        {/if}
    {/each}

    <footer>
        <div class="actions">
            <button
                type="button"
                class="primary"
                onclick={copyReport}
                data-testid="beta-report-btn"
            >
                {BETA_UI.copyReport[lang]}
            </button>
            <button type="button" onclick={clearMarks} data-testid="beta-clear-btn">
                {BETA_UI.clear[lang]}
            </button>
        </div>

        {#if reportHint}
            <p class="hint" role="status" data-testid="beta-report-hint">{reportHint}</p>
        {/if}
        {#if reportText}
            <!-- Звіт текстом поруч, коли буфер відмовив: інакше робота зникає
                 на останньому кроці (§ 6.2). -->
            <textarea
                class="report"
                readonly
                rows="12"
                value={reportText}
                data-testid="beta-report-input"
            ></textarea>
        {/if}
        {#if tabChecks.length === 0}
            <p class="hint">{BETA_UI.nothingMarked[lang]}</p>
        {/if}
    </footer>
</div>

<style>
    .beta-page {
        max-width: 56rem;
        margin: 0 auto;
        padding: clamp(1rem, 4vw, 2.5rem) clamp(0.75rem, 3vw, 2rem) 4rem;
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
        color: var(--text-primary, inherit);
    }

    header {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .back {
        align-self: flex-start;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        color: inherit;
        opacity: 0.75;
        text-decoration: none;
    }
    .back:hover {
        opacity: 1;
        text-decoration: underline;
    }

    h1 {
        margin: 0;
        font-size: clamp(1.5rem, 4dvh, 2.25rem);
        text-wrap: balance;
    }

    .intro,
    .level-hint {
        margin: 0;
        max-width: 62ch;
        opacity: 0.78;
        line-height: 1.6;
    }

    .progress {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0.5rem;
    }
    .progress b {
        font-variant-numeric: tabular-nums;
        font-size: 1.15rem;
    }
    .version,
    .stale-total {
        font-size: 0.75rem;
        opacity: 0.7;
        padding: 0.05rem 0.4rem;
        border: 1px solid currentColor;
        border-radius: 3px;
    }

    .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tab {
        min-height: 44px;
        padding: 0.4rem 0.9rem;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.4));
        border-radius: 999px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 0.875rem;
        cursor: pointer;
    }
    .tab.active {
        font-weight: 700;
        border-width: 2px;
        background: var(--bg-secondary, rgba(128, 128, 128, 0.12));
    }

    .level {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    h2 {
        margin: 0;
        font-size: 1.15rem;
    }

    .items {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    footer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        border-top: 1px solid var(--border-color, rgba(128, 128, 128, 0.3));
        padding-top: 1.25rem;
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }

    .actions button {
        min-height: 44px;
        padding: 0.5rem 1.1rem;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.4));
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
    }
    .actions button.primary {
        border-width: 2px;
        font-weight: 650;
    }

    .hint {
        margin: 0;
        opacity: 0.85;
    }

    .report {
        width: 100%;
        font-family: ui-monospace, Consolas, monospace;
        font-size: 0.8125rem;
        line-height: 1.5;
        padding: 0.75rem;
        border: 1px solid var(--border-color, rgba(128, 128, 128, 0.4));
        border-radius: 6px;
        background: var(--bg-secondary, rgba(128, 128, 128, 0.06));
        color: inherit;
        resize: vertical;
    }
</style>
