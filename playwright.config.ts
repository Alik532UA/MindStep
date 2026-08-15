import { defineConfig, devices } from '@playwright/test';

/**
 * Окремий порт саме для тестів, і свій у кожному проєкті.
 *
 * Було `5173` плюс `reuseExistingServer: !process.env.CI`. 5173 — типовий порт
 * Vite, тобто той самий в усіх сімох проєктах. Якщо на ньому вже висить
 * dev-сервер ІНШОГО проєкту, Playwright спокійно бере його й перевіряє чужий
 * застосунок: тест зелений, перевірено не те (AI-AGENT-PITFALLS-v8 § 1).
 */
const TEST_PORT = 5373;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : 4,
  workers: process.env.CI ? 1 : 4,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: `http://localhost:${TEST_PORT}`,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'retain-on-failure',
    /*
     * Headed лише локально. На раннері немає X-сервера, тож headed-запуск
     * падає ще до першого рядка тесту: «Missing X server or $DISPLAY», і
     * Playwright звітує це як `browserType.launch: Target page, context or
     * browser has been closed» — помилка, що не має нічого спільного з тим,
     * що перевіряє тест.
     *
     * Доти `headless: false` шкоди не робив, бо Playwright у CI не запускався
     * взагалі: крок з e2e з'явився у workflow пізніше, а прогони #238 і #239
     * помирали на юніт-тестах раніше, ніж до нього доходили. #240 став першим
     * реальним запуском — і одразу червоним.
     *
     * Локальний headed-режим лишається: він потрібен, щоб дивитись очима.
     */
    headless: !!process.env.CI,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1900, height: 940 },
        // viewport: { width: 1920, height: 1080 },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    // `--strictPort`: зайнятий порт мусить УПАСТИ, а не тихо з'їхати на наступний.
    command: `npm run dev -- --port ${TEST_PORT} --strictPort`,
    url: `http://localhost:${TEST_PORT}`,
    reuseExistingServer: false,
    env: {
      VITE_USE_FIREBASE_EMULATOR: 'true',
    }
  },
});
