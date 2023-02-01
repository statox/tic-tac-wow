<script lang="ts">
    import { indexToXY, type GameHistoryItem } from '../../../services/tictactoe';
    import BoardCanvas from './BoardCanvas.svelte';
    import MoveInfo from './MoveInfo.svelte';

    export let history: GameHistoryItem[];
    export let showMoveHistory: boolean;
</script>

<div>
    {#if showMoveHistory}
        <div class="grid4cols">
            {#if history.length === 0}
                <p>No move yet.</p>
            {/if}
            <h4>Move</h4>
            <h4>Selection</h4>
            <h4>AI</h4>
            <h4>Stats</h4>
            {#each [...history].reverse() as historyItem}
                <div class="item">
                    <BoardCanvas
                        board={historyItem.board}
                        dimensionPx={{ width: 100, height: 100 }}
                        highlightCell={indexToXY(historyItem.moveAsIndex)}
                        noLoop={true}
                    />
                </div>

                <span class="item">{historyItem.method}</span>

                {#if historyItem.aiChoice}
                    <span class="item">
                        {historyItem.aiChoice.score} - {historyItem.aiChoice.reason}
                    </span>
                {:else}
                    <span class="item" />
                {/if}

                <div class="item">
                    <MoveInfo {historyItem} />
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .grid4cols {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-auto-flow: row;
    }
    .item {
        margin-bottom: 5vh;
    }
</style>
