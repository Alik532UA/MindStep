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
import { gzipSync } from "node:zlib";
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
   * SEO-v9 § 4.4 (`SEO-HEAD-SINGLE-OWNER`, HIGH) — у кожного мета-тега один
   * власник.
   *
   * `<svelte:head>` ДОПИСУЄ до `<head>`, а не заміщує в ньому. В
   * `adoptananimal` це коштувало двохсот сторінок із логотипом замість
   * фотографії: макет ставив `og:image`, сторінка ставила свій, у документі
   * опинялися два теги — і який візьме краулер, не вирішує ніхто.
   *
   * Перевіряються всі теги, які мусять бути одинарними, а не лише `canonical`
   * вище. Другий шар — над джерелами (`src/ui-conventions.spec.ts`): SSR тут
   * вимкнений, тож у `build/` немає нічого зі `<svelte:head>`, і дубль,
   * зроблений сторінкою поверх `app.html`, видно ЛИШЕ там.
   *
   * Зворотний експеримент: подвоїти `<meta name="robots">` у копії `build/` —
   * падає саме цей рядок із назвою тега й кількістю.
   */
  const SINGLE_OWNER = [
    "robots",
    "description",
    "og:title",
    "og:description",
    "og:image",
    "og:url",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ];
  for (const tag of SINGLE_OWNER) {
    const count = (
      html.match(
        new RegExp(`<meta[^>]+(?:name|property)="${tag.replace(":", "\\:")}"`, "g"),
      ) ?? []
    ).length;
    if (count > 1) {
      fail(name, `<meta … "${tag}"> знайдено ${count} разів — два власники одного тега`);
    }
  }

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

