<script lang="ts">
    import { columnStyleState } from "$lib/stores/columnStyleState.svelte";
    import { layoutStateRune } from "$lib/stores/layoutState.svelte";
    import { logService } from "$lib/services/logService.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { blurOnClick } from "$lib/utils/actions";
    import { customTooltip } from "$lib/actions/customTooltip.js";
    import SvgIcons from "$lib/components/SvgIcons.svelte";

    const styleMode = $derived(columnStyleState.state);
</script>

<!-- FIX: Додано data-testid для контейнера -->
<div
    class="settings-expander__setting-item"
    data-testid="settings-layout-container"
>
    <span class="settings-expander__label">{$t("ui.moveMenuItems")}</span>
    <div
        style="display: flex; gap: 12px;"
        data-testid="settings-layout-buttons"
    >
        <button
            data-testid="settings-expander-column-style-fixed-btn"
            class="settings-expander__square-btn"
            aria-label="Fixed mode"
            onclick={() => (columnStyleState.state = "fixed")}
            class:active={styleMode === "fixed"}
        >
            <SvgIcons name="fixed" />
        </button>
        <button
            data-testid="settings-expander-column-style-editing-btn"
            class="settings-expander__square-btn"
            aria-label="Flexible mode"
            onclick={() => (columnStyleState.state = "flexible")}
            class:active={styleMode === "flexible"}
        >
            <SvgIcons name="editing" />
        </button>
        <button
            data-testid="settings-expander-reset-layout-btn"
            class="settings-expander__square-btn"
            use:blurOnClick
            aria-label="Скинути положення меню"
            use:customTooltip={$t("ui.resetMenuLayout")}
            onclick={() => layoutStateRune.reset()}
        >
            <span
                style="width:50%;height:50%;display:flex;align-items:center;justify-content:center;"
            >
                <SvgIcons name="clear-cache" />
            </span>
        </button>
    </div>
</div>
