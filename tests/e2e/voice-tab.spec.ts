import { expect, test } from '@playwright/test';

/**
 * Вкладка голосу виживає на переліку голосів, який віддає Apple.
 *
 * ## Привід
 *
 * `/settings?tab=voice` на пристрої Apple показував сторінку «Упс! Щось пішло
 * не так» замість переліку голосів. У Chrome під Windows та сама адреса
 * працює — тобто в джерелах дефекту не видно НІЧИМ: ні типи, ні lint, ні
 * збірка, ні гейт axe його не бачать, бо всі вони дивляться на код, а різниця
 * приходить від списку, який віддає система.
 *
 * ## Чому це e2e, а не юніт
 *
 * Юніт-перевірка (`services/speech/voiceLoader.spec.ts`) доводить, що перелік
 * приходить у компонент без повторів. Вона НЕ доводить другої половини: що
 * Svelte на такому переліку не кидає. `each_key_duplicate` — це рантайм
 * компілятора, і побачити його можна лише в браузері, який справді малює
 * `{#each … (voice.voiceURI)}`.
 *
 * ## Чому перелік підставляється, а не беруться справжні голоси
 *
 * У раннері CI системних голосів або немає зовсім, або вони інші на кожній
 * машині. Перевірка на справжньому переліку доводила б різне в різних місцях —
 * тобто нічого. Тут підставляється РІВНО та форма, через яку дефект і виник:
 * той самий `voiceURI` кілька разів.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати
 * `VoiceLoader.dedupeByURI` з `voiceState.initializeVoices()` — перевірка
 * червоніє на сторінці помилки замість переліку.
 */

/** Форма, у якій `getVoices()` віддає голоси на пристроях Apple. */
const APPLE_VOICES = [
	{ name: 'Lesya', lang: 'uk-UA', voiceURI: 'com.apple.voice.compact.uk-UA.Lesya' },
	{ name: 'Lesya', lang: 'uk-UA', voiceURI: 'com.apple.voice.compact.uk-UA.Lesya' },
	{ name: 'Samantha', lang: 'en-US', voiceURI: 'com.apple.voice.compact.en-US.Samantha' },
	{ name: 'Samantha', lang: 'en-US', voiceURI: 'com.apple.voice.compact.en-US.Samantha' },
	{ name: 'Samantha', lang: 'en-US', voiceURI: 'com.apple.voice.compact.en-US.Samantha' },
	{ name: 'Daniel', lang: 'en-GB', voiceURI: 'com.apple.voice.compact.en-GB.Daniel' }
];

test('вкладка голосу малює перелік, коли getVoices() віддає повтори', async ({ page }) => {
	await page.addInitScript((voices) => {
		const fake = voices.map((v) => ({ ...v, default: false, localService: true }));
		// Підміна ДО завантаження застосунку: `speechService` кличе
		// `loadAndGetVoices()` уже в тілі модуля, тобто до першого рендеру.
		Object.defineProperty(window, 'speechSynthesis', {
			configurable: true,
			value: {
				getVoices: () => fake,
				speak: () => {},
				cancel: () => {},
				onvoiceschanged: null
			}
		});
	}, APPLE_VOICES);

	await page.goto('/settings?tab=voice');

	const list = page.getByTestId('voice-list');
	const errorPage = page.getByTestId('error-boundary-page');

	/*
	 * СПЕРШУ ЧЕКАЄМО НА РЕЗУЛЬТАТ, і лише потім судимо який.
	 *
	 * Перша редакція цієї перевірки починалася з
	 * `expect(errorPage).toHaveCount(0)` — і на навмисно поверненому дефекті
	 * ПРОЙШЛА. Причина в тому, що `toHaveCount(0)` про відсутній елемент
	 * істинне НЕГАЙНО: одразу після `goto()` сторінки помилки ще немає, бо
	 * перелік голосів приходить асинхронно (ліниві `import()` + запас 1000 мс у
	 * `VoiceLoader`). Тобто найбільш діагностичне твердження виконувалося
	 * раніше, ніж дефект міг статися.
	 *
	 * `list.or(errorPage)` дає точку очікування, яка спрацює на будь-якому з
	 * двох результатів; після неї обидва твердження вже щось означають.
	 */
	await expect(list.or(errorPage).first(), 'вкладка не дійшла ні до переліку, ні до помилки').toBeVisible();

	await expect(
		errorPage,
		'вкладка впала на сторінку помилки — найімовірніше each_key_duplicate ' +
			'на повторному voiceURI (див. VoiceLoader.dedupeByURI)'
	).toHaveCount(0);

	await expect(list, 'перелік голосів не відмалювався').toBeVisible();

	/*
	 * ДВА пункти із шести записів, і друге число тут важливіше за перше.
	 *
	 * `filterVoicesByLang` віддає ЛИШЕ бажаний діалект, коли той знайшовся:
	 * для `uk` це `uk-UA` (двічі Lesya), для `en` — `en-US` (тричі Samantha).
	 * `Daniel` із `en-GB` до переліку не доїжджає взагалі — і це наявна
	 * поведінка фільтра, а не наслідок прибирання повторів. Після дедуплікації
	 * лишається по одному: Lesya і Samantha.
	 */
	const buttons = list.getByRole('button');
	await expect(buttons).toHaveCount(2);

	// Канарка на саму підміну: якби вона не доїхала, `getVoices()` віддав би
	// справжні голоси раннера (найчастіше нуль), і перевірка вище зеленіла б на
	// порожньому переліку.
	await expect(buttons.first()).toContainText('Lesya');
});
