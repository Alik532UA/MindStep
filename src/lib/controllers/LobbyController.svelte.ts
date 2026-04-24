import { doc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { getFirestoreDb } from '../services/firebaseService';
import { logService } from "../services/logService.svelte";
import { type OnlineRoom, OnlineRoomSchema, type OnlinePlayer } from '../schemas/onlineSchema';
import { authService } from '../services/authService';
import { storageService } from '../services/storage';
import { roomService } from '../services/roomService';
import { goto } from '$app/navigation';
import { base } from '$app/paths';

export class LobbyController {
    private db = getFirestoreDb();
    private roomUnsubscribe: (() => void) | null = null;

    room = $state<OnlineRoom | null>(null);
    error = $state<string | null>(null);
    isLoading = $state(true);
    myPlayerId = $state<string | null>(null);

    get amIHost() { return this.room?.hostId === this.myPlayerId; }
    get myName() { return this.room?.players[this.myPlayerId || '']?.name || ''; }
    get myPlayer() { return this.room?.players[this.myPlayerId || '']; }
    get playersList() { return Object.values(this.room?.players || {}); }
    get canEditSettings() { return this.amIHost && this.room?.status === 'waiting'; }

    async initialize(roomId: string) {
        logService.init(`[LobbyController] Initializing lobby for room: ${roomId}`);
        this.isLoading = true;
        this.error = null;
        
        let currentUser = authService.getCurrentUser();
        
        // FIX: Якщо користувача ще немає, виконуємо вхід і відразу використовуємо результат
        if (!currentUser) {
            logService.init("[LobbyController] No user found, performing anonymous sign-in...");
            try {
                currentUser = await authService.signInAnonymously();
            } catch (e: any) {
                logService.error("[LobbyController] Auth failed:", e);
                this.error = `Authentication failed: ${e.message}`;
                this.isLoading = false;
                return;
            }
        }

        this.myPlayerId = currentUser.uid;
        await this.joinRoom(roomId);
    }

    async joinRoom(roomId: string) {
        try {
            // Використовуємо RoomService для логіки приєднання (це забезпечить SSoT)
            const playerName = storageService.get("online_playerName") || 'Player';
            await roomService.joinRoom(roomId, playerName);

            // Підписуємося на оновлення кімнати через RoomService
            this.roomUnsubscribe = roomService.subscribeToRoom(roomId, (room) => {
                if (room) {
                    const oldStatus = this.room?.status;
                    this.room = { ...room, id: roomId };
                    
                    // АВТОМАТИЧНИЙ ПЕРЕХІД: Якщо статус змінився на 'playing', йдемо в гру
                    if (room.status === 'playing' && oldStatus !== 'playing') {
                        logService.init(`[LobbyController] Game started! Redirecting...`);
                        goto(`${base}/game/online?roomId=${roomId}&from=lobby`);
                    }
                } else {
                    this.error = 'Room not found or deleted';
                }
            });

            this.isLoading = false;
        } catch (e: any) {
            logService.error("[LobbyController] Failed to join room:", e);
            this.error = e.message;
            this.isLoading = false;
        }
    }

    async toggleReady() {
        if (!this.room || !this.myPlayerId) return;
        const roomRef = doc(this.db, 'rooms', this.room.id);
        const currentReady = this.room.players[this.myPlayerId]?.isReady || false;

        await updateDoc(roomRef, {
            [`players.${this.myPlayerId}.isReady`]: !currentReady
        });
    }

    async startGame() {
        if (!this.room || !this.amIHost) return;
        const roomRef = doc(this.db, 'rooms', this.room.id);
        await updateDoc(roomRef, { status: 'playing' });
        // Навігація до гри відбудеться через onSnapshot або вручну
        goto(`${base}/game/online?roomId=${this.room.id}&from=lobby`);
    }

    async updateSetting(key: string, value: any) {
        if (!this.room || !this.amIHost) return;
        const roomRef = doc(this.db, 'rooms', this.room.id);
        await updateDoc(roomRef, { [`settings.${key}`]: value });
    }

    async updateRoomSetting(key: string, value: any) {
        if (!this.room || !this.amIHost) return;
        const roomRef = doc(this.db, 'rooms', this.room.id);
        await updateDoc(roomRef, { [key]: value });
    }

    async updatePlayer(data: Partial<OnlinePlayer>) {
        if (!this.room || !this.myPlayerId) return;
        const roomRef = doc(this.db, 'rooms', this.room.id);
        await updateDoc(roomRef, { [`players.${this.myPlayerId}`]: { ...this.myPlayer, ...data } });
    }

    handleNavigation(to: any) {
        // Логіка обробки навігації
    }

    leave() {
        this.cleanup();
        goto(`${base}/online`);
    }

    cleanup() {
        if (this.roomUnsubscribe) {
            this.roomUnsubscribe();
            this.roomUnsubscribe = null;
        }
    }
}

export const lobbyController = new LobbyController();
