import { derived, type Readable } from 'svelte/store';

export interface ReplayState {
  isReplayMode: boolean;
  replayCurrentStep: number;
  moveHistory: Array<{
    pos: { row: number; col: number };
    visits: Record<string, number>;
    blockModeEnabled: boolean;
  }>;
  boardSize: number;
  limitReplayPath: boolean;
}

export const replayPosition = (replayState: Readable<ReplayState>) => derived(
  replayState,
  ($replayState) => {
    if (!$replayState.isReplayMode) return null;
    
    const historyIndex = Math.min($replayState.replayCurrentStep, $replayState.moveHistory.length - 1);
    return $replayState.moveHistory[historyIndex]?.pos;
  }
);

export const replayCellVisitCounts = (replayState: Readable<ReplayState>) => derived(
  replayState,
  ($replayState) => {
    if (!$replayState.isReplayMode) return {};
    
    const historyIndex = Math.min($replayState.replayCurrentStep, $replayState.moveHistory.length - 1);
    const currentHistoryEntry = $replayState.moveHistory[historyIndex];
    
    if (currentHistoryEntry && currentHistoryEntry.blockModeEnabled === false) {
      return {};
    }
    
    return currentHistoryEntry?.visits || {};
  }
);

export interface ReplaySegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  opacity: number;
}

export const replaySegments = (replayState: Readable<ReplayState>) => derived(
  replayState,
  ($replayState) => {
    if (!$replayState.isReplayMode || $replayState.moveHistory.length < 2) {
      return [];
    }

    const segments: ReplaySegment[] = [];
    const history = $replayState.moveHistory;
    const totalSteps = history.length - 1;
    const cellSize = 100 / $replayState.boardSize;
    const currentStep = $replayState.replayCurrentStep;
    const limitPath = $replayState.limitReplayPath;

    const startColor = { r: 76, g: 175, b: 80 };
    const endColor = { r: 244, g: 67, b: 54 };

    for (let i = 0; i < totalSteps; i++) {
      const startPos = history[i].pos;
      const endPos = history[i + 1].pos;
      
      const ratio = i / totalSteps;
      const r = Math.round(startColor.r + ratio * (endColor.r - startColor.r));
      const g = Math.round(startColor.g + ratio * (endColor.g - startColor.g));
      const b = Math.round(startColor.b + ratio * (endColor.b - startColor.b));

      let opacity = 1.0;
      if (limitPath) {
        const dist = Math.abs(i - currentStep);
        if (i < currentStep) { // Минулі ходи
            opacity = Math.max(0, 1.0 - dist * 0.2);
        } else { // Майбутні ходи
            opacity = Math.max(0, 1.0 - dist * 0.3);
        }
      }

      segments.push({
        x1: startPos.col * cellSize + cellSize / 2,
        y1: startPos.row * cellSize + cellSize / 2,
        x2: endPos.col * cellSize + cellSize / 2,
        y2: endPos.row * cellSize + cellSize / 2,
        color: `rgb(${r}, ${g}, ${b})`,
        opacity: Math.max(0, opacity)
      });
    }
    return segments;
  }
);

export const replayBlockModeEnabled = (replayState: Readable<ReplayState>) => derived(
  replayState,
  ($replayState) => {
    if (!$replayState.isReplayMode) return false;
    
    const historyIndex = Math.min($replayState.replayCurrentStep, $replayState.moveHistory.length - 1);
    const currentEntry = $replayState.moveHistory[historyIndex];
    return currentEntry?.blockModeEnabled ?? false;
  }
); 
