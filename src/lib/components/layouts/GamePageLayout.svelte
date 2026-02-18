<script lang="ts">
    import ReplayViewer from "$lib/components/ReplayViewer.svelte";
    import "$lib/css/components/game-board.css";
    import "$lib/css/components/controls.css";
    import DraggableColumns from "$lib/components/DraggableColumns.svelte";
    import { layoutStateRune, type WidgetId } from "$lib/stores/layoutState.svelte";
    import { widgetRegistry } from "$lib/config/widgetRegistry"; // <-- Новий імпорт

    import { onMount } from "svelte";
    import { animationService } from "$lib/services/animationService.js";
    import { boardState } from '$lib/stores/boardState.svelte';
    import { replayState } from "$lib/stores/replayState.svelte";
    import { i18nReady } from "$lib/i18n/init.js";
    import { logService } from "$lib/services/logService";

    interface Props {
        widgetFilter?: (widgetId: string) => boolean;
        initLogic?: () => void;
    }

    let { 
        widgetFilter = () => true, 
        initLogic 
    }: Props = $props();

    onMount(() => {
        if (initLogic) {
            logService.init("[GamePageLayout] Running custom init logic.");
            initLogic();
        } else {
            const bState = boardState.state;
            if (!bState || bState.moveHistory.length <= 1) {
                logService.init(
                    "[GamePageLayout] No active game found and no custom init logic provided.",
                );
            }
        }
        animationService.initialize();
    });

    // Реактивне формування колонок на основі стану та фільтру
    const columns = $derived($i18nReady
        ? layoutStateRune.state.map((col) => ({
              id: col.id,
              label: col.id,
              items: col.widgets.filter(widgetFilter).map((id) => ({
                  id,
                  label: id,
              })),
          }))
        : []);

    function itemContent(item: { id: string; label: string }) {
        // Використовуємо централізований реєстр
        return widgetRegistry[item.id] || item.id;
    }

    function handleDrop(
        e: CustomEvent<{
            dragging: { id: string; label: string };
            dragSourceCol: string;
            dropTargetCol: string;
            dropIndex: number;
        }>,
    ) {
        const { dragging, dragSourceCol, dropTargetCol, dropIndex } = e.detail;
        layoutStateRune.update((cols) => {
            let newCols = cols.map((col) => ({
                ...col,
                widgets: col.widgets.filter((id) => id !== dragging.id),
            }));
            return newCols.map((col) => {
                if (col.id === dropTargetCol) {
                    const widgets = [...col.widgets];
                    widgets.splice(dropIndex, 0, dragging.id as WidgetId);
                    return { ...col, widgets };
                }
                return col;
            });
        });
    }
</script>

{#if replayState.state.isReplayMode}
    <ReplayViewer
        moveHistory={replayState.state.moveHistory}
        boardSize={replayState.state.boardSize}
        autoPlayForward={true}
    />
{:else}
    <DraggableColumns
        {columns}
        {itemContent}
        on:drop={handleDrop}
        class_name="game-layout"
    />
{/if}
