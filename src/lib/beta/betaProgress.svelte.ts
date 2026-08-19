import { storageService } from '$lib/services/storage';
import { logService } from '$lib/services/logService.svelte';
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

/**
 * Позначка з іншої версії НЕ зникає — вона все ще щось означає, — але підписана
 * й не рахується в «зроблено на цій». Без цього список поступово стає звітом
 * про минуле, який читають як звіт про теперішнє.
 */
class BetaProgress {
	marks = $state<MarkMap>({});
	readonly version = __APP_VERSION__;

	constructor() {
		const saved = storageService.getJSON<MarkMap>(STORAGE_KEY);
		if (saved) this.marks = saved;
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

	clear(): void {
		this.marks = {};
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
