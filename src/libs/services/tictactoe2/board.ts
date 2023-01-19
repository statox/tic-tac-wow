import { spotIsFree } from './player';
import type { Board, BoardCoord, Player } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    return {
        player: 0,
        computer: 0
    };
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
