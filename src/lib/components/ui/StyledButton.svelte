<script lang="ts">
  import "$lib/css/components/styled-button.css";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import type { Snippet } from "svelte";

  interface Props {
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    title?: string;
    id?: string;
    tooltip?: string;
    variant?: "default" | "menu" | "primary" | "info" | "warning" | "danger";
    size?: "default" | "large" | "small";
    shape?: "default" | "circle";
    class?: string;
    style?: string;
    dataTestId?: string;
    buttonElement?: HTMLButtonElement | null;
    // Svelte 5 event props
    onclick?: (event: MouseEvent) => void;
    onmouseover?: (event: MouseEvent) => void;
    onmouseenter?: (event: MouseEvent) => void;
    onmouseleave?: (event: MouseEvent) => void;
    onfocus?: (event: FocusEvent) => void;
    onblur?: (event: FocusEvent) => void;
    // Snippets for slots
    children?: Snippet;
    icon?: Snippet;
  }

  let {
    type = "button",
    disabled = false,
    title = undefined,
    id = undefined,
    tooltip = undefined,
    variant = "default",
    size = "default",
    shape = "default",
    class: customClass = "",
    style = undefined,
    dataTestId = undefined,
    buttonElement = $bindable(null),
    onclick,
    onmouseover,
    onmouseenter,
    onmouseleave,
    onfocus,
    onblur,
    children,
    icon
  }: Props = $props();
</script>

<button
  {type}
  class="styled-button styled-button--variant-{variant} styled-button--size-{size} styled-button--shape-{shape} {customClass}"
  {style}
  {disabled}
  {title}
  {id}
  data-testid={dataTestId}
  bind:this={buttonElement}
  {onclick}
  {onmouseover}
  {onmouseenter}
  {onmouseleave}
  {onfocus}
  {onblur}
  use:customTooltip={tooltip}
>
  {#if icon}
    {@render icon()}
  {/if}
  {#if children}
    {@render children()}
  {/if}
</button>
