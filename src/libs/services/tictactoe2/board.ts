import { placePlayerPiece, spotIsFree } from './player';
import { Player, type Board, type BoardCoord } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    return {
        player: 0,
        computer: 0
    };
}

export function makeMoveOnBoard(board: Board, player: Player, pos: BoardCoord) {
    if (!isValidMove(board, pos)) {
        throw new Error(
            `Impossible move. player: ${board?.player}, computer: ${
                board?.computer
            }, ${JSON.stringify(pos)} `
        );
    }

    if (player === Player.player) {
        board.player = placePlayerPiece(board.player, pos);
    } else {
        board.computer = placePlayerPiece(board.computer, pos);
    }
}

export function isValidMove(board: Board, pos: BoardCoord) {
    return spotIsFree(board.player, pos) && spotIsFree(board.computer, pos);
}

// Check if there are some empty cells in the board
export function boardHasFreeSpots(board: Board) {
    const combinedPieces = board.player | board.computer;
    if (combinedPieces === 0b111111111) {
        return false;
    }
    return true;
}
