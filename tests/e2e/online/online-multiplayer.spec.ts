import { test, expect } from '@playwright/test';
import { clearFirestore, clearBrowserStorage } from '../../utils';

/**
 * ⚠️ ВАЖЛИВО: СТАБІЛІЗАЦІЯ ОНЛАЙН-РЕЖИМУ
 * Доки тест OM-1 не стане на 100% стабільним, нові автотести для онлайну не розробляються.
 * 
 * ТАКТИКА ПЕРЕВІРКИ:
 * 1. Після будь-яких змін запускаємо OM-1 один раз.
 * 2. Якщо успішно -> запускаємо 3 рази поспіль.
 * 3. Якщо успішно -> запускаємо 11 разів поспіль.
 * 4. Якщо успішно -> запускаємо 33 рази поспіль.
 * 
 * Якщо всі 33 запуски пройшли успішно, основа вважається стабільною.
 */

test.describe('Онлайн мультиплеєр', { tag: '@OM' }, () => {
  /**
   * ⚠️ УВАГА: Онлайн-тести мають запускатися строго з --workers=1
   * через використання спільного Firestore емулятора.
   */
  test.describe.configure({ mode: 'serial' });
  
  test.beforeEach(async ({}, testInfo) => {
    // Встановлюємо таймаут 120 секунд для всього тесту (враховуючи retry логіку toPass)
    testInfo.setTimeout(120000);
    
    // Очищення бази та перевірка доступності емулятора
    await clearFirestore();
  });

  test('Створення кімнати та приєднання другого гравця', { tag: ['@done', '@OM-1'] }, async ({ browser }, testInfo) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const p1 = await context1.newPage();
    const p2 = await context2.newPage();

    // Логування консолі для відстеження стану Firebase
    p1.on('console', msg => console.log(`[P1] [${msg.type()}] ${msg.text()}`));

    // --- ГРАВЕЦЬ 1: Створення кімнати ---
    await test.step('Гравець 1 створює кімнату', async () => {
        // Використовуємо toPass для всього процесу. Якщо Firebase зависне,
        // перезавантаження сторінки (p1.goto) скине з'єднання.
        await expect(async () => {
            await p1.goto('/online');
            await clearBrowserStorage(p1);
            await p1.reload();
            
            await expect(p1.locator('[data-testid="create-room-btn"]')).toBeVisible({ timeout: 15000 });
            
            await p1.click('[data-testid="player-name-input-edit-btn"]');
            await p1.fill('[data-testid="player-name-input-input"]', 'HostMaster');
            await p1.click('[data-testid="player-name-input-save-btn"]');
            
            await p1.click('[data-testid="create-room-btn"]');
            
            const randomHash = Math.random().toString(36).substring(2, 8);
            const roomName = `Room_${randomHash}_${Date.now()}`;
            
            await p1.click('[data-testid="room-name-input-edit-btn"]');
            await p1.fill('[data-testid="room-name-input-input"]', roomName);
            await p1.click('[data-testid="room-name-input-save-btn"]');
            
            await p1.click('[data-testid="create-room-confirm-btn"]');
            await expect(p1.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
        }).toPass({ 
          timeout: 60000, 
          intervals: [2000, 5000] 
        });
    });

    // --- ГРАВЕЦЬ 2: Приєднання ---
    await test.step('Гравець 2 приєднується до кімнати', async () => {
        const roomNameDisplay = p1.locator('[data-testid="room-name-editable-display"]');
        await expect(roomNameDisplay).toBeVisible({ timeout: 30000 });
        const roomName = await roomNameDisplay.textContent();
        
        await expect(async () => {
            await p2.goto('/online');
            await expect(p2.locator('[data-testid="refresh-rooms-btn"]')).toBeVisible({ timeout: 15000 });

            await p2.click('[data-testid="player-name-input-edit-btn"]');
            await p2.fill('[data-testid="player-name-input-input"]', 'GuestChallenger');
            await p2.click('[data-testid="player-name-input-save-btn"]');

            await p2.click('[data-testid="refresh-rooms-btn"]');
            const roomCard = p2.locator('div.room-card', { hasText: roomName! }).first();
            await expect(roomCard).toBeVisible({ timeout: 5000 });
            
            await roomCard.locator('[data-testid^="join-room-btn-"]').click();
            await expect(p2.locator('[data-testid="lobby-container"]')).toBeVisible({ timeout: 15000 });
        }).toPass({
          timeout: 60000,
          intervals: [2000, 5000]
        });
    });

    // --- ПЕРЕВІРКА: Синхронізація ---
    await test.step('Перевірка, що гравці бачать один одного', async () => {
        await expect(p1.locator('[data-testid="players-list"]')).toContainText('GuestChallenger', { timeout: 15000 });
        await expect(p2.locator('[data-testid="players-list"]')).toContainText('HostMaster', { timeout: 15000 });
    });

    await context1.close();
    await context2.close();
  });
});
