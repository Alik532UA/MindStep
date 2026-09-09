// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { FLAG_COUNTRIES } from './lib/config/countries.generated';

/**
 * ПЕРЕЛІК КРАЇН І КАТАЛОГ ПРАПОРІВ — ОДНЕ Й ТЕ САМЕ, У ОБИДВА БОКИ
 * (PROJECT-STRUCTURE-v9 § 2.1 `PS-STATIC-ORPHANS`, AI-AGENT-PITFALLS § 5.5.2).
 *
 * ## Чому це не було перевірено нічим
 *
 * `static/flags/` — більшість усього `static/` за кількістю файлів. Жоден із них
 * не згадується в джерелах по імені: `Flag.svelte` будує адресу виразом
 * `` `${base}/flags/${known}.svg` ``, а `known` приходить із
 * `FLAG_COUNTRIES`. Отже:
 *
 *  * будь-яка перевірка сиріт у `static/`, зроблена гріпом по імені файлу,
 *    оголосила б сиротами їх усі — і її довелося б вимкнути;
 *  * а справжнє розходження переліку з каталогом не бачив НІХТО.
 *
 * Ціна розходження асиметрична, і обидві половини реальні:
 *
 *  * прапор у каталозі без рядка в переліку — файл їде на хостинг і недосяжний
 *    із вибору країни (`countriesByName` перебирає саме перелік);
 *  * рядок у переліку без файлу — `<img>` на неіснуючу адресу: порожня рамка у
 *    списку країн і 404 у консолі, тобто дефект, який видно лише розробнику.
 *
 * ## Чому саме тут, а не в `structure.test.ts`
 *
 * Це не структура проєкту, а цілісність КОПІЇ. Генератора тут немає навмисно
 * (`countries.ts`: набір збирає `npm run sync:flags` у сусідньому
 * `VetCrewGames`, пакета `country-flag-icons` тут у залежностях нема). Тобто
 * оновлення набору — ручна копія двох речей, і рівно такі операції ламаються
 * наполовину. Ця перевірка і є квитанцією на копію.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Прибрати `static/flags/ua.svg` → «у переліку є, файлу немає» червоніє з
 * кодом. Дописати `'zz'` у `countries.generated.ts` → те саме. Прибрати рядок
 * `'ua'` із переліку → «файл є, рядка немає» червоніє.
 */

const FLAGS_DIR = 'static/flags';

const onDisk = readdirSync(FLAGS_DIR)
	.filter((name) => name.endsWith('.svg'))
	.map((name) => name.slice(0, -'.svg'.length));

describe('перевірка жива', () => {
	it('каталог прапорів знайдено й він непорожній', () => {
		expect(
			onDisk.length,
			`у ${FLAGS_DIR} не знайдено жодного .svg — перевірка дивиться не туди`
		).toBeGreaterThan(100);
	});

	it('перелік у коді непорожній', () => {
		expect(
			FLAG_COUNTRIES.length,
			'FLAG_COUNTRIES порожній — імпорт зламався, і порівняння нижче було б порожнім'
		).toBeGreaterThan(100);
	});
});

describe('перелік країн = каталог прапорів (PS-STATIC-ORPHANS)', () => {
	it('кожен рядок переліку має файл на диску', () => {
		const missing = FLAG_COUNTRIES.filter((code) => !onDisk.includes(code));
		expect(
			missing,
			`<img> на неіснуючий прапор дає порожню рамку й 404 у консолі:\n${missing.join(', ')}`
		).toEqual([]);
	});

	it('кожен файл на диску має рядок у переліку', () => {
		const orphans = onDisk.filter((code) => !FLAG_COUNTRIES.includes(code));
		expect(
			orphans,
			'файл їде на хостинг і недосяжний із вибору країни — половина копії з ' +
				`\`VetCrewGames\`:\n${orphans.join(', ')}`
		).toEqual([]);
	});

	it('у переліку немає повторів', () => {
		const seen = new Set<string>();
		const duplicates = FLAG_COUNTRIES.filter((code) => seen.size === seen.add(code).size);
		expect(duplicates, `повтори в переліку:\n${duplicates.join(', ')}`).toEqual([]);
	});

	it('код країни — два малих латинських символи або підкод виду `gb-eng`', () => {
		// ISO 3166-1 alpha-2 плюс підрозділи, які має набір `country-flag-icons`
		// (`gb-eng`, `es-ct`, `bq-bo`). Великі літери зламали б адресу на
		// файловій системі з урахуванням регістру, тобто в CI, а не локально.
		const malformed = FLAG_COUNTRIES.filter((code) => !/^[a-z]{2}(-[a-z]{2,3})?$/.test(code));
		expect(malformed, `код країни не тієї форми:\n${malformed.join(', ')}`).toEqual([]);
	});
});
