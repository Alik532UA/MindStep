import {
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    serverTimestamp,
    type Unsubscribe
} from 'firebase/firestore';
import { getFirestoreDb } from './firebaseService';

/** Скільки останніх повідомлень тримати в підписці. */
const CHAT_WINDOW = 50;

export interface ChatMessage {
    id?: string;
    senderId: string;
    senderName: string;
    text: string;
    createdAt: number;
}

class ChatService {
    private get db() {
        return getFirestoreDb();
    }

    async sendMessage(roomId: string, senderId: string, senderName: string, text: string): Promise<void> {
        const messagesRef = collection(this.db, 'rooms', roomId, 'messages');
        await addDoc(messagesRef, {
            senderId,
            senderName,
            text,
            createdAt: serverTimestamp()
        });
    }

    /**
     * Останні повідомлення кімнати.
     *
     * **`desc` + перевертання, а не `asc`.** `orderBy(asc) + limit(50)` дає ПЕРШІ
     * пʼятдесят повідомлень за весь час, а не останні: після пʼятдесятого чат
     * просто зупинявся. Дефект не виглядав як дефект — перші пʼятдесят були на
     * місці й правильні, а на тестовій кімнаті з десятьма повідомленнями
     * поведінка була бездоганна (CLOUD-DATABASE-v8 § 7.2).
     */
    subscribeToChat(roomId: string, callback: (messages: ChatMessage[]) => void): Unsubscribe {
        const messagesRef = collection(this.db, 'rooms', roomId, 'messages');
        const q = query(messagesRef, orderBy('createdAt', 'desc'), limit(CHAT_WINDOW));

        return onSnapshot(q, (snapshot) => {
            const messages: ChatMessage[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                messages.push({
                    id: doc.id,
                    senderId: data.senderId,
                    senderName: data.senderName,
                    text: data.text,
                    // `serverTimestamp()` доїжджає другим снапшотом: до того поле
                    // порожнє, і без запасного значення повідомлення стрибало б у
                    // початок списку.
                    createdAt: data.createdAt ? data.createdAt.toMillis() : Date.now()
                });
            });
            // Читали від найновішого — показуємо від найстарішого.
            callback(messages.reverse());
        });
    }
}

export const chatService = new ChatService();