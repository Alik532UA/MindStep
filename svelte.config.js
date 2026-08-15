import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const basePath = process.env.BASE_PATH || (process.argv.includes('dev') ? '' : '/MindStep');

/**
 * Хеші власних інлайн-скриптів `app.html` (SECURITY-v8 § 6.3, § 16).
 *
 * Обчислюються з файлу під час збірки, а не вписуються рядком: вписаний рядок
 * розходиться зі скриптом при першій же правці й ламає сайт лише у збірці —
 * у `dev` політика приходить заголовком із nonce, тож там усе працює й далі.
 *
 * SvelteKit хешує лише ті інлайн-скрипти, які додає САМ. Скрипт із шаблона
 * (анти-FOUC для теми) до них не належить — доки в `script-src` стояло
 * 'unsafe-inline', його пропускало саме воно, і рівно тому SvelteKit не
 * додавав жодного хеша взагалі: побачивши 'unsafe-inline', він вважає, що
 * інлайн уже дозволений. У зібраному HTML не було жодного `sha256-`.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати виклик нижче й
 * зібрати — тема має мигнути, а консоль зібраного сайту сказати
 * «Refused to execute inline script».
 */
function inlineScriptHashes(templatePath) {
	const template = readFileSync(templatePath, 'utf8');
	// Лише інлайн: тег зі `src` не має вмісту, який можна захешувати.
	const inline = [...template.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)];
	return inline.map((m) => `sha256-${createHash('sha256').update(m[1]).digest('base64')}`);
}

const appHtmlHashes = inlineScriptHashes('src/app.html');

// /**
//  * Кастомний препроцесор для автоматичного додавання data-testid
//  */
// const autoDataTestId = {
// 	name: 'auto-data-testid',
// 	markup: ({ content, filename }) => {
// 		// Ігноруємо файли з node_modules та не .svelte файли
// 		if (!filename || filename.includes('node_modules')) return { code: content };

// 		// Регулярний вираз для пошуку тегів, які мають class, але НЕ мають data-testid
// 		// 1. <([a-z0-9-]+) -> початок тегу
// 		// 2. (?![^>]*\bdata-testid=) -> перевірка, що data-testid ще немає
// 		// 3. ([^>]*\bclass=["']([^"'\s]+)[^"']*["'][^>]*) -> захоплення класу (перше слово)
// 		const regex = /<([a-z0-9-]+)(?![^>]*\bdata-testid=)([^>]*\bclass=["']([^"'\s]+)[^"']*["'][^>]*)>/gi;

// 		const newContent = content.replace(regex, (match, tagName, rest, className) => {
// 			// Видаляємо динамічні прив'язки Svelte (наприклад, {active ? 'a' : 'b'}) з імені класу для ID
// 			if (className.includes('{') || className.includes('$')) {
// 				return match; // Пропускаємо складні динамічні класи
// 			}

// 			// Формуємо data-testid з назви класу
// 			const testId = className.trim();

// 			// Вставляємо data-testid перед закриттям тегу
// 			// Знаходимо позицію останнього > або />
// 			const closeIndex = match.lastIndexOf(match.endsWith('/>') ? '/' : '>');

// 			return `${match.slice(0, closeIndex)} data-testid="${testId}"${match.slice(closeIndex)}`;
// 		});

// 		return { code: newContent };
// 	}
// };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		// autoDataTestId // Додаємо наш препроцесор
	],

	kit: {
		// Використовується adapter-static для GitHub Pages
		adapter: adapter({
			fallback: 'index.html'
		}),
		prerender: {
			entries: ['*']
		},
		paths: {
			base: basePath
		},
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['self'],
				// 'unsafe-inline' тут заборонений (SECURITY-v8 § 6.1). Замість нього —
				// хеші власних інлайн-скриптів `app.html`; хеші того, що вставляє
				// сам SvelteKit, він тепер додає сам, бо більше не бачить
				// 'unsafe-inline' і не вважає інлайн уже дозволеним.
				'script-src': ['self', ...appHtmlHashes, 'https://*.googleapis.com', 'https://apis.google.com', 'https://*.firebaseapp.com', 'https://www.googletagmanager.com'],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'connect-src': ['self', 'http://localhost:*', 'ws://localhost:*', 'http://127.0.0.1:*', 'ws://127.0.0.1:*', 'https://*.googleapis.com', 'https://*.firebaseio.com', 'https://*.firebasedatabase.app', 'wss://*.firebasedatabase.app', 'https://*.google-analytics.com', 'https://stats.g.doubleclick.net'],
				'img-src': ['self', 'data:', 'http://localhost:*', 'http://127.0.0.1:*', 'https://*.google-analytics.com', 'https://www.google-analytics.com', 'https://www.google.com'],
				'object-src': ['none'],
				'base-uri': ['self'],
				'form-action': ['self']
			}
		}
	}
};

export default config;