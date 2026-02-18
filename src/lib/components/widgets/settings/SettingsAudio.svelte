<script lang="ts">
    import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
    import { userActionService } from "$lib/services/userActionService";
    import { logService } from "$lib/services/logService";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { blurOnClick } from "$lib/utils/actions";
    import { customTooltip } from "$lib/actions/customTooltip.js";
    import ToggleButton from "$lib/components/ToggleButton.svelte";
    import SvgIcons from "$lib/components/SvgIcons.svelte";

    let speechEnabled = $derived(gameSettingsState.state.speechEnabled);

    async function openVoiceSettings(e: MouseEvent) {
        logService.action('Click: "Voice Settings" (SettingsAudio)');
        e.stopPropagation();

        // Динамічне завантаження важкого компонента модалки
        const module = await import("../../VoiceSettingsModal.svelte");
        
        modalStateRune.showModal({
            component: module.default,
            variant: "menu",
            dataTestId: "voice-settings-modal",
            closeOnOverlayClick: true,
        });
    }
</script>

<!-- FIX: Додано data-testid для контейнера -->
<div
    class="settings-expander__setting-item"
    data-testid="settings-audio-container"
>
    <ToggleButton
        label={$t("gameControls.speech")}
        checked={speechEnabled}
        ontoggle={() => userActionService.toggleSpeech()}
        dataTestId="speech-toggle"
    />
    <button
        data-testid="settings-expander-voice-settings-btn"
        class="settings-expander__square-btn"
        use:blurOnClick
        use:customTooltip={$t("gameControls.voiceSettingsTitle")}
        onclick={openVoiceSettings}
    >
        <SvgIcons name="voice-settings" />
    </button>
</div>
