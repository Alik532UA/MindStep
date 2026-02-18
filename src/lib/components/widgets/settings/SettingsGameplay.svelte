<script lang="ts">
    import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
    import { gameModeState } from "$lib/stores/gameModeState.svelte";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import { userActionService } from "$lib/services/userActionService";
    import { gameModeService } from "$lib/services/gameModeService";
    import { uiState } from "$lib/stores/uiState.svelte";
    import { logService } from "$lib/services/logService";
    import { t } from "$lib/i18n/typedI18n";
    import ToggleButton from "$lib/components/ToggleButton.svelte";
    import ButtonGroup from "$lib/components/ui/ButtonGroup.svelte";
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import SimpleModalContent from "$lib/components/modals/SimpleModalContent.svelte";

    interface Props {
        isCompetitiveMode?: boolean;
    }

    let { isCompetitiveMode = false }: Props = $props();

    function showCompetitiveModeModal() {
        const activeMode = gameModeState.state.activeMode;

        const goToTrainingOnClick = () => {
            modalStateRune.closeModal();
            if (activeMode === "virtual-player") {
                userActionService.setGameModePreset("beginner");
                uiState.update((s) => ({ ...s, settingsMode: "default" }));
            } else {
                gameModeService.initializeGameMode("training");
                goto(`${base}/game/training`);
            }
        };

        logService.action(
            "Click: on a locked setting in competitive mode (SettingsGameplay)",
        );
        modalStateRune.showModal({
            component: SimpleModalContent,
            variant: "menu",
            dataTestId: "competitive-mode-modal",
            props: {
                titleKey: "modal.competitiveModeLockTitle" as const,
                contentKey: "modal.competitiveModeLockContent" as const,
                actions: [
                    {
                        labelKey: "modal.goToTraining" as const,
                        variant: "primary",
                        isHot: true,
                        onClick: goToTrainingOnClick,
                        dataTestId: "go-to-training-btn",
                    },
                    {
                        labelKey: "modal.stay" as const,
                        onClick: () => modalStateRune.closeModal(),
                        dataTestId: "stay-in-competitive-btn",
                    },
                ],
            },
            closeOnOverlayClick: true,
        });
    }

    function selectBlockCount(count: number) {
        logService.action(
            `Click: "Вибір кількості блоків: ${count}" (SettingsGameplay)`,
        );
        if (count > 0 && gameSettingsState.state.showDifficultyWarningModal) {
            modalStateRune.showModal({
                component: SimpleModalContent,
                variant: "menu",
                dataTestId: "expert-mode-modal",
                props: {
                    titleKey: "modal.expertModeTitle" as const,
                    contentKey: "modal.expertModeContent" as const,
                    showDontShowAgain: true,
                    dontShowAgainType: "expertMode",
                    actions: [
                        {
                            labelKey: "modal.expertModeConfirm" as const,
                            variant: "primary",
                            isHot: true,
                            onClick: () => {
                                gameSettingsState.updateSettings({
                                    blockOnVisitCount: count,
                                });
                                modalStateRune.closeModal();
                            },
                            dataTestId: "expert-mode-confirm-btn",
                        },
                        {
                            labelKey: "modal.expertModeCancel" as const,
                            onClick: () => modalStateRune.closeModal(),
                            dataTestId: "expert-mode-cancel-btn",
                        },
                    ],
                },
                closeOnOverlayClick: true,
            });
        } else {
            gameSettingsState.updateSettings({ blockOnVisitCount: count });
        }
    }

    function handleToggleAutoHideBoard() {
        logService.action(
            'Click: "Автоматично приховувати дошку" (SettingsGameplay)',
        );
        gameSettingsState.toggleAutoHideBoard();
    }
</script>

<div
    class:locked-setting={isCompetitiveMode}
    onclick={isCompetitiveMode
        ? showCompetitiveModeModal
        : () => {}}
    onkeydown={(e) =>
        (e.key === "Enter" || e.key === " ") &&
        (isCompetitiveMode ? showCompetitiveModeModal() : () => {})}
    role="button"
    tabindex={isCompetitiveMode ? 0 : -1}
    data-testid="auto-hide-board-container"
>
    <ToggleButton
        label={$t("gameModes.autoHideBoard")}
        checked={gameSettingsState.state.autoHideBoard}
        ontoggle={isCompetitiveMode ? () => {} : handleToggleAutoHideBoard}
        dataTestId="auto-hide-board-toggle"
    />
</div>
<div
    class:locked-setting={isCompetitiveMode}
    onclick={isCompetitiveMode
        ? showCompetitiveModeModal
        : () => {}}
    onkeydown={(e) =>
        (e.key === "Enter" || e.key === " ") &&
        (isCompetitiveMode ? showCompetitiveModeModal() : () => {})}
    role="button"
    tabindex={isCompetitiveMode ? 0 : -1}
    data-testid="block-mode-container"
>
    <ToggleButton
        label={$t("gameControls.blockMode")}
        checked={gameSettingsState.state.blockModeEnabled}
        ontoggle={isCompetitiveMode
            ? () => {}
            : () => gameSettingsState.toggleBlockMode()}
        dataTestId="block-mode-toggle"
    />
</div>
{#if gameSettingsState.state.blockModeEnabled}
    <div
        class="settings-expander__options-group"
        data-testid="block-count-options-container"
    >
        <span class="settings-expander__label"
            >{$t("gameControls.blockAfter")}</span
        >
        <!-- FIX: Додано dataTestId для контейнера групи -->
        <ButtonGroup
            dataTestId="settings-block-count-group"
            options={[0, 1, 2, 3].map((count) => ({
                label: (count + 1).toString(),
                active: gameSettingsState.state.blockOnVisitCount === count,
                dataTestId: `settings-expander-block-count-btn-${count}`,
                onClick: () => selectBlockCount(count),
            }))}
        />
    </div>
{/if}
