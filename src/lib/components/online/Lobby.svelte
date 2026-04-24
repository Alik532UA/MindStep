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
    import type { Room, OnlinePlayer } from "$lib/types/online";
    import type { TranslationKey } from "$lib/types/i18n";

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
        {@const room = lobbyController.room as Room}
        <div class="lobby-content" in:fade={{ duration: 300 }}>
            <div class="lobby-grid">
                <div
                    class="column left-column"
                    in:fly={{ y: 20, duration: 400, delay: 100 }}
                >
                    <LobbyHeader
                        {room}
                        {roomId}
                        amIHost={lobbyController.amIHost}
                    />

                    <LobbySettings
                        {room}
                        canEditSettings={lobbyController.canEditSettings}
                        amIHost={lobbyController.amIHost}
                        onUpdateSetting={(k, v) =>
                            lobbyController.updateSetting(k, v)}
                        onUpdateRoomSetting={(k, v) =>
                            lobbyController.updateRoomSetting(k, v)}
                    />
                </div>

                <div
                    class="column right-column"
                    in:fly={{ y: 20, duration: 400, delay: 200 }}
                >
                    <LobbyPlayerList
                        players={lobbyController.playersList as OnlinePlayer[]}
                        myPlayerId={lobbyController.myPlayerId}
                        hostId={room.hostId}
                        amIHost={lobbyController.amIHost}
                        roomStatus={room.status}
                        onUpdatePlayer={(d) => lobbyController.updatePlayer(d)}
                        onToggleReady={() => lobbyController.toggleReady()}
                        onStartGame={() => lobbyController.startGame()}
                    />
                </div>
            </div>

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
            <p>{$t("common.loading" as TranslationKey)}</p>
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
        grid-template-columns: 0.8fr 1.2fr;
        gap: 24px;
        width: 100%;
        align-items: start;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 24px;
        min-width: 0;
    }

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
            margin-top: 60px;
        }
    }
</style>
