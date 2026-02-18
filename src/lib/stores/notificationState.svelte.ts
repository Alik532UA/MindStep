// src/lib/stores/notificationState.svelte.ts
// SSoT для нотифікацій. Svelte 5 Runes.
// Побічні ефекти (setTimeout) залишаються в bridge-шарі.

import type { Notification } from '$lib/types/notification';
import { v4 as uuidv4 } from 'uuid';

class NotificationStateRune {
    private _state = $state<Notification[]>([]);

    get state() { return this._state; }
    set state(value: Notification[]) { 
        this._state = value;
        this.notifySubscribers();
    }

    add(notificationData: Omit<Notification, 'id'>) {
        const id = uuidv4();
        const notification: Notification = { ...notificationData, id };
        this._state = [...this._state, notification];
        this.notifySubscribers();

        const duration = notification.duration ?? 5000;
        if (duration > 0) {
            setTimeout(() => {
                this.remove(id);
            }, duration);
        }
        return id;
    }

    remove(id: string) {
        this._state = this._state.filter(item => item.id !== id);
        this.notifySubscribers();
    }

    clear() {
        this._state = [];
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: Notification[]) => void> = new Set();

    subscribe(fn: (s: Notification[]) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const notificationState = new NotificationStateRune();
