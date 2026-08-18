import {
    collection,
    setDoc,
    getDocs,
    doc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit,
    getDoc,
    updateDoc,
    onSnapshot,
    type Unsubscribe,
    type DocumentData,
    type QuerySnapshot
} from 'firebase/firestore';
import { getFirestoreDb } from '../firebaseService';
import type { Room } from '$lib/types/online';
import { withTimeout } from '$lib/utils/asyncUtils';
import { networkStatsState } from '$lib/stores/networkStatsState.svelte';
import { RoomSchema } from '$lib/schemas/onlineSchema';
import { logService } from "$lib/services/logService.svelte";
import { COLLECTIONS } from '$lib/types/firebaseSchema';

const OPERATION_TIMEOUT_MS = 30000;

/**
 * Скільки публічних кімнат показувати в лобі.
 *
 * Доти запит не мав `limit()` зовсім: читалися ВСІ публічні кімнати, і кожна
 * несла повний стан партії. Ціна росла лінійно з кількістю кімнат, помножена на
 * розмір документа, — і жоден тест цього не показував, бо на трьох кімнатах
 * поведінка бездоганна. Перший сигнал був би рахунок або повільне лобі в живих
 * людей (CLOUD-DATABASE-v8 § 7.1).
 *
 * Число мусить збігатися з межею у `firestore.rules` (`request.query.limit`):
 * правило відкидає запит без обмеження, тож розходження тут ламає лобі одразу.
 */
const PUBLIC_ROOMS_LIMIT = 50;

class RoomFirestoreService {
    private get db() {
        return getFirestoreDb();
    }

    private getRoomRef(roomId: string) {
        return doc(this.db, COLLECTIONS.ROOMS, roomId);
    }

    /**
     * Звірити кімнату зі схемою — і НЕ відкидати її при розходженні.
     *
     * Доти тут стояв коментар «повертаємо дані як є, щоб уникнути блокування
     * через валідацію», і схема, хоч і імпортована, не викликалася жодного разу.
     * Це найгірший із можливих станів: файл читається як перевірений, а не
     * перевіряється нічого.
     *
     * Чому не `throw`. Кімната приходить із мережі, і сувора валідація означала
     * б, що одне зайве поле від новішої збірки вибиває людину з партії. Тому
     * розходження **логується як дефект даних** і не зупиняє гру: у журналі є
     * слід, з якого видно, що саме розійшлося, а гравець продовжує грати.
     *
     * **Розібране значення ВИКОРИСТОВУЄТЬСЯ, і доти не використовувалося.** На
     * успішному розборі повертався не `parsed.data`, а сирий `data` через
     * `as Room` — тобто схема відпрацьовувала й результат ішов у смітник. Це той
     * самий стан, що й невикликана схема, лише дорожчий: значення за
     * замовчуванням, приведення типів і відкидання зайвих полів не діяли ні на
     * що, а файл читався як перевірений.
     */
    private validateRoom(data: any, id: string): Room | null {
        const parsed = RoomSchema.safeParse({ ...data, id });
        if (parsed.success) return parsed.data as Room;

        logService.error(
            `[RoomFirestoreService] Кімната ${id} не відповідає схемі`,
            parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        );
        // Сирі дані — лише як запасний шлях: гру не зупиняємо.
        return { ...data, id } as Room;
    }

    async createRoomDoc(roomId: string, roomData: any): Promise<void> {
        await withTimeout(
            setDoc(this.getRoomRef(roomId), roomData),
            OPERATION_TIMEOUT_MS,
            'Timeout: Failed to connect to Firebase Firestore.'
        );
    }

    async getStatsDoc(): Promise<any> {
        const statsRef = doc(this.db, COLLECTIONS.GENERAL, 'stats');
        const snap = await getDoc(statsRef);
        return snap.exists() ? snap.data() : null;
    }

    async updateStatsDoc(data: any): Promise<void> {
        const statsRef = doc(this.db, COLLECTIONS.GENERAL, 'stats');
        await setDoc(statsRef, data, { merge: true });
    }

    async getPublicRoomsQuerySnapshot(): Promise<[QuerySnapshot<DocumentData>, any]> {
        const q = query(
            collection(this.db, COLLECTIONS.ROOMS),
            where('isPrivate', '==', false),
            orderBy('lastActivity', 'desc'),
            limit(PUBLIC_ROOMS_LIMIT)
        );

        const [querySnapshot, statsData] = await Promise.all([
            withTimeout(getDocs(q), OPERATION_TIMEOUT_MS, 'Timeout fetching rooms'),
            this.getStatsDoc().catch((): null => null)
        ]);

        return [querySnapshot, statsData];
    }

    subscribeToPublicRooms(callback: (snapshot: QuerySnapshot<DocumentData>) => void, errorCallback: (error: any) => void): Unsubscribe {
        const q = query(
            collection(this.db, COLLECTIONS.ROOMS),
            where('isPrivate', '==', false),
            orderBy('lastActivity', 'desc'),
            limit(PUBLIC_ROOMS_LIMIT)
        );
        return onSnapshot(q, callback, errorCallback);
    }

    async deleteRoomDoc(ref: any): Promise<void> {
        await deleteDoc(ref);
    }

    async getRoomDoc(roomId: string): Promise<Room | null> {
        const roomSnap = await withTimeout(
            getDoc(this.getRoomRef(roomId)),
            OPERATION_TIMEOUT_MS,
            'Timeout connecting to room'
        );
        if (roomSnap.exists()) {
            return this.validateRoom(roomSnap.data(), roomSnap.id);
        }
        return null;
    }

    // Спрощена версія без таймауту для простих перевірок
    async getRoomDocSimple(roomId: string): Promise<Room | null> {
        const roomSnap = await getDoc(this.getRoomRef(roomId));
        if (roomSnap.exists()) {
            return this.validateRoom(roomSnap.data(), roomSnap.id);
        }
        return null;
    }

    async updateRoomDoc(roomId: string, updates: any, useTimeout: boolean = false): Promise<void> {
        const promise = updateDoc(this.getRoomRef(roomId), updates);
        if (useTimeout) {
            await withTimeout(promise, OPERATION_TIMEOUT_MS, 'Timeout updating room');
        } else {
            await promise;
        }
    }

    subscribeToRoom(roomId: string, callback: (room: Room | null) => void, errorCallback: (error: any) => void): Unsubscribe {
        return onSnapshot(
            this.getRoomRef(roomId),
            (doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    networkStatsState.recordRead('RoomSubscription', data);
                    callback(this.validateRoom(data, doc.id));
                } else {
                    callback(null);
                }
            },
            errorCallback
        );
    }
}

export const roomFirestoreService = new RoomFirestoreService();
