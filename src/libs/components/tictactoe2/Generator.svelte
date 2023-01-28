<script lang="ts">
    import { computerMethods, type ComputerMethodName } from '../../services/tictactoe2/ia';

    import {
        getNewGame,
        makeAutomaticMove,
        Player,
        type Game,
        type GameState
    } from '../../services/tictactoe2';
    import GameInfo from './GameInfo.svelte';

    let games: Game[] = [];
    let computerMethodP1: ComputerMethodName = 'random';
    let computerMethodP2: ComputerMethodName = 'hardcodedRulesComplete';
    let stateFilter: 'all' | GameState | null;
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
        for (let i = 0; i < nbGames; i++) {
            const game = runNewGame();
            games = [game, ...games];
            if (!stats[game.state]) {
                stats[game.state] = 0;
            }
            stats[game.state] += 1;
            stats.total += 1;
        }
    };
</script>

<div>
    <h2>Generator</h2>
    <button on:click={runXGames}>Create games</button>
    <input type="number" bind:value={nbGames} />

    <div>
        <label for="aiType">AI type</label>
        <select id="aiType" bind:value={computerMethodP1}>
            {#each Object.keys(computerMethods) as method}
                <option value={method}>
                    {method}
                </option>
            {/each}
        </select>

        <label for="aiType">AI type</label>
        <select id="aiType" bind:value={computerMethodP2}>
            {#each Object.keys(computerMethods) as method}
                <option value={method}>
                    {method}
                </option>
            {/each}
        </select>
    </div>

    <div>
        <h3>Stats</h3>
        <div class="grid3cols">
            {#each Object.keys(stats).sort() as ending}
                <span>{ending}</span>
                <span>{stats[ending]}</span>
                <span>{(100 * stats[ending]) / stats.total} %</span>
            {/each}
        </div>
    </div>

    <div>
        <h3>Games</h3>
        <label for="stateFilter">Filter state</label>
        <select id="stateFilter" bind:value={stateFilter}>
            {#each ['all', 'player_win', 'computer_win', 'draw', 'over'] as state}
                <option value={state}>
                    {state}
                </option>
            {/each}
        </select>
        {JSON.stringify(stateFilter)}
        {#each games as game}
            {#if stateFilter === 'all' || stateFilter === game.state}
                <GameInfo {game} />
            {/if}
        {/each}
    </div>
</div>

<style>
    .grid3cols {
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-flow: row;
    }
</style>
