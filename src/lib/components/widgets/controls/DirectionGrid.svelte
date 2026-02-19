<script lang="ts">
    import { hotkeyTooltip } from "$lib/actions/hotkeyTooltip.js";
    import type { MoveDirectionType } from "$lib/models/Piece";
    import { t } from "$lib/i18n/typedI18n";
    import type { Snippet } from "svelte";

    interface Props {
        selectedDirection?: MoveDirectionType | null;
        disabled?: boolean;
        center?: Snippet;
        ondirection?: (dir: MoveDirectionType) => void;
    }

    let {
        selectedDirection = null,
        disabled = false,
        center,
        ondirection
    }: Props = $props();

    const directions: (MoveDirectionType | null)[] = [
        "up-left",
        "up",
        "up-right",
        "left",
        null,
        "right",
        "down-left",
        "down",
        "down-right",
    ];

    const directionArrows: Record<string, string> = {
        "up-left": "↖",
        up: "↑",
        "up-right": "↗",
        left: "←",
        right: "→",
        "down-left": "↙",
        down: "↓",
        "down-right": "↘",
    };

    function getArrow(dir: string) {
        return directionArrows[dir] || "";
    }

    function handleDirection(dir: MoveDirectionType) {
        if (disabled) return;
        ondirection?.(dir);
    }
</script>

<div class="directions-3x3" data-testid="direction-grid">
    {#each directions.filter(d => d !== null) as dir (dir)}
        <button
            class="dir-btn {selectedDirection === dir ? 'active' : ''} dir-btn--{dir}"
            use:hotkeyTooltip={dir}
            onclick={() => handleDirection(dir)}
            data-testid={`dir-btn-${dir}`}
            {disabled}
            aria-label={$t(`gameControls.${dir}` as any)}
            style="grid-area: {dir}"
        >
            {getArrow(dir)}
        </button>
    {/each}

    {#if center}
        <div class="center-cell" style="grid-area: center">
            {@render center()}
        </div>
    {/if}
</div>

<style>
    .directions-3x3 {
        display: grid;
        grid-template-areas:
            "up-left up up-right"
            "left center right"
            "down-left down down-right";
        grid-template-columns: repeat(3, 70px);
        grid-template-rows: repeat(3, 70px);
        gap: 14px;
        margin: 18px 0 10px 0;
        justify-content: center;
    }
    .center-cell {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>