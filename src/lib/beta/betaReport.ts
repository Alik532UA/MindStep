import type { BetaCheck, BetaMark, BetaVote } from './betaChecklist.types';

/**
 * Складання тексту звіту (BETA-CHECKLIST-v8 § 6).
 *
 * Чиста функція в окремому `.ts` навмисно: звіт — єдине, що доїжджає від
 * тестувальника до того, хто розбирає збій, і перевірити його треба без
 * браузера. Компонент лише кладе результат у буфер.
 *
 * Відповіді лежать у сховищі браузера, не на сервері. Збирати на сервер
 * означало б таблицю, правила доступу до неї й чужі імена в ній — заради
 * даних, яких поки ніхто не читає (§ 6.1). Рішення дешево скасувати:
 * агрегація доклеюється пізніше, не переписуючи сторінку.
 */

export interface ReportContext {
	version: string;
	/** ISO — звіт читає той, хто розбирає збій, а не гравець, що його скопіював. */
	timestamp: string;
	userAgent: string;
	language: string;
	theme: string;
}

const VOTE_LABEL: Record<BetaVote, string> = {
	fail: 'НЕ ПРАЦЮЄ',
	weird: 'ПРАЦЮЄ, АЛЕ ДИВНО',
	ok: 'ПРАЦЮЄ'
};

/** Поламане — вгорі: його читають першим, і воно найкоротше живе. */
const VOTE_ORDER: readonly BetaVote[] = ['fail', 'weird', 'ok'];

function tabTitleOf(check: BetaCheck, titles: Readonly<Record<string, string>>): string {
	const tabId = check.id.split('_')[0];
	return titles[tabId] ?? tabId;
}

/**
 * Тільки позначені пункти. Перелік недивленого зробив би звіт нечитним: у
 * ньому 47 рядків, з яких цікаві три.
 */
export function buildReport(
	checks: readonly BetaCheck[],
	marks: Readonly<Record<string, BetaMark | undefined>>,
	tabTitles: Readonly<Record<string, string>>,
	ctx: ReportContext
): string {
	const marked = checks
		.map((check) => ({ check, mark: marks[check.id] }))
		.filter((entry): entry is { check: BetaCheck; mark: BetaMark } => Boolean(entry.mark));

	const lines: string[] = [
		'=== MindStep — звіт бета-тестування ===',
		`VERSION: ${ctx.version}`,
		`TIME: ${ctx.timestamp}`,
		`LANG: ${ctx.language}   THEME: ${ctx.theme}`,
		`UA: ${ctx.userAgent}`,
		`ПОЗНАЧЕНО: ${marked.length} із ${checks.length}`,
		''
	];

	if (marked.length === 0) {
		lines.push('Жодного пункта не позначено.');
		return lines.join('\n');
	}

	for (const vote of VOTE_ORDER) {
		const group = marked.filter((entry) => entry.mark.vote === vote);
		if (group.length === 0) continue;

		lines.push(`--- ${VOTE_LABEL[vote]} (${group.length}) ---`);
		for (const { check, mark } of group) {
			lines.push(`[${VOTE_LABEL[vote]}] ${check.id} (${tabTitleOf(check, tabTitles)})`);
			lines.push(`    ${check.text.uk}`);

			// Помилка, знайдена в покритому місці, — це звіт про дефект ТЕСТА, а не
			// гри. Новина гірша за звичайний баг, бо знецінює всі зелені прогони,
			// тому у звіті вона окремим рядком і з трьома знаками оклику (§ 3).
			if (vote !== 'ok' && check.coverage === 'covered') {
				lines.push(`    !!! ПУНКТ ПОКРИТО АВТОТЕСТОМ ${check.test} —`);
				lines.push('        тест не побачив цієї помилки');
			}

			if (mark.version !== ctx.version) {
				lines.push(`    (позначено на версії ${mark.version}, поточна ${ctx.version})`);
			}
		}
		lines.push('');
	}

	return lines.join('\n').trimEnd();
}
