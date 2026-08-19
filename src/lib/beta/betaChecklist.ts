import { BETA_CHECKS, BETA_TABS } from './betaChecklist.data';
import { COVERAGE_ORDER, type BetaCheck, type BetaTab, type Coverage } from './betaChecklist.types';

/**
 * Чиста логіка чеклиста: відбір, сортування, підрахунок поступу.
 *
 * Окремо від компонента й від сховища навмисно — це те, що можна перевірити без
 * браузера, і `beta-checklist.spec.ts` перевіряє саме звідси.
 */

/**
 * Порядок показу: `manual → testable → covered`, і всередині рівня —
 * порядок оголошення (BETA-CHECKLIST-v8 § 3).
 *
 * Не косметика. Людина витрачається спершу там, де машини немає; середній
 * рівень — готовий беклог тестів; останній лишається контрольною групою.
 * Порядок усередині рівня тематичний, тож стабільне сортування обов'язкове:
 * `Array.prototype.sort` у V8 стабільний з ES2019, і саме на це тут розрахунок.
 */
export function sortChecks(checks: readonly BetaCheck[]): BetaCheck[] {
	const rank = (c: BetaCheck) => COVERAGE_ORDER.indexOf(c.coverage);
	return [...checks].sort((a, b) => rank(a) - rank(b));
}

/** Пункти однієї вкладки, у порядку показу. */
export function checksOfTab(tabId: string, checks: readonly BetaCheck[] = BETA_CHECKS): BetaCheck[] {
	return sortChecks(checks.filter((c) => c.id.startsWith(`${tabId}_`)));
}

/** Пункти рівня всередині вкладки — рівень малюється окремою секцією. */
export function checksOfLevel(
	tabId: string,
	level: Coverage,
	checks: readonly BetaCheck[] = BETA_CHECKS
): BetaCheck[] {
	return checksOfTab(tabId, checks).filter((c) => c.coverage === level);
}

export function tabById(tabId: string): BetaTab | undefined {
	return BETA_TABS.find((t) => t.id === tabId);
}

export interface Progress {
	/** Позначено на ЦІЙ версії збірки. */
	current: number;
	/** Позначено колись, але на іншій версії — не рахується в «зроблено». */
	stale: number;
	total: number;
}

/**
 * Поступ рахує лише позначки поточної версії (§ 3.1). Позначка з іншої версії
 * не зникає — вона все ще щось означає, — але «зроблено 40 із 46» на збірці,
 * де половину міряли сорок комітів тому, є неправдою.
 */
export function progressOf(
	checks: readonly BetaCheck[],
	marks: Readonly<Record<string, { version: string } | undefined>>,
	version: string
): Progress {
	let current = 0;
	let stale = 0;
	for (const check of checks) {
		const mark = marks[check.id];
		if (!mark) continue;
		if (mark.version === version) current += 1;
		else stale += 1;
	}
	return { current, stale, total: checks.length };
}
