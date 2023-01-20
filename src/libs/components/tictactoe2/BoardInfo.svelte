<script lang="ts">
    import { getGameState, type Board } from '../../services/tictactoe2';

    export let board: Board;
</script>

<div>
    <h4>Board info</h4>
    {#if board}
        <div class="overlay">
            <span>State: {getGameState(board)}</span>
            <div class="grid2x2">
                <span>Player 1 (player, O)</span>
                <span>Player 2 (computer, X)</span>

                <span>{board.player.toString(2).padStart(9, '0')}</span>
                <span>{board.computer.toString(2).padStart(9, '0')}</span>

                <span>{board.player}</span>
                <span>{board.computer}</span>
            </div>
        </div>
    {/if}
</div>

<style>
    .overlay {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
    .grid2x2 {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(3, auto);
        grid-auto-flow: row;
    }
</style>
