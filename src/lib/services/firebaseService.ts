/**
 * Firebase Service
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getDatabase, type Database, connectDatabaseEmulator } from 'firebase/database';
import { getAuth, type Auth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics, type Analytics, isSupported } from 'firebase/analytics';
import { logService } from "./logService.svelte";
import { errorHandlerService } from './errorHandlerService';

const isBrowser = typeof window !== 'undefined';

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

const USE_EMULATOR = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let rtdb: Database | null = null;
let auth: Auth | null = null;
let analytics: Analytics | null = null;

export function isFirebaseConfigured(): boolean {
    return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
}

function initializeFirebase(): FirebaseApp {
    if (app) return app;
    const existingApps = getApps();
    if (existingApps.length > 0) {
        app = existingApps[0];
        return app;
    }
    app = initializeApp(firebaseConfig);
    return app;
}

export function getFirestoreDb(): Firestore {
    if (db) return db;
    const firebaseApp = initializeFirebase();
    db = getFirestore(firebaseApp);

    if (USE_EMULATOR) {
        connectFirestoreEmulator(db, '127.0.0.1', 8080);
        logService.init('[FirebaseService] Firestore Emulator connected at 127.0.0.1:8080');
    }
    return db;
}

export function getRealtimeDb(): Database {
    if (rtdb) return rtdb;
    const firebaseApp = initializeFirebase();
    rtdb = getDatabase(firebaseApp);
    if (USE_EMULATOR) {
        connectDatabaseEmulator(rtdb, '127.0.0.1', 9000);
    }
    return rtdb;
}

export function getFirebaseAuth(): Auth {
    if (auth) return auth;
    const firebaseApp = initializeFirebase();
    auth = getAuth(firebaseApp);
    if (USE_EMULATOR) {
        connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    }
    return auth;
}

export async function initializeAnalytics(): Promise<Analytics | null> {
    if (!isBrowser) return null;
    if (analytics) return analytics;
    try {
        const supported = await isSupported();
        if (!supported) return null;
        analytics = getAnalytics(initializeFirebase());
        return analytics;
    } catch (error) {
        return null;
    }
}

export function getFirebaseApp(): FirebaseApp {
    return initializeFirebase();
}
