<script lang="ts">
    export let pieces: number[];
    let selected = false;
</script>

<button on:click class="cell" class:selected>
    {#each pieces.reverse() as piece}
        <div
            class="piece"
            class:player1={piece > 0}
            class:player2={piece < 0}
            class:small-circle={Math.abs(piece) === 1}
            class:medium-circle={Math.abs(piece) === 2}
            class:large-circle={Math.abs(piece) === 3}
        />
    {/each}
</button>

<style>
    .cell {
        border: white 1px solid;
        border-right: white 2px solid;
        background-color: black;
        color: red;
        position: relative;
    }

    .selected {
        background-color: #929393;
    }

    .player1 {
        border: solid #2ae4fc 2px;
    }
    .player2 {
        border: solid #fc1a0a 2px;
    }
    .piece {
        position: absolute;
    }

    .small-circle {
        top: 40px;
        left: 40px;
        height: 120px;
        width: 120px;
        border-radius: 50%;
        display: inline-block;
    }

    .medium-circle {
        top: 25px;
        left: 25px;
        height: 150px;
        width: 150px;
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
