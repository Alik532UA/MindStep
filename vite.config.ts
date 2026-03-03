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
	background_color: '#1a1a1a',
	theme_color: '#1a1a1a',
	lang: 'uk',
	icons: [
		{
			src: base === '/' ? '/icon-192.png' : base + '/icon-192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			src: base === '/' ? '/icon-512.png' : base + '/icon-512.png',
			sizes: '512x512',
			type: 'image/png'
		},
		{
			src: base === '/' ? '/icon-512.png' : base + '/icon-512.png',
			sizes: '512x512',
			type: 'image/png',
			purpose: 'maskable'
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
				injectRegister: false, // SvelteKit краще справляється сам або через компонент
				workbox: {
					clientsClaim: true,
					skipWaiting: false,
					cleanupOutdatedCaches: true,
					globPatterns: isDev
						? [] 
						: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
					globIgnores: ['**/index.html', '**/_app/**'], // Ігноруємо внутрішні файли SvelteKit
					navigateFallback: isDev ? null : (base === '/' ? 'index.html' : `${base}/index.html`),
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
		resolve: {
			// Допомагаємо Vite 7 знайти внутрішні аліаси SvelteKit, якщо вони "втікають" у плагіни
			alias: {
				'__sveltekit': '/.svelte-kit/runtime'
			}
		},
		build: {
			sourcemap: true,
		},
		test: {
			include: ['tests/**/*.test.ts']
		}
	};
});
