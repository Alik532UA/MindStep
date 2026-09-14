const { cpSync, existsSync, mkdirSync, readFileSync, rmSync } = require("node:fs");
const { join } = require("node:path");

/**
 * Пороги Lighthouse — і монтування зібраного сайту за тим самим префіксом,
 * за яким він живе на GitHub Pages.
 *
 * ## Чому без цього гейт НЕ ПРОХОДИВ НІКОЛИ
 *
 * `src/routes/+layout.ts` має `export const ssr = false`, а адаптер тоді був
 * зібраний з `fallback: "index.html"`. Тобто `build/index.html` був не
 * пререндереною сторінкою, а SPA-фолбеком, який мусить завантажитися з
 * БУДЬ-ЯКОЇ глибини адреси — і саме тому SvelteKit писав у ньому абсолютні
 * шляхи:
 *
 *     <link href="/MindStep/_app/immutable/assets/0.Ba3wpjvI.css" …>
 *     assets: "/MindStep"
 *
 * А `staticDistDir` віддає `build/` із КОРЕНЯ сервера. Виходить, що кожен
 * стиль і кожен чанк просять `/MindStep/…`, якого на цьому сервері немає: 404
 * на все, жодного рядка CSS, жодного модуля JS. Chrome не малює нічого, і
 * Lighthouse падає з `NO_FCP`.
 *
 * ## Що змінилося 2026-09-14 — і чому монтування лишається
 *
 * Фолбек переїхав у `404.html` (`svelte.config.js`), бо в `index.html` він
 * ПЕРЕЗАПИСУВАВ пререндерений корінь. Тепер `build/index.html` — справжня
 * головна сторінка з ВІДНОСНИМИ шляхами (`./_app/…`), і сама по собі вона
 * піднялася б і з кореня сервера.
 *
 * Монтування все одно лишається, і це не рудимент: `assets: "/MindStep"` у
 * документі нікуди не зник — його читає клієнтський роутер, — тож префікс
 * нижче обчислюється той самий. Копія в `.lighthouseci/site/MindStep/` дає
 * сторінці рівно ту адресу, за якою вона живе на Pages, тобто Lighthouse міряє
 * її в бойовій точці монтування, а не в кореневій. Прибирати це можна буде
 * лише разом із доказом, що обидві дають однакові числа.
 *
 * Крок стоїть ПЕРЕД викладенням артефакту, тобто гейт, який не проходив ні
 * разу, блокував увесь деплой.
 *
 * ## Чому попередня правка не допомогла
 *
 * Тут стояло `url: ['http://localhost/index.html']` з поясненням, що LHCI сам
 * вибирав `404.html`. Вибір файлу вона справді виправила — але не точку
 * монтування, а `NO_FCP` дає саме вона. `index.html` із кореня падає з тієї ж
 * причини, що й `404.html`.
 *
 * ## Чому в сусідньому `Slovko` цього немає
 *
 * Там сторінки ПРЕРЕНДЕРЯТЬСЯ, і SvelteKit пише їм відносні шляхи
 * (`./_app/…`), які працюють з будь-якої точки монтування. Тобто різниця була
 * не в налаштуваннях Lighthouse, а в тому, що один сайт — статичні сторінки, а
 * другий вимірювався по SPA-фолбеку. Після правки 2026-09-14 різниця лишилася
 * тільки в кількості сторінок: тут пререндериться сам корінь, там — усі.
 *
 * ## Як монтується
 *
 * Копія `build/` кладеться в `.lighthouseci/site/<префікс>/`, і сервер LHCI
 * віддає `.lighthouseci/site`. Тоді `/MindStep/index.html` існує, і всі
 * абсолютні шляхи всередині сходяться.
 *
 * Префікс НЕ вписаний рядком, а прочитаний із самого артефакту: якщо base
 * колись зміниться або сторінки почнуть пререндеритися з відносними шляхами,
 * монтування піде за ними саме. Друге джерело того самого значення тут було б
 * приводом для тихої розбіжності.
 */

const BUILD = "build";
const STAGE = join(".lighthouseci", "site");

if (!existsSync(join(BUILD, "index.html"))) {
  throw new Error(
    `lighthouserc: немає ${join(BUILD, "index.html")} — спершу \`npm run build\``,
  );
}

/**
 * Префікс, якого вимагає САМ артефакт.
 *
 * Порожній рядок — законна відповідь: сайт із відносними шляхами монтується в
 * корені, і копіювати нічого не треба.
 */
const mount = (() => {
  const html = readFileSync(join(BUILD, "index.html"), "utf8");
  const declared = /assets:\s*"([^"]*)"/.exec(html);
  const linked = /(?:href|src)="(\/[^"/][^"]*)\/_app\//.exec(html);
  const raw = (declared && declared[1]) || (linked && linked[1]) || "";
  return raw.replace(/^\/+|\/+$/g, "");
})();

const dir = mount ? STAGE : BUILD;
const path = mount ? `/${mount}/index.html` : "/index.html";

if (mount) {
  rmSync(STAGE, { recursive: true, force: true });
  mkdirSync(join(STAGE, mount), { recursive: true });
  cpSync(BUILD, join(STAGE, mount), { recursive: true });
}

module.exports = {
  ci: {
    collect: {
      staticDistDir: dir,

      /*
       * Адреса вказана ЯВНО, а не через автопошук: у `build/` лежить ще й
       * `404.html`, і разом із `maxAutodiscoverIsolate` вибір падав саме на
       * нього. Хост тут фіктивний — LHCI піднімає власний сервер на випадковому
       * порті й підставляє його origin, беручи з цього рядка лише шлях.
       */
      url: [`http://localhost${path}`],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],

        /*
         * КАНАРКИ `resource-summary` ТУТ НЕ СТОЯТЬ, І ЦЕ ЗАМІРЯНО
         * (OBSERVABILITY-v9 § 2.2.1, `OBS-LHCI-REAL-PAGES`).
         *
         * Канон вимагає канарки, яка доводить, що сторінка справді завантажила
         * CSS і JS: при неправильній точці монтування все дає 404, і Lighthouse
         * або падає з `NO_FCP`, або — там, де сторінки пререндеряться, — ставить
         * 100 балів сторінці без стилів.
         *
         * Очевидний спосіб — `resource-summary:stylesheet:count` із
         * `minNumericValue: 1`. Перевірено 2026-09-10: цей рядок тут НЕ ПРАЦЮЄ.
         * Прибрано всі одинадцять `<link rel="stylesheet">` із
         * `build/index.html`, зібрано заново — Lighthouse нарахував
         * ШІСТНАДЦЯТЬ стилів і асерція лишилася зеленою: у цьому профілі CSS
         * тягне клієнтський завантажувач SvelteKit через JS, а не розмітка.
         * Тобто канарка, яка не може почервоніти від свого ж дефекту, —
         * зелена галочка під чужим ім'ям (severity CRITICAL у шкалі пакета).
         *
         * Замість неї канарка стоїть там, де справді ламалося: у
         * `scripts/check-build.mjs` перевіряється, що кожна адреса `_app/`, яку
         * просить `build/*.html`, існує ВІД ТІЄЇ ТОЧКИ МОНТУВАННЯ, з якої її
         * попросять. Це те саме твердження, тільки перевірене над артефактом і
         * здатне впасти.
         */
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
