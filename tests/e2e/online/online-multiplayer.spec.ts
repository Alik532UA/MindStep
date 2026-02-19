import { test, expect } from '@playwright/test';

test.describe('Онлайн мультиплеєр', () => {
  
  test('Створення кімнати та приєднання другого гравця', async ({ browser }) => {
    // 1. Створюємо контексти для двох гравців
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const p1 = await context1.newPage();
    const p2 = await context2.newPage();

    // --- ГРАВЕЦЬ 1: Створення кімнати ---
    await test.step('Гравець 1 створює кімнату', async () => {
        await p1.goto('/online');
        
        // Вводимо ім'я гравця (через EditableText)
        await p1.click('[data-testid="player-name-input-edit-btn"]');
        await p1.fill('[data-testid="player-name-input-input"]', 'HostMaster');
        await p1.click('[data-testid="player-name-input-save-btn"]');
        
        // Відкриваем модалку створення
        await p1.click('[data-testid="create-room-btn"]');
        
        // Вводимо назву кімнати (також EditableText)
        await p1.click('[data-testid="room-name-input-edit-btn"]');
        await p1.fill('[data-testid="room-name-input-input"]', 'TestRoom_Auto');
        await p1.click('[data-testid="room-name-input-save-btn"]');
        
        // Створюємо
        await p1.click('[data-testid="create-room-confirm-btn"]');
        
        // Чекаємо переходу в лобі
        await expect(p1.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
        await expect(p1).toHaveURL(/\/online\/lobby\//);
    });

    // --- ГРАВЕЦЬ 2: Приєднання ---
    await test.step('Гравець 2 приєднується до кімнати', async () => {
        await p2.goto('/online');

        // Вводимо ім'я другого гравця
        await p2.click('[data-testid="player-name-input-edit-btn"]');
        await p2.fill('[data-testid="player-name-input-input"]', 'GuestChallenger');
        await p2.click('[data-testid="player-name-input-save-btn"]');

        // Оновлюємо список кімнат
        await p2.click('[data-testid="refresh-rooms-btn"]');
        
        // Шукаємо картку кімнати за назвою
        const roomCard = p2.locator('div.room-card', { hasText: 'TestRoom_Auto' });
        await expect(roomCard).toBeVisible({ timeout: 10000 });
        
        // Натискаємо кнопку приєднатися всередині цієї картки
        const joinBtn = roomCard.locator('[data-testid^="join-room-btn-"]');
        await joinBtn.click();

        // Чекаємо переходу в лобі
        await expect(p2.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
    });

    // --- ПЕРЕВІРКА: Синхронізація ---
    await test.step('Перевірка, що гравці бачать один одного', async () => {
        // Гравець 1 бачить Гравця 2
        await expect(p1.locator('[data-testid="players-list"]')).toContainText('GuestChallenger', { timeout: 10000 });
        
        // Гравець 2 бачить Гравця 1
        await expect(p2.locator('[data-testid="players-list"]')).toContainText('HostMaster', { timeout: 10000 });
    });

    await context1.close();
    await context2.close();
  });
});
