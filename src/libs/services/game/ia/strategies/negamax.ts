import { checkWinner } from '../../check';
import { copyGame, getGameCurrentHand, getGameOtherHand } from '../../helpers';
import type { Game, Move, PlayerHand } from '../../types';
import { scoreGame } from '../euristics';
import { doMove, getHandsPossibleMoves } from '../helpers';

/*
 * The negamax version of minmax
 * https://en.wikipedia.org/wiki/Negamax
 * Sample results, simpler code
 *
 * No pruning is implemented yet so with a depth above 3 the response time
 * gets very long
 */

type MinMaxResult = {
    score: number;
    move: Move | null;
};
const negamax = (game: Game, hand: PlayerHand, depth: number): MinMaxResult => {
    const color = hand.player === 1 ? 1 : -1;
    const moves = getHandsPossibleMoves(game, hand);

    checkWinner(game);
    if (depth === 0 || !moves.length || ['draw', 'winner'].includes(game.state.action)) {
        const score = scoreGame(game) * color;
        return {
            score,
            move: null
        };
    }

    // TODO sort moves by best probably for when we'll do pruning

    // Maximizing player
    let maxScore = Number.MIN_SAFE_INTEGER;
    let bestResult: MinMaxResult | undefined;

    for (const move of moves) {
        const gameCopy = copyGame(game);
        const handCopy = getGameCurrentHand(gameCopy);
        const otherHandCopy = getGameOtherHand(gameCopy);
        doMove(gameCopy, handCopy, move);

        const result = negamax(gameCopy, otherHandCopy, depth - 1);
        result.score = -result.score;
        if (maxScore === undefined || result.score >= maxScore) {
            maxScore = result.score;
            bestResult = {
                score: result.score,
                move
            };
        }
    }
    if (!bestResult) {
        throw new Error('no_minmax_result');
    }
    return bestResult;
};

export const makeNegamaxMove = (game: Game, hand: PlayerHand) => {
    const minmaxResult = negamax(game, hand, 2);

    if (!minmaxResult.move) {
        throw new Error('no_move_possible');
    }

    const selectedMove = minmaxResult.move;
    doMove(game, hand, selectedMove);
};
