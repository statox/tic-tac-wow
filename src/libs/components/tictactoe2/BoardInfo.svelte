<script lang="ts">
    import {
        playerBlocksOpponent,
        playerWins
    } from '../../services/tictactoe2/ia/heuristic/moveEvaluation';

    import { getGameState, Player, type Board } from '../../services/tictactoe2';

    export let board: Board;
</script>

<div>
    <h4>Board info</h4>
    {#if board}
        <div class="grid2cols">
            <span>State:</span>
            <span>{getGameState(board)}</span>

            <span>Player 1 (player, O)</span>
            <span>Player 2 (computer, X)</span>

            <div class="grid2cols">
                <span>0b{board.player.toString(2).padStart(9, '0')}</span>
                <span>{board.player}</span>

                <span>Wins</span><span>{playerWins(board, Player.player) ? '✅' : '❌'}</span>

                <span>Blocks opponent</span>
                <span>{playerBlocksOpponent(board, Player.player) ? '✅' : '❌'}</span>
            </div>
            <div class="grid2cols">
                <span>0b{board.computer.toString(2).padStart(9, '0')}</span>
                <span>{board.computer}</span>

                <span>Wins</span><span>{playerWins(board, Player.computer) ? '✅' : '❌'}</span>

                <span>Blocks opponent</span>
                <span>{playerBlocksOpponent(board, Player.computer) ? '✅' : '❌'}</span>
            </div>
        </div>
    {/if}
</div>

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
</style>
