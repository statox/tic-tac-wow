<script lang="ts">
    import type { Piece } from '../services/game';

    export let pieces: Piece[];
    export let selected = false;
    export let disabled: boolean;
</script>

<button on:click class="cell" class:selected class:disabled>
    {#each [...pieces].reverse() as piece}
        <div
            class="piece"
            class:player1={piece.value > 0}
            class:player2={piece.value < 0}
            class:small-circle={Math.abs(piece.value) === 1}
            class:medium-circle={Math.abs(piece.value) === 2}
            class:large-circle={Math.abs(piece.value) === 3}
        >
            {piece.value}
        </div>
    {/each}
</button>

<style>
    .cell {
        border: white 1px solid;
        border-right: white 2px solid;
        background-color: black;
        position: relative;
    }

    .selected {
        border: green 8px solid;
        border-right: green 8px solid;
    }

    .disabled {
        background-color: #4b4d4f;
    }

    .player1 {
        border: solid #2ae4fc 2px;
        color: #2ae4fc;
    }
    .player2 {
        border: solid #fc1a0a 2px;
        color: #fc1a0a;
    }
    .piece {
        position: absolute;
    }

    .small-circle {
        top: 50px;
        left: 50px;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        display: inline-block;
    }

    .medium-circle {
        top: 30px;
        left: 30px;
        height: 140px;
        width: 140px;
        border-radius: 50%;
        display: inline-block;
    }

    .large-circle {
        top: 10px;
        left: 10px;
        height: 180px;
        width: 180px;
        border-radius: 50%;
        display: inline-block;
    }
</style>
