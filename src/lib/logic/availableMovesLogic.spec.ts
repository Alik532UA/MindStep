import { describe, it, expect } from 'vitest';
import { calculateAvailableMoves, isMirrorMove, isCellBlocked } from './availableMovesLogic';

describe('availableMovesLogic', () => {
    describe('isMirrorMove', () => {
        it('should correctly identify a mirror move', () => {
            expect(isMirrorMove('up', 1, 'down', 1)).toBe(true);
            expect(isMirrorMove('up', 1, 'down', 2)).toBe(true);
            expect(isMirrorMove('up-left', 2, 'down-right', 2)).toBe(true);
        });

        it('should correctly identify a non-mirror move', () => {
            expect(isMirrorMove('up', 2, 'down', 1)).toBe(false);
            expect(isMirrorMove('up', 1, 'right', 1)).toBe(false);
            expect(isMirrorMove('up-left', 1, 'up-right', 1)).toBe(false);
        });
    });

    describe('isCellBlocked', () => {
        const settings = { blockModeEnabled: true, blockOnVisitCount: 1 };

        it('should return true if visit count exceeds limit', () => {
            const counts = { '0-0': 2 };
            expect(isCellBlocked(0, 0, counts, settings)).toBe(true);
        });

        it('should return false if visit count is within limit', () => {
            const counts = { '0-0': 1 };
            expect(isCellBlocked(0, 0, counts, settings)).toBe(false);
        });

        it('should return false if block mode is disabled', () => {
            const counts = { '0-0': 5 };
            expect(isCellBlocked(0, 0, counts, { ...settings, blockModeEnabled: false })).toBe(false);
        });
    });

    describe('calculateAvailableMoves', () => {
        const defaultParams = {
            playerRow: 0,
            playerCol: 0,
            boardSize: 3,
            cellVisitCounts: {},
            moveHistory: [],
            players: [{ type: 'human' }, { type: 'ai' }],
            currentPlayerIndex: 0,
            settings: { blockModeEnabled: false, blockOnVisitCount: 1 }
        };

        it('should calculate moves correctly from (0,0) on 3x3 board', () => {
            const moves = calculateAvailableMoves(defaultParams);
            // Directions: down, right, down-right
            // down: (1,0), (2,0)
            // right: (0,1), (0,2)
            // down-right: (1,1), (2,2)
            expect(moves.length).toBe(6);
            expect(moves).toContainEqual(expect.objectContaining({ direction: 'down', distance: 1 }));
            expect(moves).toContainEqual(expect.objectContaining({ direction: 'right', distance: 2 }));
        });

        it('should handle blocked cells', () => {
            const params = {
                ...defaultParams,
                cellVisitCounts: { '1-0': 2 },
                settings: { blockModeEnabled: true, blockOnVisitCount: 1 }
            };
            const moves = calculateAvailableMoves(params);
            expect(moves.find(m => m.row === 1 && m.col === 0)).toBeUndefined();
        });

        it('should return empty array if position is null', () => {
            const moves = calculateAvailableMoves({ ...defaultParams, playerRow: null });
            expect(moves).toEqual([]);
        });
    });
});
