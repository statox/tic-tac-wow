<script lang="ts">
    import { getPlayerLastMove, Player, type Game } from '../../services/tictactoe2';
    import MoveInfo from './MoveInfo.svelte';

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

    <div class="grid2cols">
        <MoveInfo historyItem={getPlayerLastMove(game, Player.player)} />
        <MoveInfo historyItem={getPlayerLastMove(game, Player.computer)} />
    </div>

    <button on:click={() => (showMoveHistory = !showMoveHistory)}>
        {showMoveHistory ? 'Hide' : 'Show'} move history
    </button>
    {#if showMoveHistory}
        <div class="grid4cols">
            {#each [...game.moveHistory].reverse() as historyItem}
                <span>{historyItem.moveCoord.x}, {historyItem.moveCoord.y}</span>
                <span>Player {historyItem.player} - Method {historyItem.method}</span>
                <span>{historyItem.board.toString()}</span>
                {#if historyItem.aiChoice}
                    <span>{JSON.stringify(historyItem.aiChoice)}</span>
                {:else}
                    <span>-</span>
                {/if}
            {/each}
        </div>
    {/if}
</div>

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
    .grid4cols {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-auto-flow: row;
    }
</style>
