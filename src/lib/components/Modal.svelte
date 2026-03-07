<script lang="ts">
  import "$lib/css/components/modal.css";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import FAQModal from "./FAQModal.svelte";
  import GameOverContent from "./modals/GameOverContent.svelte";
  import { onMount, tick, onDestroy } from "svelte";
  import { audioService } from "$lib/services/audioService.js";
  import { focusManager } from "$lib/stores/focusManager.js";
  import { logService } from "$lib/services/logService";
  import hotkeyService from "$lib/services/hotkeyService";
  import { trapFocus } from "$lib/actions/trapFocus.js";
  import { uiState } from "$lib/stores/uiState.svelte";
  import { gameEventBus } from "$lib/services/gameEventBus";
  import FloatingBackButton from "$lib/components/FloatingBackButton.svelte";
  import BaseModal from "$lib/components/ui/BaseModal.svelte";
  import ErrorBoundary from "$lib/components/ErrorBoundary.svelte";

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

  onMount(() => {
    windowHeight = window.innerHeight;
    const updateHeight = () => (windowHeight = window.innerHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  const themeClass = $derived(
    mState.variant === "menu" ? "style-glass" : "style-classic"
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

  function onOverlayClick(e: MouseEvent) {
    if (!mState.closeOnOverlayClick) return;
    const target = e.target as HTMLElement;
    if (
      target &&
      (target.classList.contains("modal-overlay") ||
        target.classList.contains("modal-window"))
    ) {
      logService.ui("Закриття модального вікна (overlay)");
      gameEventBus.dispatch("CloseModal");
    }
  }
</script>

{#if mState.isOpen}
  {#if mState.variant === "menu" && mState.closeOnOverlayClick}
    <FloatingBackButton onclick={() => gameEventBus.dispatch("CloseModal")} />
  {/if}

  <BaseModal
    variant={mState.variant === "menu" ? "glass" : "classic"}
    onclose={() => mState.closable && gameEventBus.dispatch("CloseModal")}
    closeOnOverlayClick={mState.closeOnOverlayClick}
    dataTestId={mState.dataTestId}
  >
    <div
      class="modal-window {themeClass} variant-{mState.variant}"
      class:custom={mState.customClass}
    >
      {#if mState.variant === "standard" && (mState.titleKey || mState.title) && !(mState.dataTestId === "replay-modal" && windowHeight < 870)}
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
          data-testid={`${mState.dataTestId}-content`}
        >
          {#if typeof mState.content === "object" && mState.content && "reason" in (mState.content as any) && !mState.component}
            <p
              class="reason"
              data-testid={`${mState.dataTestId}-content-reason`}
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
