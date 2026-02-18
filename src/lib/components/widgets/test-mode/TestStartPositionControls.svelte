<script lang="ts">
    import { t } from "$lib/i18n/typedI18n";
    import { untrack } from "svelte";
    import {
        testModeState,
        type PositionMode,
    } from "$lib/stores/testModeState.svelte";

    const tState = $derived(testModeState.state);
    let manualX = $state(0);
    let manualY = $state(0);

    // FIX: untrack запобігає циклу — читаємо tState реактивно,
    // але записуємо manualX/manualY поза реактивним відстеженням
    $effect(() => {
        const x = tState.manualStartPosition?.x ?? 0;
        const y = tState.manualStartPosition?.y ?? 0;
        untrack(() => {
            manualX = x;
            manualY = y;
        });
    });

    function setStartPositionMode(mode: PositionMode) {
        testModeState.update((s) => ({
            ...s,
            startPositionMode: mode,
            manualStartPosition: null,
        }));
    }

    function setManualStartPosition() {
        testModeState.update((s) => ({
            ...s,
            startPositionMode: "manual",
            manualStartPosition: { x: manualX, y: manualY },
        }));
    }
</script>

<div class="test-mode-control-group">
    <h4 class="test-mode-group-title">{$t("testMode.startPosition")}</h4>
    <div class="test-mode-btn-group">
        <button
            class="test-mode-row-btn"
            onclick={() => setStartPositionMode("random")}
            class:active={tState.startPositionMode === "random"}
            data-testid="test-mode-start-pos-random-btn"
            >{$t("testMode.random")}</button
        >
        <button
            class="test-mode-row-btn"
            onclick={() => setStartPositionMode("manual")}
            class:active={tState.startPositionMode === "manual"}
            data-testid="test-mode-start-pos-manual-btn"
            >{$t("testMode.manual")}</button
        >
    </div>
    {#if tState.startPositionMode === "manual"}
        <div class="test-mode-manual-coords">
            <div class="test-mode-input-group">
                <label for="manualX">{$t("testMode.x")}</label>
                <input
                    id="manualX"
                    class="test-mode-input"
                    type="number"
                    bind:value={manualX}
                    min="0"
                    max="7"
                    data-testid="test-mode-start-pos-x"
                />
            </div>
            <div class="test-mode-input-group">
                <label for="manualY">{$t("testMode.y")}</label>
                <input
                    id="manualY"
                    class="test-mode-input"
                    type="number"
                    bind:value={manualY}
                    min="0"
                    max="7"
                    data-testid="test-mode-start-pos-y"
                />
            </div>
            <button
                class="test-mode-square-btn"
                onclick={setManualStartPosition}
                data-testid="test-mode-set-start-pos-btn"
                >{$t("testMode.set")}</button
            >
        </div>
    {/if}
</div>

<style>
    .test-mode-control-group {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .test-mode-group-title {
        font-weight: 500;
        color: var(--text-muted, #aaa);
        border-bottom: var(--global-border-width) solid
            var(--border-color, #444);
        padding-bottom: 0.125rem;
        margin-bottom: 0.25rem;
    }
    .test-mode-btn-group {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.25rem;
    }
    .test-mode-row-btn {
        background: var(--control-bg);
        border: var(--global-border-width) solid var(--border-color);
        color: var(--text-color);
        padding: 0 0.4rem;
        line-height: 1.5;
        font-size: 0.8rem;
        border-radius: 12px;
        text-align: center;
        cursor: pointer;
        transition:
            background-color 0.2s,
            border-color 0.2s;
        min-height: 32px;
    }
    .test-mode-row-btn:hover {
        border-color: var(--control-selected);
    }
    .test-mode-row-btn.active {
        background: var(--control-selected);
        color: var(--accent-text, #000000);
        border-color: var(--control-selected);
    }
    .test-mode-manual-coords {
        display: grid;
        grid-template-columns: repeat(2, 1fr) 30px;
        gap: 0.25rem;
        align-items: end;
    }
    .test-mode-input-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.125rem;
    }
    .test-mode-input-group label {
        font-size: 0.7rem;
        color: var(--text-muted, #aaa);
    }
    .test-mode-input {
        width: 100%;
        background: var(--input-bg, #111);
        border: var(--global-border-width) solid var(--input-border, #555);
        color: var(--text-color, #fff);
        border-radius: 12px;
        padding: 0.1rem 0;
        text-align: center;
        font-size: 0.8rem;
        -moz-appearance: textfield;
        appearance: textfield;
        transition:
            border-color 0.2s,
            box-shadow 0.2s;
    }
    .test-mode-input:focus {
        outline: none;
        border-color: var(--control-selected, #007acc);
        box-shadow: 0 0 0 2px
            var(--control-selected-shadow, rgba(0, 122, 204, 0.5));
    }
    .test-mode-input::-webkit-outer-spin-button,
    .test-mode-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .test-mode-square-btn {
        background: var(--control-bg);
        border: var(--global-border-width) solid var(--border-color);
        color: var(--text-color);
        border-radius: 12px;
        width: 100%;
        height: 100%;
        padding: 0;
        font-size: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
</style>
