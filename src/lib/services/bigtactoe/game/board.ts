import { playerAligned4, spotIsFree } from './player';
import { Player, type Board, type GameState } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    const board = new Array(16).fill(0);

    return board;
}

export function getPlayerPiecesFromBoard(board: Board, player: Player) {
    return board.reduce((pieces, piece, index) => {
        if (piece === player) {
            pieces.push(index);
        }
        return pieces;
    }, [] as number[]);
}

export function getOpponentPiecesFromBoard(board: Board, player: Player) {
    return board.reduce((pieces, piece, index) => {
        if (piece !== player && piece !== 0) {
            pieces.push(index);
        }
        return pieces;
    }, [] as number[]);
}

export function getGameState(board: Board, ignoreInvalidState?: boolean): GameState {
    if (!ignoreInvalidState && !isValidBoard(board)) {
        return 'invalid_board';
    }
    const p1Win = playerAligned4(board, Player.player);
    const p2Win = playerAligned4(board, Player.computer);

    if (p1Win && p2Win) {
        return 'draw';
    }
    if (p1Win) {
        return 'player_win';
    }
    if (p2Win) {
        return 'computer_win';
    }

    if (!boardHasFreeSpots(board)) {
        return 'over';
    }
    return 'not_over';
}

export function makeMoveOnBoard(board: Board, player: Player, index: number) {
    if (!isValidMove(board, index)) {
        throw new Error(`Impossible move. player: ${player}, board: ${board}, index ${index} `);
    }

    board[index] = player;
}

export function isValidBoard(board: Board) {
    // There is more than 1 piece difference between player
    const playerCount = getPlayerPiecesFromBoard(board, Player.player).length;
    const computerCount = getPlayerPiecesFromBoard(board, Player.computer).length;

    if (Math.abs(playerCount - computerCount) > 1) {
        return false;
    }
    return true;
}

export function isValidMove(board: Board, index: number) {
    return spotIsFree(board, index);
}

// Check if there are some empty cells in the board
export function boardHasFreeSpots(board: Board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 0) {
            return true;
        }
    }
    return false;
}

export function getBoardFreeSpots(board: Board): number[] {
    return board.reduce((pieces, piece, index) => {
        if (piece === 0) {
            pieces.push(index);
        }
        return pieces;
    }, [] as number[]);
}
