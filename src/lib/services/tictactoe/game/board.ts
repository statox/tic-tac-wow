import {
    countPlacedPieces,
    placePlayerPieceByIndex,
    playerAligned3,
    spotIsFreeByIndex
} from './player';
import { Player, type Board, type GameState } from './types';

// Return a new board filled with zeroes
export function getNewBoard(): Board {
    const board = {
        player: 0,
        computer: 0,
        toString: function (this: Board) {
            return `player ${this.player.toString(2).padStart(9, '0')} computer ${this.computer
                .toString(2)
                .padStart(9, '0')}`;
        }
    };

    return board;
}

export function getPlayerPiecesFromBoard(board: Board, player: Player) {
    if (player === Player.player) {
        return board.player;
    }
    return board.computer;
}

export function getOpponentPiecesFromBoard(board: Board, player: Player) {
    if (player === Player.player) {
        return board.computer;
    }
    return board.player;
}

export function getGameState(board: Board, ignoreInvalidState?: boolean): GameState {
    if (!ignoreInvalidState && !isValidBoard(board)) {
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

    if (!boardHasFreeSpots(board)) {
        return 'over';
    }
    return 'not_over';
}

export function makeMoveOnBoard(board: Board, player: Player, index: number) {
    if (!isValidMove(board, index)) {
        throw new Error(
            `Impossible move. player: ${board?.player}, computer: ${board?.computer}, index ${index} `
        );
    }

    if (player === Player.player) {
        board.player = placePlayerPieceByIndex(board.player, index);
    } else {
        board.computer = placePlayerPieceByIndex(board.computer, index);
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

export function isValidMove(board: Board, index: number) {
    return spotIsFreeByIndex(board.player, index) && spotIsFreeByIndex(board.computer, index);
}

// Check if there are some empty cells in the board
export function boardHasFreeSpots(board: Board) {
    const combinedPieces = board.player | board.computer;
    if (combinedPieces === 0b111111111) {
        return false;
    }
    return true;
}

export function getBoardFreeSpots(board: Board): number[] {
    // Add one 1 at the beginning so that the while loop count them all
    let combinedPieces = board.player | board.computer;

    if (combinedPieces === 0) {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8];
    }

    if (combinedPieces === 0b111111111) {
        return [];
    }

    const availableIndices = [];
    let i = 0;
    while (i < 9) {
        if ((combinedPieces & 1) === 0) {
            availableIndices.push(i);
        }
        i++;
        combinedPieces >>= 1;
    }
    return availableIndices;
}
