import { test, expect } from '@playwright/test';
import { clearFirestore, createOnlineRoom, joinOnlineRoom } from '../../utils';

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
  
  // Порожній шаблон — те, чим Playwright статично розуміє «фікстури не потрібні».
  // eslint-disable-next-line no-empty-pattern
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

    let roomName = '';

    // --- ГРАВЕЦЬ 1: Створення кімнати ---
    await test.step('Гравець 1 створює кімнату', async () => {
        roomName = await createOnlineRoom(p1, 'HostMaster');
    });

    // --- ГРАВЕЦЬ 2: Приєднання ---
    await test.step('Гравець 2 приєднується до кімнати', async () => {
        await joinOnlineRoom(p2, roomName, 'GuestChallenger');
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

