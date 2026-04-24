import { OnlineSessionSchema } from '$lib/schemas/onlineSessionSchema';
import { storageService } from '../storage';

const STORAGE_KEYS = {
    ROOM_ID: 'online_roomId',
    PLAYER_ID: 'online_playerId'
};

export class RoomSessionService {
    /**
     * Зберігає сесію онлайн-гри з префіксом проекту.
     */
    saveSession(roomId: string, playerId: string) {
        storageService.set(STORAGE_KEYS.ROOM_ID, roomId);
        storageService.set(STORAGE_KEYS.PLAYER_ID, playerId);
    }

    /**
     * Отримує сесію.
     */
    getSession(): { roomId: string | null, playerId: string | null } {
        const data = {
            roomId: storageService.get(STORAGE_KEYS.ROOM_ID),
            playerId: storageService.get(STORAGE_KEYS.PLAYER_ID)
        };
        
        const result = OnlineSessionSchema.safeParse(data);
        if (result.success) {
            return result.data as { roomId: string | null, playerId: string | null };
        }
        
        return { roomId: null, playerId: null };
    }

    /**
     * Очищує сесію.
     */
    clearSession() {
        storageService.remove(STORAGE_KEYS.ROOM_ID);
        storageService.remove(STORAGE_KEYS.PLAYER_ID);
    }
}

export const roomSessionService = new RoomSessionService();
