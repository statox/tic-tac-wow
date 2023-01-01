<script lang="ts">
    import { getNewGame } from '../services/game';
    import Board from './Board.svelte';
    import PlayerHand from './PlayerHand.svelte';

    const game = getNewGame();
</script>

<div class="d-flex justify-content-center">
    <Board {game} />
    <PlayerHand hand={game.player1} />
    <PlayerHand hand={game.player2} />
</div>
