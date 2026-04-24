<script lang="ts">
    import { onMount } from "svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { roomService } from "$lib/services/roomService";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import { logService } from "$lib/services/logService.svelte";
    import type { RoomSummary } from "$lib/types/online";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";

    interface Props {
        playerName: string;
    }

    let { playerName }: Props = $props();

    let rooms = $state<RoomSummary[]>([]);
    let isLoading = $state(true);
    let isJoining = $state<string | null>(null);

    async function fetchRooms() {
        isLoading = true;
        try {
            const result = await roomService.getPublicRooms();
            rooms = result.rooms;
        } catch (error) {
            logService.error("Failed to fetch rooms:", error);
        } finally {
            isLoading = false;
        }
    }

    async function handleJoin(roomId: string) {
        isJoining = roomId;
        try {
            await roomService.joinRoom(roomId, playerName);
            await goto(`${base}/online/lobby/${roomId}`);
        } catch (error) {
            logService.error("Failed to join room:", error);
        } finally {
            isJoining = null;
        }
    }

    onMount(() => {
        fetchRooms();
    });
</script>

<div class="room-list-container">
    <div class="list-header">
        <h2>{$t("onlineMenu.activeRooms")}</h2>
        <StyledButton variant="info" size="small" onclick={fetchRooms} dataTestId="refresh-rooms-btn">
            {$t("onlineMenu.refresh")}
        </StyledButton>
    </div>

    {#if isLoading}
        <div class="loading">{$t("common.loading")}...</div>
    {:else if rooms.length === 0}
        <div class="empty-state">{$t("onlineMenu.noRooms", { lastInfo: "" })}</div>
    {:else}
        <div class="rooms-grid">
            {#each rooms as room}
                <div class="room-card">
                    <div class="room-info">
                        <span class="room-name">{room.name}</span>
                        <span class="room-players">{room.playerCount}/{room.maxPlayers}</span>
                    </div>
                    <StyledButton 
                        variant="primary" 
                        size="small" 
                        onclick={() => handleJoin(room.id)}
                        disabled={isJoining !== null}
                        dataTestId="join-room-btn-{room.id}"
                    >
                        {isJoining === room.id ? $t("common.loading") : $t("onlineMenu.join")}
                    </StyledButton>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .room-list-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .rooms-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 16px;
    }
    .room-card {
        background: rgba(255, 255, 255, 0.05);
        padding: 16px;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .room-name {
        font-weight: bold;
        display: block;
    }
    .room-players {
        font-size: 0.9em;
        color: var(--text-secondary);
    }
</style>
