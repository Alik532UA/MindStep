import type { BetaCheck } from '../betaChecklist.types';

/**
 * Пункти вкладки «online».
 *
 * Вкладка — це і є одиниця відповідальності чеклиста: людина проходить її
 * цілком за один захід, і правиться вона разом із тим екраном, про який вона.
 * Доти всі вісім лежали одним файлом, і кожен новий пункт підводив його до
 * стелі § 7, яку в цьому проєкті піднімати не можна: перелік лише скорочується.
 */
export const ONLINE_CHECKS: readonly BetaCheck[] = [
	// ───────────────────────── Гра в мережі ─────────────────────────
	{
		id: 'online_1',
		category: { uk: 'Кімната', en: 'Room' },
		coverage: 'manual',
		testid: 'create-room-btn',
		text: {
			uk: 'На двох пристроях: на першому натисніть створення кімнати, на другому знайдіть її в переліку й зайдіть. Обидва бачать однаковий склад гравців.',
			en: 'On two devices: on the first, press create-room; on the second, find it in the list and join. Both see the same list of players.'
		}
	},
	{
		id: 'online_2',
		category: { uk: 'Хід', en: 'Move' },
		coverage: 'covered',
		test: 'src/lib/sync/matchReplay.spec.ts',
		text: {
			uk: 'Зробіть по ходу кожним пристроєм. Обидва екрани показують ту саму позицію фігури й той самий рахунок.',
			en: 'Make one move from each device. Both screens show the same piece position and the same score.'
		}
	},
	{
		id: 'online_3',
		category: { uk: 'Продовження партії', en: 'Continuing a game' },
		coverage: 'manual',
		text: {
			uk: 'Дочекайтеся стану «ходів немає» й проголосуйте «продовжити» з обох пристроїв. Позиція фігури й рахунок зберігаються, а лічильники відвідувань клітинок обнуляються.',
			en: 'Reach the “no moves” state and vote “continue” from both devices. The piece position and the score are kept, while the cell-visit counters reset to zero.'
		}
	},
	{
		id: 'online_4',
		category: { uk: 'Повернення', en: 'Rejoining' },
		coverage: 'manual',
		text: {
			uk: 'Посеред партії закрийте сторінку на одному пристрої й відкрийте її знову. Партія відтворюється з тим самим рахунком і тією самою позицією.',
			en: 'Mid-game, close the page on one device and open it again. The game comes back with the same score and the same position.'
		}
	},
	{
		id: 'online_5',
		category: { uk: 'Присутність', en: 'Presence' },
		coverage: 'manual',
		text: {
			uk: 'Вимкніть мережу на одному пристрої. Другий за кілька секунд позначає гравця відсутнім; після повернення мережі позначка знімається.',
			en: 'Turn off the network on one device. Within seconds the other marks that player as away; when the network returns, the mark goes away.'
		}
	},
	{
		id: 'online_6',
		category: { uk: 'Завершення', en: 'Ending' },
		coverage: 'manual',
		text: {
			uk: 'Завершіть партію з першого пристрою, потім в іншій партії — з другого. Обидва рази підсумкове вікно з’являється на ОБОХ пристроях.',
			en: 'End a game from the first device, then in another game from the second. Both times the summary window appears on BOTH devices.'
		}
	},
	{
		id: 'online_7',
		category: { uk: 'Чат', en: 'Chat' },
		coverage: 'manual',
		testid: 'chat-send-btn',
		text: {
			uk: 'Напишіть повідомлення в чат кімнати й натисніть надсилання. Повідомлення видно на другому пристрої з іменем автора.',
			en: 'Type a message in the room chat and press send. The message shows on the second device with its author’s name.'
		}
	},
	{
		id: 'online_8',
		category: { uk: 'Межі', en: 'Boundaries' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Спробуйте зайти в кімнату, у якій уже двоє гравців. Третім увійти НЕ мусить вдатися — з’являється повідомлення про причину.',
			en: 'Try to join a room that already has two players. Joining as a third must NOT succeed — a message explains why.'
		}
	},
	{
		id: 'online_9',
		category: { uk: 'Межі', en: 'Boundaries' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Зайдіть у лобі не господарем кімнати. Змінити назву кімнати або її налаштування НЕ мусить бути можливо.',
			en: 'Enter a lobby as someone other than the room host. Changing the room name or its settings must NOT be possible.'
		}
	},
];
