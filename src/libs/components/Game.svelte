<script lang="ts">
    import { getNewGame, placePieceOnCell } from '../services/game';
    import Board from './Board.svelte';
    import PlayerPieces from './PlayerPieces.svelte';

    const game = getNewGame();

    let selectedPiece: number;
    let playerTurn: 1 | 2 = 1;

    const onSelectPiece = (piece: number) => {
        if ((playerTurn === 1 && piece < 0) || (playerTurn === 2 && piece > 0)) {
            return;
        }
        selectedPiece = piece;
    };

    const onSelectCell = (x: number, y: number) => {
        if (selectedPiece === 0) {
            return;
        }
        const result = placePieceOnCell(selectedPiece, { x, y }, game);
        if (result instanceof Error) {
            return;
        }
        game.grid = game.grid;
        selectedPiece = 0;
        playerTurn = playerTurn === 1 ? 2 : 1;
    };
</script>

<div class="d-flex justify-content-center">
    <Board {onSelectCell} grid={game.grid} />
    <span>Player: {playerTurn}</span>
    {#if playerTurn === 1}
        <PlayerPieces {onSelectPiece} playerPieces={game.player1Pieces} player={1} />
        <PlayerPieces {onSelectPiece} playerPieces={game.player2Pieces} player={2} />
    {:else}
        <PlayerPieces {onSelectPiece} playerPieces={game.player2Pieces} player={2} />
        <PlayerPieces {onSelectPiece} playerPieces={game.player1Pieces} player={1} />
    {/if}
</div>
