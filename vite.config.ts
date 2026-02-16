import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA, type ManifestOptions, type Display } from 'vite-plugin-pwa';

// ВАЖЛИВО: у vite.config.ts треба використовувати process.env
const base = process.env.VITE_BASE_PATH || '/';

const manifest: Partial<ManifestOptions> = {
	name: 'MindStep',
	short_name: 'MindStep',
	description: 'Стратегічна гра на витривалість та просторову уяву',
	scope: base,
	start_url: base,
	display: 'standalone' as Display,
	background_color: '#222',
	theme_color: '#222',
	lang: 'uk',
	icons: [
		{
			src: base === '/' ? '/favicon-32px.ico' : base + '/favicon-32px.ico',
			sizes: '32x32',
			type: 'image/x-icon'
		},
		{
			src: base === '/' ? '/favicon.svg' : base + '/favicon.svg',
			sizes: 'any',
			type: 'image/svg+xml'
		}
	]
};

export default defineConfig(({ mode }) => {
	const isDev = mode === 'development';

	return {
		base,
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
				registerType: 'prompt',
				manifest,
				workbox: {
					clientsClaim: true,
					skipWaiting: false,
					cleanupOutdatedCaches: true,
					// У dev режимі ми не хочемо прекешувати нічого, бо це створює помилки для віртуальних файлів SvelteKit
					globPatterns: isDev
						? [] 
						: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
					globIgnores: ['**/index.html'],
					navigateFallback: isDev ? null : (base === '/' ? 'index.html' : `${base}/index.html`),
					navigateFallbackDenylist: [/^\/version\.json$/],
					dontCacheBustURLsMatching: /-[a-f0-9]{8}\./,
				},
				devOptions: {
					enabled: false, // Вимикаємо SW у dev за замовчуванням
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
