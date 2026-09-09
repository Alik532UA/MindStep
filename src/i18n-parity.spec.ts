// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import crh from './lib/i18n/crh';
import en from './lib/i18n/en';
import nl from './lib/i18n/nl';
import uk from './lib/i18n/uk';

/**
 * I18N-v8 § 7.1 (HIGH) — паритет ключів словників, GATE-I18N-PARITY.
 *
 * **Чому цей файл існує, хоч словники типізовані.** `PROJECT-CONTEXT.md` доти
 * казав, що окремої перевірки не треба: словники оголошені
 * `const translations: TranslationSchema`, тож забутий ключ ловить
 * `svelte-check`. Половина цього правдива — ЗАБУТИЙ ключ справді ловиться.
 * Друга половина ні, і це видно з того, як зібрані словники:
 *
 * ```ts
 * const translations: TranslationSchema = { common, mainMenu, … };
 * ```
 *
 * Excess property check TypeScript застосовує лише до **свіжого об'єктного
 * літерала**. `common` тут — імпортована константа, а не літерал у цій позиції,
 * тому зайвий або з опискою ключ УСЕРЕДИНІ `uk/common.ts` компілятор пропускає
 * мовчки: `loadng` поруч із `loading` — валідний код. Так само компілятор
 * нічого не має проти `''`: порожній рядок — це `string`.
 *
 * Тобто типи покривають рівно один із трьох класів, а `GATE-I18N-PARITY` вимагає
 * всі три: відсутні ключі, зайві ключі, порожні рядки. Четверта перевірка —
 * набір підстановок — з канону § 4.1: речення будується параметрами, і
 * `{playerName}`, що загубився в одному перекладі, дає порожнє місце в реченні
 * рівно тією мовою, якою ніхто з розробників не читає.
 *
 * Еталон — `uk`: типова мова проєкту й та, якою пишеться новий текст.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1) — прогнано, усі чотири:
 *   • дописати `foo: 'bar'` у `en/common.ts` → «зайві ключі» червоніє;
 *   • прибрати `save` з `en/common.ts` → «відсутні ключі» червоніє
 *     (і `svelte-check` теж — цей клас покритий двічі, і це нормально);
 *   • зробити будь-яке значення `''` → «порожніх значень немає» червоніє;
 *   • прибрати `{playerName}` з одного рядка `nl` → «підстановки збігаються»
 *     червоніє з назвою ключа й обома наборами.
 */

type Dict = { readonly [key: string]: string | Dict };

const REFERENCE = 'uk';

/**
 * Словники імпортуються, а не читаються з диску: перевірити треба саме те, що
 * поїде в бандл. Файл на диску може існувати й не бути підключеним до
 * агрегатора — тоді перевірка над каталогом була б зеленою на словнику, якого
 * застосунок не бачить (AI-AGENT-PITFALLS-v8 § 3).
 */
const LOCALES: Record<string, Dict> = { uk, en, nl, crh } as unknown as Record<string, Dict>;

const TRANSLATED = Object.keys(LOCALES).filter((locale) => locale !== REFERENCE);

/** `a.b.c` → рядок. Вкладеність словників тут довільна, тому обхід рекурсивний. */
function flatten(value: unknown, prefix = '', out = new Map<string, string>()): Map<string, string> {
	if (typeof value === 'string') {
		out.set(prefix, value);
		return out;
	}
	if (value && typeof value === 'object') {
		for (const [key, nested] of Object.entries(value)) {
			flatten(nested, prefix ? `${prefix}.${key}` : key, out);
		}
	}
	return out;
}

const flat: Record<string, Map<string, string>> = Object.fromEntries(
	Object.entries(LOCALES).map(([locale, dict]) => [locale, flatten(dict)])
);

const reference = flat[REFERENCE];

/**
 * Підстановки `svelte-i18n` — `{name}`. Навмисно лише прості ідентифікатори:
 * ICU-блоків (`{count, plural, …}`) у цьому проєкті немає, а регулярка, що
 * намагалася б їх розібрати, дала б хибні спрацювання на апострофах і лапках,
 * якими рясніють кримськотатарські рядки.
 */
function placeholders(text: string): string[] {
	return [...new Set([...text.matchAll(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g)].map((m) => m[1]))].sort();
}

describe('словники: паритет ключів (I18N-v8 § 7.1)', () => {
	it('перевірка жива: еталонний словник знайдено й він непорожній', () => {
		expect(
			reference.size,
			'у `uk` не знайдено жодного рядка — імпорт зламаний, і будь-яке порівняння нижче зелене'
		).toBeGreaterThan(200);
		expect(TRANSLATED, 'нема з чим порівнювати еталон').toEqual(['en', 'nl', 'crh']);
	});

	it.each(TRANSLATED)('%s не має відсутніх ключів', (locale) => {
		const missing = [...reference.keys()].filter((key) => !flat[locale].has(key));
		expect(missing, `${locale}: ключі є в ${REFERENCE} і немає тут — текст покаже сам ключ`).toEqual(
			[]
		);
	});

	it.each(TRANSLATED)('%s не має зайвих ключів', (locale) => {
		const extra = [...flat[locale].keys()].filter((key) => !reference.has(key));
		expect(
			extra,
			`${locale}: ключів немає в ${REFERENCE} — або описка в назві, або залишок після перейменування`
		).toEqual([]);
	});

	it('порожніх значень немає в жодній мові', () => {
		const empty: string[] = [];
		for (const [locale, entries] of Object.entries(flat)) {
			for (const [key, value] of entries) {
				if (!value.trim()) empty.push(`${locale}:${key}`);
			}
		}
		expect(empty, 'порожній рядок виглядає як переклад і не є ним').toEqual([]);
	});

	it.each(TRANSLATED)('%s: набір підстановок збігається з еталоном', (locale) => {
		const drift: string[] = [];
		for (const [key, source] of reference) {
			const target = flat[locale].get(key);
			if (target === undefined) continue; // покрито перевіркою відсутніх ключів
			const expected = placeholders(source);
			const actual = placeholders(target);
			if (expected.join(',') !== actual.join(',')) {
				drift.push(`${key}: ${REFERENCE}[${expected.join(' ')}] ≠ ${locale}[${actual.join(' ')}]`);
			}
		}
		expect(drift, `${locale}: підстановка, якої немає в перекладі, лишає в реченні дірку`).toEqual(
			[]
		);
	});
});

