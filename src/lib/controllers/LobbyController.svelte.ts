import { doc, onSnapshot, getDoc, updateDoc } from 'firebase/firestore';
import { getFirestoreDb } from '../services/firebaseService';
import { logService } from "../services/logService.svelte";
import { type OnlineRoom, OnlineRoomSchema, type OnlinePlayer } from '../schemas/onlineSchema';
import { authService } from '../services/authService';
import { storageService } from '../services/storage';
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
        this.myPlayerId = authService.getCurrentUser()?.uid || null;

        if (!this.myPlayerId) {
            logService.error("[LobbyController] No authenticated user found during init");
            // Тут можна додати спробу входу, але для лобі зазвичай ми вже залогінені
        }

        await this.joinRoom(roomId);
    }

    async joinRoom(roomId: string) {
        const roomRef = doc(this.db, 'rooms', roomId);

        try {
            const snap = await getDoc(roomRef);
            if (!snap.exists()) {
                this.error = 'Room not found';
                this.isLoading = false;
                return;
            }

            const data = snap.data();
            const validation = OnlineRoomSchema.safeParse(data);
            if (!validation.success) {
                this.error = 'Invalid room data';
                this.isLoading = false;
                return;
            }

            const roomData = validation.data;
            const currentUser = authService.getCurrentUser();
            
            if (!currentUser) {
                this.error = 'Not authenticated';
                this.isLoading = false;
                return;
            }

            this.myPlayerId = currentUser.uid;

            const isAlreadyIn = roomData.players[currentUser.uid] !== undefined;

            if (!isAlreadyIn) {
                if (Object.keys(roomData.players).length >= 2) {
                    this.error = 'Room is full';
                    this.isLoading = false;
                    return;
                }

                const newPlayer: OnlinePlayer = {
                    id: currentUser.uid,
                    name: currentUser.displayName || storageService.get("online_playerName") || 'Player',
                    color: '#E94A3F',
                    isReady: false,
                    joinedAt: Date.now(),
                    isOnline: true
                };

                await updateDoc(roomRef, {
                    [`players.${currentUser.uid}`]: newPlayer
                });
            }

            this.roomUnsubscribe = onSnapshot(roomRef, (s) => {
                if (s.exists()) {
                    this.room = s.data() as OnlineRoom;
                }
            });

            this.isLoading = false;
        } catch (e: any) {
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
