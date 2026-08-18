import {
    ref,
    onValue,
    onDisconnect,
    set,
    serverTimestamp,
    type Database
} from 'firebase/database';
import { getRealtimeDb } from './firebaseService';
import { logService } from "./logService.svelte";

/**
 * Присутність гравця — і ЄДИНЕ її джерело.
 *
 * **Доти той самий факт лежав у трьох місцях**: `/status/{room}/{uid}` у RTDB,
 * `rooms/{id}/presence/{uid}` у Firestore і поле `players.{uid}.isDisconnected`
 * у документі кімнати. Три сховища, два шляхи запису, і розходяться вони рівно
 * тоді, коли присутність потрібна (CLOUD-DATABASE-v8 § 5.2).
 *
 * Дзеркало у Firestore було найгіршим із трьох, і не через кількість: його писав
 * САМ КЛІЄНТ, коли помічав, що звʼязок зник. Тобто в єдиному випадку, для якого
 * присутність і існує, — вкладку закрили, ноутбук згорнули, тунель метро зʼїв
 * зʼєднання — писати його вже нікому, і документ назавжди лишався «на звʼязку».
 * `onDisconnect` у RTDB тим часом спрацьовував правильно, тож два сховища
 * стверджували протилежне. Дзеркала більше немає.
 *
 * **Що лишилося і чому це не те саме дублювання.** Поле
 * `players.{uid}.isDisconnected` у документі кімнати лишається — воно ПОХІДНЕ, і
 * шлях запису до нього один: монітор господаря (`OnlinePresenceManager`), який
 * виводить його з `/status` і з позначки `lastSeen`. Копія потрібна тому, що
 * лобі перелічує кімнати запитом до Firestore і не може підписатися на RTDB для
 * кожної з них; § 5.2 такий випадок дозволяє — за умови, що копія названа
 * похідною й має єдиний шлях запису. Обидві умови тепер виконані.
 *
 * **Чому взагалі RTDB.** Через `onDisconnect`: обіцянку виконує СЕРВЕР, коли
 * клієнт зник. У Firestore такого механізму немає (§ 5.1).
 */
class PresenceService {
    private get rtdb(): Database {
        return getRealtimeDb();
    }

    /**
     * Починає відстеження присутності гравця в кімнаті.
     *
     * **Повертає відписку — і доти не повертав.** Слухач `.info/connected`
     * реєструвався й не знімався ніколи: кожен вхід у кімнату додавав ще один, а
     * кожна подія зʼєднання перереєстровувала `onDisconnect` у ВСІХ накопичених
     * слухачах. Слухач переживав перехід між сторінками, тож за сесію їх ставало
     * стільки, скільки разів людина заходила в гру (PERFORMANCE-v8 § 172,
     * CLOUD-DATABASE-v8 § 9.1).
     */
    trackPresence(roomId: string, playerId: string): () => void {
        const userStatusDatabaseRef = ref(this.rtdb, `/status/${roomId}/${playerId}`);
        const connectedRef = ref(this.rtdb, '.info/connected');

        logService.init(`[PresenceService] Setting up presence tracking for ${playerId} in ${roomId}`);

        return onValue(connectedRef, (snapshot) => {
            if (snapshot.val() === false) {
                /*
                 * Звʼязок зник — і писати про це НІКУДИ не треба.
                 *
                 * Доти тут ішов запис у дзеркало Firestore, і саме він створював
                 * ілюзію надійності: у випадку «вкладку закрили» цей рядок не
                 * виконується взагалі. Прибирає запис `onDisconnect`, і робить це
                 * сервер.
                 */
                logService.presence(`[PresenceService] RTDB connection lost for ${playerId}`);
                return;
            }

            logService.presence(`[PresenceService] RTDB connected for ${playerId}. Setting up onDisconnect and online status.`);

            const rtdbOnDisconnect = onDisconnect(userStatusDatabaseRef);

            /*
             * Порядок саме такий: спершу домовляємось, ЩО зробити при зникненні, і
             * лише тоді зʼявляємось. У зворотному порядку існує вікно, у якому
             * запис уже є, а домовленості про його прибирання ще немає — і
             * зникнення клієнта в цю мить лишає привида назавжди (§ 9.1).
             */
            rtdbOnDisconnect.set({
                state: 'offline',
                last_changed: serverTimestamp()
            }).then(() => {
                set(userStatusDatabaseRef, {
                    state: 'online',
                    last_changed: serverTimestamp()
                });
                logService.presence(`[PresenceService] Presence tracking active for ${playerId}`);
            });
        });
    }

    /** Встановити офлайн вручну — при явному виході з кімнати. */
    async setOffline(roomId: string, playerId: string) {
        const userStatusDatabaseRef = ref(this.rtdb, `/status/${roomId}/${playerId}`);
        await set(userStatusDatabaseRef, {
            state: 'offline',
            last_changed: serverTimestamp()
        });
    }

    /** Підписка на статуси всіх гравців кімнати. Повертає відписку. */
    subscribeToRoomPresence(roomId: string, callback: (statuses: Record<string, { state: string, last_changed: number }>) => void): () => void {
        const roomStatusRef = ref(this.rtdb, `/status/${roomId}`);
        return onValue(roomStatusRef, (snapshot) => callback(snapshot.val() || {}));
    }
}

export const presenceService = new PresenceService();
