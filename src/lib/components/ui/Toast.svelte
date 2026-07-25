<script lang="ts">
    import { fly, fade } from "svelte/transition";
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import type { Notification } from "$lib/types/notification";
    import { notificationState } from "$lib/stores/notificationState.svelte";
    import { CheckCircle2, AlertCircle, AlertTriangle, Info, Trophy, X } from "lucide-svelte";

    interface Props {
        notification: Notification;
    }

    let { notification }: Props = $props();

    function remove() {
        notificationState.remove(notification.id);
    }

    const duration = $derived(notification.duration ?? 4000);
</script>

<div
    class="toast-item {notification.type}"
    transition:fly={{ y: 20, duration: 300 }}
    role={notification.type === 'error' ? 'alert' : 'status'}
    data-testid="toast-message-{notification.type}"
    onmouseenter={() => notificationState.pause(notification.id)}
    onmouseleave={() => notificationState.resume(notification.id)}
    onfocusin={() => notificationState.pause(notification.id)}
    onfocusout={() => notificationState.resume(notification.id)}
>
    <div class="icon" data-testid="toast-icon-{notification.type}">
        {#if notification.type === 'success'}
            <CheckCircle2 size={20} />
        {:else if notification.type === 'error'}
            <AlertCircle size={20} />
        {:else if notification.type === 'warning'}
            <AlertTriangle size={20} />
        {:else if notification.type === 'achievement'}
            <Trophy size={20} />
        {:else}
            <Info size={20} />
        {/if}
    </div>

    <div class="content" data-testid="toast-content-group">
        {#if notification.titleKey}
            <div class="title" data-testid="toast-title-label">{$t(notification.titleKey as TranslationKey)}</div>
        {:else if notification.titleRaw}
            <div class="title" data-testid="toast-title-label">{notification.titleRaw}</div>
        {/if}

        {#if notification.messageKey}
            <div class="message" data-testid="toast-text-label">
                {$t(
                    notification.messageKey as TranslationKey,
                    notification.messageValues,
                )}
            </div>
        {:else if notification.messageRaw}
            <div class="message" data-testid="toast-text-label">{notification.messageRaw}</div>
        {/if}
    </div>

    <button
        class="close-btn"
        onclick={remove}
        aria-label={$t('modal.close' as TranslationKey) || 'Закрити'}
        data-testid="toast-close-button"
    >
        <X size={16} />
    </button>

    {#if duration > 0}
        <div
            class="toast-progress"
            style="animation-duration: {duration}ms"
            data-testid="toast-progress-bar"
            aria-hidden="true"
        ></div>
    {/if}
</div>

<style>
    .toast-item {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--bg-secondary, #1e2025);
        border: var(--global-border-width, 1px) solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        min-width: 280px;
        max-width: 420px;
        pointer-events: auto;
        color: var(--text-primary, #ffffff);
    }

    .toast-item.error {
        border-left: 4px solid var(--error-color, #ef4444);
    }
    .toast-item.warning {
        border-left: 4px solid var(--warning-action-bg, #f59e0b);
    }
    .toast-item.success {
        border-left: 4px solid var(--positive-score-color, #22c55e);
    }
    .toast-item.info {
        border-left: 4px solid var(--text-accent, #3b82f6);
    }
    .toast-item.achievement {
        border-left: 4px solid var(--accent-gold, #eab308);
    }

    .toast-item:hover .toast-progress,
    .toast-item:focus-within .toast-progress {
        animation-play-state: paused;
    }

    @keyframes toast-shrink {
        from { transform: scaleX(1); }
        to   { transform: scaleX(0); }
    }

    .toast-progress {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        transform-origin: left center;
        animation: toast-shrink linear forwards;
    }

    .toast-item.error .toast-progress { background: #ef4444; }
    .toast-item.warning .toast-progress { background: #f59e0b; }
    .toast-item.success .toast-progress { background: #22c55e; }
    .toast-item.info .toast-progress { background: #3b82f6; }
    .toast-item.achievement .toast-progress { background: #eab308; }

    .icon {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        color: var(--text-primary, #ffffff);
    }
    .toast-item.error .icon { color: #ef4444; }
    .toast-item.warning .icon { color: #f59e0b; }
    .toast-item.success .icon { color: #22c55e; }
    .toast-item.info .icon { color: #3b82f6; }
    .toast-item.achievement .icon { color: #eab308; }

    .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .title {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-primary);
        line-height: 1.2;
    }

    .message {
        font-size: 0.85rem;
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
        transition: opacity 0.2s, color 0.2s;
        display: flex;
        align-items: center;
        color: var(--text-secondary, rgba(255, 255, 255, 0.7));
        border-radius: 4px;
    }

    .close-btn:hover {
        opacity: 1;
        color: var(--text-primary, #ffffff);
    }
</style>
