/**
 * КОЖЕН ФАЙЛ ПЕРЕВІРКИ СПРАВДІ ЗАПУСКАЄТЬСЯ
 * (AI-AGENT-PITFALLS-v9 § 1.3, § 1.3.1 `PIT-TEST-DISCOVERY-PROCESS`, `GATE-TEST-RUNNERS`).
 *
 * ## Чому це ОКРЕМИЙ ПРОЦЕС, а не тест
 *
 * Логіка нижче жила в `src/test-runners.test.ts` — і це той рідкісний випадок,
 * коли перевірка не могла впасти на власному дефекті. Вона стежить за маскою
 * `test.include` у `vite.config.ts`; звуження маски до `src/**\/*.spec.ts`
 * викинуло б із прогону всі `.test.ts` — тобто разом із тими перевірками, які
 * мали це помітити, і в першу чергу саму себе.
 *
 * Підсумковий рядок vitest при цьому звітує успіх по тому, що лишилося, і
 * читається як «усе перевірено». Саме тому канон вимагає окремого процесу:
 * `npm run check:tests` не залежить ні від маски, ні від того, чи vitest узагалі
 * запустився.
 *
 * `src/test-runners.test.ts` лишається й імпортує `checkTestDiscovery()` —
 * реалізація одна, а прогонів два. Другий — той, що виживає.
 *
 * ## Пʼять класів, які тут ловляться
 *
 * 1. **Файл під раннером, якого в проєкті немає.** Приводом став
 *    `tests/tests-examples/demo-todo-app.spec.ts` — демо, яке лишає
 *    `npm init playwright`. Раннер є, але `testDir` — `./tests/e2e`, а файл
 *    лежить поруч, не всередині: його не запускає ніхто, і при цьому він
 *    рахується як тест у будь-якому переліку «що в нас перевіряється». Важчий
 *    випадок знайшовся в `DigitalWorkshop`: `tests/core.spec.ts` імпортував
 *    раннер, якого немає в залежностях узагалі.
 * 2. **Файл поза маскою `include`.** У цьому проєкті так уже було: маска стояла
 *    `src/**\/*.spec.ts`, конвенція — `.spec.ts`, і доданий `storage.test.ts`
 *    не запускався ЗОВСІМ.
 * 3. **`@ts-nocheck` у файлі перевірки** — вимикає останній гейт, який міг би
 *    помітити мертвий імпорт.
 * 4. **Файл поза типовою маскою Playwright.** Раннер типово бачить лише
 *    `*.spec.ts` і `*.test.ts`; `*.setup.ts` він запускає тільки тоді, коли
 *    якийсь проєкт назвав його у `testMatch`. Файл, який цього не отримав,
 *    лежить у `testDir`, читається як перевірка й не виконується ніде.
 *    Приводом став `tests/e2e/identity.setup.ts`, доданий 2026-09-11: перша
 *    версія цього сканера його не бачила ЗОВСІМ — він шукав рівно два суфікси.
 * 5. **Setup-проєкт, від якого ніхто не залежить.** Сенс такого проєкту — не
 *    «теж запуститися», а ЗУПИНИТИ решту прогону. Без згадки в
 *    `dependencies` іншого проєкту він виконується сам по собі, червоніє сам
 *    по собі, і решта тестів однаково йде далі — тобто гарантії, заради якої
 *    його писали, немає.
 *
 * ## Зворотний експеримент (§ 1.1) — прогнано
 *
 * Звузити маску до `*.spec.ts` → перелічуються всі `.test.ts`. Прибрати
 * `vitest` із `devDependencies` → перелічуються всі файли перевірок `src/`.
 * Прибрати `testMatch` у проєкта `identity` → названий сам файл; прибрати
 * `dependencies: ['identity']` у `chromium` → названий проєкт.
 *
 * Запуск: `npm run check:tests` (або `node scripts/check-test-discovery.mjs`).
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

/** Каталоги, у яких взагалі можуть лежати файли перевірок. */
const SEARCH_DIRS = ["src", "tests", "e2e"];

