<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import SvgIcons from "$lib/components/SvgIcons.svelte";

    interface Props {
        amIHost: boolean;
        isMyPlayerReady?: boolean;
        allReady: boolean;
        roomStatus: "waiting" | "playing" | "finished";
        ontoggleReady?: () => void;
        onstartGame?: () => void;
    }

    let {
        amIHost,
        isMyPlayerReady = false,
        allReady,
        roomStatus,
        ontoggleReady,
        onstartGame
    }: Props = $props();

</script>

<div class="actions-footer">
    <StyledButton
        variant={isMyPlayerReady ? "default" : "primary"}
        size="large"
        onclick={ontoggleReady}
        dataTestId="toggle-ready-btn"
        class="action-btn ready-btn"
        disabled={roomStatus !== "waiting"}
    >
        {#if isMyPlayerReady}
            {$t("onlineMenu.lobby.notReady")}
        {:else}
            {$t("onlineMenu.lobby.ready")}
        {/if}
    </StyledButton>

    {#if amIHost}
        <!-- Separator -->
        <div class="separator"></div>

        <StyledButton
            variant="primary"
            size="large"
            disabled={!allReady}
            onclick={onstartGame}
            dataTestId="start-game-btn"
            class="action-btn start-btn"
        >
            <span class="btn-content">
                <SvgIcons
                    name="boxing-glove-pictogram-1"
                    width="20"
                    height="20"
                />
                {$t("onlineMenu.lobby.startGame")}
            </span>
        </StyledButton>
    {/if}
</div>

<style>
    .actions-footer {
        padding: 24px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: rgba(0, 0, 0, 0.1);
    }

    .separator {
        height: 1px;
        background: rgba(255, 255, 255, 0.05);
        width: 100%;
    }

    /* Global needed for StyledButton class prop to work effectively for width */
    :global(.action-btn) {
        width: 100%;
        justify-content: center;
    }

    .btn-content {
        display: flex;
        align-items: center;
        gap: 8px;
    }
</style>
