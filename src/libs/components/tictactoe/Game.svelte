<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    let _p5: p5;

    type Board = number[][];
    let board: Board; // Holds the 2D array representing our game
    let winnerSpan: p5.Element; // Will hold the span created by p5 to show who wins the game
    let gameOver = false; // When true, prevents the player from clicking on the screen

    // These constants are also in the global scope
    const PLAYER = 1;
    const COMPUTER = -1;
    const DRAW = 2;

    // Return a new board filled with zeroes
    function newBoard() {
        const board: Board = [];
        for (let y = 0; y < 3; y++) {
            board.push([]);
            for (let x = 0; x < 3; x++) {
                board[board.length - 1].push(0);
            }
        }
        return board;
    }

    function drawBoard(p5: p5, board: Board) {
        const cellWidth = p5.width / 3;
        const cellHeight = p5.height / 3;

        const { height, width } = p5;
        // Draw the 4 lines of the board in white
        p5.noFill();
        p5.stroke(255);
        p5.line(cellWidth, 0, cellWidth, height);
        p5.line(cellWidth * 2, 0, cellWidth * 2, height);
        p5.line(0, cellHeight, width, cellHeight);
        p5.line(0, cellHeight * 2, width, cellHeight * 2);

        // For each grid in the board show the corresonding tile
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (board[y][x] === 1) {
                    p5.stroke('blue');
                    p5.circle(
                        x * cellWidth + cellWidth / 2,
                        y * cellHeight + cellHeight / 2,
                        cellHeight / 2
                    );
                }
                if (board[y][x] === -1) {
                    p5.stroke('red');
                    p5.line(
                        x * cellWidth + cellWidth * 0.3,
                        y * cellHeight + cellHeight * 0.3,
                        x * cellWidth + cellWidth * 0.7,
                        y * cellHeight + cellHeight * 0.7
                    );
                    p5.line(
                        x * cellWidth + cellWidth * 0.7,
                        y * cellHeight + cellHeight * 0.3,
                        x * cellWidth + cellWidth * 0.3,
                        y * cellHeight + cellHeight * 0.7
                    );
                }
            }
        }
    }

    // Take the screen position of the mouse (mouseX, mouseY)
    // the height and width of the canvas (screenWidth, screenHeight)
    // and the height and width of the board (boardWidth, boardHeight) which should be 3x3
    // and return the corresponding coordinates in the board
    function screenCoordsToGridCoords(
        p5: p5,
        mouseX: number,
        mouseY: number,
        screenWidth: number,
        screenHeight: number,
        boardWidth: number,
        boardHeight: number
    ) {
        const x = Math.floor(p5.map(mouseX, 0, screenWidth, 0, boardWidth));
        const y = Math.floor(p5.map(mouseY, 0, screenHeight, 0, boardHeight));
        return { x, y };
    }

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

    // Check if there are some empty cells in the board
    function boardHasFreeSpots() {
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (board[y][x] === 0) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkWinner() {
        // Check if one of the lines has 3 times the same value
        for (let y = 0; y < 3; y++) {
            if (board[y][0] === board[y][1] && board[y][0] === board[y][2]) {
                return board[y][0];
            }
        }
        // Check if one of the colimns has 3 times the same value
        for (let x = 0; x < 3; x++) {
            if (board[0][x] === board[1][x] && board[0][x] === board[2][x]) {
                return board[0][x];
            }
        }
        // Check if the north-west/south-east diagonal has 3 time the same value
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0];
        }
        // Check if the north-easit/south-west diagonal has 3 time the same value
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }
        // If there is no winner but not more free cells it is a draw
        if (!boardHasFreeSpots()) {
            return DRAW;
        }
        // If we still have free cells we can continue the game
        return null;
    }

    function reset() {
        // Empty the winnerSpan text
        if (winnerSpan) {
            winnerSpan.html('');
        }
        // Reset the gameOver protection to allow use to click again
        gameOver = false;
        // Initialize the board with a 3x3 grid filled with zeroes
        board = newBoard();
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

            if (boardHasFreeSpots()) {
                computerRound();
            }

            let winner = checkWinner();
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
