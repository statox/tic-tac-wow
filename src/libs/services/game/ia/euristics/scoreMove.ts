import type { Game, Move, PlayerHand } from '../../types';
import { getPieceFromSelection } from '../helpers';

export const scoreMove = (game: Game, hand: PlayerHand, move: Move) => {
    let score = 0;
    if (move.from.from === 'board') {
        score += 10;
    }

    const pieceFrom = getPieceFromSelection(game, hand, move.from);

    score += Math.abs(pieceFrom);

    return score;
};
