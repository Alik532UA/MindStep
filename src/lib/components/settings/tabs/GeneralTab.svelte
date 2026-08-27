<script lang="ts">
  import { appSettingsState } from "$lib/stores/appSettingsState.svelte";
  import { gameSettingsState } from "$lib/stores/gameSettingsState.svelte";
  import { logService } from "$lib/services/logService.svelte";
  import { clearCache } from "$lib/utils/cacheManager";
  import { t } from "$lib/i18n/typedI18n";
  import type { TranslationKey } from "$lib/types/i18n";
  import { locale } from "svelte-i18n";
  import { languages } from "$lib/config/constants";
  import StyledButton from "$lib/components/ui/StyledButton.svelte";
  import ToggleButton from "$lib/components/ToggleButton.svelte";
  import ThemePicker from "$lib/components/ui/ThemePicker.svelte";

  const settings = $derived(appSettingsState.state);
  const gameSettings = $derived(gameSettingsState.state);

  function selectLang(lang: "uk" | "en" | "crh" | "nl") {
    logService.ui(`Зміна мови: ${lang}`);
    // Той самий мертвий запис без префікса, що й у LanguageSwitcher —
    // прибраний з тієї ж причини (STORAGE-NAMESPACE-v8 § 1).
    appSettingsState.updateSettings({ language: lang });
    locale.set(lang);
  }

  function selectTheme(
    style: "purple" | "green" | "blue" | "gray" | "orange" | "wood",
    theme: "light" | "normal" | "dark",
  ) {
    logService.ui(`Зміна теми: ${style}, ${theme}`);
    appSettingsState.updateSettings({ style, theme });
  }

  function toggleSetting(name: string) {
    gameSettingsState.update((s) => ({ ...s, [name]: !s[name as keyof typeof s] }));
  }

  function resetSettings() {
    gameSettingsState.reset();
  }

  function handleKeepAppearance() {
    clearCache({ keepAppearance: true });
  }

  function handleClearAll() {
    clearCache({ keepAppearance: false });
  }
</script>

<div class="setup-grid">
  <!-- Column 1: Appearance -->
  <div class="grid-column" data-testid="settings-appearance-section">
    <div class="settings-card">
      <div class="settings-group">
        <span class="settings-label">{$t("settings.language")}</span>
        <div class="language-selector">
          {#each languages as lang (lang.code)}
            <button
              class="language-button"
              class:active={settings.language === lang.code}
              onclick={() => selectLang(lang.code)}
              aria-label={$t(`mainMenu.lang.${lang.code}` as TranslationKey)}
            >
              <div class="lang-flag-wrapper">
                <lang.component />
              </div>
            </button>
          {/each}
        </div>
      </div>
      <hr class="settings-divider" />
      <!--
        Рядки пікера — у `ui/ThemePicker.svelte`. Доти ця розмітка була
        ПОВНОЮ КОПІЄЮ тієї, що в `main-menu/ThemeDropdown.svelte`, і копії вже
        розійшлися: там кнопки мали `data-testid`, тут — ні.

        Префікс testid інший НАВМИСНО: модалка теми відкривається й із цієї
        сторінки, тобто обидва пікери можуть бути в DOM одночасно, а
        рантайм-інваріант унікальності `data-testid` перевіряє саме `/settings`.
      -->
      <ThemePicker onSelect={selectTheme} testIdPrefix="settings-theme" />
    </div>
  </div>

  <!-- Column 2: Gameplay -->
  <div class="grid-column" data-testid="settings-game-section">
    <div class="settings-card">
      <!-- FIX: Видалено секцію вибору режиму гри за замовчуванням -->

      <div class="settings-option">
        <ToggleButton
          label={$t("settings.showDifficultyWarningModal")}
          checked={gameSettings.showDifficultyWarningModal}
          ontoggle={() => toggleSetting("showDifficultyWarningModal")}
        />
      </div>
      <hr class="settings-divider" />
      <div class="settings-actions">
        <StyledButton
          variant="menu"
          onclick={resetSettings}
          tooltip={$t("settings.resetHint")}
        >
          <span>{$t("settings.reset")}</span>
        </StyledButton>
        <StyledButton variant="menu" onclick={handleKeepAppearance}>
          <span>{$t("mainMenu.clearCacheModal.keepAppearance")}</span>
        </StyledButton>
        <StyledButton variant="danger" onclick={handleClearAll}>
          <span>{$t("mainMenu.clearCacheModal.fullClear")}</span>
        </StyledButton>
      </div>
    </div>
  </div>
</div>

<style>
  .setup-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .setup-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }

  .settings-card {
    background: var(--bg-secondary);
    padding: 24px;
    border-radius: var(--unified-border-radius);
    box-shadow: var(--unified-shadow);
    border: var(--unified-border);
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;
  }

  .settings-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .settings-label {
    font-weight: 600;
    color: var(--text-secondary);
  }

  .settings-divider {
    border: none;
    border-top: 1.5px solid var(--border-color);
    margin: 8px 0;
  }

  /* FIX: Видалено стилі .settings-section, .settings-button-group, .game-mode-buttons */

  .settings-option {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .settings-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .language-selector {
    display: flex;
    gap: 8px;
  }

  .language-button {
    background: transparent !important;
    border: var(--global-border-width) solid transparent !important;
    border-radius: 8px;
    padding: 4px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .language-button:hover {
    border-color: var(--control-selected) !important;
  }

  .language-button.active {
    border-color: var(--control-selected) !important;
    box-shadow: none !important;
    background: var(--bg-hover) !important;
  }

  .lang-flag-wrapper {
    width: 32px;
    height: 24px;
    border-radius: 4px;
    overflow: hidden;
    display: block;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .lang-flag-wrapper :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  /*
    Стилі пікера тем переїхали в `ui/ThemePicker.svelte` разом із розміткою.
    Тут лишалася їхня повна копія — включно з напівпрозорими кольорами рядків,
    через які у СВІТЛІЙ темі назви ставали невидимими (заміряно: 1.08…2.18:1).
    Мертвими їх бачив і svelte-check: 14 попереджень про невживані селектори.
  */
</style>
