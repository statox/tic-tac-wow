import type { Game } from './types';

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
