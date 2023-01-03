import { printGameGrid } from './helpers';
import type { StateAction } from './state-machine';
import type { Game, Piece, Player, PlayerHand } from './types';

const makePlayerHand = (player: Player): PlayerHand => {
    const multiplier = player === 1 ? 1 : -1;
    const pieces = [1, 1, 2, 2, 3, 3].map((value) => {
        return { value: value * multiplier, selected: false };
    });

    return {
        player,
        pieces
    };
};

export const selectPieceInHand = (game: Game, hand: PlayerHand, piece: Piece) => {
    if (game.state.player !== hand.player || game.state.action !== 'select1') {
        return;
    }
    hand.pieces.forEach((p) => (p.selected = false));
    piece.selected = true;
    hand.selectedPiece = piece;
    game.state.action = 'select2';
};

export const selectCellInBoard = (game: Game, cell: { x: number; y: number }) => {
    console.log('selectCellInBoard');
    if (game.state.action !== 'select2') {
        console.log('invalid state action');
        return;
    }

    const hand = game.state.player === 1 ? game.player1 : game.player2;
    if (!hand.selectedPiece) {
        console.log('no selected piece');
        return;
    }
    const { x, y } = cell;

    const lastOnStack = game.grid[y][x][game.grid[y][x].length - 1];
    if (Math.abs(lastOnStack?.value || 0) >= Math.abs(hand.selectedPiece.value)) {
        console.log('invalid board cell');
        return;
    }

    game.grid[y][x].push({ ...hand.selectedPiece });

    const pieceIndex = hand.pieces.findIndex((p) => p.selected);
    hand.pieces.splice(pieceIndex, 1);
    hand.selectedPiece = undefined;

    game.state.action = 'select1';
    game.state.player = game.state.player === 1 ? 2 : 1;

    console.log(game.grid);
    checkWinner(game);
};

export const getNewGame = (): Game => {
    const grid: Piece[][][] = [];
    for (let y = 0; y < 3; y++) {
        grid.push([]);
        for (let x = 0; x < 3; x++) {
            grid[grid.length - 1].push([]);
        }
    }

    const game = {
        state: {
            player: 1 as Player,
            action: 'select1' as StateAction
        },
        grid,
        player1: makePlayerHand(1),
        player2: makePlayerHand(2)
    };

    return game;
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

export const getGridCellLastValue = (grid: Piece[][][], x: number, y: number): number | null => {
    if (x < 0 || y < 0 || x > 2 || y > 2) {
        throw new Error(`Invalid coordinates ${x},${y}`);
    }

    if (!grid[y][x].length) {
        return null;
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

    printGameGrid(game);

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
