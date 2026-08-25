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
    /**
     * Перелік НЕ ПРОЧИТАВСЯ — окремий стан, а не порожній список.
     *
     * Доти будь-яка невдача (відмова в правах, обрив мережі) показувала «Кімнат
     * не знайдено»: людина бачила порожнє лобі при живій кімнаті в сусідньому
     * вікні й не мала жодної підказки, що читання взагалі не відбулося.
     */
    let unavailable = $state(false);
    let isLoading = $state(true);
    let isJoining = $state<string | null>(null);

    /**
     * Одноразове перечитування — те, що робить кнопка «Оновити».
     *
     * Живий перелік нижче робить її зайвою в звичайному ході подій, але вона
     * лишається як спосіб сказати «перечитай зараз» після обриву мережі: підписка
     * після обриву оживає сама, проте людині потрібен орган керування, а не
     * очікування.
     */
    async function fetchRooms() {
        isLoading = true;
        try {
            const result = await roomService.getPublicRooms();
            rooms = result.rooms;
            unavailable = result.unavailable === true;
        } catch (error) {
            logService.error("Failed to fetch rooms:", error);
            unavailable = true;
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

    /*
     * ПЕРЕЛІК ЖИВИЙ, а не читається один раз.
     *
     * Скарга автора: кімната, створена в сусідньому вікні, з'являлася лише після
     * натиску «Оновити» — на відміну від `VetCrewGames`, де перелік оновлюється
     * сам. Причина не в тому, що живої підписки не було: `subscribeToPublicRooms`
     * лежав у сервісі готовим і НЕ МАВ ЖОДНОГО ВИКЛИКУ, а екран читав перелік
     * одноразовим `getPublicRooms` на монтуванні. Той самий клас дефекту, що з
     * `authService.init()`: код на місці, ніхто не перевіряв досяжність.
     *
     * `onMount` повертає відписку: слухач мусить закритися разом з екраном,
     * інакше він читає базу далі — за рахунок власника проєкту.
     */
    onMount(() =>
        roomService.subscribeToPublicRooms((result) => {
            rooms = result.rooms;
            unavailable = result.unavailable === true;
            isLoading = false;
        })
    );
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
    {:else if unavailable}
        <!--
            НЕ ПРОЧИТАЛОСЯ — окремий рядок, а не «кімнат не знайдено».

            Доти будь-яка невдача (відмова в правах, обрив мережі) показувала
            порожній список, і людина бачила порожнє лобі при живій кімнаті в
            сусідньому вікні — повідомлення не брехало про факт, але вело до
            хибного висновку.
        -->
        <div class="empty-state" data-testid="rooms-unavailable-text">
            {$t("onlineMenu.roomsUnavailable")}
        </div>
    {:else if rooms.length === 0}
        <div class="empty-state">{$t("onlineMenu.noRooms", { lastInfo: "" })}</div>
    {:else}
        <div class="rooms-grid">
            {#each rooms as room (room.id)}
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
        /* min(), бо гола довжина в minmax — це підлога, а не поріг: на екрані
           320px колонка лишалася б 280px і картка розпирала б сторінку. */
        grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
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
