/**
 * Гарячі клавіші: реєстр за контекстами (HOTKEYS-v8).
 *
 * **КАРТА КЛАВІШ ЦЬОГО ПРОЄКТУ** — щоб наступний агент не аналізував заново.
 * Контекст у дужках: `global` лежить у стеку завжди, `game` — лише під час партії.
 *
 * | Клавіша | Стан | Де / чому |
 * |---|---|---|
 * | `T` | ✅ тема | `global`, `+layout.svelte`; світла ↔ темна |
 * | `L` | ✅ мова | `global`, `+layout.svelte`; по колу uk → en → crh → nl |
 * | `V` | ✅ службове табло | серія натискань, нижче в цьому файлі; сам елемент — `widgets/LogCopyButton.svelte` |
 * | `R` | ✅ аварійне скидання | серія натискань, нижче в цьому файлі |
 * | `Esc` | ✅ головне меню | `main-menu` у `gameSettingsDefaults` |
 * | `M` | ✅ звук | `toggle-speech`: озвучення ходів — єдине, що тут звучить |
 * | `I` | ✅ довідка | `show-help` |
 * | `B` | ⚠️ ЗАЙНЯТА ГРОЮ | `toggle-block-mode`. Канонічно `B` — динамічні фони, але їх у проєкті немає, а режим блоків — ігрова дія в контексті `game` і перепризначається в налаштуваннях |
 * | `H` | ⚠️ ЗАЙНЯТА ГРОЮ | `toggle-board`. Канонічно `H` — «на початок», але окремих секцій-вкладок тут немає: навігація йде через головне меню на `Esc` |
 * | `1`–`8` | ⚠️ ЗАЙНЯТІ ГРОЮ | відстань ходу, не номер секції. Це серце керування грою з клавіатури |
 * | `Space` | ⚠️ ЗАЙНЯТА ГРОЮ | `confirm` — підтвердити хід |
 * | `Q W E A D Z X C S` | ⚠️ ЗАЙНЯТІ ГРОЮ | напрямки ходу (розкладка навколо `S`) |
 * | `F` | ⏭️ ПРОПУЩЕНО | на весь екран немає — ані кнопки, ані `requestFullscreen` у коді |
 * | `C` | ⏭️ ПРОПУЩЕНО | годинника на екрані немає |
 * | `PgUp`/`PgDn` | ⏭️ ПРОПУЩЕНО | сторінка не крокує секціями |
 *
 * Пропущене — це відсутня функція, а не забута клавіша. Щойно функція
 * зʼявиться, клавіша береться з канонічної карти (HOTKEYS-v8 § 1.1), а не
 * вигадується.
 *
 * ⚠️ означає інше: клавіша ЗАЙНЯТА ігровою дією свідомо. Це гра, і керування з
 * клавіатури — її основний спосіб гри, а не додаток до мишки. Канонічна карта
 * описує клавіші САЙТУ; там, де вони стикаються з клавішами ГРИ, виграє гра — але
 * лише у своєму контексті (`game`) і лише поки дію можна перепризначити в
 * налаштуваннях, що й виконує WCAG SC 2.1.4 (HOTKEYS-v8 § 3, шлях 2).
 */
import { writable } from 'svelte/store';
import { get } from 'svelte/store';
import { debugMode } from './debugMode.svelte';
import { isPlainKey, isTypingTarget } from './keyboard';
import { createKeySequence } from './keySequence';
import { logService } from "./logService.svelte";
import { maintenanceService } from './maintenanceService';

type HotkeyAction = {
    action: (event?: KeyboardEvent) => void;
    condition?: () => boolean;
};

const contextStack = writable<string[]>(['global']);
const hotkeyRegistry = new Map<string, Map<string, HotkeyAction>>();

/*
 * СЛУЖБОВІ ЖЕСТИ: серії натискань `R` (аварійне скидання) і `V` (табло версії).
 *
 * **Обидва живуть ТУТ, а не в компоненті табла.** Тут єдиний слухач клавіатури
 * проєкту, і він працює з першої мілісекунди сесії. Компонент табла у проді
 * НЕ ВІДМАЛЬОВАНИЙ, доки жест не спрацював, — тобто жест, який його показує, з
 * нього ж і не міг би початися. `svelte:window` поза `{#if}` це технічно обійшов
 * би, але дав би другий слухач клавіатури поруч із цим, і питання «чому клавіша не
 * працює» мало б два місця для відповіді.
 *
 * **Логіка серій — у `keySequence.ts`, разом із тестами.** Доти вона жила прямо в
 * цьому обробнику й не мала ЖОДНОГО з чотирьох потрібних обмежень; найдорожчим був
 * порядок перевірок: `KeyR` рахувався ВИЩЕ захисту полів вводу, тобто жест працював
 * і тоді, коли людина друкує. Разом із відсутнім фільтром автоповтору це означало
 * ось що: затиснута `R` дає ~30 подій за секунду, тож поріг у 55 набирався менш ніж
 * за дві секунди — у полі пошуку, без вікна між натисканнями й без підтвердження.
 * Усі локальні дані стиралися випадково, від того, що на клавіатуру щось поклали.
 */
