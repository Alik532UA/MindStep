<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import { i18nReady } from "$lib/i18n/init.js";
    import { gameEventBus } from "$lib/services/gameEventBus";
    import { logService } from "$lib/services/logService";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import DontShowAgainCheckbox from "../../DontShowAgainCheckbox.svelte";
    import type { ModalState } from "$lib/stores/modalStore";
    import type { Snippet } from "svelte";

    interface Props {
        modalState: ModalState;
        currentModalContext: string | null;
        isComputerMoveInProgress?: boolean;
        buttonRefs?: (HTMLButtonElement | null)[];
        children?: Snippet;
    }

    let {
        modalState,
        currentModalContext,
        isComputerMoveInProgress = false,
        buttonRefs = $bindable([]),
        children,
    }: Props = $props();

    let processingButtons = $state<boolean[]>([]);

    $effect(() => {
        if (modalState.buttons) {
            processingButtons = Array(modalState.buttons.length).fill(false);
        }
    });
</script>

<div class="modal-action-buttons">
    {#each modalState.buttons as btn, i (i)}
        <StyledButton
            variant={btn.customClass === "blue-btn"
                ? "info"
                : btn.customClass === "green-btn"
                  ? "primary"
                  : btn.customClass === "danger-btn"
                    ? "danger"
                    : btn.primary
                      ? "primary"
                      : "default"}
            bind:buttonElement={buttonRefs[i]}
            dataTestId={btn.dataTestId ||
                `${modalState.dataTestId}-${btn.textKey || btn.text}-btn`}
            disabled={btn.disabled ||
                isComputerMoveInProgress ||
                processingButtons[i]}
            onclick={async () => {
                if (processingButtons[i] || isComputerMoveInProgress) return;
                processingButtons[i] = true;
                logService.action(
                    `Click: "${btn.textKey ? $t(btn.textKey as TranslationKey) : btn.text}" (Modal)`,
                );
                if (btn.onClick) await btn.onClick();
                else gameEventBus.dispatch("CloseModal");
            }}
        >
            {$i18nReady && btn.textKey
                ? $t(btn.textKey as TranslationKey)
                : btn.text}
        </StyledButton>
    {/each}

    {#if modalState.titleKey === "gameModes.title"}
        <DontShowAgainCheckbox
            modalType="gameMode"
            tid={`${modalState.dataTestId}-dont-show-again-switch`}
            scope={currentModalContext}
        />
    {:else if modalState.titleKey === "modal.expertModeTitle"}
        <DontShowAgainCheckbox
            modalType="expertMode"
            tid={`${modalState.dataTestId}-dont-show-again-switch`}
            scope={currentModalContext}
        />
    {/if}

    {#if children}
        {@render children()}
    {/if}
</div>
