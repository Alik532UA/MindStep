<script lang="ts">
  import SvgIcons from "$lib/components/SvgIcons.svelte";
  import { logService } from "$lib/services/logService.svelte";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import { t } from "$lib/i18n/typedI18n";

  interface Props {
    value?: string;
    isOpen?: boolean;
    dataTestId?: string;
    onchange?: (value: string) => void;
  }

  let {
    value = $bindable("#ffffff"),
    isOpen = $bindable(false),
    dataTestId = "color-picker",
    onchange
  }: Props = $props();

  let currentValue = $derived(value);

  const predefinedColors = [
    "#00bbf9", // голубий
    "#f4a261", // помаранчевий
    "#9b5de5", // фіолетовий
    "#e76f51", // кораловий
    "#457b9d", // синій
    "#f15bb5", // рожевий
    "#2a9d8f", // зелений
    "#e63946", // червоний
  ];

  function selectColor(color: string) {
    logService.action(`Click: "Вибір кольору: ${color}" (ColorPicker)`);
    value = color;
    onchange?.(color);
    isOpen = false;
  }

  function openColorPicker() {
    logService.action('Click: "Відкрити палітру кольорів" (ColorPicker)');
    isOpen = false;
    const input = document.createElement("input");
    input.type = "color";
    input.value = value;
    input.addEventListener("change", (e) => {
      selectColor((e.target as HTMLInputElement).value);
    });
    input.click();
  }

  function toggleDropdown() {
    logService.action('Click: "Перемикач кольорів" (ColorPicker)');
    isOpen = !isOpen;
  }

  function handleClickOutside(event: MouseEvent) {
    if (!(event.target as Element).closest(".color-picker")) {
      isOpen = false;
    }
  }
</script>

<svelte:window onclick={handleClickOutside} />

<div class="color-picker" data-testid="{dataTestId}-container">
  <button
    class="color-preview"
    style="background-color: {currentValue}"
    onclick={toggleDropdown}
    use:customTooltip={"Обрати колір"}
    aria-label="Обрати колір гравця"
    data-testid="{dataTestId}-btn"
  ></button>

  {#if isOpen}
    <div class="color-dropdown" data-testid="{dataTestId}-menu">
      <div class="color-grid">
        {#each predefinedColors.slice(0, 4) as color}
          <button
            class="color-option"
            style="background-color: {color}"
            onclick={() => selectColor(color)}
            use:customTooltip={$t("localGame.pickColor", { color })}
            aria-label={$t("localGame.pickColor", { color })}
            data-testid="{dataTestId}-option-{color}"
          ></button>
        {/each}
        <button
          class="color-option palette-button"
          onclick={openColorPicker}
          use:customTooltip={$t("localGame.openPalette")}
          aria-label={$t("localGame.openPalette")}
          data-testid="{dataTestId}-palette-btn"
        >
          <SvgIcons name="theme" />
        </button>
        {#each predefinedColors.slice(4) as color}
          <button
            class="color-option"
            style="background-color: {color}"
            onclick={() => selectColor(color)}
            use:customTooltip={$t("localGame.pickColor", { color })}
            aria-label={$t("localGame.pickColor", { color })}
            data-testid="{dataTestId}-option-{color}"
          ></button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .color-picker {
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  .color-preview {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    border: var(--global-border-width) solid var(--border-color);
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    padding: 0;
  }

  .color-preview:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px var(--shadow-color);
  }

  .color-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    background: var(--bg-secondary);
    border: var(--unified-border);
    border-radius: var(--unified-border-radius);
    box-shadow: var(--unified-shadow);
    z-index: 1000;
    padding: 12px;
    min-width: 120px;
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .color-option {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: var(--global-border-width) solid var(--border-color);
    cursor: pointer;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-option:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 8px var(--shadow-color);
  }

  .palette-button {
    color: var(--text-secondary);
    background: transparent !important;
    padding: 0 !important;
    border: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .palette-button:hover {
    color: var(--text-primary);
    background: transparent !important;
  }
</style>
