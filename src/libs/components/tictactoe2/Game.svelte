<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import {
        drawBoard,
        getNewBoard,
        makeMoveOnBoard,
        Player,
        screenCoordsToGridCoords,
        type Board,
        type BoardCoord
    } from '../../services/tictactoe2';
    import { onDestroy } from 'svelte';
    let _p5: p5;

    let board: Board; // Holds the 2D array representing our game
    let currentPlayer: Player;

    // Put the player value in the board if the user clicked an empty cell
    function playerRound(pos: BoardCoord) {
        makeMoveOnBoard(board, Player.player, pos);
    }

    // Randomly select a cell to put the computer value in the board
    function computerRound(pos: BoardCoord) {
        makeMoveOnBoard(board, Player.computer, pos);
    }

    function switchCurrentPlayer() {
        currentPlayer = currentPlayer === Player.player ? Player.computer : Player.player;
    }

    function reset() {
        board = getNewBoard();
        currentPlayer = Player.player;
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
            const boardPos = screenCoordsToGridCoords(p5);
            if (currentPlayer === Player.player) {
                playerRound(boardPos);
            } else {
                computerRound(boardPos);
            }
            switchCurrentPlayer();
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<h2>Tic Tac Toe binary</h2>
<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>
