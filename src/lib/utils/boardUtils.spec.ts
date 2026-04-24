import { describe, it, expect } from 'vitest';
import { createEmptyBoard, getMovePath, getDamageClass } from './boardUtils';

describe('boardUtils', () => {
    describe('createEmptyBoard', () => {
        it('should create a square board of specified size', () => {
            const board = createEmptyBoard(3);
            expect(board.length).toBe(3);
            expect(board[0].length).toBe(3);
            expect(board[1].length).toBe(3);
            expect(board[2].length).toBe(3);
        });

        it('should fill the board with zeros', () => {
            const board = createEmptyBoard(2);
            expect(board).toEqual([[0, 0], [0, 0]]);
        });
    });

    describe('getMovePath', () => {
        it('should return correct path for horizontal move', () => {
            const start = { row: 0, col: 0 };
            const end = { row: 0, col: 3 };
            const path = getMovePath(start, end);
            expect(path).toEqual([{ row: 0, col: 1 }, { row: 0, col: 2 }]);
        });

        it('should return correct path for vertical move', () => {
            const start = { row: 0, col: 0 };
            const end = { row: 3, col: 0 };
            const path = getMovePath(start, end);
            expect(path).toEqual([{ row: 1, col: 0 }, { row: 2, col: 0 }]);
        });

        it('should return correct path for diagonal move', () => {
            const start = { row: 0, col: 0 };
            const end = { row: 3, col: 3 };
            const path = getMovePath(start, end);
            expect(path).toEqual([{ row: 1, col: 1 }, { row: 2, col: 2 }]);
        });

        it('should return empty path for adjacent cells', () => {
            const start = { row: 0, col: 0 };
            const end = { row: 1, col: 1 };
            const path = getMovePath(start, end);
            expect(path).toEqual([]);
        });
    });

    describe('getDamageClass', () => {
        const settings = { blockModeEnabled: true, blockOnVisitCount: 3 };

        it('should return empty string if block mode is disabled', () => {
            const disabledSettings = { blockModeEnabled: false, blockOnVisitCount: 3 };
            expect(getDamageClass(0, 0, { '0-0': 1 }, disabledSettings)).toBe('');
        });

        it('should return correct damage class for visit count 1', () => {
            expect(getDamageClass(0, 0, { '0-0': 1 }, settings)).toBe('cell-damage-1');
        });

        it('should return correct damage class for visit count equal to block limit', () => {
            expect(getDamageClass(0, 0, { '0-0': 3 }, settings)).toBe('cell-damage-3');
        });

        it('should return empty string for visit count exceeding limit', () => {
            expect(getDamageClass(0, 0, { '0-0': 4 }, settings)).toBe('');
        });
    });
});
