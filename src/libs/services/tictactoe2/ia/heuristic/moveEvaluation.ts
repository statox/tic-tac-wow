// https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy

import {
    blockMasks,
    getOpponentPiecesFromBoard,
    getPlayerPiecesFromBoard,
    matchMask,
    playerAligned3,
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