/*
 * Бюджет критичного шляху: КОД і ДАНІ окремими числами
 * (PERFORMANCE-v8 § 1.1 `PERF-BUDGET-CODE-VS-DATA`, § 10.1, `GATE-BUNDLE-BUDGET`).
 *
 * ЧОГО БРАКУВАЛО. Бюджету не було зовсім — ні тут, ні в `lighthouserc.cjs`.
 * § 1 пакета ставить стелю «initial JS ≤ 150 КБ gzip», але поки її ніхто не
 * міряє, вона нічим не відрізняється від відсутньої: важка бібліотека потрапляє
 * в головний бандл не рішенням, а поступово, і кожен окремий крок виглядає
 * дешевим.
 *
 * ЧОМУ ДВА ЧИСЛА, А НЕ ОДНЕ. § 1.1 — правило ревізії 8.12: одне сумарне число
 * рахує разом із кодом і ДАНІ, що їдуть у бандл модулем, і тоді поріг червоніє
 * від доданого контенту, а не від доданого коду. У цьому проєкті дані — це
 * словники i18n: чотири мови, і кожна важить як половина критичного шляху.
 * Сьогодні їх там немає (`svelte-i18n` реєструє їх лінивими імпортами), і
 * перевірка нижче це ДОВОДИТЬ, а не припускає: статичний `import` словника в
 * кореневий layout заштовхав би ~15 КБ gzip чистого тексту в перший кадр, і
 * жодна наявна перевірка цього не побачила б.
 *
 * ЧОМУ ПОРІГ ІЗ ЗАПАСОМ ~10 %, А НЕ 60 %. Бюджет із запасом у півтора раза не
 * ловить нічого, крім катастрофи, — а тоді він і не потрібен. Числа заміряні на
 * цій збірці; піднімати їх можна лише разом із причиною в тілі коміту.
 *
 * ЧОМУ JS І CSS ОКРЕМО. Одне число сховало б, ЩО саме виросло, а лікуються вони
 * протилежно: JS — розділенням чанків, CSS — прибиранням дубльованих правил.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1) описаний біля кожної з
 * трьох канарок нижче.
 */
{
  const entryPath = join(BUILD, "index.html");
  const entryHtml = existsSync(entryPath)
    ? readFileSync(entryPath, "utf8")
    : "";

  /*
   * Критичний шлях — рівно те, на що посилається початковий HTML: `<script>`,
   * `modulepreload` і `<link rel="stylesheet">`. Адреси беруться від `/_app/`,
   * а не від `base`: у `dev` він порожній, у збірці `/MindStep`, і зашитий
   * префікс дав би нуль знахідок саме тоді, коли префікс змінять.
   */
  const critical = [
    ...new Set(
      [...entryHtml.matchAll(/(?:href|src)="([^"]+)"/g)]
        .map((m) => m[1])
        .filter((p) => p.includes("/_app/"))
        .map((p) => p.slice(p.indexOf("/_app/") + 1)),
    ),
  ]
    .map((rel) => join(BUILD, rel))
    .filter((file) => existsSync(file));

  const js = critical.filter((f) => f.endsWith(".js"));
  const css = critical.filter((f) => f.endsWith(".css"));

  const gzipKb = (files) =>
    files.reduce((sum, f) => sum + gzipSync(readFileSync(f)).length, 0) / 1024;

  /*
   * Маркер реєстру — рядок, що зустрічається ЛИШЕ в ньому. § 10.1 називає й
   * причину: без перевірки на існування зникнення маркера з бандла читалося б
   * як «даних не стало», тобто винесення словників у окремий чанк тихо
   * звільнило б увесь бюджет. Тут зникнення маркера — це помилка гейта.
   */
  const DATA_MARKERS = [
    {
      marker: "Чому фігура одна? Де фігура комп'ютера?",
      what: "словник uk (src/lib/i18n/uk/faq.ts)",
    },
    {
      marker: "Why is there only one piece? Where is the computer's piece?",
      what: "словник en (src/lib/i18n/en/faq.ts)",
    },
  ];

  const bundleJs = [];
  {
    const stack = [join(BUILD, "_app")];
    while (stack.length > 0) {
      const dir = stack.pop();
      if (!existsSync(dir)) continue;
      for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) stack.push(full);
        else if (entry.endsWith(".js")) bundleJs.push(full);
      }
    }
  }

  const dataChunks = new Set();
  for (const { marker, what } of DATA_MARKERS) {
    const carriers = bundleJs.filter((f) =>
      readFileSync(f, "utf8").includes(marker),
    );
    // Перша канарка: маркер зник із бандла — перевірка мертва, а не «даних
    // немає». Зворотний експеримент: змінити рядок у словнику, не змінивши
    // маркер, — гейт падає з цим повідомленням, а не мовчить.
    if (carriers.length === 0) {
      fail(
        "bundle",
        `маркер реєстру не знайдений у бандлі («${what}») — перевірка бюджету даних мертва`,
      );
      continue;
    }
    for (const carrier of carriers) {
      if (critical.includes(carrier)) dataChunks.add(carrier);
    }
  }

  const dataKb = gzipKb([...dataChunks]);
  const jsKb = gzipKb(js);
  const cssKb = gzipKb(css);
  const codeKb = jsKb - dataKb;

  /*
   * Стелі. `CODE` — на код критичного шляху без даних; `DATA` просторіша
   * навмисно (§ 1.1: подвоєння контенту має бути ВИДНО, а не заблоковано), але
   * сьогодні дані на критичний шлях не потрапляють зовсім, тож будь-яке
   * ненульове число тут — новина.
   */
  const CODE_BUDGET_KB = 118;
  const CSS_BUDGET_KB = 23;
  const DATA_BUDGET_KB = 8;

  // Друга канарка: нуль файлів критичного шляху означає, що розбір HTML не
  // спрацював, а не що бандл невагомий.
  if (js.length === 0 || css.length === 0) {
    fail(
      "bundle",
      `критичний шлях розібрано неповністю: ${js.length} .js і ${css.length} .css — бюджет нічим міряти`,
    );
  } else {
    console.log(
      `check-build: критичний шлях — код ${codeKb.toFixed(1)} КБ gzip ` +
        `(бюджет ${CODE_BUDGET_KB}) · CSS ${cssKb.toFixed(1)} КБ (бюджет ${CSS_BUDGET_KB}) · ` +
        `дані ${dataKb.toFixed(1)} КБ (стеля ${DATA_BUDGET_KB}), файлів ${js.length} + ${css.length}`,
    );
    if (codeKb > CODE_BUDGET_KB) {
      fail(
        "bundle",
        `код критичного шляху ${codeKb.toFixed(1)} КБ gzip проти бюджету ${CODE_BUDGET_KB}`,
      );
    }
    if (cssKb > CSS_BUDGET_KB) {
      fail(
        "bundle",
        `CSS критичного шляху ${cssKb.toFixed(1)} КБ gzip проти бюджету ${CSS_BUDGET_KB}`,
      );
    }
    if (dataKb > DATA_BUDGET_KB) {
      fail(
        "bundle",
        `словники i18n доїхали в перший кадр: ${dataKb.toFixed(1)} КБ gzip у ` +
          `${dataChunks.size} чанках. Це контент, а не код — його місце в лінивому імпорті`,
      );
    }
  }

  /*
   * Третя канарка, і вона ж — умова застосовності § 1.1. Реєстрів-файлів
   * (`*.data.json`, `*.index.json`) у проєкті немає, тому дані рахуються за
   * маркерами словників. Щойно такий файл з'явиться, поділ доведеться робити за
   * ним — і гейт про це скаже, а не порахує контент як код.
   */
  {
    const registries = [];
    const stack = ["src"];
    while (stack.length > 0) {
      const dir = stack.pop();
      if (!existsSync(dir)) continue;
      for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) stack.push(full);
        else if (/\.(data|index)\.json$/.test(entry)) registries.push(norm(full));
      }
    }
    if (registries.length > 0) {
      fail(
        "bundle",
        `у проєкті з'явилися реєстри даних (${registries.join(", ")}) — ` +
          "поділ бюджету код/дані має рахувати їх окремим числом (PERFORMANCE-v8 § 10.1)",
      );
    }
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

