import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA, type ManifestOptions, type Display } from 'vite-plugin-pwa';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

// ВАЖЛИВО: у vite.config.ts треба використовувати process.env
// Синхронізуємо з svelte.config.js: для prod використовуємо /MindStep
const isProd = process.env.NODE_ENV === 'production';
const base = process.env.BASE_PATH || (isProd ? '/MindStep' : '/');

const manifest: Partial<ManifestOptions> = {
	name: 'MindStep',
	short_name: 'MindStep',
	description: 'Стратегічна гра на витривалість та просторову уяву',
	id: base.endsWith('/') ? base : `${base}/`, // Унікальний ідентифікатор додатка
	scope: base.endsWith('/') ? base : `${base}/`,
	start_url: base.endsWith('/') ? base : `${base}/`,
	display: 'standalone' as Display,
	background_color: '#1a1a1a',
	theme_color: '#1a1a1a',
	lang: 'uk',
	icons: [
		{
			src: 'icon-192.png',
			sizes: '192x192',
			type: 'image/png',
			purpose: 'maskable' // Тільки для іконки на робочому столі (адаптивна)
		},
		{
			src: 'icon-512.png',
			sizes: '512x512',
			type: 'image/png',
			purpose: 'any' // Найкращий вибір для Splash Screen
		}
	]
};

export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	return {
		base,
		define: {
			__APP_VERSION__: JSON.stringify(pkg.version),
		},
		plugins: [
			sveltekit(),
			visualizer({
				filename: 'bundle-stats.html',
				template: 'treemap',
				open: false,
				sourcemap: true
			}),
			VitePWA({
				filename: 'service-worker.js',
				/*
				 * `prompt`, а не `autoUpdate` (VERSIONING-v9 § 4.4, § 4.5
				 * `VER-OPEN-TAB-SURVIVES`, HIGH).
				 *
				 * Тут стояло `autoUpdate` разом із `skipWaiting: true` і
				 * `clientsClaim: true`. Обидва прапорці означають одне: новий
				 * воркер не чекає, а забирає ВЖЕ ВІДКРИТУ вкладку під себе.
				 * Далі `cleanupOutdatedCaches` прибирає з передкешу старі
				 * чанки, і сторінка, яка тримає їхні адреси, отримує 404 на
				 * перший же перехід. SvelteKit це витягує повним
				 * перезавантаженням (`native_navigation` після
				 * `updated.check()`), тобто екран не білий — але партія,
				 * налаштування й позиція в грі зникають без жодного запитання.
				 *
				 * Друге, гірше: `ReloadPrompt.svelte` змонтований у
				 * `+layout.svelte` і показує пропозицію «оновитися» по
				 * `needRefresh`. При `skipWaiting` воркер НЕ чекає ніколи, тож
				 * `needRefresh` не ставало `true` жодного разу — тобто готовий
				 * UI із двома кнопками був мертвим кодом, а рішення про
				 * оновлення ухвалював воркер.
				 *
				 * Тепер новий воркер стоїть у `waiting`, людина бачить
				 * пропозицію, і `updateServiceWorker(true)` застосовує її
				 * повним перезавантаженням — коли вона сама цього захоче.
				 *
				 * Інваріант, що тримає це: `src/stale-build.test.ts` (джерела)
				 * і `scripts/check-build.mjs` (зібраний `service-worker.js` —
				 * доказ, що генератор справді не вставив `skipWaiting()`).
				 */
				registerType: 'prompt',
				manifest,
				injectRegister: false,
				workbox: {
					cleanupOutdatedCaches: true,
					globPatterns: isDev
						? [] 
						: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
					// navigateFallback має бути відносним до base або повним шляхом.
					//
					// Файл — ТОЙ САМИЙ, що й `fallback` у `svelte.config.js`: офлайн
					// воркер мусить віддавати рівно ту оболонку, яку віддав би сервер.
					// Доки тут стояв `index.html`, це збігалося випадково — бо той же
					// `index.html` був і фолбеком адаптера.
					navigateFallback: isDev ? null : `${base}/404.html`.replace(/\/+/g, '/'),
					navigateFallbackDenylist: [/^\/version\.json$/],
					dontCacheBustURLsMatching: /-[a-f0-9]{8}\./,
				},
				devOptions: {
					enabled: false,
					suppressWarnings: true,
					type: 'module',
				}
			})
		],
		build: {
			sourcemap: true,
		},
		test: {
			// І `.spec.ts`, і `.test.ts`: конвенція проєкту — `.spec.ts`, але
			// файл із «неправильним» суфіксом раніше просто не запускався, і
			// це нічим не було видно — vitest звітував успіх, не подивившись
			// на нього (AI-AGENT-PITFALLS-v8 § 1).
			include: ['src/**/*.{spec,test}.ts']
		}
	};
});
