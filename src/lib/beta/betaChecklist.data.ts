import type { BetaCheck, BetaTab, Localized } from './betaChecklist.types';
import { CONTENT_CHECKS } from './checks/content';
import { LOCAL_CHECKS } from './checks/local';
import { MENU_CHECKS } from './checks/menu';
import { ONLINE_CHECKS } from './checks/online';
import { SETTINGS_CHECKS } from './checks/settings';
import { TIMED_CHECKS } from './checks/timed';
import { TRAINING_CHECKS } from './checks/training';
import { VIRTUAL_CHECKS } from './checks/virtual';

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
	...CONTENT_CHECKS,
	...LOCAL_CHECKS,
	...MENU_CHECKS,
	...ONLINE_CHECKS,
	...SETTINGS_CHECKS,
	...TIMED_CHECKS,
	...TRAINING_CHECKS,
	...VIRTUAL_CHECKS
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
	/**
	 * Другий крок стирання (§ 6.3). Напис каже, що станеться при НАСТУПНОМУ
	 * натисканні: доти цей рядок ішов у `confirm()`, тобто був питанням у чужому
	 * діалозі, а тепер він — сама кнопка.
	 */
	clearConfirm: {
		uk: 'Точно стерти? Натисніть ще раз',
		en: 'Really erase? Press again'
	},
	tabProgress: { uk: 'позначено у вкладці', en: 'marked on this tab' },
	nothingMarked: { uk: 'Жодного пункта ще не позначено.', en: 'Nothing marked yet.' }
} as const satisfies Record<string, Localized>;
