<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import {
        feedbackService,
        type FeedbackType,
    } from "$lib/services/feedbackService";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import { logService } from "$lib/services/logService.svelte";
    import { onMount, untrack } from "svelte";

    import { userStore } from "$lib/services/authService";
    import AuthModal from "$lib/components/modals/AuthModal.svelte";
    import GlobalChatModal from "$lib/components/modals/GlobalChatModal.svelte";

    // FIX: Import new sub-components
    import FeedbackMenu from "./feedback/FeedbackMenu.svelte";
    import FeedbackForm from "./feedback/FeedbackForm.svelte";

    interface Props {
        initialType?: FeedbackType | null;
    }

    let { initialType = null }: Props = $props();

    /**
     * Чернетка форми, а не похідне від пропа.
     *
     * `untrack` тут не косметика: без нього копіювання пропа в локальний
     * `$state` — саме те «мовчазне копіювання», яке SVELTE-CORE-v8 § 1.10
     * називає HIGH. Позначка робить намір явним: `initialType` задає ЛИШЕ
     * початковий вибір, а далі його змінює гравець, і повертати сюди значення
     * пропа не потрібно.
     */
    let selectedType = $state<FeedbackType | null>(untrack(() => initialType));
    let isSubmitting = $state(false);

    // `$state`, а не `let`: усі чотири прив'язані через `bind:` до
    // `FeedbackForm`, який уже рунний і оголошує їх `$bindable()`.
    let pageLocation = $state("");
    let textContent = $state("");
    let actualResult = $state("");
    let expectedResult = $state("");

    onMount(() => {
        if (typeof window !== "undefined") {
            pageLocation = window.location.pathname;
        }
    });

    function selectType(type: FeedbackType) {
        logService.ui(`[FeedbackModal] Selected type: ${type}`);
        selectedType = type;
    }

    function handleGlobalChat() {
        logService.action('Click: "Global Chat" (FeedbackModal)');

        if (!$userStore || $userStore.isAnonymous) {
            logService.ui(
                "[FeedbackModal] User not logged in. Redirecting to AuthModal.",
            );
            modalStateRune.showModalAsReplacement({
                component: AuthModal,
                dataTestId: "auth-modal",
                variant: "menu",
                closeOnOverlayClick: true,
            });
        } else {
            logService.ui(
                "[FeedbackModal] User logged in. Opening GlobalChatModal.",
            );
            modalStateRune.showModalAsReplacement({
                component: GlobalChatModal,
                dataTestId: "global-chat-modal",
                variant: "standard",
                closeOnOverlayClick: true,
                customClass: "chat-modal-window",
            });
        }
    }

    async function handleSubmit() {
        if (isSubmitting) return;

        if (selectedType === "improvement" && !textContent.trim()) return;
        if (selectedType === "other" && !textContent.trim()) return;
        if (selectedType === "reward_suggestion" && !textContent.trim()) return;
        if (
            selectedType === "bug" &&
            (!actualResult.trim() || !expectedResult.trim())
        )
            return;

        isSubmitting = true;

        try {
            await feedbackService.submitFeedback({
                type: selectedType!,
                page: pageLocation,
                text: textContent,
                actualResult,
                expectedResult,
            });
            modalStateRune.closeModal();
        } catch (e) {
            isSubmitting = false;
        }
    }

    function goBack() {
        if (initialType) {
            modalStateRune.closeModal();
        } else {
            selectedType = null;
            textContent = "";
            actualResult = "";
            expectedResult = "";
        }
    }
</script>

<div class="feedback-modal-container">
    <h2 class="modal-title-menu">{$t("ui.feedback.title")}</h2>

    {#if !selectedType}
        <FeedbackMenu onselect={selectType} onglobalChat={handleGlobalChat} />
    {:else}
        <FeedbackForm
            {selectedType}
            bind:pageLocation
            {isSubmitting}
            bind:textContent
            bind:actualResult
            bind:expectedResult
            onback={goBack}
            onsubmit={handleSubmit}
        />
    {/if}
</div>

<style>
    .feedback-modal-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: var(--responsive-max-width, 360px);
        box-sizing: border-box;
        max-width: 100%;
        margin: 0 auto;
    }

    .modal-title-menu {
        text-align: center;
        font-size: 1.8em;
        font-weight: 800;
        color: #fff;
        margin: 0 0 8px 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
</style>
