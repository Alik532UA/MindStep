<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { base } from '$app/paths';
	import { countryName, isCountry } from '$lib/config/countries';

	/**
	 * Прапор країни гравця.
	 *
	 * ## Чому `<img>`, а не емодзі
	 *
	 * На Windows замість прапора стоять дві літери — це не збій шрифту, а рішення
	 * Microsoft: у системних шрифтах немає глифів для пар regional-indicator, тож
	 * браузер малює самі літери. Отже емодзі-прапор недоступний більшості
	 * відвідувачів, і жоден шрифт це не лікує, крім власного, вагою в мегабайти.
	 * Той самий висновок і та сама реалізація, що в сусідньому `VetCrewGames`, —
	 * звідти ж перенесені й самі файли (`static/flags/`, див. `config/countries.ts`).
	 *
	 * SVG зі `static/` однаковий усюди, покривається `img-src 'self'` без правки
	 * CSP і кешується браузером окремо: другий гравець із тієї самої країни не
	 * завантажує нічого.
	 *
	 * ## Доступність
	 *
	 * `alt` — НАЗВА КРАЇНИ мовою інтерфейсу, а не «прапор». Прапор тут не оздоба:
	 * він несе єдину інформацію, якої немає в тексті поруч, тож для скрінрідера він
	 * мусить бути тим самим фактом, а не словом «зображення».
	 *
	 * Невідомий код НЕ малюється взагалі: `<img>` на неіснуючий файл дає порожню
	 * рамку й запис у консолі — дефект, який видно лише розробнику.
	 */
	interface Props {
		/** Код країни, дві літери. Порожній рядок або `null` — прапора немає. */
		code: string | null | undefined;
		/** Висота в пікселях. Ширина рахується з пропорції 3:2. */
		height?: number;
	}

	let { code, height = 14 }: Props = $props();

	const known = $derived(isCountry(code) ? String(code).toLowerCase() : null);
	const label = $derived(known === null ? '' : countryName(known, $locale ?? 'uk'));
</script>

{#if known}
	<!--
		`width`/`height` стоять атрибутами, а не лише в стилях: без них браузер
		малює зображення нульового розміру до завантаження й сіпає рядок списку.
	-->
	<img
		class="flag"
		src={`${base}/flags/${known}.svg`}
		alt={label}
		title={label}
		width={Math.round(height * 1.5)}
		height={height}
		loading="lazy"
		decoding="async"
	/>
{/if}

<style>
	/*
	 * Тонка рамка ОБОВʼЯЗКОВА, і не для краси: прапори з білою смугою по краю
	 * (Польща, Японія, Фінляндія) на світлому тлі зливаються з панеллю, і замість
	 * прапора видно половину.
	 */
	.flag {
		flex-shrink: 0;
		border-radius: 2px;
		border: 1px solid color-mix(in srgb, var(--text-primary) 22%, transparent);
		vertical-align: text-bottom;
	}
</style>
