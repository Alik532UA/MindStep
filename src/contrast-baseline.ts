/**
 * Борг контрасту палітри — рядки, які лише ЗНИКАЮТЬ (ACCESSIBILITY-v8 § 6).
 *
 * Перезаміряно 2026-08-28: **вісімнадцять** комбінацій (шість стилів × ТРИ
 * теми). Пари беруться з правил CSS, які оголошують і тло, і колір тексту, і в
 * яких ОБИДВА боки — токени теми.
 *
 * ## Що змінилося з появою третьої теми
 *
 * Двадцять чотири рядки ПЕРЕЇХАЛИ з `X/dark` на `X/normal` для purple, green,
 * gray і orange: їхня нинішня темна тема стала «звичайною», значення дослівно ті
 * самі, тож і борг той самий — лише під новою назвою.
 *
 * Шість НОВИХ блоків (нові темні для чотирьох стилів, нові звичайні для blue й
 * wood) не додали ЖОДНОГО рядка: вони виведені генератором, у якому 4.5:1
 * (графіка — 3:1) є умовою приймання, а не побажанням.
 *
 * ## purple/light закритий ЦІЛКОМ (2026-08-28)
 *
 * Пʼять рядків пішли: `--text-accent` в обидва боки, `--control-selected`,
 * `--confirm-action-bg` і `--cell-dark -> --piece-color`. Корінь був один — ОДИН
 * колір `#a259e6` виконував чотири ролі одночасно (акцент тексту, вибране
 * керування, фігура гри, кнопка підтвердження), тож коли клітинка дошки теж
 * фіолетова, фігура зливалася з нею: 1.16:1. Роль фігури тепер має власне
 * значення.
 *
 * ЩО ЦЕ ЗА ЧИСЛА. Поріг 4.5:1 — WCAG 1.4.3 для звичайного тексту. Виняток один
 * і названий у самому гейті: `--cell-dark -> --piece-color` — це фігура гри на
 * клітинці дошки, тобто не текст, і WCAG 1.4.11 просить для неї 3:1.
 *
 * ЧОМУ НЕ ПОЛАГОДЖЕНО ОДНИМ ПРОХОДОМ. Кожен рядок — рішення про палітру: колір
 * тут не випадковий, він тримає впізнаваність стилю. Механічне потемніння шести
 * стилів наосліп — саме те, що канон (UI-UX-v8 § 1.5.1.1) називає ціною
 * «обережного» проходу: пара, якої не було ні в одній темі.
 *
 * ## orange/light закритий ЦІЛКОМ (2026-09-02)
 *
 * Вісім рядків пішли — усі, що були в цій комбінації. Причина в них справді була
 * одна, і саме та, яку називав попередній запис: помаранчевий у ролі тла ЗАВЖДИ
 * світлий, тож білий текст на ньому не проходить ніколи. Відповідь при цьому не
 * вигадувалася — вона вже стояла в СУСІДНІЙ темі того самого стилю: `orange/normal`
 * тримає `#222` на всіх трьох кнопках дії. Світлій темі бракувало саме цього.
 *
 * Що змінилося (заміряно кожне; поверхні не чіпалися):
 *
 * | Токен | Було | Стало | Проти чого |
 * |---|---|---|---|
 * | `--confirm-action-text` | `#ffffff` 2.78 | `#222222` **5.72** | `#4caf50` |
 * | `--warning-action-text` | `#ffffff` 2.16 | `#222222` **7.38** | `#ff9800` |
 * | `--info-action-text` | `#ffffff` 2.63 | `#222222` **6.05** | `#03a9f4` |
 * | `--control-selected-text` | `#fff` 2.16 | `#3a1d00` **7.19** | `#ff9800` |
 * | `--text-secondary` | `#ff9800` 1.97 | `#9c4a00` **5.64** | `#fff3e0` |
 * | `--text-accent` | `#ffa726` 1.77 | `#a63c00` **5.86** | `#fff3e0` |
 * | `--piece-color` | `#ffa726` 1.21 | `#5b2200` **5.33** | `#ff8a26` (клітинка) |
 *
 * `--control-selected-text` не взяв `#6d3a00` зі сусідньої теми навмисно: на
 * `#ff9800` він дає **4.32**, тобто трохи НЕ дотягує до 4.5. Це рівно той випадок,
 * проти якого канон застерігає в § 1.5.1.1 — «схоже на правильне» тут гірше за
 * заміряне.
 *
 * Фігура гри отримала власне значення — те саме рішення, що вже прийняте для
 * purple: доти вона була `#ffa726` на клітинці `#ff8a26`, тобто **1.21:1**, і на
 * темних клітинках її практично не було видно. Разом із нею перефарбована тінь
 * (`--piece-shadow`), інакше навколо темної фігури лишалося світло-помаранчеве
 * сяйво.
 *
 * ЩО ВИДНО З ГРУПУВАННЯ, і з чого варто починати:
 *
 * | Пара токенів | Комбінацій | Найгірше |
 * |---|---|---|
 * | `--confirm-action-bg -> --confirm-action-text` | 6 | білий на `#4caf50` — той самий випадок, що бачить axe |
 * | `--cell-dark -> --piece-color` | 6 | 1.07:1 (green/light) — фігуру майже не видно на клітинці |
 * | `--bg-secondary` ↔ `--text-accent` | 12 | 1.44:1 (orange/normal) |
 * | `--info-action-bg -> --info-action-text` | 3 | 2.63:1 |
 * | `--bg-secondary -> --text-secondary` | 2 | 1.95:1 (orange/normal) |
 * | `--control-selected -> --control-selected-text` | 1 | |
 * | `--warning-action-bg -> --warning-action-text` | 1 | |
 * | `--bg-secondary -> --text-primary` | 1 | 2.79:1 |
 * | `--control-bg -> --text-primary` | 1 | 3.79:1 |
 *
 * **Чому `orange/normal` НЕ закритий разом зі світлою.** Там дефект не в тексті, а
 * в поверхні: `--bg-secondary: #ff6f00` — середній за світлістю, і на ньому не
 * проходить НІ білий (2.79), ні світло-помаранчевий (1.44). Прохідний варіант
 * лишається один — темний текст (`#2b1200` дає 6.33), а це вже інший вигляд теми,
 * тобто рішення про палітру, а не звірка чисел. Саме таке рішення канон
 * (UI-UX-v8 § 1.5.1.1) і просить не приймати механічно.
 *
 * Рядок ПРИБИРАЄТЬСЯ, коли пара полагоджена. Гейт звіряє множини на рівність в
 * обидва боки: борг, що скоротився й не прибраний із цього файлу, теж червоний
 * — інакше число застаріває мовчки (CODE-QUALITY-v8 § 6.4.3).
 */
