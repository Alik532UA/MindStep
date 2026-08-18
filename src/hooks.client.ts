/**
 * @file Клієнтські хуки SvelteKit для обробки помилок.
 * @description Перехоплює всі необроблені помилки на клієнті.
 * У dev-режимі виводить детальну інформацію в консоль.
 *
 * Архітектура:
 * - SSoT: Централізована точка обробки всіх клієнтських помилок.
 * - SoC: Тільки обробка помилок, без бізнес-логіки.
 * - Ізоляція побічних ефектів: Всі "брудні" операції (console) ізольовані тут.
 */

import type { HandleClientError } from "@sveltejs/kit";
import { logService } from "$lib/services/logService.svelte";

/**
 * Глобальний обробник клієнтських помилок.
 * Перехоплює помилки, які не були оброблені в компонентах.
 *
 * @param error - Об'єкт помилки
 * @param event - Об'єкт події з інформацією про запит
 * @returns Об'єкт з повідомленням для відображення користувачу
 */
export const handleError: HandleClientError = ({ error, event }) => {
    const isDev = import.meta.env.DEV;
    const errorId = crypto.randomUUID();
    const timestamp = new Date().toISOString();

    // Отримуємо повідомлення та стек
    const errorMessage =
        error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;

    // Через `logService`, а не `console`, і без гарду `isDev`.
    //
    // Доти повна інформація виводилася ЛИШЕ в dev і лише в консоль: у
    // продакшні необроблена помилка не доходила нікуди — ні в буфер звіту, який
    // гравець копіює кнопкою, ні в лічильник, з якого та кнопка з'являється.
    // Тобто єдиний спосіб дізнатися про збій на чужому пристрої не бачив саме
    // тих збоїв, для яких існує (DEBUGGING-v8 § 1, ERROR-HANDLING-v8 § 1.4).
    logService.error(`[hooks.client] ${errorId}: ${errorMessage}`, {
        timestamp,
        url: event.url.href,
        route: event.route.id,
        ...(errorStack ? { stack: errorStack } : {})
    });

    // Повертаємо об'єкт помилки для відображення в +error.svelte
    // У dev-режимі включаємо стек, в production — тільки повідомлення
    return {
        message: isDev
            ? errorMessage
            : "Сталася непередбачена помилка. Спробуйте оновити сторінку.",
        // Додаємо стек тільки в dev-режимі
        ...(isDev && errorStack ? { stack: errorStack } : {}),
    };
};
