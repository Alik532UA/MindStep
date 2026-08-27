<script lang="ts">
    /**
     * @file Глобальний Error Boundary для перехоплення клієнтських помилок.
     * @description Обгортає контент і показує дебаг-сторінку при падінні.
     * Працює ТІЛЬКИ в dev-режимі.
     *
     * Архітектура:
     * - SoC: Компонент відповідає лише за перехоплення та відображення помилок.
     * - Композиція: Використовується як обгортка для інших компонентів.
     */

    import { base } from "$app/paths";
    import { browser } from "$app/environment";
    import { logService } from "$lib/services/logService.svelte";
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        /** Чи показувати компактну версію помилки (для віджетів) */
        compact?: boolean;
    }

    let { children, compact = false }: Props = $props();

    /** Чи знаходимося ми в режимі розробки */
    const isDev = import.meta.env.DEV;

    /** Стан кнопки копіювання */
    let copyButtonText = $state("📋 Копіювати");
    let copySuccess = $state(false);

    /**
     * Формує текст помилки для копіювання.
     */
    function getErrorText(error: unknown): string {
        const url = browser ? window.location.href : "";
        const timestamp = new Date().toISOString();
        const message = error instanceof Error ? error.message : String(error);
        const stack = error instanceof Error ? error.stack : undefined;

        return `=== MindStep Error Report ===
Timestamp: ${timestamp}
URL: ${url}
Message: ${message}
${stack ? `\nStack:\n${stack}` : ""}
=============================`;
    }

    /**
     * Копіює текст помилки в буфер обміну.
     */
    async function copyError(error: unknown) {
        try {
            await navigator.clipboard.writeText(getErrorText(error));
            copyButtonText = "✅ Скопійовано!";
            copySuccess = true;

            setTimeout(() => {
                copyButtonText = "📋 Копіювати";
                copySuccess = false;
            }, 2000);
        } catch (err) {
            copyButtonText = "❌ Помилка копіювання";
            setTimeout(() => {
                copyButtonText = "📋 Копіювати";
            }, 2000);
        }
    }

    /**
     * Перезавантажує сторінку.
     */
    function reload() {
        if (browser) {
            window.location.reload();
        }
    }

    /**
     * Переходить на головну сторінку.
     */
    function goHome() {
        if (browser) {
            window.location.href = `${base}/`;
        }
    }

    /**
     * Обробник помилки — логування.
     */
    function handleError(error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        const stack = error instanceof Error ? error.stack : undefined;

        // Те саме, що й у `hooks.client.ts`: помилка мусить дійти до буфера
        // звіту, а не лишитися в консолі того, хто дивиться на неї зараз.
        logService.error(`[ErrorBoundary] ${message}`, stack ? { stack } : undefined);
    }
</script>

