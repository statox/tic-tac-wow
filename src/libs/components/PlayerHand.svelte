<script lang="ts">
    import type { PlayerHand } from '../services/game';
    import type { Strategy } from '../services/game/ia//strategies/types';

    import PiecesCell from './PiecesCell.svelte';

    export let hand: PlayerHand;
    export let disabled: boolean;
    export let onSelectPiece: (hand: PlayerHand, pieceSelectionIndex: number) => void;
    export let onSelectAuto: (hand: PlayerHand, method: Strategy) => void;
</script>

<span>Player {hand.player}</span>
{#if !disabled}
    <button on:click={() => onSelectAuto(hand, 'random')}>Random</button>
    <button on:click={() => onSelectAuto(hand, 'win_or_random')}>Win or random</button>
{/if}

<div class="overlay">
    {#each hand.pieces as piece, index}
        <PiecesCell
            disabled={disabled || hand.unselectableIndexes.has(index)}
            on:click={() => onSelectPiece(hand, index)}
            pieces={[piece]}
            selected={hand.selectedPiece?.from === 'hand' && hand.selectedPiece.index === index}
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
