// src/lib/services/notificationService.ts
import { notificationState } from '$lib/stores/notificationState.svelte';
import type { Notification } from '$lib/types/notification';

class NotificationService {
    show(notificationData: Omit<Notification, 'id'>) {
        return notificationState.add(notificationData);
    }

    remove(id: string) {
        notificationState.remove(id);
    }
}

export const notificationService = new NotificationService();
