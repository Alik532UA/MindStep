// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { resolveSiblingLocale, SIBLINGS, siblingUrl } from './siblings';
import { AppSettingsSchema } from './schemas/appSettingsSchema';

/**
 * `siblings.ts` — ОДНА таблиця, скопійована у вісім репозиторіїв, і кожен із них
 * знає правду лише про свій рядок.
 *
 * Сусідні сайти будують посилання сюди з рядка `mindstep`: які мови тут є, яку
 * віддає гола адреса, і що мовного сегмента тут немає взагалі. Додана тут мова
 * робить сім чужих копій застарілими мовчки; прибрана — робить чужі посилання
 * такими, що ведуть у мову, якої вже немає. Симптом зʼявляється на ЧУЖОМУ сайті
 * й через місяці, тож перевірка стоїть тут: розходження червоніє в тому
 * репозиторії й на тому коміті, що його спричинив.
 *
 * Джерела правди беруться з коду, а не переписуються сюди руками: перелік
 * `register()` з `i18n/init.svelte.ts`, типова мова зі схеми налаштувань, база
 * з `vite.config.ts`, origin із генератора sitemap. Перевірка, що звіряє
 * літерал із літералом, підтверджує лише те, що їх набрали однаково.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): дописати
 * `register('de', …)` без правки таблиці — червоніє звірка мов; поміняти
 * `transport` на `'path'` — червоніє перевірка маршрутів; підмінити базу на
 * `/mindstep` — червоніє звірка бази.
 */

const ROW = SIBLINGS.mindstep;

/** Мови, словники яких тут справді зареєстровані. */
function registeredLocales(): string[] {
	const source = readFileSync('src/lib/i18n/init.svelte.ts', 'utf8');
	return [...source.matchAll(/register\('([\w-]+)'/g)].map((m) => m[1]).sort();
}

describe('рядок цього сайту в таблиці сусідів', () => {
	it('перелічує ті самі мови, словники яких тут зареєстровані', () => {
		const registered = registeredLocales();
		expect(registered.length, 'жодного register() не знайдено — перевірка мертва').toBeGreaterThan(
			0
		);
		expect([...ROW.locales].sort()).toEqual(registered);
	});

	it('не розходиться зі схемою налаштувань', () => {
		// Друга половина тієї самої правди: словник без запису в `z.enum` не можна
		// обрати, а запис без словника показав би ключі замість тексту.
		for (const locale of registeredLocales()) {
			expect(
				AppSettingsSchema.shape.language.safeParse(locale).success,
				`${locale} має словник, але схема налаштувань його не приймає`
			).toBe(true);
		}
	});

	it('називає ту саму типову мову, що й схема', () => {
		expect(ROW.defaultLocale).toBe(AppSettingsSchema.parse({}).language);
	});

	it('несе базу, з якою збирається продакшн', () => {
		const config = readFileSync('vite.config.ts', 'utf8');
		const declared = /isProd \? '([^']+)'/.exec(config)?.[1];
		expect(declared, 'vite.config.ts більше не оголошує продакшн-базу').toBeTruthy();
		expect(ROW.base).toBe(declared);
	});

	it('несе той самий origin, що й генератор sitemap', () => {
		const script = readFileSync('scripts/generate-sitemap.mjs', 'utf8');
		const declared = /SITE_ORIGIN = '([^']+)'/.exec(script)?.[1];
		expect(ROW.origin).toBe(declared);
	});

	/*
	 * `transport: 'query'` — не смак, а факт про цей сайт: мова тут не живе в
	 * адресі, тож сусід не може назвати її шляхом. Щойно тут зʼявиться маршрут із
	 * мовним сегментом, рядок мусить стати `'path'` — інакше сусіди й далі
	 * слатимуть параметр у сайт, який уже вміє краще.
	 */
	it('каже «параметром», бо мовного сегмента тут немає', () => {
		const segments = readdirSync('src/routes', { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name);
		const language = segments.filter((name) => /^\[+lang/.test(name));

		expect(language, 'мовний сегмент зʼявився — рядок має стати transport: path').toEqual([]);
		expect(ROW.transport).toBe('query');
	});
});

describe('контракт передачі мови між сайтами', () => {
	it('бере мову як є, коли сусід її має', () => {
		expect(resolveSiblingLocale('mindstep', 'nl')).toBe('nl');
		expect(resolveSiblingLocale('digitalworkshop', 'crh')).toBe('crh');
	});

	it('зводить en-US до en, а не вважає невідомим', () => {
		expect(resolveSiblingLocale('mindstep', 'en-US')).toBe('en');
	});

	it('містить англійською, коли ближчого в сусіда немає', () => {
		expect(resolveSiblingLocale('as5', 'crh')).toBe('en');
		expect(resolveSiblingLocale('mindstep', 'de')).toBe('en');
	});

	it('називає мову рівно один раз — у шляху або в параметрі', () => {
		expect(siblingUrl('mindstep', 'nl')).toBe('https://alik532ua.github.io/MindStep/?lang=nl');
		expect(siblingUrl('vetcrewgames', 'nl')).toBe('https://alik532ua.github.io/VetCrewGames/nl/');
		expect(siblingUrl('vetcrewgames', 'uk')).toBe(
			'https://alik532ua.github.io/VetCrewGames/?lang=uk'
		);
	});

	it('не губить параметрів, які посилання вже несло', () => {
		expect(siblingUrl('digitalworkshop', 'en', { tab: 'promo', theme: 'colorful' })).toBe(
			'https://alik532ua.github.io/DigitalWorkshop/en/?tab=promo&theme=colorful'
		);
	});
});
