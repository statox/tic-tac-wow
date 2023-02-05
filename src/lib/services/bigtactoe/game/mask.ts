import type { Board, Player } from './types';

export const winMasks = [
    // Rows
    0b1111000000000000, 0b0000111100000000, 0b0000000011110000, 0b0000000000001111,
    // Columns
    0b1000100010001000, 0b0100010001000100, 0b0010001000100010, 0b0001000100010001,
    // NW/SE
    0b1000010000100001,
    // NE/SW
    0b0001001001001000
];

export const centerMoveBlockMasks = [
    {
        // Central row
        p: 0b000010000,
        o: 0b000101000
    },
    {
        // Central column
        p: 0b000010000,
        o: 0b010000010
    },
    {
        // NWSE
        p: 0b000010000,
        o: 0b100000001
    },
    {
        // NESW
        p: 0b000010000,
        o: 0b001000100
    }
];

export const cornerMoveBlockMasks = [
    {
        // Bottom row
        p: 0b000000001,
        o: 0b000000110
    },
    {
        // Right column
        p: 0b000000001,
        o: 0b001001000
    },
    {
        // NWSE
        p: 0b000000001,
        o: 0b100010000
    }
];

export const edgeMoveBlockMasks = [
    {
        // Bottom row
        p: 0b000000010,
        o: 0b000000101
    },
    {
        // Central column
        p: 0b000000010,
        o: 0b010010000
    }
];

export const playerPiecesAsNumber = (board: Board, player: Player) => {
    return board.reduce((digit: number, piece: number, i: number) => {
        if (piece === player) {
            digit = digit + 2 ** i;
        }
        return digit;
    }, 0);
};

export const matchMask = (board: Board, player: Player, mask: number) => {
    const playerAsNumber = playerPiecesAsNumber(board, player);
    return (playerAsNumber & mask) === mask;
};
