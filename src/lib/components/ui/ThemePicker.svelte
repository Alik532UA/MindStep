<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import NotoEmoji from "$lib/components/NotoEmoji.svelte";

    /**
     * Вибір стилю й теми — ОДИН компонент на обидва місця.
     *
     * ## Чому один
     *
     * Доти ці шість рядків, їхні кольори, дві кнопки й `.theme-name` були
     * ПОВНІСТЮ продубльовані у `main-menu/ThemeDropdown.svelte` і
     * `settings/tabs/GeneralTab.svelte`, а `.theme-btn[data-theme]` мав ще й
     * третю копію в `layouts/main-menu/theme-controls.css`. Тобто будь-яка
     * правка вигляду вимагала трьох однакових змін, і саме через це копії вже
     * розійшлися: у dropdown кнопки мали `data-testid`, у налаштуваннях — ні.
     *
     * ## Чому непрозорі кольори рядків, а не напівпрозорі
     *
     * ЦЕ ВИПРАВЛЕННЯ ДЕФЕКТУ, а не впорядкування. Рядки були
     * `rgba(…, 0.3…0.45)` — тобто їхня світлість залежала від того, що позаду.
     * У `ThemeDropdown` позаду темна заслінка модалки, і білі назви читалися
     * (8.49…13.39:1). У `GeneralTab` позаду СТОРІНКА, і у світлій темі рядки
     * складалися в пастель. Заміряно в браузері на `/settings?tab=general` зі
     * `data-theme="light"`:
     *
     * | стиль | композит | білий текст |
     * |---|---|---|
     * | purple | `rgb(191,161,244)` | 2.18:1 |
     * | green | `rgb(147,228,182)` | 1.50:1 |
     * | blue | `rgb(160,208,247)` | 1.63:1 |
     * | gray | `rgb(208,208,211)` | 1.54:1 |
     * | orange | `rgb(250,236,183)` | 1.18:1 |
     * | wood | світлий градієнт | 1.08:1 |
     *
     * Тобто у світлій темі назви тем були практично невидимі — білий на
     * майже білому. Тепер кольори НЕПРОЗОРІ й дорівнюють рівно тому, у що
     * напівпрозорі складалися над темною заслінкою: вигляд у dropdown не
     * змінився, а сторінка налаштувань отримала той самий, читабельний.
     *
     * ## Чому назва `wood` темна, а решта білі
     *
     * `wood` — єдиний світлий рядок (градієнт `#e2c9a0 → #c9a063`), і білий
     * текст на ньому дає 1.60:1. Колір назви підібраний розвʼязувачем під
     * поріг проти НАЙСВІТЛІШОГО стопу: `#392400` — 9.18:1 на світлому кінці й
     * 6.09:1 на темному. Решта пʼяти рядків темні, там білий проходить із
     * запасом.
     */

    type Style = "purple" | "green" | "blue" | "gray" | "orange" | "wood";
    type Theme = "light" | "normal" | "dark";

    interface Props {
        onSelect: (style: Style, theme: Theme) => void;
        /**
         * Префікс `data-testid`. Різний у двох місцях НАВМИСНО: пікер налаштувань
         * і пікер у модалці можуть бути в DOM одночасно (модалка теми
         * відкривається й зі сторінки налаштувань), а рантайм-інваріант
         * унікальності `data-testid` перевіряє саме `/settings`.
         */
        testIdPrefix?: string;
    }

    let { onSelect, testIdPrefix = "theme" }: Props = $props();

    const styles: readonly Style[] = ["purple", "green", "blue", "gray", "orange", "wood"];

    const nameOf = (style: Style) => $t(`mainMenu.themeName.${style}` as TranslationKey);
</script>

