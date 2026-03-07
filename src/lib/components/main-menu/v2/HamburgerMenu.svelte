<script lang="ts">
    import SvgIcons from "$lib/components/SvgIcons.svelte";
    import { logService } from "$lib/services/logService.js";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import HamburgerMenuModal from "$lib/components/modals/HamburgerMenuModal.svelte";

    interface Props {
        onPlay: () => void;
        onFeedback: () => void;
    }

    let { onPlay, onFeedback }: Props = $props();

    function openMenu() {
        logService.action('Click: "Open Hamburger Menu"');
        modalStateRune.open("hamburger-menu-modal");
    }
</script>

<button
    class="hamburger-btn"
    onclick={openMenu}
    data-testid="hamburger-menu-btn"
    aria-label="Menu"
>
    <SvgIcons name="hamburger-menu" width="32px" height="32px" />
</button>

<style>
    .hamburger-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: var(--bg-secondary);
        border: none;
        color: var(--text-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        z-index: 100;
        transition: transform 0.2s;
        padding: 0;
    }

    .hamburger-btn:hover {
        transform: scale(1.1);
    }
</style>
