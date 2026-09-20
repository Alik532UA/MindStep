/**
 * Централізована ініціалізація Firebase і підключення емуляторів.
 *
 * **Нічого не виконується на імпорті.** `initializeApp` і `get*` живуть у
 * функціях, а не в тілі модуля. Причина не в мікрооптимізації: синглтон, чий
 * конструктор піднімає SDK, робить це на ІМПОРТІ — і будь-який тест, який
 * транзитивно тягне цей модуль, вимагає бойових ключів, щоб узагалі зібратися.
 * Саме так тут упав `LocalGameController.spec.ts` у CI з
 * `FirebaseError: auth/invalid-api-key` **до першого тесту**: 77 перевірок
 * проходили, а одинадцятий файл не збирався (CODE-QUALITY-v8 § 4,
 * CLOUD-DATABASE-v8 § 10.1).
 *
 * **Analytics імпортується ліниво.** Решта SDK потрібна кожному, хто відкриває
 * онлайн; аналітика — нікому з них, тож вона не має лежати в тому самому чанку.
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore, connectFirestoreEmulator } from 'firebase/firestore';
import {
    getDatabase,
    forceWebSockets,
    type Database,
    connectDatabaseEmulator
} from 'firebase/database';
import { getAuth, type Auth, connectAuthEmulator } from 'firebase/auth';
import type { Analytics } from 'firebase/analytics';
import { logService } from "./logService.svelte";

const isBrowser = typeof window !== 'undefined';

/*
 * КОНФІГ СТОЇТЬ ТУТ, А НЕ ПРИЇЖДЖАЄ ЗІ ЗМІННИХ CI.
 *
 * Значення публічні за побудовою: вони в бандлі, який качає кожен відвідувач,
 * і сховати їх неможливо. Межу безпеки тримають `firestore.rules`,
 * `database.rules.json` і перелік дозволених доменів
 * (SECURITY-v9 § 4.1, § 4.2.1 `SEC-CONFIG-IN-SOURCE`).
 *
 * Змінні дають рівно одне: зібрати той самий код під іншу базу. Такого
 * сценарію тут немає — проєкт Firebase один, `deploy-dev.yml` збирає під нього
 * ж, а емулятор чіпляється за адресою (`127.0.0.1`), а не іншим `projectId`.
 *
 * Натомість вони вже коштували ПРАЦЮЮЧОГО ОНЛАЙНУ: `VITE_FIREBASE_DATABASE_URL`
 * не потрапила в збірку CI, SDK вивів адресу з `projectId`, пішов у
 * `firebaseio.com` замість `europe-west1` — і присутність із перепідключенням
 * не працювали ЖОДНОГО разу, мовчки. Подробиці — у `getRealtimeDb()` нижче.
 * Рядок, якого бракувало, тепер не може не потрапити в збірку: він ось тут.
 *
 * Межа: щойно з'явиться ДРУГА база (тестова, демо, окремий стенд) — значення
 * повертаються у змінні, бо вшите в бандл перецілити неможливо.
 */
const firebaseConfig = {
    apiKey: 'AIzaSyAbHjX0oyy9aCU8WDn9x3i-_T7hRMCSfRA',
    authDomain: 'stay-on-the-board.firebaseapp.com',
    projectId: 'stay-on-the-board',
    storageBucket: 'stay-on-the-board.firebasestorage.app',
    messagingSenderId: '939636937442',
    appId: '1:939636937442:web:714e1a4566703fed8604bb',
    measurementId: 'G-CPGNM62XZW',
    databaseURL: 'https://stay-on-the-board-default-rtdb.europe-west1.firebasedatabase.app'
} as const;

// Примусово вмикаємо емулятор у тестах
const USE_EMULATOR = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true' || (isBrowser && (window as any).__playwright_test__);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let rtdb: Database | null = null;
let auth: Auth | null = null;
let analytics: Analytics | null = null;

function initializeFirebase(): FirebaseApp {
    if (app) return app;
    const existingApps = getApps();
    if (existingApps.length > 0) {
        app = existingApps[0];
    } else {
        app = initializeApp(firebaseConfig);
    }
    return app;
}

/**
 * Отримати інстанс Firestore з автоматичним підключенням емулятора
 */
export function getFirestoreDb(): Firestore {
    if (db) return db;
    const firebaseApp = initializeFirebase();
    db = getFirestore(firebaseApp);

    if (USE_EMULATOR) {
        logService.init('[FirebaseService] Connecting to Firestore Emulator (127.0.0.1:8080)');
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
    }
    return db;
}

