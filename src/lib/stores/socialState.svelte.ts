import { logService } from '$lib/services/logService.svelte';
import type { Privacy, PublicProfile } from '$lib/services/social/profilesService';
import type { Follow } from '$lib/services/social/friendsService';

/**
 * ДРУЗІ Й ПУБЛІЧНИЙ ПРОФІЛЬ — стан екрана, і ТІЛЬКИ він.
 *
 * ## Чому стан окремо від мережі
 *
 * Інваріант проєкту: SDK Firebase не імпортується в реактивний модуль
 * (`cloud-database.spec.ts` § 10.4). Причина не формальна — такий модуль не
 * підміняється в тесті й тягне ключі на кожному імпорті; саме через це
 * `authService` уже колись валив юніт-тести ігрової логіки з
 * `auth/invalid-api-key`.
 *
 * Тому мережа живе в `services/social/*`, а тут — те, що показує екран, і
 * функції, які цю мережу викликають ДИНАМІЧНИМ імпортом.
 *
 * ## Що тут не тримається
 *
 * Рекорд і нагороди: вони вже мають свої стори. Тут лише соціальна половина —
 * профіль, приватність, підписки й знахідки пошуку.
 */
class SocialState {
	/** Мій публічний профіль. `null` — його ще немає. */
	profile = $state<PublicProfile | null>(null);
	/** Мої перемикачі приватності. Типово дозволено все. */
	privacy = $state<Privacy>({ search: true, follow: true, board: true });
	/** Мої підписки з позначкою взаємності, уже з профілями. */
	following = $state<Array<{ profile: PublicProfile; mutual: boolean }>>([]);
	/** Хто підписаний на мене. */
	followers = $state<Array<{ profile: PublicProfile; mutual: boolean }>>([]);
	/** Знахідки пошуку за поштою. */
	found = $state<PublicProfile[]>([]);
	/** Триває мережева дія: кнопки не приймають повторних натискань. */
	busy = $state(false);
	/** Код останньої невдачі — щоб екран міг сказати причину, а не «не вдалося». */
	error = $state('');

	/** Чи вже підписаний я на цього — з уже прочитаного списку, без запиту. */
	follows(uid: string): boolean {
		return this.following.some((entry) => entry.profile.uid === uid);
	}

	/**
	 * Обгортка для дій, що можуть не вийти.
	 *
	 * Один каркас на всі: перевірка «не зайнято», скидання попередньої помилки,
	 * `busy` і `finally`. Забути `catch` у п'ятій копії легко, і тоді кнопка
	 * мовчить — той самий висновок, що в сусідньому `VetCrewGames`.
	 */
	async run(what: string, action: () => Promise<void>): Promise<boolean> {
		if (this.busy) return false;
		this.busy = true;
		this.error = '';
		try {
			await action();
			return true;
		} catch (error) {
			// Код, а не текст: `permission-denied` можна перекласти («ця людина
			// закрила підписки»), а англійське речення з SDK — ні.
			const code = (error as { code?: string }).code ?? '';
			this.error = code;
			logService.error(`[SocialState] ${what} failed`, error);
			return false;
		} finally {
			this.busy = false;
		}
	}

	/** Прочитати все своє. Кличе екран профілю при відкритті. */
	async load(uid: string, email: string | null): Promise<void> {
		const { readProfile, saveProfile, OPEN_PRIVACY } = await import(
			'$lib/services/social/profilesService'
		);
		const mine = await readProfile(uid);

		if (mine) {
			this.profile = mine;
			this.privacy = mine.privacy;
		} else {
			/*
			 * Профілю ще немає — створюємо його ТУТ, а не при реєстрації.
			 *
			 * Причина проста: людина може грати роками, а профіль потрібен рівно
			 * тоді, коли вона відкрила екран друзів. Створення при вході дало б
			 * порожні документи всім, включно з тими, хто в цей екран не зайде.
			 */
			this.privacy = { ...OPEN_PRIVACY };
			this.profile = null;
			await saveProfile(uid, email, { displayName: '', privacy: this.privacy }).catch(
				(error: unknown) => logService.warn('[SocialState] Profile not created', error)
			);
		}

		await this.loadFollows(uid);
	}

