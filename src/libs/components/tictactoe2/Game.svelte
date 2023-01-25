<script lang="ts">
    import { writable } from 'svelte/store';
    import {
        getGameState,
        getNewBoard,
        makeMoveOnBoard,
        Player,
        xyToIndex,
        type Board,
        type BoardCoord,
        type GameState
    } from '../../services/tictactoe2';
    // import { getMoveRandom } from '../../services/tictactoe2/ia';
    import BoardInfo from './BoardInfo.svelte';
    import BoardCanvas from './BoardCanvas.svelte';
    import { getMoveHardcoded } from '../../services/tictactoe2/ia';

    let board: Board; // Holds the 2D array representing our game
    let currentPlayer: Player;
    let lastMove: BoardCoord;
    const gameState = writable<GameState>();
    let secondsBeforeReset = 0;
    let player2Starts = true;

    // Put the player value in the board if the user clicked an empty cell
    function manualRound(player: Player, pos: BoardCoord) {
        if ($gameState !== 'not_over') {
            return;
        }
        makeMoveOnBoard(board, player, xyToIndex(pos));
        lastMove = pos;
        board = board;
        gameState.set(getGameState(board));
        switchCurrentPlayer();
    }

    // Randomly select a cell to put the computer value in the board
    function automaticRound(player: Player) {
        if ($gameState !== 'not_over') {
            return;
        }
        setTimeout(() => {
            // const pos = getMoveRandom(board);
            const pos = getMoveHardcoded(board, player);
            lastMove = pos;
            makeMoveOnBoard(board, player, xyToIndex(pos));
            board = board;
            gameState.set(getGameState(board));
            switchCurrentPlayer();
        }, 500);
    }

    function switchCurrentPlayer() {
        currentPlayer = currentPlayer === Player.player ? Player.computer : Player.player;
    }

    function reset() {
        board = getNewBoard();

        player2Starts = !player2Starts;
        currentPlayer = player2Starts ? Player.computer : Player.player;
        gameState.set(getGameState(board));
        lastMove = { x: -1, y: -1 };
        if (player2Starts) {
            automaticRound(Player.computer);
        }
    }

    const onClick = (boardPos: BoardCoord) => {
        if (currentPlayer === Player.player) {
            manualRound(Player.player, boardPos);
            automaticRound(Player.computer);
        }
    };

    gameState.subscribe((newState) => {
        if (!newState || newState === 'not_over') {
            return;
        }

        secondsBeforeReset = 4;
        const resetInterval = setInterval(() => {
            secondsBeforeReset--;
            if (secondsBeforeReset === 0) {
                reset();
                clearInterval(resetInterval);
            }
        }, 1000);
    });

    reset();
</script>

<h2>Game</h2>
<div>
    <BoardCanvas {board} {onClick} />
    <div>
        {#if $gameState === 'player_win'}
            <span>Player wins!</span>
        {/if}
        {#if $gameState === 'computer_win'}
            <span>Computer wins!</span>
        {/if}
        {#if $gameState === 'draw'}
            <span>Draw</span>
        {/if}
        {#if secondsBeforeReset > 0}
            <span>Restarting in {secondsBeforeReset} seconds</span>
        {/if}
    </div>
    <BoardInfo {board} {lastMove} />
</div>
