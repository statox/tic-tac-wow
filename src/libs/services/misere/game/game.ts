import { getNewBoard, Player, type Game } from '../../tictactoe';

export const getNewGame = (firstPlayer?: Player): Game => {
    return {
        type: 'misere',
        board: getNewBoard(),
        currentPlayer: firstPlayer ?? Player.player,
        state: 'not_over',
        moveHistory: []
    };
};
