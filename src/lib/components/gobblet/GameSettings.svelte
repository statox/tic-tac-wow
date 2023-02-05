<script lang="ts">
    import { strategyFunctions } from '../../services/gobblet/ia';
    import { gameSettings } from '../../stores';
</script>

<div>
    <button on:click={() => ($gameSettings.player2Auto = !$gameSettings.player2Auto)}>
        {$gameSettings.player2Auto ? 'Human player 2' : 'Computer player 2'}
    </button>
    <select bind:value={$gameSettings.player2Strat}>
        {#each Object.keys(strategyFunctions) as strategy}
            <option value={strategy}>
                {strategy}
            </option>
        {/each}
    </select>
</div>
