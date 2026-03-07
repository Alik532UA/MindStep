<script lang="ts">
    import { networkStatsState } from '$lib/stores/networkStatsState.svelte';
    import { fade } from 'svelte/transition';
    import prettyBytes from 'pretty-bytes';

    let expanded = $state(false);
    let scale = $state(0.5); // 0.5 means 2x smaller than the current "large" size
    const stats = $derived(networkStatsState.state);

    function toggle() {
        expanded = !expanded;
    }

    function reset() {
        networkStatsState.reset();
    }

    function decreaseScale(e: MouseEvent) {
        e.stopPropagation();
        scale = Math.max(0.2, scale - 0.1);
    }

    function increaseScale(e: MouseEvent) {
        e.stopPropagation();
        scale = Math.min(2.0, scale + 0.1);
    }

    function formatTime(seconds: number): string {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
</script>

<div 
    class="network-monitor" 
    class:expanded 
    style="--scale: {scale}"
    data-testid="network-monitor"
>
    <div 
        class="header" 
        onclick={toggle} 
        onkeydown={e => (e.key === 'Enter' || e.key === ' ') && toggle()}
        role="button"
        tabindex="0"
        aria-expanded={expanded}
        data-testid="network-monitor-header"
    >
        <span class="indicator" class:active={stats.lastActivity && (Date.now() - stats.lastActivity < 1000)}></span>
        <span class="time">{formatTime(stats.elapsedSeconds)}</span>
        <span class="label">Net:</span>
        <span class="value">{stats.reads}R / {stats.writes}W</span>
        <span class="value size">({prettyBytes(stats.bytesReceived)})</span>
        
        <div class="size-controls">
            <button 
                class="size-btn" 
                onclick={decreaseScale} 
                title="Decrease size"
                data-testid="network-monitor-size-decrease"
            >−</button>
            <button 
                class="size-btn" 
                onclick={increaseScale} 
                title="Increase size"
                data-testid="network-monitor-size-increase"
            >+</button>
        </div>
    </div>

    {#if expanded}
        <div class="details" transition:fade data-testid="network-monitor-details">
            <div class="stats-row">
                <span>Reads:</span> <strong>{stats.reads}</strong>
            </div>
            <div class="stats-row">
                <span>Writes:</span> <strong>{stats.writes}</strong>
            </div>
            <div class="stats-row">
                <span>Received:</span> <strong>{prettyBytes(stats.bytesReceived)}</strong>
            </div>
            <div class="stats-row">
                <span>Sent:</span> <strong>{prettyBytes(stats.bytesSent)}</strong>
            </div>
            <button class="reset-btn" onclick={reset} data-testid="network-monitor-reset-btn">Reset Stats</button>
            
            <div class="log-list" data-testid="network-monitor-log-list">
                {#each stats.recentEvents as event}
                    <div 
                        class="log-item" 
                        class:read={event.type === 'read'} 
                        class:write={event.type === 'write'}
                        data-testid="network-monitor-log-item"
                    >
                        <span class="type">{event.type === 'read' ? 'R' : 'W'}</span>
                        <span class="source">{event.source}</span>
                        <span class="size">{prettyBytes(event.size)}</span>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .network-monitor {
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.85);
        color: #0f0;
        font-family: monospace;
        font-size: calc(24px * var(--scale));
        border-radius: calc(12px * var(--scale));
        z-index: 10000;
        border: calc(2px * var(--scale)) solid #444;
        overflow: hidden;
        width: calc(600px * var(--scale));
        box-shadow: 0 0 calc(30px * var(--scale)) rgba(0,0,0,0.7);
    }

    .header {
        padding: calc(15px * var(--scale)) calc(25px * var(--scale));
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: calc(20px * var(--scale));
        white-space: nowrap;
    }

    .header:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .indicator {
        width: calc(20px * var(--scale));
        height: calc(20px * var(--scale));
        border-radius: 50%;
        background: #333;
        transition: background 0.2s;
        flex-shrink: 0;
    }

    .indicator.active {
        background: #0f0;
        box-shadow: 0 0 calc(15px * var(--scale)) #0f0;
    }

    .time {
        color: #ffd700;
        font-weight: bold;
        min-width: calc(60px * var(--scale));
    }

    .label {
        font-weight: bold;
        color: #aaa;
    }

    .value {
        color: #fff;
    }
    
    .value.size {
        color: #00e5ff;
        font-size: 0.8em;
    }

    .size-controls {
        display: flex;
        gap: calc(5px * var(--scale));
        margin-left: auto;
    }

    .size-btn {
        background: #444;
        color: #fff;
        border: none;
        width: calc(30px * var(--scale));
        height: calc(30px * var(--scale));
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: calc(4px * var(--scale));
        font-size: calc(18px * var(--scale));
        font-weight: bold;
        line-height: 1;
        padding: 0;
    }

    .size-btn:hover {
        background: #666;
    }

    .details {
        padding: calc(20px * var(--scale));
        border-top: calc(2px * var(--scale)) solid #444;
        background: rgba(0, 0, 0, 0.95);
    }

    .stats-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: calc(12px * var(--scale));
    }

    .reset-btn {
        width: 100%;
        margin-top: calc(15px * var(--scale));
        background: #c62828;
        color: #fff;
        border: none;
        padding: calc(10px * var(--scale));
        cursor: pointer;
        font-size: calc(18px * var(--scale));
        font-weight: bold;
        border-radius: calc(8px * var(--scale));
    }

    .reset-btn:hover {
        background: #e53935;
    }

    .log-list {
        margin-top: calc(15px * var(--scale));
        max-height: calc(400px * var(--scale));
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: calc(6px * var(--scale));
    }

    .log-item {
        display: flex;
        justify-content: space-between;
        font-size: calc(16px * var(--scale));
        padding: calc(6px * var(--scale)) calc(10px * var(--scale));
        background: rgba(255, 255, 255, 0.05);
        border-radius: calc(4px * var(--scale));
    }
    
    .log-item.read { color: #81d4fa; }
    .log-item.write { color: #ffab91; }

    .source {
        flex-grow: 1;
        margin: 0 calc(15px * var(--scale));
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
