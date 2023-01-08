import { getGridCellLastPlayer, getGridCellLastValue } from '../check';
import type { BoardPosition, Game, Move, Piece, PiecePosition, PlayerHand } from '../types';

export const findAvailableSpotsForPiece = (game: Game, piece: Piece): BoardPosition[] => {
    const available = [];
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            const val = getGridCellLastValue(game.grid, x, y);
            if (!val || val < Math.abs(piece)) {
                available.push({ x, y });
            }
        }
    }
    return available;
};

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

export type Selection =
    | {
          from: 'hand';
          indexInHand: number;
      }
    | {
          from: 'board';
          position: { x: number; y: number };
      };

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

export const getPieceFromSelection = (game: Game, hand: PlayerHand, selection: PiecePosition) => {
    if (selection.from === 'board') {
        const stack = game.grid[selection.position.y][selection.position.x];
        return stack[stack.length - 1];
    }
    return hand.pieces[selection.index];
};
