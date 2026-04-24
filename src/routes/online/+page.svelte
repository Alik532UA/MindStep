<script lang="ts">
  import FloatingBackButton from "$lib/components/FloatingBackButton.svelte";
  import RoomList from "$lib/components/online/RoomList.svelte";
  import CreateRoomModal from "$lib/components/online/CreateRoomModal.svelte";
  import StyledButton from "$lib/components/ui/StyledButton.svelte";
  import EditableText from "$lib/components/ui/EditableText.svelte";
  import { modalStateRune } from "$lib/stores/modalState.svelte";
  import { t } from "$lib/i18n/typedI18n";
  import { onMount } from "svelte";
  import { logService } from "$lib/services/logService.svelte";
  import { generateRandomPlayerName } from "$lib/utils/nameGenerator";
  import { storageService } from "$lib/services/storage";
  import { z } from "zod";

  const PlayerNameSchema = z.string().min(2).max(20).trim();

  let playerName = $state("");
  let nameError = $state(false);

  onMount(() => {
        const storedName = storageService.get("online_playerName");
        if (storedName) {
                playerName = storedName;
        } else {
                playerName = generateRandomPlayerName();
                storageService.set("online_playerName", playerName);
        }
  });

  function handleUpdateName(newName: string) {
        const result = PlayerNameSchema.safeParse(newName);

        if (result.success) {
                playerName = result.data;
                nameError = false;
                storageService.set("online_playerName", playerName);
                logService.ui(`[OnlinePage] Player name updated to: ${playerName}`);
        } else {
                nameError = true;
                logService.error(`[OnlinePage] Invalid player name: ${newName}`);
        }
  }
  function handleRandomName() {
    const newName = generateRandomPlayerName();
    handleUpdateName(newName);
    return newName;
  }

  function openCreateRoomModal() {
    modalStateRune.showModal({
      component: CreateRoomModal,
      dataTestId: "create-room-modal",
      variant: "menu",
      buttons: [],
      closeOnOverlayClick: true,
    });
  }
</script>

<div class="online-page">
  <div class="header-container">
    <FloatingBackButton />
    <h1>{$t("onlineMenu.title")}</h1>
  </div>

  <div class="content-container">
    <div class="top-section">
      <div class="player-setup">
        <span class="label">{$t("onlineMenu.enterNameTitle")}</span>

        <div class="name-editor-wrapper">
          <EditableText
            bind:value={playerName}
            canEdit={true}
            onRandom={handleRandomName}
            onchange={handleUpdateName}
            placeholder={$t("onlineMenu.enterNamePlaceholder")}
            dataTestId="player-name-input"
          />
        </div>
      </div>

      <div class="actions-bar">
        <StyledButton
          variant="primary"
          size="large"
          onclick={openCreateRoomModal}
          dataTestId="create-room-btn"
        >
          <span class="btn-content">
            <span class="plus">+</span>
            {$t("onlineMenu.createRoom")}
          </span>
        </StyledButton>
      </div>
    </div>

    <RoomList />
  </div>
</div>

<style>
  .online-page {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .header-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    padding-top: 1rem;
  }

  h1 {
    text-align: center;
    color: var(--text-primary);
    margin: 0;
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
  }

  .top-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 8px;
  }

  .player-setup {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  .label {
    color: var(--text-secondary);
    font-size: 0.9em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .name-editor-wrapper {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    padding: 12px 24px;
    min-width: var(--responsive-min-width, 300px);
    max-width: 90%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    transition:
      transform 0.2s,
      border-color 0.2s;
  }

  .name-editor-wrapper:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .actions-bar {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .btn-content {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .plus {
    font-size: 1.4rem;
    line-height: 1;
  }

  @media (min-width: 768px) {
    .top-section {
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
      padding: 0 16px 24px 16px;
    }

    .player-setup {
      align-items: flex-start;
      width: auto;
    }

    .actions-bar {
      width: auto;
    }
  }
</style>
