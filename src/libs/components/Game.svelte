<script lang="ts">
    import {
        getNewGame,
        selectPieceInHand,
        type PlayerHand,
        type Piece,
        selectCellInBoard
    } from '../services/game';
    import Board from './Board.svelte';
    import PlayerHandCompoment from './PlayerHand.svelte';

    const game = getNewGame();

    const onSelectCell = (x: number, y: number) => {
        selectCellInBoard(game, { x, y });
        game.grid = game.grid;
    };

    const onSelectPiece = (hand: PlayerHand, piece: Piece) => {
        selectPieceInHand(game, hand, piece);
        game.player1 = game.player1;
        game.player2 = game.player2;
    };
</script>

<div class="d-flex justify-content-center">
    <Board {onSelectCell} {game} />
    {#if game.state.player === 1}
        <PlayerHandCompoment {onSelectPiece} hand={game.player1} />
        <PlayerHandCompoment {onSelectPiece} hand={game.player2} />
    {:else}
        <PlayerHandCompoment {onSelectPiece} hand={game.player2} />
        <PlayerHandCompoment {onSelectPiece} hand={game.player1} />
    {/if}
</div>
