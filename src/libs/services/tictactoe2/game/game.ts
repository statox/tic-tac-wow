import { getMoveHardcoded } from '../ia';
import { getGameState, getNewBoard, makeMoveOnBoard } from './board';
import { xyToIndex } from './coordinates';
import { Player, type BoardCoord, type Game } from './types';

export const getNewGame = (): Game => {
    return {
        board: getNewBoard(),
        currentPlayer: Player.player,
        state: 'not_over'
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
    switchCurrentPlayer(game);
};

// Randomly select a cell to put the computer value in the board
export const makeAutomaticMove = (game: Game, player: Player) => {
    if (game.state !== 'not_over') {
        return;
    }
    // const pos = getMoveRandom(board);
    const pos = getMoveHardcoded(game.board, player);
    makeMoveOnBoard(game.board, player, xyToIndex(pos));
    game.state = getGameState(game.board);
    switchCurrentPlayer(game);
};