<div class="theme-picker" data-testid="{testIdPrefix}-picker-list">
    {#each styles as style (style)}
        <div class="theme-style-row" data-style={style}>
            <button
                class="theme-btn"
                data-theme="light"
                onclick={() => onSelect(style, "light")}
                aria-label={`${$t("settings.themeLight")} — ${nameOf(style)}`}
                data-testid="{testIdPrefix}-{style}-light-btn"
            >
                <NotoEmoji name="sun" size="20px" />
            </button>
            <!--
                СЕРЕДИНА РЯДКА — «звичайна» тема, і це КНОПКА, а не клік по
                рядку.

                Задача просила «натискання на рядок = стандартна». Рядок містить
                дві справжні кнопки, тож `role="button"` на ньому дав би кнопку
                в кнопці — axe називає це `nested-interactive` (WCAG 4.1.2), і
                гейт `tests/e2e/a11y.spec.ts` почервонів би на робочій сторінці.
                Крім того рядок не мав би ні місця в обході Tab, ні ознаки
                натискності.

                Кнопкою стала САМА НАЗВА: вона вже стояла між сонцем і місяцем,
                центрована й на всю ширину, тож на вигляд і на дотик це та сама
                «середина рядка» — але три кнопки-сусіди, природний Tab і
                видимий фокус.
            -->
            <button
                class="theme-name"
                onclick={() => onSelect(style, "normal")}
                aria-label={`${$t("settings.themeNormal")} — ${nameOf(style)}`}
                data-testid="{testIdPrefix}-{style}-normal-btn"
            >
                {nameOf(style)}
            </button>
            <button
                class="theme-btn"
                data-theme="dark"
                onclick={() => onSelect(style, "dark")}
                aria-label={`${$t("settings.themeDark")} — ${nameOf(style)}`}
                data-testid="{testIdPrefix}-{style}-dark-btn"
            >
                <NotoEmoji name="crescent_moon" size="20px" />
            </button>
        </div>
    {/each}
</div>

<style>
    .theme-picker {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        box-sizing: border-box;
    }

    .theme-style-row {
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 12px;
        justify-content: space-between;
        transition:
            transform 0.2s,
            box-shadow 0.2s;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .theme-style-row:hover {
        transform: scale(1.02);
        z-index: 1;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    /*
      НЕПРОЗОРІ значення — див. докблок компонента. Кожне дорівнює тому, у що
      попереднє напівпрозоре складалося над темною заслінкою модалки, тож
      вигляд у `ThemeDropdown` не змінився ані на піксель.
    */
    .theme-style-row[data-style="purple"] {
        background: #402373;
        border-color: rgba(124, 58, 237, 0.6);
    }

    .theme-style-row[data-style="green"] {
        background: #095929;
        border-color: rgba(0, 200, 80, 0.6);
    }

    .theme-style-row[data-style="blue"] {
        background: #17456b;
        border-color: rgba(33, 150, 243, 0.6);
    }

    .theme-style-row[data-style="gray"] {
        background: #2f2f2f;
        border-color: rgba(120, 120, 120, 0.5);
    }

    .theme-style-row[data-style="orange"] {
        background: #7b6d36;
        border-color: rgba(255, 224, 102, 0.6);
    }

    .theme-style-row[data-style="wood"] {
        background: linear-gradient(90deg, #e2c9a0 0%, #c9a063 100%);
        border-color: #d4b483;
    }

    .theme-name {
        flex: 1;
        text-align: center;
        font-weight: 700;
        color: #fff;
        font-size: 1.1rem;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        /* Кнопка, а не текст: скидаємо нативні стилі, лишаємо вигляд назви. */
        background: transparent;
        border: none;
        padding: 8px 4px;
        margin: 0;
        font-family: inherit;
        cursor: pointer;
        border-radius: 8px;
        transition:
            background 0.2s,
            transform 0.15s;
    }

    .theme-name:hover {
        background: rgba(255, 255, 255, 0.14);
    }

    .theme-name:active {
        transform: translateY(1px);
    }

    .theme-name:focus-visible {
        outline: 3px solid var(--control-selected, #ff9800);
        outline-offset: 2px;
    }

    .theme-style-row[data-style="wood"] .theme-name:hover {
        background: rgba(57, 36, 0, 0.16);
    }

    /* Єдиний світлий рядок — там білий текст дає 1.60:1. */
    .theme-style-row[data-style="wood"] .theme-name {
        color: #392400;
        text-shadow: none;
    }

    .theme-btn {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 0;
    }

    .theme-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }

    .theme-btn:active {
        transform: scale(0.95);
    }

    .theme-btn:focus-visible {
        outline: 3px solid var(--control-selected, #ff9800);
        outline-offset: 2px;
    }

    .theme-btn[data-theme="light"] {
        background: rgba(255, 255, 255, 0.25);
    }

    .theme-btn[data-theme="dark"] {
        background: rgba(0, 0, 0, 0.3);
    }

    /* На світлому рядку кнопки потребують темнішої підкладки, щоб їх було видно. */
    .theme-style-row[data-style="wood"] .theme-btn[data-theme="light"] {
        background: rgba(255, 255, 255, 0.55);
        border-color: rgba(57, 36, 0, 0.35);
    }

    .theme-style-row[data-style="wood"] .theme-btn[data-theme="dark"] {
        background: rgba(57, 36, 0, 0.35);
        border-color: rgba(57, 36, 0, 0.35);
    }
</style>
