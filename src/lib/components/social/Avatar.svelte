<script lang="ts">
	import {
		Bird,
		Bug,
		Cat,
		Dog,
		Fish,
		Heart,
		Rabbit,
		Smile,
		Snail,
		Star,
		Target,
		Turtle,
		User,
		Zap
	} from 'lucide-svelte';
	import { parseAvatar, type AvatarIcon } from '$lib/config/avatars';

	/**
	 * АВАТАР — плитка «значок на кольорі», а не картинка.
	 *
	 * Чому не зображення й чому саме рядок `значок:колір` — у `config/avatars.ts`.
	 * Тут — малювання, і рішення тут два.
	 *
	 * ## Мапа значків живе ТУТ, а не в конфізі
	 *
	 * `config/avatars.ts` лишається чистим від імпортів `lucide-svelte`: інакше
	 * кожен, хто читає звідти саму лише перевірку форми (а це і сервіси профілю, і
	 * гейт), тягнув би в бандл чотирнадцять модулів зі значками.
	 *
	 * ## Палітра НЕ залежить від теми
	 *
	 * Аватар відрізняє людину, тож він мусить виглядати однаково в мене й у неї.
	 * Значення живуть тут же, змінними: у проєкті немає токенів під аватар, і
	 * заводити вісім кольорів у глобальні стилі заради одного компонента означало б
	 * розкидати одну відповідальність по двох файлах.
	 */
	interface Props {
		/** Рядок `значок:колір`. Невідоме чи порожнє — типовий аватар. */
		avatar: string | null | undefined;
		/** Сторона плитки в пікселях. Значок займає дві третини. */
		size?: number;
	}

	let { avatar, size = 26 }: Props = $props();

	const ICONS: Record<AvatarIcon, typeof User> = {
		user: User,
		cat: Cat,
		dog: Dog,
		rabbit: Rabbit,
		bird: Bird,
		fish: Fish,
		snail: Snail,
		turtle: Turtle,
		bug: Bug,
		smile: Smile,
		star: Star,
		heart: Heart,
		zap: Zap,
		target: Target
	};

	const look = $derived(parseAvatar(avatar));
	const Icon = $derived(ICONS[look.icon]);
	/*
	 * Значок міряється в тих самих пікселях, що плитка, а не у відсотках:
	 * `lucide-svelte` малює `width`/`height` числом в атрибутах, тобто відносної
	 * одиниці там не буває. Дві третини — щоб навколо лишалося поле: значок
	 * урівень із краєм читається як обрізаний.
	 */
	const glyph = $derived(Math.round(size * 0.66));
</script>

<span
	class="avatar avatar--{look.color}"
	style:width="{size}px"
	style:height="{size}px"
	aria-hidden="true"
>
	<Icon size={glyph} strokeWidth={2.25} />
</span>

<style>
	/*
	 * Тонка рамка ОБОВʼЯЗКОВА, і не для краси: плитка лежить на скляній панелі
	 * модалки, і темний `slate` на темному тлі зливався б із ним. Рамка з кольору
	 * тексту в 78% прозорості дає межу на будь-якому тлі, не сперечаючись із
	 * кольором самої плитки.
	 */
	.avatar {
		--avatar-ink: #ffffff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		border-radius: 8px;
		border: 1px solid color-mix(in srgb, var(--text-primary) 22%, transparent);
		color: var(--avatar-ink);
		vertical-align: text-bottom;
	}

	/*
	 * Значення — темні відтінки під БІЛИЙ значок: контраст білого з кожним із них
	 * не нижчий за 4.5:1, тобто значок читається, а не вгадується.
	 */
	.avatar--red {
		background: #b3261e;
	}

	.avatar--orange {
		background: #8a4b00;
	}

	.avatar--green {
		background: #1f6b34;
	}

	.avatar--teal {
		background: #0f5f6b;
	}

	.avatar--blue {
		background: #1d4ed8;
	}

	.avatar--violet {
		background: #6b28b8;
	}

	.avatar--pink {
		background: #a3175e;
	}

	.avatar--slate {
		background: #40505f;
	}
</style>
