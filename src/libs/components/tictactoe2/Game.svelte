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

    let game: Game;
    let currentPlayer: Player;
    let secondsBeforeReset: number;
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
                makeAutomaticMove(game, Player.computer);
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
        <span>Restarting in {secondsBeforeReset} seconds</span>
    {/if}
    {#if game.board}
        <BoardCanvas board={game.board} {onClick} />
        <GameInfo {game} />
        <BoardInfo board={game.board} lastMove={{ x: 1, y: 1 }} />
    {/if}
</div>
