<script lang="ts">
    export let player: 1 | 2;
    export let playerPieces: number[];
</script>

<div>
    <span>Player {player} pieces</span>
    {#each playerPieces as piece}
        <span>
            {piece}
        </span>
    {/each}
</div>
