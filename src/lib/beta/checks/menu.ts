import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «menu».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const MENU_CHECKS: readonly BetaCheck[] = [
	// ─────────────────────────── Головне меню ───────────────────────────
	{
		id: 'menu_1',
		category: { uk: 'Запуск', en: 'Startup' },
		coverage: 'manual',
		text: {
			uk: 'Відкрийте головну сторінку. Видно назву гри, велику кнопку гри в центрі та рядок іконок угорі. Консоль браузера (F12 → Console) не містить червоних рядків.',
			en: 'Open the home page. You see the game title, the large play button in the middle, and a row of icons at the top. The browser console (F12 → Console) shows no red lines.'
		}
	},
	{
		id: 'menu_2',
		category: { uk: 'Мова', en: 'Language' },
		coverage: 'covered',
		test: 'tests/e2e/html-lang.spec.ts',
		testid: 'top-language-btn',
		text: {
			uk: 'Натисніть іконку мови в шапці й виберіть English. Підписи кнопок міняються на англійські одразу, без перезавантаження сторінки.',
			en: 'Press the language icon in the header and pick Ukrainian. Button labels change immediately, without reloading the page.'
		}
	},
	{
		id: 'menu_3',
		category: { uk: 'Тема', en: 'Theme' },
		coverage: 'manual',
		testid: 'top-theme-btn',
		text: {
			uk: 'Натисніть іконку теми. Відкривається список тем, у якому позначено поточну; вибір іншої міняє кольори сторінки одразу.',
			en: 'Press the theme icon. A list of themes opens with the current one marked; picking another changes the page colours immediately.'
		}
	},
	{
		id: 'menu_17',
		category: { uk: 'Тема', en: 'Theme' },
		coverage: 'manual',
		testid: 'top-theme-btn',
		text: {
			uk: 'На комп’ютері відкрийте список тем і наведіть курсор на пару, якою ЗАРАЗ не користуєтесь, не натискаючи. Сторінка мусить показати цю пару стиль+тема цілком, а щойно курсор піде — повернутися до попередньої.',
			en: 'On a desktop, open the theme list and hover a pair you are NOT using, without clicking. The page must show that style+theme pair in full and return to the previous one as soon as the pointer leaves.'
		}
	},
	{
		id: 'menu_4',
		category: { uk: 'Тема', en: 'Theme' },
		coverage: 'testable',
		text: {
			uk: 'Виберіть темну тему й перезавантажте сторінку. Сторінка з першого кадру темна — світлого блимання перед появою кольорів немає.',
			en: 'Pick the dark theme and reload the page. The page is dark from the first frame — there is no light flash before the colours appear.'
		}
	},
	{
		id: 'menu_5',
		category: { uk: 'Вибір режиму', en: 'Mode picker' },
		coverage: 'covered',
		test: 'tests/e2e/invariants.spec.ts',
		testid: 'center-play-btn',
		text: {
			uk: 'Натисніть велику кнопку гри в центрі. Відкривається вікно вибору режиму із заголовком; клавіша Esc його закриває.',
			en: 'Press the large play button in the middle. The mode picker opens with a heading; the Esc key closes it.'
		}
	},
	{
		id: 'menu_6',
		category: { uk: 'Вузький екран', en: 'Narrow screen' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Відкрийте головну на телефоні. Сторінка НЕ мусить прокручуватися вбік: горизонтальної смуги прокрутки немає, іконки в шапці видно повністю.',
			en: 'Open the home page on a phone. The page must NOT scroll sideways: there is no horizontal scrollbar, and every header icon is fully visible.'
		}
	},
	{
		id: 'menu_7',
		category: { uk: 'Вузький екран', en: 'Narrow screen' },
		coverage: 'manual',
		text: {
			uk: 'На телефоні прокрутіть головну вниз і вгору. Нижній край вмісту не лишається під панеллю браузера, коли вона згортається.',
			en: 'On a phone, scroll the home page down and back up. The bottom edge of the content does not stay hidden under the browser bar when the bar collapses.'
		}
	},
	{
		id: 'menu_8',
		category: { uk: 'Акаунт і друзі', en: 'Account and friends' },
		coverage: 'manual',
		testid: 'auth-friends-btn',
		text: {
			uk: 'Увійдіть в акаунт, відкрийте «Друзі», задайте імʼя, аватар і країну, збережіть. Перезавантажте сторінку — усе на місці.',
			en: 'Sign in, open “Friends”, set a name, avatar and country, then save. Reload the page — everything is still there.'
		}
	},
	{
		id: 'menu_9',
		category: { uk: 'Акаунт і друзі', en: 'Account and friends' },
		coverage: 'manual',
		testid: 'friends-search-input',
		text: {
			uk: 'Знайдіть другого гравця за ТОЧНОЮ поштою й підпишіться. Коли він підпишеться назустріч, в обох з’явиться позначка «взаємно» — саме вона й означає друзів.',
			en: 'Find the second player by their EXACT email and follow them. When they follow back, both see the “mutual” mark — that is exactly what friends means.'
		}
	},
	{
		id: 'menu_10',
		category: { uk: 'Приватність', en: 'Privacy' },
		coverage: 'manual',
		negative: true,
		testid: 'friends-privacy-search-btn',
		text: {
			uk: 'Вимкніть «Показувати мене в пошуку» й пошукайте себе з другого пристрою за своєю поштою. Вас НЕ мусить бути видно: межу тримає правило бази, а не екран.',
			en: 'Turn off “Show me in search” and look for yourself from the second device by your email. You must NOT be found: the boundary is held by the database rule, not the screen.'
		}
	},
	{
		id: 'menu_11',
		category: { uk: 'Приватність', en: 'Privacy' },
		coverage: 'manual',
		negative: true,
		testid: 'friends-privacy-follow-btn',
		text: {
			uk: 'Вимкніть «Дозволяти підписуватися на мене» й спробуйте підписатися з другого пристрою. Підписка НЕ мусить створитися: мусить бути відмова з підказкою, а не мовчазна кнопка.',
			en: 'Turn off “Let others follow me” and try to follow from the second device. The follow must NOT be created: it must refuse with a hint, not sit there silently.'
		}
	},
	{
		id: 'menu_12',
		category: { uk: 'Приватність', en: 'Privacy' },
		coverage: 'manual',
		negative: true,
		testid: 'friends-privacy-board-btn',
		text: {
			uk: 'Вимкніть «Показувати мене в таблиці лідерів». Ваш рядок мусить зникнути з таблиці й НЕ повернутися після наступної партії.',
			en: 'Turn off “Show me on the leaderboard”. Your row must disappear from the board and must NOT come back after the next game.'
		}
	},
	{
		id: 'menu_15',
		category: { uk: 'Акаунт і друзі', en: 'Account and friends' },
		coverage: 'manual',
		testid: 'auth-google',
		text: {
			uk: 'Увійдіть через Google, маючи анонімний рекорд. Рекорд мусить лишитися: вхід привʼязується до наявного гравця, а не створює нового. Якщо провайдер у консолі вимкнений — мусить бути зрозуміла підказка, а не «не вдалося».',
			en: 'Sign in with Google while holding an anonymous record. The record must stay: the sign-in links to the existing player instead of creating a new one. If the provider is disabled in the console, a clear hint must appear instead of a generic failure.'
		}
	},
	{
		id: 'menu_16',
		category: { uk: 'Акаунт і друзі', en: 'Account and friends' },
		coverage: 'manual',
		text: {
			uk: 'Увійдіть тим самим акаунтом на двох пристроях і поставте рекорд на першому. На другому — з відкритою сторінкою — рекорд мусить оновитися САМ, без перезавантаження.',
			en: 'Sign in with the same account on two devices and set a record on the first. On the second, with the page open, the record must update BY ITSELF, without a reload.'
		}
	},
	{
		id: 'menu_13',
		category: { uk: 'Вихід і видалення', en: 'Signing out and deleting' },
		coverage: 'manual',
		negative: true,
		testid: 'profile-delete-password',
		text: {
			uk: 'Наберіть рекорд, вийдіть з акаунта й увійдіть ІНШИМ. Рекорд НЕ мусить перейти в новий акаунт: вихід стирає місцеве.',
			en: 'Set a record, sign out and sign in with a DIFFERENT account. The record must NOT move to the new account: signing out clears the local data.'
		}
	},
	{
		id: 'menu_14',
		category: { uk: 'Вихід і видалення', en: 'Signing out and deleting' },
		coverage: 'manual',
		testid: 'profile-current-password',
		text: {
			uk: 'Змініть пароль, увівши поточний. Після цього старий пароль НЕ мусить пускати, а видалення акаунта мусить прибрати ваш рядок із таблиці лідерів і з підписок другого гравця.',
			en: 'Change the password by entering the current one. Afterwards the old password must NOT work, and deleting the account must remove your row from the leaderboard and from the second player’s follows.'
		}
	},
];
