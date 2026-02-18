<script lang="ts">
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { uiState } from "$lib/stores/uiState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import ToggleButton from "./ToggleButton.svelte";
  import ButtonGroup from "$lib/components/ui/ButtonGroup.svelte";
  import StyledButton from "$lib/components/ui/StyledButton.svelte";
  import { speakTestPhrase } from "$lib/services/speechService";
  import { logService } from "$lib/services/logService.js";

  // Визначаємо, чи ми в онлайн режимі
  let isOnlineMode = $derived(uiState.state.intendedGameType === "online");

  // Опції для швидкості
  let speedOptions = $derived([1, 1.2, 1.4, 1.6, 1.8, 2].map((rate) => ({
    label: `x${rate}`,
    active: gameSettingsState.state.speechRate === rate,
    onClick: () => {
      logService.ui(`Speech rate changed to ${rate}`);
      gameSettingsState.updateSettings({ speechRate: rate });
      speakTestPhrase();
    },
    dataTestId: `speech-rate-${rate}-btn`,
  })));

  // Опції для порядку озвучення
  let orderOptions = $derived([
    {
      label: $t("voiceSettings.dist_dir"),
      active: gameSettingsState.state.speechOrder === "dist_dir",
      onClick: () => {
        logService.ui("Speech order changed to dist_dir");
        gameSettingsState.updateSettings({ speechOrder: "dist_dir" });
      },
      dataTestId: "speech-order-dist-dir-btn",
    },
    {
      label: $t("voiceSettings.dir_dist"),
      active: gameSettingsState.state.speechOrder === "dir_dist",
      onClick: () => {
        logService.ui("Speech order changed to dir_dist");
        gameSettingsState.updateSettings({ speechOrder: "dir_dist" });
      },
      dataTestId: "speech-order-dir-dist-btn",
    },
  ]);

  // Опції для "Озвучувати для"
  let speakForOptions = $derived(isOnlineMode
    ? [
        {
          label: $t("voiceSettings.myMove"),
          active: gameSettingsState.state.speechFor.onlineMyMove,
          onClick: () => {
            logService.ui("Speak for MY move toggled");
            gameSettingsState.updateSettings({
              speechFor: {
                ...gameSettingsState.state.speechFor,
                onlineMyMove: !gameSettingsState.state.speechFor.onlineMyMove,
              },
            });
          },
          dataTestId: "speech-for-my-move-btn",
        },
        {
          label: $t("voiceSettings.opponentMove"),
          active: gameSettingsState.state.speechFor.onlineOpponentMove,
          onClick: () => {
            logService.ui("Speak for OPPONENT move toggled");
            gameSettingsState.updateSettings({
              speechFor: {
                ...gameSettingsState.state.speechFor,
                onlineOpponentMove:
                  !gameSettingsState.state.speechFor.onlineOpponentMove,
              },
            });
          },
          dataTestId: "speech-for-opponent-move-btn",
        },
      ]
    : [
        {
          label: $t("voiceSettings.player"),
          active: gameSettingsState.state.speechFor.player,
          onClick: () => {
            logService.ui("Speak for player toggled");
            gameSettingsState.updateSettings({
              speechFor: {
                ...gameSettingsState.state.speechFor,
                player: !gameSettingsState.state.speechFor.player,
              },
            });
          },
          dataTestId: "speech-for-player-btn",
        },
        {
          label: $t("voiceSettings.computer"),
          active: gameSettingsState.state.speechFor.computer,
          onClick: () => {
            logService.ui("Speak for computer toggled");
            gameSettingsState.updateSettings({
              speechFor: {
                ...gameSettingsState.state.speechFor,
                computer: !gameSettingsState.state.speechFor.computer,
              },
            });
          },
          dataTestId: "speech-for-computer-btn",
        },
      ]);
</script>

<div class="settings-section">
  <StyledButton
    variant="menu"
    onclick={() => speakTestPhrase()}
    dataTestId="voice-settings-test-voice-btn"
    style="width: 100%;"
  >
    {$t("voiceSettings.testVoice")}
  </StyledButton>
</div>

<div class="settings-section">
  <span class="settings-label">{$t("voiceSettings.speed")}</span>
  <ButtonGroup options={speedOptions} dataTestId="voice-settings-speed-group" />
</div>

<div class="settings-section">
  <span class="settings-label">{$t("voiceSettings.order")}</span>
  <ButtonGroup options={orderOptions} dataTestId="voice-settings-order-group" />
</div>

<div class="settings-section">
  <ToggleButton
    label={$t("voiceSettings.shortSpeech")}
    checked={gameSettingsState.state.shortSpeech}
    ontoggle={() => {
      logService.ui("Short speech toggled");
      gameSettingsState.updateSettings({
        shortSpeech: !gameSettingsState.state.shortSpeech,
      });
    }}
    dataTestId="short-speech-toggle-btn"
  />
</div>

<div class="settings-section">
  <ToggleButton
    label={$t("voiceSettings.speakModalTitles")}
    checked={gameSettingsState.state.speakModalTitles}
    ontoggle={() => {
      logService.ui("Speak modal titles toggled");
      gameSettingsState.updateSettings({
        speakModalTitles: !gameSettingsState.state.speakModalTitles,
      });
    }}
    dataTestId="speak-modal-titles-toggle-btn"
  />
</div>

<div class="settings-section">
  <span class="settings-label">{$t("voiceSettings.speakFor")}</span>
  <ButtonGroup
    options={speakForOptions}
    dataTestId="voice-settings-speak-for-group"
  />
</div>

<style>
  .settings-section {
    margin-bottom: 24px;
  }

  .settings-label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--text-secondary);
    font-size: 0.95em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
</style>
