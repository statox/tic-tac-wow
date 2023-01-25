<script lang="ts">
    import { onDestroy } from 'svelte';
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import {
        drawBoard,
        screenCoordsToGridCoords,
        type Board,
        type BoardCoord
    } from '../../services/tictactoe2';

    export let board: Board;
    export let onClick: (b: BoardCoord) => void;

    let _p5: p5;

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            // Create the canvas and put it in its div
            p5.createCanvas(400, 400);
        };
        p5.draw = () => {
            p5.background(0);
            drawBoard(p5, board);
        };
        p5.mousePressed = () => {
            if (p5.mouseX < 0 || p5.mouseX > p5.width || p5.mouseY < 0 || p5.mouseY > p5.height) {
                return;
            }
            onClick(screenCoordsToGridCoords(p5));
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<div>
    {#if board}
        <P5 {sketch} />
    {:else}
        <p>Board is undefined {JSON.stringify(board)}</p>
    {/if}
</div>
