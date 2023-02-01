<script lang="ts">
    import { computerMethods, type ComputerMethodName } from '../../services/tictactoe/ia';

    import {
        getNewGame,
        makeAutomaticMove,
        Player,
        type Game,
        type GameState
    } from '../../services/tictactoe';
    import GameInfo from './game/GameInfo.svelte';
    import * as async from 'async';

    let games: Game[] = [];
    let computerMethodP1: ComputerMethodName = 'random';
    let computerMethodP2: ComputerMethodName = 'hardcodedRulesComplete';
    let stateFilter: 'none' | 'all' | GameState | null = 'none';
    let nbGames = 10;

    const runNewGame = () => {
        const game = getNewGame();
        while (game.state === 'not_over') {
            makeAutomaticMove(game, Player.player, computerMethodP1);
            makeAutomaticMove(game, Player.computer, computerMethodP2);
        }
        return game;
    };

    let stats: any = { total: 0 };

    const runXGames = () => {
        games = [];
        stats = { total: 0 };

        async.timesSeries(nbGames, (_, next) => {
            setTimeout(() => {
                const game = runNewGame();
                games = [game, ...games];
                if (!stats[game.state]) {
                    stats[game.state] = 0;
                }
                stats[game.state] += 1;
                stats.total += 1;
                return next();
            }, 0);
        });
    };
</script>

<div>
    <h2>Generator</h2>

    <div class="grid2cols">
        <label for="nbGames"> Games to generate</label>
        <input id="nbGames" type="number" bind:value={nbGames} />

        <label for="playerAiType">Player AI type</label>
        <select id="playerAiType" bind:value={computerMethodP1}>
            {#each Object.keys(computerMethods) as method}
                <option value={method}>
                    {method}
                </option>
            {/each}
        </select>

        <label for="computerAiType">Computer AI type</label>
        <select id="computerAiType" bind:value={computerMethodP2}>
            {#each Object.keys(computerMethods) as method}
                <option value={method}>
                    {method}
                </option>
            {/each}
        </select>

        <button on:click={runXGames}>Create games</button>
    </div>

    <div>
        <h3>Stats</h3>
        <div class="grid3cols">
            {#each Object.keys(stats).sort() as ending}
                <span>{ending}</span>
                <span>{stats[ending]}</span>
                {#if ending !== 'total'}
                    <span>{(100 * stats[ending]) / stats.total} %</span>
                {:else}
                    <span>-</span>
                {/if}
            {/each}
        </div>
    </div>

    <div>
        <h3>Games</h3>
        <label for="stateFilter">Filter state</label>
        <select id="stateFilter" bind:value={stateFilter}>
            {#each ['none', 'all', 'player_win', 'computer_win', 'draw', 'over'] as state}
                <option value={state}>
                    {state}
                </option>
            {/each}
        </select>
        {#each games as game}
            {#if stateFilter === 'all' || stateFilter === game.state}
                <GameInfo {game} />
            {/if}
        {/each}
    </div>
</div>

<style>
    .grid2cols {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-auto-flow: row;
    }
    .grid3cols {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-flow: row;
    }
</style>
