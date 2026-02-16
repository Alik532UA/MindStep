import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { gameModeService } from '$lib/services/gameModeService';
import { uiStateStore } from '$lib/stores/uiStateStore';
import { get } from 'svelte/store';
import { gameSettingsStore } from '$lib/stores/gameSettingsStore';

export function navigateToGame() {
  const { intendedGameType } = get(uiStateStore);
  const { gameMode, boardSize, blockModeEnabled } = get(gameSettingsStore);

  let targetPath = "";

  switch (intendedGameType) {
    case "training":
      targetPath = "/game/training";
      break;
    case "local":
      targetPath = "/local-setup";
      break;
    case "timed":
      targetPath = "/game/timed";
      break;
    case "virtual-player":
      targetPath = "/game/virtual-player";
      break;
    default:
      targetPath = "/game/training";
      break;
  }

  // Формуємо параметри одразу
  const params = new URLSearchParams();
  if (gameMode) params.set("mode", gameMode);
  if (boardSize) params.set("size", boardSize.toString());
  if (blockModeEnabled !== undefined) params.set("block", blockModeEnabled ? "1" : "0");

  const search = params.toString();
  const finalUrl = `${base}${targetPath}${search ? "?" + search : ""}`;

  goto(finalUrl);
}
