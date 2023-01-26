// https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy

import {
    centerMoveBlockMasks,
    cornerMoveBlockMasks,
    edgeMoveBlockMasks,
    getOpponentPiecesFromBoard,
    getPlayerPiecesFromBoard,
    matchMask,
    playerAligned3,
    spotIsFreeByIndex,
    xyToIndex,
    type Board,
    type BoardCoord,
    type Player
} from '../../game';
import { rotateBoardClockwiseXtimes } from '../helpers';

// The board contains a winning position for the player
export function playerWins(board: Board, player: Player) {
    const pieces = getPlayerPiecesFromBoard(board, player);
    return playerAligned3(pieces);
}

export function moveTargetsCenter(move: BoardCoord) {
    return move?.y === 1 && move?.x === 1;
}

// Check if the move creates two ways to win for the player
// The cases are simplified to reduce the amount of tests to do
//
// First we reduce to 3 cases:
//  If move is center, we just do the checks
//      The check are middle column, middle row and both diagonals
//      The move created a fork if at least two are open
//  If move is corner, rotate the board to put the move on bottom right
//      The checks are bottom row and right column
//      The move created a fork if both are open
//  If move is edge, rotate the board to put the move on bottom
//      The checks are bottom row and middle column
//      The move created a fork if both are open
//
// For each row, colum or diagonal we need to do 2 checks because
// it can be open with either x.o or .xo
// Where o is the target of the move
// x is another piece of the player
// . is a spot where the opponent has not played

export function moveCreatedFork(board: Board, player: Player, move: BoardCoord) {
    const moveAsIndex = xyToIndex(move);

    const playerPieces = getPlayerPiecesFromBoard(board, player);
    const opponentPieces = getOpponentPiecesFromBoard(board, player);

    // Center: Check diagonals, middle column, middle row
    if (moveAsIndex === 4) {
        const openMiddleRow =
            (spotIsFreeByIndex(opponentPieces, 5) && !spotIsFreeByIndex(playerPieces, 3)) ||
            (!spotIsFreeByIndex(playerPieces, 5) && spotIsFreeByIndex(opponentPieces, 3))
                ? 1
                : 0;

        const openMiddleColumn =
            (spotIsFreeByIndex(opponentPieces, 7) && !spotIsFreeByIndex(playerPieces, 1)) ||
            (!spotIsFreeByIndex(playerPieces, 7) && spotIsFreeByIndex(opponentPieces, 1))
                ? 1
                : 0;

        const openNWSE =
            (spotIsFreeByIndex(opponentPieces, 8) && !spotIsFreeByIndex(playerPieces, 0)) ||
            (!spotIsFreeByIndex(playerPieces, 8) && spotIsFreeByIndex(opponentPieces, 0))
                ? 1
                : 0;

        const openNESW =
            (spotIsFreeByIndex(opponentPieces, 6) && !spotIsFreeByIndex(playerPieces, 2)) ||
            (!spotIsFreeByIndex(playerPieces, 6) && spotIsFreeByIndex(opponentPieces, 2))
                ? 1
                : 0;

        return openMiddleRow + openMiddleColumn + openNWSE + openNESW >= 2;
    }

    if (cornerIndices.has(moveAsIndex)) {
        const rotationsToMake = { 0: 0, 2: 3, 6: 1, 8: 2 }[moveAsIndex] || 0;
        const rotated = rotateBoardClockwiseXtimes(board, rotationsToMake);

        const rotatedPlayerPieces = getPlayerPiecesFromBoard(rotated, player);
        const rotatedOpponentPieces = getOpponentPiecesFromBoard(rotated, player);

        const openBottomRow =
            (spotIsFreeByIndex(rotatedOpponentPieces, 2) &&
                !spotIsFreeByIndex(rotatedPlayerPieces, 1)) ||
            (!spotIsFreeByIndex(rotatedPlayerPieces, 2) &&
                spotIsFreeByIndex(rotatedOpponentPieces, 1));

        const openRightColumn =
            (spotIsFreeByIndex(rotatedOpponentPieces, 6) &&
                !spotIsFreeByIndex(rotatedPlayerPieces, 3)) ||
            (!spotIsFreeByIndex(rotatedPlayerPieces, 6) &&
                spotIsFreeByIndex(rotatedOpponentPieces, 3));

        return openBottomRow && openRightColumn;
    }

    if (sideIndices.has(moveAsIndex)) {
        const rotationsToMake = { 1: 0, 3: 1, 5: 3, 7: 2 }[moveAsIndex] || 0;
        const rotated = rotateBoardClockwiseXtimes(board, rotationsToMake);

        const rotatedPlayerPieces = getPlayerPiecesFromBoard(rotated, player);
        const rotatedOpponentPieces = getOpponentPiecesFromBoard(rotated, player);

        const openBottomRow =
            (spotIsFreeByIndex(rotatedOpponentPieces, 2) &&
                !spotIsFreeByIndex(rotatedPlayerPieces, 0)) ||
            (!spotIsFreeByIndex(rotatedPlayerPieces, 2) &&
                spotIsFreeByIndex(rotatedOpponentPieces, 0));

        const openMiddleColumn =
            (spotIsFreeByIndex(rotatedOpponentPieces, 7) &&
                !spotIsFreeByIndex(rotatedPlayerPieces, 4)) ||
            (!spotIsFreeByIndex(rotatedPlayerPieces, 7) &&
                spotIsFreeByIndex(rotatedOpponentPieces, 4));

        return openBottomRow && openMiddleColumn;
    }
    return false;
}

