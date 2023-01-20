import { countPlacedPieces, placePlayerPiece, playerAligned3, spotIsFree } from './player';
import { Player, type Board, type BoardCoord, type GameState } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    return {
        player: 0,
        computer: 0
    };
}

export function getGameState(board: Board): GameState {
    if (!isValidBoard(board)) {
        return 'invalid_board';
    }
    const p1Win = playerAligned3(board.player);
    const p2Win = playerAligned3(board.computer);

    if (p1Win && p2Win) {
        return 'draw';
    }
    if (p1Win) {
        return 'player_win';
    }
    if (p2Win) {
        return 'computer_win';
    }
    return 'not_over';
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

export function isValidBoard(board: Board) {
    // Both players played on the same spot
    if ((board.player & board.computer) !== 0) {
        return false;
    }
    // There is more than 1 piece difference between player
    const playerCount = countPlacedPieces(board.player);
    const computerCount = countPlacedPieces(board.computer);

    if (Math.abs(playerCount - computerCount) > 1) {
        return false;
    }
    return true;
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