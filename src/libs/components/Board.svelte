<script lang="ts">
    export let grid: number[][][];
</script>

<div class="board">
    <div class="overlay">
        {#each grid as line, y}
            {#each line as cell, x}
                <div class="cell">
                    {#each cell.reverse() as piece}
                        <div
                            class="piece"
                            class:player1={piece > 0}
                            class:player2={piece < 0}
                            class:small-circle={Math.abs(piece) === 1}
                            class:medium-circle={Math.abs(piece) === 2}
                            class:large-circle={Math.abs(piece) === 3}
                        />
                    {/each}
                </div>
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

    .cell {
        border: white solid 1px;
        background-color: black;
        color: red;
        position: relative;
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
