import { boardState } from './boardState.svelte';
import type { BoardState } from './boardState.svelte';
import { playerState } from './playerState.svelte';
import type { PlayerState } from './playerState.svelte';
import { uiState } from './uiState.svelte';
import type { UiState } from '$lib/types/uiState';
import { timerState } from './timerState.svelte';
import { animationState } from './animationState.svelte';
import { availableMovesState } from './availableMovesState.svelte';
import type { MoveDirectionType } from '$lib/models/Piece';
import type { Move } from '$lib/utils/gameUtils';
import { logService } from '$lib/services/logService';

const oppositeDirections: Record<string, string> = {
    'up': 'down', 'down': 'up',
    'left': 'right', 'right': 'left',
    'up-left': 'down-right', 'up-right': 'down-left',
    'down-left': 'up-right', 'down-right': 'up-left'
};

function calculateStartPosition(move: { direction: MoveDirectionType, distance: number, to: { row: number, col: number } }) {
    const { direction, distance, to } = move;
    const oppositeDir = oppositeDirections[direction];

    let dRow = 0;
    let dCol = 0;

    switch (oppositeDir) {
        case 'up': dRow = -1; break;
        case 'down': dRow = 1; break;
        case 'left': dCol = -1; break;
        case 'right': dCol = 1; break;
        case 'up-left': dRow = -1; dCol = -1; break;
        case 'up-right': dRow = -1; dCol = 1; break;
        case 'down-left': dRow = 1; dCol = -1; break;
        case 'down-right': dRow = 1; dCol = 1; break;
    }

    return {
        row: to.row + (dRow * distance),
        col: to.col + (dCol * distance)
    };
}

// === ОБЧИСЛЮВАЛЬНІ ЗНАЧЕННЯ ($derived) ===

