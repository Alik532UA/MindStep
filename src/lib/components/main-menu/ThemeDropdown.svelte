<script lang="ts">
    import { appSettingsState } from "$lib/stores/appSettingsState.svelte";
    import { logService } from "$lib/services/logService.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import ThemePicker from "$lib/components/ui/ThemePicker.svelte";
    import { acceptsShortcut } from "$lib/services/keyboard";

    /*
     * Рядки пікера живуть у `ui/ThemePicker.svelte` — див. його докблок. Тут
     * лишилася лише реакція на вибір: закрити модалку після зміни теми.
     */
    function selectTheme(
        style: "purple" | "green" | "blue" | "gray" | "orange" | "wood",
        theme: "light" | "normal" | "dark",
    ) {
        logService.action(`Click: "Тема: ${style} ${theme}" (ThemeDropdown)`);
        appSettingsState.updateSettings({ style, theme });
        modalStateRune.closeModal();
    }

    /* Захисти з `services/keyboard`, а не власна перевірка клавіші. */
    function handleKeydown(e: KeyboardEvent) {
        if (!acceptsShortcut(e)) return;
        if (e.code === "Escape") modalStateRune.closeModal();
    }
</script>

<div
    class="theme-dropdown"
    role="dialog"
    tabindex="0"
    aria-modal="true"
    aria-label={$t("mainMenu.themeDropdown")}
    onclick={(e) => {
        e.stopPropagation();
    }}
    onkeydown={handleKeydown}
>
    <ThemePicker onSelect={selectTheme} testIdPrefix="theme" />
</div>

<style>
    .theme-dropdown {
        background: transparent;
        padding: 16px;
        border-radius: 18px;
        width: 100%;
        box-sizing: border-box;
    }
</style>
