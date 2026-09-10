import { expect, test as setup } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * НА ПОРТУ САМЕ ЦЕЙ ПРОЄКТ І САМЕ ЦЯ ЗБІРКА
 * (CI-CD-AND-TOOLS-v9 § 1.11, `CI-E2E-TARGET-IDENTITY`, `GATE-E2E-IDENTITY`).
 *
 * ## Що ламається без цього кроку
 *
 * Playwright перевіряє порт РІВНО ОДИН РАЗ — перед запуском своєї команди
 * (`webServer.url`). Далі команда стартує, і доки dev-сервер компілює модулі,
 * вікно відкрите: сусідній проєкт із тієї самої машини встигає зайняти той
 * самий порт, і весь прогін іде по ЧУЖОМУ застосунку. Виглядає це не як
 * помилка середовища, а як помилка коду — «element(s) not found», «Timed out
 * waiting for locator» — тобто години пошуку дефекту, якого немає.
 *
 * Заміряно 2026-08-27 у сусідньому `VetCrewGames`: на його тестовому порті
 * 5399 піднявся `vite dev` саме цього проєкту. Ані `--strictPort`, ані
 * `reuseExistingServer: false` цього не ловлять — обидва дивляться на порт ДО
 * того, як почалася збірка.
 *
 * Тут ця пастка дорожча за середню: origin спільний із шістьма сусідніми
 * проєктами, а портів у проєкті три (5173 типовий, 5399 для агента, 5373 для
 * тестів), і плутати їх легко.
 *
 * ## Чому маркер, а не «порт відповідає»
 *
 * Відповідь 200 з порту доводить лише те, що там ХТОСЬ є. Тому звіряються дві
 * різні речі, і обидві — з репозиторієм, а не між собою:
 *
 * 1. **Хто це** — `<meta name="application-name">` із документа проти того ж
 *    тега в `src/app.html`. Сусідній проєкт має власне значення, тож підміна
 *    сайту видно з першого запиту.
 * 2. **Яка це збірка** — `/version.json` проти `version` у `package.json`.
 *    Це ловить другий випадок того ж класу: на порті наш проєкт, але піднятий
 *    із іншого робочого дерева (інша гілка, інший чекаут).
 *
 * ## Чому це setup-проєкт, а не звичайний тест
 *
 * Звичайний тест червонів би ОДИН, а решта прогону однаково пішла б по чужому
 * сайту й насипала б хибних падінь. `dependencies: ['identity']` у
 * `playwright.config.ts` зупиняє весь прогін одним зрозумілим повідомленням.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1) — прогнано
 *
 * Тимчасова підміна `content` у `<meta name="application-name">` у `src/app.html`
 * (`MindStep` → `Slovko`) валить саме перший крок із обома значеннями в
 * повідомленні, і жоден інший тест не запускається. Підміна версії в
 * `static/version.json` валить другий крок так само.
 */

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));

/** Той самий тег, що віддає сервер, — але прочитаний із репозиторію. */
const APPLICATION_NAME = /<meta\s+name="application-name"\s+content="([^"]+)"/;

function repoFile(relative: string): string {
	return readFileSync(join(repoRoot, relative), 'utf8');
}

const expectedName = APPLICATION_NAME.exec(repoFile('src/app.html'))?.[1] ?? '';
const expectedVersion = JSON.parse(repoFile('package.json')).version as string;

setup('перевірка жива: репозиторій назвав, що саме шукати', async () => {
	// Без цих двох рядків порожній маркер порівнювався б із порожнім і крок
	// нижче був би зеленим завжди — тобто перевіркою, якої немає
	// (AI-AGENT-PITFALLS-v9 § 1).
	expect(
		expectedName,
		'у src/app.html немає <meta name="application-name"> — звіряти нема з чим',
	).not.toBe('');
	expect(expectedVersion, 'у package.json немає version — звіряти нема з чим').toMatch(
		/^\d+\.\d+\.\d+/,
	);
});

setup('на тестовому порті відповідає саме цей проєкт', async ({ request, baseURL }) => {
	const html = await (await request.get('/')).text();
	const served = APPLICATION_NAME.exec(html)?.[1] ?? '(тега немає)';

	expect(
		served,
		`на ${baseURL} відповідає інший застосунок: «${served}» замість «${expectedName}». ` +
			'Найімовірніше, порт зайняв сусідній проєкт із цієї ж машини — прогін зупинено, ' +
			'бо інакше кожне наступне падіння виглядало б як дефект коду',
	).toBe(expectedName);
});

setup('на порті та сама збірка, що в робочому дереві', async ({ request, baseURL }) => {
	const response = await request.get('/version.json');
	expect(
		response.ok(),
		`${baseURL}/version.json не віддається (${response.status()}) — штамп збірки нічим звірити`,
	).toBe(true);

	const served = ((await response.json()) as { version?: string }).version ?? '(поля немає)';

	expect(
		served,
		`на ${baseURL} піднятий цей проєкт, але з іншого дерева: збірка ${served}, ` +
			`робоче дерево ${expectedVersion}. Якщо версію щойно правили руками — ` +
			'`npm run build` синхронізує static/version.json із package.json',
	).toBe(expectedVersion);
});
