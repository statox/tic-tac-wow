import type { Game } from './game-types';

export const getNewGame = (): Game => {
    const grid: number[][] = [];
    for (let y = 0; y < 3; y++) {
        grid.push([]);
        for (let x = 0; x < 3; x++) {
            grid[grid.length - 1].push(0);
        }
    }

    const game = {
        grid
    };

    return game;
};
