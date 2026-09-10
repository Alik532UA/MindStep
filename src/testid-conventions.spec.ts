// @vitest-environment node
// Перевірка лише читає файли — DOM їй не потрібен, а jsdom стоїть не в кожному
// з проєктів. Закріплення середовища тут прибирає цю залежність.
import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Перевірка конвенцій data-testid за TESTID-AND-NAMING-v8.md § 1.9.1.
 *
 * Читає джерела, а не DOM, і тому бачить усі testid — включно з тими, що
 * всередині {#if}, модалок і гілок помилок, куди браузерна перевірка після
 * page.goto() не дістається ніколи. Це єдина з двох перевірок, що взагалі
 * здатна валідувати суфікси; рантайм-дублікати ловить Playwright-інваріант.
 */

const CANON = new Set([
	// інтерактивні
	"btn", "link", "input", "textarea", "checkbox", "radio", "select", "toggle", "slider", "option",
	// форми
	"form", "fieldset", "label", "error", "hint",
	// оверлеї
	"modal", "drawer", "backdrop", "overlay", "tooltip", "toast",
	// структура
	"card", "list", "item", "row", "cell", "tabs", "tab", "panel",
	"section", "header", "footer", "nav", "banner", "menu", "toolbar", "container",
	// медіа
	"icon", "img",
	// read-only контент
	"title", "text", "message", "warning", "value", "count", "status",
	"badge", "progress", "spinner", "skeleton"
]);

/**
 * Заборонено в позиції типу — тобто останнім статичним сегментом.
 *
 * Саме в позиції, а не будь-де: ці слова цілком легітимні як частина назви
 * фічі. `block-mode-toggle` у грі — це режим блокування ходів, а не «блок»;
 * `rich-text-editor` — назва редактора. Заборона в будь-якій позиції зробила б
 * перевірку такою, що бореться з предметною областю.
 */
const BANNED_AS_TYPE: Record<string, string> = {
	wrapper: "container",
	wrap: "container",
	box: "container",
	root: "container",
	block: "section",
	area: "section",
	group: "fieldset | toolbar | section",
	content: "panel",
	grid: "list",
	widget: "card | panel | section",
	display: "value",
	switcher: "select | toggle | tabs",
	trigger: "btn",
	help: "hint",
	dialog: "modal",
	popup: "modal",
	step: "item",
	dot: "item | badge",
	subtab: "tab"
};

/**
 * Заборонено в будь-якій позиції: щойно в проєкті співіснують `-btn` і
 * `-button`, кожен локатор стає здогадкою про те, який з двох обрав автор.
 */
const BANNED_ANYWHERE: Record<string, string> = { button: "btn", buttons: "btn | toolbar" };

/**
 * Легасі-id, що чекають на міграцію (§ 1.10). Список тільки скорочується.
 * Порожній = міграцію завершено.
 */
const LEGACY_ALLOWED = new Set<string>([]);

/**
 * Свідомі повтори в межах одного файлу: той самий елемент у взаємовиключних
 * гілках `{#if}/{:else}`, коли тесту потрібен один локатор незалежно від гілки
 * (той самий підсумковий рахунок у компактному й звичайному режимі).
 *
 * Не плутати з реальним дублікатом, коли обидва елементи в DOM одночасно —
 * такий треба розводити, а не вносити сюди. Список видно в кожному diff.
 */
const ALLOWED_DUPLICATES = new Set<string>([
	"final-score-value",
	"toast-title",
	"toast-message"
]);

/**
 * Чим замінюємо `{…}` та `${…}` перед розбором. Саме літера, а не порожній
 * рядок: інакше `news-card-${id}` перетворюється на `news-card-`, і перевірка
 * kebab-case падає на висячому дефісі, якого в коді немає.
 */
const DYNAMIC = "x";

function svelteFiles(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			if (["node_modules", ".svelte-kit", "build"].includes(entry)) continue;
			svelteFiles(full, out);
		} else if (entry.endsWith(".svelte")) out.push(full);
	}
	return out;
}

/**
 * Прибирає те, що не є розміткою: `<style>` (там testid трапляється в
 * селекторах `:global([data-testid="…"])`), HTML-коментарі та блокові
 * коментарі скрипта (там лишаються старі назви та пояснення). Без цього
 * перевірка рахує їх за окремі елементи і повідомляє про дублікати, яких у DOM
 * немає.
 *
 * Докблоки додалися 2026-09-11, і привід типовий для цього класу перевірок:
 * коментар у `ButtonGroup.svelte`, який ПОЯСНЮЄ, чому порожній локатор — це
 * погано, сам містив приклад порожнього локатора, і перевірка оголосила
 * порушником саме той файл, який щойно полагодили. Той самий клас уже ловився
 * в `test-runners.test.ts` і `ci.test.ts`.
 */
