import { computerMethods, type ComputerMethodName } from '../ia';
import { getGameState, getNewBoard, makeMoveOnBoard } from './board';
import { xyToIndex } from './coordinates';
import { Player, type BoardCoord, type Game } from './types';

export const getNewGame = (firstPlayer?: Player): Game => {
    return {
        board: getNewBoard(),
        currentPlayer: firstPlayer ?? Player.player,
        state: 'not_over',
        moveHistory: []
    };
};

function switchCurrentPlayer(game: Game) {
    game.currentPlayer = game.currentPlayer === Player.player ? Player.computer : Player.player;
}

// Put the player value in the board if the user clicked an empty cell
export const makeManualMove = (game: Game, player: Player, pos: BoardCoord) => {
    if (game.state !== 'not_over') {
        return;
    }
    makeMoveOnBoard(game.board, player, xyToIndex(pos));
    game.state = getGameState(game.board);
    game.moveHistory.push({ board: { ...game.board }, moveCoord: pos, player, method: 'manual' });
    switchCurrentPlayer(game);
};

// Randomly select a cell to put the computer value in the board
export const makeAutomaticMove = (game: Game, player: Player, methodName: ComputerMethodName) => {
    if (game.state !== 'not_over') {
        return;
    }
    const method = computerMethods[methodName];
    const pos = method(game.board, player);
    makeMoveOnBoard(game.board, player, xyToIndex(pos));
    game.state = getGameState(game.board);
    game.moveHistory.push({ board: { ...game.board }, moveCoord: pos, player, method: methodName });
    switchCurrentPlayer(game);
};

export const getPlayerLastMove = (game: Game, player: Player) => {
    if (game.moveHistory.length > 0) {
        const lastMove = game.moveHistory[game.moveHistory.length - 1];
        if (lastMove.player === player) {
            return lastMove;
        }
    }
    if (game.moveHistory.length > 1) {
        const penultimateMove = game.moveHistory[game.moveHistory.length - 2];
        if (penultimateMove.player === player) {
            return penultimateMove;
        }
    }
    return null;
};
