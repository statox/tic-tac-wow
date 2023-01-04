<script lang="ts">
    import {
        getNewGame,
        selectPieceInHand,
        type PlayerHand,
        type Piece,
        placeSelectedPieceInBoard,
        selectCellInBoard
    } from '../services/game';
    import { makeRandomMove } from '../services/game/ia';
    import Board from './Board.svelte';
    import PlayerHandCompoment from './PlayerHand.svelte';

    let game = getNewGame();
    let autoPlayer2 = false;

    const onSelectCell = (x: number, y: number) => {
        if (game.state.action === 'select2') {
            const returnCode = placeSelectedPieceInBoard(game, { x, y });
            if (autoPlayer2 && returnCode === 0) {
                makeRandomMove(game, game.player2);
            }
            game = game;
            return;
        }
        const hand = game.state.player === 1 ? game.player1 : game.player2;
        selectCellInBoard(game, hand, { x, y });
        game = game;
    };

    const onSelectPiece = (hand: PlayerHand, piece: Piece) => {
        selectPieceInHand(game, hand, piece);
        game = game;
    };

    const onSelectRandom = (hand: PlayerHand) => {
        makeRandomMove(game, hand);
        if (autoPlayer2) {
            makeRandomMove(game, game.player2);
        }
        game = game;
    };
</script>

<div class="d-flex justify-content-center">
    <button on:click={() => (autoPlayer2 = !autoPlayer2)}>
        {autoPlayer2 ? 'Human player 2' : 'Computer player 2'}
    </button>
    <Board {onSelectCell} {game} />
    {#if game.state.action === 'winner'}
        <div>
            <span>Game over!</span>
            <span>Winner: Player {game.state.player}</span>
            <button on:click={() => (game = getNewGame())}>Play again</button>
        </div>
    {/if}
    {#if game.state.player === 1}
        <PlayerHandCompoment
            {onSelectRandom}
            {onSelectPiece}
            hand={game.player1}
            disabled={false}
        />
        <PlayerHandCompoment {onSelectRandom} {onSelectPiece} hand={game.player2} disabled={true} />
    {:else}
        <PlayerHandCompoment
            {onSelectRandom}
            {onSelectPiece}
            hand={game.player2}
            disabled={false}
        />
        <PlayerHandCompoment {onSelectRandom} {onSelectPiece} hand={game.player1} disabled={true} />
    {/if}
</div>
