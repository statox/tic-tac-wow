import { copyGame } from '../../helpers';
import type { Game, Move, PlayerHand } from '../../types';
import { scoreGame } from '../euristics';
import { doMove, getHandsPossibleMoves } from '../helpers';

export const makeBestMoveByEuristic = (game: Game, hand: PlayerHand) => {
    const moves = getHandsPossibleMoves(game, hand);

    if (!moves.length) {
        throw new Error('no_move_possible');
    }

    const scoredMoves = moves.reduce((scored, move) => {
        const gameCopy = copyGame(game);
        const handCopy = hand.player === 1 ? gameCopy.player1 : gameCopy.player2;
        doMove(gameCopy, handCopy, move);

        const score = scoreGame(gameCopy);
        scored.push({ move, score });
        return scored;
    }, [] as { move: Move; score: number }[]);

    const sortedMoves = [...scoredMoves].sort((a, b) => {
        if (hand.player === 1) {
            return b.score - a.score;
        }
        return a.score - b.score;
    });

    const selectedMove = sortedMoves[0].move;
    doMove(game, hand, selectedMove);
};
