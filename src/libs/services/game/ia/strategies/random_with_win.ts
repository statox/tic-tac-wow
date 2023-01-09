import type { Game, PlayerHand } from '../../types';
import { doMove, getHandsPossibleMoves } from '../helpers';

import { copyGame } from '../../helpers';
import { checkWinner } from '../../check';
import { makeRandomMove } from './random';

/*
 * Very simple choice based on the fact that a move can create a win:
 *  - For the current state compute all the possible moves.
 *  - If one of the move allows the player to win, play this move
 *  - If no move is winning select one randomly
 * This strategy is not very good because it doesn't consider the future
 * It will only play a winning move if one is possible.
 * Since it doesn't check the next opponent's move it sometimes play losing moves
 */

export const makeWinningMoveOrRandom = (game: Game, hand: PlayerHand) => {
    const moves = getHandsPossibleMoves(game, hand);

    if (!moves.length) {
        throw new Error('no_move_possible');
    }

    for (const move of moves) {
        const gameCopy = copyGame(game);
        const handCopy = hand.player === 1 ? gameCopy.player1 : gameCopy.player2;

        doMove(gameCopy, handCopy, move);
        checkWinner(gameCopy);
        if (gameCopy.state.action === 'winner' && gameCopy.state.player === hand.player) {
            doMove(game, hand, move);
            return;
        }
    }

    makeRandomMove(game, hand);
};
