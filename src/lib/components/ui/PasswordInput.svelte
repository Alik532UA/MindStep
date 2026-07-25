<!--
    PasswordInput — реюзне поле пароля у MindStep.
    Канон: FORM-INPUTS-v7. Обов'язкові фічі (HIGH): CapsLock, показати/приховати,
    попередження про розкладку під полем; безпекові атрибути; a11y (aria-live).
    Стандарт іконок (§1.1): єдиний колір через --input-icon-color, стан — лише opacity,
    порядок trailing [toggle], розмір 18px, єдині відступи, floating-label.
-->
<script lang="ts">
    import { Lock, Eye, EyeOff, AlertCircle } from "lucide-svelte";
    import { t } from "$lib/i18n/typedI18n";

    interface Props {
        value: string;
        id: string;
        /** База для data-testid дочірніх елементів */
        testId: string;
        /** Плаваючий підпис у полі (floating-label). Без нього підпис задає батько зовні. */
        label?: string;
        /** 'current-password' — вхід/підтвердження; 'new-password' — реєстрація/зміна */
        autocomplete?: "current-password" | "new-password";
        name?: string;
        /** 'danger' підсвічує рамку помилковим кольором (напр. підтвердження видалення) */
        variant?: "default" | "danger";
        showCapsLock?: boolean;
        /** Попередження про розкладку, якщо введено нелатинський символ */
        showLayoutWarning?: boolean;
    }

    let {
        value = $bindable(""),
        id,
        testId,
        label,
        autocomplete = "current-password",
        name = "password",
        variant = "default",
        showCapsLock = true,
        showLayoutWarning = true
    }: Props = $props();

    let showPassword = $state(false);
    let isCapsLock = $state(false);
    let nonLatin = $state(false); // Введено нелатинську літеру → ймовірно не та розкладка

    function readCaps(e: KeyboardEvent | MouseEvent) {
        isCapsLock = e.getModifierState("CapsLock");
    }

    function onKeydown(e: KeyboardEvent) {
        readCaps(e);
        if (e.key.length !== 1) return;
        if (/[a-zA-Z]/.test(e.key)) nonLatin = false;
        else if (/\p{L}/u.test(e.key)) nonLatin = true; // Будь-яка нелатинська літера
    }

    $effect(() => {
        if (value === "") nonLatin = false;
    });
</script>

<div class="input-with-icon" class:with-label={!!label}>
    <Lock size={18} class="input-icon lead" aria-hidden="true" />

    <input
        {id}
        {name}
        {autocomplete}
        type={showPassword ? "text" : "password"}
        bind:value
        class="glass-input {variant === 'danger' ? 'danger-input' : ''}"
        placeholder={label ? " " : undefined}
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        onkeydown={onKeydown}
        onkeyup={readCaps}
        onclick={readCaps}
        data-testid={`${testId}-input`}
    />

    {#if label}
        <label for={id} class="floating-label">{label}</label>
    {/if}

    <!-- Trailing: лише інтерактивний toggle-око, завжди скраю праворуч -->
    <div class="trailing">
        <button
            type="button"
            class="toggle"
            onclick={() => (showPassword = !showPassword)}
            aria-pressed={showPassword}
            aria-label={showPassword ? $t("ui.auth.hidePassword") : $t("ui.auth.showPassword")}
            data-testid={`${testId}-toggle-button`}
        >
            {#if showPassword}<EyeOff size={18} />{:else}<Eye size={18} />{/if}
        </button>
    </div>
</div>

<!-- Попередження — окремими рядками ПІД полем; кожне НЕЗАЛЕЖНЕ (обидва можуть бути одночасно). -->
<div class="field-warnings" role="status" aria-live="polite">
    {#if showCapsLock && isCapsLock}
        <p class="field-warning" data-testid={`${testId}-caps-warning`}>
            <AlertCircle class="warning-icon" aria-hidden="true" />
            <span>{$t("ui.auth.capsLockOn")}</span>
        </p>
    {/if}
    {#if showLayoutWarning && nonLatin}
        <p class="field-warning" data-testid={`${testId}-layout-warning`}>
            <AlertCircle class="warning-icon" aria-hidden="true" />
            <span>{$t("ui.auth.checkLayout")}</span>
        </p>
    {/if}
</div>

<style>
    .input-with-icon {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        --input-icon-color: var(--text-secondary, #6b7280);
    }

    /* Leading-іконка: акцент на :focus-within */
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
        padding-left: 3rem; /* під leading-іконку */
        padding-right: 3.5rem; /* під trailing toggle-око */
    }
    .input-with-icon :global(.glass-input.danger-input) {
        border-color: var(--error-color);
    }

    /* Floating-label — лише коли задано проп label */
    .input-with-icon.with-label :global(.glass-input) {
        padding-top: 1.45rem;
        padding-bottom: 0.55rem;
    }
    .floating-label {
        position: absolute;
        left: 3rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.1em;
        color: var(--text-secondary);
        pointer-events: none;
        transition: top 0.15s ease, transform 0.15s ease, font-size 0.15s ease, opacity 0.15s ease;
    }
    .input-with-icon.with-label :global(.glass-input:focus ~ .floating-label),
    .input-with-icon.with-label :global(.glass-input:not(:placeholder-shown) ~ .floating-label) {
        top: 0.5rem;
        transform: none;
        font-size: 0.72em;
        opacity: 0.7;
    }

    /* Приховати нативну кнопку показу пароля браузера */
    .input-with-icon :global(.glass-input::-ms-reveal),
    .input-with-icon :global(.glass-input::-ms-clear) {
        display: none;
    }

    .trailing {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px; /* touch target ≥44px */
        height: 44px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: var(--text-secondary);
        transition: color 0.2s;
    }
    .toggle:hover {
        color: var(--text-primary);
    }

    .field-warnings {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-top: 0.35rem;
    }
    .field-warning {
        display: flex;
        align-items: flex-start;
        gap: 0.4rem;
        margin: 0;
        font-size: 0.8rem;
        color: var(--warning-color, #f59e0b);
        white-space: pre-line;
    }
    :global(.warning-icon) {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        margin-top: 0.1rem;
    }
</style>
