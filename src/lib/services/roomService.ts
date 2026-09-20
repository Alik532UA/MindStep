import { logService } from "./logService.svelte";
import type { Room, RoomSummary, OnlinePlayer } from '$lib/types/online';
import type { GameSettingsState } from '$lib/stores/gameSettingsTypes';
import { defaultGameSettings } from '$lib/stores/gameSettingsDefaults';
import { v4 as uuidv4 } from 'uuid';
import { chatService, type ChatMessage } from './chatService';
import { roomSessionService } from './room/roomSessionService';
import { roomPlayerService } from './room/roomPlayerService';
import { generateRandomRoomName } from '$lib/utils/nameGenerator';
import { getRandomUnusedColor } from '$lib/utils/playerUtils';
import { roomFirestoreService } from './room/roomFirestoreService';
import { authService } from './authService';
import type { Unsubscribe } from 'firebase/firestore';
import { errorHandlerService } from './errorHandlerService';
import { RoomError, AuthError } from '$lib/models/errors';
import { ensureNumber } from '$lib/utils/timeUtils';
import { activityStamp, sweepOwnExpiredRooms } from '$lib/services/room/roomLifetime';
import { generateRoomId } from '$lib/utils/roomId';

const ROOM_TIMEOUT_MS = 600000;
const MAX_PLAYERS = 8;

export type { ChatMessage };

class RoomService {

    // --- Room CRUD ---

    async createRoom(hostName: string, isPrivate: boolean = false, customRoomName?: string): Promise<string> {
        logService.init(`[RoomService] createRoom START. Host: ${hostName}`);

        let currentUser = authService.getCurrentUser();
        if (!currentUser) {
            logService.init("[RoomService] Not authenticated. Performing quick sign-in...");
            currentUser = await authService.signInAnonymously();
        }

        const hostId = currentUser.uid;
        const hostColor = getRandomUnusedColor([]);

        const initialPlayer: OnlinePlayer = {
            id: hostId,
            name: hostName,
            color: hostColor,
            isReady: true,
            joinedAt: Date.now(),
            isOnline: true,
            isWatchingReplay: false
        };

        const finalRoomName = customRoomName && customRoomName.trim() !== ""
            ? customRoomName.trim()
            : generateRandomRoomName();

        const onlineDefaultSettings: GameSettingsState = {
            ...defaultGameSettings,
            boardSize: 2,
            turnDuration: 1000,
            autoHideBoard: false,
            blockModeEnabled: true,
            blockOnVisitCount: 0,
            settingsLocked: false,
        };

        const roomData: Omit<Room, 'id'> = {
            name: finalRoomName,
            hostId: hostId,
            status: 'waiting',
            createdAt: Date.now(),
            ...activityStamp(),
            isPrivate: isPrivate,
            settingsLocked: false,
            allowGuestSettings: true,
            players: { [hostId]: initialPlayer },
            settings: onlineDefaultSettings,
            maxPlayers: MAX_PLAYERS
        };

        try {
            const roomId = generateRoomId();

            await roomFirestoreService.createRoomDoc(roomId, roomData);

            if (!isPrivate) {
                roomFirestoreService.updateStatsDoc({ lastRoomCreatedAt: Date.now() })
                    // Спільний лічильник кімнат — річ довідкова: якщо запис не
                    // пройшов, кімната вже створена й гра працює. Рівень `warn`,
                    // а не `error` (ERROR-HANDLING-v8 § 1.4).
                    .catch((e: unknown) =>
                        logService.warn('[RoomService] спільна статистика не оновилася', e)
                    );
            }

            roomSessionService.saveSession(roomId, hostId);
            return roomId;
        } catch (error) {
            errorHandlerService.handle(error, { context: 'RoomService:CreateRoom' });
            throw new RoomError('Failed to create room', 'CREATE_FAILED', { originalError: error });
        }
    }


