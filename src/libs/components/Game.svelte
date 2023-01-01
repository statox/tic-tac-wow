<script lang="ts">
    import { getNewGame, placePieceOnCell } from '../services/game';
    import Board from './Board.svelte';
    import PlayerPieces from './PlayerPieces.svelte';

    const game = getNewGame();

    let selectedPiece: number;
    let selectedCell: { x: number; y: number };

    const onSelectPiece = (piece: number) => {
        selectedPiece = piece;
    };

    const onSelectCell = (x: number, y: number) => {
        selectedCell = { x, y };
        console.log({ selectedCell });
        placePieceOnCell(selectedPiece, { x, y }, game);
        game.grid = game.grid;
    };
</script>

<span>Hello Game</span>

<div class="d-flex justify-content-center">
    <Board {onSelectCell} grid={game.grid} />
    <PlayerPieces {onSelectPiece} playerPieces={game.player1Pieces} player={1} />
    <PlayerPieces {onSelectPiece} playerPieces={game.player2Pieces} player={2} />
</div>
