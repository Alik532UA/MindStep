<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";

    interface Props {
        distanceRows?: number[][];
        selectedDistance?: number | null;
        disabled?: boolean;
        ondistance?: (dist: number) => void;
    }

    let {
        distanceRows = [],
        selectedDistance = null,
        disabled = false,
        ondistance
    }: Props = $props();

    function handleDistance(dist: number) {
        if (disabled) return;
        ondistance?.(dist);
    }
</script>

<div class="distance-select">
    <div class="distance-btns">
        {#each distanceRows as row}
            <div class="distance-row">
                {#each row as dist}
                    <button
                        class="dist-btn {selectedDistance === dist
                            ? 'active'
                            : ''}"
                        onclick={() => handleDistance(dist)}
                        data-testid={`dist-btn-${dist}`}
                        {disabled}
                        aria-label="{$t('gameControls.distance')} {dist}"
                    >
                        {dist}
                    </button>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    .distance-select {
        width: 100%;
        text-align: center;
        margin-top: 18px;
    }
    .distance-btns {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        margin-top: 10px;
    }
    .distance-row {
        display: flex;
        gap: 18px;
        justify-content: center;
    }
</style>