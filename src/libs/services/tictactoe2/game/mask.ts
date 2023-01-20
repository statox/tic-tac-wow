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

// Mask describing the situations where the player (p) blocks an
// alignment of 2 of the opponent (o) pieces
export const blockMasks = [
    // OXX on 3 rows
    {
        p: 0b100000000,
        o: 0b011000000
    },
    {
        p: 0b000100000,
        o: 0b000011000
    },
    {
        p: 0b000000100,
        o: 0b000000011
    },
    // XOX on 3 rows
    {
        p: 0b010000000,
        o: 0b101000000
    },
    {
        p: 0b000010000,
        o: 0b000101000
    },
    {
        p: 0b000000010,
        o: 0b000000101
    },
    // XXO on 3 rows
    {
        p: 0b001000000,
        o: 0b110000000
    },
    {
        p: 0b000001000,
        o: 0b000110000
    },
    {
        p: 0b000000001,
        o: 0b000000110
    },
    // OXX vertical on 3 columns
    {
        p: 0b100000000,
        o: 0b000100100
    },
    {
        p: 0b010000000,
        o: 0b000010010
    },
    {
        p: 0b001000000,
        o: 0b000001001
    },
    // XOX vertical on 3 columns
    {
        p: 0b000100000,
        o: 0b100000100
    },
    {
        p: 0b000010000,
        o: 0b010000010
    },
    {
        p: 0b000001000,
        o: 0b001000001
    },
    // XXO vertical on 3 columns
    {
        p: 0b000000100,
        o: 0b100100000
    },
    {
        p: 0b000000010,
        o: 0b010010000
    },
    {
        p: 0b000000001,
        o: 0b001001000
    },
    // NW/SE
    {
        // OXX
        p: 0b100000000,
        o: 0b000010001
    },
    {
        // XOX
        p: 0b000010000,
        o: 0b100000001
    },
    {
        // XXO
        p: 0b000000001,
        o: 0b100010000
    },
    // NE/SW
    {
        // OXX
        p: 0b001000000,
        o: 0b000010100
    },
    {
        // XOX
        p: 0b000010000,
        o: 0b001000100
    },
    {
        // XXO
        p: 0b000000100,
        o: 0b001010000
    }
];

export const matchMask = (piecesOnBoard: number, mask: number) => {
    return (piecesOnBoard & mask) === mask;
};
