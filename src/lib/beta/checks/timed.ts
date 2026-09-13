import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «timed».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const TIMED_CHECKS: readonly BetaCheck[] = [
	// ────────────────────────── Гра на час ──────────────────────────
	{
		id: 'timed_1',
		category: { uk: 'Таймер', en: 'Timer' },
		coverage: 'covered',
		test: 'src/lib/utils/timeUtils.spec.ts',
		text: {
			uk: 'Почніть гру на час. Час ходу йде вниз секунда за секундою, у форматі хвилини:секунди.',
			en: 'Start a timed game. The turn clock counts down second by second, in minutes:seconds.'
		}
	},
	{
		id: 'timed_2',
		category: { uk: 'Таймер', en: 'Timer' },
		coverage: 'manual',
		text: {
			uk: 'Дайте часу ходу дійти до нуля, не роблячи ходу. Партія завершується сама, і в підсумковому вікні названо саме цю причину.',
			en: 'Let the turn clock reach zero without moving. The game ends by itself, and the summary window names that reason.'
		}
	},
	{
		id: 'timed_3',
		category: { uk: 'Таймер', en: 'Timer' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Вийдіть у головне меню посеред партії й повернітеся. Час ходу НЕ мусить продовжувати спливати, поки дошки не видно.',
			en: 'Leave to the main menu mid-game and come back. The turn clock must NOT keep running while the board is out of sight.'
		}
	},
	{
		id: 'timed_4',
		category: { uk: 'Рекорд', en: 'Personal best' },
		coverage: 'manual',
		text: {
			uk: 'Наберіть у грі на час більше, ніж ваш попередній рекорд. На сторінці нагород число рекорду стає новим.',
			en: 'Score more in a timed game than your previous best. On the rewards page the best-score number becomes the new one.'
		}
	},
];
