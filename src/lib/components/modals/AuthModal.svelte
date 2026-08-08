<script lang="ts">
    import { authService, userStore } from "$lib/services/authService";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import UserProfile from "$lib/components/auth/UserProfile.svelte";
    import AuthForms from "$lib/components/auth/AuthForms.svelte";

    // Modes: 'auth' (вхід+реєстрація в одному вікні) | 'forgot' (відновлення пароля)
    let authMode: "auth" | "forgot" = "auth";
    let isLoading = false;
    let authError = "";
    let authInfo = "";

    let deletePassword = "";
    let newPassword = "";

    let isDeleteMode = false;
    let isChangePasswordMode = false;

    $: isAuthorized = $userStore && !$userStore.isAnonymous;

    async function handleLogin(email: string, password: string) {
        if (!email || !password) return;
        isLoading = true;
        authError = "";
        authInfo = "";
        const success = await authService.loginEmailPassword(email, password);
        isLoading = false;
        if (success) modalStateRune.closeModal();
        else authError = $t("ui.auth.authFailed");
    }

    async function handleRegister(email: string, password: string) {
        if (!email || !password) return;
        isLoading = true;
        authError = "";
        authInfo = "";
        // У MindStep реєстрація = лінкування анонімного акаунта (збереження прогресу)
        const success = await authService.linkEmailPassword(email, password);
        isLoading = false;
        if (success) modalStateRune.closeModal();
        else authError = $t("ui.auth.authFailed");
    }

    async function handleForgot(email: string) {
        if (!email) return;
        isLoading = true;
        authError = "";
        authInfo = "";
        await authService.resetPassword(email);
        isLoading = false;
        // Анти-enumeration (§4): однакове повідомлення незалежно від існування акаунта
        authInfo = $t("ui.auth.resetSent");
    }

    function setAuthMode(m: "auth" | "forgot") {
        authMode = m;
        authError = "";
        authInfo = "";
    }

    async function handleLogout() {
        await authService.logout();
        modalStateRune.closeModal();
    }

    async function handleDeleteAccount() {
        if (!deletePassword) return;
        isLoading = true;
        const success = await authService.deleteAccount(deletePassword);
        isLoading = false;
        if (success) {
            modalStateRune.closeModal();
        }
    }

    async function handleChangePassword() {
        if (!newPassword || newPassword.length < 6) {
            return;
        }
        isLoading = true;
        const success = await authService.changePassword(newPassword);
        isLoading = false;
        if (success) {
            isChangePasswordMode = false;
            newPassword = "";
        }
    }
</script>

<!-- FIX: Додано data-testid -->
<div class="auth-modal-content" data-testid="auth-modal-panel">
    {#if isAuthorized}
        <UserProfile
            bind:isDeleteMode
            bind:isChangePasswordMode
            bind:deletePassword
            bind:newPassword
            {isLoading}
            on:logout={handleLogout}
            on:deleteAccount={handleDeleteAccount}
            on:changePassword={handleChangePassword}
            on:toggleChangePassword={() =>
                (isChangePasswordMode = !isChangePasswordMode)}
            on:toggleDeleteAccount={() => (isDeleteMode = !isDeleteMode)}
            on:cancelMode={() => {
                isDeleteMode = false;
                isChangePasswordMode = false;
                deletePassword = "";
                newPassword = "";
            }}
        />
    {:else}
        <AuthForms
            mode={authMode}
            loading={isLoading}
            error={authError}
            info={authInfo}
            onlogin={handleLogin}
            onregister={handleRegister}
            onforgot={handleForgot}
            onmode={setAuthMode}
        />
    {/if}
</div>

<style>
    .auth-modal-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        margin: 0 auto;
        background: transparent;
        box-shadow: none;
        border: none;
        backdrop-filter: none;
        padding: 0;
    }

    /* §2: розширюємо саме auth-модалку до 440px, не чіпаючи інші модалки */
    :global(.base-modal-container[data-testid="auth-modal"]) {
        --responsive-max-width: min(440px, 95vw);
    }
</style>
