// @vitest-environment node
// Перевірка читає джерела — браузер і DOM їй не потрібні.
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { ANALYTICS_EVENTS } from './analyticsService';

/**
 * ANALYTICS-v8 § 3.1 — реєстр подій збігається з тим, що код НАДСИЛАЄ.
 *
 * Тип уже не дасть написати `track('game-end')`. Чого тип не бачить — це
 * протилежного боку: подія, що лишилася в реєстрі після того, як виклик з коду
 * прибрали. Такий рядок читається як «ми це міряємо», а в GA4 його немає
 * ніколи, і побачити розбіжність можна лише відкривши консоль GA й порівнявши
 * руками. Тому перевірка ходить в обидві сторони.
 *
 * `page_view` надсилається не через `track()`, а окремою функцією
 * `trackPageView()` — вона названа тут явно, бо інакше виглядала б як
 * забутий ключ.
 */

const SENT_ELSEWHERE = new Set<string>(['page_view']);

function tsFiles(dir: string, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		if (name === 'node_modules') continue;
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) tsFiles(full, acc);
		else if (/\.(ts|svelte)$/.test(full) && !/\.(spec|test)\.ts$/.test(full)) acc.push(full);
	}
	return acc;
}

/** Назви подій із самих викликів `track('…')`. */
function calledEvents(): Map<string, string[]> {
	const found = new Map<string, string[]>();
	for (const file of tsFiles('src')) {
		if (file.endsWith('analyticsService.ts')) continue;
		const src = readFileSync(file, 'utf8');
		for (const m of src.matchAll(/\btrack\(\s*['"]([^'"]+)['"]/g)) {
			const list = found.get(m[1]) ?? [];
			list.push(file);
			found.set(m[1], list);
		}
	}
	return found;
}

describe('перевірка жива', () => {
	it('реєстр не порожній і виклики знайдено', () => {
		expect(Object.keys(ANALYTICS_EVENTS).length).toBeGreaterThan(0);
		expect(calledEvents().size, 'жодного track() — регулярка перестала збігатися').toBeGreaterThan(
			0
		);
	});
});

describe('реєстр подій аналітики', () => {
	it('ключ і значення в реєстрі однакові', () => {
		// Розходження зробило б реєстр брехливим: у коді пишуть ключ, у GA4
		// прилітає значення.
		for (const [key, value] of Object.entries(ANALYTICS_EVENTS)) {
			expect(value, `ANALYTICS_EVENTS.${key} має інше значення`).toBe(key);
		}
	});

	it('усе, що код надсилає, є в реєстрі', () => {
		const registry = new Set<string>(Object.values(ANALYTICS_EVENTS));
		const unknown = [...calledEvents().entries()]
			.filter(([name]) => !registry.has(name))
			.map(([name, files]) => `${name} ← ${files.join(', ')}`);
		expect(unknown, 'подія надсилається, але в реєстрі її немає').toEqual([]);
	});

	it('у реєстрі немає подій, які ніхто не надсилає', () => {
		const called = new Set(calledEvents().keys());
		const stale = Object.values(ANALYTICS_EVENTS).filter(
			(name) => !called.has(name) && !SENT_ELSEWHERE.has(name)
		);
		expect(stale, 'рядок реєстру читається як «ми це міряємо», а виклику немає').toEqual([]);
	});
});
