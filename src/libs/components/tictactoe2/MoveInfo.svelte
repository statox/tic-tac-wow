<script lang="ts">
    import type { GameHistoryItem } from '../../services/tictactoe2';
    import {
        moveBlockedOpponent,
        moveTargetsCenter,
        moveTookCorner,
        moveTookOppositeCorner,
        moveTookSide
    } from '../../services/tictactoe2/ia/heuristic/moveEvaluation';

    export let historyItem: GameHistoryItem | null;
</script>

<div class="grid2cols">
    {#if historyItem}
        {@const { moveCoord, player, board } = historyItem}
        <span>Last move:</span>
        <span>{moveCoord.x}, {moveCoord.y}</span>

        <span>center</span><span>{moveTargetsCenter(moveCoord) ? '✅' : '❌'}</span>
        <span>corner</span><span>{moveTookCorner(moveCoord) ? '✅' : '❌'}</span>
        <span>side</span><span>{moveTookSide(moveCoord) ? '✅' : '❌'}</span>

        <span>Took opposite corner</span>
        <span>{moveTookOppositeCorner(board, player, moveCoord) ? '✅' : '❌'}</span>

        <span> Last move blocks opponent</span>
        <span>{moveBlockedOpponent(board, player, moveCoord) ? '✅' : '❌'}</span>
    {/if}
</div>

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
</style>
