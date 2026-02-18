<script lang="ts">
    import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import ButtonGroup from "$lib/components/ui/ButtonGroup.svelte";

    interface Props {
        isCompetitiveMode?: boolean;
    }

    let { isCompetitiveMode = false }: Props = $props();

    const settings = $derived(gameSettingsState.state);

    const toggleFunctions = [
        // Hidden
        () =>
            gameSettingsState.update((s) => ({
                ...s,
                showBoard: false,
                showPiece: false,
                showMoves: false,
            })),
        // Board Only
        () => {
            if (!settings.showBoard) {
                gameSettingsState.update((s) => ({ ...s, showBoard: true }));
            }
        },
        // With Piece
        () => {
            if (settings.showPiece) {
                gameSettingsState.update((s) => ({
                    ...s,
                    showPiece: false,
                    showMoves: false,
                }));
            } else {
                gameSettingsState.update((s) => ({
                    ...s,
                    showBoard: true,
                    showPiece: true,
                }));
            }
        },
        // With Moves
        () => {
            if (settings.showMoves) {
                gameSettingsState.update((s) => ({ ...s, showMoves: false }));
            } else {
                gameSettingsState.update((s) => ({
                    ...s,
                    showBoard: true,
                    showPiece: true,
                    showMoves: true,
                }));
            }
        },
    ];

    function getIsActive(i: number) {
        switch (i) {
            case 0:
                return !settings.showBoard;
            case 1:
                return settings.showBoard;
            case 2:
                return settings.showPiece;
            case 3:
                return settings.showMoves;
            default:
                return false;
        }
    }
</script>

<!-- FIX: Додано dataTestId для контейнера групи -->
<ButtonGroup
    options={[
        $t("settings.visibility.hidden"),
        $t("settings.visibility.boardOnly"),
        $t("settings.visibility.withPiece"),
        $t("settings.visibility.withMoves"),
    ].map((label, i) => ({
        label,
        active: getIsActive(i),
        dataTestId: `settings-expander-visibility-btn-${i}`,
        onClick: toggleFunctions[i],
    }))}
    className={isCompetitiveMode ? "locked-setting" : ""}
    dataTestId="settings-visibility-group"
/>
