<script lang="ts">
    import type { GameHistoryItem } from '../../services/tictactoe2';
    import BoardCanvas from './BoardCanvas.svelte';

    export let history: GameHistoryItem[];
    let showMoveHistory = true;
</script>

<div>
    <button on:click={() => (showMoveHistory = !showMoveHistory)}>
        {showMoveHistory ? 'Hide' : 'Show'} move history
    </button>
    {#if showMoveHistory}
        <div class="grid4cols">
            {#if history.length === 0}
                <p>No move yet.</p>
            {/if}
            <h4>Move</h4>
            <h4>Selection</h4>
            <h4>AI</h4>
            {#each [...history].reverse() as historyItem}
                <BoardCanvas
                    board={historyItem.board}
                    dimensionPx={{ width: 90, height: 90 }}
                    highlightCell={historyItem.moveCoord}
                />

                <span>{historyItem.method}</span>

                {#if historyItem.aiChoice}
                    <span>{historyItem.aiChoice.score} - {historyItem.aiChoice.reason}</span>
                {:else}
                    <span />
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style>
    .grid4cols {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-flow: row;
    }
</style>
