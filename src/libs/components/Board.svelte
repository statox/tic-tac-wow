<script lang="ts">
    import type { BoardPosition, Game } from '../services/tictaccup';
    import PiecesCell from './PiecesCell.svelte';

    export let game: Game;
    export let onSelectCell: (cell: BoardPosition) => void;

    const isCellSelected = (cell: BoardPosition) => {
        for (const hand of [game.player1, game.player2]) {
            const { selectedPiece } = hand;
            if (
                selectedPiece?.from === 'board' &&
                selectedPiece.position.x === cell.x &&
                selectedPiece.position.y === cell.y
            ) {
                return true;
            }
        }
        return false;
    };
</script>

<div class="board">
    <div>{JSON.stringify(game.state)}</div>
    <div class="overlay">
        {#each game.grid as line, y}
            {#each line as cell, x}
                <PiecesCell
                    on:click={() => onSelectCell({ x, y })}
                    pieces={cell}
                    selected={isCellSelected({ x, y })}
                />
            {/each}
        {/each}
    </div>
</div>

<style>
    .board {
        width: 600px;
        background-color: black;
    }

    .overlay {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(3, 200px);
        grid-auto-flow: row;
    }
</style>
