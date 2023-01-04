import { printGameGrid } from './helpers';
import type { Game, Piece, Player } from './types';

export const findAvailableSpotsForPiece = (game: Game, piece: Piece) => {
    const available = [];
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            const val = getGridCellLastValue(game.grid, x, y);
            if (!val || val < Math.abs(piece.value)) {
                available.push({ x, y });
            }
        }
    }
    return available;
};

// exported for tests
export const getGridCellLastPlayer = (grid: Piece[][][], x: number, y: number): Player | null => {
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    if (!grid[y][x].length) {
        return null;
    }
    const lastValue = grid[y][x][grid[y][x].length - 1];
    if (lastValue.value > 0) {
        return 1;
    }
    if (lastValue.value < 0) {
        return 2;
    }
    return null;
};

export const getGridCellLastValue = (grid: Piece[][][], x: number, y: number) => {
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    if (!grid[y][x].length) {
        return 0;
    }
    const lastValue = grid[y][x][grid[y][x].length - 1];
    return Math.abs(lastValue.value);
};

// exported for tests
export const cellsAreSamePlayer = (
    grid: Piece[][][],
    cell1: { x: number; y: number },
    cell2: { x: number; y: number }
) => {
    const v1 = getGridCellLastPlayer(grid, cell1.x, cell1.y);
    const v2 = getGridCellLastPlayer(grid, cell2.x, cell2.y);

    return v1 !== null && v1 === v2;
};

// exported for tests
export const checkWinner = (game: Game) => {
    const { grid } = game;

    printGameGrid(game, 'grid in check winner');

    let winner;
    // Check if one of the lines has 3 times the same value
    for (let y = 0; y < 3; y++) {
        if (
            cellsAreSamePlayer(grid, { x: 0, y }, { x: 1, y }) &&
            cellsAreSamePlayer(grid, { x: 0, y }, { x: 2, y })
        ) {
            console.log('winner on row', y);
            winner = getGridCellLastPlayer(grid, 0, y);
        }
    }
    // Check if one of the colimns has 3 times the same value
    for (let x = 0; x < 3; x++) {
        if (
            cellsAreSamePlayer(grid, { x, y: 0 }, { x, y: 1 }) &&
            cellsAreSamePlayer(grid, { x, y: 0 }, { x, y: 2 })
        ) {
            console.log('winner on column', x);
            winner = getGridCellLastPlayer(grid, x, 0);
        }
    }
    // Check if the north-west/south-east diagonal has 3 time the same value
    if (
        cellsAreSamePlayer(grid, { x: 0, y: 0 }, { x: 1, y: 1 }) &&
        cellsAreSamePlayer(grid, { x: 0, y: 0 }, { x: 2, y: 2 })
    ) {
        console.log('winner on NW/SE');
        winner = getGridCellLastPlayer(grid, 0, 0);
    }
    // Check if the north-easit/south-west diagonal has 3 time the same value
    if (
        cellsAreSamePlayer(grid, { x: 0, y: 2 }, { x: 1, y: 1 }) &&
        cellsAreSamePlayer(grid, { x: 0, y: 2 }, { x: 2, y: 0 })
    ) {
        console.log('winner on NE/SW');
        winner = getGridCellLastPlayer(grid, 0, 2);
    }

    if (winner) {
        game.state.player = winner;
        game.state.action = 'winner';
    }
};
