<script lang="ts">
    import { Player, type Game } from '../../services/tictactoe2';
    import GameHistory from './GameHistory.svelte';

    export let game: Game;

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
    <GameHistory history={game.moveHistory} />
</div>
