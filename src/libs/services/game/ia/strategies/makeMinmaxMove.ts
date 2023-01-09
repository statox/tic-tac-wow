import { checkWinner } from '../../check';
import { copyGame, getGameCurrentHand, getGameOtherHand } from '../../helpers';
import type { Game, Move, PlayerHand } from '../../types';
import { scoreGame } from '../euristics';
import { doMove, getHandsPossibleMoves } from '../helpers';

type MinMaxResult = {
    score: number;
    move: Move | null;
};
const minmax = (game: Game, hand: PlayerHand, depth: number): MinMaxResult => {
    const moves = getHandsPossibleMoves(game, hand);

    checkWinner(game);
    if (depth === 0 || !moves.length || ['draw', 'winner'].includes(game.state.action)) {
        const score = scoreGame(game);
        return {
            score,
            move: null
        };
    }

    // TODO sort moves by best probably for when we'll do pruning

    if (hand.player === 1) {
        // Maximizing player
        let maxScore = Number.MIN_SAFE_INTEGER;
        let bestResult: MinMaxResult | undefined;

        for (const move of moves) {
            const gameCopy = copyGame(game);
            const handCopy = getGameCurrentHand(gameCopy);
            const otherHandCopy = getGameOtherHand(gameCopy);
            doMove(gameCopy, handCopy, move);

            const result = minmax(gameCopy, otherHandCopy, depth - 1);
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
    } else {
        //Minimizing player
        let minScore = Number.MAX_SAFE_INTEGER;
        let bestResult: MinMaxResult | undefined;

        for (const move of moves) {
            const gameCopy = copyGame(game);
            const handCopy = getGameCurrentHand(gameCopy);
            const otherHandCopy = getGameOtherHand(gameCopy);
            doMove(gameCopy, handCopy, move);

            const result = minmax(gameCopy, otherHandCopy, depth - 1);
            if (minScore === undefined || result.score <= minScore) {
                minScore = result.score;
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
    }
};

export const makeMinmaxMove = (game: Game, hand: PlayerHand) => {
    const minmaxResult = minmax(game, hand, 2);

    if (!minmaxResult.move) {
        throw new Error('no_move_possible');
    }

    const selectedMove = minmaxResult.move;
    doMove(game, hand, selectedMove);
};
