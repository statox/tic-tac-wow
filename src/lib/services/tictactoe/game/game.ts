import { computerMethods, type ComputerMethodName } from '../ia';
import { getGameState as getTicTacToeGameState, getNewBoard, makeMoveOnBoard } from './board';
import { getGameState as getMisereGameState } from '../../misere';
import { Player, type Game } from './types';
import { getMoveMinmax as getMisereMoveMinmax } from '../../misere/ia/strategies';

export const getNewGame = (firstPlayer?: Player): Game => {
    return {
        type: 'tictactoe',
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
export const makeManualMove = (game: Game, player: Player, moveAsIndex: number) => {
    if (game.state !== 'not_over') {
        return;
    }
    makeMoveOnBoard(game.board, player, moveAsIndex);
    if (game.type === 'tictactoe') {
        game.state = getTicTacToeGameState(game.board);
    }
    if (game.type === 'misere') {
        game.state = getMisereGameState(game.board);
    }
    game.moveHistory.push({ board: { ...game.board }, moveAsIndex, player, method: 'manual' });
    switchCurrentPlayer(game);
};

// Randomly select a cell to put the computer value in the board
export const makeAutomaticMove = (game: Game, player: Player, methodName: ComputerMethodName) => {
    if (game.state !== 'not_over') {
        return;
    }

    let choice;
    if (game.type === 'tictactoe') {
        const method = computerMethods[methodName];
        choice = method(game.board, player);
        makeMoveOnBoard(game.board, player, choice.move);
        game.state = getTicTacToeGameState(game.board);
    }
    if (game.type === 'misere') {
        let method;
        if (methodName === 'random') {
            method = computerMethods['random'];
        } else {
            method = getMisereMoveMinmax;
        }
        choice = method(game.board, player);
        makeMoveOnBoard(game.board, player, choice.move);
        game.state = getMisereGameState(game.board);
    }
    if (!choice) {
        throw new Error('Couldnt get move');
    }
    game.moveHistory.push({
        board: { ...game.board },
        moveAsIndex: choice.move,
        player,
        method: methodName,
        aiChoice: choice
    });
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
