import { writable } from 'svelte/store';
import { get } from 'svelte/store';
import { logService } from "./logService.svelte";
import { maintenanceService } from './maintenanceService';

type HotkeyAction = {
    action: (event?: KeyboardEvent) => void;
    condition?: () => boolean;
};

const contextStack = writable<string[]>(['global']);
const hotkeyRegistry = new Map<string, Map<string, HotkeyAction>>();

/*
 * АВАРІЙНЕ СКИДАННЯ: серія натискань `R`.
 *
 * Доти тут не було ЖОДНОГО з чотирьох потрібних обмежень, і найдорожчим був
 * порядок перевірок: `KeyR` рахувався ВИЩЕ захисту полів вводу, тобто жест
 * працював і тоді, коли людина друкує. Разом із відсутнім фільтром автоповтору це
 * означало ось що: затиснута `R` дає ~30 подій за секунду, тож поріг у 55
 * набирався менш ніж за дві секунди — у полі пошуку, без вікна між натисканнями й
 * без підтвердження. Усі локальні дані стиралися випадково, від того, що на
 * клавіатуру щось поклали.
 *
 * Чотири обмеження, і кожне закриває свій спосіб спрацювати випадково:
 *
 *  1. `event.repeat` — затиснута клавіша це ОДНЕ натискання, а не серія;
 *  2. поля вводу — перевірка тепер стоїть ПЕРЕД лічильником, і жест її враховує;
 *  3. вікно 2 с між натисканнями — без нього лічильник живе всю сесію, і
 *     натиснувши `R` по одному разу протягом години, людина отримує скидання,
 *     якого не робила;
 *  4. підтвердження в проді — `hardReset` без нього стирає прогрес без запитання.
 *
 * `closest`, а не `tagName`: фокус усередині `contenteditable` стоїть на
 * вкладеному вузлі, і його `tagName` — це `SPAN`, тож перевірка за тегом його
 * пропускала.
 */
let resetKeyCounter = 0;
let resetKeyTimer: ReturnType<typeof setTimeout> | undefined;
const RESET_THRESHOLD = import.meta.env.DEV ? 5 : 55;
const RESET_WINDOW_MS = 2000;

function isTypingTarget(target: EventTarget | null): boolean {
    const element = target as HTMLElement | null;
    if (!element || typeof element.closest !== 'function') return false;
    return (
        element.closest(
            'input, textarea, select, [contenteditable]:not([contenteditable="false"])'
        ) !== null
    );
}

function handleKeydown(event: KeyboardEvent) {
    // 1. Перевірка на фокус в полях вводу (Global Input Protection).
    //    Стоїть ПЕРЕД лічильником скидання: інакше жест працює під час набору.
    const isInputActive = isTypingTarget(event.target);

    // 2. Аварійне скидання. Автоповтор і набір тексту не рахуються.
    if (!event.repeat && !isInputActive) {
        if (event.code === 'KeyR') {
            resetKeyCounter++;
            clearTimeout(resetKeyTimer);
            logService.hotkey(`[hotkeyService] KeyR pressed. Count: ${resetKeyCounter}/${RESET_THRESHOLD}`);
            if (resetKeyCounter >= RESET_THRESHOLD) {
                resetKeyCounter = 0;
                // У проді — з підтвердженням: другий незалежний бар'єр перед
                // знищенням прогресу.
                void maintenanceService.hardReset(!import.meta.env.DEV);
                return;
            }
            // Вікно між натисканнями робить це СЕРІЄЮ, а не сумою за сесію.
            resetKeyTimer = setTimeout(() => {
                resetKeyCounter = 0;
            }, RESET_WINDOW_MS);
        } else {
            resetKeyCounter = 0;
        }
    }

    if (isInputActive && event.code !== 'Escape') {
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