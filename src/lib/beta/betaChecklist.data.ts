import type { BetaCheck, BetaTab, Localized } from './betaChecklist.types';

/**
 * Пункти чеклиста бета-тестування (BETA-CHECKLIST-v8 § 2).
 *
 * **Звідки взявся зміст.** Із `.private/docs/testing/checklist/detailed-checklist-v1.md`
 * — 94 пункти, датовані січнем. Перенесено НЕ все, і це рішення, а не недогляд:
 * частини 3–5 того файлу — це беклог фіч («додати чекбокс», «створити
 * адаптивний інтерфейс», «провести рефакторинг»), а не перевірки. Тестувальник
 * не може «перевірити» те, чого ще не збудували; пункт-завдання у списку для
 * людини — рівно те, що § 7.2 називає вигаданим пунктом, і коштує двічі: його
 * читають, а потім розбирають звіт. Беклог лишився там, де був.
 *
 * Перенесене переписано під § 2.1: прибрано оціночні слова («відображається
 * коректно» — вісім разів у джерелі) і внутрішні назви (`VirtualPlayer`,
 * `center-info`, `Test Mode`, шлях `/game/vs-computer`, якого не існує вже
 * невідомо скільки). Замість них — те, що видно на екрані.
 *
 * Додано те, чого в джерелі не було зовсім: онлайн-режим. У 94 пунктах він
 * згадувався ОДИН раз, хоч його переписано цілком (журнал ходів замість поля
 * стану). П'ять пунктів вкладки «Онлайн» — це той самий перелік, що лежав
 * рукописним абзацом у PROJECT-CONTEXT.md під заголовком «що лишилося
 * перевірити людині».
 */

/**
 * Вкладки. Разом мусять заявити КОЖЕН маршрут проєкту — це перевіряє § 5.1,
 * читаючи дерево `src/routes` замість другого списку, який тримають руками.
 */
export const BETA_TABS: readonly BetaTab[] = [
	{
		id: 'menu',
		title: { uk: 'Головне меню', en: 'Main menu' },
		routes: ['/']
	},
	{
		id: 'virtual',
		title: { uk: 'Гра проти віртуального гравця', en: 'Against the virtual player' },
		routes: ['/game/virtual-player']
	},
	{
		id: 'local',
		title: { uk: 'Гра вдвох на одному пристрої', en: 'Two players, one device' },
		routes: ['/local-setup', '/game/local']
	},
	{
		id: 'timed',
		title: { uk: 'Гра на час', en: 'Timed game' },
		routes: ['/game/timed']
	},
	{
		id: 'training',
		title: { uk: 'Тренування', en: 'Training' },
		routes: ['/game/training']
	},
	{
		id: 'online',
		title: { uk: 'Гра в мережі', en: 'Online game' },
		routes: ['/online', '/online/lobby/[roomId]', '/game/online', '/join', '/waiting']
	},
	{
		id: 'settings',
		title: { uk: 'Налаштування й керування', en: 'Settings and controls' },
		routes: ['/settings', '/controls']
	},
	{
		id: 'content',
		title: { uk: 'Правила, нагороди, подяки', en: 'Rules, rewards, credits' },
		routes: ['/rules', '/rewards', '/supporters']
	}
];

/**
 * Маршрути, яким чеклист не потрібен, — явним переліком, а не відсутністю
 * рядка (§ 5.1). Відсутність не відрізнити від забутого.
 */
export const BETA_UNCOVERED_ROUTES: readonly string[] = [
	// Майданчики для ручних оглядів: існують лише в dev, до гравця не доїжджають.
	'/test',
	'/test/buttons',
	'/test-error',
	'/test-main-menu-v2',
	// Сама сторінка чеклиста: перевіряти списком список — порожня рекурсія.
	// Дописано разом із самим маршрутом; доти інваріант § 5.1 цього винятку не
	// приймав, бо виняток, що переживає сторінку, лишає наступну без перевірок.
	'/beta-test-checklists'
];

