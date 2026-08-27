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
 * ЩО ВИДНО З ГРУПУВАННЯ, і з чого варто починати:
 *
 * | Пара токенів | Комбінацій | Найгірше |
 * |---|---|---|
 * | `--cell-dark -> --piece-color` | 8 | 1.07:1 (green/light) — фігуру майже не видно на клітинці |
 * | `--bg-secondary` ↔ `--text-accent` | 14 | 1.44:1 (orange/dark) |
 * | `--confirm-action-bg -> --confirm-action-text` | 8 | 2.78:1 — білий на `#4caf50`, той самий випадок, що бачить axe |
 * | `--control-selected -> --control-selected-text` | 3 | 2.16:1 (orange/light) |
 * | `--info-action-bg -> --info-action-text` | 4 | 2.63:1 |
 * | `--bg-secondary -> --text-secondary` | 3 | 1.95:1 (orange/dark) |
 * | `--warning-action-bg -> --warning-action-text` | 2 | 2.16:1 |
 * | `--bg-secondary -> --text-primary` | 1 | 2.79:1 |
 * | `--control-bg -> --text-primary` | 1 | 3.79:1 |
 *
 * `orange` — найдорожчий стиль: у нього дев'ять рядків із сорока семи, і в обох
 * темах. Причина одна на всі: помаранчевий у ролі тла ЗАВЖДИ світлий, тож білий
 * текст на ньому не проходить ніколи — там потрібен темний.
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
	'orange/light --bg-secondary -> --text-accent',
	'orange/light --bg-secondary -> --text-secondary',
	'orange/light --cell-dark -> --piece-color',
	'orange/light --confirm-action-bg -> --confirm-action-text',
	'orange/light --control-selected -> --control-selected-text',
	'orange/light --info-action-bg -> --info-action-text',
	'orange/light --text-accent -> --bg-secondary',
	'orange/light --warning-action-bg -> --warning-action-text',
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