const markupOnly = (text: string) =>
	text
		.replace(/<style[\s\S]*?<\/style>/g, "")
		.replace(/<!--[\s\S]*?-->/g, "")
		.replace(/\/\*[\s\S]*?\*\//g, "");

function collect(): { id: string; file: string }[] {
	const found: { id: string; file: string }[] = [];
	for (const file of svelteFiles("src")) {
		const text = markupOnly(readFileSync(file, "utf8"));
		const re = /data-testid=(?:"([^"]*)"|\{`([^`]*)`\}|\{"([^"]*)"\}|\{'([^']*)'\})/g;
		let m: RegExpExecArray | null;
		while ((m = re.exec(text))) {
			found.push({ id: m[1] ?? m[2] ?? m[3] ?? m[4], file: file.replace(/\\/g, "/") });
		}
	}
	return found;
}

/**
 * Динаміку замінюємо на `-x-`, а не просто на `x`: вставка трапляється без
 * дефіса (`…-all-link{suffix}`), і без штучної межі тип злипався б із нею в
 * один сегмент `linkx`, якого в каноні немає — перевірка сварилась би на
 * цілком правильний id.
 */
const segmentsOf = (id: string) =>
	id.replace(/\$?\{[^}]*\}/g, `-${DYNAMIC}-`).split("-").filter(Boolean);

/** Останній сегмент, що не є динамічним чи числовим дискримінатором. */
function typeSegment(id: string): string {
	const segs = segmentsOf(id);
	while (segs.length && (segs.at(-1) === DYNAMIC || /^\d+$/.test(segs.at(-1) as string))) segs.pop();
	return segs.at(-1) ?? "";
}

describe("data-testid conventions (v8)", () => {
	const all = collect();
	const checked = all.filter(({ id }) => !LEGACY_ALLOWED.has(id));

	it("знаходить testid у джерелах — сама перевірка жива", () => {
		expect(all.length).toBeGreaterThan(0);
	});

	it("не вживає заборонених слів у позиції типу (§ 1.4)", () => {
		const bad = checked
			.filter(({ id }) => typeSegment(id) in BANNED_AS_TYPE)
			.map(({ id, file }) => `${id}  (${file}) — «${typeSegment(id)}» → ${BANNED_AS_TYPE[typeSegment(id)]}`);
		expect(bad, `Заборонений тип:\n${bad.join("\n")}`).toEqual([]);
	});

	it("не змішує -btn і -button (§ 1.4)", () => {
		const bad = checked
			.filter(({ id }) => segmentsOf(id).some((s) => s in BANNED_ANYWHERE))
			.map(({ id, file }) => `${id}  (${file}) — «button» → btn`);
		expect(bad, `Заборонене слово в будь-якій позиції:\n${bad.join("\n")}`).toEqual([]);
	});

	it("кожен testid має канонічний тип (§ 1.3)", () => {
		const bad = checked
			.filter(({ id }) => !segmentsOf(id).some((s) => CANON.has(s)))
			.map(({ id, file }) => `${id}  (${file})`);
		expect(bad, `Без канонічного типу:\n${bad.join("\n")}`).toEqual([]);
	});

	/**
	 * Тип має відповідати HTML-семантиці, а не візуальному враженню (§ 1.3).
	 *
	 * Перевіряється саме `label`, бо це єдиний тип, чию правильність видно з
	 * розмітки однозначно: `-label` означає підпис поля, тобто елемент
	 * `<label>`. Канонічна перевірка § 1.9.1 цього не бачить — `label` є в
	 * CANON, тому `hero-title-label` на `<h1>` формально проходить.
	 *
	 * Решту типів так перевіряти не можна: `-btn` законно стоїть на
	 * `<a role="button">`, `-card` на `<article>`, `-value` на будь-чому. Тому
	 * одне правило, а не таблиця відповідностей.
	 */
	it("тип -label стоїть лише на елементі <label> (§ 1.3)", () => {
		const bad: string[] = [];
		for (const file of svelteFiles("src")) {
			const text = markupOnly(readFileSync(file, "utf8"));
			// Тег і його атрибути до `data-testid`; `[^>]*?` не перетинає межу тегу.
			const re = /<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?data-testid=(?:"([^"]*)"|\{`([^`]*)`\})/g;
			let m: RegExpExecArray | null;
			while ((m = re.exec(text))) {
				const tag = m[1].toLowerCase();
				const id = m[2] ?? m[3];
				if (typeSegment(id) === "label" && tag !== "label") {
					bad.push(`${id}  (<${tag}> у ${file.replace(/\\/g, "/")}) — тип за змістом: -title / -text / -message / -status / -value`);
				}
			}
		}
		expect(bad, `Тип -label не на <label>:\n${bad.join("\n")}`).toEqual([]);
	});

	it("тільки kebab-case ASCII (§ 1.2)", () => {
		const bad = all
			.filter(({ id }) => /[A-Z]|[Ѐ-ӿ]|--|^-|-$/.test(id.replace(/\$?\{[^}]*\}/g, DYNAMIC)))
			.map(({ id, file }) => `${id}  (${file})`);
		expect(bad, `Порушення kebab-case:\n${bad.join("\n")}`).toEqual([]);
	});

	it("немає недетермінованих id (§ 1.6)", () => {
		const bad = all
			.filter(({ id }) => /randomUUID|Math\.random|Date\.now/.test(id))
			.map(({ id, file }) => `${id}  (${file})`);
		expect(bad, `Недетерміновані id:\n${bad.join("\n")}`).toEqual([]);
	});

	it("немає дублікатів у межах одного компонента (§ анти-патерн HIGH)", () => {
		const byFile = new Map<string, string[]>();
		// Динамічні id пропускаємо: той самий шаблон у двох циклах дає різні
		// значення в DOM, тому це не колізія. Статичний id, повторений у файлі,
		// колізія завжди — компонент рендериться цілком.
		for (const { id, file } of all) {
			if (id.includes("{") || ALLOWED_DUPLICATES.has(id)) continue;
			byFile.set(file, [...(byFile.get(file) ?? []), id]);
		}

		const dupes: string[] = [];
		for (const [file, ids] of byFile) {
			const seen = new Set<string>();
			for (const id of ids) {
				if (seen.has(id)) dupes.push(`${id}  (${file})`);
				seen.add(id);
			}
		}
		expect(dupes, `Дублікати в одному файлі:\n${dupes.join("\n")}`).toEqual([]);
	});
});

