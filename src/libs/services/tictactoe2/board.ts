import { xyToIndex } from './coordinates';
import type { Board, BoardCoord, PlayerPieces } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    return {
        player: 0,
        computer: 0
    };
}

export function placePiece(player: PlayerPieces, pos: BoardCoord) {
    const i = xyToIndex(pos);

    return player + 2 ** (8 - i);
}

// Check if there are some empty cells in the board
export function boardHasFreeSpots(board: Board) {
    const combinedPieces = board.player | board.computer;
    if (combinedPieces === 0b111111111) {
        return false;
    }
    return true;
}
