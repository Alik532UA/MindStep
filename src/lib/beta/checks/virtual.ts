import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «virtual».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const VIRTUAL_CHECKS: readonly BetaCheck[] = [
	// ───────────────── Гра проти віртуального гравця ─────────────────
	{
		id: 'virtual_1',
		category: { uk: 'Початок партії', en: 'Starting a game' },
		coverage: 'manual',
		text: {
			uk: 'Почніть гру проти віртуального гравця. Спочатку з появою фігури, потім — позначки доступних ходів; позначки з’являються після фігури, а не разом із нею.',
			en: 'Start a game against the virtual player. The piece appears first, then the available-move markers; the markers come after the piece, not together with it.'
		}
	},
	{
		id: 'virtual_2',
		category: { uk: 'Хід гравця', en: 'Player move' },
		coverage: 'covered',
		test: 'src/lib/logic/availableMovesLogic.spec.ts',
		text: {
			uk: 'Позначки доступних ходів стоять по центру клітинок і рівно на тих клітинках, куди фігура справді може піти.',
			en: 'The available-move markers sit in the centre of their cells, and only on cells the piece can actually reach.'
		}
	},
	{
		id: 'virtual_3',
		category: { uk: 'Хід гравця', en: 'Player move' },
		coverage: 'testable',
		text: {
			uk: 'Виберіть напрямок і відстань. Кнопка підтвердження ходу стає активною лише коли вибрано і напрямок, і відстань.',
			en: 'Pick a direction and a distance. The confirm-move button becomes active only when both a direction and a distance are chosen.'
		}
	},
	{
		id: 'virtual_4',
		category: { uk: 'Хід суперника', en: 'Opponent move' },
		coverage: 'manual',
		text: {
			uk: 'Зробіть хід. Панель у центрі дошки одразу пише, який хід зробив суперник, а анімація на дошці починається з невеликою затримкою після цього.',
			en: 'Make a move. The panel in the middle of the board immediately states the opponent’s move, and the board animation starts a short moment after that.'
		}
	},
	{
		id: 'virtual_5',
		category: { uk: 'Хід суперника', en: 'Opponent move' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Зробіть хід і дочекайтеся відповіді. Суперник НЕ мусить робити два ходи підряд: після його ходу знову ваша черга.',
			en: 'Make a move and wait for the reply. The opponent must NOT move twice in a row: after its move it is your turn again.'
		}
	},
	{
		id: 'virtual_6',
		category: { uk: 'Рахунок', en: 'Score' },
		coverage: 'covered',
		test: 'src/lib/services/scoreService.spec.ts',
		text: {
			uk: 'Після кожного ходу рахунок змінюється, а розгорнутий перелік бонусів і штрафів дає в сумі показане число.',
			en: 'The score changes after every move, and the expanded list of bonuses and penalties adds up to the number shown.'
		}
	},
	{
		id: 'virtual_7',
		category: { uk: 'Завершення', en: 'Ending' },
		coverage: 'testable',
		testid: 'cash-out-btn',
		text: {
			uk: 'Натисніть кнопку дострокового завершення. Відкривається вікно з підсумком, у якому названо бонус за дострокове завершення.',
			en: 'Press the cash-out button. A summary window opens naming the bonus for finishing early.'
		}
	},
	{
		id: 'virtual_8',
		category: { uk: 'Завершення', en: 'Ending' },
		coverage: 'testable',
		text: {
			uk: 'Зробіть хід за межі дошки. Відкривається вікно про завершення партії, у якому названо причину.',
			en: 'Move beyond the edge of the board. A window about the end of the game opens, naming the reason.'
		}
	},
	{
		id: 'virtual_9',
		category: { uk: 'Заявка «ходів немає»', en: 'The “no moves” claim' },
		coverage: 'manual',
		negative: true,
		testid: 'center-info-btn',
		text: {
			uk: 'Натисніть «ходів немає» тоді, коли ходи ще є. Партія мусить завершитися помилковою заявкою — вікно з пропозицією продовжити з’явитися НЕ мусить.',
			en: 'Press “no moves” while moves still exist. The game must end as a wrong claim — the window offering to continue must NOT appear.'
		}
	},
	{
		id: 'virtual_10',
		category: { uk: 'Розмір дошки', en: 'Board size' },
		coverage: 'manual',
		text: {
			uk: 'Змініть розмір дошки з ненульовим рахунком. З’являється попередження про скидання прогресу; те саме стається з клавіш «+» і «−».',
			en: 'Change the board size while the score is non-zero. A warning about resetting progress appears; the same happens with the “+” and “−” keys.'
		}
	},
];
