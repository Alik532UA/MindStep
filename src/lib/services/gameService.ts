import { boardState, type BoardState } from '$lib/stores/boardState.svelte';
import { playerState, type PlayerState } from '$lib/stores/playerState.svelte';
import { scoreState, type ScoreState } from '$lib/stores/scoreState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';
import { testModeState } from '$lib/stores/testModeState.svelte';
import { gameOverState } from '$lib/stores/gameOverState.svelte';
import { getInitialPosition } from '$lib/utils/initialPositionUtils';
import { createEmptyBoard } from '$lib/utils/boardUtils';
import type { Player, BonusHistoryItem } from '$lib/models/player';
import { availableMovesService } from './availableMovesService';
import { animationService } from './animationService';
import { logService } from "./logService.svelte";
import { DEFAULT_PLAYER_NAMES } from '$lib/config/defaultPlayers';
import { getRandomUnusedColor } from '$lib/utils/playerUtils';
import { uiState } from '$lib/stores/uiState.svelte';
import { initialUIState, type UiState } from '$lib/types/uiState';
import { uiEffectsState } from '$lib/stores/uiEffectsState.svelte';

export const gameService = {
  initializeNewGame(config: {
    size?: number;
    players?: Player[];
  } = {}) {
    logService.init('[GameService] initializeNewGame: Створення нового ігрового стану...', config);

    // Ініціалізація слухачів подій для UI
    uiEffectsState.initEventListeners();

    // FIX: Спочатку скидаємо анімацію, щоб очистити черги і таймери.
    animationService.reset();

    const settings = gameSettingsState.state;
    const tState = testModeState.state;
    const size = config.size ?? settings.boardSize;

    if (!config.players) {
      const usedColors: string[] = [];
      config.players = DEFAULT_PLAYER_NAMES.map((name, index) => {
        const color = getRandomUnusedColor(usedColors);
        usedColors.push(color);
        return {
          id: index + 1,
          type: 'human',
          name,
          score: 0,
          color,
          isComputer: false,
          penaltyPoints: 0,
          bonusPoints: 0,
          bonusHistory: [] as BonusHistoryItem[],
          roundScore: 0
        };
      });
    }

    const players = config.players;

    const { row: initialRow, col: initialCol } = getInitialPosition(size, tState);
    const board = createEmptyBoard(size);
    board[initialRow][initialCol] = 1;

    const initialBoardState: BoardState = {
      boardSize: size,
      board,
      playerRow: initialRow,
      playerCol: initialCol,
      cellVisitCounts: {},
      moveHistory: [{ pos: { row: initialRow, col: initialCol }, blocked: [], visits: {}, blockModeEnabled: settings.blockModeEnabled }],
      moveQueue: [],
    };

    const initialPlayerState: PlayerState = {
      players,
      currentPlayerIndex: 0,
    };

    const initialScoreState: ScoreState = {
      penaltyPoints: 0,
      movesInBlockMode: 0,
      jumpedBlockedCells: 0,
      noMovesBonus: 0,
      distanceBonus: 0,
    };

    const currentUiState = uiState.state;

    const newUiState: UiState = {
      ...initialUIState,
      intendedGameType: currentUiState.intendedGameType,
      onlinePlayerIndex: currentUiState.onlinePlayerIndex,
      amIHost: currentUiState.amIHost,
      testModeOverrides: currentUiState.testModeOverrides
    };

    // Оновлюємо стани (руни)
    boardState.state = initialBoardState;
    playerState.state = initialPlayerState;
    scoreState.state = initialScoreState;
    uiState.state = newUiState;

    gameOverState.resetGameOverState();

    gameSettingsState.updateSettings({
      showBoard: true,
      showPiece: true,
      showMoves: true
    });

    availableMovesService.updateAvailableMoves();
  }
};