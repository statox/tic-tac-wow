<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import {
        drawBoard,
        getNewBoard,
        makeMoveOnBoard,
        Player,
        screenCoordsToGridCoords,
        xyToIndex,
        type Board,
        type BoardCoord
    } from '../../services/tictactoe';
    import BoardInfo from './game/BoardInfo.svelte';

    let _p5: p5;

    let boardHistory: Board[];
    let board: Board; // Holds the 2D array representing our game
    let currentPlayer = Player.player;

    // Put the player value in the board if the user clicked an empty cell
    function manualRound(player: Player, pos: BoardCoord) {
        makeMoveOnBoard(board, player, xyToIndex(pos));
        board = board;

        boardHistory.push({ ...board });
        boardHistory = boardHistory;
        switchCurrentPlayer();
    }

    function switchCurrentPlayer() {
        currentPlayer = currentPlayer === Player.player ? Player.computer : Player.player;
    }

    function reset() {
        board = getNewBoard();
        boardHistory = [{ ...board }];
    }

    function previous() {
        if (boardHistory.length <= 1) {
            return;
        }
        boardHistory.pop();
        boardHistory = boardHistory;
        board = { ...boardHistory[boardHistory.length - 1] };
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
            drawBoard(p5, board, {
                drawSelection: true,
                selection: screenCoordsToGridCoords(p5),
                currentPlayer
            });
        };
        p5.mousePressed = () => {
            if (p5.mouseX < 0 || p5.mouseX > p5.width || p5.mouseY < 0 || p5.mouseY > p5.height) {
                return;
            }
            const boardPos = screenCoordsToGridCoords(p5);
            manualRound(currentPlayer, boardPos);
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<h2>Analyzer</h2>
<div>
    <P5 {sketch} />
    <div>
        <h4>Controls</h4>
        <button
            on:click={() => (currentPlayer = Player.player)}
            disabled={currentPlayer === Player.player}>Play O</button
        >
        <button
            on:click={() => (currentPlayer = Player.computer)}
            disabled={currentPlayer === Player.computer}>Play X</button
        >
        <button on:click={previous} disabled={(boardHistory || []).length < 2}>Previous</button>
        <button on:click={reset}>Reset</button>
    </div>
    <BoardInfo {board} />
</div>
