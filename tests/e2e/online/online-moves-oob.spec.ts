import { test, expect } from '@playwright/test';
import { clearFirestore, createOnlineRoom, joinOnlineRoom, setupTestEnvironment } from '../../utils';

test.describe('Онлайн мультиплеєр: Вихід за межі (OOB)', { tag: '@OM' }, () => {
  
  test.beforeEach(async ({ page }) => {
    await clearFirestore();
  });

  test('OM-2: Поразка Хоста (вихід за межі)', { tag: ['@done', '@OM-2'] }, async ({ browser }) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const p1 = await context1.newPage();
    const p2 = await context2.newPage();

    await setupTestEnvironment(p1);
    await setupTestEnvironment(p2);

    let roomName = '';

    // --- ПІДГОТОВКА: Створення та приєднання ---
    await test.step('Гравець 1 створює кімнату', async () => {
        roomName = await createOnlineRoom(p1, 'Host_OOB');
    });

    await test.step('Гравець 2 приєднується', async () => {
        await joinOnlineRoom(p2, roomName, 'Guest_Survivor');
    });

    // --- ГРА ---
    await test.step('Початок гри', async () => {
        // Увімкнення тестового режиму
        await p1.click('[data-testid="menu-button-test-mode-btn"]');
        await p2.click('[data-testid="menu-button-test-mode-btn"]');

        // І хост, і гість тиснуть "Готовий"
        await expect(async () => {
            const p1ReadyText = await p1.locator('[data-testid="toggle-ready-btn"]').textContent();
            if (!p1ReadyText?.includes('Не готовий')) {
                await p1.click('[data-testid="toggle-ready-btn"]');
            }
            const p2ReadyText = await p2.locator('[data-testid="toggle-ready-btn"]').textContent();
            if (!p2ReadyText?.includes('Не готовий')) {
                await p2.click('[data-testid="toggle-ready-btn"]');
            }
            
            // Чекаємо, поки лобі підтвердить готовність всіх гравців через атрибут
            await expect(p1.locator('[data-testid="lobby-container"]')).toHaveAttribute('data-all-ready', 'true', { timeout: 5000 });
        }).toPass({ timeout: 15000, intervals: [1000] });
        
        await p1.click('[data-testid="start-game-btn"]');
        
        // Чекаємо появи дошки в обох
        await expect(p1.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
        await expect(p2.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
    });

    await test.step('Хост робить хід за межі дошки', async () => {
        await p1.click('[data-testid="dir-btn-up"]');
        await p1.click('[data-testid="dist-btn-1"]');
        await p1.click('[data-testid="confirm-move-btn"]');
    });

    await test.step('Перевірка результатів', async () => {
        await expect(p1.locator('[data-testid="game-over-content"]'), 'Хост має бачити вікно завершення гри').toBeVisible({ timeout: 10000 });
        await expect(p2.locator('[data-testid="game-over-content"]'), 'Гість має бачити вікно завершення гри').toBeVisible({ timeout: 10000 });

        await expect(p1.locator('.player-score-row.loser')).toContainText('Host_OOB');
        await expect(p2.locator('.player-score-row.winner')).toContainText('Guest_Survivor');
    });

    await context1.close();
    await context2.close();
  });

  test('OM-3: Поразка Гостя (вихід за межі)', { tag: ['@done', '@OM-3'] }, async ({ browser }) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const p1 = await context1.newPage();
    const p2 = await context2.newPage();

    await setupTestEnvironment(p1);
    await setupTestEnvironment(p2);

    let roomName = '';

    await test.step('Створення та вхід', async () => {
        roomName = await createOnlineRoom(p1, 'Host_Winner');
        await joinOnlineRoom(p2, roomName, 'Guest_OOB');
    });

    await test.step('Початок гри', async () => {
        await p1.click('[data-testid="menu-button-test-mode-btn"]');
        await p2.click('[data-testid="menu-button-test-mode-btn"]');

        await expect(async () => {
            const p1ReadyText = await p1.locator('[data-testid="toggle-ready-btn"]').textContent();
            if (!p1ReadyText?.includes('Не готовий')) {
                await p1.click('[data-testid="toggle-ready-btn"]');
            }
            const p2ReadyText = await p2.locator('[data-testid="toggle-ready-btn"]').textContent();
            if (!p2ReadyText?.includes('Не готовий')) {
                await p2.click('[data-testid="toggle-ready-btn"]');
            }
            await expect(p1.locator('[data-testid="lobby-container"]')).toHaveAttribute('data-all-ready', 'true', { timeout: 5000 });
        }).toPass({ timeout: 15000, intervals: [1000] });
        
        await p1.click('[data-testid="start-game-btn"]');

        await expect(p1.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
        await expect(p2.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
    });

    await test.step('Хост робить валідний хід', async () => {
        await p1.click('[data-testid="dir-btn-right"]');
        await p1.click('[data-testid="dist-btn-1"]');
        await p1.click('[data-testid="confirm-move-btn"]');
        await expect(p2.locator('[data-testid="direction-controls-widget"]')).toBeVisible({ timeout: 10000 });
    });

    await test.step('Гість робить хід за межі', async () => {
        await p2.click('[data-testid="dir-btn-up"]');
        await p2.click('[data-testid="dist-btn-1"]');
        await p2.click('[data-testid="confirm-move-btn"]');
    });

    await test.step('Перевірка результатів', async () => {
        await expect(p1.locator('[data-testid="game-over-content"]')).toBeVisible({ timeout: 10000 });
        await expect(p2.locator('[data-testid="game-over-content"]')).toBeVisible({ timeout: 10000 });

        await expect(p1.locator('.player-score-row.winner')).toContainText('Host_Winner');
        await expect(p2.locator('.player-score-row.loser')).toContainText('Guest_OOB');
    });

    await context1.close();
    await context2.close();
  });
});
