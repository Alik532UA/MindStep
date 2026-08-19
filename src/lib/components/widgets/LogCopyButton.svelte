<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/state';
  import { onDestroy } from 'svelte';
  import { debugMode } from '$lib/services/debugMode.svelte';
  import { logService } from '$lib/services/logService.svelte';
  import { Check, Copy } from 'lucide-svelte';

  /**
   * Службове табло: номер версії, лічильник помилок і збір звіту — ОДИН елемент.
   *
   * **Чому одне, а не двоє.** Доти номер версії тут не показувався взагалі, а
   * кнопка звіту зʼявлялася лише за наявності помилок і лише в dev. Тобто
   * найчастіше потрібна річ — «яка версія на екрані?» — не мала на екрані місця, а
   * найпотрібніша в проді річ — звіт про збій — була в проді недосяжна.
   *
   * **Форма змінюється, місце — ні.** У спокої це капсула з номером версії; коли є
   * помилки — червоний кружок із їхньою кількістю; після копіювання — галочка.
   * Один елемент, один кут, один `data-testid`.
   *
   * **Видимість (DEBUGGING-v8 § 2.1, із відхиленням).** У dev табло видиме
   * ЗАВЖДИ, а не лише за наявності помилок, як приписує канон: воно тепер несе
   * номер версії, а його ховати нема сенсу — саме в dev він і потрібен. У проді
   * табло приховане, доки не ввімкнено debug-режим.
   *
   * **Два входи, і вони навмисно різні за природою.** `?debug=1` в адресі працює
   * на телефоні й пересилається посиланням; серія натискань `V` — для того, хто
   * вже сидить за клавіатурою, і вона зберігається між сеансами. На дотику серія
   * недосяжна, і саме тому адресний параметр лишається: інакше версію на телефоні
   * не побачив би ніхто.
   *
   * **Сам жест `V` живе в `hotkeyService`, а не тут** — саме тому, що в проді цей
   * компонент не відмальований, доки жест не спрацював. Слухач у компоненті, який
   * жест же й показує, не міг би цього жесту дочекатися.
   *
   * **Пороги асиметричні** — 55 щоб показати в проді, 5 щоб сховати, 5/5 у dev.
   * Чому саме так, розписано в `debugMode.svelte.ts`.
   */

  /*
   * `browser &&` тут обовʼязковий: під час prerender звернення до
   * `page.url.searchParams` кидає «Cannot access url.searchParams on a page with
   * prerendering enabled» і валить збірку цілком.
   */
  const urlDebug = $derived(browser && page.url.searchParams.get('debug') === '1');
  /*
   * `?debug=1` діє ПОВЕРХ збереженого стану: посилання з ним мусить показати табло
   * навіть тому, хто раніше сховав його серією натискань. Інакше найнадійніший
   * шлях (єдиний досяжний на телефоні) можна було б заблокувати назавжди.
   */
  const isVisible = $derived(urlDebug || debugMode.enabled);

  let copied = $state(false);
  let copyTimer: ReturnType<typeof setTimeout> | undefined;

  onDestroy(() => {
    if (copyTimer) clearTimeout(copyTimer);
  });

  async function copyReport() {
    try {
      // Шапка (версія, адреса, пристрій, стан мережі) уже всередині звіту.
      await navigator.clipboard.writeText(logService.getLogReport());
      copied = true;
      copyTimer = setTimeout(() => {
        copied = false;
      }, 1000);
    } catch (err) {
      // Відмова буфера обміну — буденна річ поза HTTPS і без дозволу, тож
      // `warn`. І саме `logService`, а не `console`: тут `error` крутив би
      // лічильник, з якого живе сама ця кнопка (DEBUGGING-v8 § 1.3).
      logService.warn('[LogCopyButton] не вдалося скопіювати звіт', err);
    }
  }
</script>

