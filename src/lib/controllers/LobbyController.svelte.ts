import { roomService } from "$lib/services/roomService";
import type { Room, OnlinePlayer } from "$lib/types/online";
import type { GameSettingsState } from "$lib/stores/gameSettingsTypes";
import { goto } from "$app/navigation";
import { base } from "$app/paths";
import type { Unsubscribe } from "firebase/firestore";
import { logService } from "$lib/services/logService.svelte";

/**
 * Headless контролер для Лобі.
 * Ізолює логіку Firebase та управління станом від UI.
 */
class LobbyController {
    // --- Reactive State ---
    private _room = $state<Room | null>(null);
    private _myPlayerId = $state<string | null>(null);
    private _isLeaving = $state(false);
    private _roomId = $state<string | null>(null);
    private _unsubscribe: Unsubscribe | null = null;

    // --- Getters ---
    get room() { return this._room; }
    get myPlayerId() { return this._myPlayerId; }
    get isLeaving() { return this._isLeaving; }
    get roomId() { return this._roomId; }

    // --- Derived ---
    get playersList() {
        return this._room
            ? Object.values(this._room.players).sort((a, b) => a.joinedAt - b.joinedAt)
            : [];
    }

    get myPlayer() {
        return this._room && this._myPlayerId ? this._room.players[this._myPlayerId] : null;
    }

    get amIHost() {
        return this._room && this._myPlayerId ? this._room.hostId === this._myPlayerId : false;
    }

    get canEditSettings() {
        return this.amIHost || (this._room && this._room.allowGuestSettings);
    }

    get myName() {
        return this.myPlayer ? this.myPlayer.name : "Player";
    }

    // --- Public Actions ---

    /**
     * Ініціалізує контролер, підписується на оновлення кімнати.
     */
    public initialize(roomId: string) {
        this._roomId = roomId;
        const session = roomService.getSession();
        this._myPlayerId = session.playerId;

        logService.init(`[LobbyController] Initializing for room: ${roomId}, player: ${this._myPlayerId}`);

        if (!this._myPlayerId) {
            logService.error("[LobbyController] No player ID in session.");
            roomService.clearSession();
            goto(`${base}/online`);
            return;
        }

        this._unsubscribe = roomService.subscribeToRoom(roomId, (updatedRoom) => {
            if (!updatedRoom) {
                logService.GAME_MODE("[LobbyController] Room does not exist anymore.");
                roomService.clearSession();
                goto(`${base}/online`);
                return;
            }
            this._room = updatedRoom;

            if (this._room.status === "playing") {
                logService.GAME_MODE("[LobbyController] Game started! Navigating to game board.");
                goto(`${base}/game/online?from=lobby`);
            }
        });
    }

    public cleanup() {
        logService.init("[LobbyController] Cleaning up.");
        if (this._unsubscribe) {
            this._unsubscribe();
            this._unsubscribe = null;
        }
    }

    public async toggleReady() {
        if (!this._room || !this._myPlayerId || !this._roomId) return;
        const me = this._room.players[this._myPlayerId];
        logService.action(`[LobbyController] Toggling ready to: ${!me.isReady}`);
        await roomService.toggleReady(this._roomId, this._myPlayerId, !me.isReady);
    }

    public async startGame() {
        if (!this._roomId) return;
        logService.action("[LobbyController] Starting game.");
        await roomService.startGame(this._roomId);
    }

    public async leave() {
        if (!this._myPlayerId || !this._roomId) return;
        logService.action("[LobbyController] Leaving lobby manually.");
        this._isLeaving = true;
        await roomService.leaveRoom(this._roomId, this._myPlayerId);
        goto(`${base}/online`);
    }

    public updatePlayer(data: Partial<OnlinePlayer>) {
        if (!this._roomId || !this._myPlayerId) return;
        logService.action("[LobbyController] Updating player data:", data);
        roomService.updatePlayer(this._roomId, this._myPlayerId, data);
        if (data.name) {
            localStorage.setItem("online_playerName", data.name);
        }
    }

    public updateSetting(key: keyof GameSettingsState, value: any) {
        if (!this._roomId) return;
        logService.action(`[LobbyController] Updating setting: ${key}=${value}`);
        roomService.updateRoomSettings(this._roomId, { [key]: value } as any);
    }

    public updateRoomSetting(key: string, value: any) {
        if (!this._roomId) return;
        logService.action(`[LobbyController] Updating room setting: ${key}=${value}`);
        roomService.updateRoomSettings(this._roomId, { [key]: value } as any);
    }

    /**
     * Обробляє навігацію з лобі.
     */
    public handleNavigation(to: any) {
        if (!this._roomId || !this._myPlayerId || this._isLeaving) return;

        const isGameRoute = to?.route.id === "/game/online" || to?.url?.pathname?.includes("/game/online");

        if (isGameRoute) {
            logService.ui("[LobbyController] Navigating to game. Keeping room connection.");
            return;
        }

        logService.ui("[LobbyController] Navigating away from lobby. Leaving room.");
        this._isLeaving = true;
        roomService.leaveRoom(this._roomId, this._myPlayerId);
    }
}

export const lobbyController = new LobbyController();
