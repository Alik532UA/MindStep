import type { User } from 'firebase/auth';

/**
 * Стан автентифікації: поточний користувач і його профіль.
 *
 * ## Чому це окремий файл, а не поле в сервісі
 *
 * Перша редакція цієї міграції поклала `$state` прямо в `authService` і
 * `userProfileService`, перейменувавши їх у `.svelte.ts`. Інваріант
 * `src/cloud-database.spec.ts` («SDK не імпортується у .svelte.ts», § 10.4)
 * одразу почервонів — і мав рацію. Причина не формальна:
 *
 *   • мережа, зрощена з реактивним модулем, не підміняється в тесті: щоб
 *     перевірити стан, доводиться підняти Firebase;
 *   • такий модуль не можна довантажити ліниво, а SDK Firebase — найбільша
 *     частина бандла, яку саме й тримають поза критичним шляхом (§ 10.2).
 *
 * Тому поділ як у CLOUD-DATABASE-v8 § 3.1: **стан тут, мережа в сервісі**.
 * `authService.ts` і `auth/userProfileService.ts` лишаються звичайними `.ts`
 * із Firebase, а пишуть у ці два синглтони.
 *
 * ## Чому `writable` більше немає
 *
 * Було `writable<User | null>(null)` і `writable<UserProfile | null>(…)` —
 * стан Svelte 4 у Svelte-5 проєкті (SVELTE-CORE-v8, анти-патерни). Споживачі
 * читали його як `$userStore`, тобто через store-контракт; тепер це звичайні
 * поля, а `AuthModal.svelte` — єдиний компонент, що лишався в legacy-режимі, —
 * переведений на руни тим самим комітом. Змішувати не можна: `$:` не бачить
 * змін рунного стану, і вікно входу просто не оновлювалося б після входу.
 */

export interface UserProfile {
	uid: string;
	displayName: string | null;
	bestTimeScore: number;
	isAnonymous: boolean;
}

class CurrentUserState {
	/** `null` — не увійшов. Анонімний користувач Firebase — це НЕ `null`. */
	user = $state<User | null>(null);
}

class UserProfileState {
	/** `null` означає «профілю немає», а не «ще не завантажено». */
	profile = $state<UserProfile | null>(null);
}

export const currentUserStore = new CurrentUserState();
/** Псевдонім: під цим ім'ям його імпортують компоненти. */
export const userStore = currentUserStore;

export const userProfileStore = new UserProfileState();
