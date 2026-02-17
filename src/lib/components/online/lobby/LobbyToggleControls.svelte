<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import ToggleButton from "$lib/components/ToggleButton.svelte";
    import SvgIcons from "$lib/components/SvgIcons.svelte";
    import type { Room } from "$lib/types/online";
    import { slide } from "svelte/transition";

    interface Props {
        room: Room;
        canEditSettings: boolean;
        amIHost: boolean;
        onUpdateSetting: (key: string, value: any) => void;
        onUpdateRoomSetting: (key: string, value: any) => void;
    }

    let {
        room,
        canEditSettings,
        amIHost,
        onUpdateSetting,
        onUpdateRoomSetting
    }: Props = $props();
</script>

<div class="group-box toggles">
    <!-- Автоматично приховувати дошку -->
    <div class="toggle-row">
        <ToggleButton
            label={$t("gameModes.autoHideBoard")}
            checked={room.settings.autoHideBoard}
            disabled={!canEditSettings}
            ontoggle={() =>
                onUpdateSetting("autoHideBoard", !room.settings.autoHideBoard)}
            dataTestId="auto-hide-board-toggle"
        />
    </div>

    <!-- Режим блокування -->
    <div class="toggle-row">
        <ToggleButton
            label={$t("gameControls.blockMode")}
            checked={room.settings.blockModeEnabled}
            disabled={!canEditSettings}
            ontoggle={() =>
                onUpdateSetting(
                    "blockModeEnabled",
                    !room.settings.blockModeEnabled,
                )}
            dataTestId="block-mode-toggle"
        />
    </div>

    <!-- Заборонити зміни під час гри -->
    <div class="toggle-row">
        <ToggleButton
            label={$t("localGame.lockSettings")}
            checked={room.settings.settingsLocked}
            disabled={!canEditSettings}
            ontoggle={() =>
                onUpdateSetting(
                    "settingsLocked",
                    !room.settings.settingsLocked,
                )}
            dataTestId="lock-settings-toggle"
        />
    </div>

    {#if amIHost}
        <!-- Host controls as normal toggle row -->
        <div class="toggle-row" transition:slide>
            <ToggleButton
                label={$t("onlineMenu.lobby.allowGuestSettings")}
                checked={room.allowGuestSettings}
                ontoggle={() =>
                    onUpdateRoomSetting(
                        "allowGuestSettings",
                        !room.allowGuestSettings,
                    )}
                dataTestId="allow-guest-settings-toggle"
            />
        </div>
    {/if}

    {#if !amIHost && !room.allowGuestSettings}
        <div
            class="host-only-hint"
            transition:slide
            data-testid="host-only-hint"
        >
            <SvgIcons name="lock" width="14" height="14" />
            {$t("onlineMenu.lobby.hostOnlySettings")}
        </div>
    {/if}
</div>

<style>
    .group-box.toggles {
        background: transparent;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .toggle-row {
        display: flex;
        justify-content: center;
    }

    .host-only-hint {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 0.85em;
        color: var(--text-secondary);
        font-style: italic;
        padding: 8px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
</style>