<svelte:boundary onerror={handleError}>
    {@render children()}

    {#snippet failed(error, reset)}
        {#if compact}
            <div class="error-compact" data-testid="error-boundary-compact">
                <span class="compact-emoji">⚠️</span>
                <div class="compact-content">
                    <span class="compact-title">Віджет недоступний</span>
                    {#if isDev}
                        <span class="compact-message">{error instanceof Error ? error.message : String(error)}</span>
                    {/if}
                </div>
                <button
                    class="compact-reset"
                    onclick={() => reset()}
                    aria-label="Спробувати ще раз"
                    title="Спробувати ще раз">🔄</button
                >
            </div>
        {:else}
            <!-- Error Page -->
            <div class="error-page" data-testid="error-boundary-page">
                <div class="error-container">
                    <!-- Заголовок з емодзі -->
                    <div class="error-header">
                        <span class="error-emoji">💥</span>
                        <h1>Упс! Щось пішло не так</h1>
                    </div>

                    <!-- Статус код -->
                    <div class="error-status">
                        <span class="status-code">ERROR</span>
                    </div>

                    <!-- Dev Section -->
                    {#if isDev}
                        <div class="dev-section" data-testid="dev-error-section">
                            <div class="dev-badge">🛠️ DEV MODE</div>

                            <!-- Повідомлення помилки -->
                            <div class="error-details">
                                <h3>Повідомлення:</h3>
                                <pre class="error-message">{error instanceof Error
                                        ? error.message
                                        : String(error)}</pre>
                            </div>

                            <!-- Стек викликів -->
                            {#if error instanceof Error && error.stack}
                                <div class="error-details">
                                    <h3>Стек викликів:</h3>
                                    <pre class="error-stack">{error.stack}</pre>
                                </div>
                            {/if}
                        </div>
                    {:else}
                        <p class="user-message">
                            Сталася неочікувана помилка в інтерфейсі. Спробуйте натиснути кнопку нижче, щоб відновити роботу.
                        </p>
                    {/if}

                    <!--
                        ЗВІТ — ОДИН НА ОБИДВА РЕЖИМИ, і саме це тут головне.

                        Доти повідомлення, стек і кнопка копіювання жили всередині
                        `{#if isDev}`. У продакшні лишався один рядок «сталася
                        неочікувана помилка», тобто екран не казав НІ КОРИСТУВАЧЕВІ,
                        НІ РОЗРОБНИКОВІ нічого.

                        Ціна названа: вкладка голосу на пристроях Apple падала на
                        `each_key_duplicate`, і у зібраному застосунку Svelte кидає
                        його як `Error("https://svelte.dev/e/…")` — виняток без
                        тексту. Звіт про дефект прийшов як «на Apple видає помилку»,
                        і причину довелося відтворювати підстановкою списку голосів.
                        Один скопійований рядок замінив би весь той шлях.

                        Згорнуто у `<details>`: людині, яка просто хоче повернутися
                        до гри, стек не потрібен на очах.
                    -->
                    <details class="report" data-testid="error-report-panel">
                        <summary>Технічні деталі для звіту</summary>
                        <p class="report-hint">
                            Скопіюйте цей текст і надішліть разом зі скаргою — без
                            нього причину доведеться шукати навмання.
                        </p>
                        <button
                            class="copy-btn"
                            class:success={copySuccess}
                            onclick={() => copyError(error)}
                            data-testid="copy-error-btn"
                        >
                            {copyButtonText}
                        </button>
                        <!--
                            Поле ПОРУЧ, а не замість кнопки: відмова буфера обміну
                            не мусить зʼїдати звіт (BETA-CHECKLIST-v8
                            `BETA-REPORT-FALLBACK`). На iOS `navigator.clipboard`
                            відхиляє запис частіше за інші платформи — тобто саме
                            там, де цей екран і бачили.
                        -->
                        <textarea
                            class="report-text"
                            readonly
                            rows="8"
                            data-testid="error-report-textarea">{getErrorText(error)}</textarea
                        >
                    </details>

                    <!-- Кнопки навігації -->
                    <div class="action-buttons">
                        <button
                            class="action-btn tertiary"
                            onclick={() => reset()}
                        >
                            🔄 Спробувати ще раз
                        </button>
                        <button class="action-btn secondary" onclick={reload}>
                            🔃 Перезавантажити
                        </button>
                        <button class="action-btn primary" onclick={goHome}>
                            🏠 На головну
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    {/snippet}
</svelte:boundary>

<style>
    .error-page {
        min-height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: var(--bg-primary, #1a1a2e);
        color: var(--text-primary, #ffffff);
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .error-container {
        max-width: 800px;
        width: 100%;
        background: var(--bg-secondary, #16213e);
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        text-align: center;
    }

    .error-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .error-emoji {
        font-size: 4rem;
        animation: shake 0.5s ease-in-out;
    }

    /* === Compact Error (Widgets) === */
    .error-compact {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: rgba(231, 76, 60, 0.1);
        border: 1px solid rgba(231, 76, 60, 0.3);
        border-radius: 12px;
        color: #fff;
        margin: 4px 0;
    }

    .compact-emoji {
        font-size: 1.5rem;
    }

    .compact-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .compact-title {
        font-weight: bold;
        font-size: 0.9rem;
    }

    .compact-message {
        font-size: 0.75rem;
        opacity: 0.8;
        font-family: monospace;
        word-break: break-all;
    }

    .compact-reset {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 6px;
        color: white;
        padding: 4px 8px;
        cursor: pointer;
        transition: background 0.2s;
    }

    .compact-reset:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    @keyframes shake {
        0%,
        100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
    }

    h1 {
        margin: 0;
        font-size: 1.8rem;
        color: var(--text-primary, #ffffff);
    }

    .error-status {
        margin: 1rem 0;
    }

    .status-code {
        display: inline-block;
        font-size: 2rem;
        font-weight: bold;
        padding: 0.5rem 1.5rem;
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        border-radius: 8px;
        color: white;
    }

    .user-message {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-secondary, #a0a0a0);
        margin: 1.5rem 0;
    }

    /* === Dev Section === */
    .dev-section {
        background: rgba(255, 193, 7, 0.1);
        border: 2px dashed rgba(255, 193, 7, 0.5);
        border-radius: 12px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        text-align: left;
    }

    .dev-badge {
        display: inline-block;
        background: linear-gradient(135deg, #ffc107, #ff9800);
        color: #000;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }

    .error-details {
        margin-bottom: 1rem;
    }

    .error-details h3 {
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        color: var(--text-secondary, #a0a0a0);
    }

    .error-message,
    .error-stack {
        background: rgba(0, 0, 0, 0.3);
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        font-family: "Consolas", "Monaco", monospace;
        font-size: 0.85rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-break: break-word;
        margin: 0;
        color: #f8f8f2;
        /* Дозволяємо виділення та копіювання тексту */
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
    }

    .error-stack {
        max-height: 300px;
        overflow-y: auto;
    }

    .copy-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem 1.5rem;
        background: linear-gradient(135deg, #3498db, #2980b9);
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 1rem;
    }

    .copy-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
    }

    .copy-btn.success {
        background: linear-gradient(135deg, #27ae60, #2ecc71);
    }

    /* === Звіт (обидва режими) === */
    .report {
        text-align: left;
        margin: 1.5rem 0;
        border: var(--global-border-width, 1px) solid
            var(--border-color, rgba(255, 255, 255, 0.15));
        border-radius: 12px;
        padding: 0.75rem 1rem;
    }

    .report summary {
        cursor: pointer;
        font-weight: 600;
        color: var(--text-secondary, #a0a0a0);
    }

    .report-hint {
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--text-secondary, #a0a0a0);
        margin: 0.75rem 0;
    }

    .report-text {
        display: block;
        width: 100%;
        margin-top: 0.75rem;
        padding: 0.75rem;
        box-sizing: border-box;
        /*
         * Тло — ТОКЕН, а не зашитий темний прошарок.
         *
         * Перша редакція мала `rgba(0, 0, 0, 0.3)`, як сусідні блоки dev-режиму.
         * У них це працює, бо dev-секцію бачать лише на темній темі; тут ні:
         * заміряно в браузері на зібраному сайті зі `data-theme="light"` —
         * темний текст `#23272f` на темному прошарку давав 1.40:1. Тобто я
         * повторив рівно той дефект, який цієї ж ночі лагодив в інших місцях
         * (див. четвертий клас `GATE-CSS-VARS`).
         *
         * Літерали лишаються запасними: цей екран мусить малюватися й тоді, коли
         * `app.css` не приїхав.
         */
        background: var(--control-bg, rgba(0, 0, 0, 0.3));
        color: var(--text-primary, #ffffff);
        border: var(--global-border-width, 1px) solid
            var(--border-color, rgba(255, 255, 255, 0.15));
        border-radius: 8px;
        font-family: "Consolas", "Monaco", monospace;
        font-size: 0.8rem;
        line-height: 1.5;
        resize: vertical;
    }

    /* === Action Buttons === */
    .action-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-top: 1.5rem;
    }

    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
    }

    .action-btn.primary {
        background: linear-gradient(
            135deg,
            var(--accent-primary, #9b59b6),
            var(--accent-secondary, #8e44ad)
        );
        color: white;
    }

    .action-btn.secondary {
        background: var(--control-bg, #2d3748);
        color: var(--text-primary, #ffffff);
    }

    .action-btn.tertiary {
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        color: white;
    }

    .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    /* === Responsive === */
    @media (max-width: 600px) {
        .error-container {
            padding: 1.5rem;
        }

        h1 {
            font-size: 1.4rem;
        }

        .status-code {
            font-size: 1.5rem;
        }

        .action-buttons {
            flex-direction: column;
        }

        .action-btn {
            width: 100%;
            justify-content: center;
        }
    }
</style>
