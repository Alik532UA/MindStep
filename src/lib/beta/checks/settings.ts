import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «settings».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const SETTINGS_CHECKS: readonly BetaCheck[] = [
	// ───────────────── Налаштування й керування ─────────────────
	{
		id: 'settings_1',
		category: { uk: 'Збереження', en: 'Persistence' },
		coverage: 'covered',
		test: 'src/lib/logic/settingsLogic.spec.ts',
		text: {
			uk: 'Змініть кілька налаштувань і перезавантажте сторінку. Усі зміни на місці.',
			en: 'Change a few settings and reload the page. Every change is still there.'
		}
	},
	{
		id: 'settings_2',
		category: { uk: 'Гарячі клавіші', en: 'Hotkeys' },
		coverage: 'manual',
		testid: 'settings-tab-hotkeys',
		text: {
			uk: 'Натисніть вкладку гарячих клавіш і призначте клавішу, яку вже зайнято іншою дією. З’являється вікно про конфлікт із назвами обох дій.',
			en: 'Press the hotkeys tab and assign a key already taken by another action. A window about the conflict appears, naming both actions.'
		}
	},
	{
		id: 'settings_3',
		category: { uk: 'Гарячі клавіші', en: 'Hotkeys' },
		coverage: 'manual',
		text: {
			uk: 'Зніміть призначену клавішу хрестиком біля неї. Клавіша зникає з переліку, і в грі ця дія на неї більше не відповідає.',
			en: 'Remove an assigned key with the cross beside it. The key disappears from the list, and in the game that action no longer responds to it.'
		}
	},
	{
		id: 'settings_4',
		category: { uk: 'Озвучення', en: 'Speech' },
		coverage: 'manual',
		testid: 'speech-toggle',
		text: {
			uk: 'Увімкніть озвучення й зробіть хід. Голос називає напрямок і відстань; для діагонального ходу в озвученні є слово про діагональ.',
			en: 'Turn speech on and make a move. The voice names the direction and the distance; for a diagonal move the speech includes the word for diagonal.'
		}
	},
	{
		id: 'settings_5',
		category: { uk: 'Озвучення', en: 'Speech' },
		coverage: 'manual',
		text: {
			uk: 'Виберіть мову інтерфейсу, для якої в системі немає голосу. Озвучення переходить на англійську й лишається повним — напрямок і відстань разом.',
			en: 'Pick an interface language with no voice installed in the system. Speech falls back to English and stays complete — direction and distance together.'
		}
	},
	{
		id: 'settings_6',
		category: { uk: 'Керування', en: 'Controls' },
		coverage: 'manual',
		negative: true,
		testid: 'board-cell-0-0',
		text: {
			uk: 'Клікніть по клітинці дошки під час партії. Фігура НЕ мусить туди перейти — замість цього з’являється пояснення, як робити хід.',
			en: 'Click a board cell during a game. The piece must NOT move there — an explanation of how to make a move appears instead.'
		}
	},
	{
		id: 'settings_7',
		category: { uk: 'Розкладка панелей', en: 'Panel layout' },
		coverage: 'manual',
		text: {
			uk: 'Увімкніть режим редагування меню й перетягніть панель в іншу колонку. Після перезавантаження сторінки панель лишається там, куди її поклали.',
			en: 'Turn on menu editing mode and drag a panel to another column. After reloading the page the panel stays where you put it.'
		}
	},
];
