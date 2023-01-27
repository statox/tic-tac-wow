<script lang="ts">
    import { getPlayerLastMove, Player, type Game } from '../../services/tictactoe2';
    import GameHistory from './GameHistory.svelte';
    import MoveInfo from './MoveInfo.svelte';

    export let game: Game;
    export let showMoveInfo = false;

    const getStateLabel = (game: Game): string => {
        if (!game || !game.state) {
            return 'N/A';
        }
        if (game.state === 'not_over') {
            return 'Turn: ' + (game.currentPlayer === Player.player ? 'Player' : 'Computer');
        }
        if (game.state === 'player_win') {
            return 'Player Win';
        }
        if (game.state === 'computer_win') {
            return 'Computer Win';
        }
        if (game.state === 'draw') {
            return 'Draw';
        }
        if (game.state === 'over') {
            return 'Game Over';
        }
        return 'Invalid Game';
    };
</script>

<div>
    <h4>Game info</h4>
    <span>{getStateLabel(game)}</span>

    {#if showMoveInfo}
        <div class="grid2cols">
            <MoveInfo historyItem={getPlayerLastMove(game, Player.player)} />
            <MoveInfo historyItem={getPlayerLastMove(game, Player.computer)} />
        </div>
    {/if}

    <GameHistory history={game.moveHistory} />
</div>

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
</style>
