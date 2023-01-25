<script lang="ts">
    import {
        getNewGame,
        makeAutomaticMove,
        makeManualMove,
        Player,
        type BoardCoord,
        type Game
    } from '../../services/tictactoe2';
    import BoardInfo from './BoardInfo.svelte';
    import BoardCanvas from './BoardCanvas.svelte';
    import GameInfo from './GameInfo.svelte';
    import { computerMethods, type ComputerMethodName } from '../../services/tictactoe2/ia';

    let game: Game;
    let currentPlayer: Player;
    let secondsBeforeReset: number;
    let computerMethod: ComputerMethodName = 'hardcodedRules';
    reset();

    function reset() {
        game = getNewGame();
        currentPlayer = game.currentPlayer;
    }

    const onClick = (boardPos: BoardCoord) => {
        if (currentPlayer === Player.player) {
            makeManualMove(game, Player.player, boardPos);
            game = game;
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
        }
    };
</script>

<h2>Game</h2>
<div>
    {#if secondsBeforeReset > 0}
        <p>Restarting in {secondsBeforeReset} seconds</p>
    {/if}

    <select bind:value={computerMethod}>
        {#each Object.keys(computerMethods) as method}
            <option value={method}>
                {method}
            </option>
        {/each}
    </select>

    {#if game.board}
        <BoardCanvas board={game.board} {onClick} />
        <GameInfo {game} />
        <BoardInfo board={game.board} />
    {/if}
</div>
