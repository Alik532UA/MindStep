// src/lib/stores/replayAutoPlayState.svelte.ts
import { logService } from "$lib/services/logService.svelte";

export type AutoPlayDirection = 'paused' | 'forward' | 'backward';

class ReplayAutoPlayState {
    private _direction = $state<AutoPlayDirection>('paused');
    private intervalId: ReturnType<typeof setInterval> | null = null;

    get direction() { return this._direction; }

    toggleAutoPlay(
        direction: 'forward' | 'backward',
        state: { replayCurrentStep: number, moveHistory: any[], autoPlayDirection: AutoPlayDirection },
        updateFn: (updates: any) => void,
        goToStep: (step: number) => void
    ) {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }

        if (this._direction === direction) {
            this._direction = 'paused';
            updateFn({ autoPlayDirection: 'paused' });
            return;
        }

        if (direction === 'forward' && state.replayCurrentStep >= state.moveHistory.length - 1) {
            goToStep(0);
        }

        this._direction = direction;
        updateFn({ autoPlayDirection: direction });

        this.intervalId = setInterval(() => {
            const nextStep = state.replayCurrentStep + (direction === 'forward' ? 1 : -1);

            if (nextStep >= 0 && nextStep < state.moveHistory.length) {
                goToStep(nextStep);
            } else {
                this.stop();
                updateFn({ autoPlayDirection: 'paused' });
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this._direction = 'paused';
    }

    cancelAllEffects() {
        this.stop();
    }
}

export const replayAutoPlayState = new ReplayAutoPlayState();
