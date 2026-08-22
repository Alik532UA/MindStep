/**
 * Інваріанти над `build/` — SEO-v8 § 6.1 і SECURITY-v8 § 16.
 *
 * Це єдиний гейт проєкту, який бачить дефекти, невидимі в `src/`:
 * prerender виконується з іншим origin і відносним `base`, а CSP у
 * static-профілі приходить не заголовком, а `<meta>` — тобто зовсім не так,
 * як у `vite dev` (SECURITY-v8 § 6.4). «Код виглядає правильним» тут не є
 * результатом перевірки (AI-AGENT-PITFALLS-v8 § 2).
 *
 * Запускати після `npm run build`: `npm run check:build`.
 *
 * Зворотний експеримент, яким перевірено кожне правило (§ 1.1 тих самих
 * пасток), описаний біля самого правила.
 */
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { checkGeo } from "./check-geo.mjs";

// Каталог аргументом — щоб перевірку можна було прогнати зворотним
// експериментом над навмисно зіпсованою копією `build/`, не ламаючи справжню.
const BUILD = process.argv[2] ?? "build";
const SITE_ORIGIN = "https://alik532ua.github.io";

/**
 * `404.html` лежить у `static/` і копіюється як є: це не сторінка застосунку,
 * а редирект-заглушка GitHub Pages для невідомих адрес. Її не рендерить
 * SvelteKit, тож ні CSP, ні canonical, ні тіла з вмістом у ній не буває за
 * побудовою. Виняток названий тут, а не мовчить.
 */
const NOT_APP_PAGES = new Set(["404.html"]);

const norm = (p) => p.split("\\").join("/");

function htmlFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) htmlFiles(full, out);
    else if (entry.endsWith(".html")) out.push(norm(full));
  }
  return out;
}

const problems = [];
const fail = (file, message) => problems.push(`${file}: ${message}`);

if (!existsSync(BUILD)) {
  console.error(`Каталогу ${BUILD}/ немає — спершу \`npm run build\`.`);
  process.exit(1);
}

const pages = htmlFiles(BUILD);

// Канарка: без неї змінений вихідний каталог дав би нуль знахідок і зелений
// гейт — тобто перевірку, якої немає (AI-AGENT-PITFALLS-v8 § 1).
if (pages.length === 0) {
  console.error(`У ${BUILD}/ не знайдено жодного .html — перевіряти нема що.`);
  process.exit(1);
}

