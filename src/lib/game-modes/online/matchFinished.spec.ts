// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { GAME_OVER_MODAL, isMatchFinished, isShowingResults } from './matchFinished';

/**
 * «ПАРТІЯ ЗАВЕРШЕНА» З МОГО ПОГЛЯДУ — і чому цього не досить питати одним полем.
 *
 * ## Що ловить цей файл
 *
 * Скарга автора: один гравець натиснув «Грати ще раз», а другий побачив, ніби
 * суперник на мить пропав і повернувся, вікно результатів зникло, і далі він стояв
 * на екрані гри, у якій уже не можна грати.
 *
 * Ланцюг був такий. Перезапуск сусіда чистить спільну ознаку `gameOver` у базі →
 * реконсилятор гасить `uiState.isGameOver` → сторож присутності бачить «партія
 * триває, суперника немає» й відкриває вікно перепідключення через `showModal`, а
 * воно ВИТІСНЯЄ вікно результатів. Захист «не закривати результати» не спрацьовував:
 * ніхто нічого не закривав.
 *
 * Тобто дефект був не в присутності й не в реконсиляторі, а в тому, що «завершено»
 * означало різне у двох файлах. Тут перевіряється спільне визначення.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати `resultsOver` з
 * `isMatchFinished` — червоніє «чужий перезапуск не роззавершує мою партію».
 */

describe('isMatchFinished', () => {
	it('прапорець екрана — завершено', () => {
		expect(isMatchFinished({ uiOver: true, resultsOver: false })).toBe(true);
	});

	/**
	 * ГОЛОВНИЙ ВИПАДОК. Саме тут стояв дефект: спільна ознака зникла з бази (сусід
	 * перезапустив партію), прапорець екрана вже погашено — а мої результати
	 * відкриті, тобто для мене партія завершена.
	 */
	it('чужий перезапуск не роззавершує мою партію', () => {
		expect(
			isMatchFinished({ uiOver: false, resultsOver: true, openModalTestId: GAME_OVER_MODAL })
		).toBe(true);
	});

	/**
	 * Вікно результатів саме собою теж означає «завершено»: випадок, коли стан уже
	 * скинули, а вікно ще стоїть, інакше пускав би сторожа присутності накрити його.
	 */
	it('відкрите вікно результатів означає завершено', () => {
		expect(
			isMatchFinished({ uiOver: false, resultsOver: false, openModalTestId: GAME_OVER_MODAL })
		).toBe(true);
	});

	/**
	 * САМЕ ЦЕЙ ВИПАДОК РОБИТЬ `resultsOver` НЕОБХІДНИМ, і його бракувало в першій
	 * редакції цього файлу: без нього зворотний експеримент (прибрати `resultsOver`)
	 * лишався зеленим, бо решта випадків трималася на відкритому вікні результатів.
	 *
	 * Тут вікно результатів УЖЕ ВИТІСНЕНЕ вікном перепідключення — те, з чого
	 * скарга й почалася. Партія мусить лишатися завершеною: саме з цього сторож
	 * присутності закриває чуже вікно й вертає результати. Якби «завершено»
	 * трималося лише на відкритому вікні, повернення не сталося б ніколи.
	 */
	it('витіснене вікно не робить партію живою', () => {
		expect(
			isMatchFinished({
				uiOver: false,
				resultsOver: true,
				openModalTestId: 'reconnection-modal'
			})
		).toBe(true);
	});

	it('жива партія лишається живою', () => {
		expect(
			isMatchFinished({ uiOver: false, resultsOver: false, openModalTestId: 'reconnection-modal' })
		).toBe(false);
	});

	it('без вікна взагалі — теж жива', () => {
		expect(isMatchFinished({ uiOver: false, resultsOver: false, openModalTestId: null })).toBe(
			false
		);
	});
});

describe('isShowingResults', () => {
	it('результати показуються лише коли вони і в стані, і на екрані', () => {
		expect(
			isShowingResults({ uiOver: false, resultsOver: true, openModalTestId: GAME_OVER_MODAL })
		).toBe(true);
	});

	/**
	 * Стан без вікна — це «партія завершена, вікно вже закрили». Гасити прапорець
	 * тут МОЖНА: людина своє рішення вже прийняла.
	 */
	it('стан без вікна — не показуються', () => {
		expect(isShowingResults({ uiOver: true, resultsOver: true, openModalTestId: null })).toBe(
			false
		);
	});

	it('чуже вікно — не результати', () => {
		expect(
			isShowingResults({ uiOver: true, resultsOver: true, openModalTestId: 'reconnection-modal' })
		).toBe(false);
	});
});
