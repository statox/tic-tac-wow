import type { Game, Move, PlayerHand } from '../../types';
import { getHandPossibleSelection, getPieceFromSelection } from '../helpers';
import { findAvailableSpotsForPiece } from './findAvailableSpotsForPiece';

export const getHandsPossibleMoves = (game: Game, hand: PlayerHand): Move[] => {
    const possibleSelections = getHandPossibleSelection(game, hand);
    return possibleSelections.reduce((moves, selection) => {
        const p = getPieceFromSelection(game, hand, selection);
        const spots = findAvailableSpotsForPiece(game, p);
        for (const spot of spots) {
            moves.push({ from: selection, to: spot });
        }
        return moves;
    }, [] as Move[]);
};
