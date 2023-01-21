// https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy

import {
    blockMasks,
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

// The board contains a winning position for the player
export function playerWins(board: Board, player: Player) {
    const pieces = getPlayerPiecesFromBoard(board, player);
    return playerAligned3(pieces);
}

// The opponent has two in a row, the player has the third to block the opponent
export function playerBlocksOpponent(board: Board, player: Player) {
    const playerPieces = getPlayerPiecesFromBoard(board, player);
    const opponentPieces = getOpponentPiecesFromBoard(board, player);

    for (const { o, p } of blockMasks) {
        if (matchMask(playerPieces, p) && matchMask(opponentPieces, o)) {
            return true;
        }
    }

    return false;
}

export function moveTargetsCenter(move: BoardCoord) {
    return move?.y === 1 && move?.x === 1;
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
    if (moveIndex instanceof Error) {
        return false;
    }
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
    if (moveIndex instanceof Error) {
        return false;
    }
    // If the move is not in a corner it can not have taken an opposite corner
    if (!cornerIndices.has(moveIndex)) {
        return false;
    }

    return true;
}

export function moveTookSide(move: BoardCoord) {
    const moveIndex = xyToIndex(move);
    if (moveIndex instanceof Error) {
        return false;
    }
    // If the move is not in a corner it can not have taken an opposite corner
    if (!sideIndices.has(moveIndex)) {
        return false;
    }

    return true;
}