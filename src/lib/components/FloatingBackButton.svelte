<script lang="ts">
  import { navigationService } from "$lib/services/navigationService.js";
  import { t } from "$lib/i18n/typedI18n";
  import { customTooltip } from "$lib/actions/customTooltip.js";
  import { logService } from "$lib/services/logService.js";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  interface Props {
    onclick?: () => void;
  }

  let { onclick }: Props = $props();

  function handleClick() {
    if (onclick) {
      logService.ui("FloatingBackButton: Custom onclick executed");
      onclick();
    } else {
      logService.ui("FloatingBackButton: Default navigation executed");
      navigationService.goToMainMenu();
    }
  }
</script>

<button
  data-testid="floating-back-btn"
  class="floating-back-btn"
  aria-label={$t("ui.goBack") || "Повернутися назад"}
  use:customTooltip={$t("ui.goBack") || "Повернутися назад"}
  onclick={handleClick}
  in:fly={{ x: -100, duration: 600, delay: 100, easing: quintOut }}
  out:fly={{ x: -50, duration: 300 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
</button>

<style>
  .floating-back-btn {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    z-index: 1010;
    display: flex;
    align-items: center;
    justify-content: center;
    /* FIX: Прибрано transform з transition, щоб не конфліктувати зі Svelte transition:fly */
    transition:
      background-color 0.2s,
      box-shadow 0.2s;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 0;
  }
  
  /* FIX: Запобігаємо стрибкам при знаходженні всередині контейнерів з transform (напр. модалки) */
  :global(.base-modal-container) .floating-back-btn {
    position: absolute;
  }

  .floating-back-btn:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .floating-back-btn svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
</style>
