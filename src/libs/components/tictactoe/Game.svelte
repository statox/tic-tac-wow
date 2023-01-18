<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import {
        boardHasFreeSpots,
        checkWinner,
        COMPUTER,
        DRAW,
        drawBoard,
        getNewBoard,
        PLAYER,
        screenCoordsToGridCoords,
        type Board
    } from '../../services/tictactoe';
    import { onDestroy } from 'svelte';
    let _p5: p5;

    let board: Board; // Holds the 2D array representing our game
    let winnerSpan: p5.Element; // Will hold the span created by p5 to show who wins the game
    let gameOver = false; // When true, prevents the player from clicking on the screen

    // Put the player value in the board if the user clicked an empty cell
    function playerRound(x: number, y: number) {
        if (board[y][x] !== 0) {
            return;
        }
        board[y][x] = PLAYER;
    }

    // Randomly select a cell to put the computer value in the board
    function computerRound() {
        const openPositions = [];
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (board[y][x] === 0) {
                    openPositions.push({ x, y });
                }
            }
        }

        if (openPositions.length === 0) {
            throw new Error("Can't play on a filled board");
        }

        const randIndex = Math.floor(Math.random() * openPositions.length);
        const { x, y } = openPositions[randIndex];
        board[y][x] = COMPUTER;
    }

    function reset() {
        // Empty the winnerSpan text
        if (winnerSpan) {
            winnerSpan.html('');
        }
        // Reset the gameOver protection to allow use to click again
        gameOver = false;
        // Initialize the board with a 3x3 grid filled with zeroes
        board = getNewBoard();
        // Make the computer start 50% of the time
        if (Math.random() < 0.5) {
            computerRound();
        }
    }

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            // Create the canvas and put it in its div
            p5.createCanvas(400, 400);

            // Initialize an empty span
            // We can change its content later on with winnerSpan.html('new text');
            winnerSpan = p5.createSpan('');

            // Create a new game
            reset();
        };
        p5.draw = () => {
            p5.background(0);
            drawBoard(p5, board);
        };
        p5.mousePressed = () => {
            if (gameOver) {
                return;
            }

            if (p5.mouseX < 0 || p5.mouseY < 0 || p5.mouseX > p5.width || p5.mouseY > p5.height) {
                return;
            }

            const { x, y } = screenCoordsToGridCoords(
                p5,
                p5.mouseX,
                p5.mouseY,
                p5.width,
                p5.height,
                board[0].length,
                board.length
            );
            playerRound(x, y);

            if (boardHasFreeSpots(board)) {
                computerRound();
            }

            let winner = checkWinner(board);
            if (winner) {
                if (winner === DRAW) {
                    winnerSpan.html('Draw. Game will reset in 4 seconds');
                } else {
                    winnerSpan.html(
                        (winner === PLAYER ? 'Player' : 'Computer') +
                            ' wins. Game will reset in 4 seconds'
                    );
                }

                gameOver = true;
                setTimeout(reset, 4000);
            }
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<h2>Tic Tac Toe</h2>
<div class="d-flex justify-content-center">
    <P5 {sketch} />
</div>
