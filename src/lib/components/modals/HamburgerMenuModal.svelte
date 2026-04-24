<script lang="ts">
    /**
     * HamburgerMenuModal component
     * Головне навігаційне меню (мобільна версія).
     * Використовує Svelte 5 Runes та Snippets.
     */
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { t } from "$lib/i18n/typedI18n";
    import { logService } from "$lib/services/logService.svelte";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import GameModeButton from "$lib/components/game-modes/GameModeButton.svelte";
    import NotoEmoji from "$lib/components/NotoEmoji.svelte";

    interface Props {
        onPlay?: () => void;
        onFeedback?: () => void;
    }

    let { onPlay, onFeedback }: Props = $props();

    function closeMenu() {
        modalStateRune.closeModal();
    }

    function navigateTo(route: string) {
        logService.action(`Click: "Навігація: ${route}" (HamburgerMenuModal)`);
        closeMenu();
        goto(`${base}${route}`);
    }

    function openAuthModal() {
        logService.action('Click: "Account" (HamburgerMenuModal)');
        modalStateRune.open("auth-modal");
    }

    function handlePlay() {
        if (onPlay) onPlay();
        else modalStateRune.open("game-mode-modal");
    }

    function handleFeedback() {
        if (onFeedback) onFeedback();
        else modalStateRune.open("feedback-modal");
    }
</script>

{#snippet crownIcon()} <NotoEmoji name="crown" size="100%" /> {/snippet}
{#snippet trophyIcon()} <NotoEmoji name="trophy" size="100%" /> {/snippet}
{#snippet memoIcon()} <NotoEmoji name="memo" size="100%" /> {/snippet}
{#snippet gearIcon()} <NotoEmoji name="gear" size="100%" /> {/snippet}
{#snippet keyboardIcon()} <NotoEmoji name="keyboard" size="100%" /> {/snippet}
{#snippet coinIcon()} <NotoEmoji name="coin" size="100%" /> {/snippet}
{#snippet chatIcon()} <NotoEmoji name="speech_balloon" size="100%" /> {/snippet}
{#snippet userIcon()} <NotoEmoji name="bust_in_silhouette" size="100%" /> {/snippet}

<div class="menu-list-centered" data-testid="menu-list">
    <GameModeButton
        text={$t("mainMenu.virtualPlayer")}
        dataTestId="menu-item-play"
        onclick={handlePlay}
        iconSnippet={crownIcon}
    />

    <GameModeButton
        text={$t("rewards.pageTitle")}
        dataTestId="menu-item-rewards"
        onclick={() => navigateTo("/rewards")}
        iconSnippet={trophyIcon}
    />

    <GameModeButton
        text={$t("mainMenu.rules")}
        dataTestId="menu-item-rules"
        onclick={() => navigateTo("/rules")}
        iconSnippet={memoIcon}
    />

    <GameModeButton
        text={$t("mainMenu.settings")}
        dataTestId="menu-item-settings"
        onclick={() => navigateTo("/settings")}
        iconSnippet={gearIcon}
    />

    <GameModeButton
        text={$t("mainMenu.controls")}
        dataTestId="menu-item-controls"
        onclick={() => navigateTo("/settings?tab=hotkeys")}
        iconSnippet={keyboardIcon}
    />

    <GameModeButton
        text={$t("mainMenu.supporters")}
        dataTestId="menu-item-supporters"
        onclick={() => navigateTo("/supporters")}
        iconSnippet={coinIcon}
    />

    <GameModeButton
        text={$t("ui.feedback.title")}
        dataTestId="menu-item-feedback"
        onclick={handleFeedback}
        iconSnippet={chatIcon}
    />

    <GameModeButton
        text={$t("mainMenu.account")}
        dataTestId="menu-item-account"
        onclick={openAuthModal}
        iconSnippet={userIcon}
    />
</div>

<style>
    .menu-list-centered {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        box-sizing: border-box;
        margin: 0 auto;
    }
</style>
