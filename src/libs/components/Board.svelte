<script lang="ts">
    import type { Game } from '../services/game';
    import PiecesCell from './PiecesCell.svelte';

    export let game: Game;
    export let onSelectCell: (x: number, y: number) => void;
</script>

<div class="board">
    <div class="overlay">
        {#each game.grid as line, y}
            {#each line as cell, x}
                <PiecesCell
                    on:click={() => onSelectCell(x, y)}
                    pieces={cell}
                    disabled={false}
                    selected={cell[cell.length - 1]?.selected}
                />
            {/each}
        {/each}
    </div>
</div>

<style>
    .board {
        width: 600px;
        background-color: black;
    }

    .overlay {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(3, 200px);
        grid-auto-flow: row;
    }
</style>
