
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const TEMP_REPORT = 'test-results-robust.json';
const POINTS_TO_WIN = 3; 
const INDIVIDUAL_TEST_TIMEOUT = 45000; 

/**
 * Основна функція
 */
async function main() {
    // Відфільтровуємо --reporter, щоб не було дублів
    const userArgs = process.argv.slice(2).filter(arg => !arg.startsWith('--reporter'));
    
    console.log('\x1b[35m=== ЗАПУСК ТЕСТІВ (ПЕРШИЙ ПРОГІН) ===\x1b[0m');
    
    const startTime = Date.now();
    const firstRun = spawnSync('npx', [
        'playwright', 'test', 
        ...userArgs,
        '--reporter=line,json',
    ], { 
        shell: true,
        env: { ...process.env, PLAYWRIGHT_JSON_OUTPUT_NAME: TEMP_REPORT }
    });

    if (!fs.existsSync(TEMP_REPORT)) {
        console.error('\x1b[31mПомилка: Playwright не зміг згенерувати звіт. Можливо, є помилка в коді тестів.\x1b[0m');
        if (firstRun.stdout || firstRun.stderr) {
            console.log('\x1b[90m' + (firstRun.stdout || firstRun.stderr).toString() + '\x1b[0m');
        }
        process.exit(1);
    }

    const report = JSON.parse(fs.readFileSync(TEMP_REPORT, 'utf-8'));
    
    // Перевірка на глобальні помилки (наприклад, SyntaxError)
    if (report.errors && report.errors.length > 0) {
        console.error('\x1b[31mКритична помилка під час завантаження тестів:\x1b[0m');
        report.errors.forEach(err => console.log(`  - ${err.message}`));
        cleanup();
        process.exit(1);
    }

    const failedTests = [];
    for (const suite of report.suites) {
        findFailedTests(suite, failedTests);
    }

    // Перевірка на відсутність встановлених браузерів Playwright
    const missingBrowserTest = failedTests.find(t => t.error && (t.error.includes("Executable doesn't exist") || t.error.includes("playwright install")));
    if (missingBrowserTest) {
        console.error('\n\x1b[31m[!] КРИТИЧНА ПОМИЛКА: Playwright браузери не встановлені.\x1b[0m');
        console.log('\x1b[33mБудь ласка, виконайте команду:\x1b[0m');
        console.log('\x1b[36m    npx playwright install\x1b[0m\n');
        cleanup();
        process.exit(1);
    }

    if (failedTests.length === 0) {
        const duration = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`\x1b[32mУсі тести пройшли успішно за ${duration}с!\x1b[0m`);
        cleanup();
        process.exit(0);
    }

    console.log(`\x1b[33mВиявлено ${failedTests.length} впавших тестів. Перевірка на стабільність ("Перший до ${POINTS_TO_WIN}")...\x1b[0m`);

    const finalResults = [];

    for (const test of failedTests) {
        console.log(`\n\x1b[31m[!] Початкова помилка у "${test.title}":\x1b[0m`);
        console.log(`    ${test.error.split('\n')[0]}`);

        if (test.error && test.error.includes('FIREBASE EMULATOR IS NOT RUNNING')) {
            console.log(`\x1b[31m[-] Перезапуск неможливий: Firebase Emulator вимкнений.\x1b[0m`);
            finalResults.push({ ...test, status: 'FAILED (FIREBASE)', passedCount: 0, failedCount: 1 });
            continue;
        }

        console.log(`\x1b[34m[*] Стабілізація: ${test.title}\x1b[0m`);
        let passedCount = 0;
        let failedCount = 0;
        let attempt = 1;

        while (passedCount < POINTS_TO_WIN && failedCount < POINTS_TO_WIN) {
            const attemptStart = Date.now();
            
            const retryResult = spawnSync('npx', [
                'playwright', 'test', 
                test.file, 
                '-g', `^${escapeRegExp(test.title)}$`,
                '--reporter=line'
            ], { 
                shell: true,
                encoding: 'utf-8',
                timeout: INDIVIDUAL_TEST_TIMEOUT
            });

            const duration = ((Date.now() - attemptStart) / 1000).toFixed(1);

            if (retryResult.error && retryResult.error.code === 'ETIMEDOUT') {
                failedCount++;
                console.log(`  Спроба ${attempt}: \x1b[31mТАЙМАУТ\x1b[0m (${duration}с, рахунок ${passedCount}:${failedCount})`);
            } else if (retryResult.status === 0) {
                passedCount++;
                console.log(`  Спроба ${attempt}: \x1b[32mУСПІХ\x1b[0m (${duration}с, рахунок ${passedCount}:${failedCount})`);
            } else {
                failedCount++;
                console.log(`  Спроба ${attempt}: \x1b[31mПАДІННЯ\x1b[0m (${duration}с, рахунок ${passedCount}:${failedCount})`);
                const output = retryResult.stdout || retryResult.stderr || '';
                
                // --- ІНФОРМАТИВНІСТЬ: Витягуємо причину помилки ---
                const errorMatch = output.match(/Error:([\s\S]*?)\n\n/);
                if (errorMatch) {
                    const cleanError = errorMatch[1].trim().split('\n')[0];
                    console.log(`    \x1b[33m[!] Причина:\x1b[0m \x1b[90m${cleanError}\x1b[0m`);
                }

                // --- ІНФОРМАТИВНІСТЬ: Витягуємо останні логі P1/P2 (якщо вони є в output) ---
                const logs = output.split('\n').filter(line => 
                    line.includes('[ERROR]') || 
                    line.includes('[BROWSER ERROR]') || 
                    line.includes('[BROWSER EXCEPTION]')
                );
                
                if (logs.length > 0) {
                    console.log(`    \x1b[35m[!] Виявлені помилки в консолі браузера:\x1b[0m`);
                    logs.slice(-5).forEach(line => {
                        const cleanLine = line.trim().replace(/^P\d\s\[\w+\]\s/, ''); // Прибираємо префікси Playwright
                        console.log(`      \x1b[91m→ ${cleanLine}\x1b[0m`);
                    });
                }
            }
            attempt++;
        }

        const isSuccess = passedCount >= POINTS_TO_WIN;
        const status = isSuccess ? 'PASSED (FLAKY)' : 'FAILED';
        const color = isSuccess ? '\x1b[32m' : '\x1b[31m';

        console.log(`${color}[${status}] ${test.title} (Фінальний рахунок ${passedCount}:${failedCount})\x1b[0m`);
        finalResults.push({ ...test, status, passedCount, failedCount });
    }

    console.log('\n\x1b[35m=== ПІДСУМКОВИЙ ЗВІТ ===\x1b[0m');
    let overallSuccess = true;
    finalResults.forEach(res => {
        const color = res.status.includes('PASSED') ? '\x1b[32m' : '\x1b[31m';
        console.log(`${color}${res.status.padEnd(18)}\x1b[0m | ${res.passedCount}:${res.failedCount} | ${res.title}`);
        if (!res.status.includes('PASSED')) overallSuccess = false;
    });

    cleanup();
    process.exit(overallSuccess ? 0 : 1);
}

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
                        error: lastResult?.error?.message || lastResult?.error?.stack || 'Unknown error'
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
