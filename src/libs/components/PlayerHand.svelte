<script lang="ts">
    import { selectPieceInHand, type Piece, type PlayerHand } from '../services/game';
    import PiecesCell from './PiecesCell.svelte';

    export let hand: PlayerHand;

    const onSelectPiece = (piece: Piece) => {
        selectPieceInHand(hand, piece);
        hand.pieces = hand.pieces;
    };
</script>

<span>Player {hand.player}</span>

<div class="overlay">
    {#each hand.pieces as piece}
        <PiecesCell
            on:click={() => onSelectPiece(piece)}
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
