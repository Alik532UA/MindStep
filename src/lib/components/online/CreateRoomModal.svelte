<script lang="ts">
    import { storageService } from "$lib/services/storage";
    import { modalStateRune } from "$lib/stores/modalState.svelte";
    import StyledButton from "$lib/components/ui/StyledButton.svelte";
    import EditableText from "$lib/components/ui/EditableText.svelte";
    import { t } from "$lib/i18n/typedI18n";
    import { generateRandomPlayerName } from "$lib/utils/nameGenerator";
    import { doc, setDoc, serverTimestamp } from "firebase/firestore";
    import { getFirestoreDb } from "$lib/services/firebaseService";
    import { authService } from "$lib/services/authService";
    import { goto } from "$app/navigation";
    import { logService } from "$lib/services/logService.svelte";
    import { v4 as uuidv4 } from 'uuid';
    import type { TranslationKey } from "$lib/types/i18n";

    import { roomService } from "$lib/services/roomService";

    let roomName = $state("");
    let isCreating = $state(false);

    /**
     * Генерує випадкову назву для кімнати
     */
    function handleRandomRoomName() {
        const adjectives = ["Cool", "Epic", "Fast", "Smart", "Dark", "Neon"];
        const nouns = ["Room", "Battle", "Maze", "Arena", "Step", "Game"];
        const randomName = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]} ${Math.floor(Math.random() * 100)}`;
        roomName = randomName;
        return randomName;
    }

    async function handleCreate() {
        if (!roomName.trim()) return;
        
        isCreating = true;
        
        const playerName = storageService.get("online_playerName") || generateRandomPlayerName();

        try {
            const roomId = await roomService.createRoom(playerName, false, roomName);
            modalStateRune.closeModal();
            goto(`/online/lobby/${roomId}`);
        } catch (e) {
            logService.error("[CreateRoomModal] Failed to create room:", e);
        } finally {
            isCreating = false;
        }
    }
</script>

<div class="create-room-form">
    <h2>{$t("onlineMenu.createRoom" as TranslationKey)}</h2>
    
    <div class="field">
        <label for="room-name">{$t("onlineMenu.roomName" as TranslationKey)}</label>
        <EditableText 
            bind:value={roomName} 
            onRandom={handleRandomRoomName}
            onchange={(v) => roomName = v}
            placeholder={$t("onlineMenu.enterRoomNamePlaceholder" as TranslationKey)}
            dataTestId="room-name-input"
        />
    </div>

    <div class="actions">
        <StyledButton 
            variant="primary" 
            onclick={handleCreate} 
            disabled={isCreating || !roomName}
            dataTestId="create-room-confirm-btn"
        >
            {isCreating ? $t("ui.creating" as TranslationKey) : $t("ui.create" as TranslationKey)}
        </StyledButton>
    </div>
</div>

<style>
    .create-room-form {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .field {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    label {
        font-weight: bold;
        color: var(--text-secondary);
    }
    .actions {
        display: flex;
        justify-content: flex-end;
    }
</style>
