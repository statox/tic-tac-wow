import type { Game, PlayerHand } from '../../types';
import { doMove, getHandsPossibleMoves } from '../helpers';

import { copyGame } from '../../helpers';
import { checkWinner } from '../../check';
import { makeRandomMove } from './makeRandomMove';

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
