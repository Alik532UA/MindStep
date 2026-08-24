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
			/**
			 * SVELTE-CORE-v8 § 6 — головний борг цього проєкту, і донедавна
			 * єдиний із семи, який нічим не вимірювався.
			 *
			 * 9 знахідок: `writable`/`derived` зі `svelte/store` у семи сервісах
			 * та i18n. Це не стилістика — це два різні механізми реактивності в
			 * одному застосунку, і межа між ними проходить не по шару, а по
			 * тому, коли який файл писали.
			 *
			 * `warn`, а не `error`: міграція store → $state міняє поведінку
			 * рантайму в найбільшому проєкті, і перевірити її можна лише руками.
			 * Але тепер борг має розмір, і він може лише зменшуватися.
			 *
			 * `get` НЕ заборонений: `svelte-i18n` — store-based за архітектурою,
			 * і читати з нього поза компонентом інакше не можна.
			 */
			'no-restricted-imports': [
				'warn',
				{
					paths: [
						{
							name: 'svelte/store',
							importNames: ['writable', 'readable', 'derived'],
							message:
								'Svelte 5: стан — $state/$derived у класі-контролері (.svelte.ts). SVELTE-CORE-v8, анти-патерни.'
						},
						{
							name: '$app/stores',
							message:
								'Deprecated із SvelteKit 2.12: `import { page } from "$app/state"`. SVELTE-CORE-v8 § 1.8.'
						}
					]
				}
			],

			// SECURITY-v8 § 13. Нуль звернень — тож одразу `error`. CSP цих
			// конструкцій не дозволяє, тож помилка виявилася б лише в рантаймі.
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-new-func': 'error',
			'no-script-url': 'error',

			// I18N-v8 § 4.3, HIGH. Нуль звернень після переходу звіту логів на
			// ISO — тож `error` одразу, щоб назад воно не повернулося.
			'no-restricted-syntax': [
				'error',
				{
					selector:
						'CallExpression[arguments.length=0][callee.property.name=/^toLocale(String|DateString|TimeString)$/]',
					message:
						'I18N-v8 § 4.3: передайте локаль явно — без неї береться локаль системи, а не мова сайту.'
				}
			],

			// ACCESSIBILITY-v8 § 10.5: a11y-попередження компілятора Svelte.
			// Нуль знахідок.
			'svelte/valid-compile': 'error',

			// 121 знахідка (було 140 → 123; заміряно `npx eslint . -f json` 2026-08-20).
			// Було `off` — тобто борг не мав розміру й міг рости непоміченим.
			// `warn` нічого не ламає (у lint немає --max-warnings), але число
			// тепер видно в кожному прогоні. Більшість — параметри обробників
			// подій, які прибираються поштучно.
			'@typescript-eslint/no-unused-vars': 'warn',

			// 166 знахідок (було 199 → 167; заміряно `npx eslint . -f json` 2026-08-20).
			// `warn`, а не `off`: гейт не червоніє (у lint немає --max-warnings),
			// але детектор нарешті звітує. Було `off` — тобто найбільший борг
			// проєкту не мав жодного індикатора.
			'@typescript-eslint/no-explicit-any': 'warn',

			/**
			 * Нуль знахідок — тому `error`, а не `warn`.
			 *
			 * Було `off`, потім `warn` із 15 знахідками. Тепер `@ts-ignore` у
			 * проєкті немає жодного: вісім, що лишалися, пригнічували справжні
			 * розходження типів (поле, якого немає в payload; назва дії, що
			 * випадала з union; виклик методу без обовʼязкового аргументу), і
			 * кожне з них знайшлося рівно тоді, коли коментар прибрали.
			 *
			 * `error` тут нічого не забороняє назавжди: типові налаштування
			 * правила дозволяють `@ts-expect-error` із описом причини. Різниця
			 * принципова — `@ts-expect-error` САМ стає помилкою, коли пригнічена
			 * проблема зникає, тобто не переживає власну причину.
			 */
			'@typescript-eslint/ban-ts-comment': 'error',

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

			// 28 знахідок. SEO-v8 § 1.5: resolve() типізований проти списку
			// реальних маршрутів, тож помилка в адресі стає помилкою компіляції.
			// `warn`, бо заміна міняє навігацію, а перевірити її можна лише руками.
			'svelte/no-navigation-without-resolve': 'warn',

			// 15 знахідок (було 31). `warn`: SVELTE-UI-v8 § 1.5 — each без ключа
			// перебудовує DOM замість переставляння, і це видно на списках
			// лобі та рекордів.
			'svelte/require-each-key': 'warn',

			// 2 знахідки. Усі числа в цьому файлі заміряні `npx eslint . -f json`;
			// станом на 2026-08-20 разом це 341 попередження і 0 помилок.
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
			/*
			 * Тут лежить КОПІЯ зібраного сайту, яку `lighthouserc.cjs` кладе під
			 * префіксом base, щоб абсолютні шляхи SPA-фолбека сходилися. Це той
			 * самий мініфікований код, що в `build/`, тобто перевіряти його
			 * безглуздо: після одного прогону Lighthouse `npm run lint` давав
			 * помилки в чанках Vite.
			 */
			'.lighthouseci/',
			'static/'
		]
	},

	/**
	 * STORAGE-NAMESPACE-v8, Крок 3: прямий доступ до Web Storage заборонений.
	 *
	 * Origin спільний із сусідніми проєктами, тож ключ без префікса — це не
	 * дрібниця, а чужі дані. Доти заборона трималася лише на рядку в AGENTS.md,
	 * і три проєкти з восьми вже її порушували, чого не помітив ніхто.
	 *
	 * Правил два, і друге не зайве: `no-restricted-globals` НЕ ловить
	 * `window.localStorage`. Канон у Кроці 3 наводить лише його — а саме ця
	 * форма й трапилася в DigitalWorkshop, тричі поспіль.
	 */
	{
		rules: {
			'no-restricted-globals': [
				'error',
				{ name: 'localStorage', message: 'STORAGE-NAMESPACE-v8: лише через фасад storage.' },
				{ name: 'sessionStorage', message: 'STORAGE-NAMESPACE-v8: лише через фасад storage.' }
			],
			'no-restricted-properties': [
				'error',
				{ object: 'window', property: 'localStorage', message: 'STORAGE-NAMESPACE-v8: лише через фасад storage.' },
				{ object: 'window', property: 'sessionStorage', message: 'STORAGE-NAMESPACE-v8: лише через фасад storage.' }
			]
		}
	},
	{
		// Три категорії, і кожна законна за самим каноном:
		//   1. Фасад — тут прямий доступ Є реалізацією (Крок 3).
		//   2. Модуль міграції — читає ключі БЕЗ префікса, і це єдине легальне
		//      місце, де так можна (Крок 4). Лежить у services/ або utils/
		//      залежно від проєкту, тому шаблон без шляху.
		//   3. Тести фасаду й e2e — вони мусять читати й засівати сирі ключі,
		//      інакше нічим довести, що префікс справді додається.
		files: [
			'src/lib/services/storage.ts',
			'src/lib/services/storage/**',
			'src/lib/config/storage.ts',
			'**/storageMigration.ts',
			'**/storage.test.ts',
			'**/storage.spec.ts',
			'tests/**',
			'e2e/**'
		],
		rules: {
			'no-restricted-globals': 'off',
			'no-restricted-properties': 'off'
		}
	}
);
