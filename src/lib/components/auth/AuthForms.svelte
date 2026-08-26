<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import PasswordInput from "$lib/components/ui/PasswordInput.svelte";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import { Mail } from "lucide-svelte";

    interface Props {
        mode?: "auth" | "forgot";
        loading?: boolean;
        error?: string;
        info?: string;
        onlogin: (email: string, password: string) => void;
        onregister: (email: string, password: string) => void;
        onforgot: (email: string) => void;
        ongoogle: () => void;
        onmode: (m: "auth" | "forgot") => void;
    }

    let {
        mode = "auth",
        loading = false,
        error = "",
        info = "",
        onlogin,
        onregister,
        onforgot,
        ongoogle,
        onmode
    }: Props = $props();

    // Поля спільні між входом і реєстрацією (§1) — тримаємо їх у самому компоненті.
    let email = $state("");
    let password = $state("");
</script>

<div class="auth-card" data-testid="auth-card">
    {#if mode === "forgot"}
        <h3 class="auth-title">{$t("ui.auth.titleReset")}</h3>

        <form onsubmit={(e) => { e.preventDefault(); onforgot(email); }}>
            <div class="input-with-icon">
                <Mail size={18} class="input-icon lead" aria-hidden="true" />
                <input
                    id="reset-email"
                    type="email"
                    bind:value={email}
                    class="glass-input"
                    placeholder=" "
                    autocomplete="email"
                    required
                    data-testid="reset-email-input"
                />
                <label for="reset-email" class="floating-label">{$t("ui.auth.emailLabel")}</label>
            </div>

            {#if error}<p class="auth-error" role="alert" data-testid="reset-error">{error}</p>{/if}
            {#if info}<p class="auth-info" role="status" data-testid="reset-info-message">{info}</p>{/if}

            <div class="auth-actions">
                <StyledButton variant="primary" type="submit" disabled={loading} dataTestId="reset-submit">
                    {loading ? $t("common.loading") : $t("ui.auth.resetBtn")}
                </StyledButton>
                <button class="link-btn" type="button" onclick={() => onmode("auth")} data-testid="reset-back-btn">
                    {$t("ui.auth.backToLogin")}
                </button>
            </div>
        </form>
    {:else}
        <h3 class="auth-title">{$t("ui.auth.authTitle")}</h3>

        <form onsubmit={(e) => { e.preventDefault(); onlogin(email, password); }}>
            <div class="input-with-icon">
                <Mail size={18} class="input-icon lead" aria-hidden="true" />
                <input
                    id="auth-email"
                    type="email"
                    bind:value={email}
                    class="glass-input"
                    placeholder=" "
                    autocomplete="email"
                    required
                    data-testid="auth-email-input"
                />
                <label for="auth-email" class="floating-label">{$t("ui.auth.emailLabel")}</label>
            </div>

            <PasswordInput
                id="auth-password"
                testId="auth-password"
                label={$t("ui.auth.passwordLabel")}
                autocomplete="current-password"
                bind:value={password}
            />

            <!-- «Відновити пароль» — окремим рядком ПІД полем (не в полі: там CapsLock/розкладка/око) -->
            <button class="link-btn reset-link" type="button" onclick={() => onmode("forgot")} data-testid="auth-forgot-btn">
                {$t("ui.auth.forgotPassword")}
            </button>

            {#if error}<p class="auth-error" role="alert" data-testid="auth-error">{error}</p>{/if}
            {#if info}<p class="auth-info" role="status" data-testid="auth-info-message">{info}</p>{/if}

            <div class="auth-actions">
                <StyledButton variant="primary" type="submit" disabled={loading} dataTestId="auth-login">
                    {loading ? $t("common.loading") : $t("ui.auth.loginBtn")}
                </StyledButton>
                <StyledButton variant="default" type="button" onclick={() => onregister(email, password)} disabled={loading} dataTestId="auth-register">
                    {$t("ui.auth.registerBtn")}
                </StyledButton>
            </div>

            <!--
                GOOGLE — окремою кнопкою під поштою, а не над нею.

                Пошта тут головна: вона працює без жодного налаштування в консолі
                Firebase, а Google вимагає ввімкненого провайдера. Поставити його
                першим означало б зробити головним шлях, який у новому проєкті
                типово вимкнений.

                Кнопка НЕ в `<form>`-потоці: `type="button"` не дає їй надіслати
                форму входу поштою, а `onclick` веде свій шлях.
            -->
            <StyledButton
                variant="default"
                type="button"
                onclick={ongoogle}
                disabled={loading}
                dataTestId="auth-google"
            >
                {$t("ui.auth.googleBtn")}
            </StyledButton>
        </form>
    {/if}
</div>

<style>
    .auth-card {
        width: 100%;
        max-width: 440px; /* §2: комфортно, не вузько */
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-sizing: border-box;
    }
    .auth-title {
        text-align: center;
        margin: 0;
        color: var(--text-primary);
        font-size: 1.4em;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .auth-actions {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }
    .reset-link {
        align-self: flex-end;
        margin-top: -0.5rem;
        font-size: 0.85em;
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
    .auth-error {
        color: var(--error-color, #ef4444);
        text-align: center;
        margin: 0;
        font-size: 0.9em;
    }
    .auth-info {
        color: var(--positive-score-color, #22c55e);
        text-align: center;
        margin: 0;
        font-size: 0.9em;
    }

    /* Поле email з leading-іконкою + floating-label (пароль — усередині PasswordInput) */
    .input-with-icon {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    }
    :global(.input-icon.lead) {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.5;
        color: var(--text-accent, #6ea8fe);
        pointer-events: none;
        transition: opacity 0.2s ease;
    }
    .input-with-icon:focus-within :global(.input-icon.lead) {
        opacity: 1;
    }
    .input-with-icon :global(.glass-input) {
        width: 100%;
        box-sizing: border-box;
        padding-left: 3rem;
        padding-top: 1.45rem;
        padding-bottom: 0.55rem;
    }
    .floating-label {
        position: absolute;
        left: 3rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.1em; /* збіг із текстом .glass-input у стані-плейсхолдера */
        color: var(--text-secondary);
        pointer-events: none;
        transition: top 0.15s ease, transform 0.15s ease, font-size 0.15s ease, opacity 0.15s ease;
    }
    .input-with-icon :global(.glass-input:focus ~ .floating-label),
    .input-with-icon :global(.glass-input:not(:placeholder-shown) ~ .floating-label) {
        top: 0.5rem;
        transform: none;
        font-size: 0.72em;
        opacity: 0.7;
    }
</style>
