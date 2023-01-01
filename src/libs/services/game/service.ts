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

export const selectPieceInHand = (hand: PlayerHand, piece: Piece) => {
    hand.pieces.forEach((p) => (p.selected = false));
    piece.selected = true;
    hand.selectedPiece = piece;
};

export const selectCellInBoard = (game: Game, cell: { x: number; y: number }) => {
    console.log('select cell in board');
    console.log(game);
    console.log(cell);
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
        grid,
        player1: makePlayerHand(1),
        player2: makePlayerHand(2)
    };

    console.log(game);

    return game;
};

// export const placePieceOnCell = (piece: number, cell: { x: number; y: number }, game: Game) => {
//     const { x, y } = cell;
//     if (x < 0 || x > 2 || y < 0 || y > 2) {
//         console.error('Invalid cell coordinates', cell);
//         return new Error('INVALID_CELL_COORDINATES');
//     }

//     if (
//         game.grid[y][x].length > 0 &&
//         Math.abs(game.grid[y][x][game.grid[y][x].length - 1]) >= Math.abs(piece)
//     ) {
//         console.error('Cant place', piece, 'over', game.grid[y][x]);
//         return new Error('INVALID_PIECE_SIZE');
//     }

//     game.grid[y][x].push(piece);
// };
