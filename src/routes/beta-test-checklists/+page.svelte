<script lang="ts">
    import { locale } from 'svelte-i18n';
    import { resolve } from '$app/paths';
    import type { Pathname } from '$app/types';
    import { BETA_CHECKS, BETA_TABS, BETA_UI } from '$lib/beta/betaChecklist.data';
    import { checksOfLevel, checksOfTab, progressOf } from '$lib/beta/betaChecklist';
    import { COVERAGE_ORDER, type Coverage } from '$lib/beta/betaChecklist.types';
    import { betaProgress } from '$lib/beta/betaProgress.svelte';
    import { buildReport } from '$lib/beta/betaReport';
    import { appSettingsState } from '$lib/stores/appSettingsState.svelte';
    import { logService } from '$lib/services/logService.svelte';
    import BetaCheckItem from '$lib/components/beta/BetaCheckItem.svelte';

    /**
     * Сторінка службова: у пошуку їй нема чого робити — вона конкурувала б із
     * грою й приводила туди тих, хто прийшов грати (BETA-CHECKLIST-v8 § 4). Це
     * НЕ таємниця: статичний сайт із відкритого репозиторію її не ховає, і
     * `robots.txt` разом із відсутністю в sitemap — про індексацію, а не про
     * доступ. Адреса працює завжди, її дають посиланням тому, хто згодився
     * допомогти.
     *
     * **Тег ПЕРЕПИСУЄТЬСЯ, а не додається, і це не стиль.** `<svelte:head>`
     * ДОПИСУЄ до `<head>`, а не заміщує в ньому: `app.html` уже несе
     * `<meta name="robots" content="index, follow, …">` для всього сайту, тож
     * `<svelte:head>` із `noindex` давав ДВА теги з протилежним змістом. Що
     * саме переможе, вирішує краулер, а не ми; перевірка `invariants.spec.ts`
     * ловила це як strict-mode violation і валила конвеєр.
     *
     * У шапку тег винести не можна: `+layout.ts` вимикає SSR для всього
     * застосунку (`export const ssr = false`), тож у поданому HTML немає
     * НІЧОГО зі `<svelte:head>` — уся розмітка для краулерів живе саме в
     * `app.html`. Отже єдиний спосіб мати рівно один тег — правити той, що вже
     * стоїть, і повертати його на місце при виході зі сторінки.
     */
    const INDEXABLE = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

    $effect(() => {
        const tag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
        if (!tag) return;

        const previous = tag.content;
        tag.content = 'noindex, nofollow';

        // Повернення саме до попереднього значення, а не до константи: якщо
        // `app.html` колись змінить директиви, відновлення не має їх затирати.
        // Константа лишається запасним шляхом на випадок порожнього значення.
        return () => {
            tag.content = previous || INDEXABLE;
        };
    });

    /**
     * Сторінка чеклиста бета-тестування (BETA-CHECKLIST § 8.3).
     *
     * Дві мови, не чотири, і це рішення § 2.4: пункти живуть у власних даних, а
     * не в словнику інтерфейсу. Решта мов показує англійський.
     *
     * МОВА ЧЕКЛИСТА ПЕРЕМИКАЄТЬСЯ ТУТ (§ 8.3, `BETA-OWN-LANG-BTN`).
     *
     * Пункти живуть двома мовами (§ 2.4), а інтерфейс застосунку має чотири
     * (`uk`, `en`, `crh`, `nl`). Доти чеклист просто йшов за локаллю сторінки, і
     * з цього виходив тупик, якого не видно з даних: людина, чий застосунок
     * відкрився нідерландською, бачила чеклист англійською й НЕ МАЛА ЧИМ
     * перемкнути його на українську — мовний перемикач застосунку дає їй чотири
     * мови інтерфейсу, а чеклист розуміє дві.
     *
     * `null` означає «як у застосунку»: доки кнопку не натиснули, поведінка та
     * сама, що була.
     */
    let chosenLang = $state<'uk' | 'en' | null>(null);
    const lang = $derived(chosenLang ?? ($locale?.startsWith('uk') ? 'uk' : 'en'));

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

    /**
     * Маршрути вкладки, які МОЖНА відкрити посиланням (§ 8.4).
     *
     * Перелік лежав у даних невикористаним: його читав лише інваріант § 5.1.
     * Динамічні сегменти (`/online/lobby/[roomId]`) відкинуто — конкретної
     * кімнати тут нема з чого взяти, а посилання в 404 гірше за його
     * відсутність.
     */
    const screens = $derived(
        (BETA_TABS.find((tab) => tab.id === activeTab)?.routes ?? []).filter(
            (route) => !route.includes('[')
        )
    );

    /**
     * Адреса → дискримінатор локатора: `/game/local` → `game-local`, корінь →
     * `root`. Косих рисок у локаторах немає (TESTID-AND-NAMING § 1.2).
     */
    const screenTid = (route: string) =>
        route.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'root';

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

    /**
     * Стирання у ДВА кроки (§ 6.3), а не `confirm()`.
     *
     * Нативний діалог блокує потік, виглядає чужим у будь-якій темі, не
     * перекладається разом зі сторінкою, і в headless його доводиться
     * перехоплювати окремим обробником — тобто e2e § 5.7 дорожчає на рівному
     * місці. Кнопка, яка сама стає підтвердженням, робить те саме дешевше.
     */
    function clearMarks() {
        if (!betaProgress.requestClear()) return;
        reportText = '';
        reportHint = '';
    }
