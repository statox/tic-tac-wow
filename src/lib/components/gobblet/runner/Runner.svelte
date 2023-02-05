<script lang="ts">
    import * as async from 'async';
    import { Circle } from 'svelte-loading-spinners';
    import Stats from './Stats.svelte';
    import {
        compareStrats,
        type StratsStats
    } from '../../../services/gobblet/engine/compareStrats';

    import { strategyFunctions } from '../../../services/gobblet/ia';
    import type { Strategy } from '../../../services/gobblet/ia/strategies/types';

    let player1Strat: Strategy = 'random';
    let player2Strat: Strategy = 'random';
    let nbGames = 10;
    let running = false;

    let statsHistory: StratsStats[] = [];
    const startRunner = () => {
        running = true;
        setTimeout(() => {
            const stats = compareStrats(player1Strat, player2Strat, nbGames);
            statsHistory.push(stats);
            statsHistory = statsHistory;
            running = false;
        }, 0);
    };

    const completeRunParams: {
        player1Strat: Strategy;
        player2Strat: Strategy;
    }[] = [
        { player1Strat: 'random', player2Strat: 'random' },
        { player1Strat: 'random', player2Strat: 'win_or_random' },
        { player1Strat: 'win_or_random', player2Strat: 'random' },
        { player1Strat: 'random', player2Strat: 'euristic' },
        { player1Strat: 'euristic', player2Strat: 'random' },
        { player1Strat: 'random', player2Strat: 'minmax' },
        { player1Strat: 'minmax', player2Strat: 'random' },
        { player1Strat: 'random', player2Strat: 'negamax' },
        { player1Strat: 'negamax', player2Strat: 'random' },
        { player1Strat: 'random', player2Strat: 'alphabeta' },
        { player1Strat: 'alphabeta', player2Strat: 'random' },
        { player1Strat: 'random', player2Strat: 'alphabeta_ordered' },
        { player1Strat: 'alphabeta_ordered', player2Strat: 'random' }
    ];

    const startCompleteRunner = () => {
        running = true;
        statsHistory = [];
        // Use async and setTimeout so that the component is updated between each run
        // and the results are shown progressively
        async.each(
            completeRunParams,
            (run, cb) => {
                setTimeout(() => {
                    const stats = compareStrats(run.player1Strat, run.player2Strat, nbGames);
                    statsHistory.push(stats);
                    statsHistory = statsHistory;
                    return cb();
                }, 0);
            },
            () => {
                running = false;
            }
        );
    };
</script>

<h2>Tic Tac Cup - Runner</h2>

<div>
    <label for="nbGames">Number of games to play</label>
    <input id="nbGames" type="number" min="1" disabled={running} bind:value={nbGames} />

    <label for="player1Strat">Player 1 algorithm</label>
    <select id="player1Strat" disabled={running} bind:value={player1Strat}>
        {#each Object.keys(strategyFunctions) as strategy}
            <option value={strategy}>
                {strategy}
            </option>
        {/each}
    </select>

    <label for="player2Strat">Player 2 algorithm</label>
    <select id="player2Strat" disabled={running} bind:value={player2Strat}>
        {#each Object.keys(strategyFunctions) as strategy}
            <option value={strategy}>
                {strategy}
            </option>
        {/each}
    </select>
</div>

<div>
    <span>
        <button on:click={startRunner}>Start runner</button>
        <button on:click={startCompleteRunner}>Start all strats</button>

        {#if running}
            <Circle size="10" color="#FF3E00" unit="px" duration="1s" />
        {/if}
    </span>
</div>

<Stats {statsHistory} />
