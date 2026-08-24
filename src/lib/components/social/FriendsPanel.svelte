<script lang="ts">
	import { t } from '$lib/i18n/typedI18n';
	import { locale } from 'svelte-i18n';
	import StyledButton from '$lib/components/ui/StyledButton.svelte';
	import Avatar from './Avatar.svelte';
	import Flag from './Flag.svelte';
	import { socialState } from '$lib/stores/socialState.svelte';
	import { AVATAR_COLORS, AVATAR_ICONS, formatAvatar, parseAvatar } from '$lib/config/avatars';
	import { countriesByName } from '$lib/config/countries';
	import type { Privacy } from '$lib/services/social/profilesService';

	/**
	 * ДРУЗІ: публічний профіль, пошук, підписки й приватність — одним екраном.
	 *
	 * ## Чому все разом, а не чотирма панелями
	 *
	 * Бо це одна відповідь на одне питання: «що про мене видно іншим і кого бачу
	 * я». Профіль без приватності читався б як «це видно всім», а приватність без
	 * профілю — як перемикачі невідомо чого. Порядок такий самий, як у житті:
	 * спершу яким мене бачать, далі кого я знайшов, далі хто зі мною.
	 *
	 * ## Пошук ЛИШЕ за поштою
	 *
	 * Пошук за іменем знаходить випадкових людей і дозволяє добирати схожі імена,
	 * тобто вдавати іншого; у сусідньому `Slovko` він саме тому й вимкнений. Пошта
	 * ж — те, що людина комусь сама сказала. Саму адресу при цьому не видно нікому:
	 * у базі лежить її SHA-256 (`services/social/emailHash.ts`).
	 *
	 * ## Кнопка-перемикач, а не чекбокс
	 *
	 * У проєкті немає жодного `<input type="checkbox">`, а є кнопки зі станом.
	 * Заводити другу породу перемикачів заради трьох рядків означало б два різні
	 * вигляди того самого жесту на сусідніх екранах.
	 */
	interface Props {
		/** Мій `uid`. Без нього панель не має чого читати. */
		uid: string;
		/** Моя пошта — з неї рахується хеш для пошуку. */
		email: string | null;
	}

	let { uid, email }: Props = $props();

	let name = $state('');
	let avatar = $state('user:teal');
	let country = $state('');
	let queryEmail = $state('');
	let saved = $state(false);
	let loaded = $state(false);

	/** Список країн рахується на вимогу: він залежить від мови й важить 262 рядки. */
	const countries = $derived(countriesByName($locale ?? 'uk'));
	const look = $derived(parseAvatar(avatar));

	/*
	 * Читання — В ЕФЕКТІ, а не в `onMount`: панель показується всередині модалки,
	 * і `uid` приїжджає пропом уже після того, як компонент змонтувався. `loaded`
	 * тримає одноразовість: без нього кожна зміна стану читала б базу заново.
	 */
	$effect(() => {
		if (!uid || loaded) return;
		loaded = true;
		void socialState.load(uid, email).then(() => {
			name = socialState.profile?.displayName ?? '';
			avatar = socialState.profile?.avatar ?? 'user:teal';
			country = socialState.profile?.country ?? '';
		});
	});

	async function saveProfile() {
		saved = await socialState.save(uid, email, {
			displayName: name.trim(),
			avatar,
			country: country || undefined
		});
	}

	function togglePrivacy(key: keyof Privacy) {
		const next: Privacy = { ...socialState.privacy, [key]: !socialState.privacy[key] };
		void socialState.setPrivacy(uid, email, next);
	}

	const PRIVACY_KEYS: readonly (keyof Privacy)[] = ['search', 'follow', 'board'];
	const privacyLabel = {
		search: 'social.privacySearch',
		follow: 'social.privacyFollow',
		board: 'social.privacyBoard'
	} as const;
</script>

