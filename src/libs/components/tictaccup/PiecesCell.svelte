<script lang="ts">
    import type { Piece } from '../services/tictaccup';

    export let pieces: Piece[];
    export let selected = false;
    export let disabledCell = false;
    export let disabledHand = false;
</script>

<button on:click class="cell" class:selected class:disabledHand class:disabledCell>
    {#each [...pieces].reverse() as piece}
        <div
            class="piece"
            class:player1={piece > 0}
            class:player2={piece < 0}
            class:small-circle={Math.abs(piece) === 1}
            class:medium-circle={Math.abs(piece) === 2}
            class:large-circle={Math.abs(piece) === 3}
        >
            {piece}
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

    .disabledHand {
        background-color: #666666;
    }

    .disabledHand.disabledCell {
        background-color: #770a0a;
    }

    .disabledCell {
        background-color: #770a0a;
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