{#if isVisible}
  <button
    type="button"
    class="log-fab"
    class:has-errors={logService.errorCount > 0}
    class:copied
    onclick={copyReport}
    aria-label={`Копіювати звіт про роботу — ${logService.version}`}
    data-testid="app-version-value"
  >
    {#if copied}
      <Check class="badge-icon" />
    {:else if logService.errorCount > 0}
      <span class="error-count">{logService.errorCount > 99 ? '!' : logService.errorCount}</span>
    {:else}
      <Copy class="badge-icon badge-icon--hint" />
      <span class="version">{logService.version}</span>
    {/if}
  </button>
{/if}

<style>
  .log-fab {
    position: fixed;
    bottom: 16px;
    left: 16px;
    z-index: 9999;

    display: flex;
    align-items: center;
    gap: 4px;
    /* Капсула: номер версії в коло 32px не влазить. */
    min-height: 32px;
    padding: 0 8px;
    border-radius: 16px;

    background-color: var(--bg-secondary, #2a2a2a);
    color: var(--text-primary, #fff);
    border: 2px solid var(--border-color, #444);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .log-fab:hover {
    transform: scale(1.05);
  }

  .log-fab:active {
    transform: scale(0.95);
  }

  .version {
    font-size: 10px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    line-height: 1;
    /* Номер читає той, хто дивиться на скріншот, тож він не має «розсипатися». */
    white-space: nowrap;
  }

  /*
   * Іконка копіювання — підказка, що капсула клікабельна, а не окрема дія. Тому
   * вона дрібніша за номер і тане: головне тут число версії.
   */
  .log-fab :global(.badge-icon) {
    width: 16px;
    height: 16px;
    flex: none;
  }

  .log-fab :global(.badge-icon--hint) {
    width: 12px;
    height: 12px;
    opacity: 0.6;
  }

  /*
   * Помилки — кружок, а не капсула: у цьому стані важлива не версія, а те, що
   * щось сталося. Номер версії лишається у звіті, який копіює цей самий клік.
   */
  .log-fab.has-errors,
  .log-fab.copied {
    width: 32px;
    min-height: 32px;
    padding: 0;
    border-radius: 50%;
    justify-content: center;
  }

  /*
   * Червоний темніший за #f44336 — за WCAG AA, не за смаком: білий текст на
   * попередньому давав 3.7:1 при потрібних 4.5. Тепер 5.46:1. Лічильник помилок —
   * це та плашка, яку читають саме тоді, коли щось пішло не так, тобто найгірший
   * кандидат на «майже читно». Літерали, а не токени теми: сигнал «є помилки»
   * мусить виглядати однаково в будь-якій темі.
   */
  .log-fab.has-errors {
    background-color: #c92a2a;
    color: white;
    border-color: #7f1d1d;
  }

  /* Зелений — за тим самим правилом: #2f9e44 давав під білим 3.45:1, #237a35 дає 5.38:1. */
  .log-fab.copied {
    background-color: #237a35;
    color: white;
    border-color: #1b5e20;
  }

  .error-count {
    font-weight: bold;
    font-size: 0.9rem;
  }

  /*
   * Розмір залежить від СПОСОБУ ВВЕДЕННЯ, а не від ширини вікна: на десктопі
   * 900px кнопка лишалася б маленькою для миші, а на планшеті 1024px — маленькою
   * для дотику (ACCESSIBILITY-v8 § 8, DEBUGGING-v8 § 2.2). Доти тут стояв
   * `max-width: 768px`, який зменшував кнопку саме там, де потрібне 44px.
   */
  @media (hover: none) {
    .log-fab {
      min-height: 44px;
      padding: 0 12px;
      border-radius: 22px;
    }

    .log-fab.has-errors,
    .log-fab.copied {
      width: 44px;
      padding: 0;
    }

    .log-fab :global(.badge-icon) {
      width: 20px;
      height: 20px;
    }

    .version {
      font-size: 12px;
    }

    .error-count {
      font-size: 1rem;
    }
  }
</style>
