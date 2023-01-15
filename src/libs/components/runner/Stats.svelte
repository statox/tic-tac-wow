<script lang="ts">
    import type { StratsStats } from 'src/libs/services/game/engine/compareStrats';

    export let statsHistory: StratsStats[];
</script>

<div class="overlay">
    <span class="grid-header">Game played</span>
    <span class="grid-header">Compared strategies</span>
    <span class="grid-header"> Win rates </span>
    <span class="grid-header">Avg move by game</span>
    <span class="grid-header">Total time</span>

    {#if statsHistory.length}
        {#each [...statsHistory].reverse() as stats}
            <span>{stats.totalGame}</span>
            <span>{stats.p1Strat} vs {stats.p2Strat}</span>
            <div>
                <ul>
                    <li>P1 win: {stats.p1Win} ({stats.p1WinPercent * 100}%)</li>
                    <li>P2 win: {stats.p2Win} ({stats.p2WinPercent * 100}%)</li>
                    <li>Draw: {stats.draw} ({stats.drawPercent * 100}%)</li>
                </ul>
            </div>
            <span>{stats.avgMovesByGame}</span>
            <span>{stats.timeSeconds}</span>
        {/each}
    {/if}
</div>

<style>
    .overlay {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-auto-flow: row;
        padding: 1vh;
    }

    .grid-header {
        font-weight: bold;
        margin-bottom: 2vh;
        padding-bottom: 1vh;
        border-bottom: solid #000 1px;
    }
</style>
