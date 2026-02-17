<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { lobbyController } from "$lib/controllers/LobbyController.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import FloatingBackButton from "$lib/components/FloatingBackButton.svelte";
    import LobbyHeader from "./lobby/LobbyHeader.svelte";
    import LobbyPlayerList from "./lobby/LobbyPlayerList.svelte";
    import LobbySettings from "./lobby/LobbySettings.svelte";
    import ChatWidget from "./ChatWidget.svelte";
    import { beforeNavigate } from "$app/navigation";
    import { fly, fade } from "svelte/transition";

    interface Props {
        roomId: string;
    }

    let { roomId }: Props = $props();

    onMount(() => {
        lobbyController.initialize(roomId);
    });

    beforeNavigate(({ to }) => {
        lobbyController.handleNavigation(to);
    });

    onDestroy(() => {
        lobbyController.cleanup();
    });
</script>

<div class="lobby-page" data-testid="lobby-container">
    <FloatingBackButton onclick={() => lobbyController.leave()} />

    {#if lobbyController.room && lobbyController.myPlayerId}
        <div class="lobby-content" in:fade={{ duration: 300 }}>
            <div class="lobby-grid">
                <!-- Ліва колонка: Хедер та Налаштування -->
                <div
                    class="column left-column"
                    in:fly={{ y: 20, duration: 400, delay: 100 }}
                >
                    <LobbyHeader
                        room={lobbyController.room}
                        {roomId}
                        amIHost={lobbyController.amIHost}
                    />

                    <LobbySettings
                        room={lobbyController.room}
                        canEditSettings={lobbyController.canEditSettings}
                        amIHost={lobbyController.amIHost}
                        onUpdateSetting={(k, v) =>
                            lobbyController.updateSetting(k, v)}
                        onUpdateRoomSetting={(k, v) =>
                            lobbyController.updateRoomSetting(k, v)}
                    />
                </div>

                <!-- Права колонка: Гравці -->
                <div
                    class="column right-column"
                    in:fly={{ y: 20, duration: 400, delay: 200 }}
                >
                    <LobbyPlayerList
                        players={lobbyController.playersList}
                        myPlayerId={lobbyController.myPlayerId}
                        hostId={lobbyController.room.hostId}
                        amIHost={lobbyController.amIHost}
                        roomStatus={lobbyController.room.status}
                        onUpdatePlayer={(d) => lobbyController.updatePlayer(d)}
                        onToggleReady={() => lobbyController.toggleReady()}
                        onStartGame={() => lobbyController.startGame()}
                    />
                </div>
            </div>

            <!-- Floating Chat Widget -->
            <ChatWidget
                {roomId}
                playerId={lobbyController.myPlayerId}
                playerName={lobbyController.myName}
                playerColor={lobbyController.myPlayer?.color || "#ffd700"}
            />
        </div>
    {:else}
        <div class="loading-state" data-testid="lobby-loading">
            <div class="spinner"></div>
            <p>{$t("common.loading")}</p>
        </div>
    {/if}
</div>

<style>
    .lobby-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        min-height: 100vh;
        color: var(--text-primary);
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .lobby-content {
        width: 100%;
        margin-top: 40px;
    }

    .lobby-grid {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr; /* Sidebar Left, Main Right */
        gap: 24px;
        width: 100%;
        align-items: start; /* Align to top */
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 24px;
        min-width: 0;
    }

    /* Removed chat-wrapper styles since chat is now floating */

    .loading-state {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        color: var(--text-secondary);
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.1);
        border-top-color: var(--text-accent);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 900px) {
        .lobby-grid {
            grid-template-columns: 1fr;
        }

        .lobby-page {
            padding: 16px;
        }

        .lobby-content {
            margin-top: 60px; /* Space for fixed back button */
        }
    }
</style>
