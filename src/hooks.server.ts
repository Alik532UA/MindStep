import type { Handle } from '@sveltejs/kit';

/**
 * Серверний хук для prerender-збірки (SEO-v8 § 4.3, BETA-CHECKLIST-v8 § 4).
 *
 * У static-профілі цей хук виконується під час prerender (`npm run build`).
 * Видаляє `canonical` зі службових маршрутів (чеклисти бета-тестування, тестові панелі),
 * щоб уникнути суперечливих сигналів для пошуковиків (`noindex` + `canonical`).
 */
const HIDDEN_PREFIXES = [
	'/MindStep/beta-test-checklists',
	'/beta-test-checklists',
	'/MindStep/test',
	'/test',
	'/test-error',
	'/test-main-menu-v2'
];

export const handle: Handle = async ({ event, resolve }) => {
	const isHidden = HIDDEN_PREFIXES.some(
		(prefix) => event.url.pathname === prefix || event.url.pathname.startsWith(`${prefix}/`)
	);

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			if (isHidden) {
				return html.replace(/\s*<link rel="canonical"[^>]*>/g, '');
			}
			return html;
		}
	});
};
