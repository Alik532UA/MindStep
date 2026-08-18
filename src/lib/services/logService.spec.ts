import { describe, expect, it } from 'vitest';
import { logService, LOG_TOPIC_NAMES } from './logService.svelte';

/**
 * DEBUGGING-v8 § 1 — те, з чого живе кнопка копіювання логів.
 *
 * Чому цей файл з'явився. `logService` — це `Proxy`, який на будь-яку
 * властивість віддає функцію логування, і був типізований `as any`. Через це
 * двоє органів керування зневадженням існували лише на вигляд:
 *
 * - `logService.errorCount` повертав ФУНКЦІЮ. Умова показу кнопки —
 *   `logService.errorCount > 0`, тобто `function > 0`, тобто `false` завжди:
 *   кнопка не з'являлася ЖОДНОГО разу, скільки б помилок не сталося;
 * - `logService.forceEnableLogging()` не вмикав логування, а дописував рядок
 *   із темою `FORCEENABLELOGGING`.
 *
 * Обидва — «файл є, отже працює» без перевірки досяжності
 * (AI-AGENT-PITFALLS-v8 § 3). Тип тепер валить друкарську помилку в назві, а
 * ці перевірки тримають поведінку: тип не бачить, що getter повертає число
 * від справжнього лічильника, а не нуль-заглушку.
 */
describe('logService: фасад справді щось віддає', () => {
	it('errorCount — число, а не функція', () => {
		expect(typeof logService.errorCount).toBe('number');
	});

	it('errorCount росте від logService.error', () => {
		const before = logService.errorCount;
		logService.error('[logService.spec] навмисна помилка для лічильника');
		expect(
			logService.errorCount,
			'лічильник не зрушив — кнопка копіювання логів не з’явиться ніколи'
		).toBe(before + 1);
	});

	it('errorCount НЕ росте від інших тем', () => {
		const before = logService.errorCount;
		logService.info('[logService.spec] звичайна подія');
		logService.warn('[logService.spec] очікуваний збій');
		expect(logService.errorCount).toBe(before);
	});

	it('forceEnableLogging — функція, і виклик не кидає', () => {
		expect(typeof logService.forceEnableLogging).toBe('function');
		expect(() => logService.forceEnableLogging()).not.toThrow();
	});

	it('звіт містить залоговане', () => {
		const marker = '[logService.spec] маркер у звіті';
		logService.info(marker);
		expect(logService.getLogReport()).toContain(marker);
	});

	it('версія у звіті є (VERSIONING-v8 § 3)', () => {
		expect(logService.version, 'без версії звіт не привʼязати до релізу').toBeTruthy();
	});
});

describe('перелік тем', () => {
	it('кожна тема з переліку виклична', () => {
		expect(LOG_TOPIC_NAMES.length).toBeGreaterThan(10);
		for (const topic of LOG_TOPIC_NAMES) {
			expect(
				typeof (logService as unknown as Record<string, unknown>)[topic],
				`тема ${topic} не є функцією`
			).toBe('function');
		}
	});

	it('`warn` серед тем — рівень для очікуваних збоїв (§ 1.3)', () => {
		// Доти теми `warn` у конфігу не було зовсім: проксі створював її на
		// першому виклику, тобто прапорця для неї не існувало, і вимкнути шум
		// від очікуваних збоїв було нічим.
		expect(LOG_TOPIC_NAMES).toContain('warn');
	});
});