export const derivedState = {
    get lastComputerMove() {
        const uState = uiState.state;
        const pState = playerState.state;
        const bState = boardState.state;

        if (!pState) return null;

        // 1. Пріоритет: явний запис останнього ходу в uiState
        if (uState?.lastMove) {
            const p = pState.players[uState.lastMove.player];
            if (p?.type === 'ai' || p?.type === 'computer' || p?.isComputer) {
                return {
                    direction: uState.lastMove.direction,
                    distance: uState.lastMove.distance
                };
            }
        }

        // 2. Фолбек: останній елемент з черги ходів (якщо тип гравця — комп'ютер)
        if (!bState || bState.moveQueue.length === 0) {
            return null;
        }
        const lastMove = bState.moveQueue[bState.moveQueue.length - 1];
        const pMod = pState.players[lastMove.player - 1]; // moveQueue player is 1-indexed
        
        const isComp = pMod?.type === 'ai' || pMod?.type === 'computer' || pMod?.isComputer;

        if (isComp) {
            return {
                direction: lastMove.direction,
                distance: lastMove.distance
            };
        }
        return null;
    },

    get lastPlayerMove() {
        const uState = uiState.state;
        const pState = playerState.state;
        const bState = boardState.state;

        if (!pState) return null;

        // 1. Пріоритет: явний запис останнього ходу в uiState
        if (uState?.lastMove) {
            const p = pState.players[uState.lastMove.player];
            if (p?.type === 'human' && !p?.isComputer) {
                return {
                    direction: uState.lastMove.direction,
                    distance: uState.lastMove.distance
                };
            }
        }

        // 2. Фолбек: останній елемент з черги ходів (якщо тип гравця — людина)
        if (!bState || bState.moveQueue.length === 0) return null;
        const lastMove = bState.moveQueue[bState.moveQueue.length - 1];
        const pMod = pState.players[lastMove.player - 1];
        
        const isHuman = pMod?.type === 'human' && !pMod?.isComputer;
        if (isHuman) {
            return {
                direction: lastMove.direction,
                distance: lastMove.distance
            };
        }
        return null;
    },

    get isPlayerTurn() {
        const pState = playerState.state;
        if (!pState || !pState.players || pState.players.length === 0) return false;

        const currentPlayerIndex = pState.currentPlayerIndex;
        const currentPlayer = pState.players[currentPlayerIndex];
        if (!currentPlayer) return false;

        const uState = uiState.state;

        const isOnline = uState?.intendedGameType === 'online';
        const isHuman = currentPlayer.type === 'human';
        const isMyOnlineTurn = isOnline && uState.onlinePlayerIndex === currentPlayerIndex;

        if (isOnline) {
            return isMyOnlineTurn;
        }

        return isHuman;
    },

    get visualPosition() {
        const boardStoreVal = boardState.state;
        const animationStoreVal = animationState.state;

        if (!boardStoreVal) return { row: null, col: null };

        // FIX: New Game Guard
        if (boardStoreVal.moveHistory.length <= 1) {
            return { row: boardStoreVal.playerRow, col: boardStoreVal.playerCol };
        }

        if (animationStoreVal.visualMoveQueue && animationStoreVal.visualMoveQueue.length > 0) {
            const lastAnimatedMove = animationStoreVal.visualMoveQueue[animationStoreVal.visualMoveQueue.length - 1];
            const targetPos = lastAnimatedMove.to || { row: lastAnimatedMove.row, col: lastAnimatedMove.col };

            return {
                row: targetPos.row ?? boardStoreVal.playerRow,
                col: targetPos.col ?? boardStoreVal.playerCol
            };
        } else if (animationStoreVal.animationQueue.length > 0) {
            const nextMove = animationStoreVal.animationQueue[0];
            if (nextMove.to && nextMove.direction && nextMove.distance) {
                return calculateStartPosition({
                    direction: nextMove.direction,
                    distance: nextMove.distance,
                    to: nextMove.to
                });
            }
        }

        return { row: boardStoreVal.playerRow, col: boardStoreVal.playerCol };
    },

    get visualCellVisitCounts() {
        const boardStoreVal = boardState.state;
        const animationStoreVal = animationState.state;
        const vPos = this.visualPosition;

        if (!boardStoreVal) return {};

        if (boardStoreVal.moveHistory.length <= 1) {
            return boardStoreVal.cellVisitCounts;
        }

        if (!animationStoreVal.isAnimating) {
            return boardStoreVal.cellVisitCounts;
        }

        if (!vPos || vPos.row === null || vPos.col === null) {
            return boardStoreVal.moveHistory[0]?.visits || {};
        }

        const relevantHistoryEntry = [...boardStoreVal.moveHistory].reverse().find(entry =>
            entry.pos.row === vPos.row && entry.pos.col === vPos.col
        );

        if (relevantHistoryEntry && relevantHistoryEntry.visits) {
            return relevantHistoryEntry.visits;
        }
        return boardStoreVal.moveHistory[boardStoreVal.moveHistory.length - 1]?.visits || {};
    },

    get currentPlayer() {
        const p = playerState.state;
        return p ? p.players[p.currentPlayerIndex] : null;
    },

    get currentPlayerColor() {
        const p = this.currentPlayer;
        return p ? p.color : null;
    },

    get availableMoves() {
        return availableMovesState.state;
    },

    get distanceRows() {
        const bState = boardState.state;
        if (!bState) return [];
        const dists = Array.from({ length: bState.boardSize - 1 }, (_, i) => i + 1);
        
        if (dists.length <= 4) return [dists];
        if (dists.length === 5) return [dists.slice(0, 3), dists.slice(3)];
        if (dists.length === 6) return [dists.slice(0, 3), dists.slice(3)];
        if (dists.length === 7) return [dists.slice(0, 4), dists.slice(4)];
        if (dists.length === 8) return [dists.slice(0, 4), dists.slice(4)];
        
        const chunk = (arr: number[], n: number) => {
            const res = [];
            for (let i = 0; i < arr.length; i += n) res.push(arr.slice(i, i + n));
            return res;
        };
        return chunk(dists, 4);
    },

    get isConfirmButtonDisabled() {
        const uState = uiState.state;
        const pState = playerState.state;
        if (!uState || !pState) return true;
        const isHumanTurn = pState.players[pState.currentPlayerIndex]?.type === 'human';
        const { selectedDirection, selectedDistance, isComputerMoveInProgress } = uState;
        return !isHumanTurn || isComputerMoveInProgress || !selectedDirection || !selectedDistance;
    },

    get previousPlayerColor() {
        const pState = playerState.state;
        if (!pState) return null;
        const { players, currentPlayerIndex } = pState;
        if (players.length === 0) return null;
        const previousPlayerIndex = (currentPlayerIndex + players.length - 1) % players.length;
        return players[previousPlayerIndex]?.color || null;
    },

    get remainingTime() {
        return timerState.state.remainingTime ?? 0;
    },

    get isGameOver() {
        return uiState.state?.isGameOver ?? false;
    }
};