<section class="friends" data-testid="friends-panel">
	<!-- МІЙ ПУБЛІЧНИЙ ПРОФІЛЬ: те, що видно іншим. -->
	<h4 class="friends__title">{$t('social.profileTitle')}</h4>

	<label class="friends__field">
		<span class="friends__label">{$t('social.nameLabel')}</span>
		<input
			class="friends__input"
			type="text"
			bind:value={name}
			maxlength="32"
			data-testid="friends-name-input"
		/>
	</label>

	<span class="friends__label">{$t('social.avatarLabel')}</span>
	<div class="friends__row">
		<Avatar {avatar} size={34} />
		<div class="friends__grid">
			{#each AVATAR_ICONS as icon (icon)}
				<button
					type="button"
					class="friends__pick"
					class:friends__pick--on={look.icon === icon}
					aria-pressed={look.icon === icon}
					aria-label={icon}
					data-testid="friends-avatar-{icon}-btn"
					onclick={() => (avatar = formatAvatar(icon, look.color))}
				>
					<Avatar avatar={formatAvatar(icon, look.color)} size={26} />
				</button>
			{/each}
		</div>
	</div>
	<div class="friends__grid">
		{#each AVATAR_COLORS as color (color)}
			<button
				type="button"
				class="friends__pick"
				class:friends__pick--on={look.color === color}
				aria-pressed={look.color === color}
				aria-label={color}
				data-testid="friends-color-{color}-btn"
				onclick={() => (avatar = formatAvatar(look.icon, color))}
			>
				<Avatar avatar={formatAvatar(look.icon, color)} size={26} />
			</button>
		{/each}
	</div>

	<label class="friends__field">
		<span class="friends__label">{$t('social.countryLabel')}</span>
		<select class="friends__input" bind:value={country} data-testid="friends-country-select">
			<option value="">{$t('social.countryNone')}</option>
			{#each countries as item (item.code)}
				<option value={item.code}>{item.name}</option>
			{/each}
		</select>
	</label>

	<StyledButton
		variant="primary"
		onclick={saveProfile}
		disabled={socialState.busy || name.trim().length === 0}
		dataTestId="friends-save-btn"
	>
		{$t('social.save')}
	</StyledButton>
	{#if saved}
		<p class="friends__done" role="status" data-testid="friends-saved-text">
			{$t('social.saved')}
		</p>
	{/if}

	<!-- ПРИВАТНІСТЬ: кожен перемикач тримає правило бази, а не цей екран. -->
	<h4 class="friends__title">{$t('social.privacyTitle')}</h4>
	<p class="friends__hint">{$t('social.privacyHint')}</p>
	{#each PRIVACY_KEYS as key (key)}
		<button
			type="button"
			class="friends__toggle"
			class:friends__toggle--on={socialState.privacy[key]}
			aria-pressed={socialState.privacy[key]}
			data-testid="friends-privacy-{key}-btn"
			onclick={() => togglePrivacy(key)}
		>
			<span>{$t(privacyLabel[key])}</span>
			<span class="friends__state">
				{socialState.privacy[key] ? $t('social.privacyOn') : $t('social.privacyOff')}
			</span>
		</button>
	{/each}

	<!-- ПОШУК: лише за точною поштою. -->
	<h4 class="friends__title">{$t('social.searchTitle')}</h4>
	<p class="friends__hint">{$t('social.searchHint')}</p>
	<div class="friends__row">
		<input
			class="friends__input"
			type="email"
			bind:value={queryEmail}
			placeholder={$t('social.searchPlaceholder')}
			data-testid="friends-search-input"
		/>
		<StyledButton
			variant="default"
			onclick={() => void socialState.search(queryEmail)}
			dataTestId="friends-search-btn"
		>
			{$t('social.searchBtn')}
		</StyledButton>
	</div>

	{#if socialState.found.length === 0}
		<p class="friends__hint" data-testid="friends-nobody-hint">{$t('social.nobody')}</p>
	{:else}
		<ul class="friends__list" data-testid="friends-found-list">
			{#each socialState.found as person (person.uid)}
				<li class="friends__item" data-testid="friends-found-{person.uid}-row">
					<Avatar avatar={person.avatar} />
					<Flag code={person.country} />
					<span class="friends__who">{person.displayName}</span>
					{#if person.uid !== uid}
						<StyledButton
							variant={socialState.follows(person.uid) ? 'default' : 'primary'}
							size="small"
							onclick={() =>
								socialState.follows(person.uid)
									? void socialState.remove(uid, person.uid)
									: void socialState.add(uid, person.uid)}
							dataTestId="friends-follow-{person.uid}-btn"
						>
							{socialState.follows(person.uid) ? $t('social.unfollow') : $t('social.follow')}
						</StyledButton>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}

	{#if socialState.error}
		<p class="friends__error" role="alert" data-testid="friends-error-text">
			{socialState.error === 'permission-denied'
				? $t('social.errorNotAllowed')
				: $t('social.errorOther')}
		</p>
	{/if}

	<!-- МОЇ ПІДПИСКИ. Взаємні позначені: саме вони й є друзі. -->
	<h4 class="friends__title">{$t('social.followingTitle')}</h4>
	{#if socialState.following.length === 0}
		<p class="friends__hint" data-testid="friends-following-none-hint">
			{$t('social.followingNone')}
		</p>
	{:else}
		<ul class="friends__list" data-testid="friends-following-list">
			{#each socialState.following as entry (entry.profile.uid)}
				<li class="friends__item" data-testid="friends-following-{entry.profile.uid}-row">
					<Avatar avatar={entry.profile.avatar} />
					<Flag code={entry.profile.country} />
					<span class="friends__who">{entry.profile.displayName}</span>
					{#if entry.mutual}
						<span class="friends__badge" data-testid="friends-mutual-{entry.profile.uid}-badge">
							{$t('social.mutual')}
						</span>
					{/if}
					<StyledButton
						variant="default"
						size="small"
						onclick={() => void socialState.remove(uid, entry.profile.uid)}
						dataTestId="friends-drop-{entry.profile.uid}-btn"
					>
						{$t('social.unfollow')}
					</StyledButton>
				</li>
			{/each}
		</ul>
	{/if}

	<!-- ХТО ПІДПИСАНИЙ НА МЕНЕ: звідси ж і «прибрати». -->
	<h4 class="friends__title">{$t('social.followersTitle')}</h4>
	{#if socialState.followers.length === 0}
		<p class="friends__hint" data-testid="friends-followers-none-hint">
			{$t('social.followersNone')}
		</p>
	{:else}
		<ul class="friends__list" data-testid="friends-followers-list">
			{#each socialState.followers as entry (entry.profile.uid)}
				<li class="friends__item" data-testid="friends-follower-{entry.profile.uid}-row">
					<Avatar avatar={entry.profile.avatar} />
					<Flag code={entry.profile.country} />
					<span class="friends__who">{entry.profile.displayName}</span>
					{#if entry.mutual}
						<span class="friends__badge">{$t('social.mutual')}</span>
					{/if}
					<StyledButton
						variant="default"
						size="small"
						onclick={() => void socialState.drop(uid, entry.profile.uid)}
						dataTestId="friends-remove-{entry.profile.uid}-btn"
					>
						{$t('social.removeFollower')}
					</StyledButton>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.friends {
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-align: left;
	}

	.friends__title {
		margin: 12px 0 0;
		font-size: 1.05em;
		color: var(--text-primary);
	}

	.friends__hint {
		margin: 0;
		font-size: 0.82em;
		color: var(--text-secondary);
	}

	.friends__field {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.friends__label {
		font-size: 0.8em;
		text-transform: uppercase;
		color: var(--text-secondary);
	}

	.friends__input {
		/* 44px — сенсорна ціль: те саме число, що в решті полів проєкту. */
		min-height: 44px;
		padding: 0 10px;
		border: var(--global-border-width) solid color-mix(in srgb, var(--text-primary) 25%, transparent);
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.05);
		color: var(--text-primary);
		font: inherit;
		flex: 1;
		min-width: 0;
	}

	.friends__row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.friends__grid {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.friends__pick {
		display: inline-flex;
		padding: 3px;
		border: var(--global-border-width) solid transparent;
		border-radius: 10px;
		background: none;
		cursor: pointer;
	}

	/*
	 * Обраний позначений РАМКОЮ, а не лише яскравістю: колір не буває єдиним
	 * носієм значення (WCAG 1.4.1), а самі плитки й так усі кольорові.
	 */
	.friends__pick--on {
		border-color: var(--text-accent);
	}

	.friends__toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		min-height: 44px;
		padding: 6px 10px;
		border: var(--global-border-width) solid color-mix(in srgb, var(--text-primary) 25%, transparent);
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.05);
		color: var(--text-primary);
		font: inherit;
		font-size: 0.9em;
		text-align: left;
		cursor: pointer;
	}

	.friends__toggle--on {
		border-color: var(--text-accent);
	}

	/* Стан названий СЛОВОМ: `aria-pressed` читає лише скрінрідер. */
	.friends__state {
		flex-shrink: 0;
		font-weight: bold;
		font-size: 0.85em;
	}

	.friends__toggle--on .friends__state {
		color: var(--text-accent);
	}

	.friends__list {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.friends__item {
		display: flex;
		align-items: center;
		gap: 8px;
		min-height: 44px;
		padding: 4px 8px;
		border-radius: 10px;
		background: rgba(255, 255, 255, 0.05);
	}

	.friends__who {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.friends__badge {
		flex-shrink: 0;
		font-size: 0.78em;
		font-weight: bold;
		color: var(--text-accent);
	}

	.friends__done {
		margin: 0;
		font-size: 0.85em;
		color: var(--text-accent);
	}

	.friends__error {
		margin: 0;
		font-size: 0.85em;
		color: var(--error-color);
	}
</style>
