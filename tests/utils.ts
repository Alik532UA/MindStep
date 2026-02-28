// Робить перший хід у грі
export async function makeFirstMove(page: Page) {
  // A specific instance of makeMove for convenience
  // Робимо хід
  await makeMove(page, 'right', 1, false);
  // Перевіряємо, що рахунок більший за 0
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
} test.setTimeout(1000 * 60 * 120); // 120 minutes
// await page.waitForTimeout(7777777); // Додаємо паузу

import { test, expect, type Page, type Locator } from '@playwright/test';

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

// Вмикає тестовий режим
export async function enableTestMode(page: Page) {
  // НАВІЩО: Чекаємо, доки наш тестовий хук стане доступним на window.
  await page.waitForFunction(() => (window as any).toggleTestMode, null, { timeout: 10000 });

  // НАВІЩО: Викликаємо єдину, централізовану функцію для ввімкнення
  // тестового режиму. Це гарантує, що тест взаємодіє з додатком
  // через той самий SSoT, що й користувацький інтерфейс.
  await page.evaluate(() => {
    (window as any).toggleTestMode();
  });

  // Перевіряємо результат дії, а не імплементацію
  await expect(page.getByTestId('test-mode-widget-container')).toBeVisible();
}

// Починає нову гру
export async function startNewGame(page: Page, mode: GameMode = GameMode.Beginner) {
  await page.goto('/');
  
  // НАВІЩО: Позначаємо для додатка, що це автоматизований тест.
  // Це дозволяє вимкнути блокуючі UI-елементи (як-от банери оновлення PWA).
  await page.evaluate(() => {
    (window as any).__playwright_test__ = true;
    (window as any).updateNoticeDisabled = true;
  });

  await enableTestMode(page);
  await page.getByTestId('center-play-btn').click();

  await page.getByTestId(mode).click();

  if (mode === GameMode.Beginner) {
    await page.getByTestId('faq-modal-ok-btn').click();
  }

  await page.waitForURL(/\/game\/virtual-player/, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(100);
  await expect(page.locator('.direction-controls-panel')).toBeVisible();
}

// Перелік станів режиму блокування
export enum BlockModeState {
  Toggle,
  On,
  Off,
}

// Встановлює режим блокування
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
 * Покращена перевірка видимості, яка у випадку помилки додає інформацію про активне модальне вікно.
 */
export async function expectVisibleWithModalCheck(page: Page, locator: Locator, timeout = 5000) {
  try {
    await expect(locator).toBeVisible({ timeout });
  } catch (error) {
    // Перевіряємо наявність модального вікна для діагностики
    const modalContext = await page.evaluate(() => {
      // @ts-ignore
      const service = window.modalService;
      return service ? service.getCurrentModalContext() : null;
    });

    if (modalContext && modalContext.dataTestId) {
      const enhancedError = new Error(
        `Original expect(locator).toBeVisible() failed. Error: ${error.message}\n` +
        `[DIAGNOSTIC INFO] An unexpected modal with data-testid '${modalContext.dataTestId}' was visible at the time of failure.`
      );
      enhancedError.stack = error.stack;
      throw enhancedError;
    } else {
      throw error;
    }
  }
}

// Робить хід гравця
export async function makeMove(page: Page, direction: string, distance: number, expectComputerMove = true) {
  // Клікаємо на кнопку напрямку
  await page.getByTestId(`dir-btn-${direction}`).click();
  // Клікаємо на кнопку дистанції
  await page.getByTestId(`dist-btn-${distance}`).click();

  // НАВІЩО: Додаємо явне очікування, що кнопка стала активною (не має класу 'disabled').
  // Це робить тест більш надійним і переносить точку відмови ближче до реальної причини проблеми.
  await expect(page.getByTestId('confirm-move-btn')).not.toHaveClass(/disabled/);

  // Клікаємо на кнопку підтвердження ходу
  await page.getByTestId('confirm-move-btn').click();

  // Якщо очікується хід комп'ютера, перевіряємо його видимість
  // ВАЖЛИВО: Це має відбуватися одразу після підтвердження ходу гравця, 
  // до того як будуть вибрані нові напрямок/дистанція для наступного ходу.
  if (expectComputerMove) {
    const computerMoveBtn = page.getByTestId('center-info-btn');
    await expectVisibleWithModalCheck(page, computerMoveBtn);
    await expect(computerMoveBtn).toHaveClass(/computer-move-display/);
  }
}

/**
 * Очищує Firestore в емуляторі
 */
export async function clearFirestore() {
  const projectId = 'mindstep-dev';
  const url = `http://127.0.0.1:8080/emulator/v1/projects/${projectId}/databases/(default)/documents`;
  
  // ПЕРЕВІРКА: Чи доступний емулятор взагалі?
  try {
    const ping = await fetch('http://127.0.0.1:8080/', { method: 'GET' });
    if (!ping.ok && ping.status !== 404) throw new Error('Not reachable');
  } catch (e) {
    throw new Error('❌ FIREBASE EMULATOR IS NOT RUNNING! Please start it with: npx firebase emulators:start');
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 секунд ліміт

  try {
    const response = await fetch(url, { 
      method: 'DELETE',
      signal: controller.signal 
    });
    clearTimeout(timeoutId);
    if (response.ok) {
      console.log('✅ Firestore Emulator data cleared');
      // ПАУЗА: Даємо емулятору 5 секунд на внутрішнє оновлення стану
      await new Promise(resolve => setTimeout(resolve, 5000));
    } else {
      console.error('❌ Failed to clear Firestore Emulator data:', response.statusText);
    }
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('❌ Error clearing Firestore Emulator (timeout or connection error):', error.message);
  }
}

/**
 * Очищує локальне сховище браузера
 */
export async function clearBrowserStorage(page: Page) {
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

/**
 * Створює онлайн кімнату. Повертає назву створеної кімнати.
 * Використовує toPass для стабільності з'єднання з Firebase емулятором.
 */
export async function createOnlineRoom(page: Page, playerName: string = 'HostMaster'): Promise<string> {
  await expect(async () => {
    await page.goto('/online');
    await clearBrowserStorage(page);
    await page.reload();
    
    await expect(page.locator('[data-testid="create-room-btn"]')).toBeVisible({ timeout: 15000 });
    
    await page.click('[data-testid="player-name-input-edit-btn"]');
    await page.fill('[data-testid="player-name-input-input"]', playerName);
    await page.click('[data-testid="player-name-input-save-btn"]');
    
    await page.click('[data-testid="create-room-btn"]');
    
    const randomHash = Math.random().toString(36).substring(2, 8);
    const generatedRoomName = `Room_${randomHash}_${Date.now()}`;
    
    await page.click('[data-testid="room-name-input-edit-btn"]');
    await page.fill('[data-testid="room-name-input-input"]', generatedRoomName);
    await page.click('[data-testid="room-name-input-save-btn"]');
    
    await page.click('[data-testid="create-room-confirm-btn"]');
    await expect(page.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
  }).toPass({ 
    timeout: 60000, 
    intervals: [2000, 5000] 
  });
  
  const roomNameDisplay = page.locator('[data-testid="room-name-editable-display"]');
  await expect(roomNameDisplay).toBeVisible({ timeout: 15000 });
  return (await roomNameDisplay.textContent()) || '';
}

/**
 * Приєднується до існуючої онлайн кімнати за її назвою.
 * Використовує toPass для стабільності.
 */
export async function joinOnlineRoom(page: Page, roomName: string, playerName: string = 'GuestChallenger'): Promise<void> {
  await expect(async () => {
    await page.goto('/online');
    await expect(page.locator('[data-testid="refresh-rooms-btn"]')).toBeVisible({ timeout: 15000 });

    await page.click('[data-testid="player-name-input-edit-btn"]');
    await page.fill('[data-testid="player-name-input-input"]', playerName);
    await page.click('[data-testid="player-name-input-save-btn"]');

    await page.click('[data-testid="refresh-rooms-btn"]');
    const roomCard = page.locator('div.room-card', { hasText: roomName }).first();
    await expect(roomCard).toBeVisible({ timeout: 5000 });
    
    await roomCard.locator('[data-testid^="join-room-btn-"]').click();
    await expect(page.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
  }).toPass({
    timeout: 60000,
    intervals: [2000, 5000]
  });
}

