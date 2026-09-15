import { describe, expect, it, vi, beforeEach } from 'vitest';

let mockDev = true;

vi.mock('$app/environment', () => ({
	get dev() {
		return mockDev;
	}
}));

describe('MindStep analytics guards (ANALYTICS-v9 § 5.1)', () => {
	let mockDataLayer: unknown[] = [];

	beforeEach(() => {
		vi.resetModules();
		mockDev = true;
		mockDataLayer = [];

		vi.stubGlobal('window', {
			location: { hostname: 'localhost', origin: 'http://localhost:5373', pathname: '/' },
			get dataLayer() {
				return mockDataLayer;
			},
			set dataLayer(val) {
				mockDataLayer = val;
			}
		});

		vi.stubGlobal('navigator', {
			webdriver: false
		});

		vi.stubGlobal('document', {
			createElement: vi.fn(() => ({})),
			head: {
				appendChild: vi.fn()
			}
		});
	});

	it('мовчить у dev-режимі', async () => {
		mockDev = true;
		const { track, trackPageView, initAnalytics } = await import('./analyticsService');
		initAnalytics();
		track('game_start');
		trackPageView();

		expect(mockDataLayer).toHaveLength(0);
	});

	it('мовчить на localhost навіть при dev: false (preview/локальні тести)', async () => {
		mockDev = false;
		vi.stubGlobal('window', {
			location: { hostname: 'localhost', origin: 'http://localhost:5373', pathname: '/' },
			dataLayer: mockDataLayer
		});

		const { track, trackPageView, initAnalytics } = await import('./analyticsService');
		initAnalytics();
		track('game_start');
		trackPageView();

		expect(mockDataLayer).toHaveLength(0);
	});

	it('мовчить при navigator.webdriver: true навіть на робочому домені', async () => {
		mockDev = false;
		vi.stubGlobal('window', {
			location: { hostname: 'mindstep.com', origin: 'https://mindstep.com', pathname: '/' },
			dataLayer: mockDataLayer
		});
		vi.stubGlobal('navigator', {
			webdriver: true
		});

		const { track, trackPageView, initAnalytics } = await import('./analyticsService');
		initAnalytics();
		track('game_start');
		trackPageView();

		expect(mockDataLayer).toHaveLength(0);
	});

	it('працює у продакшені (не dev, не localhost, не webdriver)', async () => {
		mockDev = false;
		vi.stubGlobal('window', {
			location: { hostname: 'mindstep.com', origin: 'https://mindstep.com', pathname: '/' },
			get dataLayer() {
				return mockDataLayer;
			},
			set dataLayer(val) {
				mockDataLayer = val;
			}
		});
		vi.stubGlobal('navigator', {
			webdriver: false
		});

		const { trackPageView, initAnalytics } = await import('./analyticsService');
		initAnalytics();
		trackPageView();

		expect(mockDataLayer.length).toBeGreaterThan(0);
	});
});
