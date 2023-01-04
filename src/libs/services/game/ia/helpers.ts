import { getGridCellLastPlayer, getGridCellLastValue } from '../check';
import type { Game, Piece, PlayerHand } from '../types';

export const findAvailableSpotsForPiece = (game: Game, piece: Piece) => {
    const available = [];
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            const val = getGridCellLastValue(game.grid, x, y);
            if (!val || val < Math.abs(piece.value)) {
                available.push({ x, y });
            }
        }
    }
    return available;
};

export const getHandsPossibleMoves = (game: Game, hand: PlayerHand) => {
    const possibleSelections = getHandPossibleSelection(game, hand);
    const possibleMoves = possibleSelections.reduce((moves, selection) => {
        const p = getPieceFromSelection(game, selection);
        const spots = findAvailableSpotsForPiece(game, p);
        if (spots.length) {
            moves.set(selection, spots);
        }
        return moves;
    }, new Map());
    return possibleMoves;
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

export const getHandPossibleSelection = (game: Game, hand: PlayerHand): Selection[] => {
    const possible: Selection[] = hand.pieces.map((_, indexInHand) => {
        return { indexInHand, from: 'hand' };
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

export const getPieceFromSelection = (game: Game, selection: Selection) => {
    if (selection.from === 'board') {
        const stack = game.grid[selection.position.y][selection.position.x];
        return stack[stack.length - 1];
    }
    const hand = game.state.player === 1 ? game.player1 : game.player2;
    return hand.pieces[selection.indexInHand];
};