	/** Перечитати підписки — обидва боки, разом із профілями. */
	async loadFollows(uid: string): Promise<void> {
		const [{ listFollowing, listFollowers }, { readProfiles }] = await Promise.all([
			import('$lib/services/social/friendsService'),
			import('$lib/services/social/profilesService')
		]);

		const [following, followers] = await Promise.all([listFollowing(uid), listFollowers(uid)]);
		const profiles = await readProfiles([
			...new Set([...following.map((f) => f.uid), ...followers.map((f) => f.uid)])
		]);
		const byUid = new Map(profiles.map((profile) => [profile.uid, profile]));

		/*
		 * Кого немає в профілях — того немає й у списку: запис підписки міг
		 * лишитися після видаленого акаунта, і рядок без імені читався б як дефект.
		 */
		const join = (list: Follow[]) =>
			list
				.map((entry) => ({ profile: byUid.get(entry.uid), mutual: entry.mutual }))
				.filter((entry): entry is { profile: PublicProfile; mutual: boolean } => !!entry.profile);

		this.following = join(following);
		this.followers = join(followers);
	}

	/** Пошук людини за поштою. Не кидає: порожньо — це відповідь. */
	async search(email: string): Promise<void> {
		if (!email.includes('@')) {
			this.found = [];
			return;
		}
		const { findByEmail } = await import('$lib/services/social/profilesService');
		this.found = await findByEmail(email);
	}

	/** Зберегти свій профіль: імʼя, аватар, країна. */
	async save(
		uid: string,
		email: string | null,
		next: { displayName: string; avatar?: string; country?: string }
	): Promise<boolean> {
		return this.run('save-profile', async () => {
			const { saveProfile, readProfile } = await import('$lib/services/social/profilesService');
			await saveProfile(uid, email, { ...next, privacy: this.privacy });
			this.profile = await readProfile(uid);
		});
	}

	/**
	 * Перемикачі приватності.
	 *
	 * Кожен тримає правило бази, тож тут не фільтр, а рівно дві дії: записати
	 * вибір і — коли показ у таблиці вимкнено — прибрати свій рядок звідти.
	 * Інакше «вимкнено» означало б «не малюємо», а рядок лишався б у базі.
	 */
	async setPrivacy(uid: string, email: string | null, next: Privacy): Promise<boolean> {
		const done = await this.run('privacy', async () => {
			const { saveProfile } = await import('$lib/services/social/profilesService');
			await saveProfile(uid, email, {
				displayName: this.profile?.displayName ?? '',
				avatar: this.profile?.avatar,
				country: this.profile?.country,
				privacy: next
			});
		});
		if (!done) return false;

		this.privacy = next;
		if (this.profile) this.profile = { ...this.profile, privacy: next };
		if (!next.board) {
			const { leaderboardService } = await import('$lib/services/leaderboardService');
			await leaderboardService.removeMyEntries(uid);
		}
		return true;
	}

	/** Підписатися. Відмова означає «ця людина закрила підписки на себе». */
	async add(uid: string, target: string): Promise<boolean> {
		const done = await this.run('follow', async () => {
			const { follow } = await import('$lib/services/social/friendsService');
			await follow(uid, target);
		});
		if (done) await this.loadFollows(uid);
		return done;
	}

	async remove(uid: string, target: string): Promise<boolean> {
		const done = await this.run('unfollow', async () => {
			const { unfollow } = await import('$lib/services/social/friendsService');
			await unfollow(uid, target);
		});
		if (done) await this.loadFollows(uid);
		return done;
	}

	/** Прибрати чужу підписку на себе. */
	async drop(uid: string, who: string): Promise<boolean> {
		const done = await this.run('remove-follower', async () => {
			const { removeFollower } = await import('$lib/services/social/friendsService');
			await removeFollower(uid, who);
		});
		if (done) await this.loadFollows(uid);
		return done;
	}

	/** Вийшли з акаунта: соціальна половина екрана більше не наша. */
	reset(): void {
		this.profile = null;
		this.privacy = { search: true, follow: true, board: true };
		this.following = [];
		this.followers = [];
		this.found = [];
		this.error = '';
	}
}

export const socialState = new SocialState();
