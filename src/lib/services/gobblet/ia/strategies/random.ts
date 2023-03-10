import type { Game, PlayerHand } from '../../types';
import { doMove, getHandsPossibleMoves } from '../helpers';

/*
 * Simplest strategy possible
 *  - List the moves availables to the current player
 *  - Pick one randomly
 */
export const makeRandomMove = (game: Game, hand: PlayerHand) => {
    const moves = getHandsPossibleMoves(game, hand);
    if (moves.length === 0) {
        throw new Error('no_move_possible');
    }

    const randMoveIndex = Math.floor(Math.random() * moves.length);
    const move = moves[randMoveIndex];

    doMove(game, hand, move);
};
