<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import { createEventDispatcher } from "svelte";

    let {
        mode = $bindable(),
        email = $bindable(""),
        password = $bindable(""),
        isLoading = false
    }: {
        mode: "link" | "login" | "reset";
        email?: string;
        password?: string;
        isLoading?: boolean;
    } = $props();

    const dispatch = createEventDispatcher();

    let isCapsLock = $state(false);
    let keyboardLang = $state("");
    let showPassword = $state(false);

    function handleSubmit() {
        dispatch("submit");
    }

    function setMode(newMode: "link" | "login" | "reset") {
        dispatch("setMode", newMode);
    }

    function handleModifier(e: MouseEvent | KeyboardEvent) {
        if (e.getModifierState) {
            isCapsLock = e.getModifierState('CapsLock');
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        handleModifier(e);
        if (e.key.length === 1) {
            if (/[ыъэёЫЪЭЁ]/.test(e.key)) {
                keyboardLang = "п.х.";
            } else if (/[а-яА-ЯіІїЇєЄґҐ]/.test(e.key)) {
                keyboardLang = "UA";
            } else if (/[a-zA-Z]/.test(e.key)) {
                keyboardLang = "EN";
            }
        }
    }
</script>

{#if mode === "link"}
    <h3 class="title">{$t("ui.auth.titleSave")}</h3>
    <p class="description">{$t("ui.auth.saveDescription")}</p>
{:else if mode === "login"}
    <h3 class="title">{$t("ui.auth.titleLogin")}</h3>
{:else}
    <h3 class="title">{$t("ui.auth.titleReset")}</h3>
{/if}

<div class="form-group">
    <label for="auth-email">{$t("ui.auth.emailLabel")}</label>
    <input
        id="auth-email"
        type="email"
        bind:value={email}
        class="glass-input"
        placeholder="name@example.com"
    />
</div>

{#if mode !== "reset"}
    <div class="form-group">
        <label for="auth-password">{$t("ui.auth.passwordLabel")}</label>
        <div class="password-input-wrapper">
            <input
                id="auth-password"
                type={showPassword ? "text" : "password"}
                bind:value={password}
                class="glass-input"
                placeholder="******"
                onkeydown={handleKeydown}
                onkeyup={handleModifier}
                onclick={handleModifier}
            />
            <div class="indicators">
                <button 
                    type="button" 
                    class="toggle-password-btn" 
                    onclick={() => showPassword = !showPassword}
                    title={showPassword ? "Приховати пароль" : "Показати пароль"}
                >
                    {#if showPassword}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-dashed"><path d="M13.054 18.946a11 11 0 0 1-2.11 0"/><path d="M13.054 5.054a11 11 0 0 0-2.11-.001"/><path d="M17.072 6.274a11 11 0 0 1 1.753 1.173"/><path d="M18.825 16.552a11 11 0 0 1-1.753 1.174"/><path d="M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955"/><path d="M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954"/><path d="M5.173 7.448a11 11 0 0 1 1.753-1.174"/><path d="M6.926 17.726a11 11 0 0 1-1.753-1.174"/><circle cx="12" cy="12" r="3"/></svg>
                    {/if}
                </button>
                {#if isCapsLock}
                    <span class="caps-indicator" title="Caps Lock">⇪</span>
                {/if}
                {#if keyboardLang}
                    <span class="lang-indicator">{keyboardLang}</span>
                {/if}
            </div>
        </div>
    </div>
{/if}

<div class="actions">
    <StyledButton
        variant="primary"
        onclick={handleSubmit}
        disabled={isLoading}
    >
        {#if isLoading}
            {$t("common.loading")}
        {:else if mode === "link"}
            {$t("ui.auth.saveBtn")}
        {:else if mode === "login"}
            {$t("ui.auth.loginBtn")}
        {:else}
            {$t("ui.auth.resetBtn")}
        {/if}
    </StyledButton>
</div>

<div class="links">
    {#if mode === "link"}
        <button class="link-btn" onclick={() => setMode("login")}>
            {$t("ui.auth.switchLogin")}
        </button>
    {:else if mode === "login"}
        <button class="link-btn" onclick={() => setMode("link")}>
            {$t("ui.auth.switchRegister")}
        </button>
        <button class="link-btn" onclick={() => setMode("reset")}>
            {$t("ui.auth.forgotPassword")}
        </button>
    {:else}
        <button class="link-btn" onclick={() => setMode("login")}>
            {$t("ui.auth.backToLogin")}
        </button>
    {/if}
</div>

<style>
    .title {
        text-align: center;
        margin: 0;
        color: var(--text-primary);
        font-size: 1.4em;
    }
    .description {
        font-size: 0.9em;
        color: var(--text-secondary);
        text-align: center;
        margin: 0;
        line-height: 1.4;
    }
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    label {
        font-size: 0.9em;
        font-weight: bold;
        color: var(--text-secondary);
    }
    .actions {
        margin-top: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .links {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        margin-top: 8px;
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
    
    .password-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
    }
    
    .password-input-wrapper :global(.glass-input) {
        padding-right: 90px;
        width: 100%;
        box-sizing: border-box;
    }
    
    .indicators {
        position: absolute;
        right: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-secondary);
        font-size: 0.9em;
        font-weight: 500;
        pointer-events: none;
    }
    
    .toggle-password-btn {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        color: var(--text-secondary);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s;
        pointer-events: auto;
    }
    
    .toggle-password-btn:hover {
        color: var(--text-primary);
    }
    
    .caps-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-primary);
        font-weight: bold;
        font-size: 1.1em;
    }
    
    .lang-indicator {
        text-transform: uppercase;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
        padding-left: 8px;
        letter-spacing: 0.5px;
    }
</style>
