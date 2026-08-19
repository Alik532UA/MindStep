// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { buildReport, type ReportContext } from './betaReport';
import { progressOf } from './betaChecklist';
import type { BetaCheck, BetaMark } from './betaChecklist.types';

/**
 * Звіт (BETA-CHECKLIST-v8 § 6) і поступ (§ 3.1).
 *
 * Звіт — єдине, що доїжджає від тестувальника до того, хто розбирає збій. Якщо
 * він губить рядок або не позначає покритий пункт, дефект їде далі без ознак.
 */

const CTX: ReportContext = {
	version: '1.2.3',
	timestamp: '2026-08-19T09:00:00.000Z',
	userAgent: 'TestAgent/1.0',
	language: 'uk',
	theme: 'dark'
};

const TITLES = { menu: 'Головне меню', online: 'Гра в мережі' };

const CHECKS: BetaCheck[] = [
	{
		id: 'menu_1',
		category: { uk: 'Запуск', en: 'Startup' },
		text: { uk: 'Сторінка відкривається.', en: 'The page opens.' },
		coverage: 'manual'
	},
	{
		id: 'menu_2',
		category: { uk: 'Мова', en: 'Language' },
		text: { uk: 'Мова перемикається.', en: 'Language switches.' },
		coverage: 'covered',
		test: 'tests/e2e/html-lang.spec.ts'
	},
	{
		id: 'online_1',
		category: { uk: 'Кімната', en: 'Room' },
		text: { uk: 'Кімната створюється.', en: 'A room is created.' },
		coverage: 'testable'
	}
];

describe('звіт', () => {
	it('несе версію, час і оточення', () => {
		const out = buildReport(CHECKS, {}, TITLES, CTX);
		expect(out).toContain('VERSION: 1.2.3');
		expect(out).toContain('TIME: 2026-08-19T09:00:00.000Z');
		expect(out).toContain('UA: TestAgent/1.0');
	});

	it('без позначок каже це прямо, а не віддає порожнечу', () => {
		// Порожній звіт, що виглядає як звіт, гірший за відсутній: його надішлють.
		expect(buildReport(CHECKS, {}, TITLES, CTX)).toContain('Жодного пункта не позначено');
	});

	it('містить лише позначені пункти', () => {
		const marks: Record<string, BetaMark> = { menu_1: { vote: 'fail', version: '1.2.3' } };
		const out = buildReport(CHECKS, marks, TITLES, CTX);
		expect(out).toContain('menu_1');
		// Перелік недивленого зробив би звіт нечитним (§ 6.1).
		expect(out).not.toContain('online_1');
	});

	it('поламане стоїть вище за робоче', () => {
		const marks: Record<string, BetaMark> = {
			menu_1: { vote: 'ok', version: '1.2.3' },
			online_1: { vote: 'fail', version: '1.2.3' }
		};
		const out = buildReport(CHECKS, marks, TITLES, CTX);
		expect(out.indexOf('НЕ ПРАЦЮЄ')).toBeLessThan(out.indexOf('ПРАЦЮЄ ('));
	});

	it('провал у покритому пункті позначено окремо', () => {
		// Це звіт про дефект ТЕСТА, а не гри: новина гірша за звичайний баг, бо
		// знецінює всі зелені прогони (§ 3).
		const marks: Record<string, BetaMark> = { menu_2: { vote: 'fail', version: '1.2.3' } };
		const out = buildReport(CHECKS, marks, TITLES, CTX);
		expect(out).toContain('ПУНКТ ПОКРИТО АВТОТЕСТОМ tests/e2e/html-lang.spec.ts');
		expect(out).toContain('тест не побачив цієї помилки');
	});

	it('успіх у покритому пункті окремо НЕ позначається', () => {
		const marks: Record<string, BetaMark> = { menu_2: { vote: 'ok', version: '1.2.3' } };
		expect(buildReport(CHECKS, marks, TITLES, CTX)).not.toContain('ПУНКТ ПОКРИТО');
	});

	it('позначка з іншої версії підписана', () => {
		const marks: Record<string, BetaMark> = { menu_1: { vote: 'ok', version: '0.9.0' } };
		const out = buildReport(CHECKS, marks, TITLES, CTX);
		expect(out).toContain('позначено на версії 0.9.0');
	});

	it('назва вкладки виводиться з id пункта', () => {
		const marks: Record<string, BetaMark> = { online_1: { vote: 'weird', version: '1.2.3' } };
		expect(buildReport(CHECKS, marks, TITLES, CTX)).toContain('Гра в мережі');
	});
});

describe('поступ', () => {
	it('рахує лише позначки поточної версії', () => {
		const marks = {
			menu_1: { vote: 'ok' as const, version: '1.2.3' },
			menu_2: { vote: 'ok' as const, version: '0.9.0' }
		};
		// «Зроблено 2 із 3» на збірці, де половину міряли сорок комітів тому, є
		// неправдою (§ 3.1).
		expect(progressOf(CHECKS, marks, '1.2.3')).toEqual({ current: 1, stale: 1, total: 3 });
	});

	it('без позначок — нуль', () => {
		expect(progressOf(CHECKS, {}, '1.2.3')).toEqual({ current: 0, stale: 0, total: 3 });
	});
});
