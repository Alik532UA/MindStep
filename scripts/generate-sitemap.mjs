import { writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

/**
 * Генератор карти сайту sitemap.xml для MindStep (SEO-v8 § 5).
 *
 * Формує sitemap лише для публічних індексованих сторінок, без технічних,
 * бета-маршрутів та службових станів гри (як /join, /waiting, /beta-test-checklists),
 * які закриті у robots.txt.
 */
const SITE_ORIGIN = 'https://alik532ua.github.io';
const BASE_PATH = '/MindStep';

const PUBLIC_ENTRIES = [
	'/',
	'/rules',
	'/controls',
	'/rewards',
	'/supporters',
	'/settings',
	'/local-setup',
	'/online'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_ENTRIES.map(
	(route) => `  <url>
    <loc>${SITE_ORIGIN}${BASE_PATH}${route === '/' ? '/' : route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
).join('\n')}
</urlset>
`;

const staticPath = resolve('static/sitemap.xml');
writeFileSync(staticPath, sitemap.trim() + '\n', 'utf8');

const buildDir = resolve('build');
if (existsSync(buildDir)) {
	writeFileSync(join(buildDir, 'sitemap.xml'), sitemap.trim() + '\n', 'utf8');
}

console.log('MindStep: sitemap.xml generated successfully.');
