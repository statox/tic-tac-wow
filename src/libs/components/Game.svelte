<script lang="ts">
    import type p5 from 'p5';
    import P5, { type Sketch } from 'p5-svelte';
    import { onDestroy } from 'svelte';
    import { getNewGame } from '../services/game';
    import { drawGame } from '../services/game/drawing';
    import PlayerPieces from './PlayerPieces.svelte';

    let _p5: p5;

    const game = getNewGame();

    const sketch: Sketch = (p5) => {
        p5.setup = () => {
            _p5 = p5;
            const screenDimension = Math.min(p5.windowWidth, p5.windowHeight);
            p5.createCanvas(screenDimension * 0.7, screenDimension * 0.7);
        };
        p5.draw = () => {
            p5.background(0);
            drawGame(p5, game);
        };
    };

    onDestroy(() => {
        _p5?.remove();
    });
</script>

<span>Hello Game</span>

<div class="d-flex justify-content-center">
    <P5 {sketch} />
    <PlayerPieces playerPieces={game.player1Pieces} player={1} />
    <PlayerPieces playerPieces={game.player2Pieces} player={2} />
</div>
