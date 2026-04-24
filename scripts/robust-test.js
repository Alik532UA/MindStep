
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const TEMP_REPORT = 'test-results-robust.json';
const POINTS_TO_WIN = 3; // Хто перший набере 3 бали (успіх чи провал), той і переміг

/**
 * Запускає Playwright і повертає JSON результат
 */
function runPlaywrightJson(args) {
    const result = spawnSync('npx', ['playwright', 'test', ...args, '--reporter=json'], { 
        shell: true,
        encoding: 'utf-8'
    });
    
    try {
        return JSON.parse(result.stdout);
    } catch (e) {
        console.error('Помилка парсингу JSON репорту:', e.message);
        return null;
    }
}

/**
 * Основна функція
 */
async function main() {
    const userArgs = process.argv.slice(2);
    console.log('\x1b[35m=== ЗАПУСК ТЕСТІВ (ПЕРШИЙ ПРОГІН) ===\x1b[0m');
    
    const firstRun = spawnSync('npx', [
        'playwright', 'test', 
        ...userArgs,
        '--reporter=line,json',
    ], { 
        shell: true,
        env: { ...process.env, PLAYWRIGHT_JSON_OUTPUT_NAME: TEMP_REPORT }
    });

    if (!fs.existsSync(TEMP_REPORT)) {
        if (firstRun.status !== 0) {
            console.error('\x1b[31mПомилка: Playwright не зміг згенерувати звіт. Перевірте конфігурацію.\x1b[0m');
            process.exit(1);
        }
        console.log('\x1b[32mУсі тести пройшли успішно!\x1b[0m');
        process.exit(0);
    }

    const report = JSON.parse(fs.readFileSync(TEMP_REPORT, 'utf-8'));
    const failedTests = [];

    // Збираємо впавші тести
    for (const suite of report.suites) {
        findFailedTests(suite, failedTests);
    }

    if (failedTests.length === 0) {
        console.log('\x1b[32mУсі тести пройшли успішно!\x1b[0m');
        cleanup();
        process.exit(0);
    }

    console.log(`\x1b[33mВиявлено ${failedTests.length} впавших тестів. Перевірка на стабільність ("Перший до ${POINTS_TO_WIN}")...\x1b[0m`);

    const finalResults = [];

    for (const test of failedTests) {
        // Перевірка на помилку Firebase
        if (test.error && test.error.includes('FIREBASE EMULATOR IS NOT RUNNING')) {
            console.log(`\x1b[31m[-] Тест "${test.title}" впав через відсутність емулятора Firebase. Перезапуск неможливий.\x1b[0m`);
            finalResults.push({ ...test, status: 'FAILED (FIREBASE)', passedCount: 0, failedCount: 1 });
            continue;
        }

        console.log(`\x1b[34m[*] Стабілізація: ${test.title}\x1b[0m`);
        let passedCount = 0;
        let failedCount = 0;
        let attempt = 1;

        // Цикл триває, поки хтось не набере POINTS_TO_WIN балів
        while (passedCount < POINTS_TO_WIN && failedCount < POINTS_TO_WIN) {
            const retryResult = spawnSync('npx', [
                'playwright', 'test', 
                test.file, 
                '-g', `^${escapeRegExp(test.title)}$`,
                '--reporter=line'
            ], { shell: true });

            if (retryResult.status === 0) {
                passedCount++;
                console.log(`  Спроба ${attempt}: \x1b[32mУСПІХ\x1b[0m (рахунок ${passedCount}:${failedCount})`);
            } else {
                failedCount++;
                console.log(`  Спроба ${attempt}: \x1b[31mПАДІННЯ\x1b[0m (рахунок ${passedCount}:${failedCount})`);
            }
            attempt++;
        }

        const isSuccess = passedCount >= POINTS_TO_WIN;
        const status = isSuccess ? 'PASSED (FLAKY)' : 'FAILED';
        const color = isSuccess ? '\x1b[32m' : '\x1b[31m';

        console.log(`${color}[${status}] ${test.title} (Фінальний рахунок ${passedCount}:${failedCount})\x1b[0m\n`);
        finalResults.push({ ...test, status, passedCount, failedCount });
    }

    // Підсумкова таблиця
    console.log('\x1b[35m=== ПІДСУМКОВИЙ ЗВІТ ===\x1b[0m');
    let overallSuccess = true;
    finalResults.forEach(res => {
        const color = res.status.includes('PASSED') ? '\x1b[32m' : '\x1b[31m';
        console.log(`${color}${res.status.padEnd(18)}\x1b[0m | ${res.passedCount}:${res.failedCount} | ${res.title}`);
        if (!res.status.includes('PASSED')) overallSuccess = false;
    });

    cleanup();
    process.exit(overallSuccess ? 0 : 1);
}

/**
 * Рекурсивний пошук впавших тестів у JSON репорті
 */
function findFailedTests(suite, failedTests, currentFile = '') {
    const file = suite.file || currentFile;
    
    if (suite.specs) {
        for (const spec of suite.specs) {
            for (const test of spec.tests) {
                if (test.status === 'unexpected' || (test.results && test.results.some(r => r.status === 'failed'))) {
                    const lastResult = test.results[test.results.length - 1];
                    failedTests.push({
                        title: spec.title,
                        file: file,
                        error: lastResult?.error?.message || ''
                    });
                }
            }
        }
    }

    if (suite.suites) {
        for (const subSuite of suite.suites) {
            findFailedTests(subSuite, failedTests, file);
        }
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function cleanup() {
    if (fs.existsSync(TEMP_REPORT)) {
        fs.unlinkSync(TEMP_REPORT);
    }
}

main();