</script>

<svelte:head>
    <title>{BETA_UI.pageTitle[lang]}</title>
</svelte:head>

<div class="beta-page" data-testid="beta-page-container">
    <header>
        <!--
          `resolve('/')`, а не `{base}/`: він типізований проти списку реальних
          маршрутів, тож помилка в адресі стає помилкою компіляції, а не
          мовчазним 404 у збірці з іншим base (SEO-v8 § 1.5).
        -->
        <!--
            ВИХІД ЗІ СТОРІНКИ ПІД ІМЕНЕМ (§ 8.4). Посилання було й доти — без
            локатора, тобто перевірити, що зі службової сторінки є куди піти,
            було нічим. Тестувальник приходить сюди за ПРЯМИМ посиланням: ні
            історії вкладки, ні пункта меню (сторінка навмисно поза меню, § 4).
        -->
        <a class="back" href={resolve('/')} data-testid="beta-home-link">
            ← {BETA_UI.home[lang]}
        </a>
        <h1>{BETA_UI.pageTitle[lang]}</h1>
        <p class="intro">{BETA_UI.intro[lang]}</p>
        <p class="progress">
            {BETA_UI.progress[lang]}:
            <b data-testid="beta-progress-value">{overall.current} / {overall.total}</b>
            <!--
                Версія була видима й доти — не було ЛОКАТОРА (§ 8.5.1,
                `BETA-VERSION-VISIBLE`). Підказка «позначено на іншій версії» на
                пункті має сенс лише поряд із числом поточної збірки, а довести,
                що число нікуди не поділося, без імені неможливо.
            -->
            <span class="version" data-testid="beta-version-text">{betaProgress.version}</span>

            <button
                type="button"
                class="lang"
                onclick={() => (chosenLang = lang === 'uk' ? 'en' : 'uk')}
                data-testid="beta-lang-btn"
            >
                {BETA_UI.langSwitch[lang]}
            </button>
            {#if overall.stale > 0}
                <span class="stale-total">
                    {BETA_UI.staleHint[lang]}: {overall.stale}
                </span>
            {/if}
        </p>
    </header>

    <nav class="tabs" aria-label={BETA_UI.pageTitle[lang]}>
        <!--
            Лічильник на КОЖНІЙ вкладці (§ 8.1). Вкладок вісім, у найбільшій —
            сімнадцять пунктів, а загальне «17 / 62» не каже, чи закінчена ця.
        -->
        {#each BETA_TABS as tab (tab.id)}
            {@const tabDone = betaProgress.progressOf(checksOfTab(tab.id))}
            <button
                type="button"
                class="tab"
                class:active={activeTab === tab.id}
                aria-pressed={activeTab === tab.id}
                onclick={() => (activeTab = tab.id)}
                data-testid="beta-tab-{tab.id}-btn"
            >
                {tab.title[lang]}
                <span
                    class="tab-count"
                    aria-label={BETA_UI.tabProgress[lang]}
                    data-testid="beta-tab-{tab.id}-progress-text"
                >
                    {tabDone.done}/{tabDone.total}
                </span>
            </button>
        {/each}
    </nav>

    <!--
        КУДИ ЙТИ ПО ЦЮ ВКЛАДКУ (§ 8.4, `BETA-SCREEN-LINKS`).

        Показаний той САМИЙ перелік, що читає інваріант § 5.1, тож розійтися з
        дійсністю непоміченим він не може — на відміну від окремого списку
        «корисних посилань», який поповнити забувають.
    -->
    {#if screens.length > 0}
        <p class="screens">
            <span>{BETA_UI.screens[lang]}</span>
            <!--
                `resolve(route as Pathname)` ПРЯМО в атрибуті, а не через
                помічник, і причина не в стилі: правило
                `svelte/no-navigation-without-resolve` дивиться на сам атрибут,
                тож виклик, схований у функцію, для нього не існує. А це
                правило тримається тут боргом, який може лише спадати — обхід
                коштував би +1 до числа, яке домовлено зменшувати.

                Приведення типу потрібне тому, що `tab.routes` оголошені як
                `readonly string[]`: інакше вкладка не могла б назвати маршрут
                із параметром (`/online/lobby/[roomId]`), який інваріант § 5.1
                звіряє з деревом `src/routes`. Ці рядки перевіряє саме
                інваріант, а не компілятор.
            -->
            {#each screens as route (route)}
                <a
                    class="screen"
                    href={resolve(route as Pathname)}
                    data-testid="beta-screen-{screenTid(route)}-link"
                >
                    {route}
                </a>
            {/each}
        </p>
    {/if}

    {#each COVERAGE_ORDER as level (level)}
        {@const items = checksOfLevel(activeTab, level)}
        <!--
            Номер, який бачить людина, — наскрізний по ВКЛАДЦІ (§ 2.2). Доти
            номерів не було взагалі: сказати «зламалося на третьому» було ніяк,
            і людина вимушено цитувала текст пункта цілком.
        -->
        {@const offset = tabChecks.findIndex((c) => c.coverage === level)}
        {#if items.length > 0}
            <section class="level" data-testid="beta-level-{level}-section">
                <h2>{BETA_UI[LEVEL_TITLE[level]][lang]}</h2>
                <p class="level-hint">{BETA_UI[LEVEL_HINT[level]][lang]}</p>
                <ul class="items">
                    {#each items as check, position (check.id)}
                        <BetaCheckItem {check} {lang} number={offset + position + 1} />
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
            <button
                type="button"
                class:armed={betaProgress.clearArmed}
                onclick={clearMarks}
                data-testid="beta-clear-btn"
            >
                {betaProgress.clearArmed ? BETA_UI.clearConfirm[lang] : BETA_UI.clear[lang]}
            </button>
        </div>

        <!--
            ДВІ ПІДКАЗКИ, А НЕ ОДНА (§ 6.2.1, `BETA-REPORT-HINT-SPLIT`).

            Доти `beta-report-hint` показував і «скопійовано», і «буфер
            відмовив», тож сценарій «підказка видима» зеленів однаково в обох
            випадках — тобто перевірка запасного шляху не перевіряла запасного
            шляху. Тепер відмова має власну назву, і саме її дивиться e2e.
        -->
        {#if reportHint && !reportText}
            <p class="hint" role="status" data-testid="beta-report-hint">{reportHint}</p>
        {/if}
        {#if reportHint && reportText}
            <p class="hint" role="status" data-testid="beta-report-failed-hint">{reportHint}</p>
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

    /*
     * Кнопка мови чеклиста й посилання на екрани вкладки: 44 px на дотик
     * (ACCESSIBILITY) дає саме `min-height` разом із `inline-flex`.
     */
    .lang,
    .screen {
        display: inline-flex;
        align-items: center;
        min-height: 44px;
        border: 0;
        padding: 0;
        background: none;
        font: inherit;
        color: inherit;
        text-decoration: underline;
        cursor: pointer;
    }

    .screens {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        opacity: 0.85;
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
    /* Рівна ширина цифр: лічильники в ряду вкладок не мусять стрибати. */
    .tab-count {
        margin-inline-start: 0.4rem;
        font-size: 0.78rem;
        font-weight: 400;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
    }

    /*
     * Зведена кнопка стирання (§ 6.3). Стан НЕ лише кольором: рамка товща,
     * напис напівжирний, і сам текст кнопки міняється на питання.
     */
    .actions button.armed {
        border-width: 2px;
        font-weight: 700;
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
