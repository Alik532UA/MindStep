<script lang="ts">
    import { authService } from "$lib/services/authService";
    import { userStore } from "$lib/stores/authState.svelte";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import UserProfile from "$lib/components/auth/UserProfile.svelte";
    import AuthForms from "$lib/components/auth/AuthForms.svelte";

    /*
     * Руни, а не legacy-режим (SVELTE-CORE-v8, анти-патерни).
     *
     * Цей компонент був ЄДИНИМ у проєкті, що лишався в режимі Svelte 4: голі
     * `let` як стан і `$:` як похідне. Доки `userStore` був `writable`, це
     * працювало; після переведення його на `$state` legacy-режим перестав би
     * бачити зміни, бо `$:` перераховується лише від legacy-залежностей.
     *
     * Тобто перехід тут не «заодно», а умова: або обидва в рунах, або обидва в
     * Svelte 4. Змішувати не можна — і саме таке змішування дало б наймовчазніший
     * дефект: вікно входу, яке не оновлюється після входу.
     */
    // Modes: 'auth' (вхід+реєстрація в одному вікні) | 'forgot' (відновлення пароля)
    let authMode = $state<"auth" | "forgot">("auth");
    let isLoading = $state(false);
    let authError = $state("");
    let authInfo = $state("");

    let deletePassword = $state("");
    let newPassword = $state("");

    let isDeleteMode = $state(false);
    let isChangePasswordMode = $state(false);

    const isAuthorized = $derived(userStore.user && !userStore.user.isAnonymous);

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
            {isDeleteMode}
            {isChangePasswordMode}
            bind:deletePassword
            bind:newPassword
            {isLoading}
            onlogout={handleLogout}
            ondeleteAccount={handleDeleteAccount}
            onchangePassword={handleChangePassword}
            ontoggleChangePassword={() =>
                (isChangePasswordMode = !isChangePasswordMode)}
            ontoggleDeleteAccount={() => (isDeleteMode = !isDeleteMode)}
            oncancelMode={() => {
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
