import { describe, it, expect } from 'vitest';
import { ensureNumber } from './timeUtils';

describe('timeUtils', () => {
    describe('ensureNumber', () => {
        it('should return 0 for undefined or null', () => {
            expect(ensureNumber(undefined)).toBe(0);
            expect(ensureNumber(null)).toBe(0);
        });

        it('should return the same number if input is a number', () => {
            expect(ensureNumber(123456789)).toBe(123456789);
            expect(ensureNumber(0)).toBe(0);
        });

        it('should convert Firestore Timestamp to milliseconds', () => {
            const timestamp = {
                seconds: 1625097600,
                nanoseconds: 500000000
            };
            // 1625097600 * 1000 + 500 = 1625097600500
            expect(ensureNumber(timestamp)).toBe(1625097600500);
        });

        it('should handle timestamp with 0 nanoseconds', () => {
            const timestamp = {
                seconds: 1625097600,
                nanoseconds: 0
            };
            expect(ensureNumber(timestamp)).toBe(1625097600000);
        });

        it('should return 0 for invalid objects', () => {
            // @ts-expect-error - testing invalid input
            expect(ensureNumber({})).toBe(0);
            // @ts-expect-error - testing invalid input
            expect(ensureNumber({ seconds: 123 })).toBe(0);
        });
    });
});
