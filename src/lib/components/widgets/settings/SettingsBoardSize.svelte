<script lang="ts">
    import { boardState } from "$lib/stores/boardState.svelte";
    import { userActionService } from "$lib/services/userActionService";
    import { logService } from "$lib/services/logService.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import Stepper from "$lib/components/ui/Stepper.svelte";

    function changeBoardSize(increment: number) {
        logService.action(
            `Click: "Змінити розмір дошки: ${increment > 0 ? "+" : ""}${increment}" (SettingsBoardSize)`,
        );
        const currentSize = boardState.state?.boardSize;
        if (typeof currentSize !== "number") return;
        const newSize = currentSize + increment;
        if (newSize >= 2 && newSize <= 9) {
            userActionService.changeBoardSize(newSize);
        }
    }

    const state = $derived(boardState.state);
    const displayValue = $derived(state ? `${state.boardSize}x${state.boardSize}` : "?");
</script>

<div class="settings-expander__setting-item">
    <span class="settings-expander__label">{$t("settings.boardSize")}</span>

    <Stepper
        value={displayValue}
        dataTestId="settings-expander-size-adjuster"
        decreaseTestId="settings-expander-size-decrease-btn"
        increaseTestId="settings-expander-size-increase-btn"
        valueTestId="settings-expander-current-size"
        ondecrement={() => changeBoardSize(-1)}
        onincrement={() => changeBoardSize(1)}
    />
</div>
