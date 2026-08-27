import { describe, expect, it } from 'vitest';
import { VoiceLoader } from './voiceLoader';

/**
 * Перелік голосів, який приходить від браузера, і чому його не можна віддавати
 * у keyed `{#each}` як є.
 *
 * ## Привід — звіт із пристрою Apple
 *
 * `/settings?tab=voice` показував сторінку «Упс! Щось пішло не так» замість
 * переліку голосів. У Chrome під Windows та сама адреса працює, тож у джерелах
 * дефекту не видно нічим: ні типи, ні lint, ні збірка, ні гейт axe його не
 * бачать — усі вони дивляться на код, а різниця приходить від СПИСКУ, який
 * віддає система.
 *
 * ## Механізм
 *
 * `speechSynthesis.getVoices()` НЕ обіцяє унікальності `voiceURI`, і на Apple
 * той самий голос приходить у списку кілька разів. `VoiceList.svelte` малює
 * перелік через `{#each … (voice.voiceURI)}`, а Svelte 5 на повторному ключі
 * кидає `each_key_duplicate` — і кидає його НЕ ЛИШЕ в dev: у зібраному
 * застосунку це `Error("https://svelte.dev/e/each_key_duplicate")`, тобто
 * виняток без тексту. Його перехоплює `svelte:boundary`, і людина бачить
 * сторінку помилки без жодної причини.
 *
 * ## Чому перевірка саме тут, а не в компоненті
 *
 * Дефект — не в розмітці, а в припущенні про дані. Виправлення теж: перелік
 * мусить приходити в компонент уже без повторів, ким би він не малювався.
 * Функція чиста, тож перевірка не потребує ні DOM, ні браузера — і саме тому
 * вона запуститься в кожному прогоні, а не лишиться ручним кроком.
 *
 * Зворотний експеримент (AI-AGENT-PITFALLS-v8 § 1.1): прибрати виклик
 * `dedupeByURI` з `voiceState.initializeVoices()` — перевірка нижче лишається
 * зеленою (вона про функцію), а перевірка «перелік для keyed each» червоніє.
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

describe('перевірка жива', () => {
	it('зразок справді містить повтори — інакше перевіряти нема що', () => {
		const uris = APPLE_VOICES.map((v) => v.voiceURI);
		expect(new Set(uris).size, 'у зразку немає повторів, і він нічого не відтворює').toBeLessThan(
			uris.length
		);
	});
});

describe('dedupeByURI (VoiceLoader)', () => {
	it('прибирає повтори за voiceURI', () => {
		const unique = VoiceLoader.dedupeByURI(APPLE_VOICES);
		expect(unique.map((v) => v.voiceURI)).toEqual([
			'com.apple.voice.compact.uk-UA.Lesya',
			'com.apple.voice.compact.en-US.Samantha',
			'com.apple.voice.compact.en-GB.Daniel'
		]);
	});

	it('лишає ПЕРШЕ входження, бо саме його знайде speechService', () => {
		// `speechService` бере голос через `allVoices.find(v => v.voiceURI === …)`,
		// тобто перший збіг. Якби тут лишалося останнє, перелік на екрані
		// показував би не той голос, який заговорить.
		const withDistinctNames = [
			{ name: 'перший', lang: 'uk-UA', voiceURI: 'same' },
			{ name: 'другий', lang: 'uk-UA', voiceURI: 'same' }
		];
		expect(VoiceLoader.dedupeByURI(withDistinctNames).map((v) => v.name)).toEqual(['перший']);
	});

	it('не чіпає перелік без повторів і зберігає порядок', () => {
		const list = [
			{ name: 'a', lang: 'uk-UA', voiceURI: 'a' },
			{ name: 'b', lang: 'en-US', voiceURI: 'b' }
		];
		expect(VoiceLoader.dedupeByURI(list)).toEqual(list);
	});

	it('порожній перелік не кидає', () => {
		expect(VoiceLoader.dedupeByURI([])).toEqual([]);
	});
});

/**
 * Складання переліку — те, що справді малює `VoiceList.svelte`.
 *
 * `voiceState.initializeVoices()` збирає мовні голоси плюс англійські, і саме
 * цей склеєний масив іде в keyed `{#each}`. Перевірка повторює його форму на
 * чистих функціях: обидва боки склейки можуть містити повтори — і з одного
 * джерела, і з обох одразу.
 */
describe('перелік для keyed each не має повторів (Svelte 5 each_key_duplicate)', () => {
	it('склеєні мовні й англійські голоси дають унікальні ключі', () => {
		const main = VoiceLoader.filterVoicesByLang(
			APPLE_VOICES as unknown as SpeechSynthesisVoice[],
			'uk'
		);
		const english = VoiceLoader.filterVoicesByLang(
			APPLE_VOICES as unknown as SpeechSynthesisVoice[],
			'en'
		);

		// Канарка: без повторів на вході твердження нижче нічого не доводить.
		expect(
			[...main, ...english].length,
			'фільтр не віддав жодного голосу — перевірка порожня'
		).toBeGreaterThan(3);

		const keys = VoiceLoader.dedupeByURI([...main, ...english]).map((v) => v.voiceURI);
		expect(new Set(keys).size, `повторний ключ валить рендер: ${keys.join(', ')}`).toBe(
			keys.length
		);
	});

	it('порядок зберігається: спершу мовні, потім англійські', () => {
		const main = VoiceLoader.filterVoicesByLang(
			APPLE_VOICES as unknown as SpeechSynthesisVoice[],
			'uk'
		);
		const english = VoiceLoader.filterVoicesByLang(
			APPLE_VOICES as unknown as SpeechSynthesisVoice[],
			'en'
		);
		const merged = VoiceLoader.dedupeByURI([...main, ...english]);
		expect(merged[0].lang).toBe('uk-UA');
		expect(merged.slice(1).every((v) => v.lang.startsWith('en'))).toBe(true);
	});
});
