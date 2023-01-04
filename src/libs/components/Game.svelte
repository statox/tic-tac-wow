<script lang="ts">
    import { getNewGame, type PlayerHand, type Piece } from '../services/game';
    import { makeNotLosingMove, makeRandomMove } from '../services/game/ia';
    import {
        placeSelectedPieceInBoard,
        selectCellInBoard,
        selectPieceInHand
    } from '../services/game/state-machine';
    import Board from './Board.svelte';
    import PlayerHandCompoment from './PlayerHand.svelte';

    let game = getNewGame();
    let autoPlayer2 = false;

    const autoPlayer2Move = () => {
        if (
            ['winner', 'select2'].includes(game.state.action) ||
            game.state.player !== game.player2.player ||
            !autoPlayer2
        ) {
            return;
        }

        makeRandomMove(game, game.player2);
    };
    const onSelectCell = (x: number, y: number) => {
        if (game.state.action === 'select2') {
            const returnCode = placeSelectedPieceInBoard(game, { x, y });
            if (returnCode === 0) {
                autoPlayer2Move();
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

    const onSelectAuto = (hand: PlayerHand, method: 'random' | 'not_losing') => {
        if (method === 'random') {
            makeRandomMove(game, hand);
        }
        if (method === 'not_losing') {
            makeNotLosingMove(game, hand);
        }
        autoPlayer2Move();
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
        <PlayerHandCompoment {onSelectAuto} {onSelectPiece} hand={game.player1} disabled={false} />
        <PlayerHandCompoment {onSelectAuto} {onSelectPiece} hand={game.player2} disabled={true} />
    {:else}
        <PlayerHandCompoment {onSelectAuto} {onSelectPiece} hand={game.player2} disabled={false} />
        <PlayerHandCompoment {onSelectAuto} {onSelectPiece} hand={game.player1} disabled={true} />
    {/if}
</div>
