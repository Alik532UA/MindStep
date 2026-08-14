
import { test, expect, type Page, type Locator } from '@playwright/test';

/**
 * Встановлює глобальні прапорці тестування та налаштовує перехоплення логів.
 */
export async function setupTestEnvironment(page: Page) {
  // Перехоплення помилок консолі
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error' || text.includes('[ERROR]')) {
      console.log(`\x1b[31m[BROWSER ERROR]\x1b[0m ${text}`);
    } else if (text.includes('[INIT]') || text.includes('[STATE]')) {
      // Можна розкоментувати для дебагу локально, але в CI краще тільки помилки
      // console.log(`\x1b[34m[BROWSER LOG]\x1b[0m ${text}`);
    }
  });

  // Перехоплення несподіваних помилок JS на сторінці
  page.on('pageerror', exception => {
    console.log(`\x1b[31m[BROWSER EXCEPTION]\x1b[0m ${exception.message}`);
  });

  await page.addInitScript(() => {
    (window as any).__playwright_test__ = true;
    (window as any).updateNoticeDisabled = true;
    (window as any).testMode = true;
  });
}

// Робить перший хід у грі
export async function makeFirstMove(page: Page) {
  await makeMove(page, 'right', 1, false);
  await expectScoreToBePositive(page, 'score-value');
}

// Отримує числове значення рахунку за data-testid
export async function getScoreByTestId(page: Page, testId: string): Promise<number> {
  const scoreElement = page.getByTestId(testId);
  const scoreText = await scoreElement.innerText();
  return parseInt(scoreText, 10);
}

// Перевіряє, що рахунок за testId є додатнім
export async function expectScoreToBePositive(page: Page, testId: string) {
  const score = await getScoreByTestId(page, testId);
  expect(score).toBeGreaterThan(0);
}

// Перевіряє, що рахунок за testId є нульовим або від'ємним
export async function expectScoreToBeZeroOrNegative(page: Page, testId: string) {
  const score = await getScoreByTestId(page, testId);
  expect(score).toBeLessThanOrEqual(0);
}

// Встановлює розмір ігрового поля
export async function setBoardSize(page: Page, size: number) {
  await page.evaluate((newSize) => {
    const userActionService = (window as any).userActionService;
    if (userActionService) {
      userActionService.changeBoardSize(newSize);
    } else {
      throw new Error('userActionService not found on window object');
    }
  }, size);
}

// Перелік режимів гри
export enum GameMode {
  Beginner = 'beginner-mode-btn',
}

// Перелік станів режиму блокування
export enum BlockModeState {
  Toggle,
  On,
  Off,
}

// Вмикає тестовий режим
export async function enableTestMode(page: Page) {
  await page.waitForFunction(() => (window as any).toggleTestMode, null, { timeout: 10000 });
  await page.evaluate(() => {
    (window as any).toggleTestMode();
  });
  await expect(page.getByTestId('test-mode-widget-container')).toBeVisible();
}

// Починає нову гру
export async function startNewGame(page: Page, mode: GameMode = GameMode.Beginner) {
  await setupTestEnvironment(page);
  await page.goto('/');
  await enableTestMode(page);
  await page.getByTestId('center-play-btn').click();
  await page.getByTestId(mode).click();

  if (mode === GameMode.Beginner) {
    await page.getByTestId('faq-modal-ok-btn').click();
  }

  await page.waitForURL(/\/game\/virtual-player/, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('.direction-controls-panel')).toBeVisible();
}

/**
 * Очищує локальне сховище браузера з урахуванням префіксів
 */
export async function clearBrowserStorage(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem('mindstep_migrated_to_v5', 'true');
    localStorage.setItem('mindstep_app_version', '9.9.9');
  });
}

/**
 * Робить хід гравця
 */
export async function makeMove(page: Page, direction: string, distance: number, expectComputerMove = true) {
  await page.getByTestId(`dir-btn-${direction}`).click();
  await page.getByTestId(`dist-btn-${distance}`).click();
  await expect(page.getByTestId('confirm-move-btn')).not.toHaveClass(/disabled/);
  await page.getByTestId('confirm-move-btn').click();

  if (expectComputerMove) {
    const computerMoveBtn = page.getByTestId('center-info-btn');
    await expect(computerMoveBtn).toBeVisible({ timeout: 5000 });
    await expect(computerMoveBtn).toHaveClass(/computer-move-display/);
  }
}

