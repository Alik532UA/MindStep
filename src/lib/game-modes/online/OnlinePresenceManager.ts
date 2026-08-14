import { roomPlayerService } from "$lib/services/room/roomPlayerService";
import { presenceService } from "$lib/services/presenceService";
import { logService } from "$lib/services/logService.svelte";
import type { OnlinePlayer, Room } from "$lib/types/online";
import { modalStateRune } from '$lib/stores/modalState.svelte';
import { timeService } from '$lib/services/timeService';
import ReconnectionModal from '$lib/components/modals/ReconnectionModal.svelte';
import { reconnectionState } from '$lib/stores/reconnectionState.svelte';
import { uiState } from '$lib/stores/uiState.svelte';
import { ensureNumber } from "$lib/utils/timeUtils";

type DisconnectHandler = (playerId: string, disconnectStartedAt: number) => void;
type ReconnectHandler = (playerId: string) => void;

interface PresenceConfig {
    roomId: string;
    myPlayerId: string;
    isHost: () => boolean;
    getPlayers: () => OnlinePlayer[];
    onAllOpponentsLeft?: () => void;
}

export class OnlinePresenceManager {
    private heartbeatInterval: any = null;
    private monitorInterval: any = null;
    private unsubscribeFromRtdb: (() => void) | null = null;
    private unsubscribeFromStore: (() => void) | null = null;
    private rtStatuses: Record<string, { state: string, last_changed: number }> = {};
    private playerNamesCache: Record<string, string> = {};

    private readonly HEARTBEAT_MS = 5000;
    private readonly MONITOR_MS = 2000;
    private readonly DISCONNECT_THRESHOLD_MS = 60000;
    private readonly KICK_TIMEOUT_MS = 30000;
    private readonly PRESENCE_GRACE_PERIOD_MS = 4000;
    private readonly startedAt: number = Date.now();

    public onPlayerDisconnect: DisconnectHandler | null = null;
    public onPlayerReconnect: ReconnectHandler | null = null;

    constructor(private config: PresenceConfig) {
        this.startedAt = Date.now();
        reconnectionState.init(config.roomId, config.myPlayerId);

        this.unsubscribeFromStore = reconnectionState.subscribe(state => {
            const currentModal = modalStateRune.state;
            const hasPlayers = state.players.length > 0;
            const isReconnectionModalOpen = currentModal.isOpen && currentModal.dataTestId === 'reconnection-modal';
            const isGameOver = uiState.state.isGameOver;

            if (isGameOver) {
                if (isReconnectionModalOpen) {
                    logService.presence(`[Presence] Game Over. Closing ReconnectionModal.`);
                    modalStateRune.closeModal();
                    timeService.resumeTurnTimer();
                }
                return;
            }

            if (hasPlayers && !isReconnectionModalOpen) {
                logService.presence(`[Presence] Players disconnected (${state.players.length}). Opening modal.`);
                timeService.pauseTurnTimer();
                modalStateRune.showModal({
                    component: ReconnectionModal as any,
                    variant: 'menu',
                    dataTestId: 'reconnection-modal',
                    props: {},
                    closable: false,
                    closeOnOverlayClick: false
                });
            } else if (!hasPlayers && isReconnectionModalOpen) {
                logService.presence(`[Presence] All players returned. Closing modal.`);
                modalStateRune.closeModal();
                timeService.resumeTurnTimer();
            }
        });
    }

    public start(): void {
        logService.presence(`[Presence] Starting... Grace period: ${this.PRESENCE_GRACE_PERIOD_MS}ms`);
        this.startHeartbeat();
        this.startRealtimePresence();
        this.startMonitoring();
    }

    public stop(): void {
        logService.presence('[Presence] Stopping...');

        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
        }
        if (this.monitorInterval) {
            clearInterval(this.monitorInterval);
            this.monitorInterval = null;
        }
        if (this.unsubscribeFromRtdb) {
            this.unsubscribeFromRtdb();
            this.unsubscribeFromRtdb = null;
        }
        if (this.unsubscribeFromStore) {
            this.unsubscribeFromStore();
            this.unsubscribeFromStore = null;
        }
        reconnectionState.reset();

