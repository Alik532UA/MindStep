<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import type { TranslationKey } from "$lib/types/i18n";
    import { i18nReady } from "$lib/i18n/init.svelte";
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
        <!--
          `id`, а не лише `data-testid`: на нього посилається `aria-labelledby`
          вікна (ACCESSIBILITY-v8 § 4.4). Значення те саме, що в локаторі, — тож
          унікальність заголовка вже стежить інваріант з `invariants.spec.ts`.
        -->
        <h2
            class="modal-title"
            id={`${modalState.dataTestId}-title`}
            data-testid={`${modalState.dataTestId}-title`}
            data-i18n-key={modalState.titleKey}
        >
            {#if i18nReady.ready && modalState.titleKey}
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
        <!--
          Підпис кнопки — `aria-label`, бо всередині лежить знак множення.
          Читалка озвучувала його як символ («times», «знак множення»), тобто
          єдина кнопка закриття всіх вікон застосунку не мала назви взагалі
          (UI-ELEMENTS-v8 § 1). Сам символ від озвучення прихований.
        -->
        <button
            class="modal-close"
            use:hotkeyTooltip={{ key: "ESC" }}
            onclick={close}
            aria-label={$t("modal.close")}
            data-testid={`${modalState.dataTestId}-close-btn`}
            ><span aria-hidden="true">×</span></button
        >
    {/if}
</div>