/**
 * ПАРИТЕТ МІРЯЄТЬСЯ ПО ВСІХ ФАЙЛАХ ЛОКАЛІ, А НЕ ПО ІМПОРТОВАНОМУ МОДУЛЮ
 * (I18N-v9 § 7.1.1, `I18N-LAZY-CHUNK-PARITY`, HIGH, `GATE-I18N-PARITY`).
 *
 * ## Другий бік того самого рішення
 *
 * Словники вище імпортуються, а не читаються з диску — навмисно: перевірити
 * треба саме те, що поїде в бандл (докблок на початку файлу). Але в цього
 * рішення є ціна, і вона названа там же: **файл на диску може існувати й не
 * бути підключеним до агрегатора.** Тоді паритет зелений, а сторінка показує
 * ключі замість тексту — і жоден із чотирьох інваріантів вище цього не бачить,
 * бо для них того файлу просто не існує.
 *
 * v9 називає цей клас `I18N-LAZY-CHUNK-PARITY`: у `VetCrewGames` це був
 * лінивий чанк словника, який випав із паритету. Тут лінивих чанків немає,
 * форма інша — каталог `src/lib/i18n/<lang>/` і агрегатор `<lang>.ts` поруч, —
 * але механізм пропуску той самий: паритет бачить лише те, що імпортоване.
 *
 * ## Чому обидва боки
 *
 * Файл без імпорту — текст, якого не буде на екрані. Імпорт без файлу не
 * збереться взагалі, тож його ловить `svelte-check`; але третій випадок —
 * ФАЙЛ, ІМПОРТОВАНИЙ НЕ В СВОЮ локаль (`uk/settings` в `en.ts` після
 * копіювання агрегатора) — не ловить ніхто: типи збігаються, ключі збігаються,
 * а мова ні. Тому імпорти звіряються ще й на префікс каталогу.
 *
 * Заміряно 2026-09-10: 28 файлів × 4 локалі, усі підключені, жодного чужого.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS § 1.1) — прогнано
 *
 * Вирішальний прогін — СИМЕТРИЧНИЙ пропуск, бо саме він і є класом: файл
 * `probeFeature.ts` створено в усіх чотирьох каталогах і не підключено ні до
 * одного агрегатора. Чотири перевірки паритету вище лишилися ЗЕЛЕНИМИ (для них
 * тих файлів не існує), а новий інваріант назвав усі чотири локалі. Асиметричний
 * пропуск (прибрати `import social from './uk/social'`) паритет ловить
 * побічно — через «зайві ключі» в решті локалей, — і саме тому він доказом не
 * є: симетричний не ловить ніхто.
 */
describe('кожен файл локалі підключений до свого агрегатора (I18N-LAZY-CHUNK-PARITY)', () => {
	const DIR = 'src/lib/i18n';
	const LOCALE_NAMES = Object.keys(LOCALES);

	/** Файли фіч на диску: `<lang>/<feature>.ts`. */
	const onDisk = Object.fromEntries(
		LOCALE_NAMES.map((locale) => [
			locale,
			readdirSync(`${DIR}/${locale}`)
				.filter((name) => name.endsWith('.ts'))
				.map((name) => name.replace(/\.ts$/, ''))
		])
	);

	/** Імпорти з агрегатора разом із каталогом, з якого вони взяті. */
	const imported = Object.fromEntries(
		LOCALE_NAMES.map((locale) => [
			locale,
			[
				...readFileSync(`${DIR}/${locale}.ts`, 'utf8').matchAll(
					/from\s+'\.\/([a-z]+)\/([A-Za-z0-9_]+)'/g
				)
			].map((match) => ({ dir: match[1], feature: match[2] }))
		])
	);

	it('перевірка жива: файли й агрегатори прочитано', () => {
		for (const locale of LOCALE_NAMES) {
			expect(onDisk[locale].length, `${locale}: у каталозі немає файлів фіч`).toBeGreaterThan(5);
			expect(
				imported[locale].length,
				`${locale}: в агрегаторі не знайдено імпортів — регулярка застаріла`
			).toBeGreaterThan(5);
		}
	});

	it.each(LOCALE_NAMES)('%s: кожен файл на диску імпортований агрегатором', (locale) => {
		const features = imported[locale].map((entry) => entry.feature);
		const orphans = onDisk[locale].filter((feature) => !features.includes(feature));
		expect(
			orphans,
			`${locale}: файл є, тексту на екрані не буде — паритет його не бачить зовсім:\n${orphans.join(', ')}`
		).toEqual([]);
	});

	it.each(LOCALE_NAMES)('%s: агрегатор не тягне файли чужої локалі', (locale) => {
		const foreign = imported[locale]
			.filter((entry) => entry.dir !== locale)
			.map((entry) => `${entry.dir}/${entry.feature}`);
		expect(
			foreign,
			`${locale}.ts імпортує з чужого каталогу — типи й ключі збіглися б, а мова ні:\n${foreign.join(', ')}`
		).toEqual([]);
	});
});
