import { checkWinner } from '../../check';
import { copyGame, getGameCurrentHand, getGameOtherHand } from '../../helpers';
import type { Game, Move, PlayerHand } from '../../types';
import { scoreGame, scoreMove } from '../euristics';
import { doMove, getHandsPossibleMoves } from '../helpers';

/*
 * An incomplete minmax with alphabeta pruning strategy without childs ordering
 * https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning
 *
 * Alphabeta gets much more efficient when the child nodes to evaluate are
 * ordered by best choice.
 * This ordering allows the pruning to applied more often.
 *
 * This implementation doesn't order the moves it only relies on the order
 * of getHandsPossibleMoves results which happens to be consitent but is
 * not guaranted to be accurate
 */

type MinMaxResult = {
    score: number;
    move: Move | null;
};
const alphabeta = (
    game: Game,
    hand: PlayerHand,
    depth: number,
    alpha: number,
    beta: number
): MinMaxResult => {
    const moves = getHandsPossibleMoves(game, hand);

    checkWinner(game);
    if (depth === 0 || !moves.length || ['draw', 'winner'].includes(game.state.action)) {
        const score = scoreGame(game);
        return {
            score,
            move: null
        };
    }

    moves.sort((a, b) => {
        return scoreMove(game, hand, b) - scoreMove(game, hand, a);
    });

    if (hand.player === 1) {
        // Maximizing player
        let maxScore = Number.MIN_SAFE_INTEGER;
        let bestResult: MinMaxResult | undefined;

        for (const move of moves) {
            const gameCopy = copyGame(game);
            const handCopy = getGameCurrentHand(gameCopy);
            const otherHandCopy = getGameOtherHand(gameCopy);
            doMove(gameCopy, handCopy, move);

            const result = alphabeta(gameCopy, otherHandCopy, depth - 1, alpha, beta);
            if (maxScore === undefined || result.score >= maxScore) {
                maxScore = result.score;
                bestResult = {
                    score: result.score,
                    move
                };
            }

            if (maxScore > beta) {
                break;
            }

            alpha = Math.max(alpha, maxScore);
        }
        if (!bestResult) {
            throw new Error('no_minmax_result');
        }
        return bestResult;
    }

    //Minimizing player
    let minScore = Number.MAX_SAFE_INTEGER;
    let bestResult: MinMaxResult | undefined;

    for (const move of moves) {
        const gameCopy = copyGame(game);
        const handCopy = getGameCurrentHand(gameCopy);
        const otherHandCopy = getGameOtherHand(gameCopy);
        doMove(gameCopy, handCopy, move);

        const result = alphabeta(gameCopy, otherHandCopy, depth - 1, alpha, beta);
        if (minScore === undefined || result.score <= minScore) {
            minScore = result.score;
            bestResult = {
                score: result.score,
                move
            };
        }

        if (minScore < alpha) {
            break;
        }

        beta = Math.min(beta, minScore);
    }
    if (!bestResult) {
        throw new Error('no_minmax_result');
    }
    return bestResult;
};

export const makeAlphabetaOrderedMove = (game: Game, hand: PlayerHand) => {
    const minmaxResult = alphabeta(game, hand, 4, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    if (!minmaxResult.move) {
        throw new Error('no_move_possible');
    }

    const selectedMove = minmaxResult.move;
    doMove(game, hand, selectedMove);
};
