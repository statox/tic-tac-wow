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
