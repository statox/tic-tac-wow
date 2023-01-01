<script lang="ts">
    import PiecesCell from './PiecesCell.svelte';

    export let grid: number[][][];
</script>

<div class="board">
    <div class="overlay">
        {#each grid as line, y}
            {#each line as cell, x}
                <PiecesCell pieces={cell} />
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
