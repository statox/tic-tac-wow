import type { Game, Piece, PieceStack, Player } from './types';

export const getGridCellPiece = (grid: PieceStack[][], x: number, y: number): Piece | null => {
    const stack = grid[y][x];
    if (!stack.length) {
        return null;
    }

    return stack[stack.length - 1];
};
// exported for tests
export const getGridCellLastPlayer = (grid: Piece[][][], x: number, y: number): Player | null => {
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    const piece = getGridCellPiece(grid, x, y);

    if (piece === null) {
        return null;
    }
    if (piece > 0) {
        return 1;
    }
    return 2;
};

export const getGridCellLastValue = (grid: Piece[][][], x: number, y: number) => {
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    const piece = getGridCellPiece(grid, x, y);
    if (piece === null) {
        return 0;
    }
    return Math.abs(piece);
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

    const wins = new Set<Player | null>();
    // Check if one of the lines has 3 times the same value
    for (let y = 0; y < 3; y++) {
        if (
            cellsAreSamePlayer(grid, { x: 0, y }, { x: 1, y }) &&
            cellsAreSamePlayer(grid, { x: 0, y }, { x: 2, y })
        ) {
            const winner = getGridCellLastPlayer(grid, 0, y);
            wins.add(winner);
        }
    }
    // Check if one of the colimns has 3 times the same value
    for (let x = 0; x < 3; x++) {
        if (
            cellsAreSamePlayer(grid, { x, y: 0 }, { x, y: 1 }) &&
            cellsAreSamePlayer(grid, { x, y: 0 }, { x, y: 2 })
        ) {
            const winner = getGridCellLastPlayer(grid, x, 0);
            wins.add(winner);
        }
    }
    // Check if the north-west/south-east diagonal has 3 time the same value
    if (
        cellsAreSamePlayer(grid, { x: 0, y: 0 }, { x: 1, y: 1 }) &&
        cellsAreSamePlayer(grid, { x: 0, y: 0 }, { x: 2, y: 2 })
    ) {
        const winner = getGridCellLastPlayer(grid, 0, 0);
        wins.add(winner);
    }
    // Check if the north-easit/south-west diagonal has 3 time the same value
    if (
        cellsAreSamePlayer(grid, { x: 0, y: 2 }, { x: 1, y: 1 }) &&
        cellsAreSamePlayer(grid, { x: 0, y: 2 }, { x: 2, y: 0 })
    ) {
        const winner = getGridCellLastPlayer(grid, 0, 2);
        wins.add(winner);
    }

    wins.delete(null);
    if (wins.size === 1) {
        game.state.player = [...wins.values()][0] as Player;
        game.state.action = 'winner';
        return;
    }
    if (wins.size === 2) {
        game.state.player = 1;
        game.state.action = 'draw';
        return;
    }
};
