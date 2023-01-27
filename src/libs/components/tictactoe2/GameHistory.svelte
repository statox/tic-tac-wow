<script lang="ts">
    import type { GameHistoryItem } from '../../services/tictactoe2';
    import BoardCanvas from './BoardCanvas.svelte';

    export let history: GameHistoryItem[];
</script>

<div class="grid4cols">
    {#if history.length === 0}
        <p>No move yet.</p>
    {/if}
    <h4>Coordinates</h4>
    <h4>Player</h4>
    <h4>Board</h4>
    <h4>AI</h4>
    {#each [...history].reverse() as historyItem}
        <span>{historyItem.moveCoord.x}, {historyItem.moveCoord.y}</span>
        <span>Player {historyItem.player} - Method {historyItem.method}</span>

        <BoardCanvas board={historyItem.board} dimensionPx={{ width: 50, height: 50 }} />

        {#if historyItem.aiChoice}
            <span>{JSON.stringify(historyItem.aiChoice)}</span>
        {:else}
            <span>-</span>
        {/if}
    {/each}
</div>

<style>
    .grid4cols {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-auto-flow: row;
    }
</style>
