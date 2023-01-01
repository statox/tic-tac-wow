<script lang="ts">
    import { getNewGame } from '../services/game';
    import Board from './Board.svelte';
    import PlayerPieces from './PlayerPieces.svelte';

    const game = getNewGame();
</script>

<span>Hello Game</span>

<div class="d-flex justify-content-center">
    <Board grid={game.grid} />
    <PlayerPieces playerPieces={game.player1Pieces} player={1} />
    <PlayerPieces playerPieces={game.player2Pieces} player={2} />
</div>
