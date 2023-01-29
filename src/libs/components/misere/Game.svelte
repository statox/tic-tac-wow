<script lang="ts">
    import {
        makeAutomaticMove,
        makeManualMove,
        Player,
        xyToIndex,
        type BoardCoord,
        type Game
    } from '../../services/tictactoe';
    import { getNewGame } from '../../services/misere';
    import BoardInfo from '../tictactoe/BoardInfo.svelte';
    import BoardCanvas from '../tictactoe/BoardCanvas.svelte';
    import GameInfo from '../tictactoe/GameInfo.svelte';
    import type { ComputerMethodName } from 'src/libs/services/tictactoe/ia';

    let game: Game;
    let currentPlayer: Player;
    let secondsBeforeReset: number;
    let computerMethod: ComputerMethodName = 'minmax';
    let player2start = false;

    reset();

    function reset() {
        game = getNewGame(player2start ? Player.computer : Player.player);
        if (player2start) {
            makeAutomaticMove(game, Player.computer, computerMethod);
        }

        currentPlayer = game.currentPlayer;
        player2start = !player2start;
    }

    const turn = (player1Method: ComputerMethodName | 'manual', boardPos?: BoardCoord) => {
        if (currentPlayer !== Player.player) {
            return;
        }

        if (player1Method === 'manual') {
            if (!boardPos) {
                return;
            }
            makeManualMove(game, Player.player, xyToIndex(boardPos));
        } else {
            makeAutomaticMove(game, Player.player, player1Method);
        }
        game = game;
        currentPlayer = game.currentPlayer;

        setTimeout(() => {
            makeAutomaticMove(game, Player.computer, computerMethod);
            game = game;
            currentPlayer = game.currentPlayer;

            if (game.state !== 'not_over') {
                secondsBeforeReset = 4;
                const resetInterval = setInterval(() => {
                    secondsBeforeReset--;
                    if (secondsBeforeReset === 0) {
                        reset();
                        clearInterval(resetInterval);
                    }
                }, 1000);
            }
        }, 500);
    };

    const onClick = (player1Method: ComputerMethodName | 'manual', boardPos?: BoardCoord) => {
        turn(player1Method, boardPos);
    };
</script>

<h2>Game</h2>
<div>
    {#if secondsBeforeReset > 0}
        <p>Restarting in {secondsBeforeReset} seconds</p>
    {/if}

    <label for="aiType">AI type</label>
    <select id="aiType" bind:value={computerMethod}>
        {#each ['random', 'minmax'] as method}
            <option value={method}>
                {method}
            </option>
        {/each}
    </select>

    <div>
        <span>Player automatic move</span>
        <ul>
            <li><button on:click={() => onClick('random')}>Random move</button></li>
            <li><button on:click={() => onClick('minmax')}>minmax</button></li>
        </ul>
    </div>

    {#if game.board}
        <div class="grid2colsResponsive">
            <BoardCanvas
                board={game.board}
                dimensionPx={{ width: 400, height: 400 }}
                {onClick}
                highlightMouse={true}
            />
            <BoardInfo board={game.board} />
        </div>
        <GameInfo {game} />
    {/if}
</div>

<style>
    /* https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/ */
    .grid2colsResponsive {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, auto));
        grid-auto-flow: row;
    }
</style>