/**
 * ЛОКАТОР, ЩО ПРИХОДИТЬ ПРОПОМ, МОЖЕ ВИЙТИ БЕЗІМЕННИМ
 * (TESTID-AND-NAMING-v9 § 1.2; BETA-CHECKLIST-v9 `BETA-TESTID-REQUIRED`).
 *
 * ## Що ламалося
 *
 * `EditableText.svelte` складає локатори нащадків із пропа:
 * `data-testid="{dataTestId}-edit-btn"`. Проп мав типове значення `""`, і на
 * `/rewards` його ніхто не передавав — тобто в DOM жили `-edit-btn` і
 * `-random-btn`: назви, що починаються з дефіса й ОДНАКОВІ для кожного місця,
 * де проп забули. Знайдено 2026-09-11 гейтом сенсорних цілей, який просто
 * назвав ці два локатори в повідомленні про перекриття.
 *
 * Другий бік того самого — проп, який стає локатором ЦІЛКОМ
 * (`data-testid={dataTestId}`). Порожній типовий дає `data-testid=""`: назва,
 * яка не називає нічого, і однакова скрізь, де проп забули. Перевірка знайшла
 * такий випадок у `GameModeWidget.svelte` — дві групи кнопок без жодного
 * локатора на контейнері.
 *
 * Перевірки вище цього не бачать за побудовою: вони читають рядок із джерела,
 * тобто `{dataTestId}-edit-btn`, і підставляють замість `{…}` літеру. Значення
 * пропа лежить в ІНШОМУ файлі, а типове — у цьому ж, але нижче.
 *
 * ## Чому саме типове значення, а не перебір місць виклику
 *
 * Прибрати типове значення означає зробити проп обовʼязковим, і далі місця
 * виклику стереже `svelte-check`: пропущений проп — помилка типів, а не тихий
 * порожній рядок. Тобто перевірка тут тримає ПРИЧИНУ, а повнотою займається
 * компілятор — і робить це на КОЖНОМУ місці виклику, а не на восьми сторінках,
 * куди дійшов e2e.
 *
 * ## Зворотний експеримент (AI-AGENT-PITFALLS-v9 § 1.1) — прогнано
 *
 * Повернути `dataTestId = ""` у `EditableText.svelte` — перевірка червоніє,
 * називає файл, проп і приклад локатора, який із нього вийде. Те саме для
 * `ButtonGroup.svelte` — випадок «проп стає локатором цілком».
 */
