<script lang="ts">
    import { onMount } from "svelte";
    import { collection, query, where, getDocs, limit, orderBy } from "firebase/firestore";
    import { getFirestoreDb } from "$lib/services/firebaseService";
    import { type OnlineRoom, OnlineRoomSchema } from "$lib/schemas/onlineSchema";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import { goto } from "$app/navigation";
    import { t } from "$lib/i18n/typedI18n";
    import { logService } from "$lib/services/logService.svelte";
    import { storageService } from "$lib/services/storage";
    import { generateRandomPlayerName } from "$lib/utils/nameGenerator";
    import type { TranslationKey } from "$lib/types/i18n";

    let rooms = $state<OnlineRoom[]>([]);
    let isLoading = $state(true);

    async function fetchRooms() {
        isLoading = true;
        const db = getFirestoreDb();
        const q = query(
            collection(db, "rooms"),
            where("status", "==", "waiting"),
            orderBy("createdAt", "desc"),
            limit(20)
        );

        try {
            const snap = await getDocs(q);
            rooms = snap.docs.map(doc => {
                const data = doc.data();
                const validation = OnlineRoomSchema.safeParse(data);
                return validation.success ? validation.data : null;
            }).filter(r => r !== null) as OnlineRoom[];
        } catch (e) {
            logService.error("[RoomList] Failed to fetch rooms:", e);
        } finally {
            isLoading = false;
        }
    }

    function handleJoin(roomId: string) {
        const playerName = storageService.get("online_playerName");
        if (!playerName) {
            const newName = generateRandomPlayerName();
            storageService.set("online_playerName", newName);
        }
        goto(`/game/online?roomId=${roomId}`);
    }

    onMount(() => {
        fetchRooms();
    });
</script>

<div class="room-list-container">
    <div class="list-header">
        <h2>{$t("onlineMenu.activeRooms" as TranslationKey)}</h2>
        <StyledButton variant="info" size="small" onclick={fetchRooms} dataTestId="refresh-rooms-btn">
            {$t("ui.refresh" as TranslationKey)}
        </StyledButton>
    </div>

    {#if isLoading}
        <div class="loading">{$t("ui.loading" as TranslationKey)}...</div>
    {:else if rooms.length === 0}
        <div class="empty-state">{$t("onlineMenu.noRoomsFound" as TranslationKey)}</div>
    {:else}
        <div class="rooms-grid">
            {#each rooms as room}
                <div class="room-card">
                    <div class="room-info">
                        <span class="room-name">{room.name}</span>
                        <span class="room-players">{Object.keys(room.players).length}/{room.maxPlayers}</span>
                    </div>
                    <StyledButton 
                        variant="primary" 
                        size="small" 
                        onclick={() => handleJoin(room.id)}
                        dataTestId="join-room-btn-{room.id}"
                    >
                        {$t("onlineMenu.join" as TranslationKey)}
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
