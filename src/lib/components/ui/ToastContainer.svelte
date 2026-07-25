<script lang="ts">
    import { notificationState } from '$lib/stores/notificationState.svelte';
    import Toast from './Toast.svelte';
    import { flip } from 'svelte/animate';

    const notifications = $derived(notificationState.state);
</script>

<div class="toast-container" aria-live="polite" data-testid="toast-notifications-container">
    {#each notifications as notification (notification.id)}
        <div animate:flip={{ duration: 300 }}>
            <Toast {notification} />
        </div>
    {/each}
</div>

<style>
    .toast-container {
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 11000; /* Above modals and tooltips */
        display: flex;
        flex-direction: column;
        gap: 12px;
        pointer-events: none; /* Let clicks pass through empty space */
        width: max-content;
        max-width: 90vw;
    }
</style>