export const BETA_CHECKS: readonly BetaCheck[] = [
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

	// ────────────────────────── Тренування ──────────────────────────
	{
		id: 'training_1',
		category: { uk: 'Підказки', en: 'Hints' },
		coverage: 'manual',
		text: {
			uk: 'Почніть тренування. Доступні ходи видно на дошці, і поруч є пояснення, що робити далі.',
			en: 'Start training. The available moves are visible on the board, and an explanation of what to do next sits alongside.'
		}
	},
	{
		id: 'training_2',
		category: { uk: 'Підказки', en: 'Hints' },
		coverage: 'covered',
		test: 'src/lib/controllers/LocalGameController.spec.ts',
		text: {
			uk: 'У тренуванні немає таймера ходу — на панелі керування його не показано зовсім.',
			en: 'Training has no turn clock — it is not shown on the control panel at all.'
		}
	},
	{
		id: 'training_3',
		category: { uk: 'Підказки', en: 'Hints' },
		coverage: 'manual',
		negative: true,
		text: {
			uk: 'Зробіть у тренуванні хід за межі дошки. Рахунок НЕ мусить піти в мінус — тренування не карає балами.',
			en: 'In training, move beyond the edge of the board. The score must NOT go negative — training does not punish with points.'
		}
	},

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

/**
 * Текст обв'язки сторінки — тим самим двомовним механізмом, що й пункти.
 *
 * Не у словнику інтерфейсу, і з тієї самої причини, що в § 2.4: сторінка
 * службова, її бачить тестувальник, а паритет чотирьох мов зробив би кожну
 * правку чотирикратною. Дві мови в даних; решта мов інтерфейсу показує
 * англійський — так само, як самі пункти.
 */
export const BETA_UI = {
	pageTitle: { uk: 'Чеклист бета-тестування', en: 'Beta testing checklist' },
	intro: {
		uk: 'Список того, чого не перевіряє машина. Ставте позначку одразу — вона запам’ятовується разом із версією збірки, тож позначка з іншої версії буде видна окремо.',
		en: 'A list of what machines do not check. Mark as you go — each mark is stored with the build version, so a mark from another build stays visible as such.'
	},
	levelManual: { uk: 'Лише руками', en: 'By hand only' },
	levelManualHint: {
		uk: 'Автотестом це не перевіряється — потрібне око, палець або другий пристрій.',
		en: 'No automated test covers this — it needs an eye, a finger, or a second device.'
	},
	levelTestable: { uk: 'Можна покрити тестом, покриття немає', en: 'Coverable, not covered' },
	levelTestableHint: {
		uk: 'Це готовий перелік тестів, яких бракує.',
		en: 'This is a ready-made list of the tests that are missing.'
	},
	levelCovered: { uk: 'Покрито автотестом', en: 'Covered by a test' },
	levelCoveredHint: {
		uk: 'Контрольна група. Помилка тут — звіт про дефект ТЕСТА, а не гри, і у звіті вона позначається окремо.',
		en: 'A control group. A failure here reports a defect in the TEST, not the game, and the report flags it separately.'
	},
	voteFail: { uk: 'Не працює', en: 'Broken' },
	voteWeird: { uk: 'Працює, але дивно', en: 'Works, but oddly' },
	voteOk: { uk: 'Працює', en: 'Works' },
	staleHint: { uk: 'позначено на іншій версії', en: 'marked on another build' },
	boundary: { uk: 'межа', en: 'boundary' },
	progress: { uk: 'Позначено на цій версії', en: 'Marked on this build' },
	copyReport: { uk: 'Скопіювати звіт', en: 'Copy the report' },
	copied: { uk: 'Звіт у буфері обміну.', en: 'The report is in the clipboard.' },
	copyFailed: {
		uk: 'Буфер обміну недоступний. Звіт нижче — виділіть і скопіюйте вручну.',
		en: 'The clipboard is unavailable. The report is below — select it and copy by hand.'
	},
	clear: { uk: 'Стерти всі позначки', en: 'Erase every mark' },
	clearConfirm: {
		uk: 'Стерти всі позначки? Скасувати це не вийде.',
		en: 'Erase every mark? This cannot be undone.'
	},
	nothingMarked: { uk: 'Жодного пункта ще не позначено.', en: 'Nothing marked yet.' }
} as const satisfies Record<string, Localized>;
