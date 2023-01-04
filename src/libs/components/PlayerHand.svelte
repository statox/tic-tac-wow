<script lang="ts">
    import type { Piece, PlayerHand } from '../services/game';

    import PiecesCell from './PiecesCell.svelte';

    export let hand: PlayerHand;
    export let disabled: boolean;
    export let onSelectPiece: (hand: PlayerHand, piece: Piece) => void;
    export let onSelectAuto: (hand: PlayerHand, method: 'random' | 'not_losing') => void;
</script>

<span>Player {hand.player}</span>
{#if !disabled}
    <button on:click={() => onSelectAuto(hand, 'random')}>Pick random</button>
    <button on:click={() => onSelectAuto(hand, 'not_losing')}>Pick not losing</button>
{/if}

<div class="overlay">
    {#each hand.pieces as piece}
        <PiecesCell
            {disabled}
            on:click={() => onSelectPiece(hand, piece)}
            pieces={[piece]}
            selected={piece.selected}
        />
    {/each}
</div>

<style>
    .overlay {
        display: grid;
        grid-template-columns: repeat(6, 200px);
        grid-template-rows: repeat(1, 200px);
        grid-auto-flow: row;
    }
</style>
