/**
 * Firebase Service
 * Централізована ініціалізація та експорт Firebase сервісів
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getDatabase, type Database, connectDatabaseEmulator } from 'firebase/database';
import { getAuth, type Auth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics, type Analytics, isSupported } from 'firebase/analytics';
import { browser } from '$app/environment';
import { logService } from './logService';
import { errorHandlerService } from './errorHandlerService';

// Firebase конфігурація з змінних середовища Vite
// ПРИМІТКА: Використовуємо import.meta.env, оскільки змінні мають префікс VITE_ (а не PUBLIC_)
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
};

// Check if emulator mode is active (useful for local development and Playwright tests)
const USE_EMULATOR = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let rtdb: Database | null = null;
let auth: Auth | null = null;
let analytics: Analytics | null = null;

/**
 * Перевіряє, чи налаштовано Firebase
 */
export function isFirebaseConfigured(): boolean {
    const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
    if (!isConfigured) {
        errorHandlerService.handle('Missing configuration. Check .env file.', {
            context: 'FirebaseService',
            showToast: false // Don't annoy user with config errors if they are not critical yet
        });
    } else {
        // Логуємо один раз при перевірці, щоб знати, що конфіг є
        logService.init(`[FirebaseService] Configuration present for project: ${firebaseConfig.projectId}`);
    }
    return isConfigured;
}

/**
 * Ініціалізує Firebase застосунок
 */
function initializeFirebase(): FirebaseApp {
    if (app) return app;

    const existingApps = getApps();
    if (existingApps.length > 0) {
        app = existingApps[0];
        return app;
    }

    if (!isFirebaseConfigured()) {
        throw new Error('Firebase не налаштовано. Перевірте змінні середовища.');
    }

    try {
        app = initializeApp(firebaseConfig);
        logService.init('[FirebaseService] App initialized successfully');
        return app;
    } catch (e) {
        errorHandlerService.handle(e, { context: 'FirebaseService', userMessageKey: 'common.errorOccurred' });
        throw e;
    }
}

/**
 * Отримує Firestore інстанс
 */
export function getFirestoreDb(): Firestore {
    if (db) return db;
    const firebaseApp = initializeFirebase();
    db = getFirestore(firebaseApp);

    if (USE_EMULATOR) {
        connectFirestoreEmulator(db, 'localhost', 8080);
        logService.init('[FirebaseService] Firestore Emulator connected at localhost:8080');
    }

    return db;
}

/**
 * Отримує Realtime Database інстанс
 */
export function getRealtimeDb(): Database {
    if (rtdb) return rtdb;
    const firebaseApp = initializeFirebase();
    rtdb = getDatabase(firebaseApp);

    if (USE_EMULATOR) {
        connectDatabaseEmulator(rtdb, 'localhost', 9000);
        logService.init('[FirebaseService] Realtime DB Emulator connected at localhost:9000');
    }

    return rtdb;
}

/**
 * Отримує Firebase Auth інстанс
 */
export function getFirebaseAuth(): Auth {
    if (auth) return auth;
    const firebaseApp = initializeFirebase();
    auth = getAuth(firebaseApp);

    if (USE_EMULATOR) {
        connectAuthEmulator(auth, 'http://localhost:9099');
        logService.init('[FirebaseService] Auth Emulator connected at localhost:9099');
    }

    return auth;
}

/**
 * Ініціалізує Google Analytics
 */
export async function initializeAnalytics(): Promise<Analytics | null> {
    if (!browser) return null;
    if (analytics) return analytics;

    try {
        const supported = await isSupported();
        if (!supported) return null;

        const firebaseApp = initializeFirebase();
        analytics = getAnalytics(firebaseApp);
        return analytics;
    } catch (error) {
        console.error('Помилка ініціалізації Firebase Analytics:', error);
        return null;
    }
}

export function getFirebaseApp(): FirebaseApp {
    return initializeFirebase();
}