<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import ChatWidget from "$lib/components/online/ChatWidget.svelte";
    import { userProfileStore } from "$lib/stores/authState.svelte";
    import { modalStateRune } from "$lib/stores/modalState.svelte";

    // Використовуємо фіксований ID для глобального чату
    const GLOBAL_CHAT_ID = "global-chat";

    function close() {
        modalStateRune.closeModal();
    }
</script>

<div class="global-chat-container">
    <div class="chat-header">
        <h2>{$t("ui.feedback.typeGlobalChat")}</h2>
        <button class="close-btn" onclick={close} aria-label={$t("modal.close")}
            ><span aria-hidden="true">×</span></button
        >
    </div>

    <div class="chat-wrapper">
        <ChatWidget
            roomId={GLOBAL_CHAT_ID}
            playerId={userProfileStore.profile?.uid || "anon"}
            playerName={userProfileStore.profile?.displayName || "Anonymous"}
            playerColor="#4caf50"
            variant="embedded"
        />
    </div>
</div>

<style>
    .global-chat-container {
        display: flex;
        flex-direction: column;
        height: 60dvh; /* Висота модального вікна */
        min-height: 400px;
        width: 100%;
        background: var(--bg-secondary);
        border-radius: 16px;
        overflow: hidden;
    }

    .chat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin: 0;
        font-size: 1.2rem;
        color: var(--text-primary);
    }

    .close-btn {
        background: none;
        border: none;
        color: var(--text-secondary);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }

    .close-btn:hover {
        color: var(--text-primary);
    }

    .chat-wrapper {
        flex: 1;
        overflow: hidden;
        position: relative;
    }
</style>
