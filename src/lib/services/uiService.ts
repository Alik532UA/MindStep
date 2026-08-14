import { goto } from '$app/navigation';
import { base } from '$app/paths';
import { uiState } from '$lib/stores/uiState.svelte';
import { gameSettingsState } from '$lib/stores/gameSettingsState.svelte';

export function navigateToGame() {
  const { intendedGameType } = uiState.state;
  const { gameMode, boardSize, blockModeEnabled } = gameSettingsState.state;

  let targetPath: string;

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
