import { test, expect } from '@playwright/test';

test.describe('Модальне вікно вибору режиму гри', { tag: '@GMM' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Go to the page first to have the window object

    // НАВІЩО: Вимикаємо блокуючі UI-елементи.
    await page.evaluate(() => {
      (window as any).__playwright_test__ = true;
      (window as any).updateNoticeDisabled = true;
    });

    // Wait for the reset function to be attached to the window object by Svelte
    await page.waitForFunction(() => (window as any).resetAllStores, null, { timeout: 10000 });

    // 1. Reset the state before EVERY test to ensure isolation
    await page.evaluate(() => (window as any).resetAllStores());

    // 2. Set up the specific state for THIS test
    // Вмикаємо тестовий режим програмно
    await page.evaluate(() => {
      const appSettingsState = (window as any).appSettingsState;
      if (appSettingsState) {
        appSettingsState.updateSettings({ testMode: true });
      }
    });

    // 3. Perform test actions
    await page.getByTestId('center-play-btn').click();
    await expect(page.getByTestId('game-mode-modal-panel')).toBeVisible();
  });

  test('1. Повинно показувати FAQ для режиму "новачок"', { tag: ['@done', '@GMM-1'] }, async ({ page }) => {
    await test.step('Вибір режиму "новачок" та перевірка FAQ', async () => {
      await page.getByTestId('beginner-mode-btn').click();
      await expect(page.getByTestId('faq-modal')).toBeVisible();
      await expect(page.getByTestId('faq-modal-title')).toHaveAttribute('data-i18n-key', 'faq.title');
      await page.getByTestId('faq-modal-ok-btn').click();
      await page.waitForURL(/\/game\/virtual-player/);
      await page.waitForTimeout(100);
      await expect(page.locator('.direction-controls-panel')).toBeVisible();
    });
  });

  test('2. Не повинно показувати FAQ для режиму "досвідчений"', { tag: ['@done', '@GMM', '@GMM-2'] }, async ({ page }) => {
    await test.step('Вибір режиму "досвідчений" та перевірка відсутності FAQ', async () => {
      await page.getByTestId('experienced-mode-btn').click();
      await expect(page.getByTestId('game-mode-modal')).not.toBeVisible();
      await page.waitForURL(/\/game\/virtual-player/, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(100);
      await expect(page.locator('.direction-controls-panel')).toBeVisible();
    });
  });

  test('3. Не повинно показувати FAQ для режиму "профі"', { tag: ['@done', '@GMM', '@GMM-3'] }, async ({ page }) => {
    await test.step('Вибір режиму "профі" та перевірка відсутності FAQ', async () => {
      await page.getByTestId('pro-mode-btn').click();
      await expect(page.getByTestId('game-mode-modal')).not.toBeVisible();
      await page.waitForURL(/\/game\/virtual-player/, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(100);
      await expect(page.locator('.direction-controls-panel')).toBeVisible();
    });
  });
});
