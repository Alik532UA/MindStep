<script lang="ts">
    import { page } from "$app/state";
    import Lobby from "$lib/components/online/Lobby.svelte";

    // `$derived`, а не `$:`: `page` з `$app/state` — дрібнозернистий стан, і
    // саме рунічне похідне гарантує перечитування при зміні параметра
    // маршруту. Легасі-присвоєння тут лишати не можна навпіл із новим
    // джерелом — це єдиний легасі-файл серед семи, тому переведений цілком.
    const roomId = $derived(page.params.roomId);
</script>

<Lobby roomId={roomId || ""} />
