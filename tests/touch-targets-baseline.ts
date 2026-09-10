/**
 * База пар сенсорних цілей, що перекриваються
 * (ACCESSIBILITY-v9 § 10.3.1, `A11Y-TOUCH-OVERLAP`, MEDIUM).
 *
 * ## Чому перелік пар, а не число
 *
 * `tests/a11y-baseline.ts` тримає ЧИСЛО порушень плюс перелік `id` правил —
 * там інакше не можна, бо axe віддає типи. Тут одиниця виміру інша: знахідка
 * — це завжди ПАРА конкретних елементів, і назвати її дешево. Тож база
 * зберігає саме пари. Наслідок: нова знахідка не може розчинитися в лічильнику,
 * а зникла — валить прогін проханням прибрати рядок. Ратчет в обидва боки, як
 * і вимагає CODE-QUALITY § 6.4.3.
 *
 * Порожній масив означає «на цій сторінці цілі не наступають одна на одну» —
 * і саме цей стан і треба тримати.
 *
 * Заміряно 2026-09-11 на 390×844, збірка 0.5.974.
 */
export const TOUCH_OVERLAP_BASELINE = {
	home: [],
	settings: [],
	localSetup: [],
	rules: [],
	controls: [],
	rewards: [],
	join: [],
	betaChecklists: []
} as const satisfies Record<string, readonly string[]>;

export type TouchPageKey = keyof typeof TOUCH_OVERLAP_BASELINE;
