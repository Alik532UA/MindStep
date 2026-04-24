<script lang="ts">
    /**
     * FeedbackMenu component
     * Вибір типу фідбеку.
     * Використовує Svelte 5 Runes та Snippets.
     */
    import { t } from "$lib/i18n/typedI18n";
    import GameModeButton from "$lib/components/game-modes/GameModeButton.svelte";
    import NotoEmoji from "$lib/components/NotoEmoji.svelte";
    import type { FeedbackType } from "$lib/services/feedbackService";

    interface Props {
        onselect?: (type: FeedbackType) => void;
        onglobalChat?: () => void;
    }

    let { onselect, onglobalChat }: Props = $props();

    function selectType(type: FeedbackType) {
        onselect?.(type);
    }

    function handleGlobalChat() {
        onglobalChat?.();
    }
</script>

{#snippet bulbIcon()}
    <NotoEmoji name="light_bulb" size="100%" />
{/snippet}

{#snippet bugIcon()}
    <NotoEmoji name="bug" size="100%" />
{/snippet}

{#snippet trophyIcon()}
    <NotoEmoji name="trophy" size="100%" />
{/snippet}

{#snippet thoughtIcon()}
    <NotoEmoji name="thought_balloon" size="100%" />
{/snippet}

{#snippet speechIcon()}
    <NotoEmoji name="speech_balloon" size="100%" />
{/snippet}

<div class="menu-list">
    <GameModeButton
        text={$t("ui.feedback.typeImprovement")}
        dataTestId="fb-type-improvement"
        onclick={() => selectType("improvement")}
        iconSnippet={bulbIcon}
    />

    <GameModeButton
        text={$t("ui.feedback.typeBug")}
        dataTestId="fb-type-bug"
        onclick={() => selectType("bug")}
        iconSnippet={bugIcon}
    />

    <GameModeButton
        text={$t("ui.feedback.typeReward")}
        dataTestId="fb-type-reward"
        onclick={() => selectType("reward_suggestion")}
        iconSnippet={trophyIcon}
    />

    <GameModeButton
        text={$t("ui.feedback.typeOther")}
        dataTestId="fb-type-other"
        onclick={() => selectType("other")}
        iconSnippet={thoughtIcon}
    />

    <div class="divider"></div>

    <GameModeButton
        text={$t("ui.feedback.typeGlobalChat")}
        dataTestId="fb-type-global-chat"
        onclick={handleGlobalChat}
        iconSnippet={speechIcon}
    />
</div>

<style>
    .menu-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
    }

    .divider {
        height: 1px;
        background: rgba(255, 255, 255, 0.15);
        margin: 8px 0;
        width: 100%;
    }
</style>
