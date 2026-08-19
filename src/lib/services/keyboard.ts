/**
 * Захисти обробника гарячих клавіш (HOTKEYS-v8 § 2).
 *
 * **Чому окремий модуль.** Ці перевірки потрібні трьом незалежним споживачам:
 * реєстрові гарячих клавіш (`hotkeyService`), серіям натискань (`keySequence`) і
 * будь-якому компонентові, що вішає власний `onkeydown` на вікно. Доки вони жили
 * всередині `hotkeyService`, другий споживач мусив писати свою копію — і саме так
 * у сусідніх проєктах розійшлися реалізації того самого захисту.
 *
 * Карта клавіш ЦЬОГО проєкту — у шапці `hotkeyService.ts`.
 */

/**
 * Чи друкує людина зараз у полі.
 *
 * `closest`, а не порівняння `tagName`: у `contenteditable` фокус стоїть на
 * вкладеному вузлі, і його `tagName` — це `SPAN`, тож перевірка за тегом такий
 * випадок пропускає.
 */
export function isTypingTarget(target: EventTarget | null | undefined): boolean {
    const element = target as HTMLElement | null | undefined;
    if (!element || typeof element.closest !== 'function') return false;
    return (
        element.closest(
            'input, textarea, select, [contenteditable]:not([contenteditable="false"])'
        ) !== null
    );
}

/**
 * Чи це одиночна клавіша без модифікаторів.
 *
 * `Ctrl+T` відкриває вкладку, `Ctrl+R` перезавантажує, `Ctrl+V` вставляє — і всі
 * три дають той самий `event.code`, що й одиночна клавіша. `Shift` навмисно не
 * перевіряється: він не змінює `code`, а комбінації з ним браузер зазвичай не
 * займає.
 */
export function isPlainKey(event: {
    ctrlKey?: boolean;
    metaKey?: boolean;
    altKey?: boolean;
}): boolean {
    return !event.ctrlKey && !event.metaKey && !event.altKey;
}

/**
 * Обидва захисти разом — те, що потрібно обробникові на вікні.
 *
 * `Escape` — єдиний виняток із захисту полів: панель, яку відкрили клавішею,
 * може забрати фокус у своє поле, і тоді літера, якою її відкрили, законно
 * зʼїдається полем. Закрити панель зсередини більше нічим (HOTKEYS-v8 § 2.2).
 */
export function acceptsShortcut(event: KeyboardEvent): boolean {
    if (!isPlainKey(event)) return false;
    if (event.code === 'Escape') return true;
    return !isTypingTarget(event.target);
}
