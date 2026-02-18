<script lang="ts">
    import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { logService } from "$lib/services/logService.js";
    import ToggleButton from "$lib/components/ToggleButton.svelte";

    const settings = $derived(gameSettingsState.state);
</script>

<div class="settings-list-group">
    <!-- ToggleButton: Режим заблокованих клітинок -->
    <ToggleButton
        label={$t("gameControls.blockMode")}
        checked={settings.blockModeEnabled}
        ontoggle={() => {
            const newCheckedState = !settings.blockModeEnabled;
            logService.action(
                `Click: "Режим заблокованих клітинок: ${newCheckedState}" (LocalToggleControls)`,
            );
            gameSettingsState.update((s) => ({
                ...s,
                blockModeEnabled: newCheckedState,
            }));
        }}
        dataTestId="block-mode-toggle"
    />

    <!-- ToggleButton: Автоматично приховувати дошку -->
    <ToggleButton
        label={$t("gameModes.autoHideBoard")}
        checked={settings.autoHideBoard}
        ontoggle={() => {
            const newCheckedState = !settings.autoHideBoard;
            logService.action(
                `Click: "Автоматично приховувати дошку: ${newCheckedState}" (LocalToggleControls)`,
            );
            gameSettingsState.update((s) => ({
                ...s,
                autoHideBoard: newCheckedState,
            }));
        }}
        dataTestId="auto-hide-board-toggle"
    />

    <!-- ToggleButton: Заборонити змінювати правила -->
    <ToggleButton
        label={$t("localGame.lockSettings")}
        checked={settings.lockSettings}
        ontoggle={() => {
            const newCheckedState = !settings.lockSettings;
            logService.action(
                `Click: "Заборонити змінювати правила: ${newCheckedState}" (LocalToggleControls)`,
            );
            gameSettingsState.update((s) => ({ ...s, lockSettings: newCheckedState }));
        }}
        dataTestId="lock-settings-toggle"
    />
</div>

<style>
    .settings-list-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
</style>