const RESET_THRESHOLD = import.meta.env.DEV ? 5 : 55;

/**
 * `R` — аварійне скидання. У проді `hardReset(true)` питає підтвердження: разом із
 * порогом у 55 натискань це два незалежні барʼєри перед знищенням прогресу, і
 * жоден не покладається на уважність.
 */
const resetSequence = createKeySequence({
    code: 'KeyR',
    threshold: RESET_THRESHOLD,
    onComplete: () => void maintenanceService.hardReset(!import.meta.env.DEV)
});

/**
 * `V` — показати/сховати службове табло. Поріг ФУНКЦІЄЮ, бо він залежить від
 * напрямку: показати в проді коштує 55, сховати — 5 (див. `debugMode.svelte.ts`).
 */
const versionSequence = createKeySequence({
    code: 'KeyV',
    threshold: () => debugMode.pressesToToggle,
    onComplete: () =>
        logService.hotkey(`[hotkeyService] табло ${debugMode.toggle() ? 'показано' : 'сховано'}`)
});

function handleKeydown(event: KeyboardEvent) {
    /*
     * 0. Комбінації належать браузеру й системі.
     *
     * Вихід тут, а не в кожній гілці нижче: `Ctrl+R` (перезавантаження),
     * `Ctrl+T` (нова вкладка), `Cmd+M` (згорнути вікно) дають ті самі `code`, що
     * й одиночні клавіші, а обробник ще й стоїть у фазі захоплення — тобто
     * перехоплював би їх раніше за всіх.
     */
    if (!isPlainKey(event)) return;

    /*
     * 1. Службові жести. Захист полів вводу, автоповтор, вікно між натисканнями й
     *    скидання на іншій клавіші — усе всередині `keySequence`.
     *
     * Обидві серії отримують КОЖНУ подію, включно з тією, що завершила сусідню:
     * інакше `V` не скидала б набране в `R`, і серія перестала б бути серією.
     */
    versionSequence.handle(event);
    resetSequence.handle(event);

    // 2. Поки фокус у полі, клавіші належать полю. Виняток лише `Escape`: панель,
    //    яку відкрили клавішею, більше нічим не закрити (HOTKEYS-v8 § 2.2).
    if (isTypingTarget(event.target) && event.code !== 'Escape') {
        return;
    }

    const stack = get(contextStack);
    // Використовуємо hotkey лог для дебагу натискань
    logService.hotkey(`[hotkeyService] handleKeydown: code=${event.code}, stack=`, stack);

    for (let i = stack.length - 1; i >= 0; i--) {
        const context = stack[i];
        const contextHotkeys = hotkeyRegistry.get(context);

        if (contextHotkeys) {
            const hotkey = contextHotkeys.get(event.code);
            if (hotkey && (!hotkey.condition || hotkey.condition())) {
                // Тут залишаємо ACTION, бо це реальна дія користувача, яка спрацювала
                logService.action(`[hotkeyService] Executing hotkey '${event.code}' from context '${context}'`);
                event.preventDefault();
                event.stopPropagation();
                hotkey.action(event);
                return;
            }
        }
    }
    logService.hotkey(`[hotkeyService] No action found for key '${event.code}' in any active context.`);
}

function setup() {
    if (typeof window !== 'undefined') {
        logService.init('[hotkeyService] Setting up global keydown listener.');
        window.addEventListener('keydown', handleKeydown, true);
    }
}

function registerHotkey(context: string, key: string, action: (event?: KeyboardEvent) => void, condition?: () => boolean) {
    if (!hotkeyRegistry.has(context)) {
        hotkeyRegistry.set(context, new Map());
    }
    // Змінено на hotkey
    logService.hotkey(`[hotkeyService] Registering hotkey '${key}' for context '${context}'`);
    hotkeyRegistry.get(context)!.set(key, { action, condition });
}

function unregisterContext(context: string) {
    // Змінено на hotkey
    logService.hotkey(`[hotkeyService] Unregistering all hotkeys for context '${context}'`);
    hotkeyRegistry.delete(context);
}

function pushContext(context: string) {
    // Змінено на hotkey
    logService.hotkey(`[hotkeyService] Pushing new context: '${context}'`);
    contextStack.update(stack => [...stack, context]);
}

function popContext(context?: string) {
    contextStack.update(stack => {
        if (stack.length > 1) {
            const topOfStack = stack[stack.length - 1];
            if (context && context !== topOfStack) {
                logService.hotkey(`[hotkeyService] Tried to pop context '${context}' but '${topOfStack}' is on top. Aborting.`);
                return stack;
            }
            const newStack = [...stack];
            const poppedContext = newStack.pop()!;
            logService.hotkey(`[hotkeyService] Popping context: '${poppedContext}'`);
            unregisterContext(poppedContext);
            return newStack;
        }
        return stack;
    });
}

function getCurrentContext() {
    const stack = get(contextStack);
    return stack[stack.length - 1];
}

setup();

const hotkeyService = {
    register: registerHotkey,
    unregister: unregisterContext,
    pushContext,
    popContext,
    getCurrentContext,
    get a() {
        return get(contextStack);
    }
};

export default hotkeyService;