export function moveBlockedOpponent(board: Board, player: Player, move: BoardCoord) {
    const moveAsIndex = xyToIndex(move);

    const playerPieces = getPlayerPiecesFromBoard(board, player);
    const opponentPieces = getOpponentPiecesFromBoard(board, player);

    // Center: Check central row and central column
    if (moveAsIndex === 4) {
        for (const { o, p } of centerMoveBlockMasks) {
            if (matchMask(playerPieces, p) && matchMask(opponentPieces, o)) {
                return true;
            }
        }
    }

    // Corner: Rotate until the move is in the bottom right corner
    // then check for the right colum and the bottom row
    if (cornerIndices.has(moveAsIndex)) {
        const rotationsToMake = { 0: 0, 2: 3, 6: 1, 8: 2 }[moveAsIndex] || 0;
        const rotated = rotateBoardClockwiseXtimes(board, rotationsToMake);

        const rotatedPlayerPieces = getPlayerPiecesFromBoard(rotated, player);
        const rotatedOpponentPieces = getOpponentPiecesFromBoard(rotated, player);
        for (const { o, p } of cornerMoveBlockMasks) {
            if (matchMask(rotatedPlayerPieces, p) && matchMask(rotatedOpponentPieces, o)) {
                return true;
            }
        }
    }

    // Edge: Rotate until the move is in the bottom middle edge
    // then check for the middle colum and the bottom row
    if (sideIndices.has(moveAsIndex)) {
        const rotationsToMake = { 1: 0, 3: 1, 5: 3, 7: 2 }[moveAsIndex] || 0;
        const rotated = rotateBoardClockwiseXtimes(board, rotationsToMake);

        const rotatedPlayerPieces = getPlayerPiecesFromBoard(rotated, player);
        const rotatedOpponentPieces = getOpponentPiecesFromBoard(rotated, player);
        for (const { o, p } of edgeMoveBlockMasks) {
            if (matchMask(rotatedPlayerPieces, p) && matchMask(rotatedOpponentPieces, o)) {
                return true;
            }
        }
    }

    return false;
}

// The indices of the corners are
// 0 (2, 2) SE
// 2 (0, 2) SW
// 6 (2, 0) NE
// 8 (0, 0) NW
// The indices of the sides are
// 1 (1, 2) S
// 3 (2, 1) W
// 5 (0, 1) E
// 7 (1, 0) N
const cornerIndices = new Set([0, 2, 6, 8]);
const sideIndices = new Set([1, 3, 5, 7]);

export function moveTookOppositeCorner(board: Board, player: Player, move: BoardCoord) {
    const moveIndex = xyToIndex(move);
    // If the move is not in a corner it can not have taken an opposite corner
    if (!cornerIndices.has(moveIndex)) {
        return false;
    }

    // The indice of the opposite corner is 8-indice (0->8, 2->6, 6->2, 8->0)
    const oppositeIndex = 8 - moveIndex;

    const opponentPieces = getOpponentPiecesFromBoard(board, player);

    return !spotIsFreeByIndex(opponentPieces, oppositeIndex);
}

export function moveTookCorner(move: BoardCoord) {
    const moveIndex = xyToIndex(move);
    // If the move is not in a corner it can not have taken an opposite corner
    return cornerIndices.has(moveIndex);
}

export function moveTookSide(move: BoardCoord) {
    const moveIndex = xyToIndex(move);
    // If the move is not in a corner it can not have taken an opposite corner
    return sideIndices.has(moveIndex);
}