export const KNOWN_CONTRAST_DEBT: readonly string[] = [
	'blue/dark --confirm-action-bg -> --confirm-action-text',
	'blue/dark --info-action-bg -> --info-action-text',
	'blue/light --cell-dark -> --piece-color',
	'blue/light --confirm-action-bg -> --confirm-action-text',
	'gray/light --bg-secondary -> --text-accent',
	'gray/light --cell-dark -> --piece-color',
	'gray/light --confirm-action-bg -> --confirm-action-text',
	'gray/light --text-accent -> --bg-secondary',
	'gray/normal --confirm-action-bg -> --confirm-action-text',
	'green/light --bg-secondary -> --text-accent',
	'green/light --bg-secondary -> --text-secondary',
	'green/light --cell-dark -> --piece-color',
	'green/light --confirm-action-bg -> --confirm-action-text',
	'green/light --control-selected -> --control-selected-text',
	'green/light --info-action-bg -> --info-action-text',
	'green/light --text-accent -> --bg-secondary',
	'green/normal --bg-secondary -> --text-accent',
	'green/normal --cell-dark -> --piece-color',
	'green/normal --text-accent -> --bg-secondary',
	'orange/normal --bg-secondary -> --text-accent',
	'orange/normal --bg-secondary -> --text-primary',
	'orange/normal --bg-secondary -> --text-secondary',
	'orange/normal --cell-dark -> --piece-color',
	'orange/normal --control-bg -> --text-primary',
	'orange/normal --text-accent -> --bg-secondary',
	'purple/normal --confirm-action-bg -> --confirm-action-text',
	'purple/normal --info-action-bg -> --info-action-text',
	'wood/dark --bg-secondary -> --text-accent',
	'wood/dark --text-accent -> --bg-secondary',
	'wood/light --bg-secondary -> --text-accent',
	'wood/light --cell-dark -> --piece-color',
	'wood/light --text-accent -> --bg-secondary',
	'wood/light --warning-action-bg -> --warning-action-text'
];

/**
 * Пропуски розвʼязувача — числом, а не мовчки (UI-UX-v8 § 1.5.1.3).
 *
 * Розвʼязувач, який тихо пропускає все, чого не зрозумів, вважає гейт зеленим
 * саме там, де браузер має проблему. У сусідньому `as5` це коштувало семи
 * мертвих токенів при 207 зелених тестах.
 *
 * `alpha` — пара, де тло або текст напівпрозорі: чесно порахувати її можна лише
 * композитом із тим, що під низом, а це вже інша задача.
 * `notColor` — значення, яке розбір не визнав кольором.
 *
 * Числа заміряні 2026-08-27. Зростання означає, що з-під гейта пішли нові пари.
 */
export const CONTRAST_SKIPS = { alpha: 50, notColor: 90 } as const;
