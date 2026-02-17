<script lang="ts">
    import { scrubbable } from "$lib/actions/scrubbable";

    interface Props {
        value: string | number;
        dataTestId?: string;
        disabled?: boolean;
        scrubConfig?: { min: number; max: number; step?: number } | null;
        decreaseTestId?: string;
        increaseTestId?: string;
        valueTestId?: string;
        ondecrement?: () => void;
        onincrement?: () => void;
        onchange?: (val: number) => void;
    }

    let {
        value,
        dataTestId = "",
        disabled = false,
        scrubConfig = null,
        decreaseTestId = "",
        increaseTestId = "",
        valueTestId = "",
        ondecrement,
        onincrement,
        onchange
    }: Props = $props();

    // Обробник для scrubbable
    function handleScrubInput(val: number) {
        // Опціонально для live update
    }

    function handleScrubChange(val: number) {
        onchange?.(val);
    }
</script>

<div class="stepper-container" class:disabled data-testid={dataTestId}>
    <button
        class="stepper-btn"
        onclick={() => !disabled && ondecrement?.()}
        data-testid={decreaseTestId}
        aria-label="Decrease"
        {disabled}
    >
        -
    </button>

    {#if scrubConfig && typeof value === "number" && !disabled}
        <!-- Інтерактивне значення (Scrubbable) -->
        <div
            class="stepper-value scrubbable"
            data-testid={valueTestId}
            use:scrubbable={{
                value: value,
                min: scrubConfig.min,
                max: scrubConfig.max,
                step: scrubConfig.step || 1,
                onInput: handleScrubInput, // Опціонально
                onChange: handleScrubChange,
                disabled: disabled,
            }}
            title="Drag to change"
        >
            {value}
        </div>
    {:else}
        <!-- Статичне значення -->
        <span class="stepper-value" data-testid={valueTestId}>
            {value}
        </span>
    {/if}

    <button
        class="stepper-btn"
        onclick={() => !disabled && onincrement?.()}
        data-testid={increaseTestId}
        aria-label="Increase"
        {disabled}
    >
        +
    </button>
</div>

<style>
    .stepper-container {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.2);
        padding: 4px;
        border-radius: 12px;
        gap: 4px;
        width: fit-content;
        transition: opacity 0.2s;
    }

    .stepper-container.disabled {
        opacity: 0.6;
        pointer-events: none; /* Блокуємо все всередині */
    }

    .stepper-value {
        font-weight: 700;
        min-width: 50px; /* Трохи ширше для чисел */
        padding: 0 8px;
        text-align: center;
        color: var(--text-primary);
        font-size: 1.1em;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stepper-value.scrubbable {
        cursor: ew-resize;
        transition:
            color 0.2s,
            background 0.2s;
        border-radius: 4px;
        padding: 2px 8px;
    }

    .stepper-value.scrubbable:hover {
        color: var(--text-accent);
        background: rgba(255, 255, 255, 0.05);
    }

    .stepper-btn {
        background: transparent;
        border: none;
        border-radius: 8px;
        color: var(--text-secondary);
        min-width: 40px;
        height: 36px;
        font-size: 1.2em;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stepper-btn:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-primary);
    }

    .stepper-btn:active:not(:disabled) {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(0.95);
    }

    .stepper-btn:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
</style>
