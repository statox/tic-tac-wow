import type { Game } from './types';

export const getNewGame = (): Game => {
    const grid: number[][][] = [];
    for (let y = 0; y < 3; y++) {
        grid.push([]);
        for (let x = 0; x < 3; x++) {
            grid[grid.length - 1].push([]);
        }
    }

    const game = {
        grid,
        player1Pieces: [1, 1, 2, 2, 3, 3],
        player2Pieces: [-1, -1, -2, -2, -3, -3]
    };

    return game;
};

export const placePieceOnCell = (piece: number, cell: { x: number; y: number }, game: Game) => {
    const { x, y } = cell;
    if (x < 0 || x > 2 || y < 0 || y > 2) {
        console.error('Invalid cell coordinates', cell);
        return new Error('INVALID_CELL_COORDINATES');
    }

    if (
        game.grid[y][x].length > 0 &&
        Math.abs(game.grid[y][x][game.grid[y][x].length - 1]) >= Math.abs(piece)
    ) {
        console.error('Cant place', piece, 'over', game.grid[y][x]);
        return new Error('INVALID_PIECE_SIZE');
    }

    game.grid[y][x].push(piece);
};
