<script lang="ts">
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { logService } from "$lib/services/logService.js";
  import { APP_CONFIG } from "$lib/config/appConfig";

  // Sub-components
  import TopIconsBar from "$lib/components/main-menu/v2/TopIconsBar.svelte";
  import CenterPlayButton from "$lib/components/main-menu/v2/CenterPlayButton.svelte";
  import HamburgerMenu from "$lib/components/main-menu/v2/HamburgerMenu.svelte";

  // Modals
  import GameModeModal from "$lib/components/GameModeModal.svelte";
  import FeedbackModal from "$lib/components/modals/FeedbackModal.svelte";

  function handlePlay() {
    logService.action('Click: "Play" (MainMenuV2)');
    modalStateRune.open("game-mode-modal");
  }

  function handleFeedback() {
    logService.action('Click: "Feedback" (MainMenuV2)');
    modalStateRune.open("feedback-modal");
  }
</script>

<div class="main-menu-v2">
  <TopIconsBar onFeedback={handleFeedback} />

  <CenterPlayButton onPlay={handlePlay} />

  <HamburgerMenu onPlay={handlePlay} onFeedback={handleFeedback} />
</div>

<style>
  .main-menu-v2 {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
</style>