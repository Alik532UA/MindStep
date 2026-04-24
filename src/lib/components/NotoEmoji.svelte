<script lang="ts">
    import { EMOJI_CONFIG } from "$lib/config/emojiConfig";
    import { lucideMap } from "$lib/icons/lucideMapping";

    interface Props {
        name: string;
        size?: string;
        class?: string;
    }

    let { name, size = "1.2em", class: className = "" }: Props = $props();

    // Обчислюємо Lucide компонент через $derived
    const LucideComponent = $derived(lucideMap[name]);

    // Поточний стиль (впливає на кольори)
    const currentStyle = $derived(EMOJI_CONFIG.style);

    // Колір для Lucide іконок
    const iconColor = $derived(
        currentStyle === "mono" ? "currentColor" : "var(--text-primary)"
    );
</script>

{#if name}
    <div
        class="emoji-wrapper lucide-wrapper lucide-icon lucide lucide-{name} {currentStyle} {className}"
        style="--emoji-size: {size};"
        role="img"
        aria-label={name}
    >
        {#if LucideComponent}
            <LucideComponent
                {size}
                color={iconColor}
                strokeWidth={2}
            />
        {:else}
            <!-- Фолбек, якщо іконка не знайдена в мапі -->
            <span style="font-size: var(--emoji-size);">❔</span>
        {/if}
    </div>
{/if}

<style>
    .emoji-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--emoji-size);
        height: var(--emoji-size);
        vertical-align: middle;
        line-height: 1;
    }

    .lucide-wrapper {
        color: inherit;
    }
</style>
