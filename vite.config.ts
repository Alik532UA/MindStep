import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA, type ManifestOptions, type Display } from 'vite-plugin-pwa';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

// ВАЖЛИВО: у vite.config.ts треба використовувати process.env
// Синхронізуємо з svelte.config.js: для prod використовуємо /MindStep
const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? '/MindStep' : '/';

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
				registerType: 'autoUpdate',
				manifest,
				injectRegister: false,
				workbox: {
					clientsClaim: true,
					skipWaiting: true,
					cleanupOutdatedCaches: true,
					globPatterns: isDev
						? [] 
						: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
					// navigateFallback має бути відносним до base або повним шляхом
					navigateFallback: isDev ? null : `${base}/index.html`.replace(/\/+/g, '/'),
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
			include: ['tests/**/*.test.ts']
		}
	};
});
