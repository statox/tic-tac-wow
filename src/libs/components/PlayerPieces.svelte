<script lang="ts">
    import PiecesCell from './PiecesCell.svelte';

    export let player: 1 | 2;
    export let playerPieces: number[];
    export let onSelectPiece: (piece: number) => void;
</script>

<span>Player {player} pieces</span>
<div class="overlay">
    {#each playerPieces as piece}
        <PiecesCell on:click={() => onSelectPiece(piece)} pieces={[piece]} />
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
