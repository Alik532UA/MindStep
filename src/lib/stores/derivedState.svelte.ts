import { boardState } from './boardState.svelte';
import type { BoardState } from './boardState.svelte';
import { playerState } from './playerState.svelte';
import type { PlayerState } from './playerState.svelte';
import { uiState } from './uiState.svelte';
import type { UiState } from '$lib/types/uiState';
import { timerState } from './timerState.svelte';
import { animationState } from './animationState.svelte';
import { availableMovesState } from './availableMovesState.svelte';
import { appSettingsState } from './appSettingsState.svelte';
import { languages } from '$lib/config/constants';
import type { MoveDirectionType } from '$lib/models/Piece';
import type { Move } from '$lib/utils/gameUtils';
import { logService } from "$lib/services/logService.svelte";

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

class DerivedState {
    lastComputerMove = $derived.by(() => {
        const uState = uiState.state;
        const pState = playerState.state;
        const bState = boardState.state;

        if (!pState || !bState || bState.moveQueue.length === 0) return null;
        
        const lastMove = bState.moveQueue[bState.moveQueue.length - 1];
        const movePlayerIndex = lastMove.player - 1;
        
        // В онлайн грі хід суперника вважається "computer move" для UI
        if (uState?.intendedGameType === 'online') {
            if (movePlayerIndex !== uState.onlinePlayerIndex) {
                return { direction: lastMove.direction, distance: lastMove.distance };
            }
        } else {
            const pMod = pState.players[movePlayerIndex];
            if (pMod?.type === 'ai' || pMod?.type === 'computer' || pMod?.isComputer) {
                return { direction: lastMove.direction, distance: lastMove.distance };
            }
        }
        return null;
    });

    lastPlayerMove = $derived.by(() => {
        const uState = uiState.state;
        const pState = playerState.state;
        const bState = boardState.state;

        if (!pState || !bState || bState.moveQueue.length === 0) return null;
        
        const lastMove = bState.moveQueue[bState.moveQueue.length - 1];
        const movePlayerIndex = lastMove.player - 1;

        // В онлайн грі НАШ хід вважається "player move"
        if (uState?.intendedGameType === 'online') {
            if (movePlayerIndex === uState.onlinePlayerIndex) {
                return { direction: lastMove.direction, distance: lastMove.distance };
            }
        } else {
            const pMod = pState.players[movePlayerIndex];
            if (pMod?.type === 'human' && !pMod?.isComputer) {
                return { direction: lastMove.direction, distance: lastMove.distance };
            }
        }
        return null;
    });

    isPlayerTurn = $derived.by(() => {
        const pState = playerState.state;
        if (!pState || !pState.players || pState.players.length === 0) return false;

        const currentPlayerIndex = pState.currentPlayerIndex;
        const currentPlayer = pState.players[currentPlayerIndex];
        if (!currentPlayer) return false;

        const uState = uiState.state;
        const isOnline = uState?.intendedGameType === 'online';
        const isHuman = currentPlayer.type === 'human';
        const isMyOnlineTurn = isOnline && uState.onlinePlayerIndex === currentPlayerIndex;

        return isOnline ? isMyOnlineTurn : isHuman;
    });

    visualPosition = $derived.by(() => {
        const boardStoreVal = boardState.state;
        const animationStoreVal = animationState.state;

        if (!boardStoreVal) return { row: null, col: null };

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
    });

    visualCellVisitCounts = $derived.by(() => {
        const boardStoreVal = boardState.state;
        const animationStoreVal = animationState.state;
        const vPos = this.visualPosition;

        if (!boardStoreVal) return {};

        if (boardStoreVal.moveHistory.length <= 1 || !animationStoreVal.isAnimating) {
            return boardStoreVal.cellVisitCounts;
        }

        if (!vPos || vPos.row === null || vPos.col === null) {
            return boardStoreVal.moveHistory[0]?.visits || {};
        }

        const relevantHistoryEntry = [...boardStoreVal.moveHistory].reverse().find(entry =>
            entry.pos.row === vPos.row && entry.pos.col === vPos.col
        );

        return relevantHistoryEntry?.visits || boardStoreVal.moveHistory.at(-1)?.visits || {};
    });

    currentPlayer = $derived(playerState.state ? playerState.state.players[playerState.state.currentPlayerIndex] : null);
    currentPlayerColor = $derived(this.currentPlayer?.color || null);
    availableMoves = $derived(availableMovesState.state);

    distanceRows = $derived.by(() => {
        const bState = boardState.state;
        if (!bState) return [];
        const dists = Array.from({ length: bState.boardSize - 1 }, (_, i) => i + 1);
        
        if (dists.length <= 4) return [dists];
        const chunkSize = dists.length <= 8 ? (dists.length <= 6 ? 3 : 4) : 4;
        
        const chunk = (arr: number[], n: number) => {
            const res = [];
            for (let i = 0; i < arr.length; i += n) res.push(arr.slice(i, i + n));
            return res;
        };
        return chunk(dists, chunkSize);
    });

    isConfirmButtonDisabled = $derived.by(() => {
        const uState = uiState.state;
        const pState = playerState.state;
        if (!uState || !pState) return true;
        const isHumanTurn = pState.players[pState.currentPlayerIndex]?.type === 'human';
        const { selectedDirection, selectedDistance, isComputerMoveInProgress, isGameOver } = uState;
        return isGameOver || !isHumanTurn || isComputerMoveInProgress || !selectedDirection || !selectedDistance;
    });

    previousPlayerColor = $derived.by(() => {
        const pState = playerState.state;
        if (!pState || pState.players.length === 0) return null;
        const previousPlayerIndex = (pState.currentPlayerIndex + pState.players.length - 1) % pState.players.length;
        return pState.players[previousPlayerIndex]?.color || null;
    });

    remainingTime = $derived(timerState.state.remainingTime ?? 0);
    turnTimeLeft = $derived(timerState.state.turnTimeLeft ?? 0);
    isGameOver = $derived(uiState.state?.isGameOver ?? false);

    currentLanguageFlagComponent = $derived.by(() => {
        const langCode = appSettingsState.state.language;
        return languages.find(lang => lang.code === langCode)?.component || languages[0].component;
    });
}

export const derivedState = new DerivedState();
