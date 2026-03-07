<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { t } from "$lib/i18n/typedI18n";
    import NotoEmoji from "$lib/components/NotoEmoji.svelte";
    import { logService } from "$lib/services/logService.js";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import AuthModal from "$lib/components/modals/AuthModal.svelte";

    import ThemeDropdown from "$lib/components/main-menu/ThemeDropdown.svelte";
    import LanguageDropdown from "$lib/components/main-menu/LanguageDropdown.svelte";
    import { customTooltip } from "$lib/actions/customTooltip";

    interface Props {
        onFeedback: () => void;
    }

    let { onFeedback }: Props = $props();

    function navigateTo(route: string) {
        logService.action(`Click: "Навігація: ${route}" (TopIconsBar)`);
        goto(`${base}${route}`);
    }

    function toggleTheme() {
        logService.action('Click: "Theme" (TopIconsBar)');
        modalStateRune.open("theme-modal");
    }

    function toggleLang() {
        logService.action('Click: "Language" (TopIconsBar)');
        modalStateRune.open("language-modal");
    }

    function openAuthModal() {
        logService.action('Click: "Account" (TopIconsBar)');
        modalStateRune.open("auth-modal");
    }
</script>

<div class="top-icons-bar" data-testid="top-icons-bar">
    <button
        class="icon-btn"
        onclick={() => navigateTo("/rules")}
        use:customTooltip={$t("mainMenu.rules")}
        data-testid="top-rules-btn"
    >
        <div class="icon-inner"><NotoEmoji name="memo" size="24px" /></div>
    </button>

    <button
        class="icon-btn"
        onclick={() => navigateTo("/rewards")}
        use:customTooltip={$t("rewards.pageTitle")}
        data-testid="top-rewards-btn"
    >
        <div class="icon-inner"><NotoEmoji name="trophy" size="24px" /></div>
    </button>

    <button
        class="icon-btn"
        onclick={() => navigateTo("/settings")}
        use:customTooltip={$t("mainMenu.settings")}
        data-testid="top-settings-btn"
    >
        <div class="icon-inner"><NotoEmoji name="gear" size="24px" /></div>
    </button>

    <div class="icon-wrapper">
        <button
            class="icon-btn"
            onclick={toggleLang}
            use:customTooltip={$t("mainMenu.language")}
            data-testid="top-language-btn"
        >
            <div class="icon-inner">
                <NotoEmoji name="languages" size="24px" class="inline-icon" />
            </div>
        </button>
    </div>

    <div class="icon-wrapper">
        <button
            class="icon-btn"
            onclick={toggleTheme}
            use:customTooltip={$t("mainMenu.theme")}
            data-testid="top-theme-btn"
        >
            <div class="icon-inner">
                <NotoEmoji name="palette" size="24px" />
            </div>
        </button>
    </div>

    <button
        class="icon-btn desktop-only"
        onclick={() => navigateTo("/settings?tab=hotkeys")}
        use:customTooltip={$t("mainMenu.controls")}
        data-testid="top-controls-btn"
    >
        <div class="icon-inner"><NotoEmoji name="keyboard" size="24px" /></div>
    </button>

    <button
        class="icon-btn"
        onclick={() => navigateTo("/supporters")}
        use:customTooltip={$t("mainMenu.donate")}
        data-testid="top-donate-btn"
    >
        <div class="icon-inner"><NotoEmoji name="coin" size="24px" /></div>
    </button>

    <button
        class="icon-btn"
        onclick={onFeedback}
        use:customTooltip={$t("ui.feedback.title")}
        data-testid="top-feedback-btn"
    >
        <div class="icon-inner">
            <NotoEmoji name="speech_balloon" size="24px" />
        </div>
    </button>

    <button
        class="icon-btn"
        onclick={openAuthModal}
        use:customTooltip={$t("mainMenu.account")}
        data-testid="top-account-btn"
    >
        <div class="icon-inner">
            <NotoEmoji name="bust_in_silhouette" size="24px" />
        </div>
    </button>
</div>

<style>
    .top-icons-bar {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
        z-index: 10;
        padding: 0 10px;
    }

    .icon-wrapper {
        position: relative;
    }

    .icon-btn {
        background: transparent;
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition:
            transform 0.2s,
            background 0.2s;
        box-shadow: none;
        padding: 0;
        color: var(--text-primary);
    }

    .icon-btn:hover {
        transform: scale(1.1);
        background: rgba(255, 255, 255, 0.1);
    }

    .icon-inner {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :global(.icon-inner svg) {
        width: 100%;
        height: 100%;
        display: block;
    }

    .desktop-only {
        display: none;
    }

    @media (min-width: 768px) {
        .desktop-only {
            display: flex;
        }
        .top-icons-bar {
            gap: 24px;
        }
    }
</style>
