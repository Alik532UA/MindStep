<script lang="ts">
    import { hotkeyTooltip } from "$lib/actions/hotkeyTooltip.js";
    import type { MoveDirectionType } from "$lib/models/Piece";
    import { t } from "$lib/i18n/typedI18n";

    interface Props {
        selectedDirection?: MoveDirectionType | null;
        disabled?: boolean;
        centerInfoProps?: any;
        ondirection?: (dir: MoveDirectionType) => void;
        oncentral?: () => void;
    }

    let {
        selectedDirection = null,
        disabled = false,
        centerInfoProps = {},
        ondirection,
        oncentral
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

    function handleCentral() {
        // Центральна кнопка керується власною логікою clickable
        if (!centerInfoProps.clickable) return;
        oncentral?.();
    }
</script>

<div class="directions-3x3">
    {#each directions as dir}
        {#if dir}
            <button
                class="dir-btn {selectedDirection === dir ? 'active' : ''}"
                use:hotkeyTooltip={dir}
                onclick={() => handleDirection(dir)}
                data-testid={`dir-btn-${dir}`}
                {disabled}
                aria-label={$t(`gameControls.${dir}` as any)}
            >
                {getArrow(dir)}
            </button>
        {:else}
            <!-- FIX: disabled={false} гарантує, що кнопка ніколи не виглядає заблокованою (сірою/прозорою),
           навіть якщо зараз хід суперника. Логіка кліку контролюється в handleCentral. -->
            <button
                id="center-info"
                class="control-btn center-info {centerInfoProps.class}"
                type="button"
                aria-label={centerInfoProps.aria}
                onclick={handleCentral}
                tabindex="0"
                disabled={false}
                style={centerInfoProps.backgroundColor
                    ? `background-color: ${centerInfoProps.backgroundColor} !important`
                    : ""}
                data-testid="center-info-btn"
            >
                {centerInfoProps.content}
            </button>
        {/if}
    {/each}
</div>

<style>
    .directions-3x3 {
        display: grid;
        grid-template-columns: repeat(3, 70px);
        grid-template-rows: repeat(3, 70px);
        gap: 14px;
        margin: 18px 0 10px 0;
        justify-content: center;
    }
</style>