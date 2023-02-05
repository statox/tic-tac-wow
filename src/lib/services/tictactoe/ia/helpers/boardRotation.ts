import {
    placePlayerPieceByIndex,
    spotIsFreeByIndex,
    type Board,
    type PlayerPieces
} from '../../game';

// Clockwise rotation
//
// 8 | 7 | 6   becomes 2 | 5 | 8
// ---------           ---------
// 5 | 4 | 3           1 | 4 | 7
// ---------           ---------
// 2 | 1 | 0           0 | 3 | 6
const clockwise = [2, 5, 8, 1, 4, 7, 0, 3, 6];
export function rotatePiecesClockwise(pieces: PlayerPieces): PlayerPieces {
    let rotated = 0;

    clockwise.forEach((newIndex, index) => {
        if (!spotIsFreeByIndex(pieces, index)) {
            rotated = placePlayerPieceByIndex(rotated, newIndex);
        }
    });
    return rotated;
}

export function rotateBoardClockwiseXtimes(board: Board, x: number): Board {
    if (x < 0) {
        throw new Error('Cant rotate a negative amount of times');
    }
    if (x === 0) {
        return { ...board };
    }
    // Dont rotate more than 3 times
    x = x % 4;
    const rotated = { ...board };
    for (let i = 0; i < x; i++) {
        rotated.player = rotatePiecesClockwise(rotated.player);
        rotated.computer = rotatePiecesClockwise(rotated.computer);
    }
    return rotated;
}

// Vertical symetry
//
// 8 | 7 | 6 becomes 6 | 7 | 8
// ---------         ---------
// 5 | 4 | 3         3 | 4 | 5
// ---------         ---------
// 2 | 1 | 0         0 | 1 | 2
const verticalSymetry = [2, 1, 0, 5, 4, 3, 8, 7, 6];
export function symetryPiecesVertical(pieces: PlayerPieces): PlayerPieces {
    let symetry = 0;

    verticalSymetry.forEach((newIndex, index) => {
        if (!spotIsFreeByIndex(pieces, index)) {
            symetry = placePlayerPieceByIndex(symetry, newIndex);
        }
    });
    return symetry;
}

// Horizontal symetry
//
// 8 | 7 | 6 becomes 2 | 1 | 0
// ---------         ---------
// 5 | 4 | 3         5 | 4 | 3
// ---------         ---------
// 2 | 1 | 0         8 | 7 | 6
const horizontalSymetry = [6, 7, 8, 3, 4, 5, 0, 1, 2];
export function symetryPiecesHorizontal(pieces: PlayerPieces): PlayerPieces {
    let symetry = 0;

    horizontalSymetry.forEach((newIndex, index) => {
        if (!spotIsFreeByIndex(pieces, index)) {
            symetry = placePlayerPieceByIndex(symetry, newIndex);
        }
    });
    return symetry;
}

export function piecesAreEquivalent(p1: PlayerPieces, p2: PlayerPieces) {
    let rotated = p2;
    if (p1 === symetryPiecesVertical(p2)) {
        return true;
    }
    if (p1 === symetryPiecesHorizontal(p2)) {
        return true;
    }
    for (let i = 0; i < 4; i++) {
        rotated = rotatePiecesClockwise(rotated);
        if (p1 === rotated) {
            return true;
        }
    }
    return false;
}

export function boardAreEquivalent(b1: Board, b2: Board) {
    return (
        piecesAreEquivalent(b1.player, b2.player) && piecesAreEquivalent(b1.computer, b2.computer)
    );
}
