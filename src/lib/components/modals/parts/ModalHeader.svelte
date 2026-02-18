<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import { i18nReady } from "$lib/i18n/init.js";
    import { gameEventBus } from "$lib/services/gameEventBus";
    import { hotkeyTooltip } from "$lib/actions/hotkeyTooltip.js";
    import type { ModalState } from "$lib/stores/modalState.svelte";
    import type { Snippet } from "svelte";

    interface Props {
        modalState: ModalState;
        volumeControl?: Snippet;
    }

    let { modalState, volumeControl }: Props = $props();

    function close() {
        gameEventBus.dispatch("CloseModal");
    }
</script>

<div class="modal-header" data-testid={`${modalState.dataTestId}-header`}>
    {#if volumeControl}
        {@render volumeControl()}
    {/if}

    <div class="modal-title-wrapper">
        <h2
            class="modal-title"
            data-testid={`${modalState.dataTestId}-title`}
            data-i18n-key={modalState.titleKey}
        >
            {#if $i18nReady && modalState.titleKey}
                {$t(
                    modalState.titleKey as TranslationKey,
                    modalState.titleValues || (modalState.content as any),
                )}
            {:else}
                {modalState.title}
            {/if}
        </h2>
    </div>

    {#if modalState.closable}
        <button
            class="modal-close"
            use:hotkeyTooltip={{ key: "ESC" }}
            onclick={close}
            data-testid={`${modalState.dataTestId}-close-btn`}>×</button
        >
    {/if}
</div>
