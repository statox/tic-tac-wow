import type { Game, PiecePosition, PlayerHand } from '../../types';

export const getPieceFromSelection = (game: Game, hand: PlayerHand, selection: PiecePosition) => {
    if (selection.from === 'board') {
        const stack = game.grid[selection.position.y][selection.position.x];
        return stack[stack.length - 1];
    }
    return hand.pieces[selection.index];
};
