<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
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
    import { onDestroy } from 'svelte';
    import { getMoveRandom } from '../../services/tictactoe2/ia';
    let _p5: p5;

    let board: Board; // Holds the 2D array representing our game
    let currentPlayer: Player;
    let gameState: GameState;

    // Put the player value in the board if the user clicked an empty cell
    function playerRound(pos: BoardCoord) {
        if (gameState !== 'not_over') {
            return;
        }
        makeMoveOnBoard(board, Player.player, pos);
        gameState = getGameState(board);
        switchCurrentPlayer();
    }

    // Randomly select a cell to put the computer value in the board
    function computerRound() {
        if (gameState !== 'not_over') {
            return;
        }
        const pos = getMoveRandom(board);
        makeMoveOnBoard(board, Player.computer, pos);
        gameState = getGameState(board);
        switchCurrentPlayer();
    }

    function switchCurrentPlayer() {
        currentPlayer = currentPlayer === Player.player ? Player.computer : Player.player;
    }

    function reset() {
        board = getNewBoard();
        currentPlayer = Player.player;
        gameState = getGameState(board);
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
            if (currentPlayer === Player.player) {
                const boardPos = screenCoordsToGridCoords(p5);
                playerRound(boardPos);

                setTimeout(computerRound, 500);
            }
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<h2>Tic Tac Toe binary</h2>
<div>
    <P5 {sketch} />
    <div>
        {#if gameState === 'player_win'}
            <span>Player wins!</span>
        {/if}
        {#if gameState === 'computer_win'}
            <span>Computer wins!</span>
        {/if}
        {#if gameState === 'draw'}
            <span>Draw</span>
        {/if}
    </div>
</div>