let checked = 0;

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const name = file.slice(BUILD.length + 1);
  if (NOT_APP_PAGES.has(name)) continue;
  checked += 1;

  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] ?? "";

  /*
   * SEO-v8 § 1.1 у формі, придатній для ЦЬОГО проєкту.
   *
   * `+layout.ts` вимикає SSR навмисно (застосунок односторінковий), тож
   * вимога «200 символів тексту в <body>» тут завжди хибна. Значуща
   * властивість інша: сторінка мусить принаймні ЗАПУСКАТИ застосунок.
   *
   * Саме це й зловила перевірка при написанні: `about.html` не мав ні
   * тексту, ні бутстрапа — `csr = dev` вимикав клієнт у продакшні, а
   * `ssr = false` вимикав сервер. Сторінка була в шапці посиланням і
   * віддавала порожній документ.
   */
  const hasBootstrap = /__sveltekit_/.test(body);
  const textLength = body
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim().length;
  if (!hasBootstrap && textLength < 200) {
    fail(
      name,
      `сторінка нічого не показує: ні вмісту (${textLength} символів), ні бутстрапа`,
    );
  }

  // SEO-v8 § 1.2 — під час prerender `page.url.origin` дорівнює цьому рядку.
  if (html.includes("sveltekit-prerender"))
    fail(name, "у HTML лишився sveltekit-prerender");

  // SEO-v8 § 1.3 — відносний `base` в абсолютній адресі дає `https://site./…`.
  if (/https?:\/\/[^"'\s]*\.\//.test(html))
    fail(name, 'абсолютний URL з "./" усередині');

  // SEO-v8 § 2.1
  const canonicals = html.match(/<link[^>]+rel="canonical"/g) ?? [];
  if (canonicals.length !== 1)
    fail(name, `canonical знайдено ${canonicals.length} разів`);
  else if (!html.includes(`rel="canonical" href="${SITE_ORIGIN}`))
    fail(name, "canonical не абсолютна або веде на чужий origin");

  // SEO-v8 § 4.1
  if (!/<title>[^<]{5,}<\/title>/.test(html))
    fail(name, "title відсутній або надто короткий");

  /*
   * SECURITY-v8 § 6.1, § 6.3, § 16.
   *
   * Політика в static-профілі приходить тегом `<meta>`, і перевіряти її
   * можна лише тут: у `dev` вона приходить заголовком із nonce, тобто
   * геть іншим механізмом, і «в dev працює» не доводить нічого.
   */
  const csp = html.match(
    /http-equiv="content-security-policy"\s+content="([^"]*)"/i,
  )?.[1];
  if (!csp) {
    fail(name, "немає CSP у зібраному HTML");
    continue;
  }

  const scriptSrc = csp.match(/script-src([^;]*)/)?.[1] ?? "";
  if (scriptSrc.includes("'unsafe-inline'"))
    fail(name, "script-src має 'unsafe-inline'");

  /*
   * Кожен інлайн-скрипт документа покритий хешем ІЗ ЦЬОГО Ж документа.
   *
   * Зворотний експеримент: прибрати `appHtmlHashes` зі `svelte.config.js` —
   * скрипт теми лишається в HTML, його хеша в політиці немає, перевірка
   * червоніє. Доти на це не вказувало ніщо: заблокований інлайн-скрипт не
   * ламає розкладку й не валить збірку, він лише не виконується
   * (AI-AGENT-PITFALLS-v8 § 2.1).
   */
  const inlineScripts = [
    ...html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g),
  ];
  for (const [, source] of inlineScripts) {
    // CRLF → LF, як робить парсер HTML перед тим, як браузер порахує хеш.
    // Без цього рядка перевірка повторює ту саму помилку, що й конфіг, і
    // вони сходяться на неправильному хеші — тобто гейт підтверджує
    // зламану політику (див. коментар у `svelte.config.js`).
    const hash = `sha256-${createHash("sha256").update(source.replace(/\r\n/g, "\n")).digest("base64")}`;
    if (!scriptSrc.includes(hash)) {
      fail(name, `інлайн-скрипт не покритий політикою (потрібен '${hash}')`);
    }
  }
}

/*
 * Sitemap не має обіцяти індексувати те, чого немає або що закрито в robots.
 * Перевірка з'явилася після того, як `/about` жив у sitemap і віддавав
 * порожній документ (коміт 9d9dfa7e прибрав адресу, але не перевірку).
 */
const sitemapPath = join(BUILD, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const robots = existsSync(join(BUILD, "robots.txt"))
    ? readFileSync(join(BUILD, "robots.txt"), "utf8")
    : "";
  const disallowed = [...robots.matchAll(/^Disallow:\s*(\S+)/gm)].map(
    (m) => m[1],
  );
  for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = loc.replace(SITE_ORIGIN, "");
    if (disallowed.some((d) => path.startsWith(d))) {
      fail(
        "sitemap.xml",
        `${loc} закрита в robots.txt і водночас у карті сайту`,
      );
    }
  }
}

/*
 * Прихована сторінка чеклиста (BETA-CHECKLIST-v8 § 5.5) — і чому перевірка тут
 * НЕ така, як у каноні.
 *
 * Канон просить перевіряти зібраний HTML сторінки: `noindex` є, `canonical`
 * немає. Це передбачає, що в кожного маршруту свій файл. У цьому профілі його
 * немає ні в кого: `+layout.ts` вимикає SSR для всього застосунку, тож
 * `build/` містить рівно `index.html` (фолбек SPA) і `404.html`. Тег
 * `<meta name="robots">` зі `<svelte:head>` виставляє клієнт після гідрації —
 * у поданому HTML його немає, і жодна перевірка над `build/` цього не побачить.
 *
 * Тому обіцянка «сторінку не індексують» тут тримається на `robots.txt`, який
 * діє незалежно від того, чи виконує краулер JS. Саме це й перевіряється нижче.
 * Рантаймовий `noindex` — другий шар, і його бік перевіряє e2e: там же
 * перевіряється ПРОТИЛЕЖНЕ (що на грі цього тега немає), бо випадковий
 * `noindex` на грі вивів би її з індексу тихо.
 */
