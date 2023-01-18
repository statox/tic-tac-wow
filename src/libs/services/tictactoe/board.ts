import { DRAW, type Board } from './types';

// Return a new board filled with zeroes
export function getNewBoard() {
    const board: Board = [];
    for (let y = 0; y < 3; y++) {
        board.push([]);
        for (let x = 0; x < 3; x++) {
            board[board.length - 1].push(0);
        }
    }
    return board;
}

// Check if there are some empty cells in the board
export function boardHasFreeSpots(board: Board) {
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (board[y][x] === 0) {
                return true;
            }
        }
    }
    return false;
}

export function checkWinner(board: Board) {
    // Check if one of the lines has 3 times the same value
    for (let y = 0; y < 3; y++) {
        if (board[y][0] === board[y][1] && board[y][0] === board[y][2]) {
            return board[y][0];
        }
    }
    // Check if one of the colimns has 3 times the same value
    for (let x = 0; x < 3; x++) {
        if (board[0][x] === board[1][x] && board[0][x] === board[2][x]) {
            return board[0][x];
        }
    }
    // Check if the north-west/south-east diagonal has 3 time the same value
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    // Check if the north-easit/south-west diagonal has 3 time the same value
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }
    // If there is no winner but not more free cells it is a draw
    if (!boardHasFreeSpots(board)) {
        return DRAW;
    }
    // If we still have free cells we can continue the game
    return null;
}
