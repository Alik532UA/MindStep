// @vitest-environment node
// Перевірка читає тільки текст стилів — браузер їй не потрібен.
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Дві межі з FLUID-SIZING-v8, які мовчать доти, доки хтось не відкриє сайт на
 * телефоні.
 *
 * **`vh` замість `dvh` (§ 2).** `100vh` на мобільних — це висота вікна з
 * розгорнутою панеллю браузера. Панель згортається при прокрутці, вікно стає
 * вищим, а розмір лишається старим: у оверлеї це означає, що нижній край
 * картки лежить під панеллю, а разом із ним — кнопки. На десктопі різниці
 * немає ніякої, тому дефект не видно там, де його шукають. Сам пакет називає
 * перевіркою рівно `grep -rn "[0-9]vh" src/` — тут вона просто виконується
 * автоматично.
 *
 * **`repeat(N, 1fr)` (§ 1, CRITICAL).** `1fr` — це `minmax(auto, 1fr)`:
 * мінімум колонки дорівнює мінімальному вмісту, тож довге слово або широка
 * кнопка розпирають сітку ЗА межі контейнера, замість того щоб стиснутися.
 * `minmax(0, 1fr)` знімає цей мінімум. Симптом — горизонтальна прокрутка на
 * вузькому екрані, і тільки на ньому.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): повернути `100vh` у
 * будь-який файл стилів — перевірка червоніє й називає файл, рядок і саме
 * значення.
 */

const ROOTS = ['src'];
const EXT = /\.(svelte|css)$/;

/** `svh`/`lvh`/`dvh` — це не той `vh`, про який ідеться. */
const BARE_VH = /(?<![dsl])\b\d+(?:\.\d+)?vh\b/;
const NAIVE_FR = /repeat\(\s*\d+\s*,\s*1fr\s*\)/;

function styleFiles(dir: string, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) styleFiles(full, acc);
		else if (EXT.test(full)) acc.push(full);
	}
	return acc;
}

function hits(pattern: RegExp): string[] {
	const out: string[] = [];
	for (const file of ROOTS.flatMap((r) => styleFiles(r))) {
		readFileSync(file, 'utf8')
			.split('\n')
			.forEach((line, i) => {
				const m = pattern.exec(line);
				if (m) out.push(`${file}:${i + 1} → ${line.trim().slice(0, 70)}`);
			});
	}
	return out;
}

describe('перевірка жива', () => {
	it('файли стилів знайдено', () => {
		const files = ROOTS.flatMap((r) => styleFiles(r));
		expect(files.length, 'ні .svelte, ні .css — перевірка завжди зелена').toBeGreaterThan(50);
	});

	it('регулярка справді ловить те, від чого захищаємося', () => {
		// Канарка на сам патерн, а не на проєкт: регулярку легко зламати правкою,
		// і зламана вона дає нуль порушень — тобто виглядає як успіх.
		expect(BARE_VH.test('  height: 100vh;')).toBe(true);
		expect(BARE_VH.test('  height: 100dvh;')).toBe(false);
		expect(NAIVE_FR.test('grid-template-columns: repeat(3, 1fr);')).toBe(true);
		expect(NAIVE_FR.test('grid-template-columns: repeat(3, minmax(0, 1fr));')).toBe(false);
	});
});

describe('FLUID-SIZING-v8', () => {
	it('вертикальні розміри — від dvh, а не vh (§ 2)', () => {
		expect(hits(BARE_VH), 'на мобільних vh не враховує згортання панелі браузера').toEqual([]);
	});

	it('колонки сітки — minmax(0, 1fr), а не 1fr (§ 1)', () => {
		expect(hits(NAIVE_FR), '1fr не дає колонці стиснутися вужче за вміст').toEqual([]);
	});
});