/*
 * Секрети в бандлі (SECURITY-v8 § 16, [static]).
 *
 * ## Чому це окрема перевірка, а не «ми ж не кладемо секретів»
 *
 * У static-профілі КОЖЕН рядок клієнтського коду публічний, і межі між
 * «конфіг» та «секрет» у Vite немає: усе, що починається на `VITE_`,
 * підставляється в бандл дослівно. Різницю робить лише людина, яка називає
 * змінну, — а помиляється вона рівно раз, і мовчки: збірка проходить, сайт
 * працює, ключ лежить у `_app/immutable/*.js` відкритим текстом.
 *
 * Тут це не гіпотеза, а форма ризику: проєкт уже передає в збірку сім
 * `VITE_FIREBASE_*` із секретів GitHub. Шість із них публічні за призначенням
 * (SECURITY-v8 § 8.2 називає цей випадок прямо: `apiKey` Firebase — ідентифікатор
 * проєкту, а не пароль; захист дають правила доступу до бази). Сьомий такий
 * самий. Але наступна змінна поруч може бути іншою — і сусідство з ними робить
 * її появу непомітною.
 *
 * ## Що саме шукається
 *
 * Імена, які позначають приватний матеріал за самою назвою, і PEM-заголовок
 * приватного ключа. Не «щось схоже на ключ»: евристика за ентропією дала б
 * хибні спрацювання на кожному хеші Vite, а шумну перевірку вимикають
 * (CODE-QUALITY-v8 § 6.4.1).
 *
 * Перевіряються `.js`, `.json` і `.html` у `build/` — тобто саме те, що
 * віддається браузеру.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): дописати в будь-який
 * файл `build/` рядок `const SERVICE_ACCOUNT = "x"` — гейт називає файл.
 */
{
  const SECRET_PATTERNS = [
    /API_SECRET/,
    /PRIVATE_KEY/,
    /SERVICE_ACCOUNT/,
    /CLIENT_SECRET/,
    /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
  ];
  const SCANNED = /\.(js|json|html)$/;

  function bundleFiles(dir, out = []) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) bundleFiles(full, out);
      else if (SCANNED.test(entry)) out.push(norm(full));
    }
    return out;
  }

  const files = bundleFiles(BUILD);

  // Канарка: нуль просканованих файлів дав би «секретів немає» на порожньому
  // каталозі. Межа низька навмисно — вона називає порожнечу, а не рахує норму.
  if (files.length < 5) {
    fail(
      "bundle",
      `просканованих файлів ${files.length} — перевірку секретів нічим виконати`,
    );
  }

  for (const file of files) {
    const source = readFileSync(file, "utf8");
    for (const pattern of SECRET_PATTERNS) {
      if (pattern.test(source)) {
        fail(file, `у бандлі знайдено ${pattern.source} — це публічний текст`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// OBSERVABILITY-v9 § 2.2.1 (`OBS-LHCI-REAL-PAGES`, MEDIUM) — сторінка, яку
// міряє Lighthouse, справді завантажує свої CSS і JS.
//
// ## Що ламалося
//
// Докблок `lighthouserc.cjs` описує це докладно: SvelteKit пише в
// SPA-фолбеку АБСОЛЮТНІ шляхи (`/MindStep/_app/…`), а `staticDistDir` віддає
// `build/` із кореня сервера. Тоді кожен стиль і кожен чанк — 404, Chrome не
// малює нічого, і Lighthouse падає з `NO_FCP`. У сусідньому `adoptananimal`,
// де сторінки пререндеряться й тіло в них є, той самий стан дав ще гірше: сім
// сторінок отримали 100 балів, бо без CSS немає що зсувати.
//
// ## Чому перевірка тут, а не асерцією LHCI
//
// Очевидна канарка — `resource-summary:stylesheet:count` із `minNumericValue`.
// Заміряно 2026-09-10: у цьому профілі вона не працює. З `build/index.html`
// прибрано всі одинадцять `<link rel="stylesheet">`, зібрано заново —
// Lighthouse нарахував ШІСТНАДЦЯТЬ стилів і асерція лишилася зеленою: CSS
// тягне клієнтський завантажувач через JS. Канарка, яка не червоніє від свого
// ж дефекту, гірша за відсутню.
//
// Тому перевіряється те саме твердження над артефактом: кожна адреса, яку
// просить документ, існує ВІД ТІЄЇ ТОЧКИ МОНТУВАННЯ, з якої її попросять.
// Префікс читається з самого артефакту (`assets:`), як і в `lighthouserc.cjs`,
// — другого джерела того самого значення тут немає навмисно.
//
// Зворотний експеримент: підмінити хеш в одному `href` у `build/index.html` —
// падає саме цей рядок із адресою.
{
  const shell = join(BUILD, "index.html");
  if (!existsSync(shell)) {
    fail("index.html", "немає SPA-фолбека — перевіряти нема чого");
  } else {
    const html = readFileSync(shell, "utf8");
    const declared = /assets:\s*"([^"]*)"/.exec(html);
    const linked = /(?:href|src)="(\/[^"/][^"]*)\/_app\//.exec(html);
    const mount = ((declared && declared[1]) || (linked && linked[1]) || "").replace(
      /^\/+|\/+$/g,
      "",
    );

    // Усі адреси `_app/`, які документ просить абсолютним шляхом.
    const asked = [
      ...new Set(
        [...html.matchAll(/(?:href|src)="(\/[^"]*\/_app\/[^"]+)"/g)].map((m) => m[1]),
      ),
    ];

    // Канарка на саму вибірку: документ без жодного `_app/` означає, що розбір
    // дивиться не туди, а не що сторінка нічого не просить.
    if (asked.length === 0) {
      fail(
        "index.html",
        "у документі немає жодної адреси `_app/` — розбір застарів, і перевірка нижче порожня",
      );
    }

    const prefix = mount ? `/${mount}/` : "/";
    for (const url of asked) {
      if (!url.startsWith(prefix)) {
        fail(
          "index.html",
          `${url} не починається з точки монтування «${prefix}» — з неї це буде 404`,
        );
        continue;
      }
      const onDisk = join(BUILD, url.slice(prefix.length));
      if (!existsSync(onDisk)) {
        fail("index.html", `${url} просять, а ${norm(onDisk)} немає — 404 замість стилю чи чанка`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// VERSIONING-v9 § 4.5 (`VER-OPEN-TAB-SURVIVES`, HIGH) — service worker не
// забирає відкриту вкладку.
//
// `src/stale-build.test.ts` тримає це у КОНФІГУ (`vite.config.ts`), і цього
// мало: `skipWaiting()` у воркер вставляє генератор, а генератор читає ще й
// власні типові значення й `injectManifest`-режим. Тобто конфіг може бути
// чистим, а артефакт — ні; судити треба по тому, що поїде на хостинг
// (AI-AGENT-PITFALLS § 2).
//
// Зворотний експеримент: повернути `skipWaiting: true` у `vite.config.ts` і
// перезібрати — падає саме цей рядок, із назвою прапорця.
{
  const worker = join(BUILD, "service-worker.js");
  if (!existsSync(worker)) {
    fail(
      "service-worker.js",
      `${norm(worker)} не згенерований — або PWA вимкнено, або перевірка дивиться не туди`,
    );
  } else {
    const source = readFileSync(worker, "utf8");

    /*
     * `skipWaiting()` САМ ПО СОБІ не є порушенням, і це найтонше місце
     * перевірки. У режимі `prompt` плагін вставляє у воркер обробник
     *
     *     self.addEventListener("message", e => {
     *       e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
     *     })
     *
     * — тобто воркер чекає, доки сторінка не попросить, а просить її людина
     * кнопкою в `ReloadPrompt`. Це рівно те, чого вимагає § 4.4.
     *
     * Заборонений безумовний виклик: `skipWaiting()` у тілі воркера або в
     * обробнику `install`. Тому обробник повідомлення вирізається, і лише
     * після цього шукається виклик. Канарка нижче стежить, щоб вирізання не
     * з'їло весь файл разом із перевіркою.
     */
    const ON_MESSAGE = /self\.addEventListener\(\s*["']message["'][\s\S]{0,200}?skipWaiting\(\)\s*\}\s*\)/g;
    const unconditional = source.replace(ON_MESSAGE, "");
    if (unconditional.length < source.length * 0.5) {
      fail(
        "service-worker.js",
        "вирізання обробника SKIP_WAITING з'їло пів файлу — регулярка застаріла, перевірка нижче мертва",
      );
    }

    for (const [pattern, subject, why] of [
      [
        /\bskipWaiting\s*\(/,
        unconditional,
        "воркер не чекає й підмінює версію під відкритою сторінкою; " +
          "у режимі prompt виклик допустимий лише в обробнику повідомлення SKIP_WAITING",
      ],
      [/\bclientsClaim\s*\(/, source, "новий воркер забирає вкладки, що вже працюють"],
      [
        /\.addAll\s*\(/,
        source,
        "передкеш одним запитом: одна 404 валить установку воркера цілком",
      ],
    ]) {
      if (pattern.test(subject)) {
        fail("service-worker.js", `${pattern.source} у зібраному воркері — ${why}`);
      }
    }
  }
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