/**
 * Отримати інстанс Realtime Database з автоматичним підключенням емулятора
 */
export function getRealtimeDb(): Database {
    if (rtdb) return rtdb;
    const firebaseApp = initializeFirebase();

    /*
     * ВІДСУТНЯ АДРЕСА RTDB — це не «типове значення», а зламаний онлайн.
     *
     * SDK у такому разі виводить адресу з `projectId` і йде на
     * `https://<projectId>-default-rtdb.firebaseio.com` — тобто в американську
     * базу, якої в цього проєкту немає: справжня живе в `europe-west1`. Далі
     * політика безпеки додає своє: `connect-src` дозволяє
     * `wss://*.firebasedatabase.app`, але не `*.firebaseio.com`, тож і сокет, і
     * запасне довге опитування блокуються.
     *
     * Заміряно в продакшні: змінної не було в збірці CI, і присутність із
     * перепідключенням не працювали ЖОДНОГО разу — мовчки, бо SDK не скаржиться
     * на «не ту» адресу, він просто йде за нею.
     *
     * ПЕРЕВІРКА ЗВІДСИ ПЕРЕЇХАЛА В ГЕЙТ. Доти тут стояв `logService.error`, і
     * це була відповідь на питання «що робити, коли адреси немає» — тобто на
     * питання, яке не мало б виникати. Тепер адреса лежить у `firebaseConfig`
     * вище, у git, а `cloud-database.spec.ts` звіряє, що вона є і що вона
     * європейська. Помилка, яку видно на збірці, коштує дешевше за помилку,
     * яку видно в журналі браузера відвідувача.
     */

    /*
     * ЛИШЕ ВЕБСОКЕТ — інакше RTDB не з'єднується під нашою політикою безпеки.
     *
     * RTDB починає з'єднання НЕ з вебсокета, а з довгого опитування, і робить
     * його вставлянням тега `<script src=".../.lp?...">` через `document.write`.
     * Тобто це підвантаження стороннього скрипта, і воно потрапляє під
     * `script-src`, а не під `connect-src`. У нашій політиці `connect-src`
     * дозволяє `wss://*.firebasedatabase.app`, але `script-src` не дозволяє
     * НІЧОГО з цього домену — і початковий транспорт блокувався щоразу.
     *
     * Заміряно в продакшні 2026-08-25, уже з правильною адресою бази: в консолі
     * лежав рядок «Loading the script … violates … script-src» на кожній спробі
     * плюс «[Violation] Avoid using document.write()» зі стеку
     * `establishConnection_ → BrowserPollConnection`. До вебсокета справа не
     * доходила ніколи: SDK підвищує транспорт лише ПІСЛЯ вдалого опитування.
     *
     * Чому не розширити `script-src`. Бо це дозвіл виконувати будь-який скрипт
     * із того домену — рівно те, від чого політика й захищає. Запасний транспорт
     * при цьому не втрачається: він і так був заблокований, тобто його ніколи не
     * існувало в бойовій збірці.
     */
    forceWebSockets();

    rtdb = getDatabase(firebaseApp);
    if (USE_EMULATOR) {
        logService.init('[FirebaseService] Connecting to Realtime DB Emulator (127.0.0.1:9000)');
        connectDatabaseEmulator(rtdb, '127.0.0.1', 9000);
    }
    return rtdb;
}

/**
 * Отримати інстанс Auth з автоматичним підключенням емулятора
 */
export function getFirebaseAuth(): Auth {
    if (auth) return auth;
    const firebaseApp = initializeFirebase();
    auth = getAuth(firebaseApp);
    if (USE_EMULATOR) {
        logService.init('[FirebaseService] Connecting to Auth Emulator (127.0.0.1:9099)');
        connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    }
    return auth;
}

export async function initializeAnalytics(): Promise<Analytics | null> {
    if (!isBrowser) return null;
    if (analytics) return analytics;
    try {
        // Ліниво: аналітика не потрібна нікому, хто грає офлайн, тож вона не має
        // лежати в тому самому чанку, що й решта SDK.
        const { getAnalytics, isSupported } = await import('firebase/analytics');
        const supported = await isSupported();
        if (!supported) return null;
        analytics = getAnalytics(initializeFirebase());
        return analytics;
    } catch (error) {
        logService.error('[FirebaseService] Analytics недоступна', error);
        return null;
    }
}

export function getFirebaseApp(): FirebaseApp {
    return initializeFirebase();
}
