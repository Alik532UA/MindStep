<script lang="ts">
    import SvgIcons from "$lib/components/SvgIcons.svelte";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { voiceControlState } from "$lib/stores/voiceControlState.svelte";

    interface Props {
        confirmDisabled?: boolean;
        blockModeEnabled?: boolean;
        isVoiceSupported?: boolean;
        disabled?: boolean;
        isIos?: boolean;
        onconfirm?: () => void;
        onnoMoves?: () => void;
        onvoiceCommand?: () => void;
    }

    let {
        confirmDisabled = false,
        blockModeEnabled = false,
        isVoiceSupported = false,
        disabled = false,
        isIos = false,
        onconfirm,
        onnoMoves,
        onvoiceCommand
    }: Props = $props();

    const voiceState = $derived(voiceControlState.state);

    let voiceButtonStyle = $derived(
        `box-shadow: 0 0 0 ${voiceState.volume * 20}px rgba(229, 57, 53, ${Math.min(voiceState.volume * 2, 1)});`
    );
    let voiceButtonTooltip = $derived(
        isVoiceSupported
            ? $t("gameControls.voiceCommandTitle")
            : $t("gameControls.voiceCommandNotSupported")
    );
</script>

<div class="action-btns">
    <StyledButton
        variant="primary"
        size="large"
        disabled={confirmDisabled || disabled}
        onclick={onconfirm}
        tooltip={$t("gameControls.confirm")}
        dataTestId="confirm-move-btn"
        style="width: 90%;"
    >
        {#snippet icon()}
            <span><SvgIcons name="confirm" /></span>
        {/snippet}
        {$t("gameControls.confirm")}
    </StyledButton>

    <StyledButton
        variant="warning"
        size="large"
        {disabled}
        onclick={onnoMoves}
        tooltip={$t("gameControls.noMovesTitle")}
        dataTestId="no-moves-btn"
        style="width: 90%;"
    >
        {#snippet icon()}
            <span><SvgIcons name="no-moves" /></span>
        {/snippet}
        {$t("gameControls.noMovesTitle")}
    </StyledButton>

    {#if !isIos}
        <StyledButton
            variant="info"
            size="large"
            disabled={!isVoiceSupported || disabled}
            onclick={onvoiceCommand}
            tooltip={voiceButtonTooltip}
            dataTestId="voice-command-btn"
            class={voiceState.lastTranscript !== "" ? "active" : ""}
            style="width: 90%; {voiceState.lastTranscript !== ''
                ? voiceButtonStyle
                : ''}"
        >
            {#snippet icon()}
                <span><SvgIcons name="microphone" /></span>
            {/snippet}
            {$t("gameControls.voiceCommand")}
        </StyledButton>
    {/if}
</div>

<style>
    .action-btns {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        align-items: center;
        margin-top: 18px;
    }
</style>
