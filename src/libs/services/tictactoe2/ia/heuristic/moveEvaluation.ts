import { getPlayerPiecesFromBoard, playerAligned3, type Board, type Player } from '../../game';

// The board contains a winning position for the player
export function playerWins(board: Board, player: Player) {
    const pieces = getPlayerPiecesFromBoard(board, player);
    return playerAligned3(pieces);
}

// The opponent has two in a row, the player has the third to block the opponent
export function playerBlocksOpponent(board: Board, player: Player) {
    return new Error('not implemented');
}
