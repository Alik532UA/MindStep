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
            if (/[а-яА-ЯіІїЇєЄґҐ]/.test(e.key)) {
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
                type="password"
                bind:value={password}
                class="glass-input"
                placeholder="******"
                onkeydown={handleKeydown}
                onkeyup={handleModifier}
                onclick={handleModifier}
            />
            <div class="indicators">
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
        padding-right: 60px;
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
