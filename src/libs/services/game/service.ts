import type { Game } from './types';

export const getNewGame = (): Game => {
    const grid: number[][][] = [];
    for (let y = 0; y < 3; y++) {
        grid.push([]);
        for (let x = 0; x < 3; x++) {
            grid[grid.length - 1].push([]);
            // grid[grid.length - 1].push([
            //     1 * (Math.random() < 0.5 ? 1 : -1),
            //     2 * (Math.random() < 0.5 ? 1 : -1),
            //     3 * (Math.random() < 0.5 ? 1 : -1)
            // ]);
        }
    }

    grid[0][0] = [1, -2, 3];
    grid[1][1] = [-1, 2, -3];
    grid[2][2] = [1, -2, -3];

    const game = {
        grid,
        player1Pieces: [1, 1, 2, 2, 3, 3],
        player2Pieces: [-1, -1, -2, -2, -3, -3]
    };

    return game;
};