describe("локатор, що приходить пропом (TESTID-AND-NAMING-v9 § 1.2)", () => {
	/** Значення атрибута як воно записане: у лапках або голим `{…}`. */
	const ATTR = /data-testid=(?:"([^"]*)"|'([^']*)'|\{([^}]*)\})/g;
	/** `ident = ""` або `ident = ''` усередині розбору `$props()`. */
	const emptyDefault = (source: string, prop: string) =>
		new RegExp(String.raw`\b${prop}\s*=\s*(""|'')\s*[,}]`).test(source);

	/**
	 * Голі імена пропів, з яких складається локатор. `option.dataTestId` та інші
	 * звернення до полів пропускаємо: типове значення там лежить у типі поля, а
	 * не в розборі `$props()`, і шукати його цією ж регуляркою не можна.
	 */
	function propsInTestIds(markup: string): string[] {
		const out = new Set<string>();
		for (const m of markup.matchAll(ATTR)) {
			const quoted = m[1] ?? m[2];
			// Значення в лапках: беремо кожну інтерполяцію голого імені.
			if (quoted !== undefined) {
				for (const i of quoted.matchAll(/\{(\w+)\}/g)) out.add(i[1]);
				continue;
			}
			// `data-testid={ident}` — проп стає локатором цілком.
			const bare = (m[3] ?? "").trim();
			if (/^\w+$/.test(bare)) out.add(bare);
		}
		return [...out];
	}

	const withProps = svelteFiles("src")
		.map((file) => ({ file: file.split("\\").join("/"), text: readFileSync(file, "utf8") }))
		.map(({ file, text }) => ({ file, text, props: propsInTestIds(markupOnly(text)) }))
		.filter(({ props }) => props.length > 0);

	it("коментар, що ЗГАДУЄ локатор, не рахується за локатор", () => {
		// Канарка на markupOnly: без неї докблок нижче в ButtonGroup.svelte
		// оголошував би порушником саме той файл, який щойно полагодили.
		expect(markupOnly('/* приклад: data-testid="" */<b data-testid="real-btn"></b>')).toBe(
			'<b data-testid="real-btn"></b>'
		);
	});

	it("перевірка жива: локатори з пропів у проєкті знайдено", () => {
		expect(
			withProps.length,
			"жодного `data-testid` із пропа — перевірка нижче нічого не стереже"
		).toBeGreaterThan(0);
	});

	it("розбір атрибута справді відрізняє три форми запису", () => {
		expect(propsInTestIds('data-testid="{dataTestId}-edit-btn"')).toEqual(["dataTestId"]);
		expect(propsInTestIds("data-testid={tid}")).toEqual(["tid"]);
		expect(
			propsInTestIds("data-testid={option.dataTestId}"),
			"звернення до поля прийнято за проп"
		).toEqual([]);
		expect(
			propsInTestIds('data-testid="game-mode-description-text"'),
			"сталий рядок прийнято за проп"
		).toEqual([]);
	});

	it("регулярка справді відрізняє порожнє типове значення", () => {
		expect(emptyDefault('let { dataTestId = "", onchange }: Props = $props();', "dataTestId")).toBe(
			true
		);
		expect(emptyDefault("let { dataTestId, onchange }: Props = $props();", "dataTestId")).toBe(
			false
		);
		expect(
			emptyDefault('let { dataTestId = "card", onchange }: Props = $props();', "dataTestId"),
			"непорожнє типове значення прийнято за порожнє"
		).toBe(false);
	});

	it("проп, з якого виходить локатор, не має порожнього типового значення", () => {
		const bad: string[] = [];
		for (const { file, text, props } of withProps) {
			for (const prop of props) {
				if (emptyDefault(text, prop)) {
					bad.push(
						`${file}: проп «${prop}» типово порожній — місце виклику, яке його не ` +
							'передало, дає локатор виду «-edit-btn» або порожній data-testid=""'
					);
				}
			}
		}
		expect(bad, `Локатори, що можуть вийти безіменними:\n${bad.join("\n")}`).toEqual([]);
	});
});
