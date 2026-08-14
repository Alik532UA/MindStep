import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		/**
		 * Сім правил були вимкнені разом, без чисел. Вимкнене правило не має
		 * розміру: не видно ні того, скільки воно ловило б, ні того, чи борг
		 * росте. Числа заміряні прогоном із усіма сімома в `warn`
		 * (2026-08-16) і записані поруч із кожним рядком — щоб наступний
		 * прохід порівнював, а не заміряв наново.
		 */
		rules: {
			// 140 знахідок. Лишається вимкненим до окремого проходу: більшість —
			// параметри обробників подій, які прибираються поштучно.
			'@typescript-eslint/no-unused-vars': 'off',

			// 199 знахідок. `warn`, а не `off`: гейт не червоніє (у lint немає
			// --max-warnings), але детектор нарешті звітує. Було `off` — тобто
			// найбільший борг проєкту не мав жодного індикатора.
			'@typescript-eslint/no-explicit-any': 'warn',

			// 15 знахідок. Вимкнене поки що з тієї ж причини, що й no-unused-vars.
			'@typescript-eslint/ban-ts-comment': 'off',

			/**
			 * SECURITY-v8 § 5: `error`, а не `off`.
			 *
			 * У проєкті рівно одне звернення до `{@html}` — рядок із власного
			 * словника на сторінці подяк, і воно дозволене § 5.3 (вміст, яким
			 * проєкт керує сам). Вимкнене правило означало, що БУДЬ-ЯКЕ нове
			 * `{@html}`, зокрема над рядком із Firestore, пройшло б мовчки.
			 * Тепер єдиний законний випадок позначений директивою в місці
			 * виклику з поясненням, а всі інші — помилка збірки.
			 */
			'svelte/no-at-html-tags': 'error',

			'svelte/no-navigation-without-resolve': 'off',

			// 33 знахідки. `warn`: SVELTE-UI-v8 § 1.5 — each без ключа
			// перебудовує DOM замість переставляння, і це видно на списках
			// лобі та рекордів.
			'svelte/require-each-key': 'warn',

			// 2 знахідки.
			'svelte/prefer-svelte-reactivity': 'warn'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		// `.cjs` — CommonJS за форматом розширення: `require()` тут не техборг.
		files: ['**/*.cjs'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off'
		}
	},
	{
		// У файлах декларацій `declare var` — єдиний спосіб оголосити глобал
		// (`declare let` дає інший scope). Тут no-var не про якість коду.
		files: ['**/*.d.ts'],
		rules: {
			'no-var': 'off'
		}
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'dev-dist/',
			'.private/',
			'.read_for_AI/',
			'playwright-report/',
			'test-results/',
			'static/'
		]
	}
);