/**
 * Встановлює режим блокування
 */
export async function setBlockMode(page: Page, state: BlockModeState) {
  const toggle = page.getByTestId('block-mode-toggle');
  const isChecked = await toggle.evaluate(node => node.classList.contains('active'));

  switch (state) {
    case BlockModeState.Toggle:
      await toggle.click();
      break;
    case BlockModeState.On:
      if (!isChecked) {
        await toggle.click();
      }
      break;
    case BlockModeState.Off:
      if (isChecked) {
        await toggle.click();
      }
      break;
  }
}

/**
 * Очищує Firestore в емуляторі
 */
export async function clearFirestore() {
  const projectId = 'mindstep-dev';
  const url = `http://127.0.0.1:8080/emulator/v1/projects/${projectId}/databases/(default)/documents`;
  
  try {
    const ping = await fetch('http://127.0.0.1:8080/', { method: 'GET' });
    if (!ping.ok && ping.status !== 404) throw new Error('Not reachable');
  } catch (e) {
    // `cause` лишає в звіті справжню причину: без неї видно лише наш текст, а
    // не те, чи емулятор не запущений, чи порт зайнятий чужим процесом.
    throw new Error(
      '❌ FIREBASE EMULATOR IS NOT RUNNING! Please start it with: npx firebase emulators:start',
      { cause: e }
    );
  }

  try {
    await fetch(url, { method: 'DELETE' });
    console.log('✅ Firestore Emulator data cleared');
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ Error clearing Firestore Emulator:', errorMessage);
  }
}

/**
 * Створює онлайн кімнату.
 */
export async function createOnlineRoom(page: Page, playerName: string = 'HostMaster'): Promise<string> {
  await setupTestEnvironment(page);
  await page.goto('/online');
  await clearBrowserStorage(page);
  await page.reload();
  
  await expect(async () => {
    const createBtn = page.locator('[data-testid="create-room-btn"]');
    const currentUrl = page.url();
    
    await expect(createBtn, `Кнопка "Створити кімнату" має бути видима на сторінці ${currentUrl}`).toBeVisible({ timeout: 10000 });
    
    await page.click('[data-testid="player-name-input-edit-btn"]');
    await page.fill('[data-testid="player-name-input-input"]', playerName);
    await page.click('[data-testid="player-name-input-save-btn"]');
    
    await createBtn.click();
    
    const generatedRoomName = `Room_${Math.random().toString(36).substring(2, 8)}_${Date.now()}`;
    
    await page.click('[data-testid="room-name-input-edit-btn"]');
    await page.fill('[data-testid="room-name-input-input"]', generatedRoomName);
    await page.click('[data-testid="room-name-input-save-btn"]');
    
    await page.click('[data-testid="create-room-confirm-btn"]');
    
    const lobbyContainer = page.locator('[data-testid="lobby-container"]');
    await expect(lobbyContainer, `Після створення кімнати має з'явитися контейнер лобі. Поточна URL: ${page.url()}`).toBeVisible({ timeout: 15000 });
  }).toPass({ timeout: 40000 });
  
  const roomNameDisplay = page.locator('[data-testid="room-name-editable-value"]');
  return (await roomNameDisplay.textContent()) || '';
}

/**
 * Приєднується до існуючої онлайн кімнати.
 */
export async function joinOnlineRoom(page: Page, roomName: string, playerName: string = 'GuestChallenger'): Promise<void> {
  await setupTestEnvironment(page);
  await page.goto('/online');
  await expect(async () => {
    const refreshBtn = page.locator('[data-testid="refresh-rooms-btn"]');
    await expect(refreshBtn).toBeVisible({ timeout: 10000 });

    await page.click('[data-testid="player-name-input-edit-btn"]');
    await page.fill('[data-testid="player-name-input-input"]', playerName);
    await page.click('[data-testid="player-name-input-save-btn"]');

    await refreshBtn.click();
    const roomCard = page.locator('div.room-card', { hasText: roomName }).first();
    await expect(roomCard).toBeVisible({ timeout: 10000 });
    
    await roomCard.locator('[data-testid^="join-room-btn-"]').click();
    await expect(page.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
  }).toPass({ timeout: 40000 });
}
