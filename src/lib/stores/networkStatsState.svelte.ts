// src/lib/stores/networkStatsState.svelte.ts
// SSoT для мережевої статистики. Svelte 5 Runes.
// Таймер (setInterval) залишається в bridge-шарі.

export interface NetworkStats {
    reads: number;
    writes: number;
    bytesReceived: number;
    bytesSent: number;
    lastActivity: number | null;
    recentEvents: Array<{ type: 'read' | 'write', size: number, source: string, timestamp: number }>;
    elapsedSeconds: number;
    isTracking: boolean;
}

const initialState: NetworkStats = {
    reads: 0,
    writes: 0,
    bytesReceived: 0,
    bytesSent: 0,
    lastActivity: null,
    recentEvents: [],
    elapsedSeconds: 0,
    isTracking: false
};

class NetworkStatsStateRune {
    private _state = $state<NetworkStats>({ ...initialState });
    private timerInterval: ReturnType<typeof setInterval> | null = null;

    get state() { return this._state; }
    set state(value: NetworkStats) { 
        this._state = value;
        this.notifySubscribers();
    }

    update(fn: (s: NetworkStats) => NetworkStats) {
        this._state = fn(this._state);
        this.notifySubscribers();
    }

    reset() {
        this._state = {
            ...initialState,
            isTracking: this._state.isTracking,
            elapsedSeconds: 0
        };
        this.notifySubscribers();
    }

    startSession() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this._state = {
            ...initialState,
            isTracking: true
        };
        this.notifySubscribers();

        this.timerInterval = setInterval(() => {
            this._state.elapsedSeconds++;
            this.notifySubscribers();
        }, 1000);
    }

    stopSession() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this._state.isTracking = false;
        this.notifySubscribers();
    }

    recordRead(source: string, data: unknown) {
        const size = this.estimateSize(data);
        const event = { type: 'read' as const, size, source, timestamp: Date.now() };
        this._state.reads++;
        this._state.bytesReceived += size;
        this._state.lastActivity = Date.now();
        this._state.recentEvents = [event, ...this._state.recentEvents].slice(0, 20);
        this.notifySubscribers();
    }

    recordWrite(source: string, data: unknown) {
        const size = this.estimateSize(data);
        const event = { type: 'write' as const, size, source, timestamp: Date.now() };
        this._state.writes++;
        this._state.bytesSent += size;
        this._state.lastActivity = Date.now();
        this._state.recentEvents = [event, ...this._state.recentEvents].slice(0, 20);
        this.notifySubscribers();
    }

    private estimateSize(obj: unknown): number {
        try {
            return new TextEncoder().encode(JSON.stringify(obj)).length;
        } catch (e) {
            return 0;
        }
    }

    // --- Bridge Support ---
    private subscribers: Set<(s: NetworkStats) => void> = new Set();

    subscribe(fn: (s: NetworkStats) => void): () => void {
        fn(this._state);
        this.subscribers.add(fn);
        return () => this.subscribers.delete(fn);
    }

    private notifySubscribers() {
        this.subscribers.forEach(fn => fn(this._state));
    }
}

export const networkStatsState = new NetworkStatsStateRune();
