<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import NotoEmoji from "$lib/components/NotoEmoji.svelte";

    interface Props {
        onPlay: () => void;
    }

    let { onPlay }: Props = $props();

    // Налаштування анімації
    const waveCount = 11;
    const duration = 11; // секунд
    const delayStep = duration / waveCount;
</script>

<div class="center-container" data-testid="center-container">
    <button
        class="play-btn-circle"
        onclick={onPlay}
        data-testid="center-play-btn"
        aria-label={$t("mainMenu.virtualPlayer")}
    >
        <div class="play-icon">
            <NotoEmoji name="crown" size="100%" />
        </div>

        <!-- Хвилі анімації -->
        {#each Array(waveCount) as _, i}
            <div
                class="wave"
                style="
          animation-delay: {i * delayStep}s;
          animation-duration: {duration}s;
        "
            ></div>
        {/each}
    </button>
</div>

<style>
    .center-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        position: relative;
        overflow: visible;
    }

    .play-btn-circle {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: none;
        background: var(--bg-secondary);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s;
        position: relative;
        overflow: visible;
        z-index: 10;
    }

    .play-btn-circle:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
        filter: brightness(1.2);
    }

    .play-btn-circle:active {
        transform: scale(0.95);
    }

    .play-icon {
        width: 60%;
        height: 60%;
        color: var(--text-primary);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
        position: relative;
        z-index: 11;
    }

    .wave {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        z-index: -1;
        pointer-events: none;
        opacity: 0;
        animation-name: pulse-in;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    @keyframes pulse-in {
        0% {
            transform: scale(9);
            opacity: 0;
        }
        15% {
            opacity: 0;
        }
        40% {
            opacity: 0.03;
        }
        100% {
            transform: scale(0.5);
            opacity: 0;
        }
    }
</style>
