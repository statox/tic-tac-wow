import { getGridCellLastValue } from '../../check';
import type { BoardPosition, Game, Piece } from '../../types';

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
