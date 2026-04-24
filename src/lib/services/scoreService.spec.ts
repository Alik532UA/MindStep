import { describe, it, expect } from 'vitest';
import { calculateFinalScore, calculateMoveScore } from './scoreService';
import type { Player } from '$lib/models/player';

describe('scoreService', () => {
    describe('calculateFinalScore', () => {
        const mockBoardState = { boardSize: 10 } as any;
        const mockPlayerState = {
            players: [
                { id: 1, score: 10, type: 'human' },
                { id: 2, score: 5, type: 'computer' }
            ] as Player[]
        } as any;
        const mockScoreState = {
            penaltyPoints: 2,
            movesInBlockMode: 5,
            jumpedBlockedCells: 3,
            noMovesBonus: 10,
            distanceBonus: 4
        } as any;
        const mockUiState = { gameOverReasonKey: '' } as any;

        it('should calculate correct total score for virtual-player mode', () => {
            const result = calculateFinalScore(
                mockBoardState,
                mockPlayerState,
                mockScoreState,
                mockUiState,
                'virtual-player'
            );

            // baseScore = 10 + 5 = 15
            // sizeBonus = Math.round(15 * (100 / 100)) = 15
            // totalScore = 15 (base) + 15 (size) + 5 (block) + 3 (jump) + 4 (dist) - 2 (penalty) + 10 (noMoves) + 0 (finish) = 50
            expect(result.totalScore).toBe(50);
            expect(result.baseScore).toBe(15);
            expect(result.sizeBonus).toBe(15);
        });

        it('should return max score as totalScore in local mode', () => {
            const result = calculateFinalScore(
                mockBoardState,
                mockPlayerState,
                mockScoreState,
                mockUiState,
                'local'
            );
            expect(result.totalScore).toBe(10); // max of 10 and 5
        });
    });

    describe('calculateMoveScore', () => {
        const mockSettings = {
            showBoard: true,
            showPiece: true,
            blockModeEnabled: false
        } as any;

        const mockCurrentState = {
            players: [{ id: 1, type: 'human' }] as Player[],
            playerRow: 0,
            playerCol: 0,
            cellVisitCounts: {},
            moveQueue: []
        } as any;

        it('should calculate base score for human player', () => {
            const result = calculateMoveScore(
                mockCurrentState,
                { row: 0, col: 1 },
                0,
                mockSettings,
                1,
                'right'
            );
            expect(result.baseScoreChange).toBe(1);
            expect(result.bonusPoints).toBe(0);
        });

        it('should give distance bonus for moves > 1', () => {
            const result = calculateMoveScore(
                mockCurrentState,
                { row: 0, col: 2 },
                0,
                mockSettings,
                2,
                'right'
            );
            expect(result.bonusPoints).toBe(1);
            expect(result.distanceBonusChange).toBe(1);
        });

        it('should calculate jump bonus in block mode', () => {
            const blockSettings = { ...mockSettings, blockModeEnabled: true, blockOnVisitCount: 1 };
            const stateWithBlocks = {
                ...mockCurrentState,
                cellVisitCounts: { '0-1': 2 } // 2 > 1, so it's blocked
            };

            const result = calculateMoveScore(
                stateWithBlocks,
                { row: 0, col: 2 },
                0,
                blockSettings,
                2,
                'right'
            );
            expect(result.jumpedBlockedCellsChange).toBe(1);
            expect(result.bonusPoints).toBe(2); // 1 (dist) + 1 (jump)
        });
    });
});
