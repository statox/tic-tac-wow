<script lang="ts">
    import { Player, type Game } from '../../services/tictactoe2';

    export let game: Game;
</script>

<div>
    {#if game.state === 'not_over'}
        <span>Turn: {game.currentPlayer === Player.player ? 'Player' : 'Computer'}</span>
    {/if}
    {#if game.state === 'player_win'}
        <span>Player wins!</span>
    {/if}
    {#if game.state === 'computer_win'}
        <span>Computer wins!</span>
    {/if}
    {#if game.state === 'draw'}
        <span>Draw</span>
    {/if}
</div>
