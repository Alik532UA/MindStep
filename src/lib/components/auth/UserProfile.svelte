<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import { authService } from "$lib/services/authService";
    import { userStore } from "$lib/stores/authState.svelte";
    import { userProfileStore } from "$lib/stores/authState.svelte";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import PasswordInput from "$lib/components/ui/PasswordInput.svelte";
    import EditableText from "$lib/components/ui/EditableText.svelte";
    import { generateRandomPlayerName } from "$lib/utils/nameGenerator";

    interface Props {
        isDeleteMode?: boolean;
        isChangePasswordMode?: boolean;
        isLoading?: boolean;
        deletePassword?: string;
        newPassword?: string;
        /**
         * Поточний пароль — для повторної автентифікації перед зміною.
         *
         * Firebase вимагає свіжого входу, і доти цього поля не було зовсім: на
         * сесії, старшій за кілька хвилин, зміна пароля просто відмовляла, а на
         * екрані це виглядало як «кнопка не працює».
         */
        currentPassword?: string;
        onlogout: () => void;
        ontoggleChangePassword: () => void;
        ontoggleDeleteAccount: () => void;
        ondeleteAccount: () => void;
        onchangePassword: () => void;
        oncancelMode: () => void;
    }

    let {
        isDeleteMode = false,
        isChangePasswordMode = false,
        isLoading = false,
        deletePassword = $bindable(""),
        newPassword = $bindable(""),
        currentPassword = $bindable(""),
        onlogout,
        ontoggleChangePassword,
        ontoggleDeleteAccount,
        ondeleteAccount,
        onchangePassword,
        oncancelMode,
    }: Props = $props();

    function handleNameChange(newName: string) {
        authService.updateNickname(newName);
    }
</script>

<h3 class="title">{$t("ui.auth.titleProfile")}</h3>

<div class="profile-info">
    <div class="info-row">
        <span class="label">{$t("ui.auth.emailLabel2")}</span>
        <span class="value">{userStore.user?.email}</span>
    </div>
    <div class="info-row">
        <span class="label">{$t("ui.auth.nicknameLabel")}</span>
        <EditableText
            value={userProfileStore.profile?.displayName || "Player"}
            canEdit={true}
            onRandom={generateRandomPlayerName}
            onchange={handleNameChange}
            dataTestId="profile-nickname-edit"
        />
    </div>
</div>

{#if !isDeleteMode && !isChangePasswordMode}
    <!-- MAIN PROFILE ACTIONS -->
    <div class="actions">
        <StyledButton variant="default" onclick={ontoggleChangePassword}>
            {$t("ui.auth.changePasswordBtn")}
        </StyledButton>

        <StyledButton variant="default" onclick={onlogout}>
            {$t("ui.auth.logoutBtn")}
        </StyledButton>

        <StyledButton
            variant="danger"
            onclick={ontoggleDeleteAccount}
            style="margin-top: 10px;"
        >
            {$t("ui.auth.deleteAccountBtn")}
        </StyledButton>
    </div>
{:else if isChangePasswordMode}
    <!-- CHANGE PASSWORD VIEW -->
    <div class="change-password-zone">
        <PasswordInput
            id="current-password"
            label={$t("ui.auth.currentPasswordLabel")}
            testId="profile-current-password"
            autocomplete="current-password"
            bind:value={currentPassword}
        />
        <PasswordInput
            id="new-password"
            label={$t("ui.auth.newPasswordLabel")}
            testId="profile-new-password"
            autocomplete="new-password"
            bind:value={newPassword}
        />
        <div class="actions">
            <StyledButton
                variant="primary"
                onclick={onchangePassword}
                disabled={isLoading || !newPassword || !currentPassword}
            >
                {isLoading
                    ? $t("common.loading")
                    : $t("ui.auth.savePasswordBtn")}
            </StyledButton>
            <button class="link-btn" onclick={oncancelMode}>
                {$t("ui.auth.cancelChangePasswordBtn")}
            </button>
        </div>
    </div>
{:else if isDeleteMode}
    <!-- DELETE ACCOUNT CONFIRMATION -->
    <div class="delete-zone">
        <p class="warning-text">{$t("ui.auth.deleteWarning")}</p>
        <PasswordInput
            id="delete-password"
            label={$t("ui.auth.passwordLabel")}
            testId="profile-delete-password"
            autocomplete="current-password"
            variant="danger"
            bind:value={deletePassword}
        />
        <div class="actions">
            <StyledButton
                variant="danger"
                onclick={ondeleteAccount}
                disabled={isLoading || !deletePassword}
            >
                {isLoading
                    ? $t("common.loading")
                    : $t("ui.auth.confirmDeleteBtn")}
            </StyledButton>
            <button class="link-btn" onclick={oncancelMode}>
                {$t("ui.auth.cancelDeleteBtn")}
            </button>
        </div>
    </div>
{/if}

<style>
    .title {
        text-align: center;
        margin: 0;
        color: var(--text-primary);
        font-size: 1.4em;
    }
    .profile-info {
        background: rgba(255, 255, 255, 0.05);
        padding: 16px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: center;
        text-align: center;
    }
    .info-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: center;
        width: 100%;
    }
    .info-row .label {
        font-size: 0.8em;
        text-transform: uppercase;
        opacity: 0.7;
    }
    .info-row .value {
        font-weight: bold;
        font-size: 1.1em;
    }

    .actions {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .change-password-zone {
        background: rgba(255, 255, 255, 0.05);
        padding: 16px;
        border-radius: 12px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .delete-zone {
        border: var(--global-border-width) solid var(--error-color);
        background: rgba(244, 67, 54, 0.1);
        padding: 16px;
        border-radius: 12px;
        margin-top: 10px;
    }
    .warning-text {
        color: var(--error-color);
        font-size: 0.9em;
        margin: 0 0 12px 0;
        text-align: center;
    }

    .link-btn {
        background: none;
        border: none;
        color: var(--text-accent);
        cursor: pointer;
        font-size: 0.9em;
        text-decoration: underline;
        opacity: 0.8;
        transition: opacity 0.2s;
    }
    .link-btn:hover {
        opacity: 1;
    }
</style>
