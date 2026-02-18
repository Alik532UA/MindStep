// src/lib/stores/reconnectionState.svelte.ts
// SSoT для реконнекту. Svelte 5 Runes.

export interface DisconnectedPlayer {
    id: string;
    name: string;
    disconnectStart: number;
    deadline: number;
}

export interface ReconnectionState {
    roomId: string;
    myPlayerId: string;
    players: DisconnectedPlayer[];
}

const initialReconnectionState: ReconnectionState = {
    roomId: '',
    myPlayerId: '',
    players: []
};

class ReconnectionStateRune {
    private _state = $state<ReconnectionState>({ ...initialReconnectionState });

    get state() { return this._state; }
    set state(value: ReconnectionState) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: ReconnectionState) => ReconnectionState) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    init(roomId: string, myPlayerId: string) {
        this._state = { roomId, myPlayerId, players: [] };
        this.notifySubscribers();
    }

    addPlayer(player: { id: string; name: string }, timeoutSeconds: number = 15) {
        const exists = this._state.players.find(p => p.id === player.id);
        if (exists) return;

        const now = Date.now();
        this._state = {
            ...this._state,
            players: [...this._state.players, {
                id: player.id,
                name: player.name,
                disconnectStart: now,
                deadline: now + (timeoutSeconds * 1000)
            }]
        };
        this.notifySubscribers();
    }

    removePlayer(playerId: string) {
        this._state = {
            ...this._state,
            players: this._state.players.filter(p => p.id !== playerId)
        };
        this.notifySubscribers();
    }

    extendDeadline(playerId: string, seconds: number) {
        this._state = {
            ...this._state,
            players: this._state.players.map(p =>
                p.id === playerId
                    ? { ...p, deadline: p.deadline + (seconds * 1000) }
                    : p
            )
        };
        this.notifySubscribers();
    }

    reset() {
        this._state = { ...initialReconnectionState };
        this.notifySubscribers();
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: ReconnectionState) => void> = new Set();

    subscribe(fn: (s: ReconnectionState) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const reconnectionState = new ReconnectionStateRune();