const RUNNERS = [
  {
    imports: "@playwright/test",
    dep: "@playwright/test",
    config: /^playwright\.config\./,
  },
  { imports: "vitest", dep: "vitest", config: /^vitest\.config\.|^vite\.config\./ },
];

const norm = (/** @type {string} */ p) => p.split("\\").join("/");

/**
 * Коментарі відрізаються перед пошуком імпорту.
 *
 * Перший варіант цієї перевірки шукав назву раннера підрядком і оголосив
 * сиротою сам себе: у докблоці процитовано рядок
 * `import … from '@playwright/test'` із мертвого файлу, заради якого все й
 * писалося. Рівно та сама помилка, що й у § 1.1 канону — перевірка дивилася
 * поруч із тим, що мала перевіряти.
 */
function withoutComments(/** @type {string} */ source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
}

function walk(/** @type {string} */ dir, /** @type {string[]} */ out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(spec|test|setup)\.(ts|js)$/.test(entry)) out.push(norm(full));
  }
  return out;
}

const importsRunner = (/** @type {string} */ source, /** @type {{imports: string}} */ runner) =>
  new RegExp(
    `from\\s*['"]${runner.imports.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&")}['"]`,
  ).test(source);

/**
 * Раннер файлу — за його імпортами, ЗА ПОСИЛАННЯМИ на локальні модулі.
 *
 * Пряме порівняння рядка тут більше не годиться, і це не послаблення, а
 * виправлення. Специфікації Playwright беруть `test` не з `@playwright/test`,
 * а з власного модуля фікстур (`tests/e2e/fixtures.ts`, ANALYTICS-v9 § 5.2,
 * `AN-E2E-BLOCK`): глушилка аналітики мусить діяти на КОЖНУ сторінку, а не
 * лише там, де її згадали. Після того переходу пряме порівняння оголосило
 * сиротами всі 20 специфікацій одразу — тобто перевірка червоніла б на
 * цілком правильному коді, а справжню сироту в тій купі вже ніхто б не
 * побачив.
 *
 * Гарантія лишається та сама: файл мусить ДОСЯГАТИ раннера. Обхід іде лише
 * по відносних шляхах (`./`, `../`) і пам'ятає відвідане, тож цикл імпортів
 * його не зациклює.
 *
 * Тип повернення записаний явно: функція рекурсивна, і без анотації
 * `svelte-check` справедливо каже «implicitly has return type any».
 *
 * @param {string} root
 * @param {string} file
 * @param {Set<string>} [seen]
 * @returns {{ imports: string; dep: string; config: RegExp } | undefined}
 */
function runnerOf(root, file, seen = new Set()) {
  const abs = join(root, file);
  if (seen.has(abs) || !existsSync(abs) || statSync(abs).isDirectory()) return undefined;
  seen.add(abs);

  const source = withoutComments(readFileSync(abs, "utf8"));
  const direct = RUNNERS.find((r) => importsRunner(source, r));
  if (direct) return direct;

  for (const [, spec] of source.matchAll(/from\s*['"](\.[^'"]*)['"]/g)) {
    const base = norm(join(dirname(file), spec));
    // `./fixtures`, `./fixtures.ts` і `../ready.js` (TS-імпорт із розширенням JS).
    const candidates = [base, `${base}.ts`, `${base}.js`, base.replace(/\.js$/, ".ts")];
    for (const candidate of candidates) {
      const found = runnerOf(root, candidate, seen);
      if (found) return found;
    }
  }
  return undefined;
}

/** Що Playwright підхоплює без жодного `testMatch` у конфігу. */
const PLAYWRIGHT_DEFAULT_MATCH = /\.(spec|test)\.(ts|js)$/;

/**
 * Проєкти з `playwright.config.*`: імʼя, власний `testMatch`, залежності.
 *
 * Розбір саме структурний, по фігурних дужках усередині `projects: [ … ]`, а не
 * трьома незалежними грепами: греп зіставив би `testMatch` одного проєкта з
 * `name` іншого, і перевірка звітувала б про покриття, якого немає.
 */
