import type { Game, Move, PlayerHand } from '../../types';
import { getPieceFromSelection } from '../helpers';

export const scoreMove = (game: Game, hand: PlayerHand, move: Move) => {
    let score = 0;
    if (move.from.from === 'board') {
        score += 10;
    }

    const pieceFrom = getPieceFromSelection(game, hand, move.from);

    score += Math.abs(pieceFrom);

    // Center
    if (move.to.x === 1 && move.to.y === 1) {
        score += 5;
    }
    // Corner
    if (
        (move.to.x === 0 && move.to.y === 0) ||
        (move.to.x === 2 && move.to.y === 0) ||
        (move.to.x === 0 && move.to.y === 2) ||
        (move.to.x === 2 && move.to.y === 2)
    ) {
        score += 3;
    }

    return score;
};
