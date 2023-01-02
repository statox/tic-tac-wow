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

    let game = getNewGame();

    const onSelectCell = (x: number, y: number) => {
        selectCellInBoard(game, { x, y });
        game = game;
    };

    const onSelectPiece = (hand: PlayerHand, piece: Piece) => {
        selectPieceInHand(game, hand, piece);
        game = game;
    };
</script>

<div class="d-flex justify-content-center">
    <Board {onSelectCell} {game} />
    {#if game.state.action === 'winner'}
        <div>
            <span>Game over!</span>
            <span>Winner: Player {game.state.player}</span>
            <button on:click={() => (game = getNewGame())}>Play again</button>
        </div>
    {/if}
    {#if game.state.player === 1}
        <PlayerHandCompoment {onSelectPiece} hand={game.player1} />
        <PlayerHandCompoment {onSelectPiece} hand={game.player2} />
    {:else}
        <PlayerHandCompoment {onSelectPiece} hand={game.player2} />
        <PlayerHandCompoment {onSelectPiece} hand={game.player1} />
    {/if}
</div>
