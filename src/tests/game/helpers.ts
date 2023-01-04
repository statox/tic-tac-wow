import { getNewGame } from '../../libs/services/game';

export const convertFixtureGridToGame = (grid: number[][][]) => {
    const game = getNewGame();
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            game.grid[y][x] = grid[y][x].map((value) => {
                return { value, selected: false };
            });
        }
    }

    return game;
};

export const convertFixtureGridAndHandsToGame = (
    grid: number[][][],
    p1: number[],
    p2: number[]
) => {
    const game = getNewGame();
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            game.grid[y][x] = grid[y][x].map((value) => {
                return { value, selected: false };
            });
        }
    }
    game.player1.pieces = p1.map((value) => {
        return { value, selected: false };
    });
    game.player2.pieces = p2.map((value) => {
        return { value, selected: false };
    });

    return game;
};
