<script lang="ts">
    import { Player, type Game } from '../../../services/tictactoe';
    import BoardCanvas from './BoardCanvas.svelte';
    import GameHistory from './GameHistory.svelte';

    export let game: Game;
    let showMoveHistory = false;

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

    <button on:click={() => (showMoveHistory = !showMoveHistory)}>
        {showMoveHistory ? 'Hide' : 'Show'} move history
    </button>
    {#if showMoveHistory}
        <GameHistory history={game.moveHistory} {showMoveHistory} />
    {:else}
        <BoardCanvas board={game.board} dimensionPx={{ width: 100, height: 100 }} noLoop={true} />
    {/if}
</div>
