// src/lib/stores/playerState.svelte.ts
// SSoT для стану гравців. Використовує Svelte 5 Runes.

import type { Player, BonusHistoryItem } from '$lib/models/player';
import { generateId, getRandomUnusedColor, getRandomUnusedName } from '$lib/utils/playerUtils';

export interface PlayerState {
  players: Player[];
  currentPlayerIndex: number;
}

export const initialPlayerState: PlayerState = {
    players: [],
    currentPlayerIndex: 0
};

class PlayerStateRune {
    private _state = $state<PlayerState | null>(null);

    get state() {
        return this._state;
    }

    set state(value: PlayerState | null) {
        this._state = value;
    }

    set(value: PlayerState | null) {
        this._state = value;
    }

    update(fn: (s: PlayerState) => PlayerState | null) {
        if (this._state) {
            this._state = fn(this._state);
        }
    }

    setCurrentPlayer(index: number) {
        if (this._state) {
            this._state = { ...this._state, currentPlayerIndex: index };
        }
    }

    addPlayer() {
        if (!this._state || this._state.players.length >= 8) return;
        
        const usedColors = this._state.players.map((p) => p.color);
        const usedNames = this._state.players.map((p) => p.name);
        
        const newPlayer: Player = {
            id: generateId(),
            name: getRandomUnusedName(usedNames),
            color: getRandomUnusedColor(usedColors),
            score: 0,
            isComputer: false,
            type: "human" as const,
            penaltyPoints: 0,
            bonusPoints: 0,
            bonusHistory: [] as BonusHistoryItem[],
            roundScore: 0,
        };
        
        this._state.players.push(newPlayer);
    }

    removePlayer(playerId: number) {
        if (!this._state || this._state.players.length <= 2) return;
        this._state.players = this._state.players.filter((p) => p.id !== playerId);
    }

    updatePlayer(playerId: number, updatedData: Partial<Player>) {
        if (!this._state) return;
        const player = this._state.players.find(p => p.id === playerId);
        if (player) {
            // Прямо оновлюємо властивості об'єкта
            Object.assign(player, updatedData);
        }
    }

    reset() {
        this._state = { ...initialPlayerState };
    }
}

export const playerState = new PlayerStateRune();
