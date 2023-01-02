<script lang="ts">
    import type { Piece, PlayerHand } from '../services/game';

    import PiecesCell from './PiecesCell.svelte';

    export let hand: PlayerHand;
    export let onSelectPiece: (hand: PlayerHand, piece: Piece) => void;
</script>

<span>Player {hand.player}</span>

<div class="overlay">
    {#each hand.pieces as piece}
        <PiecesCell
            on:click={() => onSelectPiece(hand, piece)}
            pieces={[piece]}
            selected={piece.selected}
        />
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
