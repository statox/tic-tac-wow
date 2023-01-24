export const winMasks = [
    // Rows
    0b111000000, 0b000111000, 0b000000111,
    // Columns
    0b100100100, 0b010010010, 0b001001001,
    // NW/SE
    0b100010001,
    // NE/SW
    0b001010100
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

export const matchMask = (piecesOnBoard: number, mask: number) => {
    return (piecesOnBoard & mask) === mask;
};
