import { getGridCellLastValue } from './service';
import type { Game, Piece } from './types';

export const printGameGrid = (game: Game) => {
    console.log(game.grid.map((l) => JSON.stringify(l)).join('\n'));
};

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