    /**
     * Перетворити знімок кімнат на список для лобі.
     *
     * **Прострочені видаляються тут знову — але ЛИШЕ СВОЇ.**
     *
     * Доти цей метод видаляв ЧУЖІ кімнати з клієнта, який просто відкрив лобі:
     * `Promise.allSettled(...).catch()`, тобто ще й без сліду про невдачу.
     * Найдорожчим наслідком було третє: щоб прибирати чуже, потрібне право
     * видаляти чуже — тобто дірка в правилах, яка заразом є готовим примітивом
     * «видалити всі кімнати» одним циклом. Саме ця вимога й тримала `rooms`
     * відкритими на запис.
     *
     * Тому прибирання прибрали цілком, а борг записали: покинуті кімнати не
     * стирав ніхто. `leaveRoom` видаляє кімнату, коли виходить останній, але
     * це працює лише тоді, коли людина СПРАВДІ натиснула «вийти»: закрита
     * вкладка чи обірваний зв'язок лишали документ назавжди.
     *
     * Тепер прибирає господар — свою власну кімнату, за правилом
     * `allow delete: if hostOf(resource)`, яке існувало від початку. Нових
     * прав це не потребує, тож повернення старої дірки тут немає: чужу кімнату
     * той самий код спробувати не може, бо фільтр стоїть на `hostId`.
     *
     * Це покриває найчастіший випадок — людина створила кімнату, закрила
     * вкладку, повернулася завтра. Тих, хто не повернеться НІКОЛИ, прибирає
     * TTL-політика Firestore за полем `expiresAt` (див. `roomLifetime.ts`).
     * Два шляхи, бо жоден поодинці не покриває обох випадків.
     */
    private processRoomsSnapshot(querySnapshot: any): { rooms: RoomSummary[], latestCreatedAt?: number } {
        const rooms: RoomSummary[] = [];
        const now = Date.now();
        let activeRoomsLatestCreated = 0;
        sweepOwnExpiredRooms(querySnapshot);

        querySnapshot.forEach((doc: any) => {
            const data = doc.data() as Room;
            const createdAtNum = ensureNumber(data.createdAt);
            const lastActivityNum = ensureNumber(data.lastActivity);

            if (createdAtNum > activeRoomsLatestCreated) {
                activeRoomsLatestCreated = createdAtNum;
            }

            // Межа показу (10 хв) і межа видалення (доба) — РІЗНІ; чому саме
            // так, написано в `roomLifetime.ts`.
            if (now - lastActivityNum > ROOM_TIMEOUT_MS) return;
            
            const allPlayers = Object.values(data.players || {});
            
            const activePlayers = allPlayers.filter(p => {
                const lastSeen = ensureNumber(p.lastSeen || p.joinedAt);
                const isNotStale = (now - lastSeen) < 120000; 
                return !p.isDisconnected && isNotStale;
            });
            
            if (data.status === 'playing' && activePlayers.length === 0) {
                 return;
            }

            if (allPlayers.length > 0) {
                rooms.push({
                    id: doc.id,
                    name: data.name,
                    status: data.status,
                    playerCount: allPlayers.length,
                    maxPlayers: data.maxPlayers || MAX_PLAYERS,
                    isPrivate: data.isPrivate
                });
            }
        });

        return {
            rooms,
            latestCreatedAt: activeRoomsLatestCreated > 0 ? activeRoomsLatestCreated : undefined
        };
    }


    /**
     * Перелік публічних кімнат.
     *
     * `unavailable` — це НЕ «кімнат немає». Доти будь-яка невдача поверталася
     * порожнім списком, і відмова в правах виглядала на екрані точно як порожнє
     * лобі: «Кімнат не знайдено» при живій кімнаті в сусідньому вікні. Тепер
     * невдача називається невдачею, а порожнеча — порожнечею.
     */
    async getPublicRooms(): Promise<{ rooms: RoomSummary[], latestCreatedAt?: number, unavailable?: boolean }> {
        /*
         * СПЕРШУ ВХІД, і лише потім запит: правило `allow list` вимагає
         * авторизованого, а анонімний вхід тут асинхронний. Без цього рядка
         * перший запит лобі йшов без користувача й отримував відмову — саме це
         * й ламало екран онлайну.
         */
        const user = await authService.ensureUser();
        if (!user) {
            logService.error('[RoomService] Немає користувача — перелік кімнат не читається');
            return { rooms: [], unavailable: true };
        }

        try {
            const [querySnapshot, statsData] = await roomFirestoreService.getPublicRoomsQuerySnapshot();
            const result = this.processRoomsSnapshot(querySnapshot);
            
            const globalLastCreated = statsData?.lastRoomCreatedAt || 0;
            const finalLatestCreatedAt = Math.max(result.latestCreatedAt || 0, globalLastCreated);

            return {
                rooms: result.rooms,
                latestCreatedAt: finalLatestCreatedAt > 0 ? finalLatestCreatedAt : undefined
            };
        } catch (error) {
            errorHandlerService.handle(error, { context: 'RoomService:GetPublicRooms', showToast: false });
            return { rooms: [], unavailable: true };
        }
    }

