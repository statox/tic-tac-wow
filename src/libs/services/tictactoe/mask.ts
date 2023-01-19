// https://rclayton.silvrback.com/winner-in-tic-tac-toe

const winMasks = [
    // Rows
    0b111000000, 0b000111000, 0b000000111,
    // Columns
    0b100100100, 0b010010010, 0b001001001,
    // NW/SE
    0b100010001,
    // NE/SW
    0b001010100
];

export const checkPlayerWin = (piecesOnBoard: number) => {
    for (const mask of winMasks) {
        if (matchMask(piecesOnBoard, mask)) {
            return true;
        }
    }
    return false;
};

export const matchMask = (piecesOnBoard: number, mask: number) => {
    return (piecesOnBoard & mask) === mask;
};
