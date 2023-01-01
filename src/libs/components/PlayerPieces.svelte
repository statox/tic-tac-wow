<script lang="ts">
    import PiecesCell from './PiecesCell.svelte';

    export let player: 1 | 2;
    export let playerPieces: number[];
</script>

<span>Player {player} pieces</span>
<div class="overlay">
    {#each playerPieces as piece}
        <PiecesCell pieces={[piece]} />
    {/each}
</div>

<style>
    .overlay {
        display: grid;
        grid-template-columns: repeat(2, 200px);
        grid-template-rows: repeat(3, 200px);
        grid-auto-flow: row;
    }
</style>