    /**
     * ЖИВИЙ перелік публічних кімнат: кімната з'являється сама, без кнопки.
     *
     * ## Чому вхід тут очікується, а не просто «є»
     *
     * Правило `allow list` вимагає авторизованого, а анонімний вхід асинхронний.
     * Підписка, відкрита раніше за вхід, отримує відмову ПЕРШИМ ЖЕ знімком — і на
     * екрані це виглядає як «перелік не прочитався» при живій кімнаті в сусідньому
     * вікні. Той самий дефект уже був у `getPublicRooms`, і причина була та сама.
     *
     * ## Чому прапорець скасування, а не просто `await`
     *
     * Функція мусить віддати «відписатися» ОДРАЗУ: людина може піти з екрана
     * раніше, ніж повернеться вхід. Без прапорця слухач відкрився б уже після
     * того, як екран зник, і читав би базу далі — за рахунок власника проєкту й із
     * викликом у знищений компонент.
     */
    subscribeToPublicRooms(
        callback: (data: { rooms: RoomSummary[], latestCreatedAt?: number, unavailable?: boolean }) => void
    ): Unsubscribe {
        let stop: Unsubscribe | null = null;
        let cancelled = false;

        void authService.ensureUser().then((user) => {
            if (cancelled) return;
            if (!user) {
                logService.error('[RoomService] Немає користувача — живий перелік не відкривається');
                callback({ rooms: [], unavailable: true });
                return;
            }

            stop = roomFirestoreService.subscribeToPublicRooms(
                (snapshot) => {
                    const result = this.processRoomsSnapshot(snapshot);
                    callback(result);
                },
                (error) => {
                    errorHandlerService.handle(error, { context: 'RoomService:SubscribePublicRooms', showToast: false });
                    // Та сама межа, що вище: «не прочиталося» ≠ «нікого немає».
                    callback({ rooms: [], unavailable: true });
                }
            );
        });

        return () => {
            cancelled = true;
            stop?.();
            stop = null;
        };
    }

    async joinRoom(roomId: string, playerName: string): Promise<string> {
        logService.init(`[RoomService] joinRoom START. Room: ${roomId}`);
        
        let currentUser = authService.getCurrentUser();
        if (!currentUser) {
            logService.init("[RoomService] joinRoom: Not authenticated. Performing quick sign-in...");
            currentUser = await authService.signInAnonymously();
        }
        
        const playerId = currentUser.uid;

        try {
            const roomData = await roomFirestoreService.getRoomDoc(roomId);

            if (!roomData) throw new RoomError('Room not found', 'NOT_FOUND', { roomId });

            const existingSession = roomSessionService.getSession();

            if (existingSession.roomId === roomId && existingSession.playerId && roomData.players[existingSession.playerId]) {
                const otherPlayers = Object.values(roomData.players).filter(p => p.id !== existingSession.playerId);
                
                if (roomData.status !== 'waiting' && otherPlayers.length === 0) {
                     logService.init(`[RoomService] Reconnect aborted: Room is empty (only me left) and game started/finished.`);
                     roomSessionService.clearSession();
                     await roomPlayerService.leaveRoom(roomId, existingSession.playerId);
                     throw new AuthError('Game ended because all opponents left.', 'RECONNECT_ABORTED');
                }

                logService.init(`[RoomService] Reconnecting as existing player`);
                if (roomData.players[existingSession.playerId].name !== playerName) {
                    await roomFirestoreService.updateRoomDoc(roomId, {
                        [`players.${existingSession.playerId}.name`]: playerName,
                        ...activityStamp()
                    });
                }
                return existingSession.playerId;
            }

            if (Object.keys(roomData.players).length >= MAX_PLAYERS) throw new RoomError('Room is full', 'FULL');
            if (roomData.status === 'playing') throw new RoomError('Game already started', 'ALREADY_STARTED');

            const usedColors = Object.values(roomData.players).map(p => p.color);
            const playerColor = getRandomUnusedColor(usedColors);

            const newPlayer: OnlinePlayer = {
                id: playerId,
                name: playerName,
                color: playerColor,
                isReady: false,
                joinedAt: Date.now(),
                isOnline: true,
                isWatchingReplay: false
            };

            await roomFirestoreService.updateRoomDoc(roomId, {
                [`players.${playerId}`]: newPlayer,
                ...activityStamp()
            }, true);

            roomSessionService.saveSession(roomId, playerId);
            return playerId;
        } catch (error) {
            if (error instanceof RoomError || error instanceof AuthError) throw error;
            errorHandlerService.handle(error, { context: 'RoomService:JoinRoom' });
            throw error;
        }
    }

