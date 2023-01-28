<script lang="ts">
    import type { GameHistoryItem } from '../../services/tictactoe2';

    import {
        moveBlockedFork,
        moveBlockedOpponent,
        moveCreatedFork,
        moveTargetsCenter,
        moveTookCorner,
        moveTookOppositeCorner,
        playerWins
    } from '../../services/tictactoe2/ia/heuristic/moveEvaluation';

    export let historyItem: GameHistoryItem | null;
</script>

{#if historyItem}
    {@const { moveAsIndex, player, board } = historyItem}
    <div class="grid2cols">
        <span>Position</span>
        {#if moveTargetsCenter(moveAsIndex)}
            <span>Center</span>
        {:else if moveTookCorner(moveAsIndex)}
            <span>Corner</span>
        {:else}
            <span>Edge</span>
        {/if}

        <span>Player win</span>
        <span>{playerWins(board, player) ? '✅' : '❌'}</span>

        <span>Move blocks opponent</span>
        <span>{moveBlockedOpponent(board, player, moveAsIndex) ? '✅' : '❌'}</span>

        <span>Move creates fork</span>
        <span>{moveCreatedFork(board, player, moveAsIndex) ? '✅' : '❌'}</span>

        <span>Move blocks opponent's fork</span>
        <span>{moveBlockedFork(board, player, moveAsIndex) ? '✅' : '❌'}</span>

        <span>Took opposite corner</span>
        <span>{moveTookOppositeCorner(board, player, moveAsIndex) ? '✅' : '❌'}</span>

        <span> Last move blocks opponent</span>
        <span>{moveBlockedOpponent(board, player, moveAsIndex) ? '✅' : '❌'}</span>
    </div>
{/if}

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
</style>
