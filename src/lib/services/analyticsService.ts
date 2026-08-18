import { dev } from "$app/environment";

/**
 * Google Analytics 4.
 *
 * The measurement ID sits here rather than in an environment variable: it is
 * public by design — it ships in the page source of every site that uses GA —
 * so hiding it would buy nothing, while a missing CI variable would switch
 * analytics off silently.
 *
 * Replacing the ID with a placeholder turns every export here into a no-op —
 * no script is loaded and nothing is sent — so the file can be carried into a
 * new project without it reporting into this property.
 */
const GA_ID = "G-CPGNM62XZW";

const isConfigured = /^G-[A-Z0-9]{6,}$/.test(GA_ID) && !GA_ID.includes("XXXX");

const isBrowser = typeof window !== "undefined";

// `dev` keeps local work from landing in the same property as real traffic.
const enabled = () => isBrowser && !dev && isConfigured;

type EventParams = Record<string, string | number | boolean>;

/**
 * Реєстр подій (ANALYTICS-v8 § 3.1).
 *
 * Назви подій були рядковими літералами в місцях виклику. GA4 приймає будь-який
 * рядок: `game_end`, `game-end` і `gameEnd` стають ТРЬОМА різними подіями, і
 * зрозуміти це можна лише згодом, коли в звіті замість одної метрики три
 * недорахованих. Опечатка тут не ламає нічого й не видна ніде — вона просто
 * тихо ділить дані.
 *
 * Реєстр — не документація, а тип: `track('game-end', …)` тепер не збирається.
 *
 * Кожен ключ несе призначення, бо подія без пояснення через півроку не
 * відрізняється від забутої.
 */
export const ANALYTICS_EVENTS = {
    /** Партія почалася. Парна до `game_end` — разом дають частку дограних. */
    game_start: 'game_start',
    /**
     * Партія завершилася. `reason` — ключ словника, а не показаний текст,
     * інакше звіт розділиться за мовою інтерфейсу.
     */
    game_end: 'game_end',
    /**
     * Перегляд сторінки. Надсилається вручну через `trackPageView()`:
     * автоматичний летить до того, як роутер устоявся, і не повторюється при
     * клієнтській навігації.
     */
    page_view: 'page_view'
} as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

let started = false;

export function initAnalytics() {
    if (!enabled() || started) return;
    started = true;

    const dataLayer = (window.dataLayer = window.dataLayer ?? []);
    window.gtag = function gtag() {
        // gtag.js reads the raw `arguments` object back off the queue, so this
        // cannot be an arrow function taking rest parameters.
        // eslint-disable-next-line prefer-rest-params
        dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    // Page views are sent by hand from the root layout: the automatic one fires
    // before the router has settled, and never fires again for the client-side
    // navigation that carries most of this app.
    window.gtag("config", GA_ID, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
}

export function trackPageView() {
    if (!enabled()) return;
    // afterNavigate can fire before onMount, so neither caller may assume the
    // other ran first. initAnalytics is idempotent, and gtag queues into
    // dataLayer until its script arrives.
    initAnalytics();
    const { origin, pathname } = window.location;
    // Modal state is carried in the query string (?mode=...), so keeping it in
    // page_location would turn every modal into its own row in the report.
    window.gtag?.("event", ANALYTICS_EVENTS.page_view, {
        page_location: `${origin}${pathname}`
    });
}

export function track(event: AnalyticsEvent, params: EventParams = {}) {
    if (!enabled()) return;
    initAnalytics();
    window.gtag?.("event", event, params);
}
