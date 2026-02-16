<script lang="ts">
    import { onMount, tick } from "svelte";
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import DontShowAgainCheckbox from "../DontShowAgainCheckbox.svelte";

    interface Action {
        labelKey?: TranslationKey;
        label?: string;
        onClick: () => void;
        variant?: "primary" | "default" | "danger" | "info" | "warning";
        dataTestId?: string;
        isHot?: boolean;
    }

    interface Props {
        titleKey?: TranslationKey | "";
        title?: string;
        titleValues?: Record<string, any>;
        contentKey?: TranslationKey | "";
        content?: string;
        contentValues?: Record<string, any>;
        actions?: Action[];
        dataTestId?: string;
        scope?: string;
        showDontShowAgain?: boolean;
        dontShowAgainType?: "gameMode" | "expertMode";
    }

    let {
        titleKey = "",
        title = "",
        titleValues = {},
        contentKey = "",
        content = "",
        contentValues = {},
        actions = [],
        dataTestId = "simple-modal",
        scope = "",
        showDontShowAgain = false,
        dontShowAgainType = "gameMode"
    }: Props = $props();

    let buttonRefs = $state<(HTMLButtonElement | null)[]>([]);

    onMount(() => {
        const hotIndex = actions.findIndex((a) => a.isHot);
        if (hotIndex !== -1) {
            tick().then(() => {
                buttonRefs[hotIndex]?.focus();
            });
        }
    });
</script>

<div class="simple-modal-content" data-testid={`${dataTestId}-content`}>
    {#if titleKey || title}
        <h2
            class="modal-title-menu"
            data-testid={`${dataTestId}-title`}
            data-i18n-key={titleKey}
        >
            {titleKey ? $t(titleKey as TranslationKey, titleValues) : title}
        </h2>
    {/if}

    {#if contentKey || content}
        <p
            class="message-text"
            data-testid={`${dataTestId}-message`}
            data-i18n-key={contentKey}
        >
            {contentKey ? $t(contentKey as TranslationKey, contentValues) : content}
        </p>
    {/if}

    {#if showDontShowAgain}
        <div class="checkbox-wrapper">
            <DontShowAgainCheckbox
                modalType={dontShowAgainType}
                tid={`${dataTestId}-dont-show-again`}
                {scope}
            />
        </div>
    {/if}

    {#if actions.length > 0}
        <div class="actions-column">
            {#each actions as action, i}
                <StyledButton
                    variant={action.variant || "default"}
                    size="large"
                    onclick={action.onClick}
                    dataTestId={action.dataTestId ||
                        `${dataTestId}-action-${i}`}
                    bind:buttonElement={buttonRefs[i]}
                >
                    {action.labelKey ? $t(action.labelKey) : action.label || ""}
                </StyledButton>
            {/each}
        </div>
    {/if}
</div>

<style>
    .simple-modal-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
    }

    .modal-title-menu {
        text-align: center;
        font-size: 1.8em;
        font-weight: 800;
        color: #fff;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        white-space: pre-line;
    }

    .message-text {
        text-align: center;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.1em;
        margin: 0;
        white-space: pre-line;
        line-height: 1.4;
    }

    .actions-column {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        margin-top: 10px;
    }

    .checkbox-wrapper {
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }
</style>
