// @vitest-environment node
// Перевірка читає тільки текст компонентів.
import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * I18N-v8 § 2 — user-facing текст живе у словнику, а не в розмітці.
 *
 * Застосунок говорить чотирма мовами (`uk`, `en`, `nl`, `crh`). Рядок,
 * вписаний прямо в шаблон, лишається українським у всіх чотирьох — і
 * непомітно: сторінка малюється, тести проходять, `svelte-check` мовчить.
 * Побачити це можна лише перемкнувши мову й придивившись саме до цього
 * місця, тобто практично ніколи.
 *
 * Що перевіряється: **текстові вузли** шаблону (`>текст<`) з кириличними
 * літерами. Саме вузли, а не будь-яка кирилиця у файлі: коментарі, назви
 * тем логування й повідомлення для розробника у `logService` — це не текст
 * для гравця, і вимагати від них словника означало б боротися з мовою, якою
 * тут пишуть коментарі.
 *
 * **Латиниця не перевіряється навмисно.** Відрізнити `Score` від `flex-start`
 * без розбору розмітки неможливо, а перевірка з хибними спрацюваннями
 * закінчується вимкненою перевіркою (CODE-QUALITY-v8 § 6.4.1). Кирилиця дає
 * нульовий шум і покриває той випадок, який тут справді трапляється: текст
 * набирають українською.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): вписати
 * `<h2>Досягнення</h2>` у будь-який компонент — перевірка червоніє з назвою
 * файлу, рядком і самим текстом.
 */

const ROOT = 'src';

/**
 * Сторінки-майданчики: `routes/test/` існує лише в dev і до гравця не
 * доїжджає. `ErrorBoundary` і `+error.svelte` — свідоме виключення: їх видно
 * саме тоді, коли застосунок уже зламався, і тягнути в цей момент словник
 * означало б, що екран помилки залежить від підсистеми, яка сама могла впасти.
 */
const SKIP = [
	'src/routes/test/',
	'src/routes/test-error/',
	'src/routes/+error.svelte',
	'src/lib/components/ErrorBoundary.svelte'
];

const CYRILLIC = /[Ѐ-ӿ]/;

function svelteFiles(dir: string, acc: string[] = []): string[] {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name).replace(/\\/g, '/');
		if (statSync(full).isDirectory()) svelteFiles(full, acc);
		else if (full.endsWith('.svelte')) acc.push(full);
	}
	return acc;
}

/** Текстові вузли шаблону: те, що між `>` і `<` без вкладених тегів і виразів. */
const TEXT_NODE = />[\t ]*([^<>{}]*?)[\t ]*</g;

interface Hit {
	file: string;
	line: number;
	text: string;
}

function findHardcoded(files: string[]): Hit[] {
	const out: Hit[] = [];
	for (const file of files) {
		if (SKIP.some((s) => file.startsWith(s))) continue;
		const src = readFileSync(file, 'utf8');
		// `<script>` і `<style>` — не шаблон: там кирилиця це коментарі й ключі.
		const template = src
			.replace(/<script[\s\S]*?<\/script>/g, (m) => m.replace(/[^\n]/g, ' '))
			.replace(/<style[\s\S]*?<\/style>/g, (m) => m.replace(/[^\n]/g, ' '))
			.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));

		for (const m of template.matchAll(TEXT_NODE)) {
			const text = m[1].trim();
			if (!text || !CYRILLIC.test(text)) continue;
			out.push({
				file,
				line: template.slice(0, m.index).split('\n').length,
				text: text.slice(0, 50)
			});
		}
	}
	return out;
}

describe('перевірка жива', () => {
	it('компоненти знайдено', () => {
		expect(svelteFiles(ROOT).length, 'жодного .svelte — перевірка завжди зелена').toBeGreaterThan(
			50
		);
	});

	it('текстові вузли справді виловлюються', () => {
		// Канарка на розбір: зламаний розбір дає нуль порушень, тобто виглядає
		// як чистий проєкт. Тимчасовий файл не потрібен — перевіряється сама
		// функція на синтетичному вводі.
		const sample = '<h2>Досягнення</h2>';
		expect([...sample.matchAll(TEXT_NODE)].some((m) => CYRILLIC.test(m[1]))).toBe(true);
		const viaKey = '<h2>{$t("rewards.achievementsTitle")}</h2>';
		expect([...viaKey.matchAll(TEXT_NODE)].some((m) => CYRILLIC.test(m[1]))).toBe(false);
	});
});

describe('I18N-v8 § 2', () => {
	it('у шаблонах немає тексту для гравця поза словником', () => {
		const hits = findHardcoded(svelteFiles(ROOT));
		const report = hits.map((h) => `${h.file}:${h.line} → «${h.text}»`);
		expect(report, 'текст у розмітці лишиться українським у всіх чотирьох мовах').toEqual([]);
	});
});
