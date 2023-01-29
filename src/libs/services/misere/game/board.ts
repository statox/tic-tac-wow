import {
    boardHasFreeSpots,
    isValidBoard,
    playerAligned3,
    type Board,
    type GameState
} from '../../tictactoe';

export function getGameState(board: Board, ignoreInvalidState?: boolean): GameState {
    if (!ignoreInvalidState && !isValidBoard(board)) {
        return 'invalid_board';
    }
    // Wins are inverted compared to tic tac toe: player wins if computer aligns 3
    const p1Win = playerAligned3(board.computer);
    const p2Win = playerAligned3(board.player);

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