function playwrightProjects(/** @type {string} */ root) {
  const config = readdirSync(root).find((f) => /^playwright\.config\./.test(f));
  if (!config) return [];
  const source = withoutComments(readFileSync(join(root, config), "utf8"));
  const start = source.indexOf("projects:");
  if (start === -1) return [];

  /** @type {{name: string, testMatch: string|null, dependencies: string[]}[]} */
  const projects = [];
  let depth = 0;
  let from = -1;
  for (let i = source.indexOf("[", start); i < source.length; i++) {
    const ch = source[i];
    if (ch === "{") {
      if (depth === 0) from = i;
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && from !== -1) {
        const block = source.slice(from, i + 1);
        const name = block.match(/name\s*:\s*['"`]([^'"`]+)['"`]/);
        if (name) {
          const testMatch = block.match(/testMatch\s*:\s*(\/[^/]+\/[a-z]*|['"`][^'"`]+['"`])/);
          const deps = block.match(/dependencies\s*:\s*\[([^\]]*)\]/);
          projects.push({
            name: name[1],
            testMatch: testMatch ? testMatch[1] : null,
            dependencies: [...(deps?.[1] ?? "").matchAll(/['"`]([^'"`]+)['"`]/g)].map((m) => m[1]),
          });
        }
        from = -1;
      }
    } else if (ch === "]" && depth === 0) break;
  }
  return projects;
}

/** `testMatch` із конфігу — регулярка або рядок-підрядок — проти шляху файлу. */
function matches(/** @type {string} */ testMatch, /** @type {string} */ file) {
  const asRegExp = testMatch.match(/^\/(.+)\/([a-z]*)$/);
  if (asRegExp) return new RegExp(asRegExp[1], asRegExp[2]).test(file);
  return file.includes(testMatch.slice(1, -1));
}

/**
 * `testDir` із конфігу Playwright. Файл під Playwright поза цим каталогом не
 * запуститься навіть за наявного раннера — і жодного слова про це не буде.
 */
function playwrightTestDir(/** @type {string} */ root) {
  const config = readdirSync(root).find((f) => /^playwright\.config\./.test(f));
  if (!config) return null;
  const source = readFileSync(join(root, config), "utf8");
  const match = source.match(/testDir\s*:\s*['"`]\.?\/?([^'"`]+)['"`]/);
  return match ? match[1].replace(/\/$/, "") : null;
}

/**
 * Суфікси з `include: ['src/**\/*.{spec,test}.ts']` → `['spec', 'test']`.
 *
 * Читається саме конфіг, а не список файлів у пам'яті раннера: сюди можна
 * потрапити лише через `vite.config.ts`, і саме його правлять.
 */
function includedSuffixes(/** @type {string} */ root) {
  const source = readFileSync(join(root, "vite.config.ts"), "utf8");
  return [...source.matchAll(/\*\.\{?([a-z,]*(?:spec|test)[a-z,]*)\}?\./g)].flatMap((m) =>
    m[1].split(","),
  );
}

/**
 * @param {string} [rootDir] корінь проєкту; типово — тека вище за `scripts/`.
 * @returns {string[]} перелік проблем; порожній масив означає «усе запускається».
 */
export function checkTestDiscovery(rootDir) {
  const root = resolve(rootDir ?? join(import.meta.dirname, ".."));
  const rootSlash = norm(root);
  /** @type {string[]} */
  const problems = [];

  const specFiles = SEARCH_DIRS.flatMap((dir) => walk(join(root, dir))).map((f) =>
    f.slice(rootSlash.length + 1),
  );

  // --- Канарки: без них порожній результат читався б як «усе гаразд» --------
  if (specFiles.length <= 2) {
    problems.push(
      `сканер знайшов ${specFiles.length} файлів перевірок — він шукає не там, ` +
        "і будь-який вердикт нижче нічого не вартий",
    );
    return problems;
  }

  const suffixes = includedSuffixes(root);
  if (suffixes.length === 0) {
    problems.push(
      "у vite.config.ts не знайдено маски test.include — порівнювати нема з чим",
    );
  }

  // --- Клас 1: файл під раннером, якого немає або який його не бачить -------
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  const rootEntries = readdirSync(root);
  const playwrightDir = playwrightTestDir(root);

  for (const file of specFiles) {
    const runner = runnerOf(root, file);

    if (!runner) {
      problems.push(`${file}: не досягає жодного відомого раннера — ні прямо, ні через локальні імпорти`);
      continue;
    }
    if (!deps[runner.dep]) {
      problems.push(`${file}: імпортує ${runner.dep}, якого немає в package.json`);
      continue;
    }
    if (!rootEntries.some((entry) => runner.config.test(entry))) {
      problems.push(`${file}: імпортує ${runner.dep}, але конфігу для нього в корені немає`);
      continue;
    }
    if (runner.dep === "@playwright/test" && playwrightDir && !file.startsWith(`${playwrightDir}/`)) {
      problems.push(
        `${file}: під Playwright, але поза testDir «${playwrightDir}» — раннер його не бачить`,
      );
    }
  }

  // --- Клас 4 і 5: Playwright бачить файл, і setup справді зупиняє прогін ----
  const projects = playwrightProjects(root);
  const playwrightFiles = specFiles.filter(
    (file) => playwrightDir && file.startsWith(`${playwrightDir}/`),
  );

  if (playwrightDir && projects.length === 0) {
    problems.push(
      "у playwright.config не розібрано жодного проєкту — перевірка масок нижче нічого не вартує",
    );
  }

  for (const file of playwrightFiles) {
    if (PLAYWRIGHT_DEFAULT_MATCH.test(file)) continue;

    const owners = projects.filter((p) => p.testMatch && matches(p.testMatch, file));
    if (owners.length === 0) {
      problems.push(
        `${file}: поза типовою маскою Playwright (*.spec, *.test) і жоден проєкт ` +
          "не назвав його в testMatch — файл лежить у testDir і не запускається ніде",
      );
      continue;
    }

    for (const owner of owners) {
      const dependents = projects.filter((p) => p.dependencies.includes(owner.name));
      if (dependents.length === 0) {
        problems.push(
          `${file}: проєкт «${owner.name}» його запускає, але від нього не залежить ` +
            "жоден інший — червоний setup не зупинить решту прогону, а саме заради " +
            "цього такий проєкт і існує",
        );
      }
    }
  }

  // --- Клас 2: файл у src/ поза маскою include ------------------------------
  for (const file of specFiles.filter((f) => f.startsWith("src/"))) {
    if (!suffixes.some((suffix) => file.endsWith(`.${suffix}.ts`))) {
      problems.push(
        `${file}: не потрапляє в маску test.include (${suffixes.join(", ")}) — ` +
          "не запускається ніде, а підсумок прогону виглядає зеленим",
      );
    }
  }

  // --- Клас 3: типи вимкнені в самому файлі перевірки -----------------------
  for (const file of specFiles) {
    if (/^\s*\/\/\s*@ts-nocheck/m.test(readFileSync(join(root, file), "utf8"))) {
      problems.push(
        `${file}: @ts-nocheck вимикає останній гейт, який міг би помітити мертвий імпорт`,
      );
    }
  }

  return problems;
}

// Запуск як окремого процесу — саме він і є сенсом цього файлу.
if (process.argv[1] && norm(process.argv[1]).endsWith("scripts/check-test-discovery.mjs")) {
  const problems = checkTestDiscovery(process.argv[2]);
  if (problems.length) {
    console.error(`Файли перевірок, яких не запускає ніхто (${problems.length}):`);
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exit(1);
  }
  console.log("check:tests: кожен файл перевірки належить раннеру й потрапляє в його маску.");
}
