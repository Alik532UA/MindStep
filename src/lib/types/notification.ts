// src/lib/types/notification.ts

export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'achievement';

export interface Notification {
    id: string;
    type: NotificationType;
    titleKey?: string; // Translation key
    titleRaw?: string; // Fallback plain text for title
    messageKey?: string; // Translation key
    messageValues?: Record<string, any>;
    messageRaw?: string; // Fallback plain text
    icon?: string;
    duration?: number; // ms, default 3000
}
