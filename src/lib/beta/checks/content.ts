import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «content».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const CONTENT_CHECKS: readonly BetaCheck[] = [
	// ───────────── Правила, нагороди, подяки ─────────────
	{
		id: 'content_1',
		category: { uk: 'Правила', en: 'Rules' },
		coverage: 'manual',
		text: {
			uk: 'Відкрийте сторінку правил. Текст перекладено обраною мовою повністю — українських слів в англійському інтерфейсі немає.',
			en: 'Open the rules page. The text is fully translated into the chosen language — no Ukrainian words in the English interface.'
		}
	},
	{
		id: 'content_2',
		category: { uk: 'Правила', en: 'Rules' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Прочитайте сторінку правил до кінця. Назв файлів, посилань на технічні документи й службових термінів у тексті бути НЕ мусить.',
			en: 'Read the rules page to the end. There must be NO file names, links to technical documents, or internal terms in the text.'
		}
	},
	{
		id: 'content_3',
		category: { uk: 'Нагороди', en: 'Rewards' },
		coverage: 'manual',
		testid: 'top-rewards-btn',
		text: {
			uk: 'Натисніть іконку нагород. Видно ваш рекорд, таблицю найкращих гравців і перелік досягнень; відкриті досягнення відрізняються від закритих не лише кольором.',
			en: 'Press the rewards icon. You see your best score, the leaderboard, and the list of achievements; unlocked achievements differ from locked ones by more than colour.'
		}
	},
	{
		id: 'content_4',
		category: { uk: 'Нагороди', en: 'Rewards' },
		coverage: 'manual',
		text: {
			uk: 'Змініть своє ім’я в рейтингу й перезавантажте сторінку. У таблиці найкращих гравців стоїть нове ім’я.',
			en: 'Change your leaderboard name and reload the page. The leaderboard shows the new name.'
		}
	},
	{
		id: 'content_5',
		category: { uk: 'Подяки', en: 'Credits' },
		coverage: 'manual',
		text: {
			uk: 'Відкрийте сторінку подяк. Перелік меценатів видно, кнопка підтримки відкриває сторінку оплати в новій вкладці.',
			en: 'Open the credits page. The list of supporters is visible, and the support button opens the payment page in a new tab.'
		}
	}
];
