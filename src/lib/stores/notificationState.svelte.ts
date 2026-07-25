// src/lib/stores/notificationState.svelte.ts
// SSoT для нотифікацій. Svelte 5 Runes.
// Пауза таймера (hover/focus, WCAG 2.2.1), збереження elapsed часу.

import type { Notification } from '$lib/types/notification';
import { v4 as uuidv4 } from 'uuid';

interface TimerInfo {
    id: string;
    timerId: ReturnType<typeof setTimeout> | null;
    startTime: number;
    elapsed: number;
    duration: number;
    holds: number;
}

const MAX_NOTIFICATIONS = 4;

class NotificationStateRune {
    private _state = $state<Notification[]>([]);
    private timers = new Map<string, TimerInfo>();

    get state() { return this._state; }
    set state(value: Notification[]) { 
        this._state = value;
        this.notifySubscribers();
    }

    private _arm(info: TimerInfo) {
        const remaining = Math.max(0, info.duration - info.elapsed);
        info.startTime = Date.now();
        info.timerId = setTimeout(() => this.remove(info.id), remaining);
    }

    add(notificationData: Omit<Notification, 'id'>): string {
        const id = uuidv4();
        const duration = notificationData.duration ?? 4000;
        const notification: Notification = { ...notificationData, id, duration };

        this._state = [...this._state, notification];
        if (this._state.length > MAX_NOTIFICATIONS) {
            this.remove(this._state[0].id);
        }
        this.notifySubscribers();

        if (duration > 0) {
            const info: TimerInfo = { id, timerId: null, startTime: 0, elapsed: 0, duration, holds: 0 };
            this.timers.set(id, info);
            this._arm(info);
        }

        return id;
    }

    pause(id: string) {
        const info = this.timers.get(id);
        if (!info) return;
        info.holds += 1;
        if (info.holds > 1 || info.timerId === null) return;
        clearTimeout(info.timerId);
        info.elapsed = Math.min(info.elapsed + (Date.now() - info.startTime), info.duration);
        info.timerId = null;
    }

    resume(id: string) {
        const info = this.timers.get(id);
        if (!info) return;
        if (info.holds > 0) info.holds -= 1;
        if (info.holds > 0 || info.timerId !== null) return;
        this._arm(info);
    }

    remove(id: string) {
        const info = this.timers.get(id);
        if (info?.timerId) clearTimeout(info.timerId);
        this.timers.delete(id);
        this._state = this._state.filter(item => item.id !== id);
        this.notifySubscribers();
    }

    clear() {
        for (const info of this.timers.values()) {
            if (info.timerId) clearTimeout(info.timerId);
        }
        this.timers.clear();
        this._state = [];
        this.notifySubscribers();
    }

    // Convenience methods
    success(messageRaw: string, duration = 4000, anchor?: HTMLElement) {
        return this.add({ type: 'success', messageRaw, duration, anchor });
    }
    info(messageRaw: string, duration = 3000, anchor?: HTMLElement) {
        return this.add({ type: 'info', messageRaw, duration, anchor });
    }
    warning(messageRaw: string, duration = 5000, anchor?: HTMLElement) {
        return this.add({ type: 'warning', messageRaw, duration, anchor });
    }
    error(messageRaw: string, duration = 7000, anchor?: HTMLElement) {
        return this.add({ type: 'error', messageRaw, duration, anchor });
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
