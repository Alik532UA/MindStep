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
 * ## Три класи, які тут ловляться
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
 *
 * ## Зворотний експеримент (§ 1.1) — прогнано
 *
 * Звузити маску до `*.spec.ts` → перелічуються всі `.test.ts`. Прибрати
 * `vitest` із `devDependencies` → перелічуються всі файли перевірок `src/`.
 *
 * Запуск: `npm run check:tests` (або `node scripts/check-test-discovery.mjs`).
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

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
    else if (/\.(spec|test)\.(ts|js)$/.test(entry)) out.push(norm(full));
  }
  return out;
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
    const source = withoutComments(readFileSync(join(root, file), "utf8"));
    const runner = RUNNERS.find((r) =>
      new RegExp(`from\\s*['"]${r.imports.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&")}['"]`).test(
        source,
      ),
    );

    if (!runner) {
      problems.push(`${file}: не імпортує жодного відомого раннера`);
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
