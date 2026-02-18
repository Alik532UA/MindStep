/**
 * @file utils.ts
 * @description Загальні допоміжні типи та інтерфейси.
 */

/**
 * Інтерфейс для об'єктів, що мають стан, який можна скинути до початкового значення.
 */
export interface Resettable {
    /**
     * Скидає стан об'єкта до початкового (дефолтного) значення.
     */
    reset(): void;
}

/**
 * Перевіряє, чи об'єкт реалізує інтерфейс Resettable.
 */
export function isResettable(obj: any): obj is Resettable {
    return obj && typeof obj.reset === 'function';
}
