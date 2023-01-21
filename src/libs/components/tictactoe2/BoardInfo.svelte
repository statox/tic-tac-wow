<script lang="ts">
    import {
        moveTargetsCenter,
        moveTookCorner,
        moveTookOppositeCorner,
        moveTookSide,
        playerBlocksOpponent,
        playerWins
    } from '../../services/tictactoe2/ia/heuristic/moveEvaluation';

    import { getGameState, Player, type Board, type BoardCoord } from '../../services/tictactoe2';

    export let board: Board;
    export let lastMove: BoardCoord;
</script>

<div>
    <h4>Board info</h4>
    {#if board}
        <div class="grid2cols">
            <span>State:</span>
            <span>{getGameState(board)}</span>

            <span>Last move</span>
            <ul>
                <li>{lastMove?.x},{lastMove?.y}</li>
                <li>center {moveTargetsCenter(lastMove) ? '✅' : '❌'}</li>
                <li>corner {moveTookCorner(lastMove) ? '✅' : '❌'}</li>
                <li>side {moveTookSide(lastMove) ? '✅' : '❌'}</li>
            </ul>

            <div class="grid2cols">
                <span>Player 1</span><span>Player, O</span>
                <span>0b{board.player.toString(2).padStart(9, '0')}</span>
                <span>{board.player}</span>

                <span>Wins</span><span>{playerWins(board, Player.player) ? '✅' : '❌'}</span>

                <span>Blocks opponent</span>
                <span>{playerBlocksOpponent(board, Player.player) ? '✅' : '❌'}</span>

                <span>Last move took opposite corner</span>
                <span>{moveTookOppositeCorner(board, Player.player, lastMove) ? '✅' : '❌'}</span>
            </div>
            <div class="grid2cols">
                <span>Player 2</span><span>Computer, X</span>
                <span>0b{board.computer.toString(2).padStart(9, '0')}</span>
                <span>{board.computer}</span>

                <span>Wins</span><span>{playerWins(board, Player.computer) ? '✅' : '❌'}</span>

                <span>Blocks opponent</span>
                <span>{playerBlocksOpponent(board, Player.computer) ? '✅' : '❌'}</span>

                <span>Last move took opposite corner</span>
                <span>{moveTookOppositeCorner(board, Player.computer, lastMove) ? '✅' : '❌'}</span
                >
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
