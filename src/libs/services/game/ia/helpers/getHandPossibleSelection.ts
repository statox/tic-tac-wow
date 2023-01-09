import { getGridCellLastPlayer } from '../../check';
import type { Game, PiecePosition, PlayerHand } from '../../types';

export const getHandPossibleSelection = (game: Game, hand: PlayerHand): PiecePosition[] => {
    const possible: PiecePosition[] = hand.pieces
        .map((_, index) => index)
        .filter((index) => !hand.unselectableIndexes.has(index))
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
