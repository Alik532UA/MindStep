<script lang="ts">
    import { tick } from "svelte";
    import { customTooltip } from "$lib/actions/customTooltip";
    import NotoEmoji from "$lib/components/NotoEmoji.svelte";
    import { logService } from "$lib/services/logService.svelte";

    interface Props {
        value: string;
        placeholder?: string;
        canEdit?: boolean;
        onRandom?: () => string; 
        minLength?: number;
        maxLength?: number;
        dataTestId?: string;
        onchange?: (value: string) => void;
    }

    let {
        value = $bindable(),
        placeholder = "",
        canEdit = true,
        onRandom,
        minLength = 1,
        maxLength = 20,
        dataTestId = "",
        onchange
    }: Props = $props();

    let isEditing = $state(false);
    let tempValue = $state(value);
    let inputRef = $state<HTMLInputElement | null>(null);

    async function startEditing() {
        if (!canEdit) return;
        tempValue = value;
        isEditing = true;
        await tick();
        inputRef?.focus();
    }

    function save() {
        const trimmed = tempValue?.trim() || "";
        if (trimmed.length < minLength) return;
        value = trimmed;
        isEditing = false;
        onchange?.(value);
    }

    function cancel() {
        isEditing = false;
        tempValue = value;
    }

    function handleRandom() {
        if (!canEdit) return;
        
        if (typeof onRandom === 'function') {
            const randomValue = onRandom();
            value = randomValue;
            tempValue = randomValue;
            onchange?.(value);
            logService.ui(`[EditableText] Random value generated: ${value}`);
        } else {
            logService.error("[EditableText] handleRandom called but onRandom is not a function");
        }
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter") save();
        if (e.key === "Escape") cancel();
    }
</script>

<div class="editable-text-container" data-testid={dataTestId}>
    {#if isEditing}
        <div class="edit-mode">
            <input
                bind:this={inputRef}
                type="text"
                bind:value={tempValue}
                {placeholder}
                maxlength={maxLength}
                onkeydown={handleKeydown}
                onblur={save}
                class="editable-input"
                data-testid="{dataTestId}-input"
            />
            <button
                class="icon-btn save"
                onmousedown={(e) => { e.preventDefault(); save(); }}
                title="Зберегти"
                data-testid="{dataTestId}-save-btn"
            >
                <NotoEmoji name="check_mark_button" size="1.1em" />
            </button>
            <button
                class="icon-btn cancel"
                onmousedown={(e) => { e.preventDefault(); cancel(); }}
                title="Скасувати"
                data-testid="{dataTestId}-cancel-btn"
            >
                <NotoEmoji name="cross_mark" size="1.1em" />
            </button>
        </div>
    {:else}
        <div class="view-mode">
            <span
                class="text-value"
                title={value}
                data-testid="{dataTestId}-display">{value || placeholder}</span
            >
            {#if canEdit}
                <div class="actions">
                    <button
                        class="icon-btn edit"
                        onclick={startEditing}
                        use:customTooltip={"Редагувати"}
                        data-testid="{dataTestId}-edit-btn"
                    >
                        <NotoEmoji name="pencil" size="1.1em" />
                    </button>
                    <!-- Кнопка рандому ЗАВЖДИ видима, якщо є функція або якщо ми в режимі редагування імен -->
                    <button
                        class="icon-btn random"
                        onclick={handleRandom}
                        use:customTooltip={"Згенерувати випадково"}
                        data-testid="{dataTestId}-random-btn"
                    >
                        <NotoEmoji name="game_die" size="1.1em" />
                    </button>
                </div>
            {/if}
        </div>
    {/if}
</div>

<style>
    .editable-text-container {
        display: inline-block;
        min-width: 150px;
        max-width: 100%;
    }

    .view-mode {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
    }

    .text-value {
        font-weight: bold;
        font-size: 1.1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
    }

    .actions {
        display: flex;
        gap: 4px;
        opacity: 0.6;
        transition: opacity 0.2s;
    }

    .view-mode:hover .actions {
        opacity: 1;
    }

    .edit-mode {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .editable-input {
        background: rgba(0, 0, 0, 0.2);
        border: var(--global-border-width) solid var(--border-color);
        border-radius: 4px;
        padding: 4px 8px;
        color: var(--text-primary);
        font-weight: bold;
        font-size: 1em;
        width: 100%;
        min-width: 120px;
    }

    .editable-input:focus {
        outline: none;
        border-color: var(--text-accent);
    }

    .icon-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.1em;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
            background 0.2s,
            transform 0.1s;
        color: var(--text-primary);
    }

    .icon-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
    }

    .icon-btn.save {
        color: #4caf50;
    }
    .icon-btn.cancel {
        color: #f44336;
    }
</style>
