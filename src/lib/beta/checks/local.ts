import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «local».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const LOCAL_CHECKS: readonly BetaCheck[] = [
	// ─────────────── Гра вдвох на одному пристрої ───────────────
	{
		id: 'local_1',
		category: { uk: 'Налаштування партії', en: 'Setting up' },
		coverage: 'manual',
		testid: 'add-player-btn',
		text: {
			uk: 'Натисніть додавання гравця. У переліку з’являється новий рядок з іменем і кольором, які можна змінити.',
			en: 'Press add-player. A new row appears in the list with a name and colour you can change.'
		}
	},
	{
		id: 'local_2',
		category: { uk: 'Налаштування партії', en: 'Setting up' },
		coverage: 'manual',
		text: {
			uk: 'Змініть колір гравця в палітрі. Обраний колір одразу видно в рядку гравця й далі на дошці під час партії.',
			en: 'Change a player’s colour in the palette. The chosen colour shows immediately in the player row and later on the board during the game.'
		}
	},
	{
		id: 'local_3',
		category: { uk: 'Черга ходу', en: 'Turn order' },
		coverage: 'covered',
		test: 'src/lib/controllers/LocalGameController.spec.ts',
		text: {
			uk: 'Під час партії видно, чия черга: ім’я поточного гравця показано окремо від решти.',
			en: 'During the game it is clear whose turn it is: the current player’s name is shown apart from the rest.'
		}
	},
	{
		id: 'local_4',
		category: { uk: 'Черга ходу', en: 'Turn order' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Дочекайтеся ходу другого гравця й спробуйте зробити хід за першого. Хід НЕ мусить пройти: керування належить тому, чия черга.',
			en: 'Wait for the second player’s turn and try to move as the first. The move must NOT go through: the controls belong to whoever is on turn.'
		}
	},
	{
		id: 'local_5',
		category: { uk: 'Завершення', en: 'Ending' },
		coverage: 'testable',
		text: {
			uk: 'Дограйте партію до кінця. У підсумковому вікні перелічено всіх гравців з їхніми рахунками, а переможця позначено.',
			en: 'Play the game to the end. The summary window lists every player with their score, and the winner is marked.'
		}
	},
];
