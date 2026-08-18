<script lang="ts">
  import "$lib/css/components/modal.css";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import FAQModal from "./FAQModal.svelte";
  import GameOverContent from "./modals/GameOverContent.svelte";
  import { onMount, tick, onDestroy } from "svelte";
  import { audioService } from "$lib/services/audioService.js";
  import { focusManager } from "$lib/stores/focusManager.js";
  import { logService } from "$lib/services/logService.svelte";
  import hotkeyService from "$lib/services/hotkeyService";
  import { uiState } from "$lib/stores/uiState.svelte";
  import { gameEventBus } from "$lib/services/gameEventBus";
  import FloatingBackButton from "$lib/components/FloatingBackButton.svelte";
  import BaseModal from "$lib/components/ui/BaseModal.svelte";
  import ErrorBoundary from "$lib/components/ErrorBoundary.svelte";
  import { throttle } from "$lib/utils/throttle";

  import ExpertModeVolumeControl from "./modals/parts/ExpertModeVolumeControl.svelte";
  import ModalHeader from "./modals/parts/ModalHeader.svelte";
  import ModalActionButtons from "./modals/parts/ModalActionButtons.svelte";
  import type { Snippet } from "svelte";
  import type { ModalButton } from "$lib/stores/modalState.svelte";

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  // Перейменовуємо state -> mState, щоб уникнути конфлікту з $state rune
  const mState = $derived(modalStateRune.state);

  let buttonRefs = $state<(HTMLButtonElement | null)[]>([]);
  let windowHeight = $state(0);
  let modalContent = $state<HTMLDivElement | null>(null);
  let expertVolume = $state(0.3);
  let currentModalContext = $state<string | null>(null);

  const updateHeight = () => (windowHeight = window.innerHeight);
  const throttledUpdateHeight = throttle(updateHeight, 150);

  onMount(() => {
    windowHeight = window.innerHeight;
    window.addEventListener("resize", throttledUpdateHeight);
    return () => window.removeEventListener("resize", throttledUpdateHeight);
  });

  const themeClass = $derived(
    mState.variant === "menu" ? "style-glass" : "style-classic"
  );

  /**
   * Чи малює вікно свою шапку. Одне джерело істини для двох речей: `{#if}`
   * нижче й `aria-labelledby`, який мусить показувати на існуючий `id`.
   * Розійшовшись, вони дали б порожнє посилання — а це для читалки те саме,
   * що діалог без назви взагалі (ACCESSIBILITY-v8 § 4.4).
   */
  const hasVisibleHeader = $derived(
    mState.variant === "standard" &&
      Boolean(mState.titleKey || mState.title) &&
      !(mState.dataTestId === "replay-modal" && windowHeight < 870)
  );

  /**
   * Назва для випадку, коли шапки на екрані немає. Спершу власний заголовок
   * вікна (він існує навіть коли шапку прибрано за браком висоти), далі —
   * загальне слово: «діалог» без назви читалка озвучує як безіменний.
   */
  const fallbackLabel = $derived(
    mState.titleKey
      ? $t(mState.titleKey as import("$lib/types/i18n").TranslationKey)
      : (mState.title || $t("modal.dialogLabel"))
  );

  $effect(() => {
    if (mState.isOpen) {
      const newContext = `modal-${mState.dataTestId}`;
      if (currentModalContext !== newContext) {
        if (currentModalContext) hotkeyService.popContext(currentModalContext);
        currentModalContext = newContext;
        hotkeyService.pushContext(currentModalContext);

        tick().then(() => {
          if (mState.closable) {
            hotkeyService.register(currentModalContext!, "Escape", () => {
              logService.ui("Escape key pressed, closing modal");
              gameEventBus.dispatch("CloseModal");
            });
          }
          mState.buttons.forEach((btn: ModalButton, i: number) => {
            if (btn.hotKey) {
              const key = btn.hotKey === "ESC" ? "Escape" : btn.hotKey;
              hotkeyService.register(currentModalContext!, key, () => {
                buttonRefs[i]?.click();
              });
            }
          });
        });
      }
    } else {
      if (currentModalContext) {
        hotkeyService.popContext(currentModalContext);
        currentModalContext = null;
      }
    }
  });

  onDestroy(() => {
    if (currentModalContext) {
      hotkeyService.popContext(currentModalContext);
      currentModalContext = null;
    }
  });

  $effect(() => {
    const isTestEnvironment =
      import.meta.env.CI === "true" || import.meta.env.MODE === "test";
    const shouldPlay =
      mState.isOpen &&
      mState.titleKey === "modal.expertModeTitle" &&
      !isTestEnvironment;

    audioService.setVolume(expertVolume);
    audioService.saveVolume(expertVolume);

    if (shouldPlay) audioService.play();
    else audioService.pause();
  });

  $effect(() => {
    if (mState.isOpen && mState.buttons) {
      const hotButtonIndex = mState.buttons.findIndex((b: ModalButton) => b.isHot);
      if (hotButtonIndex !== -1) {
        tick().then(() => {
          focusManager.focusWithDelay(buttonRefs[hotButtonIndex], 50);
        });
      }
    }
  });

  // Клік по тлу й пастка фокуса лишилися в `BaseModal` — сюди від них зостався
  // мертвий обробник `onOverlayClick` і мертвий імпорт `trapFocus`, які шукали
  // клас `.modal-overlay`, знятий разом зі старою розміткою.
