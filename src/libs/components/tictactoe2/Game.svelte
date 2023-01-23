<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { writable } from 'svelte/store';
    import { onDestroy } from 'svelte';
    import {
        drawBoard,
        getGameState,
        getNewBoard,
        makeMoveOnBoard,
        Player,
        screenCoordsToGridCoords,
        type Board,
        type BoardCoord,
        type GameState
    } from '../../services/tictactoe2';
    // import { getMoveRandom } from '../../services/tictactoe2/ia';
    import BoardInfo from './BoardInfo.svelte';
    import { getMoveHardcoded } from '../../services/tictactoe2/ia';

    let _p5: p5;

    let board: Board; // Holds the 2D array representing our game
    let currentPlayer: Player;
    let lastMove: BoardCoord;
    const gameState = writable<GameState>();
    let secondsBeforeReset = 0;

    // Put the player value in the board if the user clicked an empty cell
    function manualRound(player: Player, pos: BoardCoord) {
        if ($gameState !== 'not_over') {
            return;
        }
        makeMoveOnBoard(board, player, pos);
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
            makeMoveOnBoard(board, player, pos);
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
        currentPlayer = Player.player;
        gameState.set(getGameState(board));
        lastMove = { x: -1, y: -1 };
    }

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            // Create the canvas and put it in its div
            p5.createCanvas(400, 400);

            // Create a new game
            reset();
        };
        p5.draw = () => {
            p5.background(0);
            drawBoard(p5, board);
        };
        p5.mousePressed = () => {
            if (p5.mouseX < 0 || p5.mouseX > p5.width || p5.mouseY < 0 || p5.mouseY > p5.height) {
                return;
            }
            if (currentPlayer === Player.player) {
                const boardPos = screenCoordsToGridCoords(p5);
                manualRound(Player.player, boardPos);
                automaticRound(Player.computer);
            }
        };
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

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<h2>Game</h2>
<div>
    <P5 {sketch} />
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
