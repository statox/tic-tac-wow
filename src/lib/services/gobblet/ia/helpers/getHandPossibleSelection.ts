import { getGridCellLastPlayer } from '../../check';
import type { Game, PiecePosition, PlayerHand } from '../../types';

export const getHandPossibleSelection = (game: Game, hand: PlayerHand): PiecePosition[] => {
    const possible: PiecePosition[] = hand.pieces
        .map((_, index) => index)
        .filter((index) => {
            // Avoid selecting twice the same value from hand
            if (hand.unselectableIndexes.has(index)) {
                return false;
            }
            if (index === 1 && !hand.unselectableIndexes.has(0)) {
                return false;
            }
            if (index === 3 && !hand.unselectableIndexes.has(2)) {
                return false;
            }
            if (index === 5 && !hand.unselectableIndexes.has(4)) {
                return false;
            }
            return true;
        })
        .map((index) => {
            return { index, from: 'hand' };
        });

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (getGridCellLastPlayer(game.grid, x, y) === hand.player) {
                possible.push({
                    from: 'board',
                    position: { x, y }
                });
            }
        }
    }
    return possible;
};
