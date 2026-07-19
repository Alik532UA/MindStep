<script lang="ts">
  import "$lib/css/components/styled-button.css";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    variant?: "default" | "menu" | "primary" | "info" | "warning" | "danger";
    size?: "default" | "large" | "small";
    shape?: "default" | "circle";
    tooltip?: string;
    dataTestId?: string;
    buttonElement?: HTMLButtonElement | null;
    // Snippets for slots
    children?: Snippet;
    icon?: Snippet;
  }

  let {
    variant = "default",
    size = "default",
    shape = "default",
    tooltip = undefined,
    class: customClass = "",
    dataTestId = undefined,
    buttonElement = $bindable(),
    children,
    icon,
    ...restProps
  }: Props = $props();
</script>

<button
  type="button"
  class="styled-button styled-button--variant-{variant} styled-button--size-{size} styled-button--shape-{shape} {customClass}"
  data-testid={dataTestId}
  bind:this={buttonElement}
  use:customTooltip={tooltip}
  {...restProps}
>
  {#if icon}
    {@render icon()}
  {/if}
  {#if children}
    {@render children()}
  {/if}
</button>
