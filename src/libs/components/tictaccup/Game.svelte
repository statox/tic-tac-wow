<script lang="ts">
    import { getNewGame, type BoardPosition, type PlayerHand } from '../../services/tictaccup';
    import { getGameCurrentHand, getGameOtherHand } from '../../services/tictaccup/helpers';
    import { strategyFunctions } from '../../services/tictaccup/ia';
    import type { Strategy } from '../../services/tictaccup/ia/strategies/types';
    import {
        placeSelectedPieceInBoard,
        selectCellInBoard,
        selectPieceInHand
    } from '../../services/tictaccup/state-machine';
    import { gameSettings } from '../../stores';
    import Board from './Board.svelte';
    import GameSettings from './GameSettings.svelte';
    import PlayerHandCompoment from './PlayerHand.svelte';

    import Modal from 'svelte-simple-modal';
    import GameHistoryModal from './GameHistoryModal.svelte';

    let game = getNewGame({ historyEnabled: true });
    let gamePlayed = 0;

    const autoPlayer2Move = () => {
        if (
            ['winner', 'select2'].includes(game.state.action) ||
            game.state.player !== game.player2.player ||
            !$gameSettings.player2Auto
        ) {
            return;
        }

        const playerFunction = strategyFunctions[$gameSettings.player2Strat];
        // Use a timeout so that the move looks separate from the previous one
        setTimeout(() => {
            playerFunction(game, game.player2);
            game = game;
        }, 500);
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
            const hand = getGameCurrentHand(game);
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
        const playerFunction = strategyFunctions[method];
        playerFunction(game, hand);
        autoPlayer2Move();
        game = game;
    };

    const resetGame = () => {
        gamePlayed++;
        const player2Start = gamePlayed % 2 === 1;
        game = getNewGame({ player2Start, historyEnabled: true });
        if (player2Start && $gameSettings.player2Auto) {
            autoPlayer2Move();
        }
    };
</script>

<h2>Tic Tac Cup</h2>
<GameSettings />

<Modal><GameHistoryModal {game} /></Modal>

{#key game}
    <Board {onSelectCell} {game} />
{/key}
{#if game.state.action === 'winner'}
    <div>
        <span>Game over!</span>
        <span>Winner: Player {game.state.player}</span>
        <button on:click={resetGame}>Play again</button>
    </div>
{/if}
{#key game}
    <PlayerHandCompoment
        {onSelectAuto}
        {onSelectPiece}
        hand={getGameCurrentHand(game)}
        disabled={false}
    />
    <PlayerHandCompoment
        {onSelectAuto}
        {onSelectPiece}
        hand={getGameOtherHand(game)}
        disabled={true}
    />
{/key}