        presenceService.setOffline(this.config.roomId, this.config.myPlayerId).catch(() => { });
    }

    private startRealtimePresence(): void {
        presenceService.trackPresence(this.config.roomId, this.config.myPlayerId);
        this.unsubscribeFromRtdb = presenceService.subscribeToRoomPresence(
            this.config.roomId,
            (statuses) => {
                this.rtStatuses = statuses;
                const timeSinceStart = Date.now() - this.startedAt;
                if (timeSinceStart < this.PRESENCE_GRACE_PERIOD_MS) return;

                Object.entries(statuses).forEach(([playerId, status]) => {
                    if (playerId !== this.config.myPlayerId) {
                        if (status.state === 'offline') {
                            this.triggerDisconnect(playerId, status.last_changed);
                        } else if (status.state === 'online') {
                            this.triggerReconnect(playerId);
                        }
                    }
                });
            }
        );
    }

    private triggerDisconnect(playerId: string, timestamp: number): void {
        const players = this.config.getPlayers();
        const player = players.find(p => p.id === playerId);

        let playerName: string;
        if (player) {
            playerName = player.name;
            this.playerNamesCache[playerId] = playerName;
        } else if (this.playerNamesCache[playerId]) {
            playerName = this.playerNamesCache[playerId];
        } else {
            return;
        }

        logService.presence(`[Presence] Player ${playerName} disconnected. Adding to reconnectionState.`);
        reconnectionState.addPlayer({ id: playerId, name: playerName });
    }

    private triggerReconnect(playerId: string): void {
        reconnectionState.removePlayer(playerId);
    }

    public handleRoomUpdate(room: Room): void {
        if (room.status !== 'playing') return;

        const timeSinceStart = Date.now() - this.startedAt;
        if (timeSinceStart < this.PRESENCE_GRACE_PERIOD_MS) return;

        const players = Object.values(room.players);
        const currentPlayerIds = new Set(players.map(p => p.id));

        players.forEach(p => {
            if (p.id !== this.config.myPlayerId) {
                this.playerNamesCache[p.id] = p.name;
            }
        });

        players.forEach(p => {
            if (p.id === this.config.myPlayerId) return;

            if (p.isDisconnected) {
                const rtStatus = this.rtStatuses[p.id];
                const isRtOnline = rtStatus && rtStatus.state === 'online';

                if (!isRtOnline) {
                    this.triggerDisconnect(p.id, ensureNumber(p.disconnectStartedAt) || Date.now());
                } else {
                    this.triggerReconnect(p.id);
                }
            } else {
                this.triggerReconnect(p.id);
            }
        });

        const state = reconnectionState.state;
        state.players.forEach(p => {
            if (!currentPlayerIds.has(p.id)) {
                reconnectionState.removePlayer(p.id);
                delete this.playerNamesCache[p.id];
            }
        });
    }

    private startHeartbeat(): void {
        const send = async () => {
            if (!this.heartbeatInterval) return;
            try {
                await roomPlayerService.sendHeartbeat(this.config.roomId, this.config.myPlayerId);
            } catch (e: any) {
                if (e.code === 'not-found' || e.message?.includes('No document to update')) {
                    this.stop();
                }
            }
        };
        send();
        this.heartbeatInterval = setInterval(send, this.HEARTBEAT_MS);
    }

    private startMonitoring(): void {
        if (!this.config.isHost()) return;

        this.monitorInterval = setInterval(async () => {
            if (!this.config.isHost()) return;
            const timeSinceStart = Date.now() - this.startedAt;
            if (timeSinceStart < this.PRESENCE_GRACE_PERIOD_MS) return;

            const now = Date.now();
            const players = this.config.getPlayers();

            for (const player of players) {
                if (player.id === this.config.myPlayerId) continue;

                const lastSeen = ensureNumber(player.lastSeen || player.joinedAt);
                const timeSinceSeen = now - lastSeen;

                const rtStatus = this.rtStatuses[player.id];
                const isRtOffline = rtStatus && rtStatus.state === 'offline';
                const isRtOnline = rtStatus && rtStatus.state === 'online';

                if (!player.isDisconnected) {
                    if (isRtOnline) continue;
                    const shouldMarkDisconnected = isRtOffline || timeSinceSeen > this.DISCONNECT_THRESHOLD_MS;

                    if (shouldMarkDisconnected) {
                        try {
                            await roomPlayerService.updatePlayer(this.config.roomId, player.id, {
                                isDisconnected: true,
                                disconnectStartedAt: now
                            });
                        } catch (e) {
                            // Мережевий збій тут очікуваний (гравець саме й
                            // відпадає), тому warn, а не error — інакше кожен
                            // офлайн виглядав би поломкою застосунку.
                            logService.warn('[Presence] не вдалося позначити гравця відключеним', e);
                        }
                    }
                } else {
                    if (isRtOnline || timeSinceSeen < (this.DISCONNECT_THRESHOLD_MS / 2)) {
                        try {
                            await roomPlayerService.updatePlayer(this.config.roomId, player.id, {
                                isDisconnected: false,
                                disconnectStartedAt: undefined
                            });
                        } catch (e) {
                            logService.warn('[Presence] не вдалося позначити гравця онлайн', e);
                        }
                    }
                    else if (player.disconnectStartedAt && (now - ensureNumber(player.disconnectStartedAt) > this.KICK_TIMEOUT_MS)) {
                        try {
                            await roomPlayerService.leaveRoom(this.config.roomId, player.id);
                        } catch (e) {
                            logService.warn('[Presence] не вдалося виключити гравця з кімнати', e);
                        }
                    }
                }
            }
        }, this.MONITOR_MS);
    }
}
