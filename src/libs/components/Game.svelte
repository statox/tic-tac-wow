<script lang="ts">
    import { getNewGame, type BoardPosition, type PlayerHand } from '../services/game';
    import {
        makeWinningMoveOrRandom,
        makeRandomMove,
        makeBestMoveByEuristic
    } from '../services/game/ia';
    import type { Strategy } from '../services/game/ia/strategies/types';
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

        makeWinningMoveOrRandom(game, game.player2);
    };
    const onSelectCell = ({ x, y }: BoardPosition) => {
        try {
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
            game.grid = game.grid;
        } catch (e) {
            console.error('Could not select cell');
            console.error(e);
            console.error('Game should be able to keep working');
        }
    };

    const onSelectPiece = (hand: PlayerHand, pieceSelectionIndex: number) => {
        try {
            selectPieceInHand(game, hand, pieceSelectionIndex);
        } catch (e) {
            console.error('Could not select piece');
            console.error(e);
            console.error('Game should be able to keep working');
        }
        game = game;
    };

    const onSelectAuto = (hand: PlayerHand, method: Strategy) => {
        if (method === 'random') {
            makeRandomMove(game, hand);
        }
        if (method === 'win_or_random') {
            makeWinningMoveOrRandom(game, hand);
        }
        if (method === 'euristic') {
            makeBestMoveByEuristic(game, hand);
        }
        autoPlayer2Move();
        game = game;
    };
</script>

<div class="d-flex justify-content-center">
    <button on:click={() => (autoPlayer2 = !autoPlayer2)}>
        {autoPlayer2 ? 'Human player 2' : 'Computer player 2'}
    </button>
    {#key game}
        <Board {onSelectCell} {game} />
    {/key}
    {#if game.state.action === 'winner'}
        <div>
            <span>Game over!</span>
            <span>Winner: Player {game.state.player}</span>
            <button on:click={() => (game = getNewGame())}>Play again</button>
        </div>
    {/if}
    {#if game.state.player === 1}
        {#key game}
            <PlayerHandCompoment
                {onSelectAuto}
                {onSelectPiece}
                hand={game.player1}
                disabled={false}
            />
            <PlayerHandCompoment
                {onSelectAuto}
                {onSelectPiece}
                hand={game.player2}
                disabled={true}
            />
        {/key}
    {:else}
        {#key game}
            <PlayerHandCompoment
                {onSelectAuto}
                {onSelectPiece}
                hand={game.player2}
                disabled={false}
            />
            <PlayerHandCompoment
                {onSelectAuto}
                {onSelectPiece}
                hand={game.player1}
                disabled={true}
            />
        {/key}
    {/if}
</div>
