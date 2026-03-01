import { test, expect } from '@playwright/test';
import { clearFirestore, createOnlineRoom, joinOnlineRoom } from '../../utils';

test.describe('Онлайн мультиплеєр: Вихід за межі (OOB)', { tag: '@OM' }, () => {
  
  test.beforeEach(async () => {
    await clearFirestore();
  });

  test('OM-2: Поразка Хоста (вихід за межі)', { tag: ['@done', '@OM-2'] }, async ({ browser }) => {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const p1 = await context1.newPage();
    const p2 = await context2.newPage();

    p1.on('console', msg => console.log(`P1 [${msg.type()}] ${msg.text()}`));
    p1.on('dialog', dialog => {
        console.log(`P1 DIALOG: ${dialog.message()}`);
        dialog.dismiss();
    });

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
        // Увімкнення тестового режиму (щоб прибрати зайві анімації/туторіали)
        await p1.click('[data-testid="menu-button-test-mode-btn"]');
        await p2.click('[data-testid="menu-button-test-mode-btn"]');

        // І хост, і гість тиснуть "Готовий"
        // Використовуємо toPass, бо Firebase може затримати статус
        await expect(async () => {
            if (await p1.locator('[data-testid="toggle-ready-btn"]').textContent() !== 'Не готовий') {
                await p1.click('[data-testid="toggle-ready-btn"]');
            }
            if (await p2.locator('[data-testid="toggle-ready-btn"]').textContent() !== 'Не готовий') {
                await p2.click('[data-testid="toggle-ready-btn"]');
            }
            // Хост чекає, поки кнопка "Почати гру" стане активною
            await expect(p1.locator('[data-testid="start-game-btn"]')).toBeEnabled({ timeout: 5000 });
        }).toPass({ timeout: 15000, intervals: [1000] });
        
        await p1.click('[data-testid="start-game-btn"]');
        
        // Чекаємо появи дошки в обох
        await expect(p1.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
        await expect(p2.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
    });

    await test.step('Хост робить хід за межі дошки', async () => {
        // Хост вибирає "Вгору" (це хід за межі з (0,0))
        await p1.click('[data-testid="dir-btn-up"]');
        // Вибирає дистанцію 1
        await p1.click('[data-testid="dist-btn-1"]');
        // Підтверджує
        await p1.click('[data-testid="confirm-move-btn"]');
    });

    await test.step('Перевірка результатів', async () => {
        // Обидва мають бачити модалку завершення
        await expect(p1.locator('[data-testid="game-over-content"]')).toBeVisible({ timeout: 10000 });
        await expect(p2.locator('[data-testid="game-over-content"]')).toBeVisible({ timeout: 10000 });

        // Перевірка статусів
        // У Хоста має бути текст поразки
        const p1Result = await p1.locator('[data-testid="game-over-modal-title"]').textContent();
        // В залежності від перекладу, але ми можемо шукати за структурою або класом
        await expect(p1.locator('.player-score-row.loser')).toContainText('Host_OOB');
        
        // У Гостя має бути текст перемоги
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

    let roomName = '';

    await test.step('Створення та вхід', async () => {
        roomName = await createOnlineRoom(p1, 'Host_Winner');
        await joinOnlineRoom(p2, roomName, 'Guest_OOB');
    });

    await test.step('Початок гри', async () => {
        // Увімкнення тестового режиму
        await p1.click('[data-testid="menu-button-test-mode-btn"]');
        await p2.click('[data-testid="menu-button-test-mode-btn"]');

        // І хост, і гість тиснуть "Готовий"
        // Використовуємо toPass, бо Firebase може затримати статус
        await expect(async () => {
            if (await p1.locator('[data-testid="toggle-ready-btn"]').textContent() !== 'Не готовий') {
                await p1.click('[data-testid="toggle-ready-btn"]');
            }
            if (await p2.locator('[data-testid="toggle-ready-btn"]').textContent() !== 'Не готовий') {
                await p2.click('[data-testid="toggle-ready-btn"]');
            }
            // Хост чекає, поки кнопка "Почати гру" стане активною
            await expect(p1.locator('[data-testid="start-game-btn"]')).toBeEnabled({ timeout: 5000 });
        }).toPass({ timeout: 15000, intervals: [1000] });

        await p1.click('[data-testid="start-game-btn"]');

        await expect(p1.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
        await expect(p2.locator('[data-testid="game-board"]')).toBeVisible({ timeout: 15000 });
    });

    await test.step('Хост робить валідний хід', async () => {
        await p1.click('[data-testid="dir-btn-right"]');
        await p1.click('[data-testid="dist-btn-1"]');
        await p1.click('[data-testid="confirm-move-btn"]');
        // Чекаємо, поки хід синхронізується (наприклад, по індикатору черги)
        await expect(p2.locator('[data-testid="direction-controls-widget"]')).toBeVisible();
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