    async getRoom(roomId: string): Promise<Room | null> {
        /*
         * СПЕРШУ ВХІД — та сама причина, що в переліку кімнат: `allow get`
         * вимагає авторизованого, а анонімний вхід тут асинхронний. Без цього
         * рядка сторінка кімнати, відкрита з першої секунди (або з посилання),
         * читала кімнату без користувача й отримувала відмову — а далі
         * `roomData` лишалася порожньою, роль не визначалася, і ХОДИ МОВЧКИ НЕ
         * ПРАЦЮВАЛИ: `handlePlayerMove` виходить на `myPlayerIndex === -1` без
         * жодного повідомлення.
         */
        await authService.ensureUser();
        try {
            return await roomFirestoreService.getRoomDocSimple(roomId);
        } catch (error) {
            errorHandlerService.handle(error, { context: 'RoomService:GetRoom', showToast: false });
            return null;
        }
    }

    subscribeToRoom(roomId: string, callback: (room: Room | null) => void): Unsubscribe {
        return roomFirestoreService.subscribeToRoom(
            roomId,
            (room) => {
                if (!room) {
                    logService.init(`[RoomService] Room ${roomId} deleted or not found`);
                }
                callback(room);
            },
            (error) => {
                errorHandlerService.handle(error, { context: 'RoomService:SubscribeRoom', showToast: false });
            }
        );
    }

    // --- Game Flow ---

    async startGame(roomId: string): Promise<void> {
        const roomData = await roomFirestoreService.getRoomDocSimple(roomId);
        if (!roomData) return;

        const players = { ...roomData.players };

        Object.keys(players).forEach(id => {
            players[id].isReady = false;
            players[id].isWatchingReplay = false;
        });

        await roomFirestoreService.updateRoomDoc(roomId, {
            status: 'playing',
            players: players,
            ...activityStamp()
        });
    }

    async returnToLobby(roomId: string, playerId: string): Promise<void> {
        const roomData = await roomFirestoreService.getRoomDocSimple(roomId);
        if (!roomData) return;

        const updates: Record<string, any> = {
            [`players.${playerId}.isReady`]: true,
            [`players.${playerId}.isWatchingReplay`]: false,
            ...activityStamp()
        };

        const updatedPlayers = { ...roomData.players };
        if (updatedPlayers[playerId]) {
            updatedPlayers[playerId] = { ...updatedPlayers[playerId], isReady: true };
        }
        const allReady = Object.values(updatedPlayers).every(p => p.isReady);

        if (allReady) {
            updates['status'] = 'waiting';
        } else if (roomData.status === 'playing') {
            updates['status'] = 'finished';
        }

        await roomFirestoreService.updateRoomDoc(roomId, updates);
    }

    async updateRoomSettings(roomId: string, settings: Partial<GameSettingsState> & { allowGuestSettings?: boolean }): Promise<void> {
        const updates: Record<string, any> = { ...activityStamp() };

        for (const [key, value] of Object.entries(settings)) {
            if (key === 'allowGuestSettings') {
                updates['allowGuestSettings'] = value;
            } else {
                updates[`settings.${key}`] = value;
            }
        }

        if (settings.settingsLocked !== undefined) {
            updates['settingsLocked'] = settings.settingsLocked;
        }

        await roomFirestoreService.updateRoomDoc(roomId, updates);
    }

    async renameRoom(roomId: string, newName: string): Promise<void> {
        await roomFirestoreService.updateRoomDoc(roomId, {
            name: newName,
            ...activityStamp()
        });
    }

    // --- Delegations ---

    getSession(): { roomId: string | null, playerId: string | null } {
        return roomSessionService.getSession();
    }

    clearSession(): void {
        roomSessionService.clearSession();
    }

    async updatePlayer(roomId: string, playerId: string, data: Partial<OnlinePlayer>): Promise<void> {
        return roomPlayerService.updatePlayer(roomId, playerId, data);
    }

    async toggleReady(roomId: string, playerId: string, isReady: boolean): Promise<void> {
        return roomPlayerService.toggleReady(roomId, playerId, isReady);
    }

    async setWatchingReplay(roomId: string, playerId: string, isWatching: boolean): Promise<void> {
        return roomPlayerService.setWatchingReplay(roomId, playerId, isWatching);
    }

    async leaveRoom(roomId: string, playerId: string): Promise<void> {
        return roomPlayerService.leaveRoom(roomId, playerId);
    }

    async sendMessage(roomId: string, senderId: string, senderName: string, text: string): Promise<void> {
        return chatService.sendMessage(roomId, senderId, senderName, text);
    }

    subscribeToChat(roomId: string, callback: (messages: ChatMessage[]) => void): Unsubscribe {
        return chatService.subscribeToChat(roomId, callback);
    }
}

export const roomService = new RoomService();
