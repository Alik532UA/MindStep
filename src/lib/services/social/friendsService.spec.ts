import { describe, expect, it } from 'vitest';
import { markMutual } from './friendsService';
import { hashEmail } from './emailHash';

/**
 * ДРУЗІ Й ХЕШ ПОШТИ — дві частини соціального шару, які можна перевірити без
 * бази. Решта модуля — читання й записи, і їх судить `npm run check:rules` над
 * емулятором.
 *
 * Перевіряється рівно те, що ламається ТИХО:
 *
 *  1. «Друг» там, де підписка одностороння. Помилка не падає й не видна в
 *     журналі — просто в списку стоїть значок «взаємно» проти людини, яка на вас
 *     не підписана.
 *  2. Хеш, що залежить від регістру або пробілів. Тоді пошук за поштою не
 *     знаходить нікого, і виглядає це як «людини немає», а не як дефект.
 */
describe('взаємність підписок', () => {
	it('взаємна підписка позначається, одностороння — ні', () => {
		const marked = markMutual(['друг', 'незнайомець'], ['друг', 'хтось-третій']);

		expect(marked).toEqual([
			{ uid: 'друг', mutual: true },
			{ uid: 'незнайомець', mutual: false }
		]);
	});

	it('порожні списки не ламають підрахунку', () => {
		expect(markMutual([], ['хтось'])).toEqual([]);
		expect(markMutual(['хтось'], [])).toEqual([{ uid: 'хтось', mutual: false }]);
	});

	it('другий бік НЕ додається в результат', () => {
		// Список підписок мусить лишитися списком підписок: той, хто підписався на
		// мене без взаємності, у «моїх підписках» не з'являється.
		const marked = markMutual(['a'], ['a', 'b', 'c']);
		expect(marked.map((entry) => entry.uid)).toEqual(['a']);
	});
});

describe('хеш пошти', () => {
	it('регістр і пробіли не міняють хеш', async () => {
		const plain = await hashEmail('ivan@example.com');
		const messy = await hashEmail('  Ivan@Example.COM ');

		expect(plain).toBeTruthy();
		expect(messy).toBe(plain);
	});

	it('різні адреси дають різні хеші', async () => {
		expect(await hashEmail('a@example.com')).not.toBe(await hashEmail('b@example.com'));
	});

	it('порожня адреса — це `null`, а не хеш порожнього рядка', async () => {
		// Інакше в базу поїхав би хеш `''`, і всі, у кого пошти немає, знайшлися б
		// одним запитом як одна людина.
		expect(await hashEmail(null)).toBeNull();
		expect(await hashEmail('')).toBeNull();
	});

	it('хеш — шістнадцяткові 64 символи, тобто справді SHA-256', async () => {
		expect(await hashEmail('ivan@example.com')).toMatch(/^[0-9a-f]{64}$/);
	});
});
