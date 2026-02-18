<script lang="ts">
    import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import ButtonGroup from "$lib/components/ui/ButtonGroup.svelte";

    const settings = $derived(gameSettingsState.state);
</script>

<h3
    class="settings-expander__section-title"
    data-testid="settings-game-info-title"
>
    {$t("settings.gameInfoWidget.title")}
</h3>

<!-- FIX: Додано dataTestId для контейнера групи -->
<ButtonGroup
    className="settings-expander__button-group--three"
    dataTestId="settings-game-info-group"
    options={[
        {
            value: "hidden",
            label: $t("settings.gameInfoWidget.hidden"),
            active: settings.showGameInfoWidget === "hidden",
            dataTestId: "settings-expander-game-info-widget-hidden-btn",
            onClick: () => gameSettingsState.update(s => ({ ...s, showGameInfoWidget: "hidden" })),
        },
        {
            value: "shown",
            label: $t("settings.gameInfoWidget.shown"),
            active: settings.showGameInfoWidget === "shown",
            dataTestId: "settings-expander-game-info-widget-shown-btn",
            onClick: () => gameSettingsState.update(s => ({ ...s, showGameInfoWidget: "shown" })),
        },
        {
            value: "compact",
            label: $t("settings.gameInfoWidget.compact"),
            active: settings.showGameInfoWidget === "compact",
            dataTestId: "settings-expander-game-info-widget-compact-btn",
            onClick: () => gameSettingsState.update(s => ({ ...s, showGameInfoWidget: "compact" })),
        },
    ]}
/>
