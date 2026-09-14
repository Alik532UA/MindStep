import { storageService } from '$lib/services/storage';
import { logService } from '$lib/services/logService.svelte';
import { BETA_CHECKS } from './betaChecklist.data';
import type { BetaMark, BetaVote } from './betaChecklist.types';

/**
 * Позначки тестувальника (BETA-CHECKLIST-v8 § 3.1).
 *
 * Клас із `$state` у `.svelte.ts`, а не store — SVELTE-CORE-v8 § 6. Ключ
 * сховища проходить через фасад `storageService`, тобто отримує префікс
 * `mindstep_`: origin спільний із сусідніми проєктами, і ключ без префікса — це
 * чужі дані (STORAGE-NAMESPACE-v8).
 */

const STORAGE_KEY = 'beta_marks';

type MarkMap = Record<string, BetaMark>;

const VOTES: readonly BetaVote[] = ['fail', 'weird', 'ok'];

function isMark(value: unknown): value is BetaMark {
	if (typeof value !== 'object' || value === null) return false;
	const m = value as Record<string, unknown>;
	return VOTES.includes(m.vote as BetaVote) && typeof m.version === 'string';
}

/**
 * Прочитане зі сховища — НЕДОВІРЕНИЙ ВВІД (BETA-CHECKLIST-v9 § 8.6,
 * `BETA-MARKS-UNTRUSTED`).
 *
 * Ключ переживає і зміну чеклиста, і зміну формату позначки. Найчастіший
 * випадок безневинний і найгірший: пункт ПРИБРАЛИ зі списку, а позначка
 * лишилася. Форму вона має правильну, тож проходила — і рахувалася в поступі,
 * даючи «65 / 62», число, яке не означає нічого й не має де виправитися: у
 * списку такого пункта вже немає, отже й зняти позначку нема на чому.
 */
function readMarks(): MarkMap {
	const raw = storageService.getJSON<unknown>(STORAGE_KEY);
	if (typeof raw !== 'object' || raw === null) return {};

	const known = new Set(BETA_CHECKS.map((check) => check.id));
	const out: MarkMap = {};
	for (const [id, value] of Object.entries(raw as Record<string, unknown>)) {
		if (known.has(id) && isMark(value)) out[id] = value;
	}
	return out;
}

/**
 * Позначка з іншої версії НЕ зникає — вона все ще щось означає, — але підписана
 * й не рахується в «зроблено на цій». Без цього список поступово стає звітом
 * про минуле, який читають як звіт про теперішнє.
 */
class BetaProgress {
	marks = $state<MarkMap>({});
	readonly version = __APP_VERSION__;

	/**
	 * Чи зведена кнопка стирання (§ 6.3, `BETA-CLEAR-TWO-STEP`).
	 *
	 * Доти тут стояв `confirm()`. Нативний діалог блокує потік, виглядає чужим у
	 * будь-якій темі, НЕ перекладається разом із рештою сторінки — і в headless
	 * вимагає окремого обробника, тобто ускладнює e2e § 5.7 на рівному місці.
	 * Два кроки роблять те саме дешевше: кнопка сама стає підтвердженням.
	 */
	clearArmed = $state(false);

	constructor() {
		this.marks = readMarks();
	}

	/** Той самий стан удруге — знімає позначку: інакше помилковий клік незворотний. */
	vote(id: string, vote: BetaVote): void {
		const current = this.marks[id];
		if (current?.vote === vote && current.version === this.version) {
			const rest = { ...this.marks };
			delete rest[id];
			this.marks = rest;
		} else {
			this.marks = { ...this.marks, [id]: { vote, version: this.version } };
		}
		this.persist();
	}

	markOf(id: string): BetaMark | undefined {
		return this.marks[id];
	}

	/** Позначка є, але поставлена на іншій збірці. */
	isStale(id: string): boolean {
		const mark = this.marks[id];
		return Boolean(mark) && mark.version !== this.version;
	}

	/**
	 * Поступ ОКРЕМОЇ вкладки (§ 8.1, `BETA-TAB-PROGRESS`).
	 *
	 * Загальне «17 / 62» не відповідає на єдине питання, яке тестувальник собі
	 * ставить: чи закінчена ЦЯ вкладка. Вкладок вісім, у найбільшій — сімнадцять
	 * пунктів, тож без лічильника позицію доводиться тримати в голові.
	 */
	progressOf(checks: readonly { id: string }[]): { done: number; total: number } {
		const done = checks.filter((check) => this.marks[check.id]?.version === this.version).length;
		return { done, total: checks.length };
	}

	/**
	 * Стирання у два кроки (§ 6.3): перший виклик лише зводить кнопку, другий
	 * стирає. Повертає `true`, коли позначки справді зникли.
	 */
	requestClear(): boolean {
		if (!this.clearArmed) {
			this.clearArmed = true;
			return false;
		}
		this.clear();
		return true;
	}

	/** Знімає зведення, нічого не стираючи: кнопка не лишається зарядженою. */
	disarmClear(): void {
		this.clearArmed = false;
	}

	clear(): void {
		this.marks = {};
		this.clearArmed = false;
		this.persist();
	}

	private persist(): void {
		// Фасад ніколи не кидає (STORAGE-NAMESPACE-v8, Крок 1), але про відмову
		// варто знати: без сховища прогрес зникне на перезавантаженні, і людина
		// має право це побачити в логах, а не здогадуватися.
		const ok = storageService.setJSON(STORAGE_KEY, $state.snapshot(this.marks));
		if (!ok) logService.warn('[beta] позначки не збережено — сховище недоступне');
	}
}

export const betaProgress = new BetaProgress();
