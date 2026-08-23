/*
 * eslint-disable-next-line no-restricted-imports -- interop із svelte-i18n, див. докблок
 *
 * `derived` і `get` зі `svelte/store` тут ЗАКОННІ, і це не послаблення правила.
 *
 * Правило SVELTE-CORE-v8 забороняє store як ВЛАСНИЙ стан у Svelte-5 коді. Тут
 * store не наш: `svelte-i18n` експортує `_` виключно як store і жодного іншого
 * API не має. Щоб отримати типізовану обгортку, її треба будувати з того, що
 * бібліотека дає, — тобто похідним від чужого store.
 *
 * Що було б, якби «виправити» це механічно: `$derived` не вміє підписуватися на
 * store, тож знадобився б `createSubscriber` із `svelte/reactivity` у файлі
 * `.svelte.ts`. Це замінило б три рядки на п'ятнадцять і додало власний шар
 * підписки поверх чужого — там, де бібліотека вже все робить сама. Класифікація
 * з `canon-change-three-class-sweep`: клас C, «правильно й до правила».
 *
 * Межа, за якою це перестане бути законним: якщо `svelte-i18n` колись віддасть
 * рунний API, обгортка мусить переїхати на нього тим самим комітом.
 */
// eslint-disable-next-line no-restricted-imports -- interop із svelte-i18n (див. вище)
import { derived, get } from 'svelte/store';
import { _ } from 'svelte-i18n';
import type { TranslationKey } from '$lib/types/i18n';

/**
 * Типізована обгортка над svelte-i18n.
 * Дозволяє використовувати переклади з перевіркою ключів на етапі компіляції.
 */
export const t = derived(_, ($_): ((key: TranslationKey, vars?: Record<string, any>) => string) => {
    return (key: TranslationKey, vars?: Record<string, any>) => $_(key, { values: vars }) as string;
});

/**
 * Функція для отримання перекладу поза Svelte-компонентами (через get).
 */
export function getTranslation(key: TranslationKey, vars?: Record<string, any>): string {
    const translate = get(_);
    return translate(key, { values: vars }) as string;
}
