<script lang="ts">
    /**
     * GameModeButton component
     * Використовується в модальному вікні вибору режимів.
     * Використовує Svelte 5 Runes та Snippets.
     */
    import type { HTMLButtonAttributes } from 'svelte/elements';
    import type { Snippet } from "svelte";

    interface Props extends HTMLButtonAttributes {
        text?: string;
        icon?: string;
        dataTestId?: string;
        children?: Snippet;
        iconSnippet?: Snippet;
    }

    let { 
        text = "", 
        icon = "", 
        dataTestId = "", 
        children, 
        iconSnippet,
        ...restProps 
    }: Props = $props();
</script>

<button
    class="menu-item"
    data-testid={dataTestId}
    {...restProps}
>
    <span class="menu-icon">
        {#if iconSnippet}
            {@render iconSnippet()}
        {:else}
            {icon}
        {/if}
    </span>
    <span class="menu-text">
        {#if children}
            {@render children()}
        {:else}
            {text}
        {/if}
    </span>
</button>

<style>
    .menu-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px 24px;
        background: var(--menu-bg, rgba(255, 255, 255, 0.1));
        border: 1px solid var(--border-color, rgba(255, 255, 255, 0.15));
        border-radius: 16px;
        color: var(--text-primary);
        box-shadow: 0 4px 12px var(--shadow-color, rgba(0, 0, 0, 0.15));
        cursor: pointer;
        text-align: left;
        transition:
            transform 0.2s,
            background 0.2s,
            filter 0.2s,
            box-shadow 0.2s;
        font-size: 1.2rem;
        font-weight: 600;
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        width: 100%;
        box-sizing: border-box;
        max-width: 100%;
        min-height: 60px;
        will-change: transform;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
    }

    .menu-item:hover {
        background: var(--menu-bg, rgba(255, 255, 255, 0.2));
        filter: brightness(1.08);
        transform: scale(1.02);
    }

    .menu-item:active {
        transform: scale(0.98);
        filter: brightness(0.95);
    }

    .menu-item:focus-visible {
        outline: 3px solid var(--control-selected, #a259e6);
        outline-offset: 2px;
    }

    .menu-icon {
        font-size: 1.5rem;
        width: 32px;
        height: 32px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .menu-text {
        white-space: normal;
        word-break: break-word;
        line-height: 1.3;
        flex: 1;
        text-align: center;
    }

    @media (max-width: 360px) {
        .menu-item {
            padding: 12px 16px;
            gap: 12px;
            font-size: 1.1rem;
        }
        .menu-icon {
            width: 24px;
            height: 24px;
            font-size: 1.3rem;
        }
    }
</style>
