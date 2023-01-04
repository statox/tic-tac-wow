import type { Game } from './types';

export const copyGame = (game: Game): Game => {
    return JSON.parse(JSON.stringify(game));
};

export const printGameGrid = (game: Game, message?: string, showFull?: true) => {
    message && console.log(message);
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

export const printGameHands = (game: Game, message?: string, showFull?: true) => {
    message && console.log(message);
    for (const hand of [game.player1, game.player2]) {
        if (showFull) {
            console.log(
                `P${hand.player}:`,
                hand.pieces.map((p) => `${p.value}-${p.selected}`),
                hand.selectedPiece
            );
            continue;
        }
        console.log(
            `P${hand.player}:`,
            hand.pieces.map((p) => p.value)
        );
    }
};
