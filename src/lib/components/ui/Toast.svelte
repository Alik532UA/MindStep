<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import type {
        Notification,
        NotificationType,
    } from "$lib/types/notification";
    import { notificationState } from "$lib/stores/notificationState.svelte";
    import NotoEmoji from "../NotoEmoji.svelte";

    export let notification: Notification;

    const icons: Record<NotificationType, string> = {
        error: "cross_mark",
        warning: "warning",
        success: "check_mark_button",
        info: "information",
        achievement: "trophy",
    };

    function remove() {
        notificationState.remove(notification.id);
    }
</script>

<div
    class="toast-item {notification.type}"
    transition:fly={{ y: 20, duration: 300 }}
    role="alert"
>
    <div class="icon">
        <NotoEmoji name={icons[notification.type]} size="24px" />
    </div>
    <div class="content">
        {#if notification.titleKey}
            <div class="title">{$t(notification.titleKey as TranslationKey)}</div>
        {:else if notification.titleRaw}
            <div class="title">{notification.titleRaw}</div>
        {/if}

        {#if notification.messageKey}
            <div class="message">
                {$t(
                    notification.messageKey as TranslationKey,
                    notification.messageValues,
                )}
            </div>
        {:else if notification.messageRaw}
            <div class="message">{notification.messageRaw}</div>
        {/if}
    </div>
    <button class="close-btn" on:click={remove} aria-label="Закрити">
        <NotoEmoji name="cross_mark" size="16px" />
    </button>
</div>

<style>
    .toast-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--bg-secondary);
        border: var(--global-border-width) solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        min-width: 280px;
        max-width: 400px;
        pointer-events: auto;
    }

    .toast-item.error {
        border-left: 4px solid var(--error-color, #f44336);
    }
    .toast-item.warning {
        border-left: 4px solid var(--warning-action-bg, #ff9800);
    }
    .toast-item.success {
        border-left: 4px solid var(--positive-score-color, #4caf50);
    }
    .toast-item.info {
        border-left: 4px solid var(--text-accent, #2196f3);
    }
    .toast-item.achievement {
        border-left: 4px solid var(--text-accent, #ffeb3b);
    }

    .icon {
        flex-shrink: 0;
        display: flex;
        align-items: center;
    }

    .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary);
        line-height: 1.2;
    }

    .message {
        font-size: 0.9rem;
        font-weight: 400;
        color: var(--text-secondary, rgba(255, 255, 255, 0.7));
        line-height: 1.4;
    }

    .close-btn {
        background: none;
        border: none;
        padding: 4px;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;
        display: flex;
        align-items: center;
    }

    .close-btn:hover {
        opacity: 1;
    }
</style>
