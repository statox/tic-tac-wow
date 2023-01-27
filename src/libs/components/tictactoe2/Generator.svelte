<script lang="ts">
    import { computerMethods, type ComputerMethodName } from '../../services/tictactoe2/ia';

    import { getNewGame, makeAutomaticMove, Player, type Game } from '../../services/tictactoe2';
    import GameInfo from './GameInfo.svelte';

    let games: Game[] = [];
    let computerMethodP1: ComputerMethodName = 'random';
    let computerMethodP2: ComputerMethodName = 'hardcodedRulesComplete';

    const runNewGame = () => {
        const game = getNewGame();
        while (game.state === 'not_over') {
            makeAutomaticMove(game, Player.player, computerMethodP1);
            makeAutomaticMove(game, Player.computer, computerMethodP2);
        }
        games = [game, ...games];
    };

    const resetGames = () => {
        games = [];
    };
</script>

<div>
    <h2>Generator</h2>
    <button on:click={resetGames}>Delete games</button>
    <button on:click={runNewGame}>Create game</button>

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
        {#each games as game}
            {#if game.board}
                <GameInfo {game} />
            {/if}
        {/each}
    </div>
</div>
