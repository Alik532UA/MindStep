/**
 * @file errors.ts
 * @description Кастомні класи помилок для типізованої обробки в додатку.
 */

/**
 * Базовий клас для всіх помилок додатку.
 */
export class AppError extends Error {
    constructor(
        public message: string,
        public code: string = 'APP_ERROR',
        public context?: Record<string, any>
    ) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

/**
 * Помилки, пов'язані з онлайн-кімнатами та Firebase.
 */
export class RoomError extends AppError {
    constructor(message: string, code: string = 'ROOM_ERROR', context?: Record<string, any>) {
        super(message, code, context);
    }
}

/**
 * Помилки аутентифікації та сесії гравця.
 */
export class AuthError extends AppError {
    constructor(message: string, code: string = 'AUTH_ERROR', context?: Record<string, any>) {
        super(message, code, context);
    }
}

/**
 * Помилки ігрової логіки та валідації ходів.
 */
export class GameLogicError extends AppError {
    constructor(message: string, code: string = 'GAME_LOGIC_ERROR', context?: Record<string, any>) {
        super(message, code, context);
    }
}

/**
 * Помилки мережевого з'єднання та синхронізації.
 */
export class NetworkError extends AppError {
    constructor(message: string, code: string = 'NETWORK_ERROR', context?: Record<string, any>) {
        super(message, code, context);
    }
}
