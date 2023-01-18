import { type Board, GameResult, BoardCell } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    const board: Board = [];
    for (let y = 0; y < 3; y++) {
        board.push([]);
        for (let x = 0; x < 3; x++) {
            board[board.length - 1].push(BoardCell.EMPTY);
        }
    }
    return board;
}

// Check if there are some empty cells in the board
export function boardHasFreeSpots(board: Board) {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (board[y][x] === BoardCell.EMPTY) {
                return true;
            }
        }
    }
    return false;
}

export function checkWinner(board: Board): GameResult {
    let hasEmptySpot = false;
    // Rows
    for (let y = 0; y < 3; y++) {
        if (board[y][0] === BoardCell.EMPTY) {
            hasEmptySpot = true;
        } else if (board[y][0] === board[y][1] && board[y][0] === board[y][2]) {
            return board[y][0] as unknown as GameResult;
        }
    }
    // Columns
    for (let x = 0; x < 3; x++) {
        if (board[0][x] === BoardCell.EMPTY) {
            hasEmptySpot = true;
        } else if (board[0][x] === board[1][x] && board[0][x] === board[2][x]) {
            return board[0][x] as unknown as GameResult;
        }
    }
    // NW/SE diagonal
    if (board[1][1] === BoardCell.EMPTY) {
        hasEmptySpot = true;
    } else if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0] as unknown as GameResult;
    }
    // NE/SW diagonal
    if (
        board[0][2] !== BoardCell.EMPTY &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0]
    ) {
        return board[0][2] as unknown as GameResult;
    }
    // If there is no winner but not more free cells it is a draw
    if (!hasEmptySpot) {
        return GameResult.DRAW;
    }
    // If we still have free cells we can continue the game
    return GameResult.NOT_OVER;
}
