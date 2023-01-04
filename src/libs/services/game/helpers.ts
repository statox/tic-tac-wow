import { getGridCellLastValue } from './service';
import type { Game, Piece } from './types';

export const printGameGrid = (game: Game, message?: string, showFull?: true) => {
    console.log(message);
    if (!showFull) {
        console.log(
            game.grid.map((l) => l.map((ps) => ps.map((p) => p.value)).join('\t|')).join('\n')
        );
        return;
    }

    console.log(
        game.grid
            .map((l) => l.map((ps) => ps.map((p) => `${p.value}-${p.selected}`)).join('\t|'))
            .join('\n')
    );
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
