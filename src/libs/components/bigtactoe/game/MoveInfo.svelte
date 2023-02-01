<script lang="ts">
    import { indexToXY, type GameHistoryItem } from '../../../services/bigtactoe';

    export let historyItem: GameHistoryItem | null;
</script>

{#if historyItem}
    {@const { moveAsIndex, player } = historyItem}
    <div class="grid2cols">
        <span>Player</span>
        <span>{player}</span>

        <span>Position</span>
        <span>{indexToXY(moveAsIndex)}</span>
    </div>
{/if}

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
</style>
