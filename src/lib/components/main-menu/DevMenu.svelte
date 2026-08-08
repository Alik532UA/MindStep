<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { uiState } from "$lib/stores/uiState.svelte";
    import { logService } from "$lib/services/logService.svelte";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import { modalStateRune } from "$lib/stores/modalState.svelte";

    export let onClose: () => void = () => modalStateRune.closeModal();
    export let onPlayVsComputer: () => void = () => {};
    export let onLocalGame: () => void = () => {};
    export let versionNumber: string;

    function navigateTo(route: string) {
        goto(`${base}${route}`);
    }

    function handleDevMenuBtn() {
        logService.action('Click: "Drag and Drop Test" (DevMenu)');
        navigateTo("/test");
        onClose();
    }

    function handlePhantomPage(name: string, route: string) {
        logService.action(`Click: "${name}" (DevMenu)`);
        navigateTo(route);
        onClose();
    }

    function handleTimedGame() {
        uiState.update((s) => ({ ...s, intendedGameType: "timed" }));
        navigateTo("/game/timed");
        onClose();
    }

    function handleOnlineGame() {
        uiState.update((s) => ({ ...s, intendedGameType: "online" }));
        navigateTo("/online");
        onClose();
    }
</script>

<div class="dev-menu-content" data-testid="dev-menu-panel">
    <h2 class="modal-title-menu">dev v.{versionNumber}</h2>

    <div class="actions-column">
        <!-- Test Pages -->
        <StyledButton
            variant="menu"
            onclick={handleDevMenuBtn}
            dataTestId="dev-menu-dnd-btn"
        >
            {$t("mainMenu.dragAndDropTest")}
        </StyledButton>

        <StyledButton
            variant="menu"
            onclick={() =>
                handlePhantomPage("Button Styles Test", "/test/buttons")}
            dataTestId="dev-menu-test-btn"
        >
            Button Styles Test
        </StyledButton>

        <StyledButton
            variant="menu"
            onclick={() => {
                navigateTo("/test-main-menu-v2");
                onClose();
            }}
            dataTestId="dev-menu-test-main-menu-btn">Main Menu v2</StyledButton
        >

        <!-- Phantom / WIP Pages -->
        <StyledButton
            variant="menu"
            onclick={() => handlePhantomPage("Join Room (WIP)", "/join")}
            dataTestId="dev-menu-join-btn"
        >
            Join Room (WIP)
        </StyledButton>

        <StyledButton
            variant="menu"
            onclick={() =>
                handlePhantomPage("Local Game Comp (WIP)", "/local-setup")}
            dataTestId="dev-menu-local-comp-btn"
        >
            Local Game Comp (WIP)
        </StyledButton>

        <StyledButton
            variant="menu"
            onclick={() =>
                handlePhantomPage("Waiting Screen (WIP)", "/waiting")}
            dataTestId="dev-menu-waiting-btn"
        >
            Waiting Screen (WIP)
        </StyledButton>

        <hr class="divider-h" />

        <!-- Standard Game Modes -->
        <StyledButton
            variant="menu"
            onclick={() => {
                onPlayVsComputer();
                onClose();
            }}
            dataTestId="training-btn">{$t("mainMenu.training")}</StyledButton
        >
        <StyledButton
            variant="menu"
            onclick={handleTimedGame}
            dataTestId="timed-game-btn">{$t("mainMenu.timedGame")}</StyledButton
        >
        <StyledButton
            variant="menu"
            onclick={() => {
                onLocalGame();
                onClose();
            }}
            dataTestId="local-game-btn">{$t("mainMenu.localGame")}</StyledButton
        >
        <StyledButton
            variant="menu"
            onclick={handleOnlineGame}
            dataTestId="online-game-btn"
            >{$t("mainMenu.playOnline")}</StyledButton
        >
    </div>
</div>

<style>
    .dev-menu-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        box-sizing: border-box;
    }

    .modal-title-menu {
        text-align: center;
        font-size: 1.8em;
        font-weight: 800;
        color: #fff;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .actions-column {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .divider-h {
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin: 8px 0;
    }
</style>
