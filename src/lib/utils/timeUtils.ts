import type { TimestampOrNumber } from "$lib/types/online";

/**
 * Гарантує, що значення є числом (мілісекундами).
 * Перетворює Firestore Timestamp об'єкт у число.
 */
export function ensureNumber(val: TimestampOrNumber | undefined | null): number {
    if (val === undefined || val === null) return 0;
    if (typeof val === 'number') return val;
    if (val && typeof val === 'object' && 'seconds' in val && 'nanoseconds' in val) {
        return val.seconds * 1000 + Math.floor(val.nanoseconds / 1000000);
    }
    return 0;
}