const HIDDEN_ROUTES = ["/MindStep/beta-test-checklists"];
const robotsPath = join(BUILD, "robots.txt");
if (!existsSync(robotsPath)) {
  fail("robots.txt", "файлу немає — приховані сторінки нічим не закриті");
} else {
  const robots = readFileSync(robotsPath, "utf8");
  const disallowed = [...robots.matchAll(/^Disallow:\s*(\S+)/gm)].map(
    (m) => m[1],
  );
  for (const route of HIDDEN_ROUTES) {
    if (!disallowed.some((d) => route.startsWith(d))) {
      fail(
        "robots.txt",
        `${route} не закрита Disallow — службова сторінка піде в індекс`,
      );
    }
  }
}

/*
 * SDK бази — не в критичному шляху (CLOUD-DATABASE-v8 § 10.2).
 *
 * ЧОМУ ПО `build/`, А НЕ ПО КОДУ. Пакет `firebase` статично імпортується в
 * `services/firebaseService.ts`, і формально це відхилення від § 10.2, який
 * просить `await import()`. Але сам § 10.2 називає справжню перевірку: «чанк із
 * SDK не має бути в `modulepreload` початкової сторінки». Vite ділить збірку по
 * маршрутах, і оскільки жоден із тринадцяти файлів, що торкаються SDK, не
 * доїжджає до кореневого layout, пакет лягає в окремий чанк онлайн-маршруту.
 *
 * Заміряно 2026-08-18: один чанк 738 КБ, у передзавантаженні початкової
 * сторінки — нуль. Тобто мета правила виконана, а форма — ні; ця перевірка й
 * робить різницю між «виконана» і «схоже, що виконана». Щойно якийсь сервіс із
 * SDK потрапить у кореневий шар, гейт впаде — і тоді ліниві імпорти стануть
 * обовʼязковими, а не косметичними.
 */
{
  const entryPath = join(BUILD, "index.html");
  const entryHtml = existsSync(entryPath)
    ? readFileSync(entryPath, "utf8")
    : "";
  const preloaded = new Set(
    [
      ...entryHtml.matchAll(/immutable\/(?:chunks|entry|nodes)\/[\w.-]+\.js/g),
    ].map((m) => m[0]),
  );
  let sdkChunks = 0;
  for (const rel of preloaded) {
    const file = join(BUILD, "_app", rel);
    if (!existsSync(file)) continue;
    if (readFileSync(file, "utf8").includes("FirebaseError")) {
      fail("bundle", `SDK бази в критичному шляху: ${rel}`);
      sdkChunks++;
    }
  }
  // Канарка: якщо передзавантажених файлів не знайшлося взагалі, перевірка
  // нічого не доводить — вона просто не мала на що дивитися.
  if (preloaded.size === 0) {
    fail(
      "bundle",
      "у початковій сторінці немає жодного modulepreload — перевірку SDK нічим виконати",
    );
  } else if (sdkChunks === 0) {
    console.log(
      `check-build: SDK бази поза критичним шляхом (${preloaded.size} передзавантажених файлів)`,
    );
  }
}

// Друга канарка, окрема від першої: `.html` у `build/` може бути багато, а
// перевіреними — нуль, якщо всі потраплять у виняток. Тоді гейт зелений і не
// доводить нічого (AI-AGENT-PITFALLS-v8 § 1).
if (checked === 0) {
  console.error(
    `Жодної сторінки застосунку в ${BUILD}/ — усі ${pages.length} потрапили у винятки.`,
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// SEO-v8 § 7.5 — артефакти AI-пошуку (llms.txt і групи robots.txt).
//
// Розбір живе в `check-geo`, бо він робить власний парсер `robots.txt`:
// краулер, що збігся з іменованою групою, ігнорує `User-agent: *` цілком, тож
// пропущений там `Disallow` не «наслідується», а ВІДКРИВАЄ шлях саме цьому
// боту. У кількох майже однакових блоках очима така дірка не видно.
for (const msg of checkGeo(BUILD)) problems.push(msg);

if (problems.length) {
  console.error(`Перевірка зібраного виводу не пройдена (${problems.length}):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `Перевірка зібраного виводу: перевірено ${checked} з ${pages.length} .html, зауважень немає.`,
);
