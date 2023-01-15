<script lang="ts">
    import type { Game } from '../services/tictaccup';

    export let game: Game;
</script>

<h4>Game history</h4>

{#if !game.historyEnabled}
    <p>History recording is not enabled for this game.</p>
{:else}
    <div>
        {#each game.history as record}
            <p>{JSON.stringify(record)}</p>
        {/each}
    </div>
{/if}