</script>

{#if mState.isOpen}
  <BaseModal
    variant={mState.variant === "menu" ? "glass" : "classic"}
    onclose={() => mState.closable && gameEventBus.dispatch("CloseModal")}
    closeOnOverlayClick={mState.closeOnOverlayClick}
    dataTestId={mState.dataTestId}
    ariaLabelledby={hasVisibleHeader ? `${mState.dataTestId}-title` : undefined}
    ariaLabel={hasVisibleHeader ? undefined : fallbackLabel}
  >
    {#snippet extra()}
      {#if mState.variant === "menu" && mState.closeOnOverlayClick}
        <FloatingBackButton onclick={() => gameEventBus.dispatch("CloseModal")} />
      {/if}
    {/snippet}

    <div
      class="modal-window {themeClass} variant-{mState.variant}"
      class:custom={mState.customClass}
    >
      {#if hasVisibleHeader}
        <ModalHeader modalState={mState}>
          {#snippet volumeControl()}
            {#if mState.titleKey === "modal.expertModeTitle"}
              <ExpertModeVolumeControl bind:expertVolume />
            {/if}
          {/snippet}
        </ModalHeader>
      {/if}

      <ErrorBoundary compact={true}>
        <div
          class="modal-content"
          class:is-faq={typeof mState.content === "object" &&
            mState.content &&
            "isFaq" in (mState.content as any) &&
            (mState.content as any).isFaq}
          bind:this={modalContent}
          data-testid={`${mState.dataTestId}-panel`}
        >
          {#if typeof mState.content === "object" && mState.content && "reason" in (mState.content as any) && !mState.component}
            <p
              class="reason"
              data-testid={`${mState.dataTestId}-reason-text`}
              data-i18n-key={(mState.content as any).reasonKey}
            >
              {(mState.content as any).reason}
            </p>
          {/if}

          {#if mState.component}
            {@const Component = mState.component as any}
            <Component
              {...mState.props}
              content={mState.content}
              dataTestId={mState.dataTestId}
              scope={currentModalContext}
            />
          {:else if typeof mState.content === "object" && mState.content && "isFaq" in (mState.content as any) && (mState.content as any).isFaq}
            <FAQModal />
          {:else if typeof mState.content === "object" && mState.content && "key" in (mState.content as any) && "actions" in (mState.content as any)}
            <p class="reason">
              {$t("modal.keyConflictContent", {
                key: (mState.content as any).key as string,
              })}
            </p>
          {:else if mState.contentKey}
            <p class="reason">
              {$t(mState.contentKey as import("$lib/types/i18n").TranslationKey, mState.content as any)}
            </p>
          {:else if typeof mState.content === "string" && mState.content}
            <p class="reason">{mState.content}</p>
          {/if}

          {#if mState.content && typeof mState.content === "object" && "scoreDetails" in (mState.content as any) && !mState.component}
            <GameOverContent content={mState.content} />
          {/if}
        </div>
      </ErrorBoundary>

      {#if mState.buttons.length > 0}
        <ModalActionButtons
          modalState={mState}
          {currentModalContext}
          isComputerMoveInProgress={uiState.state?.isComputerMoveInProgress}
          bind:buttonRefs
        >
          {#if children}
            {@render children()}
          {/if}
        </ModalActionButtons>
      {/if}
    </div>
  </BaseModal>
{/if}

<style>
  /* Styles handled by modal.css */
</style>
